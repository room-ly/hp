import {
  Building2,
  FileText,
  Banknote,
  Wrench,
  SendHorizonal,
  BarChart3,
  CheckCircle2,
  UserPlus,
  Rocket,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const features = [
  {
    icon: Building2,
    title: "物件管理",
    description:
      "建物・部屋の情報を一元管理。間取り・設備・写真もまとめて。",
  },
  {
    icon: FileText,
    title: "契約管理",
    description:
      "契約の作成から更新・解約まで。特約や条件も見やすく整理。",
  },
  {
    icon: Banknote,
    title: "家賃管理",
    description:
      "請求・入金・滞納を一目で。督促のタイミングも見逃さない。",
  },
  {
    icon: Wrench,
    title: "修繕管理",
    description:
      "依頼の受付から業者手配、完了報告まで。対応漏れを防ぐ。",
  },
  {
    icon: SendHorizonal,
    title: "オーナー送金",
    description:
      "月次の精算・送金明細を自動で。管理費の差し引きも簡単に。",
  },
  {
    icon: BarChart3,
    title: "レポート",
    description:
      "稼働率・入金率・収支をダッシュボードで。オーナー報告書も自動生成。",
  },
];

const steps = [
  {
    icon: UserPlus,
    number: "1",
    title: "無料登録",
    description: "メールアドレスだけで、5分でアカウント作成",
  },
  {
    icon: Building2,
    number: "2",
    title: "物件登録",
    description: "物件・部屋の情報を入力。CSVインポートにも対応",
  },
  {
    icon: Rocket,
    number: "3",
    title: "運用開始",
    description: "すぐに使い始められます。サポートも充実",
  },
];

export default function Home() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-rm-hero-start via-rm-hero-mid to-rm-hero-end px-4 py-28 text-center text-white sm:py-36">
        <div className="mx-auto max-w-3xl animate-slide-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            賃貸管理を、
            <br className="sm:hidden" />
            もっとシンプルに。
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-blue-200 sm:text-xl">
            物件・入居者・家賃・修繕——すべてを一つの画面で。
          </p>
          <div className="mt-10">
            <a
              href="https://roomly.jp"
              className="inline-block rounded-xl bg-white px-10 py-4 text-base font-bold text-rm-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl sm:text-lg"
            >
              無料で始める
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-400" />
              10区画まで無料
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-400" />
              クレジットカード不要
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-400" />
              最短5分で開始
            </span>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-rm-primary sm:text-3xl">
            選ばれる理由
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { value: "¥0", label: "初期費用", sub: "導入コストゼロで始められます" },
              { value: "10区画", label: "無料で使える", sub: "小規模からでも安心のフリープラン" },
              { value: "5分", label: "で始められる", sub: "登録からすぐに利用開始" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-rm-border bg-rm-surface p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-3xl font-bold text-rm-accent">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-rm-text">{stat.label}</p>
                <p className="mt-2 text-xs text-rm-text-muted">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3ステップ */}
      <section className="bg-rm-surface px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-rm-primary sm:text-3xl">
            3ステップで始められます
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rm-primary to-rm-accent text-white shadow-lg">
                  <step.icon size={28} />
                </div>
                <div className="mx-auto mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-rm-accent/10 text-sm font-bold text-rm-accent">
                  {step.number}
                </div>
                <h3 className="mt-3 text-lg font-bold text-rm-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-rm-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 機能紹介 */}
      <section id="features" className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-rm-primary sm:text-3xl">
            必要な機能を、ひとつに
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-rm-text-secondary">
            賃貸管理に必要な機能をすべて備えています。
            <br className="hidden sm:block" />
            複数のツールを行き来する必要はありません。
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-rm-border bg-rm-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rm-accent/10 text-rm-accent transition-colors group-hover:bg-rm-accent group-hover:text-white">
                  <feature.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-rm-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-rm-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section id="pricing" className="bg-rm-surface px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-rm-primary sm:text-3xl">
            料金プラン
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-rm-text-secondary">
            まずは無料で、すべての基本機能をお試しください。
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {/* フリープラン */}
            <div className="rounded-2xl border border-rm-border bg-white p-8">
              <h3 className="text-lg font-bold text-rm-primary">フリー</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-rm-text">¥0</span>
                <span className="ml-1 text-rm-text-muted">/月</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-rm-text-secondary">
                {["10区画まで", "基本機能すべて利用可能", "メールサポート"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-rm-success"
                      />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <a
                href="https://roomly.jp"
                className="mt-8 block rounded-xl border-2 border-rm-accent py-3 text-center text-sm font-bold text-rm-accent transition-colors hover:bg-rm-accent hover:text-white"
              >
                無料で始める
              </a>
            </div>
            {/* スタンダードプラン */}
            <div className="relative rounded-2xl border-2 border-rm-accent bg-white p-8 shadow-lg">
              <div className="absolute -top-3.5 left-6 rounded-full bg-gradient-to-r from-rm-primary to-rm-accent px-4 py-1 text-xs font-bold text-white">
                おすすめ
              </div>
              <h3 className="text-lg font-bold text-rm-primary">
                スタンダード
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-rm-text">
                  ¥5,000〜
                </span>
                <span className="ml-1 text-rm-text-muted">/月</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-rm-text-secondary">
                {[
                  "11〜50区画: ¥5,000/月",
                  "51〜100区画: ¥10,000/月",
                  "全機能利用可能・優先サポート",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-rm-success"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://roomly.jp"
                className="mt-8 block rounded-xl bg-rm-accent py-3 text-center text-sm font-bold text-white transition-colors hover:bg-rm-accent-light"
              >
                無料で始める
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-bold text-rm-primary sm:text-3xl">
            お気軽にご相談ください
          </h2>
          <p className="mt-4 text-center text-rm-text-secondary">
            導入のご検討・ご不明点・協業のご相談など、お気軽にお問い合わせください。
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
