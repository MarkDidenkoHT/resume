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
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');
    const modalXClose = document.querySelector('.modal-x-close');

    const projectsData = [
        {
            title: "Hi-Tech App — Платформа для управления бизнесом",
            description: "Разработал многофункциональную Telegram Web App (TWA) с Node.js/Express бэкендом, интегрированную с Supabase. Платформа автоматизирует ключевые бизнес-процессы: управление складом, планирование графиков, взаимодействие с клиентами, контроль качества и логистику. Реализована модульная архитектура с динамической загрузкой 20+ независимых модулей. Внедрена надежная система безопасности: JWT-аутентификация, шифрование паролей bcrypt, Helmet.js, rate limiting. Также интегрированы функции загрузки файлов, email-уведомлений, экспорта в Excel и генерации QR-кодов.",
            tags: ["Node.js", "Express", "Supabase", "JWT", "Telegram API", "Helmet", "Nodemailer", "XLSX", "PostgreSQL"]
        }
    ];

    let currentProjectIndex = 0;

    document.querySelectorAll('.btn-view').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentProjectIndex = index;
            const project = projectsData[index];
            
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            
            modalTags.innerHTML = '';
            project.tags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                modalTags.appendChild(span);
            });
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    modalXClose.addEventListener('click', () => {
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
    const totalCards = 1;

    function calculateVisibleCards() {
        if (window.innerWidth <= 768) {
            return 1;
        } else {
            return 1;
        }
    }

    function calculateCardWidth() {
        const containerWidth = document.querySelector('.projects-container').offsetWidth;
        const visibleCards = calculateVisibleCards();
        return containerWidth / visibleCards;
    }

    function updateSlider() {
        const cardWidth = calculateCardWidth();
        const visibleCards = calculateVisibleCards();
        const maxIndex = Math.max(0, totalCards - visibleCards);
        
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        
        sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        dots.forEach((dot, index) => {
            if (index <= maxIndex) {
                dot.style.display = 'inline-block';
                dot.classList.toggle('active', index === currentIndex);
            } else {
                dot.style.display = 'none';
            }
        });
        
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }

    nextBtn.addEventListener('click', () => {
        const visibleCards = calculateVisibleCards();
        const maxIndex = Math.max(0, totalCards - visibleCards);
        if (currentIndex < maxIndex) {
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
            const visibleCards = calculateVisibleCards();
            const maxIndex = Math.max(0, totalCards - visibleCards);
            if (index <= maxIndex) {
                currentIndex = index;
                updateSlider();
            }
        });
    });

    updateSlider();
    window.addEventListener('resize', updateSlider);

    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const currentLanguage = document.querySelector('.current-language');

    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.language-dropdown button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-language');
            currentLanguage.textContent = lang.toUpperCase();
            languageDropdown.classList.remove('show');
            
            if (lang === 'en') {
                Weglot.switchTo('en');
            } else {
                Weglot.switchTo('ru');
            }
        });
    });

    document.addEventListener('click', () => {
        languageDropdown.classList.remove('show');
    });

    document.querySelectorAll('.weglot-container').forEach(container => {
        container.style.display = 'none';
    });

    const lightboxModal = document.getElementById('lightboxModal');

    function closeLightbox() {
        lightboxModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    document.addEventListener('keydown', (e) => {
        if (lightboxModal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });

    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
});