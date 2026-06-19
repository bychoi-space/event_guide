// LFmall Exhibition Wireframe: ROULET
// Rebuilt from scratch to resolve layout breaks and structural tag mismatches.

window.ExhibitionWireframes = window.ExhibitionWireframes || {};
window.ExhibitionWireframes["ROULET"] = {
  "moduleCode": "MD9",
  "name": "룰렛 (ROULET)",
  "wireframeHtml": `<div class="lfmall-roulette-wf">
    <!-- 1. PC Version Preview -->
    <div class="roulette-pc">
      <div class="title-sec">
        <h3 class="title-main">룰렛 이벤트!</h3>
        <p class="title-sub">하루 한 번 행운의 룰렛을 돌려<br>LFmall이 준비한 많은 혜택을 만나보세요!</p>
      </div>
      <div class="timer-sec">
        <div class="timer-box"><span class="timer-num">01</span><span class="timer-label">DAYS</span></div>
        <span class="timer-divider">:</span>
        <div class="timer-box"><span class="timer-num">17</span><span class="timer-label">HOURS</span></div>
        <span class="timer-divider">:</span>
        <div class="timer-box"><span class="timer-num">19</span><span class="timer-label">MINS</span></div>
        <span class="timer-divider">:</span>
        <div class="timer-box"><span class="timer-num">09</span><span class="timer-label">SECS</span></div>
      </div>
      <div class="roulette-container">
        <div class="chance-badge-container">
          <div class="chance-badge">룰렛 응모권<span>3</span>개</div>
        </div>
        <div class="roulette-wrapper">
          <div class="pin"></div>
          <button class="btn-spin-start" onclick="alert('행운의 룰렛 이벤트에 참여해주셔서 감사합니다!');">START</button>
          <div class="wheel-outer">
            <div class="wheel-lines">
              <div class="wheel-line"></div>
              <div class="wheel-line"></div>
              <div class="wheel-line"></div>
              <div class="wheel-line"></div>
              <div class="wheel-line"></div>
            </div>
          </div>
          <div class="sector-content-flat pos-0">PLUS COUPON<strong>5%</strong></div>
          <div class="sector-content-flat pos-1">PLUS COUPON<strong>7%</strong></div>
          <div class="sector-content-flat pos-2">COUPON<strong>15%</strong></div>
          <div class="sector-content-flat pos-3">COUPON<strong>13%</strong></div>
          <div class="sector-content-flat pos-4">COUPON<strong>11%</strong></div>
        </div>
      </div>
      <p class="desc-text">룰렛카드(Description) 서비스디자인실 요청에 따라<br>디스크립션 영역만 2줄처리</p>
      <div class="sns-share-sec">
        <a href="#" class="sns-btn kakao" onclick="alert('카카오톡으로 보내기 공유가 실행됩니다.'); return false;">💬 카카오톡으로 보내기</a>
        <a href="#" class="sns-btn url" onclick="alert('URL 복사하기 링크가 복사되었습니다.'); return false;">URL 복사하기</a>
      </div>
    </div>

    <!-- 2. Mobile Version Preview -->
    <div class="roulette-mo">
      <div class="title-sec">
        <h3 class="title-main">룰렛 이벤트!</h3>
        <p class="title-sub">하루 한 번 행운의 룰렛을 돌려<br>LFmall이 준비한 많은 혜택을 만나보세요!</p>
      </div>
      <div class="timer-sec">
        <div class="timer-box"><span class="timer-num">02</span></div>
        <span class="timer-divider">:</span>
        <div class="timer-box"><span class="timer-num">23</span></div>
        <span class="timer-divider">:</span>
        <div class="timer-box"><span class="timer-num">59</span></div>
        <span class="timer-divider">:</span>
        <div class="timer-box"><span class="timer-num">41</span></div>
      </div>
      <div class="roulette-container">
        <div class="chance-badge-container">
          <div class="chance-badge">룰렛 응모권<span>3</span>개</div>
        </div>
        <div class="roulette-wrapper">
          <div class="pin"></div>
          <button class="btn-spin-start" onclick="alert('행운의 룰렛 이벤트에 참여해주셔서 감사합니다!');">START</button>
          <div class="wheel-outer">
            <div class="wheel-lines">
              <div class="wheel-line"></div>
              <div class="wheel-line"></div>
              <div class="wheel-line"></div>
              <div class="wheel-line"></div>
              <div class="wheel-line"></div>
            </div>
          </div>
          <div class="sector-content-flat pos-0">PLUS COUPON<strong>5%</strong></div>
          <div class="sector-content-flat pos-1">PLUS COUPON<strong>7%</strong></div>
          <div class="sector-content-flat pos-2">COUPON<strong>15%</strong></div>
          <div class="sector-content-flat pos-3">COUPON<strong>13%</strong></div>
          <div class="sector-content-flat pos-4">COUPON<strong>11%</strong></div>
        </div>
      </div>
      <p class="desc-text">룰렛카드 (Description) 서비스디자인실 요청에 따라<br>디스크립션 영역만 2줄처리가 가능할까요?</p>
      <div class="sns-share-sec">
        <a href="#" class="sns-btn kakao" onclick="alert('카카오톡으로 보내기 공유가 실행됩니다.'); return false;">💬 카카오톡으로 보내기</a>
        <a href="#" class="sns-btn url" onclick="alert('URL 복사하기 링크가 복사되었습니다.'); return false;">URL 복사하기</a>
      </div>
    </div>
  </div>`
};
