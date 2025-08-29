import React, { useState } from "react";
import { MapPin, Phone, Mail, ShieldCheck, Globe, FileText, BookOpen, ArrowRight, Languages } from "lucide-react";

const logo = "/logo.jpeg"; // public 下的 logo

export default function App() {
  const [lang, setLang] = useState("zh");

  const t = {
    zh: {
      brand: "華宸不動産",
      brandEn: "KASHIN FUDOSAN",
      tagline: "在日华人不动产·生活与合规咨询",
      subTag: "只提供信息与合规咨询，不进行物件媒介/介绍（当前未持有宅建業免許）",
      nav: { services: "服务", knowledge: "知识库", about: "关于我们", contact: "联系" },
      cta: "预约咨询",
      disclaimer: "【重要合规声明】华宸目前不持有宅建業免許，网站内容仅供信息参考与一般性咨询，不构成特定物件的斡旋、媒介或广告。需要物件签约/媒介时，将由具有宅建業免許的合作公司依法处理。",
      footer: "© " + new Date().getFullYear() + " KASHIN FUDOSAN. 本站为演示版。",
    },
    ja: {
      brand: "華宸不動産",
      brandEn: "KASHIN FUDOSAN",
      tagline: "在日外国人向け 不動産・生活・コンプライアンス相談",
      subTag: "物件の媒介・あっせんは行いません（宅建業免許は未取得）",
      nav: { services: "サービス", knowledge: "ナレッジ", about: "概要", contact: "お問い合わせ" },
      cta: "相談予約",
      disclaimer: "【重要】当社は宅建業免許を未取得です。本サイトは一般的な情報提供であり、特定物件の広告・媒介を目的としません。媒介・契約が必要な場合は、免許保有の提携事業者が担当します。",
      footer: "© " + new Date().getFullYear() + " KASHIN FUDOSAN. Demo.",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="華宸不動産 Logo" className="w-10 h-10 object-contain" />
            <div className="leading-tight">
              <div className="font-bold text-lg">{t.brand}</div>
              <div className="text-xs tracking-wide text-slate-500">{t.brandEn}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-slate-600 hover:text-slate-900">{t.nav.services}</a>
            <a href="#knowledge" className="text-slate-600 hover:text-slate-900">{t.nav.knowledge}</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900">{t.nav.about}</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <Languages className="w-5 h-5 text-slate-500" />
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="border rounded px-2 py-1 text-sm">
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
            </select>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-slate-900 text-white hover:bg-slate-800">
              <ArrowRight className="w-4 h-4" />{t.cta}
            </a>
          </div>
        </div>
      </header>

      <footer className="mt-8 border-t bg-white/70">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>{t.footer}</p>
          <p className="max-w-3xl">{t.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
