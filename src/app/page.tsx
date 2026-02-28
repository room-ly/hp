import ContactForm from "@/components/ContactForm";

const features = [
  {
    title: "物件管理",
    description:
      "建物・部屋の情報を一元管理。間取り・設備・写真もまとめて。",
  },
  {
    title: "契約管理",
    description:
      "契約の作成から更新・解約まで。特約や条件も見やすく整理。",
  },
  {
    title: "家賃管理",
    description:
      "請求・入金・滞納を一目で。督促のタイミングも見逃さない。",
  },
  {
    title: "修繕管理",
    description:
      "依頼の受付から業者手配、完了報告まで。対応漏れを防ぐ。",
  },
  {
    title: "オーナー送金",
    description:
      "月次の精算・送金明細を自動で。管理費の差し引きも簡単に。",
  },
  {
    title: "レポート",
    description:
      "稼働率・入金率・収支をダッシュボードで。オーナー報告書も自動生成。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="text-xl font-bold tracking-tight">
            Roomly
          </a>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <a href="#features" className="hover:text-blue-200 transition-colors">
              機能
            </a>
            <a href="#pricing" className="hover:text-blue-200 transition-colors">
              料金
            </a>
            <a href="/column" className="hover:text-blue-200 transition-colors">
              コラム
            </a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">
              お問い合わせ
            </a>
            <a
              href="https://roomly.jp"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-blue-50"
            >
              ログイン
            </a>
          </nav>
          {/* モバイルメニュー（簡易版） */}
          <div className="flex items-center gap-4 sm:hidden">
            <a
              href="https://roomly.jp"
              className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-primary"
            >
              ログイン
            </a>
          </div>
        </div>
        {/* モバイルナビ */}
        <nav className="flex justify-center gap-6 border-t border-white/20 px-4 py-2 text-sm sm:hidden">
          <a href="#features" className="hover:text-blue-200">
            機能
          </a>
          <a href="#pricing" className="hover:text-blue-200">
            料金
          </a>
          <a href="/column" className="hover:text-blue-200">
            コラム
          </a>
          <a href="#contact" className="hover:text-blue-200">
            お問い合わせ
          </a>
        </nav>
      </header>

      {/* ヒーロー */}
      <section className="bg-gradient-to-b from-primary to-accent px-4 py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            賃貸管理を、もっとシンプルに。
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-blue-100 sm:text-xl">
            物件・入居者・家賃・修繕——すべてを一つの画面で。
          </p>
          <div className="mt-10">
            <a
              href="https://roomly.jp"
              className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg transition-transform hover:scale-105 sm:text-lg"
            >
              無料で始める
            </a>
            <p className="mt-3 text-sm text-blue-200">
              50区画まで無料 / クレジットカード不要
            </p>
          </div>
        </div>
      </section>

      {/* 機能紹介 */}
      <section id="features" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            必要な機能を、ひとつに
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            賃貸管理に必要な機能をすべて備えています。
            <br className="hidden sm:block" />
            複数のツールを行き来する必要はありません。
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section id="pricing" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            料金プラン
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
            まずは無料で、すべての基本機能をお試しください。
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {/* フリープラン */}
            <div className="rounded-xl border border-gray-200 bg-card p-8">
              <h3 className="text-lg font-bold text-primary">フリー</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  ¥0
                </span>
                <span className="ml-1 text-gray-500">/月</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success font-bold">--</span>
                  50区画まで
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success font-bold">--</span>
                  基本機能すべて利用可能
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success font-bold">--</span>
                  メールサポート
                </li>
              </ul>
              <a
                href="https://roomly.jp"
                className="mt-8 block rounded-lg border-2 border-accent py-3 text-center text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-white"
              >
                無料で始める
              </a>
            </div>
            {/* スタンダードプラン */}
            <div className="relative rounded-xl border-2 border-accent bg-card p-8 shadow-md">
              <div className="absolute -top-3 left-6 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                おすすめ
              </div>
              <h3 className="text-lg font-bold text-primary">スタンダード</h3>
              <div className="mt-4">
                <span className="text-xl font-bold text-gray-900">
                  区画数ベースの従量課金
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success font-bold">--</span>
                  区画数の制限なし
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success font-bold">--</span>
                  全機能利用可能
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-success font-bold">--</span>
                  優先サポート
                </li>
              </ul>
              <a
                href="mailto:contact@roomly.jp?subject=スタンダードプランのお問い合わせ"
                className="mt-8 block rounded-lg bg-accent py-3 text-center text-sm font-bold text-white transition-colors hover:bg-accent/90"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="bg-gray-50 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            お気軽にご相談ください
          </h2>
          <p className="mt-4 text-center text-gray-600">
            導入のご検討・ご不明点・協業のご相談など、お気軽にお問い合わせください。
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-primary px-4 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-bold tracking-tight">Roomly</p>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <a href="/privacy" className="hover:text-white transition-colors">
                プライバシーポリシー
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                利用規約
              </a>
              <a href="/legal" className="hover:text-white transition-colors">
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
