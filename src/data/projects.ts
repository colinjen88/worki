export type ProjectCategory =
  | "all"
  | "dynamic-web"
  | "functional-web"
  | "graphic-design"
  | "seo"
  | "motion-design";

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
  title: "前端工程師 / 前端設計師",
  subtitle: "Hybrid UI/UX Designer & Frontend Engineer",
  email: "flashjen@gmail.com",
  lineUrl: "https://line.me/ti/p/~flashjen",
  lineId: "flashjen",
  location: "Taiwan",
  statusBadge: "前端工程師 / 前端設計師 作品集 | #SEO #前端 #設計 #動效",
  statusDescription:
    "專精動效設計 (Lottie/SVGA)、響應式網頁設計與前端開發，有獨立規劃及架站能力。致力於創造美感與實用兼具的數位體驗。",
  aboutParagraphs: [
    "我是前端設計師/工程師，擁有多年 Web/Mobile 團隊協作開發經驗，主要負責網頁設計、UI/UX設計及各類動效製作。",
    "熟練 Figma、Photoshop、Illustrator、After Effects、Antigravity 等工具，並具備獨立製作開發網站的實務能力。",
  ],
  designerConfigCode: `const designerProfile = {
  name: 'WANG',
  role: 'Hybrid UI/UX Designer',
  
  // 核心能力矩陣
  capabilities: [
    'UI Design & RWD',    // 獨立製作能力
    'Motion (Lottie/SVGA)', // Flash/Animate 背景
    'Frontend (HTML/CSS)'   // 實際開發經驗
  ],

  // 設計工具
  tools: [
    'Figma', 'Photoshop', 'Illustrator', 'AE'
  ],

  // 團隊協作特質
  traits: {
    communication: true, // 溝通良好
    collaboration: true, // 多年協作經驗
    challengeAccepted: true
  },

  goal: 'Build impactful products'
};

designerProfile.init();`,
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
      role: "品牌規劃、UI/UX 設計、全站前端開發、後台管理系統與 SEO 配置",
      challenge:
        "花藝品牌需要同時傳遞作品的細膩高級感、建立服務信任，並讓非技術人員能在後台自主維護課程、文章與日常內容，同時建立搜尋引擎能見度。",
      approach: [
        "以簡約典雅的留白與細緻字體層級，襯托花藝作品的視覺張力，打造沉浸式瀏覽動線。",
        "建構專屬的後台管理平台，支援課程即時管理、內容維護與 SEO 文章發布系統。",
        "實作語意化 HTML 與 RWD 響應式介面，在不同裝置上皆能保持細膩排版。",
      ],
      highlights: [
        "品牌官網前台與管理後台完整閉環",
        "後台整合 SEO 文章與課程管理系統",
        "跨裝置極致響應式與優化 WebP 圖片快取",
      ],
    },
  },
  {
    id: "royal",
    slug: "royal",
    title: "御手國醫 按摩官網-前/後台試做",
    subtitle: "前台改版設計與後台預約管理系統",
    categories: ["functional-web"],
    summary:
      "前台改版設計(文章頁、預約頁) • 後台製作(預約/管理…) • RWD • 微互動 • 開發歷程",
    tags: ["預約系統", "後台管理", "微互動", "RWD 開發歷程"],
    liveUrl: "https://royal.gowork.run/showcase",
    featured: true,
    images: [
      "/assets/royaltouch/royal01.webp",
      "/assets/royaltouch/royal02.webp",
      "/assets/royaltouch/royal03.webp",
      "/assets/royaltouch/royal04.webp",
      "/assets/royaltouch/royal05.webp",
    ],
    imageCaptions: [
      "前台門市與預約流程設計",
      "線上預約步驟化引導",
      "後台管理總覽儀表板",
      "門市與師傅排班管理",
      "開發歷程與流程架構",
    ],
    details: {
      role: "UI/UX 設計、前台文章/預約頁改版、後台管理介面製作",
      challenge:
        "傳統連鎖門市的線上預約流程繁複，且缺乏直觀的師傅排班與預約管理後台；需在保留品牌中醫養生氛圍的同時，簡化顧客預約阻力並降低內部協調成本。",
      approach: [
        "重塑預約動線，將繁雜的選單步驟拆解為清楚易讀的引導式介面。",
        "打造功能型後台，包含預約管理、排班檢視與門市狀態配置。",
        "加入細微互動回饋，提升操作流暢度，並記錄完整開發歷程以利團隊檢視。",
      ],
      highlights: [
        "前台門市/文章/預約與後台管理雙向對接",
        "5 張完整實務截圖展示操作流程",
        "手機端優先的操作體驗優化",
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
        "餐飲品牌必須在幾秒內建立食慾與品牌記憶，同時不能讓動態視覺犧牲頁面載入速度與資訊獲取效率。",
      approach: [
        "以大幅影像、背景影片與克制的動態節奏塑造沉浸式氛圍，避免元素過度喧賓奪主。",
        "另闢專屬 Showcase 站點，系統性展示前台視覺、後台管理規劃與互動原型設計。",
        "嚴格調校行動端排版與觸控目標，確保跨平台流暢體驗。",
      ],
      highlights: [
        "官網主站與 Showcase 開發介紹雙入口",
        "高品質動效與影片背景無縫融合",
        "前台視覺感染力與後台結構性思維兼備",
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
        "大量高頻變動的市場資訊與文章內容，需要有清晰的資訊架構降低比對成本，並透過高效率的 SEO 佈局獲取自然搜尋流量。",
      approach: [
        "從零負責整體架構規劃、UI/UX 介面設計、前端程式碼撰寫至 VPS 伺服器建置與佈署。",
        "導入內容型 SEO 策略，規劃語意化結構資料與快速檢索路徑。",
        "打造簡潔實用的文章管理後台，讓內容發布維護不再受技術門檻阻礙。",
      ],
      highlights: [
        "從設計、開發到伺服器佈署獨立一人完成",
        "完整 6 張前後台功能畫面展示",
        "兼具內容資訊閱讀與 SEO 搜尋引擎友善度",
      ],
    },
  },
  {
    id: "flashrate",
    title: "聚合免費報價來源",
    subtitle: "分散式即時市場行情數據整合",
    categories: ["functional-web"],
    summary: "分散式採集 • 15個異構數據源 • 黃金・白銀・美元匯率",
    tags: ["數據採集", "15個異構數據源", "行情匯率", "即時介面"],
    liveUrl: "https://goldlab.cloud/",
    images: ["/assets/flashrate.jpg"],
    imageCaptions: ["聚合 15 個異構數據源之即時報價介面"],
  },
  {
    id: "shiny-jewelry",
    title: "形像官網一頁式網站(主頁設計)",
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
    subtitle: "關鍵字搜尋策略與 AI 摘要引用",
    categories: ["seo"],
    summary: "研究規劃產出內容 • 取得關鍵字搜尋排名 • AI摘要引用",
    tags: ["SEO 關鍵字", "自然排名", "內容行銷", "AI 引用"],
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
