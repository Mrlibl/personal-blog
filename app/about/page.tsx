import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我",
  description: "了解更多关于博客作者的信息",
};

export default function AboutPage() {
  const skills = [
    { category: "前端", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "后端", items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
    { category: "工具", items: ["Git", "Docker", "VS Code", "Figma"] },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Profile section */}
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl shadow-lg">
              👨‍💻
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              关于我
            </h1>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
              全栈开发者 & 技术博主
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              你好！我是一名热爱技术的全栈开发者，专注于 Web 开发领域。我喜欢探索新技术，
              并通过博客分享我的学习经验和思考。
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              在工作之余，我喜欢阅读技术书籍、参与开源项目，以及偶尔旅行探索世界。
            </p>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span>🛠️</span>
          <span>技术栈</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span>📬</span>
          <span>联系我</span>
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            如果你对我的文章有任何疑问，或者想要探讨技术话题，欢迎通过以下方式联系我：
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <span className="text-xl">📧</span>
              <span>example@email.com</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <span className="text-xl">🐙</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Back to blog */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          📝 查看我的文章
        </Link>
      </div>
    </div>
  );
}
