/**
 * سيرة ذاتية - أنس أحمد محمد
 * يعرض محتوى data.js باللغة المختارة (?lang=ar أو ?lang=en)
 */

const $ = (id) => document.getElementById(id);

function render(lang) {
    const d = resumeData[lang];
    const L = d.labels;

    // اللغة والاتجاه والعنوان
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = L.title;
    document.querySelectorAll('[data-label]').forEach(el => { el.innerText = L[el.dataset.label]; });

    // شريط الأدوات
    $('switch-lang').innerText = L.switchLang;
    $('download').href = L.pdf;
    $('download').querySelector('span').innerText = L.download;

    // 1. الترويسة
    const p = d.personal;
    $('photo').alt = p.name;
    $('name').innerText = p.name;
    $('tagline').innerText = p.tagline;
    $('summary').innerText = p.summary;
    $('personal-info').innerHTML = [
        ['fa-phone', `<span class="ltr">${p.phone}</span>`],
        ['fa-envelope', `<span class="ltr">${p.email}</span>`],
        ['fa-location-dot', p.address],
        ['fa-flag', p.nationality],
        ['fa-calendar', p.birth],
        ['fa-users', p.status]
    ].map(([icon, value]) => `<div class="info-item"><i class="fas ${icon}"></i><span>${value}</span></div>`).join('');

    // 2. الخبرة العملية (خط زمني بالتفصيل)
    $('experience').innerHTML = d.experience.map(job => `
        <article class="job">
            <div class="job-period">${job.period}</div>
            <div class="job-body">
                <h3 class="job-title">${job.company}</h3>
                <div class="job-role">${job.role}</div>
                ${job.note ? `<p class="job-note">${job.note}</p>` : ''}
                <ul class="job-points">${job.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
            </div>
        </article>`).join('');

    // 3. الخبرات السابقة (سطر لكل وظيفة)
    $('previous').innerHTML = d.previous.map(job => `
        <div class="prev-item">
            <span class="prev-period">${job.period}</span>
            <span><strong>${job.title}</strong> · ${job.role}</span>
        </div>`).join('');

    // 4. الخبرات والمهارات العلمية
    $('scientific-skills').innerHTML = d.scientific.map(skill => `
        <div class="skill">
            <h3>${skill.title}</h3>
            <p>${skill.desc}</p>
        </div>`).join('');

    // 5. البرامج والأدوات (مجموعات)
    $('tools-apps').innerHTML = d.tools.map(group => `
        <div class="tool-group">
            <h3 class="tool-name">${group.group}</h3>
            <div>
                <div class="chips">${group.items.map(t => `<span class="chip">${t}</span>`).join('')}</div>
                <p>${group.desc}</p>
            </div>
        </div>`).join('');

    // 6. المهارات الشخصية والتطوير المهني واللغات
    $('personal-traits').innerHTML = d.traits.map(t => `<li>${t}</li>`).join('');
    $('development').innerText = d.development;
    $('languages').innerHTML = d.languages
        .map(l => `<li><strong>${l.name}</strong><span>${l.level}</span></li>`).join('');

    // 7. تاريخ آخر تحديث
    $('last-update').innerText = d.updateDate;
}

// اللغة: من الرابط أولاً، ثم آخر اختيار للزائر، ثم العربية
function initialLang() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl in resumeData) return fromUrl;
    try {
        const saved = localStorage.getItem('cv-lang');
        if (saved in resumeData) return saved;
    } catch (e) { /* التخزين غير متاح */ }
    return 'ar';
}

let currentLang = initialLang();
render(currentLang);

$('switch-lang').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    render(currentLang);
    try { localStorage.setItem('cv-lang', currentLang); } catch (e) { /* التخزين غير متاح */ }
    const url = new URL(location.href);
    url.searchParams.set('lang', currentLang);
    history.replaceState(null, '', url);
});
