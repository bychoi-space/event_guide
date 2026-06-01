// LFmall NEW Exhibition Cards Listing Modular Database (cards_list.js)
// Separates UI listing configurations cleanly from rendering engines.

window.ExhibitionCardsList = [
  {
    "cardKey": "TOP_BANNER",
    "category": "BANNER",
    "name": "탑배너",
    "desc": "기획전 최상단에 노출되는 메인 비주얼 배너입니다.",
    "sourceFile": "frmPlanCardTopBanner.xfdl",
    "iconFile": "Topbanner.png"
  },
  {
    "cardKey": "BANNER",
    "category": "BANNER",
    "name": "배너",
    "desc": "기획전 본문 내에 구성하는 일반 이미지 및 링크형 배너입니다.",
    "sourceFile": "frmPlanCardBanner.xfdl",
    "iconFile": "Banner.png"
  },
  {
    "cardKey": "ATTENTION",
    "category": "NAV",
    "name": "유의사항",
    "desc": "기획전 하단 등에 배치되는 참여 및 구매 관련 텍스트 유의사항 영역입니다.",
    "sourceFile": "frmPlanCardNotice.xfdl",
    "iconFile": "Notice.png"
  },
  {
    "cardKey": "COUNT",
    "category": "NAV",
    "name": "카운트",
    "desc": "실시간 타임아웃 타이머를 보여주며 긴박감을 제공하는 카운트다운 블록입니다.",
    "sourceFile": "frmPlanCardCountTime.xfdl",
    "iconFile": "CountTime.png"
  },
  {
    "cardKey": "P_BENEFIT",
    "category": "PROMOTION",
    "name": "결제혜택",
    "desc": "카드사 제휴 할인이나 페이백 혜택 정보를 강조하여 표기합니다.",
    "sourceFile": "frmPlanCardBenefitP.xfdl",
    "iconFile": "BenefitP.png"
  },
  {
    "cardKey": "B_BENEFIT",
    "category": "PROMOTION",
    "name": "구매혜택",
    "desc": "구매 금액대별 증정 마일리지나 사은품 혜택을 명시하는 카드입니다.",
    "sourceFile": "frmPlanCardBenefitB.xfdl",
    "iconFile": "BenefitB.png"
  },
  {
    "cardKey": "NAVI",
    "category": "NAV",
    "name": "네비게이션",
    "desc": "기획전 내부 스크롤 앵커 형태로 빠른 섹션 이동을 돕는 메뉴바입니다.",
    "sourceFile": "frmPlanCardNavigation.xfdl",
    "iconFile": "Navi.png"
  },
  {
    "cardKey": "SEARCH",
    "category": "NAV",
    "name": "검색창",
    "desc": "기획전용 전용 키워드 조회를 직접 제공하는 본문 내 검색 인풋 영역입니다.",
    "sourceFile": "frmPlanCardSearch.xfdl",
    "iconFile": "Search.png"
  },
  {
    "cardKey": "BADGE",
    "category": "PROMOTION",
    "name": "행사뱃지",
    "desc": "기획전 고유 행사 아이콘이나 특별 혜택 뱃지들을 전시하는 컴포넌트입니다.",
    "sourceFile": "frmPlanCardBadge.xfdl",
    "iconFile": "Badge.png"
  },
  {
    "cardKey": "TILE_BANNER",
    "category": "BANNER",
    "name": "타일배너",
    "desc": "바둑판 형태로 유연하게 배치하여 테마들을 소구하는 숏 배너 그리드입니다.",
    "sourceFile": "frmPlanCardTileBanner.xfdl",
    "iconFile": "TileBanner.png"
  },
  {
    "cardKey": "ATTENDANCE",
    "category": "PROMOTION",
    "name": "출석체크",
    "desc": "기획전 내부에서 일자별 참여를 유도하는 마케팅 특화용 출석 이벤트 블록입니다.",
    "sourceFile": "frmPlanCardAttendance.xfdl",
    "iconFile": "Attendance.png"
  },
  {
    "cardKey": "H_DEAL",
    "category": "PROD",
    "name": "핫딜",
    "desc": "강력한 단독 혜택이 즉시 적용되어 노출되는 핫딜 전용 스페셜 구좌입니다.",
    "sourceFile": "frmPlanCardHotDeal.xfdl",
    "iconFile": "HotDeal.png"
  },
  {
    "cardKey": "T_DEAL",
    "category": "PROD",
    "name": "타임특가",
    "desc": "한정된 시간 프레임 속에서 특화 할인가로 상품을 노출하는 영역입니다.",
    "sourceFile": "frmPlanCardTimeDeal.xfdl",
    "iconFile": "TimeDeal.png"
  },
  {
    "cardKey": "REVIEW",
    "category": "PROD",
    "name": "상품리뷰",
    "desc": "고객 리얼 구매 후기 및 평점을 시각적으로 예쁘게 롤링 노출해주는 영역입니다.",
    "sourceFile": "frmPlanCardReview.xfdl",
    "iconFile": "Review.png"
  },
  {
    "cardKey": "ROULET",
    "category": "PROMOTION",
    "name": "룰렛",
    "desc": "직관적인 당첨형 룰렛 게임 그래픽을 제공하는 즉석 당첨 프로모션용 카드입니다.",
    "sourceFile": "frmPlanCardRoulet.xfdl",
    "iconFile": "Rullet.png"
  },
  {
    "cardKey": "TAB_CONTAINER",
    "category": "NAV",
    "name": "탭 컨테이너",
    "desc": "구조적인 다단 Depth(1단/2단/Leaf) 구성방식을 지원하는 복합 탭 내비게이션 영역입니다.",
    "sourceFile": "frmPlanTempTabContainer.xfdl",
    "iconFile": "TabContanner.png"
  },
  {
    "cardKey": "G_PURCHASE",
    "category": "PROD",
    "name": "공동구매",
    "desc": "모집 인원이 달성될수록 할인율이 더 커지는 딜 위젯입니다.",
    "sourceFile": "frmPlanCardGroupPurchase.xfdl",
    "iconFile": "GroupPurchase.png"
  },
  {
    "cardKey": "M_BENEFIT",
    "category": "PROMOTION",
    "name": "마케팅혜택",
    "desc": "앱 수신 동의나 소셜 가입 촉진 등 마케팅 유도 전용 혜택 영역입니다.",
    "sourceFile": "frmPlanCardBenefitM.xfdl",
    "iconFile": "BenefitM.png"
  },
  {
    "cardKey": "PAYBACK",
    "category": "PROMOTION",
    "name": "페이백",
    "desc": "구매 완료 시 결제 금액의 일정 비율을 적립금으로 페이백해주는 특화 혜택입니다.",
    "sourceFile": "frmPlanCardPayBack.xfdl",
    "iconFile": "PayBack.png"
  },
  {
    "cardKey": "ENTCODE",
    "category": "NAV",
    "name": "입장코드",
    "desc": "프라이빗 기획전 진입을 위해 전용 입장 암호코드를 넣어야 하는 차단 영역입니다.",
    "sourceFile": "frmPlanCardAccessCode.xfdl",
    "iconFile": "AccessCode.png"
  },
  {
    "cardKey": "APPLY",
    "category": "PROMOTION",
    "name": "응모하기",
    "desc": "럭키 드로우나 사은 행사 등에 실시간 원클릭으로 응모 및 접수하는 버튼 영역입니다.",
    "sourceFile": "frmPlanCardEnter.xfdl",
    "iconFile": "Enter.png"
  },
  {
    "cardKey": "EMP_PROD",
    "category": "PROD",
    "name": "강조상품",
    "desc": "일반 리스트 중에서 메인으로 가장 많이 소구할 단독 강조형 딜 레이아웃입니다.",
    "sourceFile": "frmPlanCardFeaturedProduct.xfdl",
    "iconFile": "FeaturedProduct.png"
  },
  {
    "cardKey": "SHARE",
    "category": "NAV",
    "name": "공유하기",
    "desc": "SNS나 카카오톡 링크 전송 버튼들을 정렬 노출하는 공유 모듈입니다.",
    "sourceFile": "frmPlanCardShare.xfdl",
    "iconFile": "Share.png"
  },
  {
    "cardKey": "BANNER_BLOCK",
    "category": "BANNER",
    "name": "배너블록",
    "desc": "정렬된 2열/3열 형태의 일목요연한 이미지 묶음형 복합 배너 영역입니다.",
    "sourceFile": "frmPlanCardBannerBlock.xfdl",
    "iconFile": "BannerBlock.png"
  },
  {
    "cardKey": "FLASH_SALE",
    "category": "PROD",
    "name": "플래시 세일",
    "desc": "극히 짧은 시간에 강력한 폭탄 파격 세일가를 적용하여 전시하는 구좌입니다.",
    "sourceFile": "frmPlanCardFlashSale.xfdl",
    "iconFile": "FlashSale.png"
  },
  {
    "cardKey": "BUY_KING",
    "category": "PROMOTION",
    "name": "구매왕",
    "desc": "기간 동안 최고 구매액 결제 순위를 실시간 리더보드로 노출하여 결제를 자극합니다.",
    "sourceFile": "frmPlanCardTopBuyer.xfdl",
    "iconFile": "TopBuyer.png"
  },
  {
    "cardKey": "RANDOM_NO",
    "category": "NAV",
    "name": "난수입력",
    "desc": "배포된 전용 시리얼 쿠폰이나 1회용 프로모션 난수코드를 검증/입력하는 곳입니다.",
    "sourceFile": "frmPlanCardRandomNumber.xfdl",
    "iconFile": "RandomNumber.png"
  },
  {
    "cardKey": "SALE_CODE",
    "category": "PROMOTION",
    "name": "할인코드",
    "desc": "기획전 한정 제휴 할인코드 발급 및 입력을 검증하는 블록입니다.",
    "sourceFile": "frmPlanCardDiscountCode.xfdl",
    "iconFile": "DiscountCode.png"
  },
  {
    "cardKey": "CNDT_BNFT",
    "category": "PROMOTION",
    "name": "조건혜택",
    "desc": "특정 등급이나 신규 첫 구매 등 개별 조건에 부합할 시에만 오픈되는 혜택 영역입니다.",
    "sourceFile": "frmPlanCardBenefitC.xfdl",
    "iconFile": "BenefitC.png"
  },
  {
    "cardKey": "FCFS_CPN",
    "category": "PROMOTION",
    "name": "선착순쿠폰",
    "desc": "시간에 맞춰 선착순 다운로드 버튼이 작동하는 기능형 마케팅 쿠폰입니다.",
    "sourceFile": "frmPlanCardFCFSCoupon.xfdl",
    "iconFile": "FcfsCoupon.png"
  },
  {
    "cardKey": "RANGE",
    "category": "PROD",
    "name": "레인지",
    "desc": "가격대별, 혹은 혜택대별 상품 필터 슬라이더를 지원하는 상품 범위 표기입니다.",
    "sourceFile": "frmPlanCardRange.xfdl",
    "iconFile": "range.png"
  },
  {
    "cardKey": "COMMENT",
    "category": "PROMOTION",
    "name": "댓글",
    "desc": "사용자들의 실시간 댓글 작성 및 소통 참여가 이루어지는 대화형 영역입니다.",
    "sourceFile": "frmPlanCardComment.xfdl",
    "iconFile": "Comment.png"
  },
  {
    "cardKey": "FCFS_CPN_P",
    "category": "PROD",
    "name": "선착순쿠폰상품",
    "desc": "선착순 혜택 대상 상품 목록을 바인딩하여 혜택 뱃지와 함께 노출합니다.",
    "sourceFile": "frmPlanCardFCFSCouponFrod.xfdl",
    "iconFile": "FcfsCoupon_P.png"
  },
  {
    "cardKey": "OPT_CONTAINER",
    "category": "NAV",
    "name": "옵션컨테이너",
    "desc": "상품의 여러 컬러, 사이즈 등 핵심 옵션 셀렉터 구조를 직접 노출해주는 영역입니다.",
    "sourceFile": "frmPlanCardOptionContainer.xfdl",
    "iconFile": "OptionContainer.png"
  },
  {
    "cardKey": "GAME_CARD1",
    "category": "PROMOTION",
    "name": "게임카드1",
    "desc": "고객 참여 활성화를 위해 탑재된 복합 캐주얼 미니 이벤트 카드타입 A형입니다.",
    "sourceFile": "frmPlanCardGameTypeA.xfdl",
    "iconFile": "GameTyepA.png"
  },
  {
    "cardKey": "GAME_CARD2",
    "category": "PROMOTION",
    "name": "게임카드2",
    "desc": "마케팅 재미 요소를 고도화한 플랩 또는 뒤집기 형태의 미니 게임 카드타입 B형입니다.",
    "sourceFile": "frmPlanCardGameTypeB.xfdl",
    "iconFile": "GameTypeB.png"
  },
  {
    "cardKey": "TEXT",
    "category": "BANNER",
    "name": "텍스트",
    "desc": "자유롭고 감각적인 대/소단 타이틀과 설명 문구를 배치할 수 있는 공용 텍스트 영역입니다.",
    "sourceFile": "frmPlanCardText.xfdl",
    "iconFile": "Text.png"
  },
  {
    "cardKey": "PICTORIAL",
    "category": "BANNER",
    "name": "화보",
    "desc": "룩북이나 매거진 화보 레이아웃을 본떠 고화질 이미지를 잡지처럼 넘겨보는 갤러리 뷰어입니다.",
    "sourceFile": "frmPlanCardPictorial.xfdl",
    "iconFile": "Pictorial.png"
  },
  {
    "cardKey": "REVIEW_GUIDE",
    "category": "NAV",
    "name": "리뷰 작성",
    "desc": "구매자들에게 적극적인 평점 및 리뷰 작성을 유도하고 보상 혜택을 알려주는 위젯입니다.",
    "sourceFile": "frmPlanCardReviewGuide.xfdl",
    "iconFile": "ReviewGuide.png"
  }
];
