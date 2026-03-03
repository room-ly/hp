import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "コラム",
  description:
    "賃貸管理の業務改善に役立つコラムをお届けします。物件管理・家賃管理・オーナー対応・修繕管理のノウハウを紹介。",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      {/* ページヘッダー */}
      <section className="bg-gradient-to-br from-rm-hero-start via-rm-hero-mid to-rm-hero-end px-4 py-16 text-center text-white sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          コラム
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-blue-200">
          賃貸管理の業務改善に役立つ情報をお届けします
        </p>
      </section>

      {/* 記事一覧 */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-rm-border bg-rm-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-rm-text-muted">
                  <span className="rounded-full bg-rm-accent/10 px-3 py-0.5 text-xs font-medium text-rm-accent">
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
                <h2 className="mt-3 text-lg font-bold text-rm-primary sm:text-xl">
                  <Link
                    href={`/column/${post.slug}`}
                    className="transition-colors hover:text-rm-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-rm-text-secondary">
                  {post.description}
                </p>
                <Link
                  href={`/column/${post.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-rm-accent transition-colors hover:text-rm-primary"
                >
                  続きを読む →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
