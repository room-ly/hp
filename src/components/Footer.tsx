import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-rm-primary px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight">Roomly</p>
            <p className="mt-1 text-sm text-blue-200">
              賃貸管理を、もっとシンプルに。
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <Link href="/privacy" className="transition-colors hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              利用規約
            </Link>
            <Link href="/legal" className="transition-colors hover:text-white">
              特定商取引法
            </Link>
          </nav>
        </div>
        <p className="mt-10 text-center text-xs text-blue-300">
          &copy; {new Date().getFullYear()} Roomly
        </p>
      </div>
    </footer>
  );
}
