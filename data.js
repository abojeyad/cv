// محتوى السيرة الذاتية باللغتين. عدّل النص هنا، ثم أعد توليد ملفات PDF (انظر build-pdf.sh).
const resumeData = {
    ar: {
        labels: {
            title: "السيرة الذاتية | أنس أحمد محمد",
            experience: "الخبرة العملية",
            scientific: "مجالات الخبرة",
            tools: "الأدوات والأنظمة",
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
            tagline: "إدارة المبيعات وتطوير الأعمال | SaaS والحلول المؤسسية | تطوير المنتجات الرقمية",
            summary: "مدير منطقة مبيعات في قطاع SaaS، متخصص في بيع الحلول المؤسسية، بما فيها أنظمة ERP والمحاسبة والموارد البشرية للشركات والمؤسسات. أسست فرع المدينة المنورة، وتوليت إدارة ثلاث مناطق في شركة سمارت لايف. شريك مؤسس في منصة يوردس، أقود فيها تطوير المنتج والعمليات. أجمع بين الخبرة التجارية والفهم العملي للأنظمة والبيانات، وأوظّف أدوات الذكاء الاصطناعي في تحويل احتياجات الأعمال إلى حلول تقنية عملية.",
            phone: "0568954677",
            email: "aljahmi2013@gmail.com",
            address: "السعودية - المدينة المنورة",
            nationality: "اليمن",
            birth: "1988-10-24 م",
            status: "متزوج ولدي ولد وبنتان"
        },

        // الخبرة العملية من الأحدث إلى الأقدم (points اختيارية)
        experience: [
            {
                company: "سمارت لايف للبرمجيات (SaaS)",
                role: "مدير منطقة",
                period: "2020 – الآن",
                note: "بدأت التعاون مع الشركة منذ 2018 في جلب المبيعات، ثم انضممت إليها رسمياً في 2020.",
                points: [
                    "تأسيس فرع المدينة المنورة، ثم إدارة منطقتي الخبر والرياض، والعودة لإدارة منطقة المدينة المنورة.",
                    "تصميم وبناء أول نظام CRM للشركة بشكل مستقل، واعتماد قواعده الأساسية في إدارة العملاء ومتابعة المبيعات.",
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
                    "توجيه التطوير التقني بالاستعانة بأدوات الذكاء الاصطناعي، ومراجعة المخرجات واختبارها وتحسينها بصورة منهجية.",
                    "متابعة التشغيل والعمليات اليومية ضمن فريق المنصة."
                ]
            },
            {
                company: "مجموعة عطا الله المطرفي",
                role: "مؤسس مشروع توزيع",
                period: "2019 – 2020",
                points: ["تأسيس مشروع خاص لتوزيع الأحذية على المحلات التجارية ومنافذ البيع."]
            },
            {
                company: "شركة توصيل جدة",
                role: "مؤسس ومشرف عمليات",
                period: "2017 – 2019",
                points: ["تأسيس شركة توصيل جدة والإشراف على عملياتها في توصيل طلبات الأسر المنتجة."]
            },
            { company: "شركة الجونة للحلويات", role: "معلم حلويات", period: "2014 – 2017" },
            { company: "مؤسسة الشاذلية للتمور", role: "مؤسس وشريك ومدير إنتاج", period: "2011 – 2013" },
            { company: "شركة تالة الجود للتمور والحلويات", role: "معلم حلويات", period: "2008 – 2010" }
        ],

        scientific: [
            { title: "القيادة وبناء الفرق", desc: "تشكيل فرق العمل وقيادتها وتحفيزها، وتدريب الموظفين ورفع كفاءتهم ونقل الخبرة إليهم." },
            { title: "مبيعات الشركات (B2B)", desc: "إدارة دورة البيع كاملة مع الشركات والمؤسسات، من تحديد الفرص حتى إغلاق الصفقة وبناء علاقة طويلة الأمد." },
            { title: "التخطيط والاستراتيجية", desc: "وضع الخطط البيعية والتسويقية وتنفيذها، ومراقبة نتائجها وتصحيح مسارها." },
            { title: "الأنظمة المحاسبية وERP", desc: "فهم عميق لطريقة عمل الأنظمة المحاسبية وأنظمة ERP، وتحليل ما تحتاجه الشركات منها، وتقديم الحل المناسب لكل عميل." },
            { title: "تطوير المنتجات الرقمية", desc: "تحويل احتياجات المستخدمين إلى متطلبات واضحة، وترتيب أولويات التطوير، وقياس أثره على تجربة المستخدم." },
            { title: "تحليل البيانات", desc: "تحليل البيانات والمؤشرات والتقارير الإحصائية، وتحويلها إلى قرارات عملية." }
        ],

        tools: [
            { group: "البيانات والتحليلات", items: ["Google Sheets", "Excel", "Looker Studio", "GA4"],
              desc: "استخدام معادلات ودوال متقدمة في Google Sheets وExcel، وإعداد التقارير، وبناء لوحات تحليلات تحوّل البيانات إلى مؤشرات أداء مباشرة." },
            { group: "الأتمتة وتكامل البيانات", items: ["Google Apps Script", "Web Scraping", "API Integration"],
              desc: "أتمتة العمليات وبناء الدوال المخصصة داخل بيئة Google، وجمع البيانات من المواقع وتنظيمها في قواعد بيانات، وربط الأنظمة عبر API لمزامنة البيانات وتبادلها." },
            { group: "التطوير بالذكاء الاصطناعي", items: ["Claude", "Codex", "GitHub"],
              desc: "قيادة تطوير أنظمة رقمية متكاملة: دراسة المتطلبات، وتصميم الحل واختيار التقنيات المناسبة، ثم البناء بكود حقيقي والاختبار والتوثيق. منها موقع يوردس الرسمي، وواجهة نقاط بيع (كاشير) تعمل عبر المتصفح مع الإنترنت وبدونه، ونظام معالجة صور المنتجات، ونظام إدارة الملاحظات اليومية، ونظام بيانات العطور." },
            { group: "المنتج والنماذج الأولية", items: ["Figma", "Glide"],
              desc: "تصميم واجهات التطبيقات والمواقع ونماذج أولية تفاعلية، وبناء تطبيقات تشغيلية بعملياتها وتقاريرها." },
            { group: "التصميم والإنتاجية", items: ["Photoshop", "Illustrator", "Word", "Google Slides"],
              desc: "تصاميم دعائية ومطبوعات وبطاقات، ومستندات وعروض تقديمية احترافية." }
        ],

        traits: [
            "المرونة والتكيّف مع بيئات العمل المختلفة",
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
            scientific: "Areas of Expertise",
            tools: "Tools & Systems",
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
            tagline: "Sales Management & Business Development | SaaS & Enterprise Solutions | Digital Product Development",
            summary: "Area Sales Manager in the SaaS sector, specializing in selling enterprise solutions, including ERP, accounting and HR systems, to companies and organizations. Founded the Madinah branch and went on to manage three regions at Smart Life. Co-founder of Yourdis, where I lead product development and operations. I combine commercial experience with a practical understanding of systems and data, and use AI tools to turn business needs into workable technical solutions.",
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
                    "Founded the Madinah branch, then managed the Al Khobar and Riyadh regions, and later the Madinah region.",
                    "Independently built the company's first CRM, setting its core rules for client management and sales tracking.",
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
                note: "A Saudi price-comparison platform for authentic perfumes, available on the App Store and Google Play.",
                points: [
                    "Lead the product from idea to launch: user needs, requirements and priorities.",
                    "Direct technical development with AI tools, and review, test and refine the output methodically.",
                    "Oversee day-to-day operations as part of the platform team."
                ]
            },
            {
                company: "Atallah Al-Mutrafi Group",
                role: "Founder, Distribution Business",
                period: "2019 – 2020",
                points: ["Founded a private business distributing shoes to retail stores and outlets."]
            },
            {
                company: "Jeddah Delivery Company",
                role: "Founder & Operations Supervisor",
                period: "2017 – 2019",
                points: ["Founded Jeddah Delivery Company and supervised its operations delivering orders for home-based businesses."]
            },
            { company: "Al Jouna Sweets", role: "Pastry Chef", period: "2014 – 2017" },
            { company: "Al Shathliya Dates", role: "Founder, Partner & Production Manager", period: "2011 – 2013" },
            { company: "Tala Al Joud Dates & Sweets", role: "Pastry Chef", period: "2008 – 2010" }
        ],

        scientific: [
            { title: "Leadership & Team Building", desc: "Forming, leading and motivating teams, and training staff to raise their performance and pass on know-how." },
            { title: "B2B Sales", desc: "Managing the full sales cycle with companies and organizations, from identifying opportunities to closing deals and building long-term relationships." },
            { title: "Planning & Strategy", desc: "Setting and executing sales and marketing plans, monitoring results and correcting course." },
            { title: "Accounting & ERP Systems", desc: "Deep understanding of how accounting and ERP systems work, analyzing what companies need from them, and matching each client with the right solution." },
            { title: "Digital Product Development", desc: "Turning user needs into clear requirements, prioritizing development, and measuring its impact on the user experience." },
            { title: "Data Analysis", desc: "Analyzing data, metrics and statistical reports, and turning them into practical decisions." }
        ],

        tools: [
            { group: "Data & Analytics", items: ["Google Sheets", "Excel", "Looker Studio", "GA4"],
              desc: "Using advanced formulas and functions in Google Sheets and Excel, preparing reports, and building analytics dashboards that turn data into live KPIs." },
            { group: "Automation & Data Integration", items: ["Google Apps Script", "Web Scraping", "API Integration"],
              desc: "Automating processes and building custom functions in the Google environment, collecting web data and organizing it into databases, and connecting systems via APIs to sync and exchange data." },
            { group: "AI-Assisted Development", items: ["Claude", "Codex", "GitHub"],
              desc: "Leading the development of complete digital systems: studying requirements, designing the solution and choosing the right technologies, then building with real code, testing and documenting. These include the Yourdis website, a browser-based point-of-sale (cashier) interface that works online and offline, a product-image processing system, a daily-notes system, and a perfume data hub." },
            { group: "Product & Prototyping", items: ["Figma", "Glide"],
              desc: "Designing app and website interfaces and interactive prototypes, and building operational apps with their workflows and reports." },
            { group: "Design & Productivity", items: ["Photoshop", "Illustrator", "Word", "Google Slides"],
              desc: "Promotional designs, print materials and business cards, plus professional documents and presentations." }
        ],

        traits: [
            "Flexibility and adapting to different work environments",
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
