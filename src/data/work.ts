export type WorkCase = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  liveUrl: string;
  challenge: string;
  approach: string[];
  verification: string;
};

export const featuredWork: WorkCase[] = [
  {
    slug: "zyfloral",
    eyebrow: "品牌官網 · 內容體驗",
    title: "子易花苑",
    summary: "把花藝品牌的氣質、服務資訊與內容維護需求，收斂成清楚且能被持續經營的數位門面。",
    cover: "/images/zyfloral.webp",
    coverAlt: "子易花苑網站畫面",
    tags: ["Responsive Web", "CMS", "SEO"],
    liveUrl: "https://zyfloral.com/",
    challenge: "品牌需要同時傳達作品的細膩感、建立服務信任，並讓日常內容不依賴工程師也能更新。",
    approach: [
      "以服務情境與品牌內容重新安排資訊層級，讓訪客更快辨認服務範圍。",
      "建立響應式版面與可維護的內容結構，兼顧展示品質與後續營運。",
      "整理搜尋引擎可讀的頁面結構，保留社群與自然搜尋的進站路徑。",
    ],
    verification: "案例結構已完成；個人職責、協作範圍與成效數據將在取得可公開佐證後補齊。",
  },
  {
    slug: "gold-data-board",
    eyebrow: "資料產品 · 前端工程",
    title: "黃金資訊儀表板",
    summary: "整合多來源市場資訊，將黃金、白銀與美元等變動資料轉為可快速掃讀的決策介面。",
    cover: "/images/goldlab.webp",
    coverAlt: "黃金資訊儀表板網站畫面",
    tags: ["Data UI", "API Integration", "Dashboard"],
    liveUrl: "https://goldlab.cloud/",
    challenge: "分散且更新頻率不同的資訊，容易增加使用者比對成本，也考驗錯誤狀態與行動裝置上的資訊密度。",
    approach: [
      "依照查看頻率與決策重要性建立資料優先序，先呈現核心市場脈絡。",
      "統一不同來源的視覺語言，讓數值、趨勢與時間狀態能被快速辨認。",
      "把載入、失敗與資料延遲視為正常產品狀態，保留可恢復與可理解的回饋。",
    ],
    verification: "目前呈現可觀察的產品與介面決策；來源數量、效能與使用成果待以紀錄驗證後公開。",
  },
  {
    slug: "goodeats",
    eyebrow: "品牌體驗 · 動態敘事",
    title: "好食光",
    summary: "以節奏、影像與清楚的瀏覽動線塑造餐飲品牌體驗，兼顧情緒感染力與跨裝置可用性。",
    cover: "/images/goodeats.webp",
    coverAlt: "好食光餐飲品牌網站畫面",
    tags: ["Art Direction", "Motion", "RWD"],
    liveUrl: "https://goodeats.asia/",
    challenge: "餐飲網站必須在幾秒內建立食慾與品牌記憶，同時不能讓動態效果犧牲資訊取得效率。",
    approach: [
      "用大幅影像與克制的文字層級建立第一印象，避免視覺元素彼此競爭。",
      "以內容節點安排動態，而非為動而動，保留清楚的閱讀與操作節奏。",
      "從小螢幕重新檢視導覽、文字長度與觸控目標，維持行動端完成度。",
    ],
    verification: "本階段先建立專案敘事骨架；上線後將補入可公開的流程產物與實際影響。",
  },
];

export function getWorkCase(slug: string) {
  return featuredWork.find((item) => item.slug === slug);
}
