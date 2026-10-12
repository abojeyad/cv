// محتوى السيرة الذاتية باللغتين. عدّل النص هنا، ثم أعد توليد ملفات PDF (انظر build-pdf.sh).
const resumeData = {
    ar: {
        labels: {
            title: "السيرة الذاتية | أنس أحمد محمد",
            experience: "الخبرة العملية",
            previous: "الخبرات السابقة",
            scientific: "الخبرات والمهارات العلمية",
            tools: "البرامج والأدوات",
            traits: "المهارات الشخصية",
            development: "التطوير المهني",
            languages: "اللغات",
            updated: "تاريخ آخر تحديث:",
            switchLang: "English",
            download: "تحميل PDF",
            pdf: "pdf/Anas-Ahmed-CV-AR.pdf"
        },
        personal: {
            name: "أنس أحمد محمد",
            tagline: "إدارة المبيعات وتطوير الأعمال | SaaS والحلول المؤسسية | المنتجات الرقمية",
            summary: "متخصص في إدارة المبيعات وتطوير الأعمال في قطاع البرمجيات كخدمة (SaaS)، أعمل في بيع أنظمة ERP والمحاسبة والموارد البشرية للشركات، وأسست وأدرت فروعاً في المدينة المنورة والخبر والرياض. شريك مؤسس في منصة يوردس، أقود فيها تطوير المنتج والعمليات. أجمع بين الخبرة التجارية والفهم العملي للأنظمة والبيانات، وأوظّف أدوات الذكاء الاصطناعي في تحويل احتياجات الأعمال إلى حلول تقنية قابلة للتطبيق.",
            phone: "0568954677",
            email: "aljahmi2013@gmail.com",
            address: "السعودية - المدينة المنورة",
            nationality: "اليمن",
            birth: "1988-10-24 م",
            status: "متزوج ولدي ولد وبنتان"
        },

        // الخبرة العملية الحالية (بالتفصيل)
        experience: [
            {
                company: "سمارت لايف للبرمجيات (SaaS)",
                role: "مدير منطقة",
                period: "2020 – الآن",
                note: "بدأت التعاون مع الشركة منذ 2018 في جلب المبيعات، ثم انضممت إليها رسمياً في 2020.",
                points: [
                    "تأسيس فرع المدينة المنورة، ثم إدارة فرعي الخبر والرياض، والعودة لإدارة فرع المدينة المنورة.",
                    "إدارة مبيعات أنظمة ERP والمحاسبة والموارد البشرية للشركات والمؤسسات.",
                    "بناء فرق المبيعات وتدريبها، وتطوير أساليب البيع، ومتابعة أداء الفريق والعملاء.",
                    "فتح أسواق جديدة وبناء علاقات طويلة الأمد مع العملاء.",
                    "الحصول على جوائز تقديرية في المبيعات."
                ]
            },
            {
                company: "يوردس (Yourdis)",
                role: "شريك مؤسس، قيادة تطوير المنتج والعمليات",
                period: "2026 – الآن",
                note: "منصة سعودية لمقارنة أسعار العطور الأصلية بين المتاجر الإلكترونية، متاحة على App Store وGoogle Play.",
                points: [
                    "قيادة المنتج من الفكرة إلى الإطلاق: فهم احتياجات المستخدمين، وتحديد المتطلبات، وترتيب الأولويات.",
                    "توجيه التطوير التقني بالاستعانة بـ Claude وأدوات الذكاء الاصطناعي، ومراجعة المخرجات واختبارها وتحسينها بصورة منهجية.",
                    "بناء عمليات البيانات: جمع بيانات المنتجات والأسعار من المتاجر، وتنظيفها وتصنيفها، وأتمتة تحديثها.",
                    "إعداد لوحات التحليلات ومؤشرات الأداء لمتابعة استخدام المنصة.",
                    "متابعة التشغيل والعمليات اليومية ضمن فريق المنصة."
                ]
            }
        ],

        // الخبرات السابقة (سطر لكل وظيفة)
        previous: [
            { title: "تجارة حرة", role: "مشروع خاص لتوزيع الأحذية", period: "2019 – 2020" },
            { title: "توصيل جدة", role: "مؤسس ومشرف عمليات توصيل طلبات الأسر المنتجة", period: "2017 – 2019" },
            { title: "شركة الجونة للحلويات", role: "معلم حلويات", period: "2014 – 2017" },
            { title: "مؤسسة الشاذلية للتمور", role: "مؤسس وشريك ومدير إنتاج", period: "2011 – 2013" },
            { title: "شركة تالة الجود للتمور والحلويات", role: "معلم حلويات", period: "2008 – 2010" }
        ],

        scientific: [
            { title: "القيادة والإدارة", desc: "تشكيل فرق العمل وقيادتها، وتوزيع المهام وتوجيهها، وتحفيز الفريق ومتابعة أدائه." },
            { title: "المبيعات والتسويق", desc: "إدارة دورة البيع كاملة، وخدمة العملاء، ووضع الخطط البيعية والاستهداف." },
            { title: "الخطط والاستراتيجيات", desc: "بناء الاستراتيجيات التسويقية وتنفيذها، ومراقبة نتائجها وتصحيح مسارها." },
            { title: "المهارات الحسابية", desc: "إدارة عمليات البيع والتوريد والمخازن، ومراقبة التقارير المالية والإحصائية." },
            { title: "البرامج المحاسبية", desc: "معرفة واسعة بالأنظمة المحاسبية وآلية العمل عليها، والقدرة على تسويقها وبيعها." },
            { title: "تحليل البيانات", desc: "تحليل البيانات وفهم المقاييس المختلفة، وتحويلها إلى قرارات واستخدامات عملية." },
            { title: "المهارات التقنية", desc: "إتقان أجهزة الكمبيوتر والأجهزة الذكية والتطبيقات، وسرعة تعلّم الأدوات الجديدة." }
        ],

        tools: [
            { group: "البيانات والتحليلات", items: ["Google Sheets", "Excel", "Looker Studio"],
              desc: "دوال متقدمة وربط الملفات والرسوم البيانية، وتقارير ولوحات مؤشرات مباشرة." },
            { group: "الأتمتة والتطوير", items: ["Google Apps Script", "Claude"],
              desc: "برمجة الدوال المخصصة وصفحات الويب داخل بيئة Google لأتمتة العمليات، وتطوير الأدوات بالذكاء الاصطناعي." },
            { group: "استخراج البيانات", items: ["Web Scraping"],
              desc: "استخراج البيانات من المواقع وتحويلها إلى قواعد بيانات منظمة قابلة للاستخدام." },
            { group: "المنتج والنماذج الأولية", items: ["Figma", "Glide"],
              desc: "تصميم واجهات التطبيقات والمواقع ونماذج أولية تفاعلية، وبناء تطبيقات تشغيلية بعملياتها وتقاريرها." },
            { group: "التصميم والإنتاجية", items: ["Photoshop", "Illustrator", "Word", "Google Slides"],
              desc: "تصاميم دعائية ومطبوعات وبطاقات، ومستندات وعروض تقديمية احترافية." }
        ],

        traits: [
            "قيادة الفرق وبناؤها",
            "التواصل والتفاوض",
            "حل المشكلات والتفكير التحليلي",
            "التنظيم وإدارة المهام",
            "الدقة والاهتمام بالتفاصيل"
        ],

        development: "أكثر من 100 دورة تدريبية خلال العمل في سمارت لايف، في الإدارة والمبيعات وتطوير الأعمال والأنظمة.",

        languages: [
            { name: "العربية", level: "اللغة الأم" },
            { name: "الإنجليزية", level: "جيد" }
        ],

        updateDate: "20 سبتمبر 2026"
    },

    en: {
        labels: {
            title: "CV | Anas Ahmed Mohammed",
            experience: "Work Experience",
            previous: "Earlier Experience",
            scientific: "Areas of Expertise",
            tools: "Tools & Software",
            traits: "Personal Skills",
            development: "Training",
            languages: "Languages",
            updated: "Last updated:",
            switchLang: "العربية",
            download: "Download PDF",
            pdf: "pdf/Anas-Ahmed-CV-EN.pdf"
        },
        personal: {
            name: "Anas Ahmed Mohammed",
            tagline: "Sales Management & Business Development | SaaS & Enterprise Solutions | Digital Products",
            summary: "Sales and business development professional in the Software-as-a-Service (SaaS) sector, selling ERP, accounting and HR systems to companies, having founded and managed branches in Madinah, Al Khobar and Riyadh. Co-founder of Yourdis, where I lead product development and operations. I combine commercial experience with a practical understanding of systems and data, and use AI tools to turn business needs into workable technical solutions.",
            phone: "+966 56 895 4677",
            email: "aljahmi2013@gmail.com",
            address: "Madinah, Saudi Arabia",
            nationality: "Yemeni",
            birth: "24 Oct 1988",
            status: "Married, 3 children"
        },

        experience: [
            {
                company: "Smart Life Software (SaaS)",
                role: "Area Manager",
                period: "2020 – Present",
                note: "Worked with the company as a sales collaborator from 2018, then joined officially in 2020.",
                points: [
                    "Founded the Madinah branch, then managed the Al Khobar and Riyadh branches before returning to lead Madinah.",
                    "Manage sales of ERP, accounting and HR systems to companies and organizations.",
                    "Build and train sales teams, develop sales methods, and track team and client performance.",
                    "Open new markets and build long-term client relationships.",
                    "Received sales recognition awards."
                ]
            },
            {
                company: "Yourdis",
                role: "Co-founder, Product Development & Operations Lead",
                period: "2026 – Present",
                note: "A Saudi platform comparing prices of authentic perfumes across online stores, available on the App Store and Google Play.",
                points: [
                    "Lead the product from idea to launch: understanding user needs, defining requirements and setting priorities.",
                    "Direct technical development using Claude and other AI tools, and review, test and refine the output methodically.",
                    "Build data operations: collecting product and price data from stores, cleaning and categorizing it, and automating updates.",
                    "Set up analytics dashboards and KPIs to track platform usage.",
                    "Oversee day-to-day operations as part of the platform team."
                ]
            }
        ],

        previous: [
            { title: "Independent Trade", role: "Private shoe distribution business", period: "2019 – 2020" },
            { title: "Jeddah Delivery", role: "Founder and supervisor of delivery operations for home-based businesses", period: "2017 – 2019" },
            { title: "Al Jouna Sweets", role: "Pastry chef", period: "2014 – 2017" },
            { title: "Al Shathliya Dates", role: "Founder, partner and production manager", period: "2011 – 2013" },
            { title: "Tala Al Joud Dates & Sweets", role: "Pastry chef", period: "2008 – 2010" }
        ],

        scientific: [
            { title: "Leadership & Management", desc: "Forming and leading teams, assigning and directing tasks, motivating the team and tracking its performance." },
            { title: "Sales & Marketing", desc: "Managing the full sales cycle, customer service, sales planning and targeting." },
            { title: "Planning & Strategy", desc: "Building and executing marketing strategies, monitoring results and correcting course." },
            { title: "Financial Skills", desc: "Managing sales, procurement and inventory operations, and monitoring financial and statistical reports." },
            { title: "Accounting Systems", desc: "Broad knowledge of accounting systems and how they work, with the ability to market and sell them." },
            { title: "Data Analysis", desc: "Analyzing data and understanding different metrics, and turning them into practical decisions." },
            { title: "Technical Skills", desc: "Proficient with computers, smart devices and applications, and quick to learn new tools." }
        ],

        tools: [
            { group: "Data & Analytics", items: ["Google Sheets", "Excel", "Looker Studio"],
              desc: "Advanced formulas, linked files and charts, plus live reports and KPI dashboards." },
            { group: "Automation & Development", items: ["Google Apps Script", "Claude"],
              desc: "Custom functions and web pages in the Google environment to automate processes, and building tools with AI." },
            { group: "Data Extraction", items: ["Web Scraping"],
              desc: "Extracting data from websites and turning it into structured, usable databases." },
            { group: "Product & Prototyping", items: ["Figma", "Glide"],
              desc: "Designing app and website interfaces and interactive prototypes, and building operational apps with their workflows and reports." },
            { group: "Design & Productivity", items: ["Photoshop", "Illustrator", "Word", "Google Slides"],
              desc: "Promotional designs, print materials and business cards, plus professional documents and presentations." }
        ],

        traits: [
            "Team leadership and building",
            "Communication and negotiation",
            "Problem solving and analytical thinking",
            "Organization and task management",
            "Accuracy and attention to detail"
        ],

        development: "100+ training courses during my time at Smart Life, in management, sales, business development and systems.",

        languages: [
            { name: "Arabic", level: "Native" },
            { name: "English", level: "Good" }
        ],

        updateDate: "20 September 2026"
    }
};
