// LFmall Exhibition Guide: P_BENEFIT
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["P_BENEFIT"] = {
  "cardKey": "P_BENEFIT",
  "name": "결제혜택",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardBenefitP.xfdl (어드민) / PayBenefit.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "기획전 상단에 아코디언 토글 형태의 접고 펼쳐지는 헤더와 서브타이틀, 텍스트 상세설명 및 이미지 배너 영역을 제공하며, 하단에는 어두운 테마 배경 속에서 실물 카드사 혜택(카드사 플레이트 이미지 자동 호출) 및 카카오페이 등 간편결제사 혜택 카드가 Swiper 슬라이드 캐러셀 형태로 롤링 전시되는 고기능 복합 프로모션 카드입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상단의 '결제 혜택' 헤더를 누르면 우측 화살표 표시가 ∧/∨ 형태로 반전되며 하단의 기획전 소개 및 수동 이미지 배너 영역(IMG AREA)이 부드럽게 슬라이딩 개폐됩니다. 그 바로 아래에는 어두운 다크그레이 배경 프레임이 깔리며, 신용카드사 실물 이미지(국민/현대/신한 등)가 세 장 나란히 '자동 호출' 형태로 노출되는 슬라이드와, 카카오페이 등 노란색 브랜드 바 및 '1만원 즉시할인' 텍스트 뱃지, 개별 유의사항 안내 문구가 나열되는 슬라이드가 Swiper 페이지네이션 도트와 함께 실시간 가로 롤링 캐러셀로 렌더링됩니다.",
  "backendSettings": [
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 상단 Padding 여부를 결정합니다. 기본값 Y."
    },
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 상단 여백(Margin) 노출 여부를 제어합니다."
    },
    {
      "field": "여백 하단외부",
      "id": "CARD_BTM_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 하단 여백(Margin) 노출 여부를 제어합니다."
    },
    {
      "field": "여백 하단내부",
      "id": "CARD_BTM_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 하단 여백(Padding) 노출 여부를 제어합니다."
    }
  ],
  "codeSnippet": "// PayBenefit.tsx - Front-end React 아코디언 토글 상태값 및 Swiper 다크 캐러셀 분기 구현\nexport const PayBenefit = ({ templateDetail }) => {\n  const [isOpen, setIsOpen] = useState(true);\n  return (\n    <div className={styles.payBenefitContainer}>\n      {/* 1. 아코디언 토글 헤더 */}\n      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>\n        <h2>결제 혜택</h2>\n        <span className={styles.arrow}>{isOpen ? '∧' : '∨'}</span>\n      </div>\n      \n      {/* 2. 본문 및 이미지 배너 영역 */}\n      <div className={`${styles.body} ${!isOpen ? styles.collapsed : ''}`}>\n        <h3>{templateDetail.subTitle}</h3>\n        <div dangerouslySetInnerHTML={{ __html: templateDetail.noticeText }} />\n        {templateDetail.pcImgPath && <img src={templateDetail.pcImgPath} alt=\"배너\" />}\n      </div>\n\n      {/* 3. 하단 다크 Swiper 캐러셀 영역 */}\n      <Swiper className={styles.darkCarousel} pagination={{ clickable: true }}>\n        <SwiperSlide className={styles.cardSlide}>\n          <h4>신용카드 결제 혜택</h4>\n          <div className={styles.autoImgRow}>{/* 카드사 실물 이미지 3장 자동 로드 */}</div>\n        </SwiperSlide>\n        <SwiperSlide className={styles.paySlide}>\n          <div className={styles.payBrandRow}>\n            <span className={styles.kakaoBadge}>kakaopay</span>\n            <span>1만원 즉시할인</span>\n          </div>\n        </SwiperSlide>\n      </Swiper>\n    </div>\n  );\n};",
  "warnings": "1. [아코디언 토글 붕괴 방어] 모바일 뷰포트에서 토글 개폐 시 CSS 높이 트랜지션(`max-height`) 효과가 버벅거리거나 끊기지 않도록, 내부 배너 이미지 크기를 반응형 비율로 정밀 래핑해야 레이아웃 손상이 일어나지 않습니다.\n2. [용량 규격 주의] 본문 내 배너 이미지 등록 시 200KB 용량 제한 검증 규칙이 적용되어, 초과하는 경우 넥사크로 UI 단에서 업로드가 차단됩니다.\n3. [상세설명 자수 제약] 아코디언 내 안내문구(`NOTICE_TEXT`)는 HTML 태그를 포함하여 최대 4000byte를 초과하여 저장 시 강제 잘림 현상이 발생합니다.",
  "imageGuidelines": {
    "pcSize": "1240px × (세로 높이 제한 없음)",
    "moSize": "750px × (세로 높이 제한 없음) *가독성을 위한 패션 배너 비율 권장",
    "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "본문 이미지(PC/MO) 등록 시 파일별 200KB 용량 초과 업로드 시 넥사크로 스크립트에 의해 자동 차단 처리되며, 이미지 누락 시 기획전 발행에 경고가 수반됩니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 1개",
    "tabMax": "최대 12개 (하단 다크 슬라이드 혜택 카드 최대 구성 한도)",
    "prodMin": "최소 1자 이상 기입",
    "prodMax": "최대 4000byte (HTML 스타일 태그 포함, 본문 안내문구 필드)",
    "adminValidation": "결제혜택 카드는 아코디언 토글 구조에 들어갈 텍스트와 이미지 배너 데이터, 그리고 하단 다크그레이 영역에 적용될 최대 12개의 제휴 카드/간편결제 데이터셋(`dsCardDetail`)을 동시에 저장 관리합니다. 어드민(NBOS) 저장 시 시작/종료 전시 일시가 선후 관계를 위반하거나, 하단 데이터셋의 카드사 공통코드 매핑이 잘못된 경우 저장 에러와 함께 기획전 적재가 반려됩니다."
  }
};
