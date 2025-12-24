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

    const typingText = document.querySelector('.typing-text');
    const text = "Разработчик, Аналитик, SEO-менеджер";
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
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

    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');
    const modalClose = document.querySelector('.modal-close');
    const modalPrevBtn = document.querySelector('.modal-prev-btn');
    const modalNextBtn = document.querySelector('.modal-next-btn');
    const modalThumbnails = document.querySelectorAll('.thumbnail');

    const projectsData = [
        {
            title: "Внутренняя система управления",
            description: "Комплексная система автоматизации HR-процессов с интеграцией Telegram ботов и систем видеонаблюдения. Система включает 18 модулей, электронный журнал отпусков, контроль посещаемости через HIK-vision.",
            images: ["./assets/images/project1.jpg", "./assets/images/project2.jpg", "./assets/images/project3.jpg"],
            tags: ["Telegram Bots", "Supabase", "Apps Script", "PostgreSQL", "HIK-vision"]
        },
        {
            title: "E-commerce платформа",
            description: "Оптимизация работы маркетплейса с 10,000+ товаров. Автоматизация обновления остатков и цен, разработка шаблонов импорта, повышение скорости обработки данных на 40%.",
            images: ["./assets/images/project2.jpg", "./assets/images/project1.jpg", "./assets/images/project3.jpg"],
            tags: ["CS-Cart", "ETL", "SEO", "Google Sheets", "Автоматизация"]
        },
        {
            title: "Аналитическая панель",
            description: "Дашборд для отслеживания ключевых бизнес-метрик. Автоматизация отчетности, визуализация данных, интеграция с различными источниками данных.",
            images: ["./assets/images/project3.jpg", "./assets/images/project1.jpg", "./assets/images/project2.jpg"],
            tags: ["PostgreSQL", "Google Sheets", "JavaScript", "Data Visualization", "API"]
        },
        {
            title: "Интеграция ИИ",
            description: "Внедрение искусственного интеллекта для автоматизации процессов контент-менеджмента. Генерация описаний товаров, оптимизация мета-данных, анализ данных.",
            images: ["./assets/images/project1.jpg", "./assets/images/project2.jpg", "./assets/images/project3.jpg"],
            tags: ["AI Integration", "Automation", "Python", "NLP", "Machine Learning"]
        },
        {
            title: "Мобильное приложение",
            description: "Кроссплатформенное приложение для управления задачами и проектами. Синхронизация с облаком, уведомления, совместная работа в реальном времени.",
            images: ["./assets/images/project2.jpg", "./assets/images/project1.jpg", "./assets/images/project3.jpg"],
            tags: ["React Native", "Firebase", "REST API", "Push Notifications", "Cloud Sync"]
        }
    ];

    let currentProjectIndex = 0;
    let currentImageIndex = 0;

    function openModal(index) {
        currentProjectIndex = index;
        currentImageIndex = 0;
        const project = projectsData[index];
        
        updateModalImage();
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        
        modalTags.innerHTML = '';
        project.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            modalTags.appendChild(span);
        });
        
        modalThumbnails.forEach((thumb, idx) => {
            thumb.src = project.images[idx] || project.images[0];
            thumb.classList.toggle('active', idx === currentImageIndex);
        });
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function updateModalImage() {
        modalImage.src = projectsData[currentProjectIndex].images[currentImageIndex];
        modalThumbnails.forEach((thumb, idx) => {
            thumb.classList.toggle('active', idx === currentImageIndex);
        });
    }

    document.querySelectorAll('.btn-view').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(index);
        });
    });

    document.querySelectorAll('.btn-view-mobile').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(index);
        });
    });

    modalPrevBtn.addEventListener('click', () => {
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : projectsData[currentProjectIndex].images.length - 1;
        updateModalImage();
    });

    modalNextBtn.addEventListener('click', () => {
        currentImageIndex = currentImageIndex < projectsData[currentProjectIndex].images.length - 1 ? currentImageIndex + 1 : 0;
        updateModalImage();
    });

    modalThumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentImageIndex = index;
            updateModalImage();
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
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
                if (bar.getAttribute('data-animated') === 'false') {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                    bar.setAttribute('data-animated', 'true');
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
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    document.querySelectorAll('.skill-category').forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(category);
    });

    const sliderTrack = document.querySelector('.projects-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalCards = 5;
    const cardWidth = 100 / 3.5;

    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalCards - 1;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider();

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (lang === 'en') {
                Weglot.switchTo('en');
            } else {
                Weglot.switchTo('ru');
            }
        });
    });
});