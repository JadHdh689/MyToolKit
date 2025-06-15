// Sample data for books and groups
const booksData = {
  group1: {
    title: "Educational Fundamentals",
    description: "Essential books covering the fundamental concepts of education and learning methodologies. These resources provide a solid foundation for understanding modern educational practices.",
    books: [
      {
        id: "book1.1",
        title: "Learning Basics",
        description: "This comprehensive guide introduces the fundamental principles of effective learning. It covers various learning styles, memory techniques, and strategies for academic success. Perfect for students and educators looking to enhance their understanding of how learning works."
      },
      {
        id: "book1.2", 
        title: "Study Methods",
        description: "Discover proven study techniques and methodologies that have helped thousands of students achieve academic excellence. This book provides practical tips, time management strategies, and effective note-taking methods."
      },
      {
        id: "book1.3",
        title: "Academic Success",
        description: "A complete roadmap to academic achievement, covering goal setting, motivation techniques, and overcoming common academic challenges. Essential reading for anyone serious about their educational journey."
      }
    ]
  },
  group2: {
    title: "Advanced Learning",
    description: "Advanced educational resources designed for deeper learning and specialized knowledge acquisition. These books challenge readers to think critically and develop advanced skills.",
    books: [
      {
        id: "book2.1",
        title: "Critical Thinking",
        description: "Develop your analytical and critical thinking skills with this comprehensive guide. Learn to evaluate information objectively, identify logical fallacies, and make well-reasoned decisions in both academic and professional contexts."
      },
      {
        id: "book2.2",
        title: "Research Methods",
        description: "Master the art and science of research with this detailed exploration of various research methodologies. From qualitative to quantitative approaches, this book covers everything you need to conduct meaningful research."
      },
      {
        id: "book2.3",
        title: "Data Analysis",
        description: "Learn to interpret and analyze data effectively using modern statistical methods and tools. This book bridges the gap between theory and practical application in data analysis."
      }
    ]
  },
  group3: {
    title: "Professional Development",
    description: "Resources focused on career advancement and professional skill development. These books help readers build the competencies needed for success in today's competitive workplace.",
    books: [
      {
        id: "book3.1",
        title: "Leadership Skills",
        description: "Unlock your leadership potential with proven strategies and techniques. This book covers emotional intelligence, team management, decision-making, and inspiring others to achieve common goals."
      },
      {
        id: "book3.2",
        title: "Communication",
        description: "Master the art of effective communication in both personal and professional settings. Learn verbal and non-verbal communication techniques, public speaking skills, and how to build meaningful relationships."
      },
      {
        id: "book3.3",
        title: "Project Management",
        description: "Comprehensive guide to managing projects successfully from initiation to completion. Covers planning, execution, monitoring, and closing projects while managing resources and stakeholders effectively."
      }
    ]
  }
};

// Blog posts data
const blogPosts = [
  {
    title: "The Future of Digital Learning",
    excerpt: "Exploring how technology is revolutionizing education and creating new opportunities for learners worldwide.",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    title: "Effective Study Techniques for Modern Students",
    excerpt: "Discover proven methods that help students retain information better and achieve academic success.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    title: "Building Critical Thinking Skills",
    excerpt: "Learn how to develop analytical thinking abilities that are essential in today's information-rich world.",
    image: "https://images.pexels.com/photos/8197562/pexels-photo-8197562.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

class BookWebsite {
  constructor() {
    this.currentModal = null;
    this.init();
  }

  init() {
    this.renderPage();
    this.bindEvents();
  }

  renderPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${this.renderHeader()}
      ${this.renderHero()}
      ${this.renderMainContent()}
      ${this.renderFooter()}
      ${this.renderModal()}
    `;
  }

  renderHeader() {
    return `
      <header class="header">
        <nav class="nav">
          <a href="#" class="logo">MySmartKit</a>
          <ul class="nav-links" id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button class="mobile-menu-btn" id="mobileMenuBtn">
            <i class="fas fa-bars"></i>
          </button>
        </nav>
      </header>
    `;
  }

  renderHero() {
    return `
      <section class="hero" id="home">
        <div class="hero-content">
          <h1>Welcome to MySmartKit</h1>
          <p>Discover a comprehensive collection of educational resources designed to enhance your learning journey</p>
          <a href="#books" class="cta-button">Explore Books</a>
        </div>
      </section>
    `;
  }

  renderMainContent() {
    return `
      <main class="main-content">
        ${this.renderBlogSection()}
        ${this.renderGroupsSection()}
      </main>
    `;
  }

  renderBlogSection() {
    return `
      <section class="blog-section">
        <h2 class="section-title">Latest Insights</h2>
        <div class="blog-grid">
          ${blogPosts.map(post => `
            <article class="blog-card">
              <img src="${post.image}" alt="${post.title}">
              <div class="blog-card-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  renderGroupsSection() {
    return `
      <section class="groups-section" id="books">
        <h2 class="section-title">Book Collections</h2>
        <div class="groups-grid">
          ${Object.entries(booksData).map(([groupKey, group]) => `
            <div class="group-card">
              <div class="group-header">
                <h3>${group.title}</h3>
                <p class="group-description">${group.description}</p>
              </div>
              <div class="books-grid">
                ${group.books.map(book => `
                  <div class="book-item" data-book-id="${book.id}" data-group="${groupKey}">
                    <div class="book-cover">
                      <i class="fas fa-book"></i>
                    </div>
                    <div class="book-title">${book.title}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  renderFooter() {
    return `
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>MySmartKit</h3>
            <p>Empowering learners with quality educational resources and innovative learning solutions.</p>
          </div>
          <div class="footer-section">
            <h3>Contact Information</h3>
            <p><i class="fas fa-phone"></i> +96103755615</p>
            <p><i class="fas fa-envelope"></i> info@mysmartkit.com</p>
          </div>
          <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="https://wa.me/96103755615" target="_blank" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/iug__2025/" target="_blank" title="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/Quality.oflife2000" target="_blank" title="Facebook">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/dr-souheir-al-hariri-74a08162/" target="_blank" title="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 MySmartKit. All rights reserved.</p>
        </div>
      </footer>
    `;
  }

  renderModal() {
    return `
      <div class="modal" id="bookModal">
        <div class="modal-content">
          <button class="modal-close" id="modalClose">&times;</button>
          <div id="modalBody">
            <!-- Modal content will be inserted here -->
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn?.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Book click events
    document.addEventListener('click', (e) => {
      if (e.target.closest('.book-item')) {
        const bookItem = e.target.closest('.book-item');
        const bookId = bookItem.dataset.bookId;
        const groupKey = bookItem.dataset.group;
        this.openBookModal(bookId, groupKey);
      }
    });

    // Modal close events
    const modal = document.getElementById('bookModal');
    const modalClose = document.getElementById('modalClose');
    
    modalClose?.addEventListener('click', () => {
      this.closeModal();
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });

    // Smooth scrolling for navigation links
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu if open
          navLinks.classList.remove('active');
        }
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  }

  openBookModal(bookId, groupKey) {
    const group = booksData[groupKey];
    const book = group.books.find(b => b.id === bookId);
    
    if (!book) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
      <div class="modal-book-cover">
        <i class="fas fa-book"></i>
      </div>
      <h2>${book.title}</h2>
      <p><strong>Collection:</strong> ${group.title}</p>
      <p>${book.description}</p>
    `;

    const modal = document.getElementById('bookModal');
    modal.classList.add('active');
    this.currentModal = modal;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (this.currentModal) {
      this.currentModal.classList.remove('active');
      this.currentModal = null;
      // Restore body scroll
      document.body.style.overflow = '';
    }
  }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BookWebsite();
});

// Handle escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const website = new BookWebsite();
    website.closeModal();
  }
});