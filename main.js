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

    const skillBars = document.querySelectorAll('.skill-progress');
    let skillsAnimated = false;

    const animateSkills = () => {
        const skillsSection = document.getElementById('skills');
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint && !skillsAnimated) {
            skillsAnimated = true;
            skillBars.forEach(bar => {
                if (!bar.style.width) {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                }
            });
        }
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills();

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

    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease 0.2s`;
        observer.observe(card);
    });

    document.querySelectorAll('.skill-category').forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(category);
    });

    const translations = {
        ru: {
            nav: {
                about: 'Обо мне',
                experience: 'Опыт',
                projects: 'Проекты',
                skills: 'Навыки',
                contact: 'Контакты'
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
                dev_year: 'Год в разработке',
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
                        title: 'Контент-менеджер, Администратор сайта, SEO-менеджер, Программист',
                        company: 'ООО "Хайтек" — Тирасполь',
                        desc: 'Работа во всех проектах холдинга (hi-tech.md, keramika.md, piazzaitalia.md, milano.md, casta.md, gruzia.md и другие).',
                        items: [
                            'Начинал контент-менеджером, быстро стал помогать администратору сайта',
                            'Через 3 месяца стал выполнять обязанности администратора на всех сайтах',
                            'Обучился SEO-оптимизации, настройке мета-данных',
                            'Работа с программистами — определял проблемы и ставил задачи',
                            'Разработал электронный журнал отпусков с веб-приложением и Telegram ботом',
                            'Система выросла до 18 модулей с доступом по должности',
                            'Интеграция с HIK-vision для автоматической проверки посещаемости',
                            'Перевод на разработку — автоматизация процессов, внутренние инструменты, интеграция ИИ'
                        ]
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
                        ]
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
                        ]
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
                        ]
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
                        ]
                    },
                    {
                        date: 'Фев 2012 — Ноя 2012',
                        title: 'Менеджер отдела продаж',
                        company: '"International Travel Network" — Сан-Франциско, США (удалённо)',
                        desc: 'Работа в туристической компании, отдел продаж.',
                        items: []
                    },
                    {
                        date: 'Июл 2011 — Фев 2012',
                        title: 'Переводчик английского языка',
                        company: '"Brandimex" LTD — Лондон, Великобритания (удалённо)',
                        desc: '',
                        items: []
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
                        ]
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
                    'Безопасная аутентификация и защита данных',
                    'Интеграция с Telegram API для нативного пользовательского опыта',
                    'Загрузка файлов, email-уведомления, экспорт в Excel',
                    'Генерация QR-кодов для операционных процессов',
                    'Облачное хранилище и база данных'
                ],
                modules_title: 'Бизнес-модули:',
                modules: [
                    { name: 'Контроль посещаемости', desc: 'Рабочие графики, отпуска, больничные, уведомления о нарушениях, аналитика и отчётность, интеграция с HIK-Vision' },
                    { name: 'Логистика', desc: 'Алгоритм перемещения и перераспределения товаров между магазинами на основании остатков, продаж и нагрузки по магазинам' },
                    { name: 'Аналитика', desc: 'Дашборды метрик' },
                    { name: 'Система сообщений', desc: 'Умная система отправки сообщений через Telegram между всеми сотрудниками компании, многосторонняя фильтрация, прикрепление фото и документов, отчётность о просмотре, напоминания, история сообщений, админ-панель' },
                    { name: 'Контроль качества', desc: 'Проверка изображений в рич-контенте товаров, уведомления о битых изображениях, учёт ошибок в ценниках, онлайн-чат через WebSocket между продавцами и отделом контента' },
                    { name: 'Автопарк', desc: 'Комплексный дашборд: учёт пробега, страховок, ремонтов и всех расходов по автомобилям; анализ повреждений, ржавчины и царапин; система бронирования автомобилей компании' },
                    { name: 'Рестораны', desc: 'Play/stop лист, аналитика блюд, модуль для управления дегустациями' },
                    { name: 'AEO / SEO генератор описаний', desc: 'Модуль с интеграцией Groq AI для генерации AEO-описаний категорий и товаров. Загрузка данных с сайта, фильтрация товаров, настройка промптов по схеме 1+5 (основной + пять рандомных вариаций для уникальности текста), автоматический импорт готовых описаний на сайт по принципу ETL' }
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
                            { name: 'Node.js / Express', level: 'Средний', width: 60, desc: '' },
                            { name: 'Telegram Bots / API', level: 'Экспертный', width: 90, desc: '' },
                            { name: 'Apps Script', level: 'Продвинутый', width: 80, desc: '' },
                            { name: 'PostgreSQL / Supabase', level: 'Средний', width: 60, desc: '' }
                        ]
                    },
                    {
                        name: 'CMS и CRM',
                        items: [
                            { name: 'CS-Cart', level: 'Экспертный', width: 100, desc: '' },
                            { name: 'OpenCart', level: 'Экспертный', width: 90, desc: '' },
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
                            { name: 'SEO / AEO оптимизация', level: 'Продвинутый', width: 80, desc: '' },
                            { name: 'Работа с ИИ', level: 'Продвинутый', width: 85, desc: '' },
                            { name: 'Менеджмент и руководство', level: 'Средний', width: 60, desc: '' }
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
                contact: 'Contact'
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
                dev_year: 'Year in development',
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
                        title: 'Content Manager, Website Administrator, SEO Manager, Developer',
                        company: 'Hi-Tech LLC — Tiraspol',
                        desc: 'Working across all holding projects (hi-tech.md, keramika.md, piazzaitalia.md, milano.md, casta.md, gruzia.md and others).',
                        items: [
                            'Started as content manager, quickly began assisting the website administrator',
                            'After 3 months took over administrator duties across all websites',
                            'Learned SEO optimisation and metadata configuration',
                            'Collaborated with developers — identified issues and assigned tasks',
                            'Built an electronic leave management system with a web app and Telegram bot',
                            'System grew to 18 modules with role-based access control',
                            'Integrated HIK-Vision for automated attendance tracking',
                            'Transitioned to development — process automation, internal tools, AI integration'
                        ]
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
                        ]
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
                        ]
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
                        ]
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
                        ]
                    },
                    {
                        date: 'Feb 2012 — Nov 2012',
                        title: 'Sales Manager',
                        company: '"International Travel Network" — San Francisco, USA (remote)',
                        desc: 'Sales department at a travel company.',
                        items: []
                    },
                    {
                        date: 'Jul 2011 — Feb 2012',
                        title: 'English Language Translator',
                        company: '"Brandimex" LTD — London, UK (remote)',
                        desc: '',
                        items: []
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
                        ]
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
                    'Secure authentication and data protection',
                    'Telegram API integration for a native user experience',
                    'File uploads, email notifications, Excel export',
                    'QR code generation for operational processes',
                    'Cloud storage and database'
                ],
                modules_title: 'Business Modules:',
                modules: [
                    { name: 'Attendance Control', desc: 'Work schedules, leave, sick days, violation notifications, analytics and reporting, HIK-Vision integration' },
                    { name: 'Logistics', desc: 'Algorithm for moving and redistributing goods between stores based on stock levels, sales, and store load' },
                    { name: 'Analytics', desc: 'Metrics dashboards' },
                    { name: 'Messaging System', desc: 'Smart Telegram-based messaging between all company staff, multi-level filtering, photo and document attachments, read receipts, reminders, message history, admin panel' },
                    { name: 'Quality Control', desc: 'Rich-content image validation, broken image notifications, price tag error tracking, real-time WebSocket chat between sales staff and the content team' },
                    { name: 'Fleet Management', desc: 'Comprehensive dashboard: mileage, insurance, repairs and all vehicle costs; damage, rust and scratch analysis; company vehicle booking system' },
                    { name: 'Restaurants', desc: 'Play/stop list, dish analytics, tasting session management module' },
                    { name: 'AEO / SEO Description Generator', desc: 'Module with Groq AI integration for generating AEO descriptions for categories and products. Loads site data, filters products, configures prompts using a 1+5 scheme (one main + five random variations for text uniqueness), automatically imports finished descriptions to the site via ETL' }
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
                            { name: 'PostgreSQL / Supabase', level: 'Intermediate', width: 60, desc: '' }
                        ]
                    },
                    {
                        name: 'CMS & CRM',
                        items: [
                            { name: 'CS-Cart', level: 'Expert', width: 100, desc: '' },
                            { name: 'OpenCart', level: 'Expert', width: 90, desc: '' },
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
                            { name: 'SEO / AEO Optimisation', level: 'Advanced', width: 80, desc: '' },
                            { name: 'AI Tools', level: 'Advanced', width: 85, desc: '' },
                            { name: 'Management & Leadership', level: 'Intermediate', width: 60, desc: '' }
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
        const techStacks = [
            ['CS-Cart', 'Telegram Bots', 'PostgreSQL', 'Supabase', 'Apps Script', 'HTML/CSS/JS', 'SEO'],
            ['ETL процессы', 'Автоматизация', 'Google Docs'],
            ['OpenCart', 'CS-Cart'],
            ['ETL', 'Аналитика', 'Excel'],
            ['HR', 'Excel', 'Google Docs'],
            [], [], []
        ];
        const timeline = document.querySelector('.timeline');
        timeline.innerHTML = t.jobs.map((job, i) => `
            <div class="timeline-item" style="opacity:0;transform:translateY(20px);transition:all 0.6s ease ${i * 0.1}s">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${job.date}</span>
                    <h3>${job.title}</h3>
                    <h4>${job.company}</h4>
                    ${job.desc ? `<p>${job.desc}</p>` : ''}
                    ${job.items.length ? `<ul>${job.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
                    ${techStacks[i] && techStacks[i].length ? `<div class="tech-stack">${techStacks[i].map(t => `<span>${t}</span>`).join('')}</div>` : ''}
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
        document.querySelectorAll('.skill-category').forEach((category, index) => {
            observer.observe(category);
        });
        animateSkills();
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