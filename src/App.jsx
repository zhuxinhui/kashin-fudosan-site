import React, { useMemo, useState } from "react";
import {
  ArrowRight, BookOpen, FileText, Globe, Languages,
  Mail, MapPin, Phone, ShieldCheck
} from "lucide-react";

const logo = "/logo.jpeg"; // public 目录

export default function App() {
  const [lang, setLang] = useState("zh");

  const t = useMemo(() => ({
    zh: {
      brand: "華宸不動産",
      brandEn: "KASHIN FUDOSAN",
      nav: { services: "服务", knowledge: "知识库", about: "关于我们", contact: "联系" },
      tagline: "在日华人不动产·生活与合规咨询",
      subTag: "只提供信息与合规咨询，不进行物件媒介/介绍（当前未持有宅建業免許）",
      disclaimer:
        "【重要合规声明】华宸目前不持有宅建業免許，网站内容仅供信息参考与一般性咨询，不构成特定物件的斡旋、媒介或广告。需要物件签约/媒介时，将由具有宅建業免許的合作公司依法处理。",
      cta: "预约咨询",
      footer: `© ${new Date().getFullYear()} KASHIN FUDOSAN. 本站为演示版。`,
      toc: "目录",
      read: "阅读",
      backTop: "回到顶部",
      contactHero: "给我们发邮件，或直接电话联系",
      servicesIntro:
        "我们专注为在日华人与准备来日的人士提供合规信息与流程导航：签证路径与公司设立流程解读、租住/购房知识科普、在留与劳动规则基础说明、翻译/文书梳理、对接合规合作方（司法书士/行政書士/宅建業者等）。",
      contactNote:
        "※ 本站不做物件媒介/介绍；涉及宅建业务将转由持证合作方处理。"
    },
    ja: {
      brand: "華宸不動産",
      brandEn: "KASHIN FUDOSAN",
      nav: { services: "サービス", knowledge: "ナレッジ", about: "概要", contact: "お問い合わせ" },
      tagline: "在日外国人向け 不動産・生活・コンプライアンス相談",
      subTag: "物件の媒介・あっせんは行いません（宅建業免許は未取得）",
      disclaimer:
        "【重要】当社は宅建業免許を未取得です。本サイトは一般的な情報提供であり、特定物件の広告・媒介を目的としません。媒介・契約が必要な場合は、免許保有の提携事業者が担当します。",
      cta: "相談予約",
      footer: `© ${new Date().getFullYear()} KASHIN FUDOSAN. Demo.`,
      toc: "目次",
      read: "読む",
      backTop: "ページ上部へ",
      contactHero: "メールまたはお電話でご連絡ください",
      servicesIntro:
        "在日外国人の皆さま向けに、ビザ・会社設立の流れ、不動産の基礎知識、在留・労働ルールの基本解説、翻訳/文書整理、司法書士・行政書士・宅建業者など適法なパートナーのご紹介を行います。",
      contactNote:
        "※ 物件の媒介は行いません。宅建業に該当する行為は免許保有の提携先が対応します。"
    }
  })[lang], [lang]);

  /** ————— 知识库数据（10篇，中日双语） ————— */
  const articles = useMemo(
    () => [
      {
        id: "lease-clauses",
        titleZh: "日本租房合同必看条款：别等签约才发现“坑”",
        bodyZh: `在日本租房，别只盯着月租。正式签约前，至少确认这些要点：①契约期间与是否允许中途解约（是否有违约金、最低居住期）；②解约预告（常见为提前30天书面通知，具体以合同为准）；③更新条款（是否收取更新费、金额与周期，关西也并非一定免收）；④退房结算（清洁费、除菌费、换锁费等是“固定收取”还是“按实际发生”，写清更安心）；⑤保证公司（是否强制使用、首次与年度/按次续费规则与金额，常见为数万日元或按月租一定比例）；⑥禁止事项（宠物、乐器、短租/民宿等违者可能被解除合同）；⑦维修责任（通常损耗与故意/重大过失的划分与承担要写清）；⑧附带设备（空调、IH、洗碗机等是“设备保留”还是“设备附带”，坏了谁负责维修更换）。签约前索要费用一览与样本合同，逐条核对；不懂就问中介，必要时请懂日语的朋友陪同。牢记：未写进合同或补充协议的“口头承诺”不具效力，务必把关键点落到条款里。`,
        titleJa: "賃貸契約の必読ポイント：契約前に“落とし穴”を避ける",
        bodyJa: `日本で賃貸契約を結ぶ際は、家賃だけで判断してはいけません。少なくとも次を確認しましょう。①契約期間・途中解約の可否（違約金・最低居住期間の有無）②解約予告（多くは30日前の書面通知）③更新条項（更新料の有無・金額・周期。関西でも必ずしも無料ではない）④退去精算（清掃費・除菌費・鍵交換費などが固定徴収か実費精算か）⑤保証会社（加入義務の有無、初回費用・年次/都度更新費用。数万円または家賃割合が一般的）⑥禁止事項（ペット・楽器・短期賃貸/民泊など。違反時は解除となる場合あり）⑦修繕責任（通常損耗と故意/重過失の区別と負担）⑧付帯設備（エアコン・IH・食洗機等の扱い。故障時の修理・交換の負担者）。契約前に費用一覧と契約書（ひな形）を入手し、重要点は必ず書面に明記しましょう。`
      },
      {
        id: "deposit-restoration",
        titleZh: "敷金/礼金与“原状回復”：退房怎么不吃亏",
        bodyZh: `日本租房常见四笔钱：房租、敷金、礼金、仲介费。礼金是给房东的谢礼，通常不退；敷金类似押金，退房时按“原状回復”结算后返还。原状回復的关键在边界：通常损耗（墙面日晒变色、地板轻度磨损等）一般由房东承担；因故意或过失造成的污损（烟灼、宠物抓损、打孔破坏等）多由租客负担。很多物业会在合同或“重要事项说明”里事先注明固定清洁费、空调清洗费等，退房必收，这并非“坑人”，而是明示规则。想少吃亏：①入居当天拍“现状照片”，发现问题立即报修留痕；②入住期间小问题及时处理，别拖到退房；③搬家前做基础清洁、处理可修复污渍；④交还钥匙前再拍照备查。若结算有分歧，对照合同与费用明细沟通，必要时可咨询消费者窗口。`,
        titleJa: "敷金・礼金と「原状回復」：退去時に損をしないために",
        bodyJa: `賃貸では家賃・敷金・礼金・仲介手数料が一般的です。礼金は返還されない謝礼、敷金は退去時に「原状回復」精算後に返金されます。原状回復のポイントは境界線で、通常損耗（日焼け・軽度な摩耗など）は貸主負担、過失による汚損・破損（ヤニ汚れ・ペット傷・無断の穴あけ等）は借主負担が多い。契約書や重要事項説明書に清掃費・エアコン洗浄費等が定額で明記されていれば退去時に徴収されます。損を避けるには、入居時の写真記録、早めの報告と簡易修繕、退去前の清掃、鍵返却前の再撮影が有効です。`
      },
      {
        id: "seismic",
        titleZh: "建造年份与抗震标准：1981年“新耐震”怎么看",
        bodyZh: `建造年份不仅影响新旧，更关系到抗震。1981年6月后的“新耐震基准”提高了抗震要求；2000年前后对结构计算与接合部等进一步收紧。但这不等于“1981年前一定不安全”“2000年后一定没问题”。实务中看三点：①结构体系（RC钢筋混凝土、S钢骨、木造等）；②竣工年代（可将1981/2000作为参考门槛）；③资料证据（耐震诊断与加固记录、管理报告、改修历史）。二手公寓务必核对“重要事项说明书”与“长修计划”，确认外墙/屋顶防水、大修履历是否到位。选房要坚持“年份+证据”的组合判断。`,
        titleJa: "築年数と耐震：1981年「新耐震基準」をどう見るか",
        bodyJa: `1981年6月以降の新耐震基準で耐震性能が強化され、2000年前後に構造計算や接合部の基準が更に厳格化されました。とはいえ「1981年以前＝NG」「2000年以降＝OK」とは限りません。実務では、①構造（RC・S・木造）②築年（1981/2000年を目安）③耐震診断・補強記録や管理報告・改修履歴を重視。中古マンションは重要事項説明書と長期修繕計画を確認し、外壁・屋上防水、大規模修繕の履歴をチェックしましょう。築年だけで判断せず、資料に基づく総合評価が大切です。`
      },
      {
        id: "holding-cost",
        titleZh: "日本持有成本不止房产税：别只算月供",
        bodyZh: `购房不仅是首付与月供，还要把“持有成本”算入长期预算。主要包括：①固定资产税（以自治体评估额计税，标准税率常见1.4%；评估额≠成交价）；②都市计划税（适用于都市计划区域，税率上限0.3%）；③管理费与修缮基金（二手公寓因老化可能逐年上调）；④保险（火灾/地震险，贷款通常要求投保）；⑤停车位/仓储等附属费用；⑥司法书士与名义变更等杂费。经验上，一次性交易相关税费+仲介/登记常占房价6–10%，持有期费用需按年纳入现金流。建议在看房前做“购入+持有”的两笔账，避免“买得起但养不起”。`,
        titleJa: "保有コストは固定資産税だけではない：月々の返済以外も試算を",
        bodyJa: `購入時の頭金・ローン返済だけでなく、長期の「保有コスト」も予算化が必要です。主な項目は、①固定資産税（自治体の評価額に基づき、標準税率1.4%が多い）②都市計画税（都市計画区域で上限0.3%）③管理費・修繕積立金（築年で増額の可能性）④火災/地震保険（ローン利用時は加入が一般的）⑤駐車場・トランクルーム等の付帯費用⑥司法書士報酬や名義変更手数料。目安として諸費用は物件価格の6〜10%。保有中の年間費用もキャッシュフローに組み込み、「買える＋維持できる」計画を立てましょう。`
      },
      {
        id: "loan",
        titleZh: "日本住房贷款入门：金利类型与“団信”",
        bodyZh: `贷款前先搞懂三件事：①金利类型：浮动型（初期低但上行风险）、固定期型（若干年固定，期满后转浮动或再谈）、全期固定（利率稳定但通常更高）；②团体信用生命保险（団信）：多数学贷要求加入，发生重疾或身故等情形时由保险赔付清偿剩余贷款；③审查要素：在留资格、年收入、工作年限、雇佣形态、信用记录、首付比例均影响额度与利率。外国人往往需要更高首付、更稳定的收入证明。务必先做银行“事前审查”，拿到条件再决定看房与谈价。`,
        titleJa: "住宅ローンの基礎：金利タイプと団信",
        bodyJa: `ローン利用前に理解すべきは、①金利タイプ（変動型＝初期低金利だが上昇リスク、固定期間型＝一定期間固定の後変動へ、全期間固定＝安定的だが高め）②団体信用生命保険（団信。重病・死亡等で保険金により残債が弁済）③審査要素（在留資格・年収・勤続年数・雇用形態・信用情報・頭金割合等）。外国人は頭金多め・収入の安定性が求められる傾向。まずは銀行の「事前審査」で条件を把握しましょう。`
      },
      {
        id: "management-repair",
        titleZh: "公寓的“管理与修缮”：决定二手房居住质量",
        bodyZh: `买二手公寓时，楼宇的管理与修缮体系影响远大于室内软装。重点三件：①管理方式与状态：是否委托管理、管理公司与驻点人员是否到位、公共区域（电梯、垃圾间、信箱）是否整洁；②管理费/修缮基金：金额是否合理、是否多年未调整导致未来大修前大幅上涨；③长修计划：是否制定并更新，外墙防水、屋顶防水、管道等大修是否按计划执行。管理健全=生活稳定，比“漂亮内装”更重要。`,
        titleJa: "マンションの管理と修繕：中古の住み心地を左右する要素",
        bodyJa: `中古マンションは室内の見た目より、建物の管理・修繕体制が重要です。①管理方式と実態（委託管理か、自主管理か。管理会社/管理員の体制、共用部の清潔さ）②管理費・修繕積立金（妥当性、据え置きによる将来の急騰リスク）③長期修繕計画（策定・更新、外壁/屋上防水・配管などの大規模修繕の実施状況）。健全な管理＝安定した暮らし。内装よりも評価すべき指標です。`
      },
      {
        id: "job-housing",
        titleZh: "毕业求职转租房：保证公司与在留变更",
        bodyZh: `留学生求职阶段租房常遇两件事：①保证公司：多数组屋要求加入，首次费用可能按月租一定比例或固定金额，续费按年或按次；不同公司标准差异大，签前确认“首次+续费+其他费用”；②在留资格变更会影响审查：房东通常希望租期内身份稳定。签约时如在办理变更，提前说明并准备在留卡、内定/在职证明、资金证明等，提高通过率。解约预告期短的物业更适合阶段性过渡。`,
        titleJa: "卒業・就活期の賃貸：保証会社と在留資格変更",
        bodyJa: `留学生が就職活動期に賃貸を借りる場合、①保証会社加入が求められる物件が多い（初回費用は家賃割合や定額、更新費は年次や都度）ため、契約前に費用内訳を確認。②在留資格変更の手続中は、大家が安定を重視するため、在留カード、内定/在職証明、資金証明等で審査通過率を上げる。短い解約予告の物件は柔軟性が高く、移行期に適しています。`
      },
      {
        id: "floorplan",
        titleZh: "看懂平面图：动线、采光与“隐形浪费”",
        bodyZh: `户型图里信息很多：①动线是否顺畅，是否需要穿越卧室去阳台；储物开门与动线是否打架；②采光与遮挡：朝向并非绝对，关键看窗户大小与遮挡物；低楼层临主干道可能有噪音与粉尘；③梁柱位置可能影响床/衣柜摆放；④过道面积过长是“隐形浪费”；⑤设备位置（空调外机、热水器、洗衣机位尺寸）都要确认。看图只是第一步，带尺子去现场量，或要求追加照片/视频与尺寸标注，才能避免“以为放得下”。`,
        titleJa: "間取り図の読み方：動線・採光・見えないムダ",
        bodyJa: `間取り図で見るべきは、①動線の良し悪し（寝室を通らないとベランダに出られない等は不便。収納の扉と動線の干渉も注意）②採光と遮蔽物（方角だけでなく窓の大きさと遮蔽物。低層・幹線道路沿いは騒音や粉塵の可能性）③梁・柱位置（ベッド/クローゼット配置に影響）④廊下が長い＝面積のムダ⑤設備の配置（室外機・給湯器・洗濯機置場の寸法）。図面だけで決めず、実測や追加写真・動画で確認しましょう。`
      },
      {
        id: "hanko-stamp",
        titleZh: "签约与印章：実印/認印、印花税怎么理解",
        bodyZh: `日本不动产买卖常涉及印章与印花税。印章类型：認印（一般性文件）、実印（到市区町村注册，配合印鑑登録証明書用于买卖/贷款等重要行为）、銀行印（银行手续）。租房多为認印即可，买卖/贷款通常要求実印+印鑑注册证明。印花税则按合同金额区间在正本贴印花并盖骑缝章，不同合同有不同税额。实际签约时，中介或司法书士会列明所需文件与税额，按清单准备即可。外国人建议尽早完成在留卡与実印注册，流程更顺畅。`,
        titleJa: "契約と印鑑：実印・認印、印紙税の基本",
        bodyJa: `不動産取引では印鑑と印紙税が関係します。印鑑は、認印（一般書類）、実印（市区町村で登録し、印鑑登録証明書と共に売買・ローン等の重要手続きで使用）、銀行印（金融機関手続き）に分かれます。賃貸は認印で足りる場合が多く、売買/ローンは実印＋印鑑登録証明書が求められます。印紙税は契約金額に応じて正本に印紙を貼付し消印。実務では仲介業者や司法書士から必要書類と税額の案内があります。外国人は在留カード・実印登録を早めに整えるとスムーズです。`
      },
      {
        id: "new-vs-used",
        titleZh: "新房VS二手：预算、位置与维护的三角选择",
        bodyZh: `新房：建筑新、设备好、保修期内安心，但溢价较高，预算内可能只能选择更小面积或外圈位置。二手：价格友好、面积或位置更优，但必须重视楼体管理与修缮记录。实务建议：①明确“预算/面积/位置”三角中的优先级；②新房看开发商口碑与周边规划；③二手看长修计划、外墙/屋顶/管道等大修履历及管理费趋势；④做“购入+持有”的全周期测算。最终方案要匹配通勤、学区、家庭结构与未来规划。`,
        titleJa: "新築 vs 中古：予算・立地・維持の三角バランス",
        bodyJa: `新築は建物・設備が新しく保証も手厚い反面、価格が高くなりがちで立地や面積で妥協が必要な場合も。中古は価格や広さ・立地で優位な一方、建物管理と修繕履歴の確認が必須。実務の勘所は、①予算/面積/立地の優先順位を決める②新築はデベロッパーの信頼性と周辺計画③中古は長期修繕計画・外壁/屋上/配管等の履歴・管理費の推移④購入＋保有のトータル試算。通勤・学区・家族構成・将来設計に合う選択が最適です。`
      }
    ], [lang]
  );

  /** ————— 组件 ————— */
  const Article = ({ a }) => (
    <article id={a.id} className="scroll-mt-28 bg-white rounded-2xl shadow-sm border p-6 md:p-8">
      <header className="mb-3">
        <h3 className="text-xl md:text-2xl font-semibold">{lang === "zh" ? a.titleZh : a.titleJa}</h3>
      </header>
      <div className="prose prose-slate max-w-none leading-7">
        <p className="whitespace-pre-wrap">{lang === "zh" ? a.bodyZh : a.bodyJa}</p>
      </div>
      <div className="mt-4">
        <a href="#top" className="text-sm text-slate-600 hover:text-slate-900 underline">
          ↑ {t.backTop}
        </a>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900" id="top">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="華宸不動産 Logo" className="w-10 h-10 object-contain" />
            <div className="leading-tight">
              <div className="font-bold text-lg">{t.brand}</div>
              <div className="text-xs tracking-wide text-slate-500">{t.brandEn}</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-slate-600 hover:text-slate-900">{t.nav.services}</a>
            <a href="#knowledge" className="text-slate-600 hover:text-slate-900">{t.nav.knowledge}</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900">{t.nav.about}</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <Languages className="w-5 h-5 text-slate-500" />
            <select
              aria-label="Language"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
            </select>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-slate-900 text-white hover:bg-slate-800">
              <ArrowRight className="w-4 h-4" />{t.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-slate-700" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{t.tagline}</h1>
              <p className="text-slate-600 mt-2">{t.subTag}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2"><Globe className="w-5 h-5" />{t.nav.services}</h2>
          <p className="text-slate-600 mt-2">{t.servicesIntro}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: <FileText className="w-5 h-5" />, titleZh: "签证与公司流程梳理", titleJa: "ビザ・会社設立の流れ整理",
              textZh: "解释官方指引和节点材料，制作清单与时间线。", textJa: "公的ガイドと必要書類を整理し、チェックリストとタイムラインを作成。" },
            { icon: <BookOpen className="w-5 h-5" />, titleZh: "不动产常识与风险提示", titleJa: "不動産の基礎知識と留意点",
              textZh: "解读租售流程、费用构成与常见误区。", textJa: "賃貸/売買の流れ・費用構成・よくある誤解を解説。" },
            { icon: <ShieldCheck className="w-5 h-5" />, titleZh: "合规边界与合作转介", titleJa: "コンプライアンスと提携",
              textZh: "不做宅建媒介；涉及宅建业务时转由持证合作方处理。", textJa: "宅建の媒介は行わず、免許保有の提携先が対応。" }
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border shadow-sm p-6">
              <div className="flex items-center gap-2 text-slate-700">{c.icon}
                <h3 className="font-semibold">{lang === "zh" ? c.titleZh : c.titleJa}</h3>
              </div>
              <p className="text-slate-600 mt-2">{lang === "zh" ? c.textZh : c.textJa}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge */}
      <section id="knowledge" className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2"><BookOpen className="w-5 h-5" />{t.nav.knowledge}</h2>
          <p className="text-slate-600">{lang === "zh"
            ? "以下内容为日本实际居住/交易流程中的通用知识点与注意事项，力求客观、不过度承诺。"
            : "以下は日本での実務上一般的に確認される知識と留意点の整理です。"} </p>
        </div>

        {/* TOC */}
        <div className="bg-white rounded-2xl border shadow-sm p-4 md:p-6 mb-6">
          <div className="text-sm text-slate-500 mb-2">{t.toc}</div>
          <ol className="list-decimal ml-5 grid md:grid-cols-2 gap-y-1">
            {articles.map(a => (
              <li key={a.id}>
                <a href={`#${a.id}`} className="text-slate-700 hover:text-slate-900 underline">
                  {lang === "zh" ? a.titleZh : a.titleJa}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-6">
          {articles.map(a => <Article key={a.id} a={a} />)}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">{lang === "zh" ? "关于我们" : "当社について"}</h2>
          <p className="text-slate-700">
            {lang === "zh"
              ? "華宸不動産（KASHIN FUDOSAN）定位为信息与合规咨询窗口：我们不进行物件媒介或广告，仅提供可靠的信息梳理、流程指导与文件准备支持，并在需要时对接持证合作方。"
              : "華宸不動産は情報とコンプライアンスの相談窓口として、物件の媒介・広告は行わず、信頼できる情報整理・手続きガイド・書類準備支援を提供し、必要に応じて免許保有のパートナーに接続します。"}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">{lang === "zh" ? "联系" : "お問い合わせ"}</h2>
          <p className="text-slate-600">{t.contactHero}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <a href="mailto:contact@kashin-fudosan.example" className="flex items-center gap-2 text-slate-700 hover:text-slate-900">
              <Mail className="w-5 h-5" /> contact@kashin-fudosan.example
            </a>
            <a href="tel:+81-80-0000-0000" className="flex items-center gap-2 text-slate-700 hover:text-slate-900">
              <Phone className="w-5 h-5" /> +81-80-0000-0000
            </a>
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-5 h-5" /> Kobe / Osaka（Online 可）
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">{t.contactNote}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t bg-white/70">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>{t.footer}</p>
          <p className="max-w-3xl">{t.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
