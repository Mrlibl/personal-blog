import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          👋 你好，欢迎来到我的博客
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          这里分享我的技术学习心得、项目经验以及生活感悟。希望这些文章能对你有所帮助！
        </p>
      </section>

      {/* Posts section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span>📝</span>
          <span>最新文章</span>
        </h2>
        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-12">
            暂无文章，敬请期待...
          </p>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
