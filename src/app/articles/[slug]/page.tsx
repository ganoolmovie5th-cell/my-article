import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const articlesDir = path.join(process.cwd(), 'content', 'articles');
  const fullPath = path.join(articlesDir, `${params.slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const dateStr = data.date ? new Date(data.date).toLocaleDateString('id-ID') : '';

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{dateStr}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
