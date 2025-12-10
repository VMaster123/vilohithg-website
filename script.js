// Sample projects data - Update this with your actual projects
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with React and Node.js.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/yourusername/ecommerce",
        demo: "https://your-demo-link.com",
        icon: "🛒"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: ["React", "Firebase", "TypeScript"],
        github: "https://github.com/yourusername/taskapp",
        demo: "https://your-demo-link.com",
        icon: "✅"
    },
    {
        title: "Weather Dashboard",
        description: "A beautiful weather dashboard that displays current weather conditions and forecasts using real-time API data with interactive charts.",
        technologies: ["JavaScript", "API", "Chart.js"],
        github: "https://github.com/yourusername/weather",
        demo: "https://your-demo-link.com",
        icon: "🌤️"
    },
    {
        title: "Social Media Analytics",
        description: "Analytics dashboard for social media metrics with data visualization, export functionality, and customizable reports.",
        technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
        github: "https://github.com/yourusername/analytics",
        demo: "https://your-demo-link.com",
        icon: "📊"
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/yourusername/portfolio",
        demo: "https://your-demo-link.com",
        icon: "💼"
    },
    {
        title: "Chat Application",
        description: "Real-time chat application with multiple rooms, file sharing, and emoji support. Built with Socket.io and React.",
        technologies: ["React", "Socket.io", "Express"],
        github: "https://github.com/yourusername/chat",
        demo: "https://your-demo-link.com",
        icon: "💬"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    setupNavigation();
    setupContactForm();
    setupSmoothScroll();
});

// Load projects into the grid
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                ${project.icon}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">GitHub</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">Live Demo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Setup mobile navigation
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
    
    // Add active state to nav links on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this to a backend
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

