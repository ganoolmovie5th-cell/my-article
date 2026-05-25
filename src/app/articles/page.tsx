import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface ArticleMeta {
  title: string;
  date: string;
  slug: string;
}

export default async function ArticlesPage() {
  const articlesDir = path.join(process.cwd(), 'content', 'articles');
  const fileNames = fs.readdirSync(articlesDir);
  const articles: ArticleMeta[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { slug, title: data.title as string, date: data.date as string };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Daftar Artikel</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.slug} className="border-b pb-2">
            <Link href={`/articles/${article.slug}`}> 
              <a className="text-xl text-blue-600 hover:underline">{article.title}</a>
            </Link>
            <p className="text-sm text-gray-500">{article.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
