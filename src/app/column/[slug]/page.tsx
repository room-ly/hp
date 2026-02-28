import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, posts } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Roomly コラム`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://hp.roomly.jp/column/${post.slug}`,
      siteName: "Roomly",
      locale: "ja_JP",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== slug);
  const relatedPosts = allPosts.slice(0, 3);

  // マークダウンをHTMLに変換（簡易）
  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("### ")) return `<h3>${line.slice(4)}</h3>`;
      if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith("**") && line.endsWith("**"))
        return `<p><strong>${line.slice(2, -2)}</strong></p>`;
      if (line.trim() === "") return "";
      return `<p>${line}</p>`;
    })
    .join("\n");

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
              href="/column"
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

      {/* 記事 */}
      <article className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          {/* パンくず */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="transition-colors hover:text-accent">
              トップ
            </Link>
            <span className="mx-2">/</span>
            <Link href="/column" className="transition-colors hover:text-accent">
              コラム
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{post.title}</span>
          </nav>

          {/* メタ情報 */}
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

          {/* タイトル */}
          <h1 className="mt-4 text-2xl font-bold leading-snug text-primary sm:text-3xl">
            {post.title}
          </h1>

          {/* 本文 */}
          <div
            className="prose mt-10"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* CTA */}
          <div className="mt-16 rounded-xl bg-gradient-to-r from-primary to-accent p-8 text-center text-white sm:p-12">
            <h2 className="text-xl font-bold sm:text-2xl">
              Roomlyで賃貸管理をもっとシンプルに
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-blue-100">
              50区画まで無料。クレジットカード不要で、今すぐ始められます。
            </p>
            <a
              href="https://roomly.jp"
              className="mt-6 inline-block rounded-lg bg-white px-8 py-3 font-bold text-primary shadow transition-transform hover:scale-105"
            >
              無料で始める
            </a>
          </div>

          {/* 関連記事 */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-lg font-bold text-primary">関連コラム</h2>
              <div className="mt-6 space-y-4">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/column/${p.slug}`}
                    className="block rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
                  >
                    <p className="text-xs text-gray-500">
                      {p.category} ・{" "}
                      {new Date(p.date).toLocaleDateString("ja-JP")}
                    </p>
                    <p className="mt-1 font-medium text-primary">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

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
