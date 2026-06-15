#!/bin/sh
set -eu

restart_nginx() {
    systemctl start nginx
}

trap restart_nginx EXIT
systemctl stop nginx
/usr/bin/lego \
    --path /etc/lego \
    --email admin@cn.hihoneycomb.com \
    --domains cn.hihoneycomb.com \
    --accept-tos \
    --tls \
    renew \
    --days 30
systemctl start nginx
trap - EXIT
nginx -t
systemctl reload nginx
