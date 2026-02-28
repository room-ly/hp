import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "コラム | Roomly",
  description:
    "賃貸管理の業務改善に役立つコラムをお届けします。物件管理・家賃管理・オーナー対応・修繕管理のノウハウを紹介。",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Roomly
          </Link>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <Link
              href="/#features"
              className="transition-colors hover:text-blue-200"
            >
              機能
            </Link>
            <Link
              href="/#pricing"
              className="transition-colors hover:text-blue-200"
            >
              料金
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-blue-200"
            >
              コラム
            </Link>
            <a
              href="https://roomly.jp"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-blue-50"
            >
              ログイン
            </a>
          </nav>
          <div className="flex items-center gap-4 sm:hidden">
            <a
              href="https://roomly.jp"
              className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-primary"
            >
              ログイン
            </a>
          </div>
        </div>
      </header>

      {/* ページヘッダー */}
      <section className="bg-gradient-to-b from-primary to-accent px-4 py-16 text-center text-white sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          コラム
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-blue-100">
          賃貸管理の業務改善に役立つ情報をお届けします
        </p>
      </section>

      {/* 記事一覧 */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-medium text-accent">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-3 text-lg font-bold text-primary sm:text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-primary"
                >
                  続きを読む →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-primary px-4 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-bold tracking-tight">Roomly</p>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <a href="/privacy" className="transition-colors hover:text-white">
                プライバシーポリシー
              </a>
              <a href="/terms" className="transition-colors hover:text-white">
                利用規約
              </a>
              <a href="/legal" className="transition-colors hover:text-white">
                特定商取引法
              </a>
            </nav>
          </div>
          <p className="mt-8 text-center text-xs text-blue-300">
            &copy; 2025 Roomly
          </p>
        </div>
      </footer>
    </div>
  );
}
