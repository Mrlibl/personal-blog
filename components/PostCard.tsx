import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = format(new Date(post.date), "yyyy年MM月dd日", {
    locale: zhCN,
  });

  return (
    <article className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <time
          dateTime={post.date}
          className="text-xs text-gray-400 dark:text-gray-500"
        >
          {formattedDate}
        </time>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          阅读全文 →
        </Link>
      </div>
    </article>
  );
}
