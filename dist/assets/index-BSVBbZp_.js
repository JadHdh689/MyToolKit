(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const c={group1:[{id:"1.1",title:"Just. Be. Calm",cover:"images/Group 1/Book1.1/Cover1.1.png",description:"About1.1.txt",assets:[{name:"Story",path:"images/Group 1/Book1.1/Story1.1.png"},{name:"Guide",path:"images/Group 1/Book1.1/Guide1.1.png"},{name:"Activity",path:"images/Group 1/Book1.1/Activity1.1.png"},{name:"Stickers",path:"images/Group 1/Book1.1/Stickers1.1.png"},{name:"Certificate",path:"images/Group 1/Book1.1/Certificate1.1.png"}]},{id:"1.2",title:"To Obey My Parents",cover:"images/Group 1/Book1.2/Cover1.2.png",description:"About1.2.txt",assets:[{name:"Story",path:"images/Group 1/Book1.2/Story1.2.jpg"},{name:"Guide Page 1",path:"images/Group 1/Book1.2/Guide1.2-p1.jpg"},{name:"Guide Page 2",path:"images/Group 1/Book1.2/Guide1.2-p2.jpg"},{name:"Activity",path:"images/Group 1/Book1.2/Activity1.2.jpg"},{name:"Stickers",path:"images/Group 1/Book1.2/Stickers1.2.jpg"},{name:"Certificate",path:"images/Group 1/Book1.2/Certificate1.2.jpg"}]},{id:"1.3",title:"To Speak Honestly",cover:"images/Group 1/Book1.3/Cover1.3.png",description:"About1.3.txt",assets:[{name:"Story",path:"images/Group 1/Book1.3/Story1.3.png"},{name:"Guide",path:"images/Group 1/Book1.3/Guide1.3.png"},{name:"Activity",path:"images/Group 1/Book1.3/Activity1.3.png"},{name:"Stickers",path:"images/Group 1/Book1.3/Stickers1.3.png"}]},{id:"1.4",title:"To Be Kind",cover:"images/Group 1/Book1.4/Cover1.4.png",description:"About1.4.txt",assets:[{name:"Activity",path:"images/Group 1/Book1.4/Activity1.4.png"},{name:"Stickers",path:"images/Group 1/Book1.4/Stickers1.4.png"},{name:"Certificate",path:"images/Group 1/Book1.4/Certificate1.4.png"}]},{id:"1.5",title:"To Listen and Focus",cover:"images/Group 1/Book1.5/Cover1.5.jpg",description:"About1.5.txt",assets:[{name:"Story",path:"images/Group 1/Book1.5/story1.5.jpg"},{name:"Guide Page 1",path:"images/Group 1/Book1.5/guide1.5-p1.jpg"},{name:"Guide Page 2",path:"images/Group 1/Book1.5/guide1.5-p2.jpg"},{name:"Activity",path:"images/Group 1/Book1.5/activity1.5.jpg"},{name:"Stickers",path:"images/Group 1/Book1.5/Stickers1.5.jpg"},{name:"Certificate",path:"images/Group 1/Book1.5/Certificate1.5.jpg"}]},{id:"1.6",title:"To Tidy Up My Things",cover:"images/Group 1/Book1.6/cover1.6.jpg",description:"About1.6.txt",assets:[{name:"Story",path:"images/Group 1/Book1.6/Story1.6.jpg"},{name:"Guide",path:"images/Group 1/Book1.6/Guide1.6.jpg"},{name:"Activity",path:"images/Group 1/Book1.6/Activity1.6.jpg"},{name:"Stickers",path:"images/Group 1/Book1.6/Stickers1.6.jpg"},{name:"Certificate",path:"images/Group 1/Book1.6/Certificate1.6.jpg"}]}],group2:[{id:"2.1",title:"To Focus and Be Calm",cover:"images/Group 2/Book2.1/Cover2.1.jpg",description:"About2.1.txt",assets:[{name:"Story",path:"images/Group 2/Book2.1/Story2.1.jpg"},{name:"Guide",path:"images/Group 2/Book2.1/Guide2.1.jpg"},{name:"Activity",path:"images/Group 2/Book2.1/Activity2.1.jpg"},{name:"Stickers",path:"images/Group 2/Book2.1/Stickers2.1.jpg"},{name:"Certificate",path:"images/Group 2/Book2.1/Certificate2.1.jpg"}]},{id:"2.2",title:"To Be a Leader",cover:"images/Group 2/Book2.2/Cover2.2.jpg",description:"About2.2.txt",assets:[{name:"Story",path:"images/Group 2/Book2.2/Story2.2.jpg"},{name:"Guide",path:"images/Group 2/Book2.2/Guide2.2.jpg"},{name:"Activity",path:"images/Group 2/Book2.2/Activity2.2.jpg"},{name:"Stickers",path:"images/Group 2/Book2.2/Stickers2.2.jpg"},{name:"Certificate",path:"images/Group 2/Book2.2/Certificate2.2.jpg"}]},{id:"2.3",title:"To Protect My Space",cover:"images/Group 2/Book2.3/cover1.3.jpg",description:"About2.3.txt",assets:[{name:"Story",path:"images/Group 2/Book2.3/story1.3.jpg"},{name:"Guide Page 1",path:"images/Group 2/Book2.3/guide1.3-p1.jpg"},{name:"Guide Page 2",path:"images/Group 2/Book2.3/guide1.3-p2.jpg"},{name:"Activity",path:"images/Group 2/Book2.3/activity1.3.jpg"},{name:"Stickers",path:"images/Group 2/Book2.3/stickers1.3.jpg"},{name:"Certificate",path:"images/Group 2/Book2.3/certificate1.3.jpg"}]},{id:"2.4",title:"To Manage My Time",cover:"images/Group 2/Book2.4/Cover2.4.png",description:"About2.4.txt",assets:[{name:"Activity",path:"images/Group 2/Book2.4/Activity2.4.png"},{name:"Stickers",path:"images/Group 2/Book2.4/Stickers2.4.png"},{name:"Certificate",path:"images/Group 2/Book2.4/Certificate2.4.png"}]},{id:"2.5",title:"To Make My Wish Come True",cover:"images/Group 2/Book2.5/Cover2.5.png",description:"About2.5.txt",assets:[{name:"Activity",path:"images/Group 2/Book2.5/Activity2.5.png"},{name:"Guide",path:"images/Group 2/Book2.5/Guide2.5.png"}]}],group3:[{id:"3.1",title:"To Know Myself",cover:"images/Group 3/Book3.1/Cover3.1.png",description:"About3.1.txt",assets:[{name:"Activity",path:"images/Group 3/Book3.1/Activity3.1.png"},{name:"Guide",path:"images/Group 3/Book3.1/Guide3.1.png"}]},{id:"3.2",title:"Step by Step... I Will Succeed!",cover:"images/Group 3/Book3.2/Cover3.2.png",description:"About3.2.txt",assets:[{name:"Activity",path:"images/Group 3/Book3.2/Activity3.2.png"},{name:"Guide",path:"images/Group 3/Book3.2/Guide3.2.png"},{name:"Certificate",path:"images/Group 3/Book3.2/Certificate3.2.png"}]},{id:"3.3",title:"Unlock My Mind",cover:"images/Group 3/Book3.3/cover3.3.jpg",description:"About3.3.txt",assets:[{name:"Story",path:"images/Group 3/Book3.3/story3.3.jpg"},{name:"Guide Page 1",path:"images/Group 3/Book3.3/guide3.3-p1.jpg"},{name:"Guide Page 2",path:"images/Group 3/Book3.3/guide3.3-p2.jpg"},{name:"Activity",path:"images/Group 3/Book3.3/activity3.3.jpg"},{name:"Stickers",path:"images/Group 3/Book3.3/stickers3.3.jpg"},{name:"Certificate",path:"images/Group 3/Book3.3/certificate3.3.jpg"}]},{id:"3.4",title:"To Make Sense of My Feelings",cover:"images/Group 3/Book3.4/cover3.4.jpg",description:"About3.4.txt",assets:[{name:"Story",path:"images/Group 3/Book3.4/story3.4.jpg"},{name:"Guide",path:"images/Group 3/Book3.4/guide3.4.jpg"},{name:"Activity",path:"images/Group 3/Book3.4/activity3.4.jpg"},{name:"Stickers",path:"images/Group 3/Book3.4/stickers3.4.jpg"},{name:"Certificate",path:"images/Group 3/Book3.4/certificate3.4.jpg"}]},{id:"3.5",title:"To Face My Fears",cover:"images/Group 3/Book3.5/cover3.5.jpg",description:"About3.5.txt",assets:[{name:"Story",path:"images/Group 3/Book3.5/Story3.5.jpg"},{name:"Guide Page 1",path:"images/Group 3/Book3.5/guide3.5-p1.jpg"},{name:"Guide Page 2",path:"images/Group 3/Book3.5/guide3.5-p2.jpg"},{name:"Activity",path:"images/Group 3/Book3.5/activity3.5.jpg"},{name:"Stickers",path:"images/Group 3/Book3.5/stickers3.5.jpg"},{name:"Certificate",path:"images/Group 3/Book3.5/certificate3.5.jpg"}]}],group4:[{id:"4.1",title:"To Grow with Confidence",cover:"images/Group 4/Book4.1/Cover4.1.png",description:"About4.1.txt",assets:[{name:"Activity",path:"images/Group 4/Book4.1/Activity4.1.png"},{name:"Guide",path:"images/Group 4/Book4.1/Guide4.1.png"},{name:"Stickers",path:"images/Group 4/Book4.1/Stickers4.1.png"},{name:"Certificate",path:"images/Group 4/Book4.1/Certificate4.1.png"}]}],group5:[{id:"5.1",title:"Positive CBT Workbook",cover:"images/Group 5/Book5.1/Cover5.1.png",description:"About5.1.txt",assets:[{name:"Activity",path:"images/Group 5/Book5.1/Activity5.1.jpg"},{name:"Guide",path:"images/Group 5/Book5.1/Guide5.1.jpg"}]}]},l=[{id:1,title:"Big Feelings in Small Bodies: How to Help Children Understand and Express Their Emotions",ageRange:"Ages 3–8",image:"Blogs/Blog1_image.jpg",content:"Blog1.txt"},{id:2,title:"More Than a Mood Swing: Understanding Teen Behavior Through ABA and Emotional Intelligence",ageRange:"Ages 9–16",image:"Blogs/Blog2_image.jpg",content:"Blog2.txt"},{id:3,title:"Healing, Growing, Thriving: How CBT and Positive Psychology Empower Adults",ageRange:"Ages 18+",image:"Blogs/Blog3_image.jpg",content:"Blog3.txt"}],d=[{id:1,title:"Tiny Tools for Big Feelings",ageRange:"Ages 3-5",image:"images/Group 1/Group_1.jpg",description:"About_Group1.txt",books:c.group1},{id:2,title:"Tiny Tools for Big Feelings",ageRange:"Ages 6-8",image:"images/Group 2/Group 2.jpg",description:"About_Group2.txt",books:c.group2},{id:3,title:"Tiny Tools for Big Feelings",ageRange:"Ages 9-12",image:"images/Group 3/Group 3.jpg",description:"About_Group3.txt",books:c.group3},{id:4,title:"Tiny Tools for Big Feelings",ageRange:"Ages 13-17",image:"images/Group 4/Group 4.jpg",description:"About_Group4.txt",books:c.group4},{id:5,title:"Positive CBT Collection",ageRange:"Ages 18+",image:"images/Group 5/Group 5.jpg",description:"About_Group5.txt",books:c.group5}];function n(o,e="",t=""){const i=document.createElement("img");return i.src=o,i.alt=e,t&&(i.className=t),i.onerror=function(){this.style.opacity="0.3",console.warn(`Failed to load image: ${o}`)},i}async function g(o){try{const e=await fetch(`Text Files/${o}`);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.text()}catch(e){return console.error(`Error loading ${o}:`,e),"Content not available."}}async function m(o){try{const e=await fetch(`Blogs/${o}`);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.text()}catch(e){return console.error(`Error loading ${o}:`,e),"Content not available."}}function u(o){return o.split(`
`).map(e=>{const t=e.trim();return t===""?"<br>":t.startsWith("•")||t.startsWith("	•")?`<div style="margin-left: 20px; margin-bottom: 5px;">${t}</div>`:`<div style="margin-bottom: 10px;">${t}</div>`}).join("")}function v(){return`
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1></h1>
        <p></p>
        
      </div>
    </section>
  `}function h(){return`
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
  `}function k(){return`
    <section class="blog-section">
      <div class="section-title">Latest Insights</div>
      <div class="blog-grid">
        ${l.map(e=>`
    <div class="blog-card" onclick="openBlogModal(${e.id})">
      <div class="blog-image">
        ${n(e.image,e.title).outerHTML}
        <div class="blog-age-badge">${e.ageRange}</div>
      </div>
      <div class="blog-card-content">
        <h3>${e.title}</h3>
        <p>Discover evidence-based strategies and practical tools for emotional development and positive psychology.</p>
        <button class="read-more-btn">Read More</button>
      </div>
    </div>
  `).join("")}
      </div>
    </section>
  `}function f(){return`
    <section class="groups-section" id="groups">
      <div class="section-title">Our Book Collections</div>
      <div class="groups-container">
        ${d.map(e=>{const t=e.books.map(i=>`
      <div class="book-card" onclick="openBookModal('${i.id}')">
        <div class="book-cover">
          ${n(i.cover,i.title).outerHTML}
          <div class="book-overlay">
            <i class="fas fa-eye"></i>
            <span>View Details</span>
          </div>
        </div>
        <div class="book-info">
          <div class="book-title">${i.title}</div>
          <div class="book-id">Book ${i.id}</div>
        </div>
      </div>
    `).join("");return`
      <div class="group-section">
        <div class="group-header">
          <div class="group-image">
            ${n(e.image,e.title).outerHTML}
          </div>
          <div class="group-info">
            <h2 class="group-title">${e.title}</h2>
            <div class="group-age">${e.ageRange}</div>
            <div class="group-description" id="group-desc-${e.id}">Loading description...</div>
            <div class="group-duration">📚 ${e.books.length} Books Available</div>
          </div>
        </div>
        <div class="books-grid">
          ${t}
        </div>
      </div>
    `}).join("")}
      </div>
    </section>
  `}function B(){return`
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
  `}function y(){return`
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
              <p>Cornish El Mazraa Street<br>Beirut, Lebanon</p>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <h3>Send us a Message</h3>
          <form onsubmit="handleContactForm(event)">
            <div class="form-group">
              <input type="text" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `}function G(){return`
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
  `}window.openBookModal=function(o){const e=b(o);if(!e)return;const t=document.getElementById("modal"),i=document.getElementById("modal-content"),a=e.assets.map(s=>`
    <div class="asset-item" onclick="openImageViewer('${s.path}', '${s.name}')">
      ${n(s.path,s.name).outerHTML}
      <p>${s.name}</p>
    </div>
  `).join("");i.innerHTML=`
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <div class="modal-book-header">
      <div class="modal-book-cover">
        ${n(e.cover,e.title).outerHTML}
      </div>
      <div class="modal-book-info">
        <h2>${e.title}</h2>
        <div class="modal-book-id"><strong>Book ID:</strong> ${e.id}</div>
        <div class="modal-collection"><strong>Collection:</strong> ${A(e.id)}</div>
        <div class="modal-age-range"><strong>Age Range:</strong> ${w(e.id)}</div>
      </div>
    </div>
    <div class="modal-description">
      <h3>About This Book</h3>
      <div id="book-description-${e.id}">Loading description...</div>
    </div>
    <div class="modal-assets">
      <h3>Book Assets</h3>
      <div class="assets-grid">
        ${a}
      </div>
    </div>
  `,t.classList.add("active"),document.body.style.overflow="hidden",g(e.description).then(s=>{const r=document.getElementById(`book-description-${e.id}`);r&&(r.innerHTML=u(s))})};window.openBlogModal=function(o){const e=l.find(a=>a.id===o);if(!e)return;const t=document.getElementById("modal"),i=document.getElementById("modal-content");i.innerHTML=`
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <div class="blog-modal-header">
      ${n(e.image,e.title,"blog-modal-image").outerHTML}
      <div class="blog-modal-info">
        <h2>${e.title}</h2>
        <p>${e.ageRange}</p>
      </div>
    </div>
    <div class="blog-modal-content">
      <div id="blog-content-${e.id}">Loading content...</div>
    </div>
  `,t.classList.add("active"),document.body.style.overflow="hidden",m(e.content).then(a=>{const s=document.getElementById(`blog-content-${e.id}`);if(s){const r=a.split(`

`).filter(p=>p.trim());s.innerHTML=r.map(p=>`<p>${p.trim()}</p>`).join("")}})};window.closeModal=function(){document.getElementById("modal").classList.remove("active"),document.body.style.overflow="auto"};window.openImageViewer=function(o,e){const t=document.getElementById("image-viewer"),i=document.querySelector(".image-viewer-container");i.innerHTML=`
    ${n(o,e).outerHTML}
    <div class="image-viewer-info">
      <h3>${e}</h3>
      <p>Click outside or press ESC to close</p>
    </div>
  `,t.classList.add("active"),document.body.style.overflow="hidden"};window.closeImageViewer=function(){document.getElementById("image-viewer").classList.remove("active"),document.body.style.overflow="auto"};function b(o){for(const e of Object.values(c)){const t=e.find(i=>i.id===o);if(t)return t}return null}function A(o){var t;const e=parseInt(o.split(".")[0]);return((t=d[e-1])==null?void 0:t.title)||"Unknown Collection"}function w(o){var t;const e=parseInt(o.split(".")[0]);return((t=d[e-1])==null?void 0:t.ageRange)||"Unknown Age Range"}window.handleContactForm=function(o){o.preventDefault(),alert("Thank you for your message! We will get back to you soon."),o.target.reset()};window.toggleMobileMenu=function(){document.querySelector(".nav-links").classList.toggle("active")};async function j(){const o=document.getElementById("app");o.innerHTML=`
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
      ${v()}
      ${h()}
      ${k()}
      ${f()}
      ${B()}
      ${y()}
    </main>

    ${G()}

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
  `;for(const i of d)try{const a=await g(i.description),s=document.getElementById(`group-desc-${i.id}`);s&&(s.innerHTML=u(a))}catch(a){console.error(`Error loading description for group ${i.id}:`,a)}document.addEventListener("keydown",i=>{i.key==="Escape"&&(closeModal(),closeImageViewer())});const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},e);document.querySelectorAll(".group-section, .blog-card, .stat-item").forEach(i=>{i.classList.add("fade-in"),t.observe(i)})}document.addEventListener("DOMContentLoaded",j);
