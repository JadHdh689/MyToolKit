// Book data with corrected image paths
const booksData = {
  group1: [
    {
      id: '1.1',
      title: 'Just. Be. Calm',
      cover: '/images/group1/book1_1/cover1_1.jpg',
      description: 'About1.1.txt',
      assets: [
        { name: 'Story', path: '/images/group1/book1_1/story1_1.png' },
        { name: 'Guide', path: '/images/group1/book1_1/guide1_1.png' },
        { name: 'Activity', path: '/images/group1/book1_1/activity1_1.png' },
        { name: 'Stickers', path: '/images/group1/book1_1/stickers1_1.png' },
        { name: 'Certificate', path: '/images/group1/book1_1/certificate1_1.png' }
      ]
    },
    {
      id: '1.2',
      title: 'To Obey My Parents',
      cover: '/images/group1/Book1_2/Cover1_2.png',
      description: 'About1.2.txt',
      assets: [
        { name: 'Story', path: '/images/group1/Book1_2/Story1_2.jpg' },
        { name: 'Guide Page 1', path: '/images/group1/Book1_2/Guide1_2-p1.jpg' },
        { name: 'Guide Page 2', path: '/images/group1/Book1_2/Guide1_2-p2.jpg' },
        { name: 'Activity', path: '/images/group1/Book1_2/Activity1_2.jpg' },
        { name: 'Stickers', path: '/images/group1/Book1_2/Stickers1_2.jpg' },
        { name: 'Certificate', path: '/images/group1/Book1_2/Certificate1_2.jpg' }
      ]
    },
   {
  id: '1.3',
  title: 'To Speak Honestly',
  cover: '/images/group1/Book1_3/Cover1_3.png',
  description: 'About1.3.txt',
  assets: [
    { name: 'Story', path: '/images/group1/Book1_3/Story1_3.png' },
    { name: 'Guide', path: '/images/group1/Book1_3/Guide1_3.png' },
    { name: 'Activity', path: '/images/group1/Book1_3/Activity1_3.png' },
    { name: 'Stickers', path: '/images/group1/Book1_3/Stickers1_3.png' }
  ]
},
{
  id: '1.4',
  title: 'To Be Kind',
  cover: '/images/group1/Book1_4/Cover1_4.png',
  description: 'About1.4.txt',
  assets: [
    { name: 'Activity', path: '/images/group1/Book1_4/Activity1_4.png' },
    { name: 'Stickers', path: '/images/group1/Book1_4/Stickers1_4.png' },
    { name: 'Certificate', path: '/images/group1/Book1_4/Certificate1_4.png' }
  ]
},
{
  id: '1.5',
  title: 'To Listen and Focus',
  cover: '/images/group1/Book1_5/Cover1_5.jpg',
  description: 'About1.5.txt',
  assets: [
    { name: 'Story', path: '/images/group1/Book1_5/Story1_5.jpg' },
    { name: 'Guide Page 1', path: '/images/group1/Book1_5/Guide1_5-p1.jpg' },
    { name: 'Guide Page 2', path: '/images/group1/Book1_5/Guide1_5-p2.jpg' },
    { name: 'Activity', path: '/images/group1/Book1_5/Activity1_5.jpg' },
    { name: 'Stickers', path: '/images/group1/Book1_5/Stickers1_5.jpg' },
    { name: 'Certificate', path: '/images/group1/Book1_5/Certificate1_5.jpg' }
  ]
},
{
  id: '1.6',
  title: 'To Tidy Up My Things',
  cover: '/images/group1/Book1_6/cover1_6.jpg',
  description: 'About1.6.txt',
  assets: [
    { name: 'Story', path: '/images/group1/Book1_6/Story1_6.jpg' },
    { name: 'Guide', path: '/images/group1/Book1_6/Guide1_6.jpg' },
    { name: 'Activity', path: '/images/group1/Book1_6/Activity1_6.jpg' },
    { name: 'Stickers', path: '/images/group1/Book1_6/Stickers1_6.jpg' },
    { name: 'Certificate', path: '/images/group1/Book1_6/Certificate1_6.jpg' }
  ]
}
  ],
  group2: [
    {
      id: '2.1',
      title: 'To Focus and Be Calm',
      cover: '/images/Group2/Book2_1/Cover2_1.jpg',
      description: '/About2.1.txt',
      assets: [
        { name: 'Story', path: '/images/Group2/Book2_1/Story2.1.jpg' },
        { name: 'Guide', path: '/images/Group2/Book2_1/Guide2_1.jpg' },
        { name: 'Activity', path: '/images/Group2/Book2_1/Activity2_1.jpg' },
        { name: 'Stickers', path: '/images/Group2/Book2_1/Stickers2_1.jpg' },
        { name: 'Certificate', path: '/images/Group2/Book2_1/Certificate2_1.jpg' }
      ]
    },
   {
  id: '2.2',
  title: 'To Be a Leader',
  cover: '/images/Group2/Book2_2/Cover2_2.jpg',
  description: 'About2.2.txt',
  assets: [
    { name: 'Story', path: '/images/Group2/Book2_2/Story2_2.jpg' },
    { name: 'Guide', path: '/images/Group2/Book2_2/Guide2_2.jpg' },
    { name: 'Activity', path: '/images/Group2/Book2_2/Activity2_2.jpg' },
    { name: 'Stickers', path: '/images/Group2/Book2_2/Stickers2_2.jpg' },
    { name: 'Certificate', path: '/images/Group2/Book2_2/Certificate2_2.jpg' }
  ]
},
{
  id: '2.3',
  title: 'To Protect My Space',
  cover: '/images/Group2/Book2_3/cover1_3.jpg',
  description: 'About2.3.txt',
  assets: [
    { name: 'Story', path: '/images/Group2/Book2_3/story1_3.jpg' },
    { name: 'Guide Page 1', path: '/images/Group2/Book2_3/guide1_3-p1.jpg' },
    { name: 'Guide Page 2', path: '/images/Group2/Book2_3/guide1_3-p2.jpg' },
    { name: 'Activity', path: '/images/Group2/Book2_3/activity1_3.jpg' },
    { name: 'Stickers', path: '/images/Group2/Book2_3/stickers1_3.jpg' },
    { name: 'Certificate', path: '/images/Group2/Book2_3/certificate1_3.jpg' }
  ]
},
{
  id: '2.4',
  title: 'To Manage My Time',
  cover: '/images/Group2/Book2_4/Cover2_4.png',
  description: 'About2.4.txt',
  assets: [
    { name: 'Activity', path: '/images/Group2/Book2_4/Activity2_4.png' },
    { name: 'Stickers', path: '/images/Group2/Book2_4/Stickers2_4.png' },
    { name: 'Certificate', path: '/images/Group2/Book2_4/Certificate2_4.png' }
  ]
},
{
  id: '2.5',
  title: 'To Make My Wish Come True',
  cover: '/images/Group2/Book2_5/Cover2_5.png',
  description: 'About2.5.txt',
  assets: [
    { name: 'Activity', path: '/images/Group2/Book2_5/Activity2_5.png' },
    { name: 'Guide', path: '/images/Group2/Book2_5/Guide2_5.png' }
  ]
}
  ]
,
  group3: [
  {
    id: '3.1',
    title: 'To Know Myself',
    cover: '/images/Group3/Book3_1/Cover3_1.png',
    description: 'About3.1.txt',
    assets: [
      { name: 'Activity', path: '/images/Group3/Book3_1/Activity3_1.png' },
      { name: 'Guide', path: '/images/Group3/Book3_1/Guide3_1.png' }
    ]
  },
  {
    id: '3.2',
    title: 'Step by Step... I Will Succeed!',
    cover: '/images/Group3/Book3_2/Cover3_2.png',
    description: 'About3.2.txt',
    assets: [
      { name: 'Activity', path: '/images/Group3/Book3_2/Activity3_2.png' },
      { name: 'Guide', path: '/images/Group3/Book3_2/Guide3_2.png' },
      { name: 'Certificate', path: '/images/Group3/Book3_2/Certificate3_2.png' }
    ]
  },
  {
    id: '3.3',
    title: 'Unlock My Mind',
    cover: '/images/Group3/Book3_3/cover3_3.jpg',
    description: 'About3.3.txt',
    assets: [
      { name: 'Story', path: '/images/Group3/Book3_3/story3_3.jpg' },
      { name: 'Guide Page 1', path: '/images/Group3/Book3_3/guide3_3-p1.jpg' },
      { name: 'Guide Page 2', path: '/images/Group3/Book3_3/guide3_3-p2.jpg' },
      { name: 'Activity', path: '/images/Group3/Book3_3/activity3_3.jpg' },
      { name: 'Stickers', path: '/images/Group3/Book3_3/stickers3_3.jpg' },
      { name: 'Certificate', path: '/images/Group3/Book3_3/certificate3_3.jpg' }
    ]
  },
  {
    id: '3.4',
    title: 'To Make Sense of My Feelings',
    cover: '/images/Group3/Book3_4/cover3_4.jpg',
    description: 'About3.4.txt',
    assets: [
      { name: 'Story', path: '/images/Group3/Book3_4/story3_4.jpg' },
      { name: 'Guide', path: '/images/Group3/Book3_4/guide3_4.jpg' },
      { name: 'Activity', path: '/images/Group3/Book3_4/activity3_4.jpg' },
      { name: 'Stickers', path: '/images/Group3/Book3_4/stickers3_4.jpg' },
      { name: 'Certificate', path: '/images/Group3/Book3_4/certificate3_4.jpg' }
    ]
  },
  {
    id: '3.5',
    title: 'To Face My Fears',
    cover: '/images/Group3/Book3_5/cover3_5.jpg',
    description: 'About3.5.txt',
    assets: [
      { name: 'Story', path: '/images/Group3/Book3_5/Story3_5.jpg' },
      { name: 'Guide Page 1', path: '/images/Group3/Book3_5/guide3_5-p1.jpg' },
      { name: 'Guide Page 2', path: '/images/Group3/Book3_5/guide3_5-p2.jpg' },
      { name: 'Activity', path: '/images/Group3/Book3_5/activity3_5.jpg' },
      { name: 'Stickers', path: '/images/Group3/Book3_5/stickers3_5.jpg' },
      { name: 'Certificate', path: '/images/Group3/Book3_5/certificate3_5.jpg' }
    ]
  }
]
,
group4: [
  {
    id: '4.1',
    title: 'To Grow with Confidence',
    cover: '/images/Group4/Book4_1/Cover4_1.png',
    description: 'About4.1.txt',
    assets: [
      { name: 'Activity', path: '/images/Group4/Book4_1/Activity4_1.png' },
      { name: 'Guide', path: '/images/Group4/Book4_1/Guide4_1.png' },
      { name: 'Stickers', path: '/images/Group4/Book4_1/Stickers4_1.png' },
      { name: 'Certificate', path: '/images/Group4/Book4_1/Certificate4_1.jpg' }
    ]
  }
],
group5: [
  {
    id: '5.1',
    title: 'Positive CBT Workbook',
    cover: '/images/Group5/Book5_1/Cover5_1.png',
    description: 'About5.1.txt',
    assets: [
      { name: 'Activity', path: '/images/Group5/Book5_1/Activity5_1.jpg' },
      { name: 'Guide', path: '/images/Group5/Book5_1/Guide5_1.jpg' }
    ]
  }
]
};

// Blog data
const blogData = [
  {
    id: 1,
    title: 'Big Feelings in Small Bodies: How to Help Children Understand and Express Their Emotions',
    ageRange: 'Ages 3–8',
    image: 'Blogs/Blog1_image.jpg',
    content: 'Blog1.txt'
  },
  {
    id: 2,
    title: 'More Than a Mood Swing: Understanding Teen Behavior Through ABA and Emotional Intelligence',
    ageRange: 'Ages 9–16',
    image: 'Blogs/Blog2_image.jpg',
    content: 'Blog2.txt'
  },
  {
    id: 3,
    title: 'Healing, Growing, Thriving: How CBT and Positive Psychology Empower Adults',
    ageRange: 'Ages 18+',
    image: 'Blogs/Blog3_image.jpg',
    content: 'Blog3.txt'
  }
];

// Group data
const groupsData = [
  {
    id: 1,
    title: 'Tiny Tools for Big Feelings',
    ageRange: 'Ages 3-5',
    image: 'images/group1/Group_1.jpg',
    description: 'About_Group1.txt',
    books: booksData.group1
  },
  {
    id: 2,
    title: 'Tiny Tools for Big Feelings',
    ageRange: 'Ages 6-8',
    image: 'images/Group2/Group2.jpg',
    description: 'About_Group2.txt',
    books: booksData.group2
  },
  {
    id: 3,
    title: 'Tiny Tools for Big Feelings',
    ageRange: 'Ages 9-12',
    image: 'images/Group3/Group3.jpg',
    description: 'About_Group3.txt',
    books: booksData.group3
  },
  {
    id: 4,
    title: 'Tiny Tools for Big Feelings',
    ageRange: 'Ages 13-17',
    image: 'images/Group4/Group4.jpg',
    description: 'About_Group4.txt',
    books: booksData.group4
  },
  {
    id: 5,
    title: 'Positive CBT Collection',
    ageRange: 'Ages 18+',
    image: 'images/Group5/Group5.jpg',
    description: 'About_Group5.txt',
    books: booksData.group5
  }
];

// Utility functions
function createImageElement(src, alt = '', className = '') {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  if (className) img.className = className;
  
  img.onerror = function() {
    this.style.opacity = '0.3';
    console.warn(`Failed to load image: ${src}`);
  };
  
  return img;
}

async function loadTextFile(filename) {
  try {
    const response = await fetch(`Text Files/${filename}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return 'Content not available.';
  }
}

async function loadBlogContent(filename) {
  try {
    const response = await fetch(`Blogs/${filename}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return 'Content not available.';
  }
}

// Function to format text content with proper line breaks and bullet points
function formatTextContent(content) {
  return content
    .split('\n')
    .map(line => {
      const trimmedLine = line.trim();
      if (trimmedLine === '') {
        return '<br>';
      }
      // Handle bullet points that start with • or tab+•
      if (trimmedLine.startsWith('•') || trimmedLine.startsWith('\t•')) {
        return `<div style="margin-left: 20px; margin-bottom: 5px;">${trimmedLine}</div>`;
      }
      return `<div style="margin-bottom: 10px;">${trimmedLine}</div>`;
    })
    .join('');
}

// Render functions
function renderHero() {
  return `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1></h1>
        <p></p>
        
      </div>
    </section>
  `;
}

function renderVideoSection() {
  return `
    <section class="video-section">
      <div class="section-title">Featured Video</div>
      <div class="video-container">
        <div class="video-wrapper">
          <video controls >
            <source src="Video.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <div class="video-info">
          <h3>Discover Our Educational Approach</h3>
          <p>Watch this short video to learn more about our evidence-based methods and how our books can support emotional and behavioral development across all age groups.</p>
        </div>
      </div>
    </section>
  `;
}

function renderBlogSection() {
  const blogCards = blogData.map(blog => `
    <div class="blog-card" onclick="openBlogModal(${blog.id})">
      <div class="blog-image">
        ${createImageElement(blog.image, blog.title).outerHTML}
        <div class="blog-age-badge">${blog.ageRange}</div>
      </div>
      <div class="blog-card-content">
        <h3>${blog.title}</h3>
        <p>Discover evidence-based strategies and practical tools for emotional development and positive psychology.</p>
        <button class="read-more-btn">Read More</button>
      </div>
    </div>
  `).join('');

  return `
    <section class="blog-section">
      <div class="section-title">Latest Insights</div>
      <div class="blog-grid">
        ${blogCards}
      </div>
    </section>
  `;
}

function renderGroupsSection() {
  const groupSections = groupsData.map(group => {
    const booksGrid = group.books.map(book => `
      <div class="book-card" onclick="openBookModal('${book.id}')">
        <div class="book-cover">
          ${createImageElement(book.cover, book.title).outerHTML}
          <div class="book-overlay">
            <i class="fas fa-eye"></i>
            <span>View Details</span>
          </div>
        </div>
        <div class="book-info">
          <div class="book-title">${book.title}</div>
          <div class="book-id">Book ${book.id}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="group-section">
        <div class="group-header">
          <div class="group-image">
            ${createImageElement(group.image, group.title).outerHTML}
          </div>
          <div class="group-info">
            <h2 class="group-title">${group.title}</h2>
            <div class="group-age">${group.ageRange}</div>
            <div class="group-description" id="group-desc-${group.id}">Loading description...</div>
            <div class="group-duration">📚 ${group.books.length} Books Available</div>
          </div>
        </div>
        <div class="books-grid">
          ${booksGrid}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="groups-section" id="groups">
      <div class="section-title">Our Book Collections</div>
      <div class="groups-container">
        ${groupSections}
      </div>
    </section>
  `;
}

function renderAboutSection() {
  return `
    <section class="about-section" id="about">
      <div class="section-title">About MySmartKit</div>
      <div class="about-grid">
        <div class="about-text">
          <h3>Evidence-Based Educational Resources</h3>
          <p>MySmartKit provides comprehensive educational books and resources designed to support emotional, behavioral, and cognitive development across all age groups. Our materials are grounded in Applied Behavior Analysis (ABA), Cognitive Behavioral Therapy (CBT), and Positive Psychology principles.</p>
          <p>From early childhood through adulthood, our carefully crafted books offer practical tools, engaging activities, and proven strategies to help individuals build resilience, emotional intelligence, and positive life skills.</p>
          <p>Each book includes interactive elements, visual aids, and step-by-step guidance to ensure effective learning and lasting positive change.</p>
        </div>
        <div class="about-stats">
          <div class="stat-item">
            <h4>5</h4>
            <p>Age Groups</p>
          </div>
          <div class="stat-item">
            <h4>15+</h4>
            <p>Educational Books</p>
          </div>
          <div class="stat-item">
            <h4>100%</h4>
            <p>Evidence-Based</p>
          </div>
          <div class="stat-item">
            <h4>3-18+</h4>
            <p>Age Range</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderContactSection() {
  return `
    <section class="contact-section" id="contact">
      <div class="section-title">Get in Touch</div>
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Contact Information</h3>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>souheirdr1@gmail.com</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <p>+961 03 755 615</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h4>Address</h4>
              <p>شارع عبد العزيز خط مستشفى الجامعة
بناية الأسود 
حد السبينس
Wellbeing centre 
موجود بالبناية بالباركينغ</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>MySmartKit</h3>
          <p>Empowering growth through evidence-based educational resources for all ages.</p>
          <div class="social-links">
            <a href="https://www.facebook.com/Quality.oflife2000"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/iug__2025/"><i class="fab fa-instagram"></i></a>
            <a href="https://youtube.com/@dr.souheiralhariri9392?si=KkI9wnLi5iYOPmiR"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#groups">Book Collections</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Age Groups</h3>
          <ul>
            <li><a href="#groups">Ages 3-5</a></li>
            <li><a href="#groups">Ages 6-8</a></li>
            <li><a href="#groups">Ages 9-12</a></li>
            <li><a href="#groups">Ages 13-17</a></li>
            <li><a href="#groups">Ages 18+</a></li>
          </ul>
        </div>
        
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 MySmartKit. All rights reserved.</p>
      </div>
    </footer>
  `;
}

// Modal functions - Expose to global scope
window.openBookModal = function(bookId) {
  const book = findBookById(bookId);
  if (!book) return;

  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  
  const assetsGrid = book.assets.map(asset => `
    <div class="asset-item" onclick="openImageViewer('${asset.path}', '${asset.name}')">
      ${createImageElement(asset.path, asset.name).outerHTML}
      <p>${asset.name}</p>
    </div>
  `).join('');

  modalContent.innerHTML = `
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <div class="modal-book-header">
      <div class="modal-book-cover">
        ${createImageElement(book.cover, book.title).outerHTML}
      </div>
      <div class="modal-book-info">
        <h2>${book.title}</h2>
        <div class="modal-book-id"><strong>Book ID:</strong> ${book.id}</div>
        <div class="modal-collection"><strong>Collection:</strong> ${getCollectionName(book.id)}</div>
        <div class="modal-age-range"><strong>Age Range:</strong> ${getAgeRange(book.id)}</div>
      </div>
    </div>
    <div class="modal-description">
      <h3>About This Book</h3>
      <div id="book-description-${book.id}">Loading description...</div>
    </div>
    <div class="modal-assets">
      <h3>Book Assets</h3>
      <div class="assets-grid">
        ${assetsGrid}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Load book description with proper formatting
  loadTextFile(book.description).then(content => {
    const descElement = document.getElementById(`book-description-${book.id}`);
    if (descElement) {
      descElement.innerHTML = formatTextContent(content);
    }
  });
};

window.openBlogModal = function(blogId) {
  const blog = blogData.find(b => b.id === blogId);
  if (!blog) return;

  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  
  modalContent.innerHTML = `
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <div class="blog-modal-header">
      ${createImageElement(blog.image, blog.title, 'blog-modal-image').outerHTML}
      <div class="blog-modal-info">
        <h2>${blog.title}</h2>
        <p>${blog.ageRange}</p>
      </div>
    </div>
    <div class="blog-modal-content">
      <div id="blog-content-${blog.id}">Loading content...</div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Load blog content
  loadBlogContent(blog.content).then(content => {
    const contentElement = document.getElementById(`blog-content-${blog.id}`);
    if (contentElement) {
      const paragraphs = content.split('\n\n').filter(p => p.trim());
      contentElement.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
    }
  });
};

window.closeModal = function() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
};

// Image viewer functions - Expose to global scope
window.openImageViewer = function(imagePath, imageName) {
  const viewer = document.getElementById('image-viewer');
  const container = document.querySelector('.image-viewer-container');
  
  container.innerHTML = `
    ${createImageElement(imagePath, imageName).outerHTML}
    <div class="image-viewer-info">
      <h3>${imageName}</h3>
      <p>Click outside or press ESC to close</p>
    </div>
  `;
  
  viewer.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeImageViewer = function() {
  const viewer = document.getElementById('image-viewer');
  viewer.classList.remove('active');
  document.body.style.overflow = 'auto';
};

// Helper functions
function findBookById(bookId) {
  for (const group of Object.values(booksData)) {
    const book = group.find(b => b.id === bookId);
    if (book) return book;
  }
  return null;
}

function getCollectionName(bookId) {
  const groupNum = parseInt(bookId.split('.')[0]);
  return groupsData[groupNum - 1]?.title || 'Unknown Collection';
}

function getAgeRange(bookId) {
  const groupNum = parseInt(bookId.split('.')[0]);
  return groupsData[groupNum - 1]?.ageRange || 'Unknown Age Range';
}

window.handleContactForm = function(event) {
  event.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  event.target.reset();
};

window.toggleMobileMenu = function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
};

// Initialize the application
async function initApp() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <header class="header">
      <nav class="nav">
        <a href="#" class="logo">MySmartKit</a>
        <ul class="nav-links">
          <li><a href="#groups">Collections</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    </header>

    <main class="main-content">
      ${renderHero()}
      ${renderVideoSection()}
      ${renderBlogSection()}
      ${renderGroupsSection()}
      ${renderAboutSection()}
      ${renderContactSection()}
    </main>

    ${renderFooter()}

    <!-- Modal -->
    <div id="modal" class="modal" onclick="closeModal()">
      <div id="modal-content" class="modal-content" onclick="event.stopPropagation()">
      </div>
    </div>

    <!-- Image Viewer -->
    <div id="image-viewer" class="image-viewer" onclick="closeImageViewer()">
      <div class="image-viewer-overlay"></div>
      <div class="image-viewer-content" onclick="event.stopPropagation()">
        <button class="image-viewer-close" onclick="closeImageViewer()">&times;</button>
        <div class="image-viewer-container">
        </div>
      </div>
    </div>
  `;

  // Load group descriptions with proper formatting
  for (const group of groupsData) {
    try {
      const description = await loadTextFile(group.description);
      const descElement = document.getElementById(`group-desc-${group.id}`);
      if (descElement) {
        descElement.innerHTML = formatTextContent(description);
      }
    } catch (error) {
      console.error(`Error loading description for group ${group.id}:`, error);
    }
  }

  // Add keyboard event listeners
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeImageViewer();
    }
  });

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.group-section, .blog-card, .stat-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// Start the application
document.addEventListener('DOMContentLoaded', initApp);