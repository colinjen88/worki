export type ProjectCategory =
  | "dynamic-web"
  | "functional-web"
  | "graphic-design"
  | "seo"
  | "motion-design";

export type ProjectFilter = ProjectCategory | "all";

export type Project = {
  id: string;
  slug?: string; // 若有獨立 Case Study 深度頁面
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  summary: string;
  tags: string[];
  images: string[];
  imageCaptions?: string[];
  bgImage?: string;
  liveUrl?: string;
  showcaseUrl?: string;
  videoUrl?: string;
  pdfUrl?: string;
  featured?: boolean;
  status?: "live" | "in-progress" | "offline";
  details?: {
    role: string;
    challenge: string;
    approach: string[];
    highlights: string[];
  };
};

export const personalInfo = {
  name: "WANG",
  title: "前端設計工程師",
  englishTitle: "Creative Frontend Designer & Engineer",
  subtitle: "介面視覺・動效節奏・前端工程完整實現",
  email: "flashjen@gmail.com",
  location: "Taipei, Taiwan",
  statusBadge: "Open for Opportunities • 隨時可洽談新專案",
  statusDescription:
    "專精動效微互動 (Lottie/SVGA)、響應式介面設計與前端架構實作。具備獨立建置產品與從零落地能力。",
  aboutParagraphs: [
    "從 Flash / Animate 動態設計出發，累積對時間差與緩動節奏的敏銳度；目前以 Figma、Next.js 與 TypeScript 完成介面設計及前端實作。",
    "從設計系統、響應式排版到互動狀態，依真實內容與裝置條件逐一處理，讓設計稿能穩定落地。",
  ],
  craftTokens: [
    { label: "主軸風格", value: "Editorial Tech & Creative Studio" },
    { label: "動態核心", value: "Lottie, SVGA, CSS Keyframe Springs" },
    { label: "工程體系", value: "Next.js 16, React 19, TypeScript" },
    { label: "視覺工具", value: "Figma, After Effects, Illustrator, Photoshop" },
  ],
};

export const projects: Project[] = [
  {
    id: "zyfloral",
    slug: "zyfloral",
    title: "植園花室 Zhiyuan Floral Studio (官網與後台管理)",
    subtitle: "品牌官網建置與後台管理平台",
    categories: ["dynamic-web", "functional-web", "seo"],
    summary:
      "品牌官網建置 • 後台管理平台 (課程/網站內容) • SEO 文章管理系統 • RWD 響應式設計",
    tags: ["Brand Web", "CMS 後台", "SEO 文章系統", "RWD"],
    liveUrl: "https://zyfloral.com/",
    featured: true,
    images: [
      "/assets/zyfloral/zyfloral01.webp",
      "/assets/zyfloral/zyfloral02.webp",
      "/assets/zyfloral/zyfloral03.webp",
      "/assets/zyfloral/zyfloral04.webp",
    ],
    imageCaptions: [
      "植園花室 Zhiyuan Floral Studio 首頁",
      "植園花室 課程介紹區塊",
      "植園花室 品牌故事與理念",
      "植園花室 後台管理平台 & SEO文章管理",
    ],
    details: {
      role: "UI/UX 設計、網站前端與內容管理相關畫面製作",
      challenge:
        "以品牌作品與服務資訊建立清楚的閱讀動線，並呈現課程、文章與內容管理的需求。",
      approach: [
        "以簡約典雅的留白與細緻字體層級，襯托花藝作品的視覺張力，打造沉浸式瀏覽動線。",
        "整理課程、內容維護與文章發布的管理介面與相關頁面。",
        "完成響應式前端畫面，讓資訊能在不同裝置閱讀。",
      ],
      highlights: [
        "品牌官網與內容管理畫面展示",
        "課程與文章內容的資訊架構",
        "多張前後台畫面作為作品證據",
      ],
    },
  },
  {
    id: "royal",
    slug: "royal",
    title: "古風官網 按摩官網-前/後台試做",
    subtitle: "前台改版設計與後台預約管理系統",
    categories: ["functional-web"],
    summary:
      "主官網視覺 • 前台改版設計(文章頁、預約頁) • 後台製作(預約/管理…) • RWD • 微互動 • 開發歷程",
    tags: ["古風官網", "預約系統", "後台管理", "微互動", "RWD 開發歷程"],
    liveUrl: "https://royal.gowork.run/main-site/index.html",
    showcaseUrl: "https://royal.gowork.run/showcase",
    featured: true,
    images: [
      "/assets/royaltouch/royal_main01.webp",
      "/assets/royaltouch/royal_main02.webp",
      "/assets/royaltouch/royal01.webp",
      "/assets/royaltouch/royal02.webp",
      "/assets/royaltouch/royal03.webp",
      "/assets/royaltouch/royal04.webp",
      "/assets/royaltouch/royal05.webp",
    ],
    imageCaptions: [
      "古風主官網品牌視覺與首頁",
      "古風主官網養生知識專欄",
      "前台門市與預約流程設計",
      "線上預約步驟化引導",
      "後台管理總覽儀表板",
      "門市與師傅排班管理",
      "開發歷程與流程架構",
    ],
    details: {
      role: "UI/UX 設計、主官網視覺呈現、前台文章/預約頁改版、後台管理介面製作",
      challenge:
        "以中醫養生品牌的古典東方視覺為基礎，規劃主官網門面並整理文章、預約與管理畫面的操作流程。",
      approach: [
        "建立沉浸式古風主官網，展現品牌文化與養生知識專欄。",
        "重塑預約動線，將繁雜的選單步驟拆解為清楚易讀的引導式介面。",
        "製作預約及管理相關介面作為試做展示。",
        "加入必要互動回饋，並記錄開發歷程。",
      ],
      highlights: [
        "古風主官網、前台文章與線上預約流程",
        "後台門市管理與排班儀表板",
        "7 張畫面展示完整流程與視覺設計",
        "RWD 與微互動試做",
      ],
    },
  },
  {
    id: "goodeats",
    slug: "goodeats",
    title: "穀意 GoodEats (官網 & 開發介紹)",
    subtitle: "品牌沉浸式官網與前/後台 Showcase 開發歷程",
    categories: ["dynamic-web"],
    summary:
      "沉浸式設計 • 動效 • RWD • 一頁式網站 • 影片背景 • 前/後台開發介紹 Showcase",
    tags: ["沉浸式體驗", "動態設計", "Showcase 雙入口", "創意版型"],
    liveUrl: "https://goodeats.asia/",
    showcaseUrl: "https://gowork.run/showGoodEats/",
    featured: true,
    images: [
      "/assets/goodeats_preview.webp",
      "/assets/showgoodeats.webp",
    ],
    imageCaptions: [
      "穀意 GoodEats 品牌官網",
      "穀意 GoodEats Showcase 前/後台開發介紹",
    ],
    details: {
      role: "視覺規劃、動效整合、RWD 前端切版、Showcase 歷程製作",
      challenge:
        "以沉浸式影像與動效呈現餐飲品牌，同時保留清楚的內容閱讀入口。",
      approach: [
        "以大幅影像、背景影片與克制的動態節奏塑造沉浸式氛圍，避免元素過度喧賓奪主。",
        "另闢專屬 Showcase 站點，系統性展示前台視覺、後台管理規劃與互動原型設計。",
        "安排響應式版面與觸控操作的展示畫面。",
      ],
      highlights: [
        "官網主站與 Showcase 開發介紹雙入口",
        "動效、影片背景與品牌內容的整合",
        "前台視覺與開發介紹雙入口",
      ],
    },
  },
  {
    id: "goldlab",
    slug: "goldlab",
    title: "內容型網站完整建置 (GoldLab)",
    subtitle: "獨立規劃設計、製作與佈署之資訊型網站",
    categories: ["functional-web", "seo"],
    summary:
      "獨立規劃設計/製作/佈署 • RWD • 資訊型網站 • SEO 策略 • 文章管理後台",
    tags: ["全站獨立建置", "SEO 策略", "文章後台", "資訊架構"],
    liveUrl: "https://goldlab.tw/",
    featured: true,
    images: [
      "/assets/goldlab_preview1.webp",
      "/assets/goldlab_preview2.webp",
      "/assets/goldlab_preview3.webp",
      "/assets/goldlab_preview4.webp",
      "/assets/goldlab_preview5.webp",
      "/assets/goldlab_preview6.webp",
    ],
    imageCaptions: [
      "首頁市場資訊與熱門內容入口",
      "分類選單與文章清單",
      "文章內頁結構化閱讀排版",
      "SEO 關鍵字佈局架構",
      "文章管理後台發布系統",
      "響應式行動端完整呈現",
    ],
    details: {
      role: "全站獨立規劃設計、前端開發、文章管理後台與伺服器佈署",
      challenge:
        "整理市場資訊與文章內容，讓讀者能透過分類與頁面結構找到需要的內容。",
      approach: [
        "從零負責整體架構規劃、UI/UX 介面設計、前端程式碼撰寫至 VPS 伺服器建置與佈署。",
        "規劃內容型網站的資訊架構、搜尋與 SEO 基礎做法。",
        "製作文章管理相關畫面與發布流程。",
      ],
      highlights: [
        "6 張前後台畫面展示",
        "內容閱讀與分類架構",
        "官網與文章管理入口",
      ],
    },
  },
  {
    id: "flashrate",
    title: "聚合免費報價來源",
    subtitle: "分散式即時市場行情數據整合",
    categories: ["functional-web"],
    summary: "多來源報價整理 • 黃金、白銀與美元匯率 • 即時介面",
    tags: ["數據整理", "多來源資料", "行情匯率", "即時介面"],
    liveUrl: "https://goldlab.cloud/",
    images: ["/assets/flashrate.jpg"],
    imageCaptions: ["多來源報價整理介面"],
  },
  {
    id: "shiny-jewelry",
    title: "形象官網一頁式網站（主頁設計）",
    subtitle: "璀璨珠寶 Shiny Jewelry 一頁式形象品牌",
    categories: ["dynamic-web"],
    summary: "需求規劃 • 風格提案 • UI/UX設計 • 網站開發",
    tags: ["珠寶品牌", "風格提案", "UI/UX 設計", "一頁式網站"],
    liveUrl: "https://my8020.cloud/",
    images: ["/assets/shiny_jewelry_preview.webp"],
    imageCaptions: ["璀璨珠寶主頁形象視覺"],
  },
  {
    id: "alloy-team",
    title: "alloy.team工作室網站",
    subtitle: "創意工作室品牌官網",
    categories: ["dynamic-web"],
    summary: "#互動網站 #微動畫 #多語系 #自適應",
    tags: ["互動網站", "微動畫", "多語系", "自適應"],
    liveUrl: "https://alloy.team",
    images: [
      "/assets/alloy1.jpg",
      "/assets/alloy2.jpg",
      "/assets/alloy3.jpg",
    ],
    imageCaptions: [
      "alloy.team 工作室網站 首頁",
      "團隊專案與服務介紹",
      "多語系與自適應介面",
    ],
  },
  {
    id: "motion-collection",
    title: "Motion - Animation Collection",
    subtitle: "SVGA 直播動效、廣告 Banner 與動態人物",
    categories: ["motion-design"],
    summary: "SVGA直播動效設計、廣告banner動畫、動態人物，多年 Flash/Animate 深厚動效背景",
    tags: ["SVGA 動效", "直播動態", "Banner 動畫", "YouTube Showreel"],
    liveUrl: "https://www.youtube.com/watch?v=V_f5eONwmPo",
    videoUrl: "https://www.youtube.com/embed/V_f5eONwmPo?autoplay=1",
    images: ["/assets/motion_preview.webp"],
    imageCaptions: ["Motion Showreel 動效精華預覽"],
  },
  {
    id: "graphic-portfolio",
    title: "平面設計作品集",
    subtitle: "廣告、印刷品、公仔筆、海報與品牌識別",
    categories: ["graphic-design"],
    summary:
      "Graphic Design • 廣告設計 • 印刷品設計(立牌、公仔筆、海報…) • 活動頁設計 • Banner設計 • 吉祥物設計 • LOGO及名片設計",
    tags: ["平面設計", "印刷品", "吉祥物", "PDF 作品集"],
    pdfUrl: "/assets/Graphic_Portfolio.pdf",
    images: ["/assets/graphic_portfolio_thumb.webp"],
    bgImage: "/assets/graphic_collage_bg.webp",
    imageCaptions: ["平面設計作品集手冊封面"],
  },
  {
    id: "seo-strategy",
    title: "SEO內容行銷",
    subtitle: "關鍵字與內容規劃展示",
    categories: ["seo"],
    summary: "內容研究、關鍵字規劃與網站架構展示",
    tags: ["SEO 關鍵字", "內容規劃", "內容行銷", "網站架構"],
    liveUrl: "https://seo.gowork.run/",
    images: ["/assets/seo_preview.webp"],
    imageCaptions: ["SEO 內容策略規劃成果"],
  },
  {
    id: "micro-interactions",
    title: "Micro-interactions & Animated Game Cards",
    subtitle: "Lottie 客製化動效製作與動態化體驗",
    categories: ["motion-design"],
    summary: "Lottie 客製化動效製作 • JSON • UI Dynamic • 圖片動態化",
    tags: ["Lottie", "JSON 動畫", "微互動", "整理中"],
    status: "in-progress",
    images: ["/assets/loading_animation.webp"],
    imageCaptions: ["微互動載入動畫示範"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
