(() => {
  "use strict";

  /* ---------------------------------------------------------------------
     Translations. English is the default/primary language for this site
     (target audience: foreign visitors); Korean is the secondary toggle.
     --------------------------------------------------------------------- */
  const dict = {
    nav_space:      { en: "The Space",        ko: "공간 소개" },
    nav_access:     { en: "Getting Here",     ko: "오시는 길" },
    nav_amenities:  { en: "Amenities",        ko: "편의시설" },
    nav_stay:       { en: "Rates",            ko: "요금 안내" },
    nav_host:       { en: "Host",             ko: "호스트" },
    nav_book:       { en: "Check dates",      ko: "예약 확인" },

    hero_eyebrow:   { en: "Hakgye Station, Exit 2 · Nowon-gu, Seoul", ko: "하계역 2번 출구 · 서울 노원구" },
    hero_title:     { en: "A quiet, sun-filled studio two minutes from the subway", ko: "지하철에서 2분, 볕이 잘 드는 조용한 스튜디오" },
    hero_sub:       { en: "A south-facing apartment with a real kitchen, soft linens and room to breathe — a calm home base for exploring Seoul, run by a host who lives five minutes away.", ko: "주방과 세탁기를 모두 갖춘 남향 스튜디오. 서울을 여행하는 동안 편히 쉴 수 있는 곳이며, 도보 5분 거리에 사는 호스트가 직접 운영합니다." },
    hero_cta_dates: { en: "Check dates & price", ko: "날짜·요금 확인하기" },
    hero_cta_message:{ en: "Message the host",  ko: "호스트에게 메시지" },
    scroll_cue:     { en: "Scroll",  ko: "스크롤" },

    trust_rating:   { en: "Host rating · 6 reviews", ko: "호스트 평점 · 후기 6개" },
    trust_min_unit: { en: "min", ko: "분" },
    trust_walk:     { en: "Walk to Exit 2, Line 7", ko: "7호선 2번 출구까지 도보" },
    trust_size:     { en: "Full-option studio, 5th floor", ko: "풀옵션 스튜디오, 5층" },
    trust_id_val:   { en: "Verified", ko: "인증 완료" },
    trust_id:       { en: "Host identity confirmed", ko: "본인인증 완료 호스트" },

    story_eyebrow:  { en: "The Space", ko: "공간 소개" },
    story_title:    { en: "Furnished the way you'd furnish it for yourself", ko: "내 집처럼 채운 공간" },
    story_p1:       { en: "The apartment faces south, so the light moves slowly across the room from morning to evening. Original wooden lattice doors — a detail from the building's earlier life — still divide the entry from the living area, kept rather than replaced.", ko: "남향이라 아침부터 저녁까지 빛이 방 안을 천천히 가로지릅니다. 건물이 지어질 당시부터 있던 원목 격자문은 없애지 않고 그대로 남겨, 현관과 거실을 자연스럽게 나눕니다." },
    story_p2:       { en: "Everything you'd need for more than a weekend is here: a real induction kitchen, a washer, fast wifi, and a proper work table, not just a hotel desk.", ko: "며칠 이상 머물러도 부족함이 없도록 인덕션, 세탁기, 빠른 와이파이, 그리고 호텔 책상이 아닌 제대로 된 작업 테이블까지 갖췄습니다." },
    story_p3:       { en: "One bed, one bath, one kitchen, one quiet street in a residential neighborhood most visitors never see.", ko: "침실 하나, 욕실 하나, 주방 하나. 대부분의 여행자가 지나치는 조용한 주택가 골목에 자리합니다." },

    gallery_eyebrow:{ en: "Look Around", ko: "둘러보기" },
    gallery_title:  { en: "Every corner, as it actually looks", ko: "실제 모습 그대로" },

    access_eyebrow: { en: "Getting Here", ko: "오시는 길" },
    access_title:   { en: "Closer to everything than it looks on a map", ko: "지도보다 훨씬 가까운 거리" },
    route_1_time:   { en: "2 min walk", ko: "도보 2분" },
    route_1_desc:   { en: "From Hakgye Station Exit 2 (Line 7) straight to the building — no transfers, no long block to find it.", ko: "하계역 7호선 2번 출구에서 건물까지 직진. 환승도, 헤매는 골목도 없습니다." },
    route_2_time:   { en: "1 bus", ko: "버스 한 번" },
    route_2_desc:   { en: "A direct bus to Gangnam and to Incheon International Airport stops right outside the building.", ko: "건물 바로 앞 정류장에서 강남과 인천국제공항으로 가는 직행버스를 탈 수 있습니다." },
    route_3_time:   { en: "On foot", ko: "도보로" },
    route_3_desc:   { en: "The Gyeongchun Line Forest Trail and the Jungnangcheon riverside walk are both close enough for a morning walk before breakfast.", ko: "경춘선숲길과 중랑천 산책로 모두 아침 산책하기 좋은 거리에 있습니다." },
    near_1_name:    { en: "Daiso (daily goods)", ko: "다이소" },
    near_1_time:    { en: "2 min walk", ko: "도보 2분" },
    near_2_name:    { en: "Bukseoul Museum of Art", ko: "북서울미술관" },
    near_2_time:    { en: "Nearby", ko: "인근" },
    near_3_name:    { en: "Eulji University Hospital", ko: "을지대학교병원" },
    near_3_time:    { en: "Nearby", ko: "인근" },
    near_4_name:    { en: "Seoul National University of Science & Technology", ko: "서울과학기술대학교" },
    near_4_time:    { en: "Nearby", ko: "인근" },
    near_5_name:    { en: "Jungnangcheon riverside path", ko: "중랑천 산책로" },
    near_5_time:    { en: "Walking distance", ko: "도보 거리" },

    amenities_eyebrow:{ en: "Amenities", ko: "편의시설" },
    amenities_title:  { en: "Set up to live in, not just sleep in", ko: "머무는 게 아니라 지내는 곳" },
    am_1_title:     { en: "Full kitchen", ko: "풀옵션 주방" },
    am_1_desc:      { en: "Induction cooktop, fridge, microwave, sink and dining table for two.", ko: "인덕션, 냉장고, 전자레인지, 싱크대와 2인용 식탁까지 완비." },
    am_2_title:     { en: "In-unit washer", ko: "세탁기 완비" },
    am_2_desc:      { en: "Do laundry like you're at home — no coin machines, no laundromat trips.", ko: "코인 세탁소를 찾아다닐 필요 없이 집처럼 편하게 세탁하세요." },
    am_3_title:     { en: "Fast wifi", ko: "빠른 와이파이" },
    am_3_desc:      { en: "Stay connected for work or for sending photos home the same night.", ko: "업무를 처리하거나 그날 찍은 사진을 바로 보낼 수 있습니다." },
    am_4_title:     { en: "Smart TV & A/C", ko: "TV·에어컨" },
    am_4_desc:      { en: "Climate control for every season, plus a TV for a quiet night in.", ko: "사계절 냉난방과 함께, 조용한 저녁을 위한 TV도 있습니다." },
    am_5_title:     { en: "Entry closet", ko: "현관 수납" },
    am_5_desc:      { en: "Wardrobe and shoe cabinet, so your things have a place from day one.", ko: "옷장과 신발장이 있어 도착 첫날부터 짐 정리가 편합니다." },
    am_6_title:     { en: "Real workspace", ko: "제대로 된 작업 공간" },
    am_6_desc:      { en: "A proper table and chair for a laptop day, not a perch on the bed.", ko: "침대 위가 아닌, 노트북 작업하기 좋은 테이블과 의자가 있습니다." },

    stay_eyebrow:   { en: "Rates & Terms", ko: "요금 및 이용안내" },
    stay_title:     { en: "Priced by the week, the way Seoul does short stays", ko: "서울의 단기임대 방식대로, 주 단위 요금" },
    rate_1_label:   { en: "Weekly rate", ko: "주간 임대료" },
    rate_2_label:   { en: "4+ week stay (10% off)", ko: "4주 이상 계약 시 (10% 할인)" },
    rate_3_label:   { en: "Management fee", ko: "관리비" },
    rate_4_label:   { en: "One-time cleaning fee", ko: "청소비 (1회)" },
    rate_5_label:   { en: "Security deposit", ko: "보증금" },
    rate_per_week:  { en: "/ week", ko: "/ 주" },
    rate_note:      { en: "Move in right away and ₩50,000 comes off the total. The deposit is fully refunded at check-out, minus any damage. Prices shown in Korean won (₩).", ko: "즉시 입주 시 5만 원이 할인됩니다. 보증금은 퇴실 시 파손이 없다면 전액 환불됩니다. 모든 금액은 원화(₩) 기준입니다." },
    info_1_dt:      { en: "Check-in / Check-out", ko: "입실 / 퇴실" },
    info_1_dd:      { en: "From 3:00 PM · until 12:00 PM", ko: "오후 3시 입실 · 오후 12시 퇴실" },
    info_2_dt:      { en: "Minimum stay", ko: "최소 계약 기간" },
    info_2_dd:      { en: "1 week", ko: "1주" },
    info_3_dt:      { en: "Sleeps", ko: "인원" },
    info_3_dd:      { en: "1 bedroom, 1 bathroom, best suited to a solo traveler or couple", ko: "방 1개, 욕실 1개 · 1인 또는 2인에게 적합" },
    info_4_dt:      { en: "House rules", ko: "이용 규칙" },
    info_4_dd:      { en: "No smoking indoors · No pets", ko: "실내 흡연 불가 · 반려동물 동반 불가" },

    host_eyebrow:   { en: "Your Host", ko: "호스트 소개" },
    host_title:     { en: "Hosted by someone who's five minutes away", ko: "도보 5분 거리에 사는 호스트" },
    host_desc:      { en: "Rated 5.0 across 6 stays. Identity-verified, and quick to answer if anything comes up during your visit.", ko: "6건의 후기 모두 5.0점을 받았습니다. 본인인증을 완료했으며, 머무는 동안 문의사항에 빠르게 답변합니다." },
    host_badge_1:   { en: "Identity verified", ko: "본인인증 완료" },
    host_badge_2:   { en: "5.0 rating", ko: "평점 5.0" },
    host_badge_3:   { en: "Fast response", ko: "빠른 응답" },

    cta_title:      { en: "Come see it for yourself", ko: "직접 확인해 보세요" },
    cta_sub:        { en: "Check live availability and pricing on the booking page, or message the host directly with questions before you commit.", ko: "예약 페이지에서 실시간 요금과 예약 가능 여부를 확인하거나, 예약 전 호스트에게 직접 문의해 보세요." },
    cta_book:       { en: "Check dates & book", ko: "날짜 확인 후 예약하기" },
    cta_message:    { en: "Message on WhatsApp / KakaoTalk", ko: "왓츠앱 / 카카오톡으로 문의" },

    footer_address: { en: "Gongneung-ro 351, Hagye-dong, Nowon-gu, Seoul — 2 min walk from Hakgye Station Exit 2 (Line 7).", ko: "서울특별시 노원구 공릉로 351 (하계동) — 하계역 7호선 2번 출구 도보 2분." },
    footer_book:    { en: "Check dates", ko: "날짜 확인하기" },
    footer_note:    { en: "Photos and details reflect the actual apartment. Availability and final pricing are confirmed at booking.", ko: "게재된 사진과 정보는 실제 숙소를 기준으로 합니다. 최종 예약 가능 여부와 요금은 예약 시 확인됩니다." },
  };

  const root = document.documentElement;
  let currentLang = "en";

  function applyLang(lang) {
    currentLang = lang;
    root.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const entry = dict[key];
      if (entry && entry[lang] != null) el.textContent = entry[lang];
    });
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
    try { localStorage.setItem("hakgye-lang", lang); } catch (e) { /* ignore */ }
  }

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  let savedLang = "en";
  try { savedLang = localStorage.getItem("hakgye-lang") || "en"; } catch (e) { /* ignore */ }
  applyLang(savedLang);

  /* ---------------- header scroll state ---------------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- gallery lightbox ---------------- */
  const galleryGrid = document.getElementById("galleryGrid");
  const items = galleryGrid ? Array.from(galleryGrid.querySelectorAll(".gallery-item")) : [];
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  let activeIndex = 0;

  function openLightbox(index) {
    activeIndex = index;
    const item = items[activeIndex];
    lightboxImg.src = item.dataset.full;
    lightboxImg.alt = item.querySelector("img").alt;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    document.getElementById("lightboxClose").focus();
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }
  function step(delta) {
    activeIndex = (activeIndex + delta + items.length) % items.length;
    const item = items[activeIndex];
    lightboxImg.src = item.dataset.full;
    lightboxImg.alt = item.querySelector("img").alt;
  }

  items.forEach((item, i) => item.addEventListener("click", () => openLightbox(i)));
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => step(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => step(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  /* ---------------- messenger placeholder ---------------- */
  const pendingMessageLinks = [
    document.getElementById("msgHostBtn"),
    document.getElementById("msgHostBtn2"),
  ].filter(Boolean);

  let toastTimer = null;
  function showToast(msg) {
    let toast = document.getElementById("hakgyeToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "hakgyeToast";
      toast.setAttribute("role", "status");
      toast.style.cssText = "position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:#2b2620;color:#f7f3ec;padding:0.8rem 1.2rem;border-radius:4px;font-size:0.85rem;z-index:300;box-shadow:0 8px 24px rgba(0,0,0,0.25);";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = "1";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.style.opacity = "0"; }, 2600);
  }

  pendingMessageLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showToast(currentLang === "ko"
        ? "연락처 링크가 곧 연결될 예정입니다. 지금은 33m2 예약 페이지를 이용해 주세요."
        : "Direct messaging link coming soon — please use the booking page for now.");
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
