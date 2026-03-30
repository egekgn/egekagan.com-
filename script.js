/* =================================================
   Ege Kağan Danacı Portfolyo — Vanilla JS
   React + Framer Motion → Pure DOM + CSS animations
   ================================================= */

// ─── CONFIG ──────────────────────────────────────
const GITHUB_USERNAME = 'egekgn';

const roles = [
  'Siber Güvenlik Öğrencisi',
  'Sızma Test Uzmanı',
  'Yazılım Geliştirici',
  'CTF Meraklısı',
];

const heroQuotes = [
  'Gündüzleri geliştirici, geceleri güvenlik araştırmacısı. Zarif yazılımlar üretirken sürekli kendime soruyorum: "Bu nasıl exploit edilebilir?" — sonra kimse bulmadan önce düzeltiyorum.',
  'En iyi savunma, saldırmayı bilmekten geçer. Sistemler kuruyorum ve sınırlarını anlamak için onları kırıyorum. Bir güvenlik araştırmacısı olarak kod yazıyor, bir geliştirici olarak düşman gibi düşünüyorum.',
  'Kod şiirdir. Güvenlik onun kalkanıdır. Dijital deneyimler inşa ediyorum ve yazılım güvenliğini bir sanat olarak görüyorum — çünkü iyi yazılım kırılmaz olmalı.',
  'Güvenlik açıkları istismar edilmeden önce harekete geçiyorum. İlk satır koddan son deploy\'a kadar — güvenliği aklımda tutarak inşa ediyorum, geliştirici uzmanlığıyla savunuyorum.',
  'Bugün bulduğum her açık, yarın birisini korur. Meraktan doğdum, kodla şekillendim. "Ya..." diye soran bir geliştiriciyim ve "Benim gözetimimde olmaz" diyen bir güvenlik araştırmacısıyım.',
];

const terminalLines = [
  { text: '> Güvenlik taraması başlatılıyor...', color: '#888' },
  { text: '> Hedef: egekagandanaci.dev', color: '#00ff88' },
  { text: '', color: '#fff' },
  { text: 'class SiberGuvenlikOgrencisi:', color: '#ff79c6' },
  { text: '    def __init__(self):', color: '#8be9fd' },
  { text: '        self.isim = "Ege Kağan Danacı"', color: '#f1fa8c' },
  { text: '        self.rol = "Siber Güvenlik Öğrencisi"', color: '#f1fa8c' },
  { text: '        self.durum = "AKTİF"', color: '#50fa7b' },
  { text: '', color: '#fff' },
  { text: '> Tarama tamamlandı. Açık bulunamadı.', color: '#00ff88' },
  { text: '> Sistem güvende ✓', color: '#50fa7b' },
];

const experiences = [
  {
    role: 'Siber Güvenlik Stajyeri - CyberArts',
    company: 'Staj Deneyimi',
    date: '2026 - Devam ediyor',
    skills: ['Pentest', 'Zafiyet Tespiti', 'Ağ Güvenliği', 'Raporlama', 'Infosec'],
    color: '#00ff88',
  },
  {
    role: 'Hobi Projeler & CTF',
    company: 'Bağımsız Çalışma',
    date: '2023 - Günümüz',
    skills: ['CTF Yarışmaları', 'Web Güvenliği', 'Python', 'Bash Scripting', 'Tools'],
    color: '#00d4ff',
  },
];

const achievements = [
  {
    title: 'Sunum',
    place: 'Aktif Turkcell çalışanları',
    prize: 'YER: Turkcell',
    description: 'Sızma Testi dersi kapsamında Turkcell AppSec ekibine WebSocket protokolünün güvenlik risklerini anlattım. Sunum sırasında Burp Suite kullanarak canlı bir manipülasyon demosu gerçekleştirdim ve stateful yapıdaki veri trafiğinin nasıl manipüle edilebileceğini uygulamalı olarak gösterdim.',
    images: ['images/image.png'],
    link: 'https://www.linkedin.com/posts/egeka%C4%9Fandanac%C4%B1_websocketsecurity-websocket-applicationsecurity-ugcPost-7412131074878722049-vO9a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdV1C4BO7LKd3s-ec88SzsOpyb6JEfh7ZI',
    color: '#00ff88',
  },
];

const skillCategories = [
  {
    label: 'Siber Güvenlik',
    color: '#00ff88',
    skills: ['Pentest', 'Web Uygulama Güvenliği', 'Ağ Güvenliği', 'Zafiyet Analizi', 'Tersine Mühendislik', 'Burp Suite', 'OSINT'],
  },
  {
    label: 'Geliştirme',
    color: '#00d4ff',
    skills: ['Python', 'JavaScript', 'Bash', 'C++', 'HTML/CSS', 'SQL', 'Git'],
  },
  {
    label: 'Araçlar & Sistem',
    color: '#bd00ff',
    skills: ['Kali Linux', 'Docker', 'VirtualBox', 'Metasploit', 'Burp Suite', 'Nmap', 'SQLmap', 'Feroxbuster', 'Gobuster', 'Wireshark'],
  },
];

const projectDescriptions = {
  AsusTufFanControl_Linux: 'Linux üzerinde ASUS TUF ve ROG dizüstü bilgisayarlar için geliştirilmiş güçlü bir sistem kontrol aracı. Fan Kontrolü, Batarya Sağlığı ve Aura Sync RGB özellikleri içerir.',
  Vulnerability_Scanner: 'Web uygulamaları için otomatik güvenlik tarama aracı. SQLi, XSS, CSRF ve SSRF açıklarını tespit eder.',
  '403-bypass3r': 'Penetrasyon testi ve bug bounty süreçlerinde 403 Forbidden hatalarını aşmak için geliştirilmiş ileri düzey script.',
  Smart_Attendance: 'Python ve OpenCV kullanarak yüz tanıma tabanlı yoklama sistemi. Verimli ve otomatik çalışır.',
  Land_Registry_Using_BlockChain: 'Solidity ve Web3.js ile inşa edilmiş blockchain tabanlı tapu sicil sistemi.',
};

const langColors = {
  Python: '#3572A5', QML: '#44a51c', Shell: '#89e051', HTML: '#e34c26',
  JavaScript: '#f1e05a', TypeScript: '#2b7489', 'C++': '#f34b7d', C: '#555',
  Solidity: '#AA6746', Go: '#00ADD8', Rust: '#dea584', Java: '#b07219',
};

const contactLanguages = [
  'Let\'s Work Together', 'साथ मिलकर काम करें', 'Trabajemos Juntos',
  'Travaillons Ensemble', 'Zusammenarbeiten!', '一緒に働こう',
  '함께 하자', 'Работаем вместе', '一起工作吧', "Birlikte Çalışalım",
];

// ─── INTRO ────────────────────────────────────────
function runIntro() {
  const intro = document.getElementById('intro-screen');
  const nameEl = document.getElementById('introName');
  const text = 'EGE KAĞAN DANACI';
  let i = 0;

  if (!intro || !nameEl) return;

  nameEl.innerHTML = '<span class="intro-name-inner"></span>';
  const inner = nameEl.querySelector('.intro-name-inner');
  nameEl.style.opacity = '0';
  setTimeout(() => { nameEl.style.opacity = '1'; }, 100);

  const type = () => {
    if (i <= text.length) {
      inner.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 60);
    }
  };
  type();

  setTimeout(() => {
    intro.style.transition = 'opacity 0.4s ease';
    intro.style.opacity = '0';
    setTimeout(() => {
      document.body.classList.add('intro-done');
      initAfterIntro();
    }, 400);
  }, 3300);
}

function initAfterIntro() {
  // Intro bitince smooth scroll'u tekrar aç
  setTimeout(() => {
    document.documentElement.classList.remove('no-smooth');
    document.documentElement.style.scrollBehavior = 'smooth';
  }, 500); // Biraz daha uzun bekle Safari stabilizasyonu için
  
  // Artık JS ile scroll'a dokunmuyoruz.
  startTypewriter();
  startQuoteTypewriter();
  startHoloTerminal();
  animateOnScroll();
}

// ─── NAVBAR ───────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!navbar || !mobileMenuBtn || !mobileMenu) return;

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
  }, { passive: true });

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenuBtn.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenuBtn.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ─── SMOOTH ANCHOR SCROLL ─────────────────────
function initSmoothAnchors() {
  const navHeight = (document.querySelector('.navbar')?.offsetHeight || 80);
  document.querySelectorAll('.section').forEach(el => { el.style.scrollMarginTop = `${navHeight}px`; });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const startY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const rectTop = target.getBoundingClientRect().top;
      const endY = Math.max(0, startY + rectTop - navHeight);
      const duration = 500;
      const ease = t => (t < 0.5) ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const startTime = performance.now();
      document.body.classList.add('is-scrolling');
      const prevBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      function step(now) {
        const elapsed = now - startTime;
        const p = Math.min(elapsed / duration, 1);
        const eased = ease(p);
        const y = Math.round(startY + (endY - startY) * eased);
        window.scrollTo(0, y);
        if (elapsed < duration) {
          requestAnimationFrame(step);
        } else {
          document.body.classList.remove('is-scrolling');
          document.documentElement.style.scrollBehavior = prevBehavior || 'smooth';
        }
      }
      requestAnimationFrame(step);
      history.pushState(null, '', href);
    });
  });
}

// ─── TYPEWRITER ROLE ──────────────────────────────
function startTypewriter() {
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const el = document.getElementById('typewriterRole');

  function tick() {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => { isDeleting = true; tick(); }, 2000);
      return;
    }
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    charIndex += isDeleting ? -1 : 1;
    el.textContent = current.slice(0, charIndex);
    setTimeout(tick, speed);
  }
  tick();
}

// ─── QUOTE TYPEWRITER ─────────────────────────────
function startQuoteTypewriter() {
  const quoteIndex = Math.floor(Math.random() * heroQuotes.length);
  const quote = heroQuotes[quoteIndex];
  const placeholder = document.getElementById('quotePlaceholder');
  const quoteText = document.getElementById('quoteText');
  let i = 0;

  placeholder.textContent = quote;

  setTimeout(() => {
    const type = () => {
      if (i <= quote.length) {
        quoteText.textContent = quote.slice(0, i);
        i++;
        setTimeout(type, 25);
      } else {
        quoteText.classList.add('combo-glitch');
        quoteText.setAttribute('data-text', quote);
      }
    };
    type();
  }, 1000);
}

// ─── HOLO TERMINAL ────────────────────────────────
function startHoloTerminal() {
  const body = document.getElementById('holoBody');
  const timeEl = document.getElementById('holoTime');

  // Time update
  const updateTime = () => {
    if (timeEl) timeEl.textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
  };
  updateTime();
  setInterval(updateTime, 1000);

  let lineIdx = 0;
  let charIdx = 0;
  let completedLines = [];
  let showCursor = true;

  setInterval(() => { showCursor = !showCursor; render(); }, 530);

  function render() {
    let html = '';
    completedLines.forEach((line, i) => {
      html += `<div class="holo-line"><span class="line-number">${String(i + 1).padStart(2, '0')}</span><span style="color:${line.color}">${escHtml(line.text)}</span></div>`;
    });
    if (lineIdx < terminalLines.length) {
      const cur = terminalLines[lineIdx];
      html += `<div class="holo-line"><span class="line-number">${String(completedLines.length + 1).padStart(2, '0')}</span><span style="color:${cur.color}">${escHtml(cur.text.slice(0, charIdx))}</span><span style="opacity:${showCursor ? 1 : 0};color:#00ff88">█</span></div>`;
    }
    body.innerHTML = html;
  }

  function typeLine() {
    if (lineIdx >= terminalLines.length) return;
    const line = terminalLines[lineIdx];
    if (charIdx < line.text.length) {
      charIdx++;
      render();
      setTimeout(typeLine, 30 + Math.random() * 20);
    } else {
      setTimeout(() => {
        completedLines.push(line);
        lineIdx++;
        charIdx = 0;
        render();
        typeLine();
      }, line.text === '' ? 50 : 100);
    }
  }
  typeLine();
}

function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ─── GITHUB STATS ─────────────────────────────────
async function fetchGithubStats() {
  try {
    const r = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (r.ok) {
      const d = await r.json();
      const el = document.getElementById('githubRepos');
      if (el) el.textContent = (d.public_repos || 17) + '+';
    }
  } catch {}
}

// ─── ACHIEVEMENTS ─────────────────────────────────
let achIndex = 0;
let achImageIndex = 0;
let achImageTimer = null;

function renderAchievement(idx) {
  const ach = achievements[idx];
  if (!ach) return; // Add check to prevent crashing if index is wrong
  const display = document.getElementById('achievementDisplay');
  if (!display) return;

  const imagesHtml = ach.images.map((img, i) =>
    `<img src="${img}" alt="${ach.title} ${i+1}" class="ach-img ${i === 0 ? 'active' : ''}" data-ach-img="${i}">`
  ).join('');

  display.innerHTML = `
    <div class="ach-card animate-fade-up" style="border-color:${ach.color}40">
      <div class="ach-images">
        ${imagesHtml}
        <div class="ach-img-dots">
          ${ach.images.map((_, i) => `<span class="ach-dot ${i===0?'active':''}" data-dot="${i}"></span>`).join('')}
        </div>
      </div>
      <div class="ach-info">
        <h3 style="color:${ach.color}">${ach.title}</h3>
        <span class="ach-place">${ach.place}</span>
        <span class="ach-prize" style="color:${ach.color}">${ach.prize}</span>
        <p>${ach.description}</p>
        <a href="${ach.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top:12px">
          LinkedIn'de Görüntüle →
        </a>
      </div>
    </div>
  `;

  achImageIndex = 0;
  if (achImageTimer) clearInterval(achImageTimer);
  achImageTimer = setInterval(() => rotateAchImage(ach.images.length), 2000);
}

function rotateAchImage(total) {
  if (total === 0) return;
  achImageIndex = (achImageIndex + 1) % total;
  document.querySelectorAll('[data-ach-img]').forEach(img => {
    img.classList.toggle('active', parseInt(img.dataset.achImg) === achImageIndex);
  });
  document.querySelectorAll('[data-dot]').forEach(dot => {
    dot.classList.toggle('active', parseInt(dot.dataset.dot) === achImageIndex);
  });
}

function initAchievements() {
  renderAchievement(0);
  document.querySelectorAll('.ach-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.tab);
      if (idx === achIndex && document.getElementById('achievementDisplay').children.length > 0) return;
      
      document.querySelectorAll('.ach-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      achIndex = idx;
      renderAchievement(achIndex);
    });
  });
}

// ─── EXPERIENCE TIMELINE ──────────────────────────
function renderExperience() {
  const container = document.getElementById('experienceTimeline');
  if (!container) return;

  container.innerHTML = experiences.map((exp, i) => `
    <div class="exp-card animate-fade-up" style="border-left:3px solid ${exp.color}; animation-delay:${i*0.1}s">
      <div class="exp-card-top">
        <div class="exp-icon" style="color:${exp.color};border-color:${exp.color}40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <span class="exp-date" style="color:${exp.color}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${exp.date}
        </span>
      </div>
      <h3 class="exp-role">${exp.role}</h3>
      <p class="exp-company">${exp.company}</p>
      <div class="exp-skills">
        ${exp.skills.map(s => `<span class="skill-tag" style="border-color:${exp.color}40">${s}</span>`).join('')}
      </div>
      ${exp.image
        ? `<button class="btn btn-sm" onclick="openLightbox('${exp.image}')" style="margin-top:12px;color:${exp.color};border-color:${exp.color}40">Sertifikayı Görüntüle</button>`
        : exp.link
        ? `<a href="${exp.link}" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="margin-top:12px;color:${exp.color};border-color:${exp.color}40">LinkedIn'de Gör →</a>`
        : ''}
    </div>
  `).join('');
}

// ─── SKILLS ───────────────────────────────────────
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = skillCategories.map(cat => `
    <div class="skill-category">
      <div class="skill-cat-header" style="border-color:${cat.color}">
        <h3 style="color:${cat.color}">${cat.label}</h3>
      </div>
      <div class="skill-badges">
        ${cat.skills.map(skill => `
          <span class="skill-badge" style="border-color:${cat.color};color:${cat.color};box-shadow:0 0 10px ${cat.color}20">${skill}</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ─── PROJECTS ─────────────────────────────────────
async function fetchProjects() {
  const grid = document.getElementById('projectsGrid');
  const loading = document.getElementById('projectsLoading');

  try {
    const r = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
    if (!r.ok) throw new Error('API error');
    const repos = await r.json();

    const filtered = repos.filter(r => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    if (loading) loading.style.display = 'none';

    grid.innerHTML = filtered.slice(0, 12).map(repo => {
      const desc = projectDescriptions[repo.name] || repo.description || 'A project from my GitHub.';
      const langColor = langColors[repo.language] || '#8892a0';
      const tags = repo.topics?.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join('') ||
        `<span class="project-tag">${repo.language || 'Code'}</span>`;

      return `
        <article class="project-card animate-fade-up">
          <div class="project-header">
            <div class="project-dots">
              <span class="dot"></span><span class="dot"></span><span class="dot"></span>
            </div>
            <span class="project-path">~/${repo.name.toLowerCase()}</span>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View on GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <div class="project-body">
            <h3 class="project-title">${repo.name.replace(/_/g, ' ')}</h3>
            <p class="project-desc">${desc}</p>
            <div class="project-tags">${tags}</div>
          </div>
          <div class="project-footer">
            <div class="project-meta">
              <span class="project-lang">
                <span class="lang-dot" style="background:${langColor}"></span>
                ${repo.language || 'Unknown'}
              </span>
              <span class="project-stars">★ ${repo.stargazers_count}</span>
              <span class="project-forks">⑂ ${repo.forks_count}</span>
            </div>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="view-code">
              Kodu Gör →
            </a>
          </div>
        </article>
      `;
    }).join('');

  } catch (err) {
    if (loading) loading.textContent = '⚠ Projeler yüklenemedi';
    grid.innerHTML = `<p style="color:var(--text-secondary);text-align:center">GitHub projeleri alınamadı. Bağlantınızı kontrol edin.</p>`;
  }
}

// ─── CONTACT FORM ─────────────────────────────────
function initContact() {
  // Language cycling
  const langEl = document.getElementById('langDisplay');
  let langIdx = 0;
  const cycleLang = () => {
    langIdx = (langIdx + 1) % contactLanguages.length;
    if (langEl) {
      langEl.style.opacity = '0';
      setTimeout(() => {
        langEl.textContent = contactLanguages[langIdx];
        langEl.style.opacity = '1';
        langEl.style.transition = 'opacity 0.15s';
      }, 80);
    }
    const pause = langIdx === contactLanguages.length - 1 ? 3000 : 250;
    setTimeout(cycleLang, pause);
  };
  setTimeout(cycleLang, 1000);

  // EmailJS init
  if (window.emailjs) {
    emailjs.init('ABKR4-_2sh0fvSCyZ');
  }

  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.textContent = 'Gönderiliyor...';
      submitBtn.disabled = true;

      try {
        await emailjs.sendForm(
          'service_x2xgwwx', 
          'template_2h5vjvn', 
          e.target, 
          'ABKR4-_2sh0fvSCyZ'
        );
        
        showToast('Mesaj başarıyla gönderildi! En kısa sürede geri döneceğim.', 'success');
        form.reset();
      } catch (error) {
        console.error('EmailJS Error:', error);
        showToast('Mesaj gönderilemedi. Lütfen tekrar deneyin.', 'error');
      } finally {
        submitBtn.innerHTML = 'Mesaj Gönder <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
        submitBtn.disabled = false;
      }
    });
  }
}

// ─── TOAST ────────────────────────────────────────
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const icon = document.getElementById('toastIcon');
  const title = document.getElementById('toastTitle');
  const msg = document.getElementById('toastMessage');
  const close = document.getElementById('toastClose');

  icon.innerHTML = type === 'success'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';

  title.textContent = type === 'success' ? 'Başarılı' : 'Hata';
  msg.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.remove('hidden');

  const autoClose = setTimeout(() => hideToast(), 5000);
  close.onclick = () => { clearTimeout(autoClose); hideToast(); };
}

function hideToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('hiding');
  setTimeout(() => { toast.classList.add('hidden'); toast.classList.remove('hiding'); }, 300);
}

// ─── LIGHTBOX ─────────────────────────────────────
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImage');
  if (!lb || !img) return;
  img.src = src;
  lb.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.add('hidden');
  document.body.style.overflow = '';
}

function initLightbox() {
  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
}

// ─── SCROLL ANIMATIONS ────────────────────────────
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-fade-up, .animate-slide-left, .animate-slide-right, .animate-fade-in');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => {
    // Hero içindekiler zaten görünür, sadece observer'a eklemiyoruz
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });
}

// ─── INIT ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled');
  document.documentElement.classList.add('no-smooth');

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.scrollTo(0, 0); // Sayfa ilk yüklendiğinde en üste gitmeyi garanti et

  if (window.location.hash) {
    history.replaceState(null, null, ' ');
  }

  const footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  initNavbar();
  initSmoothAnchors();
  initLightbox();
  fetchGithubStats();
  runIntro();
  initAchievements();
  renderExperience();
  renderSkills();
  fetchProjects();
  initContact();
});
