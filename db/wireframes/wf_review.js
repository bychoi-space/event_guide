// LFmall Exhibition Wireframe: REVIEW
// Auto-generated from db_wireframes.js split.
// Do NOT edit the header. Edit wireframeHtml only.

window.ExhibitionWireframes = window.ExhibitionWireframes || {};
window.ExhibitionWireframes["REVIEW"] = {
  "moduleCode": "MD7",
  "name": "상품리뷰 (REVIEW)",
  "wireframeHtml": `<div class="lfmall-review-wf">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
    
    .lfmall-review-wf {
      background-color: #ffffff;
      padding: 40px 16px;
      font-family: 'Outfit', 'Noto Sans KR', sans-serif;
      color: #000000;
      width: 100%;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }
    .lfmall-review-wf * {
      box-sizing: border-box;
    }
    
    /* Header Area */
    .lfmall-review-wf .review-header {
      text-align: center;
      margin-bottom: 32px;
    }
    .lfmall-review-wf .review-header h2 {
      font-size: 28px;
      font-weight: 700;
      margin: 0 0 8px 0;
      letter-spacing: -0.02em;
    }
    .lfmall-review-wf .review-header p {
      font-size: 13px;
      color: #666666;
      margin: 0;
      font-weight: 400;
    }
    
    /* Grid Container */
    .lfmall-review-wf .reviews-container {
      display: flex;
      gap: 16px;
      overflow-x: auto;
      scroll-behavior: smooth;
      scrollbar-width: none; /* Firefox */
      padding-bottom: 24px;
    }
    .lfmall-review-wf .reviews-container::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
    
    /* Card Styles */
    .lfmall-review-wf .review-card {
      flex: 0 0 280px;
      border: 1px solid #000000;
      background: #ffffff;
      display: flex;
      flex-direction: column;
    }
    
    .lfmall-review-wf .card-brand-header {
      font-size: 12px;
      font-weight: 700;
      padding: 12px 14px;
      border-bottom: 1.5px solid #000000;
      letter-spacing: 0.05em;
    }
    
    .lfmall-review-wf .card-img-wrap {
      width: 100%;
      aspect-ratio: 1 / 1.15;
      background-color: #f2f2f2;
      overflow: hidden;
      border-bottom: 1px solid #000000;
    }
    
    .lfmall-review-wf .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .lfmall-review-wf .review-card:hover .card-img {
      transform: scale(1.03);
    }
    
    /* Action Bar */
    .lfmall-review-wf .card-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px 8px 14px;
    }
    
    .lfmall-review-wf .action-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .lfmall-review-wf .action-btn {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000000;
      transition: transform 0.15s ease;
    }
    .lfmall-review-wf .action-btn:hover {
      transform: scale(1.1);
    }
    
    /* Text Info */
    .lfmall-review-wf .card-info {
      padding: 0 14px 16px 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .lfmall-review-wf .card-title {
      font-size: 14px;
      font-weight: 700;
      margin: 0;
      letter-spacing: -0.01em;
      text-transform: uppercase;
    }
    
    .lfmall-review-wf .card-text {
      font-size: 12px;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .lfmall-review-wf .card-rating {
      font-size: 14px;
      letter-spacing: 2px;
      color: #000000;
      display: flex;
      align-items: center;
    }
    .lfmall-review-wf .card-rating .star-gray {
      color: #cccccc;
    }
    
    .lfmall-review-wf .card-meta {
      font-size: 11px;
      color: #888888;
      margin: 0;
      font-weight: 400;
    }
    
    /* Scroll Indicator */
    .lfmall-review-wf .scroll-indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
    }
    .lfmall-review-wf .scroll-indicator-bar {
      width: 40px;
      height: 1.5px;
      background-color: #000000;
    }
    .lfmall-review-wf .scroll-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #cccccc;
    }
    .lfmall-review-wf .scroll-dot.active {
      background-color: #000000;
    }
    
    /* Layout Adaptations */
    /* Mobile specific style override inside phone mockup */
    .phone-mockup .lfmall-review-wf {
      padding: 24px 12px;
    }
    .phone-mockup .lfmall-review-wf .reviews-container {
      flex-wrap: nowrap;
      gap: 12px;
    }
    .phone-mockup .lfmall-review-wf .review-card {
      flex: 0 0 250px;
    }
    .phone-mockup .lfmall-review-wf .card-img-wrap {
      aspect-ratio: 1 / 1.15;
    }
    
    /* Desktop specific style override inside browser content */
    .browser-content .lfmall-review-wf {
      padding: 32px 16px;
    }
    .browser-content .lfmall-review-wf .reviews-container {
      flex-wrap: nowrap;
      gap: 12px;
      justify-content: flex-start;
    }
    .browser-content .lfmall-review-wf .review-card {
      flex: 0 0 calc((100% - 24px) / 3);
      min-width: 0;
    }
    
  </style>
  
  <!-- Title section -->
  <div class="review-header">
    <h2>Review(HEADLINE)</h2>
    <p>스태프들의 생생한 실착 후기로 만나는 신상</p>
  </div>
  
  <!-- Review Cards -->
  <div class="reviews-container">
    
    <!-- Card 1 -->
    <div class="review-card">
      <div class="card-brand-header">BRAND NAME</div>
      <div class="card-img-wrap">
        <img class="card-img" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80" alt="Fashion wear" />
      </div>
      <div class="card-actions">
        <div class="action-left">
          <!-- Heart filled -->
          <button class="action-btn" aria-label="Like">
            <svg width="20" height="18" viewBox="0 0 24 22" fill="#ff0000" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <!-- Comment outline -->
          <button class="action-btn" aria-label="Comment">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </button>
          <!-- Share paper plane -->
          <button class="action-btn" aria-label="Share">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <!-- Bookmark outline -->
        <button class="action-btn" aria-label="Save">
          <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
      <div class="card-info">
        <h3 class="card-title">REVIEW TITLE</h3>
        <p class="card-text">TEXT BOX 가나다라마바사아자차카타파하 TEXT BOX 가나다라마바사아자차카타파하TEXT BOX 가나다라마바사아자차카타파하TEXT BOX 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하...</p>
        <div class="card-rating">
          ★<span>★</span><span>★</span><span>★</span><span class="star-gray">★</span>
        </div>
        <p class="card-meta">id**** &middot; 175cm &middot; 55kg</p>
      </div>
    </div>
    
    <!-- Card 2 -->
    <div class="review-card">
      <div class="card-brand-header">BRAND NAME</div>
      <div class="card-img-wrap">
        <img class="card-img" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80" alt="Shopping outfit" />
      </div>
      <div class="card-actions">
        <div class="action-left">
          <!-- Heart filled -->
          <button class="action-btn" aria-label="Like">
            <svg width="20" height="18" viewBox="0 0 24 22" fill="#ff0000" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <!-- Comment outline -->
          <button class="action-btn" aria-label="Comment">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </button>
          <!-- Share paper plane -->
          <button class="action-btn" aria-label="Share">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <!-- Bookmark outline -->
        <button class="action-btn" aria-label="Save">
          <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
      <div class="card-info">
        <h3 class="card-title">REVIEW TITLE</h3>
        <p class="card-text">TEXT BOX 가나다라마바사아자차카타파하 TEXT BOX 가나다라마바사아자차카타파하TEXT BOX 가나다라마바사아자차카타파하TEXT BOX 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하...</p>
        <div class="card-rating">
          ★<span>★</span><span>★</span><span>★</span><span class="star-gray">★</span>
        </div>
        <p class="card-meta">id**** &middot; 175cm &middot; 55kg</p>
      </div>
    </div>
    
    <!-- Card 3 -->
    <div class="review-card">
      <div class="card-brand-header">BRAND NAME</div>
      <div class="card-img-wrap">
        <img class="card-img" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80" alt="Stylized dress" />
      </div>
      <div class="card-actions">
        <div class="action-left">
          <!-- Heart filled -->
          <button class="action-btn" aria-label="Like">
            <svg width="20" height="18" viewBox="0 0 24 22" fill="#ff0000" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <!-- Comment outline -->
          <button class="action-btn" aria-label="Comment">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </button>
          <!-- Share paper plane -->
          <button class="action-btn" aria-label="Share">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <!-- Bookmark outline -->
        <button class="action-btn" aria-label="Save">
          <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
      <div class="card-info">
        <h3 class="card-title">REVIEW TITLE</h3>
        <p class="card-text">TEXT BOX 가나다라마바사아자차카타파하 TEXT BOX 가나다라마바사아자차카타파하TEXT BOX 가나다라마바사아자차카타파하TEXT BOX 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하...</p>
        <div class="card-rating">
          ★<span>★</span><span>★</span><span>★</span><span class="star-gray">★</span>
        </div>
        <p class="card-meta">id**** &middot; 175cm &middot; 55kg</p>
      </div>
    </div>
    
  </div>
  
  <!-- Slider Indicators -->
  <div class="scroll-indicator">
    <div class="scroll-indicator-bar"></div>
    <div class="scroll-dot active"></div>
    <div class="scroll-dot"></div>
    <div class="scroll-dot"></div>
    <div class="scroll-indicator-bar"></div>
  </div>
  
</div>`
};
