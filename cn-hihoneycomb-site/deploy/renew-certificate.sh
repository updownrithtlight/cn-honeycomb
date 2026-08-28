#!/bin/sh
set -eu

LEGO_BIN=/usr/local/bin/lego
LEGO_PATH=/etc/lego
DOMAIN=cn.hihoneycomb.com
CERTIFICATE="$LEGO_PATH/certificates/$DOMAIN.crt"
PRIVATE_KEY="$LEGO_PATH/certificates/$DOMAIN.key"
TOKEN_FILE="${CREDENTIALS_DIRECTORY:-}/cloudflare-token"

if [ ! -x "$LEGO_BIN" ]; then
    echo "lego is not installed at $LEGO_BIN" >&2
    exit 1
fi

if [ ! -r "$TOKEN_FILE" ]; then
    echo "Cloudflare systemd credential is unavailable" >&2
    exit 1
fi

before_hash=missing
if [ -f "$CERTIFICATE" ]; then
    before_hash=$(sha256sum "$CERTIFICATE" | cut -d ' ' -f 1)
fi

export CF_DNS_API_TOKEN_FILE="$TOKEN_FILE"
umask 077

"$LEGO_BIN" run \
    --path "$LEGO_PATH" \
    --email admin@cn.hihoneycomb.com \
    --domains "$DOMAIN" \
    --accept-tos \
    --dns cloudflare

test -s "$CERTIFICATE"
test -s "$PRIVATE_KEY"

after_hash=$(sha256sum "$CERTIFICATE" | cut -d ' ' -f 1)
nginx -t

if [ "$before_hash" != "$after_hash" ]; then
    /usr/bin/systemctl reload nginx
fi
