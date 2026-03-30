/**
 * سيرة ذاتية - أنس أحمد محمد
 * ملف التحكم في حقن البيانات وتوزيع الأيقونات
 */

// 1. حقن المعلومات الشخصية في العمود الجانبي
const personal = resumeData.personal;
document.getElementById('personal-info').innerHTML = `
    <p><i class="fas fa-phone"></i> ${personal.phone}</p>
    <p><i class="fas fa-envelope"></i> ${personal.email}</p>
    <p><i class="fas fa-flag"></i> ${personal.nationality}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${personal.address}</p>
    <p><i class="fas fa-calendar-alt"></i> ${personal.birth}</p>
    <p><i class="fas fa-users"></i> ${personal.status}</p>
`;

// 2. حقن نص "من أنا" مع الحفاظ على التنسيق
document.getElementById('about-me').innerText = resumeData.about;

// 3. حقن السمات الشخصية والهوايات (قوائم نقطية)
document.getElementById('personal-traits').innerHTML = resumeData.traits
    .map(trait => `<li><i class="fas fa-check-circle"></i> ${trait}</li>`)
    .join('');

document.getElementById('hobbies').innerHTML = resumeData.hobbies
    .map(hobby => `<li><i class="fas fa-star"></i> ${hobby}</li>`)
    .join('');

// 4. حقن الخبرات والمهارات العلمية (تنسيق كتل نصية)
const sciIcons = [
    'fa-users-cog',      // القيادة والإدارة
    'fa-chart-line',     // المبيعات والتسويق
    'fa-chess',          // الخطط والاستراتيجيات
    'fa-calculator',     // المهارات الحسابية
    'fa-file-invoice-dollar', // البرامج المحاسبية
    'fa-chart-bar',      // تحليل البيانات
    'fa-microchip'       // المهارات التكنولوجية
];

document.getElementById('scientific-skills').innerHTML = resumeData.scientific.map((skill, index) => {
    const [title, desc] = skill.split(':');
    return `
        <div class="item-block">
            <strong><i class="fas ${sciIcons[index]}"></i> ${title}</strong>
            <p>${desc}</p>
        </div>`;
}).join('');

// 5. حقن البرامج والأدوات (الترتيب المطور: برمجيات، تصميم، بيانات)
const toolIcons = [
    'fas fa-code',           // Google Apps Script
    'fas fa-database',       // Web Scraping
    'fab fa-figma',          // Figma
    'fas fa-mobile-alt',     // GlideApp
    'fas fa-table',          // Google Sheets
    'fas fa-chart-pie',      // Data Studio
    'fas fa-file-image',     // Photoshop
    'fas fa-pen-nib',        // Illustrator
    'fas fa-file-excel',     // Excel
    'fas fa-file-powerpoint',// Google Slides
    'fas fa-file-word'       // Word
];

document.getElementById('tools-apps').innerHTML = resumeData.tools.map((tool, index) => {
    const [title, desc] = tool.split(':');
    return `
        <div class="item-block">
            <strong><i class="${toolIcons[index]}"></i> ${title}</strong>
            <p>${desc}</p>
        </div>`;
}).join('');

// 6. حقن المسيرة العملية (الجدول الزمني المهني)
const workIcons = [
    'fa-building',    // سمارت لايف
    'fa-store',       // تجارة حرة
    'fa-truck',       // توصيل جدة
    'fa-utensils',    // الجونة للحلويات
    'fa-box-open',    // الشاذلية للتمور
    'fa-cookie-bite'  // تالة الجود
];

document.getElementById('work-history').innerHTML = resumeData.work.map((job, index) => {
    const [title, desc] = job.split(':');
    return `
        <div class="item-block">
            <strong><i class="fas ${workIcons[index]}"></i> ${title}</strong>
            <p>${desc}</p>
        </div>`;
}).join('');

// 7. تحديث تاريخ آخر تعديل في تذييل الصفحة
document.getElementById('last-update').innerText = resumeData.updateDate;