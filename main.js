document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    let skillsAnimated = false;

    function animateSkills() {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint && !skillsAnimated) {
            skillsAnimated = true;
            document.querySelectorAll('.skill-progress').forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
    }

    window.addEventListener('scroll', animateSkills);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const translations = {
        ru: {
            nav: {
                about: 'Обо мне',
                experience: 'Опыт',
                projects: 'Проекты',
                skills: 'Навыки',
                contact: 'Контакты',
                game: 'Игра'
            },
            hero: {
                subtitle: 'Разработчик, Аналитик, SEO-менеджер',
                description: 'Автоматизация бизнес-процессов, разработка внутренних инструментов, работа с данными',
                btn_projects: 'Мои работы',
                btn_cv: 'Скачать резюме'
            },
            about: {
                title: 'Обо мне',
                p1: 'Мой путь начался с работы переводчиком английского языка, затем перешел в продажи и HR-менеджмент, где развивал аналитические навыки и оптимизацию процессов. Последние годы активно занимаюсь разработкой — создаю внутренние инструменты для автоматизации бизнес-процессов, боты, работаю с базами данных и активно использую ИИ в работе.',
                p2: 'Я стремлюсь к постоянному развитию, изучаю новые технологии и методы автоматизации, чтобы создавать эффективные решения для бизнеса. Моя цель — использовать свои навыки и опыт для создания инновационных продуктов, которые помогут компаниям расти и развиваться в цифровую эпоху.',
                years: 'Лет опыта',
                companies: 'Компаний',
                dev_year: 'Года в разработке',
                contact_title: 'Контактная информация',
                edu_title: 'Образование',
                edu1_name: 'ОГЭУ, Украина',
                edu1_spec: 'Менеджмент и туризмоведение',
                edu1_year: '2012-2016 (заочно)',
                edu2_name: 'Английский язык',
                edu2_spec: 'Upper-Intermediate',
                edu2_year: 'Studium (1999-2001), Interpret (2004-2005)',
                preferred: '(Предпочтительно)'
            },
            experience: {
                title: 'Профессиональный опыт',
                jobs: [
                    {
                        date: 'Авг 2022 — Настоящее время',
                        title: 'Контент-менеджер → Администратор сайта → SEO/AEO-менеджер → Разработчик',
                        company: 'ООО "Хайтек" — Тирасполь',
                        desc: 'Работа во всех проектах холдинга (hi-tech.md, keramika.md, piazzaitalia.md, milano.md, casta.md, gruzia.md и другие).',
                        items: [
                            'Начинал контент-менеджером, за 3 месяца взял на себя обязанности администратора сайта по всем проектам холдинга',
                            'Провёл SEO-аудит всех сайтов, выявил системные проблемы и выстроил совместную работу с программистами по их устранению — автоконвертация изображений в WebP, ограничение размера загружаемых файлов, оптимизация структуры URL',
                            'Разработал и внедрил AEO/GEO-генератор на базе LLM (DeepSeek через OpenRouter) — генерация описаний товаров и категорий по схеме 1+5 (базовый вариант + 5 случайных вариаций для уникальности), автоматическая валидация и коррекция иностранных слов, автоимпорт готовых текстов на сайт через ETL; генерация тегов для карточек товаров',
                            'Разработал систему автоматической AI-обработки пользовательских отзывов — LLM-агент анализирует, классифицирует и структурирует обратную связь в фоне по расписанию',
                            'Перевёл бумажный журнал отпусков в Telegram-бот с веб-приложением: сотрудник подаёт заявку, руководитель подтверждает, данные сверяются с посещаемостью HIK-Vision, служба безопасности видит только реальные нарушения; процесс, занимавший 3 дня ручной работы, стал полностью автоматическим',
                            'Внутреннее приложение выросло до 20+ модулей (логистика, автопарк, рестораны, контроль качества, ценники, стоп-лист, тайм-менеджмент и другие) с разграничением доступа по должностям',
                            'Разработал алгоритм логистики товаров: автоматическое перераспределение остатков между магазинами на основе данных о продажах и нагрузке, генерация Excel-файлов с инструкциями по перемещению',
                            'Внедрил автоматическую синхронизацию цен и остатков с прайсов поставщиков, мониторинг наличия товаров с Telegram-уведомлениями при восстановлении стока',
                            'Разработал инструмент массовой проверки изображений в рич-контенте (cron-задача) — автоматически обнаруживает битые ссылки и уведомляет команду контента',
                            'Предложил и реализовал на Пасху игру, встроенную в сайт магазина, где можно выиграть сертификат на скидку (4% при 200 очках, 5% при 250, 6% при 300, 7% при 350+); промокод автоматически устанавливался как cookie и применялся на странице оформления заказа с полноценной серверной верификацией через БД пользователей; конверсия в продажи составила 4%'
                        ],
                        easterGame: true,
                        stack: ['Node.js', 'Express', 'CS-Cart', 'OpenCart', 'Telegram Bots', 'PostgreSQL', 'Supabase', 'Apps Script', 'HTML/CSS/JS', 'LLM / AI', 'SEO / AEO / GEO', 'ETL', 'WebSocket', 'Docker']
                    },
                    {
                        date: 'Сен 2020 — Июл 2022',
                        title: 'Руководитель отдела контент-менеджмента',
                        company: 'ООО "ХАББ" (маркетплейс) — Тирасполь',
                        desc: 'Повышение от контент-менеджера до руководителя отдела за полгода.',
                        items: [
                            'Загрузил ~10,000 позиций на сайт за первые 6 месяцев',
                            'Разработал шаблон для импорта данных, повысив скорость обработки',
                            'Руководил 4 контент-менеджерами',
                            'Разработал систему взаимодействия между партнерами и отделом',
                            'Автоматизировал обновление остатков и цен с прайсов поставщиков'
                        ],
                        stack: ['ETL процессы', 'Автоматизация', 'Google Docs']
                    },
                    {
                        date: 'Фев 2018 — Авг 2018',
                        title: 'Контент-менеджер',
                        company: 'ООО "ТОПРАН" (интернет-магазин спортивной одежды) — Одесса (удалённо)',
                        desc: '',
                        items: [
                            'Работа с товарной базой, заполнение карточек товара',
                            'Редактирование фото',
                            'Познакомился с CMS OpenCart и CS-Cart',
                            'Полный цикл вывода товара из каталога на витрину'
                        ],
                        stack: ['OpenCart', 'CS-Cart']
                    },
                    {
                        date: 'Июн 2017 — Ноя 2017',
                        title: 'Руководитель отдела аналитики',
                        company: 'ООО "Профинвестком" (контакт-центр) — Тирасполь',
                        desc: 'Повышение от оператора БД до руководителя отдела за 1 месяц.',
                        items: [
                            'Улучшил производительность двух отделов на 25%',
                            'Сократил рабочий день на 2–3 часа через оптимизацию документооборота',
                            'Сбор и анализ статистических данных',
                            'Автоматизация работы с данными и ETL процессами'
                        ],
                        stack: ['ETL', 'Аналитика', 'Excel']
                    },
                    {
                        date: 'Сен 2013 — Июн 2017',
                        title: 'Региональный HR-менеджер и Супервайзер',
                        company: 'ООО "Апишопс" (интернет-магазин) — Москва, РФ (региональное представительство в Тирасполе)',
                        desc: 'Повышение из отдела продаж через 1 месяц работы.',
                        items: [
                            'Отточил организаторские навыки',
                            'Подбор и оптимизация работы персонала',
                            'Приобрел хорошие знания Excel и Google Docs',
                            'Развил аналитические навыки'
                        ],
                        stack: ['HR', 'Excel', 'Google Docs']
                    },
                    {
                        date: 'Фев 2012 — Ноя 2012',
                        title: 'Менеджер отдела продаж',
                        company: '"International Travel Network" — Сан-Франциско, США (удалённо)',
                        desc: 'Работа в туристической компании, отдел продаж.',
                        items: [],
                        stack: []
                    },
                    {
                        date: 'Июл 2011 — Фев 2012',
                        title: 'Переводчик английского языка',
                        company: '"Brandimex" LTD — Лондон, Великобритания (удалённо)',
                        desc: '',
                        items: [],
                        stack: []
                    },
                    {
                        date: 'Фев 2011 — Июл 2011',
                        title: 'Переводчик английского языка',
                        company: 'ЗАО СК "Шериф" (футбольный клуб) — Тирасполь',
                        desc: '',
                        items: [
                            'Широкий опыт общения с носителями языка',
                            'Участие в организации мероприятий и праздников',
                            'Ознакомление с базовыми понятиями документооборота'
                        ],
                        stack: []
                    }
                ]
            },
            projects: {
                title: 'Hi-Tech App',
                subtitle: 'Внутреннее приложение компании',
                desc: 'Разработал многофункциональную Telegram Web App платформу для управления и автоматизации бизнес-процессов.',
                features_title: 'Ключевые особенности:',
                features: [
                    'Модульная архитектура с динамической загрузкой 20+ независимых модулей',
                    'JWT-аутентификация, ролевой доступ, сессии в Supabase',
                    'Интеграция с Telegram API — нативный пользовательский опыт без установки',
                    'Загрузка файлов, email-уведомления (Nodemailer), экспорт в Excel (ExcelJS)',
                    'Real-time обновления через WebSocket и Supabase Realtime',
                    'LLM-интеграция: генерация AEO/GEO контента, обработка отзывов, AI-анализ данных',
                    'Cron-задачи для автоматических фоновых процессов',
                    'Docker-контейнеризация, rate limiting, Helmet, CORS'
                ],
                modules_title: 'Бизнес-модули:',
                modules: [
                    { name: 'Контроль посещаемости', desc: 'Рабочие графики, заявки на отпуск/больничный, автосверка с HIK-Vision, уведомления о нарушениях в Telegram, аналитика и отчётность' },
                    { name: 'Логистика', desc: 'Алгоритм перераспределения товаров между магазинами: анализирует остатки, продажи и нагрузку, автоматически формирует задания на перемещение и Excel-отчёты для склада' },
                    { name: 'Мониторинг стоков', desc: 'Подписка на товары под заказ, автоматическое Telegram-уведомление при появлении товара в наличии' },
                    { name: 'Аналитика', desc: 'Дашборды метрик по модулям, статистика использования, журналы активности' },
                    { name: 'Система сообщений', desc: 'Корпоративный мессенджер через Telegram: многоуровневая фильтрация, вложения, уведомления о просмотре, напоминания, история сообщений, Broadcast, администрирование' },
                    { name: 'Контроль качества', desc: 'Проверка изображений в рич-контенте через cron-задачу, уведомления о битых ссылках, учёт ошибок в ценниках, WebSocket-чат между продавцами и контент-отделом' },
                    { name: 'Автопарк', desc: 'Учёт пробега, страховок, ремонтов и расходов; AI-анализ повреждений, ржавчины и царапин; система бронирования корпоративных автомобилей; синхронизация данных о топливе' },
                    { name: 'Рестораны', desc: 'Play/stop лист, аналитика блюд, модуль управления дегустациями, отчётность' },
                    { name: 'AEO / GEO / SEO генератор', desc: 'LLM-генерация описаний товаров и категорий (схема 1+5 для уникальности), автоматическая валидация иностранных слов и их замена, генерация тегов, прямой ETL-импорт на сайт; обработка отзывов AI-агентом по расписанию' },
                    { name: 'Проверка запчастей (PC Checker)', desc: 'Инструмент для подбора совместимых запчастей и компонентов с маппингом характеристик' },
                    { name: 'Прочие модули', desc: 'QR-генератор для операционных процессов, генератор ценников, стоп-лист, управление сервисными заявками, расписание сотрудников, модуль аренды, публичные формы и другое' }
                ]
            },
            skills: {
                title: 'Навыки и технологии',
                categories: [
                    {
                        name: 'Языки и коммуникация',
                        items: [
                            { name: 'Английский язык', level: 'C1', width: 80, desc: 'Переговоры, деловая переписка, технические коммуникации' },
                            { name: 'Русский язык', level: 'Родной', width: 100, desc: 'Родной язык, свободное владение' }
                        ]
                    },
                    {
                        name: 'Разработка и программирование',
                        items: [
                            { name: 'HTML / CSS / JavaScript', level: 'Средний', width: 65, desc: '' },
                            { name: 'Node.js / Express', level: 'Средний', width: 65, desc: '' },
                            { name: 'Telegram Bots / API', level: 'Экспертный', width: 90, desc: '' },
                            { name: 'Apps Script', level: 'Продвинутый', width: 80, desc: '' },
                            { name: 'PostgreSQL / Supabase', level: 'Средний', width: 65, desc: '' },
                            { name: 'Docker', level: 'Базовый', width: 45, desc: '' }
                        ]
                    },
                    {
                        name: 'CMS и CRM',
                        items: [
                            { name: 'CS-Cart', level: 'Экспертный', width: 100, desc: '' },
                            { name: 'OpenCart', level: 'Продвинутый', width: 75, desc: '' },
                            { name: 'PlanFix', level: 'Продвинутый', width: 75, desc: '' },
                            { name: 'Bitrix24', level: 'Средний', width: 60, desc: '' }
                        ]
                    },
                    {
                        name: 'Данные и аналитика',
                        items: [
                            { name: 'Google Sheets (формулы, скрипты)', level: 'Экспертный', width: 100, desc: '' },
                            { name: 'ETL процессы', level: 'Продвинутый', width: 85, desc: '' },
                            { name: 'Аналитика процессов', level: 'Продвинутый', width: 75, desc: '' }
                        ]
                    },
                    {
                        name: 'Другие навыки',
                        items: [
                            { name: 'SEO / AEO / GEO оптимизация', level: 'Продвинутый', width: 80, desc: '' },
                            { name: 'LLM-интеграция (OpenRouter, DeepSeek)', level: 'Средний', width: 65, desc: '' },
                            { name: 'Работа с ИИ', level: 'Продвинутый', width: 85, desc: '' },
                            { name: 'Менеджмент и руководство', level: 'Продвинутый', width: 75, desc: '' }
                        ]
                    }
                ]
            },
            contact: {
                title: 'Контакты',
                email: 'Email',
                phone: 'Телефон',
                telegram: 'Telegram',
                preferred: '(Предпочтительно)'
            }
        },
        en: {
            nav: {
                about: 'About',
                experience: 'Experience',
                projects: 'Projects',
                skills: 'Skills',
                contact: 'Contact',
                game: 'Game'
            },
            hero: {
                subtitle: 'Developer, Analyst, SEO Manager',
                description: 'Business process automation, internal tooling, data work',
                btn_projects: 'My Work',
                btn_cv: 'Download CV'
            },
            about: {
                title: 'About Me',
                p1: 'My career started as an English translator, then moved into sales and HR management where I developed analytical skills and process optimisation. In recent years I have focused on development — building internal tools for business process automation, bots, working with databases and actively using AI.',
                p2: 'I am committed to continuous growth, learning new technologies and automation methods to create effective solutions for business. My goal is to use my skills and experience to build innovative products that help companies grow and thrive in the digital age.',
                years: 'Years of experience',
                companies: 'Companies',
                dev_year: 'Years in development',
                contact_title: 'Contact Information',
                edu_title: 'Education',
                edu1_name: 'OSEU, Ukraine',
                edu1_spec: 'Management & Tourism',
                edu1_year: '2012–2016 (part-time)',
                edu2_name: 'English Language',
                edu2_spec: 'Upper-Intermediate',
                edu2_year: 'Studium (1999–2001), Interpret (2004–2005)',
                preferred: '(Preferred)'
            },
            experience: {
                title: 'Professional Experience',
                jobs: [
                    {
                        date: 'Aug 2022 — Present',
                        title: 'Content Manager → Website Admin → SEO/AEO Manager → Developer',
                        company: 'Hi-Tech LLC — Tiraspol',
                        desc: 'Working across all holding projects (hi-tech.md, keramika.md, piazzaitalia.md, milano.md, casta.md, gruzia.md and others).',
                        items: [
                            'Started as content manager; within 3 months took over website administration duties across all holding projects',
                            'Conducted full SEO audit, identified systemic issues and coordinated with developers to resolve them — automatic WebP image conversion, upload size limits, URL structure optimisation',
                            'Built an AEO/GEO content generator powered by LLM (DeepSeek via OpenRouter) — product and category descriptions using a 1+5 scheme (one base + five random variations for uniqueness), automatic foreign-word validation and correction, direct ETL import to the site; tag generation for product cards',
                            'Developed an automated AI review-processing pipeline — an LLM agent analyses, classifies, and structures customer feedback in the background on a cron schedule',
                            'Replaced a paper leave-request journal with a Telegram bot + web app: employees submit requests, managers approve, data is cross-referenced with HIK-Vision attendance; a process that took 3 days of manual work became fully automated',
                            'Internal platform grew to 20+ modules (logistics, fleet management, restaurants, quality control, price tags, stop-list, scheduling and more) with role-based access control',
                            'Built a goods logistics algorithm: automatic redistribution of stock between stores based on sales data and store load, with Excel reports for warehouse staff',
                            'Implemented automatic price and stock sync from supplier price lists; stock monitoring with Telegram alerts on replenishment',
                            'Built a bulk rich-content image checker (cron job) — automatically detects broken image links and notifies the content team',
                            'Proposed and built an Easter game embedded in the store website where shoppers could win a discount voucher (4% at 200 pts, 5% at 250, 6% at 300, 7% at 350+); the promo code was automatically set as a cookie and applied at checkout with full server-side verification via a user DB; sales conversion was 4%'
                        ],
                        easterGame: true,
                        stack: ['Node.js', 'Express', 'CS-Cart', 'OpenCart', 'Telegram Bots', 'PostgreSQL', 'Supabase', 'Apps Script', 'HTML/CSS/JS', 'LLM / AI', 'SEO / AEO / GEO', 'ETL', 'WebSocket', 'Docker']
                    },
                    {
                        date: 'Sep 2020 — Jul 2022',
                        title: 'Head of Content Management Department',
                        company: 'HABB LLC (marketplace) — Tiraspol',
                        desc: 'Promoted from content manager to department head in six months.',
                        items: [
                            'Uploaded ~10,000 product listings in the first 6 months',
                            'Developed a data import template, significantly increasing processing speed',
                            'Managed a team of 4 content managers',
                            'Built a workflow system between partners and the department',
                            'Automated stock and price updates from supplier price lists'
                        ],
                        stack: ['ETL', 'Automation', 'Google Docs']
                    },
                    {
                        date: 'Feb 2018 — Aug 2018',
                        title: 'Content Manager',
                        company: 'TOPRAN LLC (sportswear online store) — Odessa (remote)',
                        desc: '',
                        items: [
                            'Managed product database, filled product cards',
                            'Photo editing',
                            'Learned CMS OpenCart and CS-Cart',
                            'Full product lifecycle from catalogue to storefront'
                        ],
                        stack: ['OpenCart', 'CS-Cart']
                    },
                    {
                        date: 'Jun 2017 — Nov 2017',
                        title: 'Head of Analytics Department',
                        company: 'Profinvestcom LLC (contact centre) — Tiraspol',
                        desc: 'Promoted from database operator to department head in 1 month.',
                        items: [
                            'Improved productivity of two departments by 25%',
                            'Reduced working day by 2–3 hours through document workflow optimisation',
                            'Statistical data collection and analysis',
                            'Automated data processing and ETL workflows'
                        ],
                        stack: ['ETL', 'Analytics', 'Excel']
                    },
                    {
                        date: 'Sep 2013 — Jun 2017',
                        title: 'Regional HR Manager & Supervisor',
                        company: 'Apishops LLC (online store) — Moscow, Russia (regional office in Tiraspol)',
                        desc: 'Promoted from sales in 1 month.',
                        items: [
                            'Honed organisational skills',
                            'Staff recruitment and performance optimisation',
                            'Gained strong Excel and Google Docs skills',
                            'Developed analytical capabilities'
                        ],
                        stack: ['HR', 'Excel', 'Google Docs']
                    },
                    {
                        date: 'Feb 2012 — Nov 2012',
                        title: 'Sales Manager',
                        company: '"International Travel Network" — San Francisco, USA (remote)',
                        desc: 'Sales department at a travel company.',
                        items: [],
                        stack: []
                    },
                    {
                        date: 'Jul 2011 — Feb 2012',
                        title: 'English Language Translator',
                        company: '"Brandimex" LTD — London, UK (remote)',
                        desc: '',
                        items: [],
                        stack: []
                    },
                    {
                        date: 'Feb 2011 — Jul 2011',
                        title: 'English Language Translator',
                        company: 'FC Sheriff — Tiraspol',
                        desc: '',
                        items: [
                            'Extensive experience communicating with native speakers',
                            'Participated in event and celebration organisation',
                            'Introduction to basic document management concepts'
                        ],
                        stack: []
                    }
                ]
            },
            projects: {
                title: 'Hi-Tech App',
                subtitle: 'Internal Company Platform',
                desc: 'Built a multifunctional Telegram Web App platform for business process management and automation.',
                features_title: 'Key Features:',
                features: [
                    'Modular architecture with dynamic loading of 20+ independent modules',
                    'JWT auth, role-based access control, Supabase session management',
                    'Telegram API integration for a native experience — no install required',
                    'File uploads, email notifications (Nodemailer), Excel export (ExcelJS)',
                    'Real-time updates via WebSocket and Supabase Realtime',
                    'LLM integration: AEO/GEO content generation, review processing, AI data analysis',
                    'Cron jobs for automated background processes',
                    'Docker containerisation, rate limiting, Helmet, CORS'
                ],
                modules_title: 'Business Modules:',
                modules: [
                    { name: 'Attendance Control', desc: 'Work schedules, leave and sick-day requests, automatic cross-check with HIK-Vision, Telegram violation alerts, analytics and reporting' },
                    { name: 'Logistics', desc: 'Stock redistribution algorithm: analyses inventory, sales, and store load; auto-generates transfer tasks and Excel reports for warehouse staff' },
                    { name: 'Stock Monitoring', desc: 'Back-in-stock subscriptions — automatic Telegram notification when a pre-order item becomes available' },
                    { name: 'Analytics', desc: 'Per-module metrics dashboards, usage statistics, activity logs' },
                    { name: 'Messaging System', desc: 'Corporate messenger via Telegram: multi-level filtering, attachments, read receipts, reminders, message history, broadcast, admin panel' },
                    { name: 'Quality Control', desc: 'Rich-content image checker via cron job, broken-link notifications, price-tag error tracking, real-time WebSocket chat between sales staff and the content team' },
                    { name: 'Fleet Management', desc: 'Mileage, insurance, repairs and all vehicle costs; AI damage/rust/scratch analysis; company vehicle booking; fuel data sync' },
                    { name: 'Restaurants', desc: 'Play/stop list, dish analytics, tasting session management, reporting' },
                    { name: 'AEO / GEO / SEO Generator', desc: 'LLM-powered description generation for products and categories (1+5 scheme for uniqueness), automatic foreign-word detection and replacement, tag generation, direct ETL import to the site; scheduled AI review processing agent' },
                    { name: 'PC Checker', desc: 'Compatible parts and component lookup tool with feature mapping' },
                    { name: 'Other Modules', desc: 'QR code generator for operations, price-tag generator, stop-list, service request management, employee scheduling, rental module, public forms and more' }
                ]
            },
            skills: {
                title: 'Skills & Technologies',
                categories: [
                    {
                        name: 'Languages & Communication',
                        items: [
                            { name: 'English', level: 'C1', width: 80, desc: 'Negotiations, business correspondence, technical communications' },
                            { name: 'Russian', level: 'Native', width: 100, desc: 'Native language, fluent' }
                        ]
                    },
                    {
                        name: 'Development & Programming',
                        items: [
                            { name: 'HTML / CSS / JavaScript', level: 'Intermediate', width: 65, desc: '' },
                            { name: 'Node.js / Express', level: 'Intermediate', width: 60, desc: '' },
                            { name: 'Telegram Bots / API', level: 'Expert', width: 90, desc: '' },
                            { name: 'Apps Script', level: 'Advanced', width: 80, desc: '' },
                            { name: 'PostgreSQL / Supabase', level: 'Intermediate', width: 65, desc: '' },
                            { name: 'Docker', level: 'Basic', width: 45, desc: '' }
                        ]
                    },
                    {
                        name: 'CMS & CRM',
                        items: [
                            { name: 'CS-Cart', level: 'Expert', width: 100, desc: '' },
                            { name: 'OpenCart', level: 'Advanced', width: 75, desc: '' },
                            { name: 'PlanFix', level: 'Advanced', width: 75, desc: '' },
                            { name: 'Bitrix24', level: 'Intermediate', width: 60, desc: '' }
                        ]
                    },
                    {
                        name: 'Data & Analytics',
                        items: [
                            { name: 'Google Sheets (formulas, scripts)', level: 'Expert', width: 100, desc: '' },
                            { name: 'ETL Processes', level: 'Advanced', width: 85, desc: '' },
                            { name: 'Process Analytics', level: 'Advanced', width: 75, desc: '' }
                        ]
                    },
                    {
                        name: 'Other Skills',
                        items: [
                            { name: 'SEO / AEO / GEO Optimisation', level: 'Advanced', width: 80, desc: '' },
                            { name: 'LLM Integration (OpenRouter, DeepSeek)', level: 'Intermediate', width: 65, desc: '' },
                            { name: 'AI Tools', level: 'Advanced', width: 85, desc: '' },
                            { name: 'Management & Leadership', level: 'Advanced', width: 75, desc: '' }
                        ]
                    }
                ]
            },
            contact: {
                title: 'Contact',
                email: 'Email',
                phone: 'Phone',
                telegram: 'Telegram',
                preferred: '(Preferred)'
            }
        }
    };

    let currentLang = 'ru';

    function renderExperience(lang) {
        const t = translations[lang].experience;
        const timeline = document.querySelector('.timeline');
        const easterLabel = lang === 'ru'
            ? 'Пасхальная игра'
            : 'Easter Game';
        const easterHint = lang === 'ru'
            ? '(демо-версия без сервера — логика купонов, cookie и верификация через БД доступны в production)'
            : '(serverless demo — coupon logic, cookie injection & DB verification available in production)';
        timeline.innerHTML = t.jobs.map((job, i) => `
            <div class="timeline-item" style="opacity:0;transform:translateY(20px);transition:all 0.6s ease ${i * 0.1}s">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${job.date}</span>
                    <h3>${job.title}</h3>
                    <h4>${job.company}</h4>
                    ${job.desc ? `<p>${job.desc}</p>` : ''}
                    ${job.items.length ? `<ul>${job.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
                    ${job.easterGame ? `<div class="easter-game-row"><button class="btn-easter" onclick="openModal(event)">🐣 ${easterLabel}</button><span class="easter-hint">${easterHint}</span></div>` : ''}
                    ${job.stack && job.stack.length ? `<div class="tech-stack">${job.stack.map(s => `<span>${s}</span>`).join('')}</div>` : ''}
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });
    }

    function renderSkills(lang) {
        const t = translations[lang].skills;
        const grid = document.querySelector('.skills-grid');
        grid.innerHTML = t.categories.map((cat, ci) => `
            <div class="skill-category" style="opacity:0;transform:translateY(20px);transition:all 0.6s ease ${ci * 0.1}s">
                <h3>${cat.name}</h3>
                <div class="skill-list">
                    ${cat.items.map(item => `
                        <div class="skill-item">
                            <div class="skill-header">
                                <span>${item.name}</span>
                                <span>${item.level}</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="${item.width}" style="width:0%"></div>
                            </div>
                            ${item.desc ? `<p class="skill-desc">${item.desc}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        skillsAnimated = false;

        document.querySelectorAll('.skill-category').forEach((category) => {
            observer.observe(category);
        });

        requestAnimationFrame(() => {
            animateSkills();
        });
    }

    function renderProjects(lang) {
        const t = translations[lang].projects;
        document.querySelector('.section-title-projects').textContent = t.title;
        document.querySelector('.project-subtitle').textContent = t.subtitle;
        document.querySelector('.project-description').textContent = t.desc;
        document.querySelector('.features-title').textContent = t.features_title;
        document.querySelector('.features-list').innerHTML = t.features.map(f => `<li>${f}</li>`).join('');
        document.querySelector('.modules-title').textContent = t.modules_title;
        document.querySelector('.modules-list').innerHTML = t.modules.map(m => `<li><strong>${m.name}:</strong> ${m.desc}</li>`).join('');
    }

    function applyTranslation(lang) {
        const t = translations[lang];

        document.querySelectorAll('[data-nav]').forEach(el => {
            el.textContent = t.nav[el.getAttribute('data-nav')];
        });

        document.querySelector('.hero-subtitle').textContent = t.hero.subtitle;
        document.querySelector('.hero-description').textContent = t.hero.description;
        document.querySelector('[data-btn="projects"]').textContent = t.hero.btn_projects;
        document.querySelector('[data-btn="cv"]').textContent = t.hero.btn_cv;

        document.querySelector('.section-title-about').textContent = t.about.title;
        document.querySelector('.about-p1').textContent = t.about.p1;
        document.querySelector('.about-p2').textContent = t.about.p2;
        document.querySelector('[data-label="years"]').textContent = t.about.years;
        document.querySelector('[data-label="companies"]').textContent = t.about.companies;
        document.querySelector('[data-label="dev_year"]').textContent = t.about.dev_year;
        document.querySelector('.contact-info-title').textContent = t.about.contact_title;
        document.querySelector('.edu-title').textContent = t.about.edu_title;
        document.querySelector('.edu1-name').textContent = t.about.edu1_name;
        document.querySelector('.edu1-spec').textContent = t.about.edu1_spec;
        document.querySelector('.edu1-year').textContent = t.about.edu1_year;
        document.querySelector('.edu2-name').textContent = t.about.edu2_name;
        document.querySelector('.edu2-spec').textContent = t.about.edu2_spec;
        document.querySelector('.edu2-year').textContent = t.about.edu2_year;
        document.querySelectorAll('.preferred-label').forEach(el => el.textContent = t.about.preferred);

        document.querySelector('.section-title-experience').textContent = t.experience.title;
        renderExperience(lang);

        renderProjects(lang);

        document.querySelector('.section-title-skills').textContent = t.skills.title;
        renderSkills(lang);

        document.querySelector('.section-title-contact').textContent = t.contact.title;
        document.querySelector('[data-contact="email"]').textContent = t.contact.email;
        document.querySelector('[data-contact="phone"]').textContent = t.contact.phone;
        document.querySelector('[data-contact="telegram"]').textContent = t.contact.telegram;
        document.querySelector('.contact-preferred').textContent = t.contact.preferred;
    }

    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const currentLanguageEl = document.querySelector('.current-language');

    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.language-dropdown button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-language');
            currentLang = lang;
            currentLanguageEl.textContent = lang.toUpperCase();
            languageDropdown.classList.remove('show');
            applyTranslation(lang);
        });
    });

    document.addEventListener('click', () => {
        languageDropdown.classList.remove('show');
    });

    applyTranslation('ru');
});