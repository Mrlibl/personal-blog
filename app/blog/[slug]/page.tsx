import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: "文章未找到" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const formattedDate = format(new Date(post.date), "yyyy年MM月dd日", {
    locale: zhCN,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
      >
        ← 返回首页
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </header>

        <div
          className="prose prose-gray dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:rounded prose-code:px-1 prose-code:py-0.5
            prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:rounded-lg
            prose-blockquote:border-blue-500 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400
            prose-img:rounded-lg prose-img:shadow-md
            prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-td:border prose-td:border-gray-300
            prose-th:p-2 prose-td:p-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          ← 返回首页，查看更多文章
        </Link>
      </div>
    </div>
  );
}
