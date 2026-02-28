"use client";

import { useState } from "react";

const INQUIRY_TYPES = [
  "サービスについて",
  "導入のご相談",
  "料金について",
  "協業・パートナーシップ",
  "投資・事業提携",
  "その他",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: INQUIRY_TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", company: "", type: INQUIRY_TYPES[0], message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="mx-auto max-w-xl rounded-xl bg-white p-10 text-center shadow-sm">
        <div className="text-4xl">&#10003;</div>
        <h3 className="mt-4 text-xl font-bold text-primary">
          送信しました
        </h3>
        <p className="mt-2 text-gray-600">
          お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent underline hover:no-underline"
        >
          続けてお問い合わせする
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-sm"
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            お問い合わせ種別
          </label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              会社名
            </label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-lg bg-accent py-3 text-sm font-bold text-white transition-colors hover:bg-accent/90 disabled:opacity-50"
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
