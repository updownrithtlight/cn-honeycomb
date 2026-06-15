export type ArticleFaq = {
  question: string;
  answer: string;
};

function markdownToText(value: string) {
  return value
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractArticleFaqs(markdown: string): ArticleFaq[] {
  const faqStart = markdown.search(/^##\s+FAQ\s*$/m);
  if (faqStart < 0) return [];

  const faqSection = markdown.slice(faqStart).replace(/^##\s+FAQ\s*$/m, "");
  const nextSection = faqSection.search(/^##\s+/m);
  const content = nextSection >= 0 ? faqSection.slice(0, nextSection) : faqSection;
  const headings = [...content.matchAll(/^###\s+(.+)$/gm)];

  return headings
    .map((heading, index) => {
      const answerStart = (heading.index ?? 0) + heading[0].length;
      const answerEnd = headings[index + 1]?.index ?? content.length;
      return {
        question: markdownToText(heading[1]),
        answer: markdownToText(content.slice(answerStart, answerEnd))
      };
    })
    .filter((item) => item.question && item.answer);
}

export function formatChineseDate(value: string) {
  const [year, month, day] = value.split("-");
  return `${year} 年 ${Number(month)} 月 ${Number(day)} 日`;
}

export function estimateReadingMinutes(markdown: string) {
  const text = markdownToText(markdown);
  return Math.max(4, Math.ceil(text.length / 500));
}
