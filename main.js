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
    const modalXClose = document.querySelector('.modal-x-close');
    const imageNavDotsContainer = document.querySelector('.image-nav-dots');
    const thumbnailTrack = document.querySelector('.thumbnail-track');

    const projectsData = [
        {
            title: "Внутренняя система управления/контроля рабочего графика",
            description: "Автоматизация запросов отпусков/больничных/отгулов, интеграция с Telegram и системой контроля доступа. Сотрудник в веб-приложении запрашивет время и дату, выбирает тип запроса, указывает причину. Руководителю в боте приходит уведомление с инлайн опциями подтвердить/отклонить. Из БД HIK-vision делается ежедневная выгрузка посещаемости и сопоставляется с одобренными запросами, таким образом корректируя присутствие/отсутствие сотрудника на рабочем месте. Данное решение сэкономило 3 рабочих дня сотруднику службы безопасности.",
            images: [
                "./assets/images/timetable1.jpg",
                "./assets/images/timetable2.jpg",
                "./assets/images/timetable3.jpg",
                "./assets/images/timetable4.jpg"
            ],
            tags: ["HTML/CSS/JS", "Telegram Bots", "Supabase", "HIK-vision"]
        },
        {
            title: "Алгоритм распределения и перемещения товаров между магазинами",
            description: "Оптимизация и автоматизация процессов с остатками товаров и новыми поступления между магазинами торговой сети. Ранее сотрудник вручную делал выгрузку из 1С в эксель, в таблице смотрел на остатки между магазинами, новые поступления и реализацию, основываясь на эти показатели в таблице вручную отмечал сколько какого товара переметсить между магазинами и складами. Процесс занимал дни ручной работы. Я разработал алгоритм и приложение, которое выполняет работу с этими файлами со стороны клиета, данные остаются локально, и выполняет все эти операции за менеджера, менеджеру остается только проверить работу алгоритма, и по необходимости внести корректировки. Данный алгоритм ускорил работу на 90%.",
            images: [
                "https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Project+2-1",
                "https://via.placeholder.com/800x600/6366f1/ffffff?text=Project+2-2",
                "https://via.placeholder.com/800x600/10b981/ffffff?text=Project+2-3"
            ],
            tags: ["HTML/CSS/JS","ETL", "Excel", "Analytics", "SMTP"]
        },
        {
            title: "Система отправки сообщений",
            description: "Система отправки сообщений, с отчетсностью и сквозными фильтрами. Позволяет точно выбрать кому отправить сообщение, по нескольким критериям, показывает результаты по ответам, дает возможность переотправить сообщение, отправить тем кто не ответил, прикрелпять фото как файл или url изображения.",
            images: [
                "./assets/images/message1.jpg",
                "./assets/images/message2.jpg"
            ],
            tags: ["HTML/CSS/JS", "Supabase", "Telegram API", "Push Notifications"]
        },
        {
            title: "Интеграция ИИ",
            description: "Внедрение искусственного интеллекта для автоматизации процессов автопарка компании. Водители отправляют фото машин, ИИ определяет по номеру машину, сверяет ее текущее состояние, определяет новые повреждения, информирует ежемесячно о новых повреждениях, царапинах, ржавчине.",
            images: [
                "https://via.placeholder.com/800x600/f59e0b/ffffff?text=Project+4-1",
                "https://via.placeholder.com/800x600/6366f1/ffffff?text=Project+4-2",
                "https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Project+4-3"
            ],
            tags: ["AI Integration", "Telegram API", "Google Sheets", "Apps Script"]
        },
        {
            title: "Shattered Crown",
            description: "Хобби-проект, фэнтэзи tbrpg, альфа-версия запланирована на начало весны 2026. Пошаговая онлайн игра, с небольшой сюжетной линией, развитием персонажей, профессиями, экономикой.",
            images: [
                "./assets/images/shattered_crown1.jpg",
                "./assets/images/shattered_crown2.jpg",
                "./assets/images/shattered_crown3.jpg",
                "./assets/images/shattered_crown4.jpg",
                "./assets/images/shattered_crown5.jpg"
            ],
            tags: ["HTML/CSS/JS", "Supabase", "Telegram API", "Push Notifications", "Cloud Sync"]
        }
    ];

    let currentProjectIndex = 0;
    let currentImageIndex = 0;

    function updateImageNavigation(projectIndex) {
        const project = projectsData[projectIndex];
        
        imageNavDotsContainer.innerHTML = '';
        thumbnailTrack.innerHTML = '';
        
        project.images.forEach((image, index) => {
            const dot = document.createElement('span');
            dot.className = 'image-nav-dot';
            if (index === currentImageIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentImageIndex = index;
                modalImage.src = project.images[currentImageIndex];
                updateImageNavigation(projectIndex);
            });
            imageNavDotsContainer.appendChild(dot);

            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            if (index === currentImageIndex) thumbnail.classList.add('active');
            thumbnail.innerHTML = `<img src="${image.replace('800x600', '100x100')}" alt="">`;
            thumbnail.addEventListener('click', () => {
                currentImageIndex = index;
                modalImage.src = project.images[currentImageIndex];
                updateImageNavigation(projectIndex);
            });
            thumbnailTrack.appendChild(thumbnail);
        });
        
        modalImage.src = project.images[currentImageIndex];
    }

    document.querySelectorAll('.btn-view').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentProjectIndex = index;
            currentImageIndex = 0;
            const project = projectsData[index];
            
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            
            modalTags.innerHTML = '';
            project.tags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                modalTags.appendChild(span);
            });
            
            updateImageNavigation(index);
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

    const imageNavPrev = document.querySelector('.image-nav-prev');
    const imageNavNext = document.querySelector('.image-nav-next');

    imageNavPrev.addEventListener('click', () => {
        const project = projectsData[currentProjectIndex];
        currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
        modalImage.src = project.images[currentImageIndex];
        updateImageNavigation(currentProjectIndex);
    });

    imageNavNext.addEventListener('click', () => {
        const project = projectsData[currentProjectIndex];
        currentImageIndex = (currentImageIndex + 1) % project.images.length;
        modalImage.src = project.images[currentImageIndex];
        updateImageNavigation(currentProjectIndex);
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

    function calculateVisibleCards() {
        if (window.innerWidth <= 768) {
            return 1;
        } else {
            return 3;
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
        
        if (window.innerWidth <= 768) {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
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
});