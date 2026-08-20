(function () {
  "use strict";

  const D = WEDDING_DATA;

  /* =====================================================================
     0. UTIL
  ===================================================================== */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const getParam = (key) => new URLSearchParams(window.location.search).get(key);

  /* =====================================================================
     1. RENDER — isi seluruh DOM dari WEDDING_DATA
  ===================================================================== */
  function renderMeta() {
    document.title = D.meta.siteTitle;
    $("#page-title").textContent = D.meta.siteTitle;
    $("#page-desc").setAttribute("content", D.meta.ogDescription);
  }

  function renderGuest() {
    const guestName = getParam("to");
    $("#cover-guest").textContent = guestName ? decodeURIComponent(guestName) : D.guest.defaultLabel;
  }

  function renderCover() {
    $("#cover-names").textContent = D.couple.initials;
  }

  function renderHero() {
    $("#hero-photo").src = D.couple.heroPhoto;
    $("#hero-photo").alt = `Foto ${D.couple.groom.nickname} & ${D.couple.bride.nickname}`;
    $("#hero-names").innerHTML = `${D.couple.groom.nickname}<br>&amp; ${D.couple.bride.nickname}`;
    $("#hero-quote").textContent = D.couple.heroQuote;
  }

  function formatCountdownDate(iso) {
    const dt = new Date(iso);
    return dt.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  }

  function renderCountdown() {
    $("#countdown-date").textContent = formatCountdownDate(D.countdownTarget);
  }

  function renderCoupleDetails() {
    $("#groom-photo").src = D.couple.groom.photo;
    $("#groom-photo").alt = D.couple.groom.fullName;
    $("#groom-name").textContent = D.couple.groom.fullName;
    $("#groom-parents").textContent = D.couple.groom.parents;

    $("#bride-photo").src = D.couple.bride.photo;
    $("#bride-photo").alt = D.couple.bride.fullName;
    $("#bride-name").textContent = D.couple.bride.fullName;
    $("#bride-parents").textContent = D.couple.bride.parents;
  }

  function renderEvents() {
    const wrap = $("#events-list");
    wrap.innerHTML = D.events.map((ev) => `
      <div class="bg-card frame-line rounded-2xl p-7 text-left reveal">
        <p class="eyebrow mb-2">${ev.name}</p>
        <p class="font-display italic text-xl mb-3">${ev.date}</p>
        <p class="text-sm text-ink/70 mb-1">${ev.time}</p>
        <div class="hairline my-4"></div>
        <p class="text-sm font-medium mb-1">${ev.venueName}</p>
        <p class="text-sm text-ink/60 mb-4">${ev.address}</p>
        <a href="${ev.mapsUrl}" target="_blank" rel="noopener" class="text-xs tracking-[0.15em] uppercase text-sagedeep font-semibold inline-flex items-center gap-1">
          Lihat peta
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    `).join("");
    observeReveals(wrap);
  }

  function renderStory() {
    const wrap = $("#story-list");
    wrap.innerHTML = `<div class="story-line"></div>` + D.loveStory.map((item, i) => {
      const isEven = i % 2 === 0;
      return `
      <div class="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-10 mb-14 last:mb-0 reveal">
        <div class="hidden md:block ${isEven ? "order-1 text-right pr-10" : "order-2 pl-10"}">
          <p class="eyebrow mb-2">${item.year}</p>
          <h4 class="font-display italic text-2xl mb-3">${item.title}</h4>
          <p class="text-sm text-ink/70 leading-relaxed">${item.text}</p>
        </div>
        <div class="${isEven ? "md:order-2" : "md:order-1"}">
          <div class="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-gold ring-4 ring-card"></div>
          <div class="w-full max-w-[220px] aspect-[4/5] rounded-2xl overflow-hidden frame-line ${isEven ? "md:ml-auto md:mr-10" : "md:ml-10"}">
            <img src="${item.photo}" alt="${item.title}" class="w-full h-full object-cover">
          </div>
        </div>
        <div class="md:hidden mt-4">
          <p class="eyebrow mb-2">${item.year}</p>
          <h4 class="font-display italic text-2xl mb-3">${item.title}</h4>
          <p class="text-sm text-ink/70 leading-relaxed">${item.text}</p>
        </div>
      </div>`;
    }).join("");
    observeReveals(wrap);
  }

  function renderGallery() {
    const wrap = $("#gallery-grid");
    const spanClasses = ["", "sm:row-span-2 sm:aspect-auto aspect-square", "", "", "sm:row-span-2 sm:aspect-auto aspect-square", ""];
    wrap.innerHTML = D.gallery.map((src, i) => `
      <button type="button" class="gallery-item reveal rounded-xl aspect-square ${spanClasses[i] || ""}" data-index="${i}" aria-label="Perbesar foto galeri ${i + 1}">
        <img src="${src}" alt="Galeri foto ${i + 1}" class="w-full h-full object-cover rounded-xl">
      </button>
    `).join("");
    observeReveals(wrap);

    $all(".gallery-item", wrap).forEach((btn) => {
      btn.addEventListener("click", () => openLightbox(D.gallery[Number(btn.dataset.index)]));
    });
  }

  function renderRsvp() {
    $("#rsvp-deadline").textContent = `Mohon konfirmasi sebelum ${D.rsvp.deadline}`;
  }

  function renderGift() {
    $("#gift-intro").textContent = D.gift.intro;
    const wrap = $("#gift-banks");
    wrap.innerHTML = D.gift.banks.map((b, i) => `
      <div class="bg-card frame-line rounded-2xl p-6 flex items-center justify-between gap-4 text-left reveal">
        <div>
          <p class="text-xs tracking-[0.15em] uppercase text-sagedeep font-semibold mb-1">${b.bankName}</p>
          <p class="font-display text-lg tracking-wide mb-1" data-acc="${i}">${b.accountNumber}</p>
          <p class="text-xs text-ink/60">a.n. ${b.accountName}</p>
        </div>
        <button type="button" class="copy-btn text-xs tracking-[0.1em] uppercase font-semibold border border-gold rounded-full px-4 py-2" data-copy="${b.accountNumber}">
          Salin
        </button>
      </div>
    `).join("");
    observeReveals(wrap);

    $all("[data-copy]", wrap).forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(btn.dataset.copy);
          const original = btn.textContent;
          btn.textContent = "Tersalin";
          btn.classList.add("copied");
          setTimeout(() => { btn.textContent = original; btn.classList.remove("copied"); }, 1800);
        } catch (e) { /* clipboard unavailable — no-op */ }
      });
    });

    $("#gift-address-intro").textContent = D.gift.addressIntro;
    $("#gift-address").textContent = D.gift.address;
  }

  function renderLocation() {
    $("#location-map").src = D.location.embedMapUrl;
    $("#location-directions").href = D.location.directionsUrl;
  }

  function renderClosing() {
    $("#closing-text").textContent = D.closing.text;
    $("#closing-signoff").textContent = D.closing.signOff;
    $("#closing-names").innerHTML = `${D.couple.groom.nickname} &amp; ${D.couple.bride.nickname}`;
    $("#closing-hashtag").textContent = D.closing.hashtag;
  }

  function renderAll() {
    renderMeta();
    renderGuest();
    renderCover();
    renderHero();
    renderCountdown();
    renderCoupleDetails();
    renderEvents();
    renderStory();
    renderGallery();
    renderRsvp();
    renderGift();
    renderLocation();
    renderClosing();
  }

  /* =====================================================================
     2. COVER OPEN INTERACTION
  ===================================================================== */
  function initCover() {
    const cover = $("#cover");
    const btn = $("#open-invitation");
    btn.addEventListener("click", () => {
      cover.classList.add("is-closed");
      document.body.style.overflow = "";
      tryAutoStartMusic();
      revealInitial();
    }, { once: true });
    document.body.style.overflow = "hidden";
  }

  /* =====================================================================
     3. COUNTDOWN
  ===================================================================== */
  function initCountdown() {
    const target = new Date(D.countdownTarget).getTime();
    const els = {
      days: $('[data-count="days"]'),
      hours: $('[data-count="hours"]'),
      minutes: $('[data-count="minutes"]'),
      seconds: $('[data-count="seconds"]'),
    };
    function tick() {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      els.days.textContent = String(d).padStart(2, "0");
      els.hours.textContent = String(h).padStart(2, "0");
      els.minutes.textContent = String(m).padStart(2, "0");
      els.seconds.textContent = String(s).padStart(2, "0");
    }
    tick();
    setInterval(tick, 1000);
  }

  /* =====================================================================
     4. MUSIC CONTROL (no disruptive autoplay — starts only after
        the guest opens the invitation, and only if not blocked)
  ===================================================================== */
  let musicStarted = false;
  function initMusic() {
    const audio = $("#bg-audio");
    const toggle = $("#music-toggle");
    audio.src = D.music.src;

    toggle.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().then(() => {
          toggle.classList.add("is-playing");
          toggle.setAttribute("aria-pressed", "true");
        }).catch(() => { /* file belum tersedia — abaikan dengan tenang */ });
      } else {
        audio.pause();
        toggle.classList.remove("is-playing");
        toggle.setAttribute("aria-pressed", "false");
      }
    });
  }
  function tryAutoStartMusic() {
    if (musicStarted) return;
    musicStarted = true;
    const audio = $("#bg-audio");
    const toggle = $("#music-toggle");
    audio.play().then(() => {
      toggle.classList.add("is-playing");
      toggle.setAttribute("aria-pressed", "true");
    }).catch(() => { /* browser memblokir autoplay — tamu bisa tap tombol musik */ });
  }

  /* =====================================================================
     5. RSVP — kirim ke WhatsApp mempelai
  ===================================================================== */
  function initRsvp() {
    const form = $("#rsvp-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get("name") || "").toString().trim();
      const attendance = fd.get("attendance");
      const guests = fd.get("guests");
      const message = (fd.get("message") || "").toString().trim();

      const lines = [
        `Assalamu'alaikum, saya ingin konfirmasi kehadiran:`,
        `Nama: ${name}`,
        `Kehadiran: ${attendance}`,
        `Jumlah tamu: ${guests}`,
        message ? `Ucapan: ${message}` : null,
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join("\n"));
      const url = `https://wa.me/${D.rsvp.whatsappNumber}?text=${text}`;
      window.open(url, "_blank", "noopener");
    });
  }

  /* =====================================================================
     6. LIGHTBOX
  ===================================================================== */
  function openLightbox(src) {
    const box = $("#lightbox");
    $("#lightbox-img").src = src;
    box.classList.remove("hidden");
    box.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    const box = $("#lightbox");
    box.classList.add("hidden");
    box.classList.remove("flex");
    document.body.style.overflow = "";
  }
  function initLightbox() {
    $("#lightbox-close").addEventListener("click", closeLightbox);
    $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
  }

  /* =====================================================================
     7. SCROLL REVEAL
  ===================================================================== */
  let observer;
  function observeReveals(scope) {
    $all(".reveal", scope).forEach((el) => observer.observe(el));
  }
  function initReveal() {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observeReveals(document);
  }
  function revealInitial() {
    // Section pertama (di dalam cover) sudah is-visible secara default lewat class HTML.
  }

  /* =====================================================================
     INIT
  ===================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    initCover();
    initCountdown();
    initMusic();
    initRsvp();
    initLightbox();
    initReveal();
  });
})();
