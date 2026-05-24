const qtyInput = document.querySelector("[data-qty]");
const subtotalEls = document.querySelectorAll("[data-subtotal]");
const unitPrice = 580;
const langToggle = document.querySelector("[data-lang-toggle]");

const translationPairs = [
  ["萊珀樂", "Hong Kong"],
  ["產品", "Product"],
  ["日誌", "Journal"],
  ["科學", "Science"],
  ["結帳", "Checkout"],
  ["首頁", "Home"],
  ["詳情", "Details"],
  ["了解", "Learn"],
  ["選購", "Shop"],
  ["支援", "Support"],
  ["文章", "Articles"],
  ["購物袋", "Bag"],
  ["返回", "Back"],
  ["護理", "Care"],
  ["結帳 Demo", "Checkout Demo"],
  ["訂單狀態 Demo", "Order Status Demo"],
  ["護足儀式", "Foot-care Rituals"],
  ["PDRN 科學", "PDRN Science"],
  ["全港免運費 · VIP WhatsApp 護足顧問", "Complimentary Hong Kong delivery · VIP WhatsApp foot-care consultation"],
  ["商品頁 Demo · 款式、數量與結帳路徑", "Product page demo · Variant, quantity and checkout path"],
  ["護理日誌 · Shopify Blog 與 SEO 教育內容", "Le Journal · Education content for Shopify blog and SEO"],
  ["付款頁 Demo · 不會處理真實付款", "Demo checkout only · No real payment will be processed"],
  ["多謝頁 Demo · VIP 售後護理由此開始", "Thank-you page demo · VIP aftercare begins here"],
  ["選購足膜", "Shop Foot Mask"],
  ["結帳", "Checkout"],
  ["返回商品", "Back to Product"],
  ["返回首頁", "Back Home"],
  ["法式儀式，", "French ritual,"],
  ["醫學級修護。", "clinical repair."],
  ["法國藥妝靈感，香港沙龍實證。給雙足一場高貴、安靜、真正有效的醫學級修護。", "French pharmacy inspiration, proven in Hong Kong salons. A refined, quiet and clinically effective ritual for your feet."],
  ["探索 REGEN 90", "Explore REGEN 90"],
  ["閱讀護足日誌", "Read The Journal"],
  ["LE PAULA 將 PDRN、90,000ppm Urea 與 3D 彈性水刺複合膜結合，將足部護理提升至面部級儀式。", "LE PAULA combines PDRN, 90,000ppm urea and a 3D elastic spunlace mask to elevate foot care into a facial-grade ritual."],
  ["20分鐘居家 Home Spa。透氣、貼合、鎖精華，讓每一步都重新變得柔軟從容。", "A 20-minute home spa: breathable, close-fitting and essence-locking, so every step feels soft again."],
  ["高級感不止於包裝，", "Luxury is not only packaging,"],
  ["而是配方的秩序。", "it is the discipline of the formula."],
  ["以法式藥妝美學為外在語言，以醫美修護成分為核心。頁面設計適合 Shopify 商品架構：清晰商品路徑、信任訊號、bundle upsell 與 mobile-first checkout。", "The design uses French pharmacy aesthetics as its visual language and clinical repair ingredients as the core. It is structured for Shopify commerce: clear product paths, trust signals, bundle upsell and mobile-first checkout."],
  ["細胞級再生因子，啟動肌底修護與屏障重建。", "A cellular renewal signal for repair and barrier support."],
  ["9%高純度尿素，溫和軟化厚繭與乾裂粗糙。", "9% high-purity urea gently softens calluses, cracks and roughness."],
  ["彈性水刺複合膜貼合足弓，透氣不焗促。", "A flexible spunlace composite mask hugs the arch while staying breathable."],
  ["將居家 Me Time 變成精準而高貴的護足儀式。", "Turns home me-time into a precise, elevated foot-care ritual."],
  ["從青花瓷、雲石、香檳金到深海藍，LE PAULA 的新網店應該像一間高級法式護理 maison：安靜、克制、可信，同時保留產品故事和購買效率。", "From porcelain blue, marble and champagne gold to deep marine navy, the new LE PAULA store should feel like a French care maison: quiet, restrained, trustworthy and still built for conversion."],
  ["「這20分鐘，請把時間還給自己。愛惜自己，才是終身浪漫的開始。」", "\"For these 20 minutes, give time back to yourself. Self-care is where lifelong romance begins.\""],
  ["立即選購", "Shop Now"],
  ["了解 PDRN 科學", "Explore PDRN Science"],
  ["由試用到完整療程，", "From discovery to full ritual,"],
  ["適合 Shopify bundle layout。", "ready for a Shopify bundle layout."],
  ["Demo 用同一主產品設計三個購買入口，方便之後轉成 Shopify product / variant / bundle。", "This demo uses one hero product with three shopping paths, ready to become Shopify products, variants or bundles."],
  ["3片體驗裝，適合第一次感受 REGEN 90 的溫和導入與修護。", "A three-piece discovery set for first-time REGEN 90 repair."],
  ["主打單盒裝，適合 Shopify product page 的核心轉化商品。", "The hero single-box product for the main Shopify product page."],
  ["完整週期護理組合，適合 subscription 或 gift bundle 擴展。", "A complete care-cycle set, ideal for subscription or gift bundle expansion."],
  ["不只賣產品，", "More than selling product,"],
  ["建立高級護理知識感。", "building premium care authority."],
  ["20分鐘的法式 Home Spa，為何比去角質更重要？", "Why a 20-minute French home spa matters more than exfoliation"],
  ["從心理儀式到肌膚屏障，重新理解足部護理的高級感。", "From mental ritual to skin barrier, rethinking what premium foot care means."],
  ["傳統脫皮膜與水刺複合膜的分別", "The difference between peeling masks and spunlace composite masks"],
  ["PDRN 與 Urea 的黃金配方", "The golden pairing of PDRN and urea"],
  ["閱讀後選購 REGEN 90", "Shop REGEN 90 After Reading"],
  ["閱讀護理日誌", "Read Care Journal"],
  ["法式護理日誌，", "A French care journal,"],
  ["建立品牌信任。", "built for brand trust."],
  ["Blog page demo 用 magazine layout 取代普通文章列表，適合 Shopify Blog / Article template，幫 LE PAULA 建立 PDRN、足部修護、居家 ritual 的專業內容資產。", "This blog demo uses a magazine layout instead of a basic article list, making it suitable for Shopify Blog and Article templates while building authority around PDRN, foot repair and home rituals."],
  ["20分鐘法式 Home Spa，讓足部護理變成高級生活儀式", "A 20-minute French home spa that turns foot care into an elevated ritual"],
  ["PDRN 與 90,000ppm Urea：為什麼足部也需要面部級成分？", "PDRN and 90,000ppm urea: why feet deserve facial-grade ingredients"],
  ["傳統塑膠腳膜與 3D 彈性水刺複合膜有何分別？", "Plastic foot masks versus 3D elastic spunlace composite masks"],
  ["從青花瓷到香檳金：LE PAULA 的高級感應該如何被看見？", "From porcelain blue to champagne gold: making LE PAULA luxury visible"],
  ["28天足部更新週期：由乾裂厚繭到柔嫩穩定", "A 28-day foot renewal cycle: from cracked calluses to stable softness"],
  ["內容最終要回到", "Content should return to"],
  ["高級而清晰的轉化。", "clear, premium conversion."],
  ["Blog 底部保留產品入口，係 Shopify 內容商務常用設計：教育、建立信任，再進入 product page。", "The blog keeps a product path at the bottom, a common Shopify content-commerce pattern: educate, build trust, then enter the product page."],
  ["皇牌產品", "Signature Product"],
  ["VIP沙龍顧問推薦", "Recommended by VIP salon consultants"],
  ["醫學級 PDRN 配方足膜，結合 90,000ppm 高純度尿素與 3D 彈性水刺複合膜。適合乾裂、厚繭、暗沉與長期穿高跟鞋後的足部疲態。", "A clinical PDRN foot mask with 90,000ppm high-purity urea and a 3D elastic spunlace composite mask. Designed for cracking, calluses, dullness and foot fatigue from long hours in heels."],
  ["單盒裝 · REGEN 90 Signature", "Single Box · REGEN 90 Signature"],
  ["28天療程 · Maison Set", "28-Day Ritual · Maison Set"],
  ["閨蜜禮盒 · Duo Gift", "Best-Friend Gift · Duo Set"],
  ["加入購物袋並結帳", "Add to Bag and Checkout"],
  ["WhatsApp 顧問配對療程", "Match With a WhatsApp Consultant"],
  ["全港免運費 · 順豐速遞", "Free Hong Kong delivery · SF Express"],
  ["VIP美足顧問一對一在線諮詢", "One-to-one online VIP foot-care consultation"],
  ["適合 Shopify product template / variant / bundle 模組", "Suitable for Shopify product templates, variants and bundle modules"],
  ["核心成分", "Key Ingredients"],
  ["PDRN、90,000ppm Urea、Bosein、Collagen III、Centella、SOD，聚焦修護、軟化、鎖水與舒緩。", "PDRN, 90,000ppm urea, Bosein, Collagen III, Centella and SOD target repair, softening, hydration and calming."],
  ["使用方法", "How To Use"],
  ["清潔雙足後穿上足膜約20分鐘，取下後輕柔按摩至精華吸收。建議以28天作完整修護節奏。", "After cleansing, wear the foot mask for around 20 minutes, then massage remaining essence until absorbed. A 28-day rhythm is recommended for full repair."],
  ["適合人士", "Who It Is For"],
  ["高跟鞋常客、足跟乾裂、厚繭、腳底粗糙、希望在家維持沙龍級足部質感的人士。", "For heel wearers, cracked heels, calluses, rough soles and anyone who wants salon-level foot texture at home."],
  ["完成妳的", "Complete your"],
  ["此頁係 Shopify checkout / payment page 視覺 demo。正式 Shopify checkout 會由 Shopify 系統處理付款安全、稅項、運費與訂單。", "This is a Shopify checkout and payment visual demo. In a live store, Shopify handles payment security, tax, shipping and orders."],
  ["聯絡資料", "Contact"],
  ["送貨資料", "Delivery"],
  ["付款", "Payment"],
  ["順豐速遞 · 免費", "SF Express · Free"],
  ["VIP顧問安排", "VIP consultant arrangement"],
  ["完成付款 Demo", "Complete Demo Payment"],
  ["送貨", "Delivery"],
  ["免費", "Free"],
  ["VIP 顧問", "VIP consultation"],
  ["已包括", "Included"],
  ["總計", "Total"],
  ["妳的高級修護儀式，", "Your elevated repair ritual"],
  ["已經開始。", "has begun."],
  ["這是 Shopify thank-you page demo。正式版本可接駁訂單狀態、物流追蹤、會員推薦、WhatsApp 顧問跟進與二次購買。", "This is a Shopify thank-you page demo. A live version can connect order status, delivery tracking, member referrals, WhatsApp consultant follow-up and repeat purchase flows."],
  ["1. 系統已預留訂單狀態與物流追蹤位置。", "1. Order status and delivery tracking space is ready."],
  ["2. 28天後可自動推薦補充裝或療程組合。", "2. After 28 days, the page can recommend refills or ritual sets."],
  ["3. VIP美足顧問可透過 WhatsApp 跟進妳的28天修護節奏。", "3. A VIP foot-care consultant can follow your 28-day repair rhythm via WhatsApp."],
  ["WhatsApp 顧問", "WhatsApp Consultant"],
  ["商品頁以高級法式美妝氛圍設計，支援 Shopify 轉化。", "Product page designed for Shopify conversion with premium French beauty mood."],
  ["法式靈感醫學級護足 maison，已建立成 Shopify-ready 網店 demo。", "French-inspired clinical foot-care maison. Built as a Shopify-ready ecommerce demo."],
  ["Shopify SEO 與高級教育內容用的日誌頁 prototype。", "Journal page prototype for Shopify SEO and premium education content."]
];

const translations = translationPairs.reduce((maps, [zh, en]) => {
  maps.en.set(zh, en);
  maps.zh.set(en, zh);
  return maps;
}, { zh: new Map(), en: new Map() });

function replaceKeepingWhitespace(value, replacement) {
  const leading = value.match(/^\s*/)[0];
  const trailing = value.match(/\s*$/)[0];
  return `${leading}${replacement}${trailing}`;
}

function translateTextNodes(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const map = translations[lang];
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const text = node.nodeValue.trim();
    if (map.has(text)) {
      node.nodeValue = replaceKeepingWhitespace(node.nodeValue, map.get(text));
    }
  });
}

function setLanguage(lang) {
  const nextLang = lang === "en" ? "en" : "zh";
  localStorage.setItem("lePaulaLang", nextLang);
  document.documentElement.lang = nextLang === "en" ? "en" : "zh-HK";
  document.body.dataset.lang = nextLang;
  translateTextNodes(nextLang);
  if (langToggle) {
    langToggle.dataset.currentLang = nextLang;
    langToggle.setAttribute("aria-label", nextLang === "en" ? "切換至繁體中文" : "Switch to English");
    langToggle.setAttribute("title", nextLang === "en" ? "切換至繁體中文" : "Switch to English");
  }
}

function formatPrice(value) {
  return `HK$${value.toLocaleString("en-HK")}`;
}

function updateTotals() {
  if (!qtyInput) return;
  const qty = Math.max(1, Number(qtyInput.value) || 1);
  qtyInput.value = qty;
  subtotalEls.forEach((el) => {
    el.textContent = formatPrice(unitPrice * qty);
  });
}

document.querySelectorAll("[data-qty-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!qtyInput) return;
    const action = button.dataset.qtyAction;
    const next = Number(qtyInput.value || 1) + (action === "plus" ? 1 : -1);
    qtyInput.value = Math.max(1, next);
    updateTotals();
  });
});

if (qtyInput) {
  qtyInput.addEventListener("change", updateTotals);
  updateTotals();
}

document.querySelectorAll("[data-demo-payment]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "thanks.html";
  });
});

if (langToggle) {
  langToggle.addEventListener("click", () => {
    setLanguage(document.body.dataset.lang === "en" ? "zh" : "en");
  });
}

setLanguage(localStorage.getItem("lePaulaLang") || "zh");
