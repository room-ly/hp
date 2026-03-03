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
    title: `${post.title} | コラム`,
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
    <>
      {/* 記事 */}
      <article className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          {/* パンくず */}
          <nav className="mb-8 text-sm text-rm-text-muted">
            <Link href="/" className="transition-colors hover:text-rm-accent">
              トップ
            </Link>
            <span className="mx-2">/</span>
            <Link href="/column" className="transition-colors hover:text-rm-accent">
              コラム
            </Link>
            <span className="mx-2">/</span>
            <span className="text-rm-text-secondary">{post.title}</span>
          </nav>

          {/* メタ情報 */}
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

          {/* タイトル */}
          <h1 className="mt-4 text-2xl font-bold leading-snug text-rm-primary sm:text-3xl">
            {post.title}
          </h1>

          {/* 本文 */}
          <div
            className="prose-rm mt-10"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-rm-primary to-rm-accent p-8 text-center text-white sm:p-12">
            <h2 className="text-xl font-bold sm:text-2xl">
              Roomlyで賃貸管理をもっとシンプルに
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-blue-100">
              10区画まで無料。クレジットカード不要で、今すぐ始められます。
            </p>
            <a
              href="https://roomly.jp"
              className="mt-6 inline-block rounded-xl bg-white px-8 py-3 font-bold text-rm-primary shadow-lg transition-all hover:scale-105"
            >
              無料で始める
            </a>
          </div>

          {/* 関連記事 */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-lg font-bold text-rm-primary">関連コラム</h2>
              <div className="mt-6 space-y-4">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/column/${p.slug}`}
                    className="block rounded-xl border border-rm-border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="text-xs text-rm-text-muted">
                      {p.category} ・{" "}
                      {new Date(p.date).toLocaleDateString("ja-JP")}
                    </p>
                    <p className="mt-1 font-medium text-rm-primary">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
