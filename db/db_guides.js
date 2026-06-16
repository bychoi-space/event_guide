// LFmall NEW Exhibition Template Guides Master Database (db/db_guides.js)
// Enables 100% fail-proof execution on file:/// local protocols bypassing CORS blocks.

window.ExhibitionGuides = {
  "TAB_CONTAINER": {
    "cardKey": "TAB_CONTAINER",
    "name": "탭 컨테이너",
    "category": "PROD",
    "sourceFile": "frmPlanTempTabContainer.xfdl",
    "moduleCode": "MD13",
    "desc": "다수의 상품 카테고리나 하위 템플릿들을 탭 형태로 조립하여 전시 상태를 유기적으로 전환해주는 복합 연동 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC/Mobile 기획전 상세페이지)에서는 다단 Depth를 지원하는 탭 메뉴바로 노출됩니다. 사용자가 탭 클릭 시 페이지 전체 새로고침 없이 비동기 방식으로 내부 컨텐츠(강조상품 리스트, 배너 등)를 즉시 교체하여 최적의 쇼핑 탐색 흐름을 만들어 냅니다.",
    "backendSettings": [
      { "field": "탭 분류 구분", "id": "PLAN_CATE_CD", "type": "CODE (선택)", "desc": "1단 탭, 2단 탭(다단 구조) 및 Leaf 단계의 탭 구성을 선별 지정합니다." },
      { "field": "연동 폼 주소", "id": "FORM_URL", "type": "String (필수)", "desc": "내부 템플릿 폼의 로드 주소(예: PopupDtl::frmPlanTempTabContainerLeafDepth.xfdl)를 기입합니다." },
      { "field": "탭 PC 이미지", "id": "PC_IMG_PATH_NM_BNR", "type": "File (1240px 권장)", "desc": "탭 상세 내용 헤더에 노출되는 PC 배너/배경 이미지 파일입니다. (최대 500KB 제한)" },
      { "field": "탭 모바일 이미지", "id": "MOBI_IMG_PATH_NM_BNR", "type": "File (750px 권장)", "desc": "탭 상세 내용 헤더에 노출되는 모바일 배너/배경 이미지 파일입니다. (최대 500KB 제한)" }
    ],
    "codeSnippet": "// PopupDtl::frmPlanTempTabContainerTopDepth.xfdl (내부 2단 템플릿 로직 일부)\nthis.frmPlanTempTabContainerTopDepth_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo) {\n    trace(\"== frmPlanTempTabContainerTopDepth_onload start ==\");\n    partsDiv.set_url(\"PopupDtl::frmPlanTempTabContainerLeafDepth.xfdl\");\n};",
    "warnings": "NEW 템플릿에 추가 가능한 카드는 최대 20장입니다. 탭 컨테이너 하위에 들어가는 내부 데이터 역시 전체 카드 수 제한에 걸려 있는지 꼼꼼하게 유의해야 하며, 탭 단계가 2단계 이상 늘어날 시 화면 로딩 부하가 생길 수 있으므로 상품 데이터 수를 탭당 50개 이하로 제한할 것을 권장합니다. 또한, 탭 배경 및 배너 이미지 업로드 시 파일 용량 제한은 기존 200KB에서 500KB 이하로 상향 조정되었으므로, 초과 시 업로드가 반려되는 점에 유의해야 합니다.",
    "imageGuidelines": {
      "pcSize": "1240px × (세로 높이 제한 없음)",
      "moSize": "750px × (세로 높이 제한 없음)",
      "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
      "maxSize": "파일당 최대 500KB 이하",
      "adminValidation": "넥사크로 어드민에서 탭 이미지 업로드 시 파일별 500KB 초과인 경우 경고 메시지와 함께 업로드가 차단 및 초기화됩니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 2개",
      "tabMax": "최대 15개 (대분류) / 8개 (소분류)",
      "prodMin": "최소 4개",
      "prodMax": "최대 48개",
      "adminValidation": "2단 탭 구조는 선택사항(Optional)으로 1단 단일 카테고리 탭으로만 간소하게 사용하거나, 대분류-소분류가 분기되는 2단 탭 구조를 세팅해 고도화할 수 있습니다.<br>어드민(NBOS) 저장 시 각 탭별로 매핑된 상품 개수가 최소 4개 미만이거나 최대 48개를 초과할 경우 Validation 오류 메시지와 함께 저장이 자동으로 반려됩니다. 또한, 하위 2단 탭(소분류)은 최대 8개까지, 1단 탭은 최대 15개까지 스피너(Spin)를 통해 유연하게 추가 및 조절 가능합니다."
    }
  },
  "TOP_BANNER": {
    "cardKey": "TOP_BANNER",
    "name": "탑배너",
    "category": "BANNER",
    "sourceFile": "frmPlanCardBanner.xfdl (어드민) / TopBanner.tsx (프론트)",
    "moduleCode": "MD1 (MDL1)",
    "desc": "기획전 최상단에 강렬한 브랜드 이미지를 전달하는 비주얼 포커스 배너입니다. 단일 통 이미지 노출 뿐만 아니라 텍스트 오버레이, 뱃지, 블러 딤드(Dimmed) 레이어 및 직사각형/라운드형 링크 버튼 등의 복합 타이포그래피 요소들을 조립식으로 렌더링할 수 있는 고기능 컴포넌트입니다.",
    "layoutDescription": "최상단 전체 가로폭 반응형으로 렌더링되며, 모바일 화면에서는 세로 비율을 안전하게 확보하기 위해 '스퀘어형(최대 높이 414px 고정)' 뷰 옵션을 지원합니다. UI 유형에 따라 'OP01/OP03 (포토 중심 타이포)' 및 'OP02 (텍스트 중심 타이포)' 레이아웃이 적용되며, 어드민 여백 설정값에 따라 상/하단 내외부 마진(10px 내외)이 정밀하게 동적 가감됩니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 상단 Margin 여부를 결정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 Padding 여부를 결정합니다. 기본값 Y." },
      { "field": "이미지 표현 형식", "id": "IMG_WIDE_TYPE_VAL", "type": "Combo (S/W)", "desc": "S: 기본형 (1240px 중앙 가둠) / W: 와이드형 (1920px 화면 가득 채움)" },
      { "field": "타이틀 오버레이", "id": "BNR_TITE_TEXT", "type": "String (10자 한도)", "desc": "배너 중앙에 배치할 메인 헤드라인 텍스트입니다. 줄바꿈(\\n) 분할 출력을 완벽 지원합니다." },
      { "field": "서브 타이틀", "id": "BNR_SUB_TITE_TEXT", "type": "String (무제한)", "desc": "메인 타이틀 하단에 배치할 보조 상세 설명 문구입니다." },
      { "field": "버튼 유형", "id": "BTN_TYPE_VAL", "type": "Radio (O/S)", "desc": "O: 투명 배경에 외곽선만 그리는 고스트 버튼 / S: 채우기 단색 버튼" },
      { "field": "버튼 스타일", "id": "BTN_STYL_VAL", "type": "Radio (N/S/R)", "desc": "N: 버튼 미노출 / S: 직사각형 버튼 / R: 양끝이 둥근 알약형 라운드 버튼" },
      { "field": "버튼 링크 URL", "id": "BTN_MVMN_URL_VAL", "type": "String (필수)", "desc": "배너 클릭 또는 전용 버튼 클릭 시 강제 랜딩될 타겟 URL 경로입니다. PC용 스펙을 입력합니다." },
      { "field": "모바일 전용 이미지", "id": "MOBI_IMG_PATH_NM", "type": "File (1080x1080 권장)", "desc": "모바일 전용 반응형 레이아웃에 탑재될 이미지 파일입니다. OP01/OP02 등의 square 모드 활성 시 1:1 비율 적용을 강하게 권장합니다." }
    ],
    "codeSnippet": "// TopBanner.tsx - Front-end React 컴포넌트 핵심 분석 소스\nexport const TopBanner = ({ moduleType, templateDetail }) => {\n  if (!templateDetail) return <></>;\n  return (\n    <>\n      {templateDetail?.map((detail) => (\n        <div\n          key={detail.benefitSq}\n          className={[\n            styles.topBanner,\n            detail.imageType === \"OP01\" || detail.imageType === \"OP03\" ? styles.typePhoto : styles.typeText,\n            detail.imageType === \"OP01\" || detail.imageType === \"OP02\" ? styles.square : \"\",\n            moduleType === \"TB02\" ? styles.dimmed : \"\",\n          ].join(\" \")}\n        >\n          <img src={`${IMAGE_PATH}/${detail.bannerImgPath}`} className={styles.banner} alt=\"bannerImage\" />\n          {moduleType === \"TB02\" && (\n            <div className={styles.contents}>\n              {/* h1 한글 기준 10자 입력 제한 권장 */}\n              {detail.title?.split(\"\\n\").map((txt) => <h1 key={txt}>{txt}</h1>)}\n              {detail.subTitle?.split(\"\\n\").map((txt) => <h2 key={txt}>{txt}</h2>)}\n              <p className={styles.badge}>{detail.badge}</p>\n            </div>\n          )}\n        </div>\n      ))}\n    </>\n  );\n};",
    "warnings": "1. [중요] 메인 타이틀 오버레이는 한 줄당 최대 한글 10자를 가이드 라인으로 잡고 있습니다. 10자를 초과할 시 반응형 모바일 크기에서 텍스트 줄바꿈 강제 래핑 현상에 의해 레이아웃 깨짐이 유발될 수 있으니 등록 시 사전 모니터링을 거쳐야 합니다.\n2. [Dimmed 설정] 어드민 내 모듈 코드가 'TB02 (텍스트 오버레이형)' 일 때는 배경 이미지 위에 30% 블랙 투명 딤드 레이어(`rgba(0,0,0,0.3)`)가 강제로 도포됩니다. 따라서 어둡게 보정될 것을 염두에 두고 원본 이미지의 명도를 과하게 낮추지 않도록 주의해야 합니다.",
    "imageGuidelines": {
      "pcSize": "1240px × (세로 높이 제한 없음) *텍스트가 없는 통이미지 타입은 가로 1920px (와이드형) 권장",
      "moSize": "750px × (세로 높이 제한 없음) *스퀘어형(OP01/OP02) 활성화 시 1:1 비율 (1080x1080) 권장 (모바일 최대 높이 414px 고정)",
      "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
      "maxSize": "파일당 최대 500KB 이하",
      "adminValidation": "넥사크로 어드민에서 업로드 시 파일별 500KB 초과인 경우 경고 메시지와 함께 업로드가 차단 및 초기화됩니다. (서버 전체 제한은 10MB이나 UI 단에서 500KB로 2차 검증 차단)"
    }
  },
  "BANNER": {
    "cardKey": "BANNER",
    "name": "배너",
    "category": "BANNER",
    "sourceFile": "frmPlanCardBanner.xfdl (어드민) / Banner.tsx (프론트)",
    "moduleCode": "MD12",
    "desc": "기획전 본문 내에 구성하는 표준적인 단일 혹은 다단 이미지/링크 연동 배너 컴포넌트입니다. 본문에 자유롭게 적재하여 시각적 구분을 하거나 테마별 페이지 전환용 링크 버튼을 내포할 수 있습니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 타이틀, 설명문구, 버튼이 이미지 위에 겹쳐서 노출(Overlay)되지 않고, 이미지의 위와 아래에 각각 독립적으로 배치되는 수직 레이아웃 형태입니다. 구체적으로 **[상단: 타이틀 & 설명문구] -> [중단: Swiper 슬라이드 이미지 및 페이지네이션 도트] -> [하단: 바로가기 버튼]** 순서로 질서정연하게 렌더링되도록 설계되었습니다. 이미지를 2장 이상 복수 업로드할 경우 중단의 이미지 영역만 Swiper 모듈을 통해 캐러셀(슬라이드) 회전 배너로 작동합니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 상단 여백 유무를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 여백 유무를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 하단 여백 유무를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 하단 여백 유무를 설정합니다." },
      { "field": "이미지 표현 형식", "id": "IMG_WIDE_TYPE_VAL", "type": "Combo (S/W)", "desc": "S: 기본형 (1240px 중앙 가둠) / W: 와이드형 (1920px 화면 전체 채움)" },
      { "field": "상단 설명 문구", "id": "BNR_HEDR_TITL_TEXT", "type": "String (50byte 한도)", "desc": "배너 최상단에 작게 배치되는 한글 약 25자 내외의 강조 설명 텍스트입니다. 하단 설명 문구와 중복 등록이 불가합니다." },
      { "field": "타이틀", "id": "BNR_TITE_TEXT", "type": "String (22byte 한도)", "desc": "배너 중앙 메인 타이틀입니다. 한 줄에 최대 한글 10자 내외로 입력하고 줄바꿈(\\n)으로 최대 2줄까지 등록 가능합니다." },
      { "field": "하단 설명 문구", "id": "BNR_SUB_TITE_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 하단 보조 설명 텍스트입니다. 상단 설명 문구와 중복 등록이 불가합니다." },
      { "field": "버튼 형태", "id": "BTN_STYL_VAL", "type": "Radio (N/S/R)", "desc": "N: 버튼 미노출 / S: 직사각형 버튼 / R: 양끝이 둥근 라운드 버튼" },
      { "field": "버튼 유형", "id": "BTN_TYPE_VAL", "type": "Radio (O/S)", "desc": "O: 투명 배경 고스트 버튼 / S: 채우기 단색 버튼" },
      { "field": "버튼 명칭", "id": "BTN_TEXT_VAL", "type": "String (40byte 한도)", "desc": "노출될 버튼 이름입니다. 한글 약 20자 한도 내 작성을 권장합니다." },
      { "field": "버튼 링크 URL", "id": "BTN_MVMN_URL_VAL", "type": "String (선택)", "desc": "버튼 클릭 시 타겟 랜딩 페이지 링크 주소(PC URL 기준)를 매핑합니다." },
      { "field": "PC 이미지 파일", "id": "PC_IMG_PATH_NM", "type": "File (1240px 권장)", "desc": "PC 사용자 화면에 전시될 표준 이미지 파일입니다. (최대 5장 등록 가능)" },
      { "field": "모바일 이미지 파일", "id": "MOBI_IMG_PATH_NM", "type": "File (750px 권장)", "desc": "모바일 사용자 화면에 전시될 표준 이미지 파일입니다." },
      { "field": "배너 개별 링크", "id": "LINK_URL_VAL", "type": "String (선택)", "desc": "배너 자체 클릭 시 이동할 타겟 랜딩 URL입니다. PC URL 스펙으로 작성합니다." },
      { "field": "링크 타겟", "id": "LINK_TRGE_VAL", "type": "Combo (N/S/B)", "desc": "N: 사용안함 / S: 현재창(_self) / B: 새창(_blank)" },
      { "field": "eTAG 랜딩 여부", "id": "LINK_DIV_VAL", "type": "Combo (필수)", "desc": "배너 링크 클릭 이벤트를 로깅 및 추적하기 위한 필수 태깅 분류 코드입니다." }
    ],
    "codeSnippet": "// Banner.tsx - Front-end React 일반 배너 렌더링 일부\nexport default function Banner({ template }) {\n  const { data: bannerData } = useFetchPlanBannerGET({ param: { moduleType: template?.moduleType } });\n  return (\n    <>\n      {bannerData?.body?.planModuleBannerInfoDTOList?.map((item) => (\n        <Link key={item.bannerNumber} to=\"\" className={styles.banner} onClick={(e) => handleClick(e)}>\n          <img src={`${IMAGE_ROOT_PATH}/${item.mobileImagePath}`} alt=\"배너\" />\n        </Link>\n      ))}\n    </>\n  );\n}",
    "warnings": "1. [텍스트 상호 배타 규칙] 상단 설명 문구와 하단 설명 문구는 어드민 시스템 제약 상 **절대 동시에 입력하여 저장할 수 없습니다.** 입력 시 하나의 영역을 비워두어야 Validation 에러가 발생하지 않습니다.\n2. [용량 초과 차단 주의] 일반 배너는 슬라이드 배너 제작을 지원하여 최대 5장의 이미지를 올릴 수 있으나, **개별 이미지 용량이 500KB를 1바이트라도 초과하는 경우** 어드민 내 넥사크로 2차 검증 스크립트단에서 업로드가 원천 차단됩니다. 등록 전 이미지 최적화(용량 압축)가 필수입니다.\n3. [eTAG 필수 규정] 각 이미지 슬라이드마다 랜딩 링크를 활성화하는 경우, **eTAG 랜딩 구분 코드 설정** 누락 시 저장이 불가하니 사전 정의된 프로모션/브랜드/상품 코드를 정확히 매핑하여야 합니다.",
    "imageGuidelines": {
      "pcSize": "기본형: 1240px × (세로 높이 제한 없음) / 와이드형: 1920px × (세로 높이 제한 없음)",
      "moSize": "가로 750px × (세로 높이 제한 없음) (모바일 상단 여백 60px 기본 설정)",
      "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
      "maxSize": "파일당 최대 500KB 이하 (최대 5장 등록하여 슬라이드 배너 제작 가능)",
      "adminValidation": "넥사크로 어드민에서 업로드 시 파일별 500KB 초과인 경우 경고 메시지와 함께 업로드가 차단 및 초기화됩니다. 복수 등록 시 프론트에서 자동으로 Swiper 캐러셀(슬라이드) 회전 롤링 배너로 구현되며, 배너 링크 등록 시 eTAG 정보 입력이 필수입니다."
    }
  },
  "T_DEAL": {
    "cardKey": "T_DEAL",
    "name": "타임특가",
    "category": "PROD",
    "sourceFile": "frmPlanCardTimeDeal.xfdl (어드민) / TimeDealCard.tsx (프론트)",
    "moduleCode": "MD6",
    "desc": "기획전 본문 내에서 지정된 제한 시간 동안만 파격적인 할인가로 상품을 노출하여, 고객의 심리적 마감 임박 효과를 유도하는 시간 한정형 마케팅 핵심 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 개별 상품 카드마다 상단 모서리에 째깍이는 실시간 카운트다운 타이머 배지(⏳ 04:12:35)가 브랜드 포인트 코랄 컬러로 역동적 노출됩니다. 또한 실시간 판매율 진행 상태바(Progress Bar)를 적용하여 시각적 소진 속도를 직관적으로 인지시킵니다. (PC 화면에서는 가로 2열 배치로 시원한 와이드 룩을 연출하며, 모바일 화면에서는 세로 1열 풀 레이아웃 그리드로 유연하게 반응형 렌더링 전환됩니다.)",
    "backendSettings": [
      { "field": "타임딜 상품 선택", "id": "PRODUCT_CD", "type": "String (필수)", "desc": "넥사크로 상품 마스터 DB에서 직접 연계할 특가 상품의 고유 13자리 식별 번호입니다." },
      { "field": "할인 혜택 매핑코드", "id": "BENEFIT_CD", "type": "CODE (필수)", "desc": "해당 상품에 매핑되어 가격 줄긋기(원래 가격)와 실시간 할인가를 동적으로 노출할 혜택 코드입니다." },
      { "field": "전시 시작 일자", "id": "SDT", "type": "Date (필수)", "desc": "타임특가 판매가 시작될 연월일 설정입니다. (YYYYMMDD)" },
      { "field": "전시 시작 시간", "id": "STM", "type": "Time (필수)", "desc": "타임특가 판매가 시작될 시분초 설정입니다. (HHMMSS)" },
      { "field": "전시 종료 일자", "id": "EDT", "type": "Date (필수)", "desc": "타임특가 판매가 종료될 연월일 설정입니다. (YYYYMMDD)" },
      { "field": "전시 종료 시간", "id": "ETM", "type": "Time (필수)", "desc": "타임특가 판매가 종료될 시분초 설정입니다. (HHMMSS)" },
      { "field": "전체 여백 설정", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "기획전 레이아웃 내에서 타임특가 구좌 상하단에 외부 여백(margin)을 유연하게 줄 것인지 여부입니다." },
      { "field": "배경 색상 코드", "id": "BKGD_CLR_VAL", "type": "Color Hex (선택)", "desc": "타임특가 카드 뒷배경을 우아하게 채울 HSL 테마 맞춤 컬러 코드 설정입니다. 기본값은 투명(Transparent)입니다." }
    ],
    "codeSnippet": "// frmPlanCardTimeDeal.xfdl.js - 타임특가 등록 시 전시 시작일시-종료일시 정밀 선후 관계 검증 스크립트\nthis.fnTimeDealPeriodValidator = function() {\n    var startDt = this.dsTimeDealInfo.getColumn(0, \"SDT\") + this.dsTimeDealInfo.getColumn(0, \"STM\");\n    var endDt = this.dsTimeDealInfo.getColumn(0, \"EDT\") + this.dsTimeDealInfo.getColumn(0, \"ETM\");\n    \n    // 시작 시간이 종료 시간보다 미래이거나 동일할 때 저장을 반려하는 정밀 안전 장치\n    if (startDt >= endDt) {\n        this.gfnMessage(\"타임특가 시작 시간은 종료 시간보다 미래이거나 같을 수 없습니다. 정확한 전시 기간을 입력해주세요.\", \"A\");\n        return false;\n    }\n    return true;\n};",
    "warnings": "1. [시간 유효성 엄격] 타임특가의 시작 일시(SDT+STM)는 반드시 종료 일시(EDT+ETM)보다 정밀히 이전 시점이어야 하며, 1초라도 어긋날 시 넥사크로 어드민 폼 검증 단에서 에러 경고와 함께 저장이 반려됩니다.\n2. [서버 기준 시간 동기화] 클라이언트-서버 간 시간차로 인해 종료 타이머 오차가 유발되는 사고를 사전에 차단하기 위해, 브라우저 로컬 PC 시스템 시계를 절대 직접 참조하지 않고 넥사크로 공통 백엔드 API 서버의 UTC 기준 라이브 서버 타임을 호출하여 카운트다운을 표시하도록 코딩되어야 합니다.\n3. [종료 시 자동 미노출] 설정된 전시 종료 시간이 도달하면 화면에서 컴포넌트 전체가 자동으로 보이지 않도록 동적 렌더링 스위치가 제어됩니다.",
    "imageGuidelines": {
      "pcSize": "해당 없음",
      "moSize": "해당 없음",
      "allowTypes": "해당 없음",
      "maxSize": "해당 없음",
      "adminValidation": "타임특가 카드는 별도의 이미지 업로드 기능을 제공하지 않으며, 등록한 상품 코드를 기반으로 실물 상품 이미지 데이터를 시스템에서 자동으로 연계하여 노출합니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 2개",
      "tabMax": "최대 16개",
      "prodMin": "최소 4개",
      "prodMax": "최대 60개",
      "adminValidation": "어드민(NBOS) 저장 시 각 탭별로 매핑된 상품 개수가 최소 4개 미만이거나 최대 60개를 초과할 경우 Validation 오류 메시지와 함께 저장이 자동으로 반려됩니다. 탭은 최소 2개에서 최대 16개까지 생성 가능합니다."
    }
  },
  "FLASH_SALE": {
    "cardKey": "FLASH_SALE",
    "name": "플래시 세일",
    "category": "PROD",
    "sourceFile": "frmPlanCardFlashSale.xfdl (어드민) / FlashSale.tsx (프론트)",
    "moduleCode": "MD6",
    "desc": "극히 짧은 시간에 강력한 폭탄 파격 세일가를 적용하여 전시하는 구좌입니다. 정해진 진행시간에 맞게 째깍이는 타이머가 노출되며, Swiper 슬라이더로 상품 리스트를 노출합니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상하단 여백 및 배경 색상이 지정에 따라 가변 렌더링되며, 중앙에는 메인 타이틀과 상/하단 설명 문구 중 하나가 노출됩니다. 또한, 진행 시간에 따라 실시간 카운트다운 타이머가 표시되고, 하단에는 Swiper 슬라이더를 통해 등록된 상품(1.113 slidesPerView 모바일 특화 구조)들이 브랜드, 상품명, 할인가(dcRate 적용 시 정가 대비 할인율 오버레이) 정보와 함께 좌우 롤링 형태로 노출됩니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "Color Hex (선택)", "desc": "플래시 세일 영역의 배경색을 Hex 코드형태(예: #757575)로 입력합니다. 해당 값은 프론트에서 8% 투명도로 연하게 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "타이틀 위에 작게 노출되는 서브 설명입니다. 하단 설명 문구와 동시에 등록할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "플래시 세일의 메인 타이틀 제목입니다. 한글 기준 11자 내외 작성이 권장됩니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "타이틀 아래 노출되는 상세 부연설명입니다. 상단 설명 문구와 동시에 등록할 수 없습니다." },
      { "field": "남은시간 표현", "id": "TM_TYPE_VAL", "type": "Radio (HMS/HMSMS)", "desc": "HMS: 시분초 표시 (HH|MM|SS), HMSMS: 시분초 및 밀리초 표시 (HH|MM|SS|MS)." },
      { "field": "타이머 시작일시", "id": "STRT_DT (SDT+STM)", "type": "DateTime (필수)", "desc": "플래시 세일 카운트다운 타이머가 시작되는 시각입니다. (YYYYMMDDHHmmss)" },
      { "field": "타이머 종료일시", "id": "END_DT (EDT+ETM)", "type": "DateTime (필수)", "desc": "플래시 세일 카운트다운 타이머가 마감되는 시각입니다. (YYYYMMDDHHmmss)" },
      { "field": "상품정렬", "id": "PROD_SORT_TYPE_VAL", "type": "Radio (A/M)", "desc": "A: 등록순으로 상품을 고정 전시합니다, M: 랜덤으로 상품 순서를 섞어 노출합니다." },
      { "field": "상품 코드", "id": "PROD_CD", "type": "String (필수)", "desc": "매핑될 13자리 상품 코드입니다. 총 0건 표시 영역 우측 상품추가 버튼을 통해 관리합니다." }
    ],
    "codeSnippet": "// FlashSale.tsx - React Swiper 슬라이더 및 타이머 렌더링 로직\nexport default function FlashSale({ template, onRender }) {\n  const { data } = useFetchExhbFlashSaleGET({ evntNo: Number(template.exhbCardNo), siteCd: \"03\" });\n  const titleOptions = {\n    title: data?.body?.evntMainText?.split(\"\\n\"),\n    disc: data?.body?.evntHedrText?.split(\"\\n\") ?? data?.body?.evntSubText?.split(\"\\n\") ?? [],\n    subTitlePosition: data?.body?.evntHedrText ? \"top\" : data?.body?.evntSubText ? \"bottom\" : \"\"\n  };\n  return (\n    <div className={styles.flashSale} style={{ backgroundColor: data?.body?.bkgdClr }}>\n      <PlanTitle options={titleOptions} />\n      {data?.body?.tmUseYn === \"Y\" && <Timer props={data?.body?.tmInfos || {}} textUnderTime=\"Y\" />}\n      <Swiper slidesPerView={1.113} spaceBetween={8}>\n        {data?.body?.exhbEvntProds?.map((item, idx) => (\n          <SwiperSlide key={idx}>\n            <FlashSaleItem props={item} prodIdx={idx + 1} />\n          </SwiperSlide>\n        ))}\n      </Swiper>\n    </div>\n  );\n}",
    "warnings": "1. [색상코드 포맷 체크] 배경색상 입력 칸(editBtnText)에 컬러코드를 입력하는 경우, 반드시 `#RRGGBB` 형태의 정규식 패턴(`/^#[0-9A-Fa-f]{6,8}$/`) 형식을 온전히 만족해야 합니다. 만족하지 못할 시 어드민 저장 검증단에서 오류를 발생시킵니다.\n2. [설명문구 배타 등록] 상단 설명 문구와 하단 설명 문구를 동시에 입력하여 저장을 시도할 경우, '상단 설명 문구, 하단 설명 문구 중 하나만 입력하세요.' 메시지와 함께 저장이 반려됩니다.\n3. [기간 범위 한계 설정] 설정하려는 타이머 진행기간(시작~종료)은 반드시 상위 카드기간(부모의 SDT+STM ~ EDT+ETM)의 날짜/시간 영역 내에 온전히 존재해야 하며, 범위를 단 1초라도 이탈하거나 시작일시가 종료일시보다 클 경우 오류 알럿을 띄워 저장을 거부합니다.",
    "imageGuidelines": {
      "pcSize": "해당 없음",
      "moSize": "해당 없음",
      "allowTypes": "해당 없음",
      "maxSize": "해당 없음",
      "adminValidation": "플래시 세일 카드는 별도의 이미지 업로드 기능을 제공하지 않으며, 등록한 상품 코드를 기반으로 실물 상품 이미지 데이터를 시스템에서 자동으로 연계하여 노출합니다."
    },
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "최소 1개 상품 필수 등록",
      "prodMax": "최대 10개 상품까지 등록 제한",
      "adminValidation": "플래시 세일은 단시간 강렬한 판매 집중을 유도하기 위해 **최소 1개에서 최대 10개** 범위 내에서만 상품 등록을 허용하고 있으며, 10개를 초과해 상품을 배치하거나 상품이 전혀 없을 경우 어드민단에서 저장 처리를 반려합니다."
    }
  },
  "NAVI": {
    "cardKey": "NAVI",
    "name": "네비게이션",
    "category": "NAV",
    "sourceFile": "frmPlanCardNavigation.xfdl (어드민) / Navigation.tsx (프론트)",
    "moduleCode": "MD13",
    "desc": "기획전 내부의 특정 섹션이나 상품 코너 영역으로 스크롤 이동을 돕는 유기적인 스크롤 앵커 메뉴바 컴포넌트입니다.",
    "layoutDescription": "PC 및 모바일의 사용자 화면에서 상단 고정(Sticky) 형태로 작동하며, 사용자가 메뉴명 클릭 시 해당 카드가 노출되는 본문 위치로 부드러운 애니메이션 효과와 함께 자동 스크롤 앵커 포커싱이 수행됩니다. 모바일에서는 가로 드래그 스크롤링 형태의 1단 스크롤 또는 바둑판 배열의 2단 고정 형태로 레이아웃 분기가 처리됩니다.",
    "backendSettings": [
      { "field": "메뉴 유형", "id": "LCTI_PATH_DIV_VAL", "type": "Combo (C/P)", "desc": "C: 카드형 (기획전 내 등록된 특정 카드를 타겟팅) / P: 상품형 (등록된 코너 상품 영역을 타겟팅)을 선택 매핑합니다." },
      { "field": "PC메뉴 넓이", "id": "WIDE_YN", "type": "Radio (Y/N)", "desc": "N: 기본형 (1240px 너비로 본문 중앙에 제한) / Y: 와이드형 (1920px 전체 폭으로 꽉 차게 확장 렌더링)을 설정합니다." },
      { "field": "네비게이션 형태", "id": "LCTI_PATH_LINE_TYPE_VAL", "type": "Radio (1/2)", "desc": "1: 1단 스크롤형 (개수 제한 없이 가로 스크롤링 메뉴바 작동) / 2: 2단 고정형 (5~8개 전용 바둑판 고정 배열로 노출)을 지정합니다." }
    ],
    "codeSnippet": "// frmPlanCardNavigation.xfdl.js - 2단 고정 형태 검증 및 메뉴명 Byte 제한 일부\nthis.checkValidation = function() {\n    var chkVal = 0;\n    var gridVal = this.dsCardMenuList.rowcount > 0 ? this.divCardNavi.form.grdCardList : this.divCornerNavi.form.grdCornerList;\n    var chkCnt = 0;\n    var overCnt = 0;\n    var bindDs = gridVal.getBindDataset();\n    \n    for(var i=0; i < bindDs.rowcount; i++){\n        if(bindDs.getColumn(i, \"USE_YN_CHK\") == 1){\n            chkCnt += 1;\n            if(this.asciiByteCount(bindDs.getColumn(i, \"MENU_NM\")) > 10) overCnt += 1;\n        }\n    }\n    \n    if((this.divCardNavi.form.rdoNaviDispType.value == 2 || this.divCornerNavi.form.rdoNaviDispType.value == 2) && (chkCnt < 5 || chkCnt > 8)) {\n        this.gfnMessage(\"2단 고정 형태는 메뉴 5개 이상 ~ 8개 이하로만 등록할 수 있습니다.\", \"A\");\n        return false;\n    }\n    if((this.divCardNavi.form.rdoNaviDispType.value == 2 || this.divCornerNavi.form.rdoNaviDispType.value == 2) && overCnt > 0) {\n        this.gfnMessage(\"2단 고정 형태는 메뉴명이 한글 기준 5자, 영문기준 10자 이내로만 가능합니다\", \"A\");\n        return false;\n    }\n    return true;\n};",
    "warnings": "1. [2단 고정 제약] 2단 고정 네비게이션 적용 시 메뉴 개수가 무조건 5개 이상 8개 이하여야 저장이 가능하며, 그 외 수량 범위에서는 어드민 검증에 걸려 저장이 원천 거부됩니다.\n2. [글자 수 자동 잘림 경고] 메뉴명은 10byte(한글 5자, 영문 10자)를 1byte라도 초과할 시, 넥사크로 UI 및 프론트 레이아웃 깨짐을 방어하기 위해 입력한 텍스트가 자동으로 잘려 저장이 초기화되니 등록 전 글자 수를 사전에 확인해야 합니다.\n3. [코너 상품 필수성] 상품형(P) 네비게이션을 활성화하려면 기획전 내에 상품 코너 카드가 사전에 반드시 구성 및 저장되어 있어야 매핑이 가능합니다.",
    "qtyGuidelines": {
      "tabMin": "최소 5개 (2단 고정 시)",
      "tabMax": "최대 8개 (2단 고정 시) *1단 스크롤 무제한",
      "prodMin": "최대 10byte (한글 5자)",
      "prodMax": "최대 10byte (영문 10자) *2단 고정 메뉴명에 적용",
      "adminValidation": "2단 고정(2) 형태를 세팅할 경우, 활성화된 메뉴(USE_YN_CHK) 개수가 5개 미만이거나 8개를 초과하면 Validation 반려가 수행됩니다. 또한, 2단 고정 메뉴명(MENU_NM)은 한글 기준 최대 5자(10byte)를 초과하여 저장할 시 UI 단에서 강제 차단 얼럿이 작동합니다. 1단 가로 스크롤형(1)은 별도의 수량 및 글자 수 Validation을 제한하지 않아 유연하게 사용 가능합니다."
    }
  },
  "B_BENEFIT": {
    "cardKey": "B_BENEFIT",
    "name": "구매혜택",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardBenefitB.xfdl (어드민) / BuyBenefit.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "기획전 구매 금액대별 할인쿠폰 다운로드, 사은품 증정, 무료 선물포장 혜택, 추가 마일리지 적립 등 총 5가지 슬롯으로 다양한 고객 리워드를 구성하는 복합 프로모션 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 최대 5개의 혜택 섹션을 질서정연하게 배열합니다. 개별 혜택은 유형에 따라 쿠폰 자동표현/이미지표현, 선물포장 단계별 안내 롤링, 사은품/웰컴팩 안내 배너 및 전용 버튼(액션 유형: CPN/FCF 다운로드, NOT 적립팝업, GFT/WEL/PRE 이동)으로 구성됩니다. PC에서는 인접한 쿠폰 혜택들이 2단 그리드로 자동 병렬 정렬되며, 선물포장(PRE) 영역 또한 비주얼과 이용 스텝 가이드가 좌우 분할 배치됩니다. 모바일에서는 모든 요소가 1열의 세로 카드 레이아웃으로 미려하게 단일 정렬되어 렌더링됩니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "Color Hex (선택)", "desc": "배경색을 Hex 코드형태(예: #757575)로 입력합니다. 해당 값은 프론트에서 8% 투명도로 연하게 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진(margin) 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩(padding) 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진(margin) 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩(padding) 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "BNFT_HEDR_TEXT_VAL", "type": "String (100byte 한도)", "desc": "타이틀 상단에 노출할 보조 문구입니다. 하단 설명 문구와 중복 등록이 불가합니다." },
      { "field": "타이틀", "id": "BNFT_TITL", "type": "String (22byte 한도)", "desc": "메인 타이틀 제목입니다. 한글 기준 11자 제한이 적용되며, 줄바꿈(\\n)으로 최대 2줄까지 등록 가능합니다." },
      { "field": "하단 설명 문구", "id": "BNFT_DSCR", "type": "String (100byte 한도)", "desc": "타이틀 하단에 노출할 설명 문구입니다. 상단 설명 문구와 중복 등록이 불가합니다." },
      { "field": "혜택 분류 구분", "id": "BNFT_TYPE_VAL", "type": "Combo (CPN/PRC/FCF/NOT/GFT/PRE/WEL/XXX)", "desc": "혜택을 부여할 유형(CPN: 할인쿠폰, PRC: 쿠폰표현, FCF: 선착순쿠폰, NOT: 추가적립, GFT: 사은품, PRE: 선물포장, WEL: 웰컴쿠폰팩, XXX: 사용안함)을 매핑합니다." },
      { "field": "쿠폰 표현 방식", "id": "CPN_DISP_TYPE_VAL", "type": "Radio (A/I)", "desc": "A: 자동표현 (DB에 매핑된 쿠폰 정보를 기반으로 템플릿화) / I: 이미지 표현 (PC/MO용 제작 이미지를 직접 업로드하여 노출) 중 선택합니다." },
      { "field": "버튼 형태", "id": "BTN_STYL_VAL", "type": "Radio (XX/OS/SS)", "desc": "XX: 사용안함, OS: 화이트(아웃라인 고스트), SS: 블랙(단색 채우기) 중 노출할 버튼 스타일을 설정합니다." },
      { "field": "버튼 명칭", "id": "BTN_TEXT_VAL", "type": "String (40byte 한도)", "desc": "버튼의 텍스트명입니다. 한글 약 20자 제한이 적용됩니다." },
      { "field": "버튼 액션 유형", "id": "BTN_ACTN_TYPE_VAL", "type": "Combo (B/P/M)", "desc": "B: 쿠폰 다운로드, P: 적립안내 팝업 노출, M: URL 이동(랜딩 처리)을 설정합니다." },
      { "field": "추가 적립율", "id": "editAccVal", "type": "Integer (NOT 전용)", "desc": "추가적립(NOT) 유형 시 기획전 대상 상품에 적용할 보조 적립율 수치입니다." },
      { "field": "사은품 수량", "id": "editApplyCnt", "type": "Integer (GFT 전용)", "desc": "사은품 지급 선착순 대상 인원수 및 재고 한도를 설정합니다." },
      { "field": "웰컴 기획전 번호", "id": "editExhbNo", "type": "Integer (WEL 전용)", "desc": "웰컴쿠폰팩과 매핑되어 버튼 클릭 시 이동할 고유 기획전 번호입니다." }
    ],
    "codeSnippet": "// BuyBenefit.tsx - PC 2단 쿠폰 정렬 및 선물하기 분기 렌더링 일부\nconst CouponImg = ({ cardType, benefit, order }) => {\n  return (\n    <section className={styles.wrapBenefit}>\n      {/* 1:1 이미지 표현 및 자동표현 Swiper */}\n    </section>\n  );\n};\n\n// 혜택 리스트 순회 중 CPN/PRC/FCF/NOT 인접 항목 2단 flex 렌더링\nreturn (\n  <section className={styles.wrapFlex} key={`bnft_${idx}`}>\n    <CouponImg benefit={benefitList[idx - 1]} order={idx} />\n    <CouponImg benefit={benefit} order={idx + 1} />\n  </section>\n);",
    "warnings": "1. [어드민 필수/유효성 16대 검증]\n   - **chkVal=0**: 혜택 상세 항목 최소 1개 이상 필수 등록.\n   - **chkVal=2**: 서브 타이틀 필수 입력.\n   - **chkVal=3**: 혜택 쿠폰 연결 필수 (CPN/PRC/FCF).\n   - **chkVal=4**: 추가적립(NOT) 시 추가 적립율(editAccVal) 입력 필수.\n   - **chkVal=5**: 사은품(GFT) 이미지 등록 필수.\n   - **chkVal=6**: 선물포장(PRE) 이미지 등록 필수.\n   - **chkVal=7/8**: 버튼 액션이 URL이동(M)일 경우 URL 주소 및 eTAG 랜딩코드 선택 필수.\n   - **chkVal=9**: 버튼 형태(rdoBtnType)가 사용안함(XX)이 아닐 때 버튼 명칭 필수.\n   - **chkVal=10**: 복수 쿠폰 설정 시 쿠폰받기 버튼 필수.\n   - **chkVal=11**: 쿠폰 이미지 표현(I) 사용 시 쿠폰받기 버튼 필수.\n   - **chkVal=12**: 쿠폰 자동표현(A) 시 단일 쿠폰에 버튼 사용 차단 (버튼 사용 시 저장 거부).\n   - **chkVal=13**: 혜택은 1번부터 빈자리 없이 순서대로 채워야 저장 가능.\n   - **chkVal=16**: 이미지 표현(I) 시 쿠폰 이미지 필수 등록.\n2. [텍스트 배타 등록 규칙] 상단 설명 문구와 하단 설명 문구는 동시에 채울 수 없으며, 중복 기재 시 어드민 저장이 반려됩니다.",
    "imageGuidelines": {
      "pcSize": "가로 1240px × 세로 높이 제한 없음 (쿠폰 이미지 표현 및 사은품 PC 배너)",
      "moSize": "가로 750px × 세로 높이 제한 없음 (1:1 비율 권장)",
      "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
      "maxSize": "파일당 최대 200KB 이하",
      "adminValidation": "사은품(GFT) 및 선물포장(PRE) 등록 시 PC/MO 규격 파일 사이즈가 200KB를 1바이트라도 초과하면 넥사크로 UI 업로드가 강제 반려됩니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 1개 이상의 혜택 등록 필수",
      "tabMax": "최대 5개 (1st ~ 5th 혜택 슬롯 제한)",
      "prodMin": "최소 1개 쿠폰/사은품 매핑",
      "prodMax": "혜택당 최대 150개 쿠폰 등록 제한 (maxBenefitCnt)",
      "adminValidation": "어드민 저장 시 활성화된 혜택 슬롯 개수는 최소 1개에서 최대 5개 범위 내여야 하며, 개별 혜택당 연결할 수 있는 쿠폰 코드는 최대 150개로 제한됩니다. 서브타이틀 50byte, 버튼명 40byte, 하단설명 100byte 한계 초과 시 저장이 불가합니다."
    }
  },
  "M_BENEFIT": {
    "cardKey": "M_BENEFIT",
    "name": "마케팅혜택",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardBenefitM.xfdl (어드민) / MktBenefit.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "고객의 앱 수신 동의나 소셜 가입 및 개인정보 동의 등 마케팅 유도 장치들과 할인쿠폰 발급을 유기적으로 연동하여 마케팅 성과를 촉진하는 마케팅 특화용 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 메인 타이틀, 설명 문구와 함께 Swiper 형태 또는 세로 리스트 형태로 연동된 쿠폰 목록이 노출됩니다. 또한, 하단에는 마케팅 수신동의 및 개인정보 수집동의 체크박스가 배치되며, 동의 도움말 팝업(LfModal)이 제공됩니다. 쿠폰 받기 버튼 클릭 시 로그인 및 동의 완료 상태를 검증한 후 다중 쿠폰 다운로드를 일괄 처리합니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "Color Hex (선택)", "desc": "마케팅 혜택 영역의 배경 컬러 코드입니다.Hex 패턴(#RRGGBB) 검증을 거치며 프론트에서는 8% 투명도로 연하게 적용됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부입니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부입니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부입니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부입니다." },
      { "field": "상단 설명 문구", "id": "BNFT_HEDR_TEXT_VAL", "type": "String (50byte 한도)", "desc": "타이틀 위에 배치할 상단 설명 문구입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "BNFT_TITL", "type": "String (22byte 한도)", "desc": "마케팅 혜택 카드의 메인 타이틀입니다. 한글 기준 최대 11자 제한이 있습니다." },
      { "field": "하단 설명 문구", "id": "BNFT_DSCR", "type": "String (50byte 한도)", "desc": "타이틀 아래에 노출될 하단 설명 문구입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "쿠폰 형태", "id": "CPN_DISP_TYPE_VAL", "type": "Radio (S/V)", "desc": "S: 스와이프 (Swiper 캐러셀 형태 롤링) / V: 리스트 (세로 배열형 나열) 형태로 쿠폰을 렌더링합니다." },
      { "field": "전체 기간 조건", "id": "ALL_PERD_CNDT_USE_YN", "type": "Radio (Y/N)", "desc": "전체 기간 조건 사용 여부를 결정합니다." },
      { "field": "전체 기간 조건 값", "id": "ALL_PERD_CNDT_VAL", "type": "Integer", "desc": "전체 기간 조건 활성화 시 구매이력이 없는 기간 수치(일수/년수 등)를 지정합니다." },
      { "field": "전체 기간 조건 구분", "id": "ALL_PERD_CNDT_TYPE_VAL", "type": "Combo (Y/M/D)", "desc": "전체 기간 조건의 단위(Y: 년, M: 개월, D: 일)를 설정합니다." },
      { "field": "최근 기간 조건", "id": "RCNT_PERD_CNDT_USE_YN", "type": "Radio (Y/N)", "desc": "최근 기간 조건 사용 여부를 결정합니다." },
      { "field": "최근 기간 조건 값", "id": "RCNT_PERD_CNDT_VAL", "type": "Integer", "desc": "최근 기간 조건 활성화 시 구매이력이 없는 최근 기간 수치(일수/년수 등)를 지정합니다." },
      { "field": "최근 기간 조건 구분", "id": "RCNT_PERD_CNDT_TYPE_VAL", "type": "Combo (Y/M/D)", "desc": "최근 기간 조건의 단위(Y: 년, M: 개월, D: 일)를 설정합니다." },
      { "field": "마케팅 정보 수신 동의", "id": "MRKN_RPTN_AGRM_USE_YN", "type": "Radio (Y/N)", "desc": "마케팅 정보 수신 동의 동적 활성화 여부를 결정합니다." },
      { "field": "마케팅동의 기본 체크", "id": "MRKN_RPTN_AGRM_BSCS_CHCH_YN", "type": "Checkbox (Y/N)", "desc": "마케팅동의 UI 노출 시 기본으로 체크 표시를 활성화해 둘 것인지 지정합니다." },
      { "field": "개인정보 수집 동의", "id": "INDV_IFRM_CLCN_AGRM_USE_YN", "type": "Radio (Y/N)", "desc": "개인정보 수집 동의 동적 활성화 여부를 결정합니다." },
      { "field": "개인정보동의 기본 체크", "id": "PRIN_CLCN_AGRM_CHCH_YN", "type": "Checkbox (Y/N)", "desc": "개인정보동의 UI 노출 시 기본으로 체크 표시를 활성화해 둘 것인지 지정합니다." },
      { "field": "쿠폰 받기 버튼", "id": "BTN_STYL_VAL", "type": "Radio (XX/OS/SS)", "desc": "쿠폰 받기 다운로드 버튼 스타일입니다. (XX: 사용안함, OS: White 색상, SS: Black 색상)" },
      { "field": "쿠폰 받기 버튼명", "id": "BTN_TEXT_VAL", "type": "String (30byte 한도)", "desc": "쿠폰 받기 다운로드 버튼 텍스트입니다. 한글 15자 제한이 적용됩니다." },
      { "field": "혜택 보기 버튼", "id": "SCND_BTN_STYL_VAL", "type": "Radio (XX/OS/SS)", "desc": "혜택 보기 보조 이동 버튼 스타일입니다. (XX: 사용안함, OS: White 색상, SS: Black 색상)" },
      { "field": "혜택 보기 버튼명", "id": "SCND_BTN_TEXT_VAL", "type": "String (30byte 한도)", "desc": "혜택 보기 버튼 텍스트입니다. 한글 15자 제한이 적용됩니다." },
      { "field": "혜택 보기 버튼링크", "id": "SCND_BTN_MVMN_URL_VAL", "type": "String (필수)", "desc": "혜택 보기 버튼 클릭 시 이동할 랜딩 PC URL 경로입니다." },
      { "field": "링크 타겟", "id": "SCND_BTN_LINK_TRGE_VAL", "type": "Combo (S/B)", "desc": "S: 현재창 (_self), B: 새창 (_blank) 중에서 링크 오픈 방식을 매핑합니다." },
      { "field": "eTAG 랜딩구분", "id": "SCND_BTN_LINK_DIV_VAL", "type": "Combo (필수)", "desc": "성과 분석 및 유입 로그 추적을 위한 eTAG 분류 코드 매핑값입니다." }
    ],
    "codeSnippet": "// MktBenefit.tsx - Front-end React 동의 여부 유효성 검증 및 일괄 다운로드 결합 핵심 로직 일부\nconst checkAgreement = () => {\n  if (mktCpns.mrknRptnAgrmUseYn === \"Y\" && !mrkncheck.current) {\n    LFAlert.alert(\"마케팅 정보 수신 동의를 해주셔야\\n쿠폰 다운로드 가능합니다.\");\n    return false;\n  }\n  if (mktCpns.indvIfrmClcnAgrmUseYn === \"Y\" && !indvIfrmCheck.current) {\n    LFAlert.alert(\"개인정보 수집 동의를 해주셔야\\n쿠폰 다운로드 가능합니다.\");\n    return false;\n  }\n  return true;\n};\n\nconst handleBnftDown = () => {\n  benefitMultiDown.mutate({ exhbNo, bnftNo, bnftDetlSeq, cardType: template.cardType });\n};",
    "warnings": "1. [설명 문구 상호 배타성] 상단 설명 문구(BNFT_HEDR_TEXT_VAL)와 하단 설명 문구(BNFT_DSCR)는 절대 동시에 등록하여 저장할 수 없습니다. 둘 중 하나라도 입력되면 다른 하나의 칸은 반드시 비워 두어야 유효성 검사를 통과합니다.\n2. [글자 수 바이트 엄격 제한] 메인 타이틀은 최대 22byte, 설명 문구류는 최대 50byte, 버튼 명칭은 최대 30byte로 엄격히 용량 한계가 통제되며 초과 시 어드민단에서 저장이 차단됩니다.\n3. [쿠폰 연동 버튼 필수 규칙] 연동된 쿠폰의 총 갯수가 2개 이상일 경우에는 다운로드 액션을 지원하기 위해 쿠폰 받기 버튼 스타일을 반드시 활성화(OS 또는 SS)하여 버튼 명칭을 기재해야 합니다. 사용안함(XX)으로 설정 시 유효성 경고로 저장이 반려됩니다.\n4. [단일 쿠폰 특수 처리] 연동된 쿠폰이 단 1개일 경우, 쿠폰 받기 버튼은 강제로 사용안함(XX) 비활성화 처리되며, 개별 쿠폰 컴포넌트 내에 있는 개별 다운로드 버튼을 통해 다운로드가 수행됩니다.",
    "imageGuidelines": {
      "pcSize": "해당 없음 (이미지 파일 업로드를 직접 지원하지 않는 컴포넌트)",
      "moSize": "해당 없음",
      "allowTypes": "JPG, JPEG, PNG, GIF",
      "maxSize": "해당 없음",
      "adminValidation": "마케팅 혜택 카드는 이미지를 직접 어드민에 업로드하지 않고 텍스트 타이포그래피와 데이터셋 쿠폰 매핑으로 프리셋 UI를 그리는 모듈입니다. 따라서 이미지 업로드 규칙은 제외됩니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 1개 쿠폰 연동 필수",
      "tabMax": "최대 20개 쿠폰 연동 제한",
      "prodMin": "혜택 조건 체크 시 숫자 기입 필수",
      "prodMax": "쿠폰 연결 최대 20개 매핑 가능 (dsCoupon 바인딩 한계)",
      "adminValidation": "어드민(NBOS) 저장 시 연동된 쿠폰 갯수가 0개일 경우 '혜택 쿠폰을 연결해주세요.' 경고와 함께 저장이 거절됩니다. 또한 전체/최근 기간 조건을 사용(Y)함으로 지정해둔 뒤 조건 수치 값을 비워둘 경우에도 저장 반려 처리가 작동합니다. 쿠폰은 팝업을 통해 한 구좌당 최대 20개까지만 중복 선택하여 연동하는 스크립트 한계가 제공됩니다."
    }
  },
  "ATTENTION": {
    "cardKey": "ATTENTION",
    "name": "유의사항",
    "category": "NAV",
    "sourceFile": "frmPlanCardNotice.xfdl (어드민) / Notice.tsx (프론트)",
    "moduleCode": "MD10",
    "desc": "기획전 하단부에 안정적으로 배치하여, 프로모션 대상 조건, 할인/마일리지 적립 한도 및 유효기간, 구매 취소 및 반품 관련 법적/행정적 유의조항들을 일목요연하게 안내하는 표준 약관 정보 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 기획전 최하단에 배치되는 차분하고 정돈된 텍스트 목록입니다. 웅장한 타이포그래피 요소보다는 가독성을 저해하지 않는 미니멀한 규칙선을 바탕으로, 특수 기호(■, ●, *, -)가 목록의 최전단에 자동 정렬(Bullet padding)되도록 CSS flex-grid가 적용됩니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 상단 Margin 여부" },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 Padding 여부 (기본값 Y)" },
      { "field": "안내문구 작성", "id": "NOTICE_TEXT", "type": "String (RichText)", "desc": "사용자에게 전달할 유의사항 텍스트 본문입니다. HTML 에디터 기능을 통해 볼드, 폰트 컬러, 링크 등의 서식을 부분 지정하여 저장 가능합니다." }
    ],
    "codeSnippet": "// Notice.tsx - Front-end React 유의사항 파서 및 dangerouslySetInnerHTML 매핑 소스\nexport const Notice = ({ templateDetail }) => {\n  if (!templateDetail?.noticeText) return <></>;\n  \n  // XSS 공격 방어용 html sanitize 처리 적용\n  const sanitizedHtml = useMemo(() => {\n    return DOMPurify.sanitize(templateDetail.noticeText, {\n      ALLOWED_TAGS: ['p', 'span', 'strong', 'br', 'ul', 'li', 'a', 'font'],\n      ALLOWED_ATTR: ['href', 'target', 'style', 'color']\n    });\n  }, [templateDetail.noticeText]);\n\n  return (\n    <div className={styles.noticeContainer}>\n      <div\n        className={styles.noticeContent}\n        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}\n      />\n    </div>\n  );\n};",
    "warnings": "1. [용량 및 바이트 검증] 어드민(NBOS) 저장 시 `NOTICE_TEXT` 필드는 **최대 4000byte (한글 2000자)** 제한 조건이 존재합니다. HTML 서식 태그의 길이도 바이트 수에 전부 합산되므로, 에디터 서식을 과도하게 많이 적용할 경우 글자 수가 충분히 남았음에도 저장이 반려될 수 있으니 텍스트 위주 구성을 권장합니다.\n2. [XSS 보안 규정] 사용자 브라우저에 임의의 악성 스크립트가 로드되는 공격을 방지하기 위해 프론트 React 단에서는 반드시 **DOMPurify 등을 경유한 HTML Sanitize 처리**가 필수 적용되어 있어야 합니다.",
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "최소 10자 이상 기입",
      "prodMax": "최대 4000byte (한글 약 2000자 한도, HTML 태그 포함)",
      "adminValidation": "본 유의사항 카드는 기획전 내 상품 등록 및 이미지 업로드 제약을 요구하지 않는 **순수 텍스트 안내 영역**입니다. 어드민(NBOS) 저장 시 본문(`NOTICE_TEXT`) 바이트 길이가 4000byte를 단 1바이트라도 초과할 경우 넥사크로 UI 및 서버 데이터바인더 단에서 SQL 문자열 길이 초과 오류와 함께 저장이 거부됩니다."
    }
  },
  "COUNT": {
    "cardKey": "COUNT",
    "name": "카운트",
    "category": "NAV",
    "sourceFile": "frmPlanCardCountTime.xfdl (어드민) / CountTime.tsx (프론트)",
    "moduleCode": "MD2",
    "desc": "기획전 내에 실시간 디데이(D-Day) 및 시간/분/초 카운트다운 타이머를 구성하여, 타임특가 행사나 쿠폰 소진 임박 등의 마케팅적 긴박감을 조성하는 기능형 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 지정된 종료 일시까지 실시간으로 차감되는 숫자판 위젯입니다. 어드민 스타일 설정에 따라, 일/시/분/초 숫자가 개별 박스(Flipboard 형태) 안에 강조되어 표시되는 **'박스형 레이아웃'**과 심플하게 텍스트로만 흐르는 **'플랫형 레이아웃'**으로 자동 분기됩니다. 타이머 상단에는 기획자가 커스텀 기입한 소제목(TMR_TITL_TEXT)이 표시됩니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 상단 Margin 여부" },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 Padding 여부 (기본값 Y)" },
      { "field": "타이머 상단 문구", "id": "TMR_TITL_TEXT", "type": "String (50byte 한도)", "desc": "카운트다운 숫자 바로 위에 배치할 설명 레이블입니다. (예: '타임특가 종료까지')" },
      { "field": "카운트 시작 일시", "id": "TMR_STRT_DT", "type": "DateTime (필수)", "desc": "카운트다운 노출이 시작되는 일시입니다. (YYYY-MM-DD HH:mm:ss 포맷)" },
      { "field": "카운트 종료 일시", "id": "TMR_END_DT", "type": "DateTime (필수)", "desc": "카운트다운이 00:00:00으로 종료되는 최종 타겟 일시입니다." },
      { "field": "타이머 스타일", "id": "TMR_STYL_DIV_VAL", "type": "Combo (1/2)", "desc": "1: 모던 플립 박스형 / 2: 플랫 텍스트 나열형" },
      { "field": "배경 색상코드", "id": "BKGD_CLR_VAL", "type": "Color Hex", "desc": "컴포넌트 배경 영역의 Hex 컬러 코드 값 (예: #000000)" },
      { "field": "숫자색상코드", "id": "TMR_CLR_VAL", "type": "Color Hex", "desc": "타이머 숫자 및 텍스트의 Hex 컬러 코드 값 (예: #ffffff)" }
    ],
    "codeSnippet": "// CountTime.tsx - Front-end React 정밀 서버시간 동기화 카운트다운 컴포넌트 일부\nexport const CountTime = ({ templateDetail }) => {\n  const [remainTime, setRemainTime] = useState({ d: 0, h: 0, m: 0, s: 0 });\n  const timerRef = useRef<NodeJS.Timeout>();\n\n  useEffect(() => {\n    // 1. 디바이스 로컬 조작 시간을 방어하기 위한 API 서버 타임 획득\n    fetchServerTime().then((serverTime) => {\n      const targetTime = new Date(templateDetail.tmrEndDt).getTime();\n      let diff = Math.max(0, targetTime - serverTime);\n\n      timerRef.current = setInterval(() => {\n        diff = Math.max(0, diff - 1000);\n        if (diff <= 0) {\n          clearInterval(timerRef.current);\n          // 타임아웃 이벤트 콜백 실행 (기획전 영역 비활성화/노출 제외)\n          if (templateDetail.onTimeout) templateDetail.onTimeout();\n        }\n\n        const d = Math.floor(diff / (1000 * 60 * 60 * 24));\n        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));\n        const s = Math.floor((diff % (1000 * 60)) / 1000);\n        setRemainTime({ d, h, m, s });\n      }, 1000);\n    });\n    return () => clearInterval(timerRef.current);\n  }, [templateDetail.tmrEndDt]);\n\n  return (\n    <div style={{ backgroundColor: templateDetail.bkgdClr }}>\n      <FlipTimer remain={remainTime} title={templateDetail.tmrTitlText} color={templateDetail.tmrClr} />\n    </div>\n  );\n};",
    "warnings": "1. [정밀 시각 D-Day 동기성] 기획전 특가 유입 유도를 위한 컴퓨터 시계 수정을 방어하기 위해, 디바이스의 로컬 시간 new Date()를 배제하고 API 서버 응답 시각 동기화를 활용하여 가상 틱을 구동하도록 프론트 설계가 유지되어야 합니다.\n2. [날짜 논리 오류 예방] 시작 일시가 종료 일시보다 미래일 경우 저장 유효성 검사 규칙에 의해 저장이 반려되며 프론트 렌더링 시 강제로 00:00:00 종료 포맷으로 강제 차단됩니다.",
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "최소 1자 이상 기입",
      "prodMax": "최대 50byte (한글 약 25자 한도, 소제목 명칭에 적용)",
      "adminValidation": "본 카드는 상품 전시나 직접적인 이미지 업로드를 요구하지 않는 기능형 순수 정보 컴포넌트입니다. 어드민(NBOS) 저장 시 시작 일시(TMR_STRT_DT)가 종료 일시(TMR_END_DT)보다 1초라도 미래인 논리적 오류가 감지되면 저장 유효성 검증 단에서 차단 메시지와 함께 저장이 거부됩니다."
    }
  },
  "P_BENEFIT": {
    "cardKey": "P_BENEFIT",
    "name": "결제혜택",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardBenefitP.xfdl (어드민) / PayBenefit.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "기획전 상단에 아코디언 토글 형태의 접고 펼쳐지는 헤더와 서브타이틀, 텍스트 상세설명 및 이미지 배너 영역을 제공하며, 하단에는 어두운 테마 배경 속에서 실물 카드사 혜택(카드사 플레이트 이미지 자동 호출) 및 카카오페이 등 간편결제사 혜택 카드가 Swiper 슬라이드 캐러셀 형태로 롤링 전시되는 고기능 복합 프로모션 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상단의 '결제 혜택' 헤더를 누르면 우측 화살표 표시가 ∧/∨ 형태로 반전되며 하단의 기획전 소개 및 수동 이미지 배너 영역(IMG AREA)이 부드럽게 슬라이딩 개폐됩니다. 그 바로 아래에는 어두운 다크그레이 배경 프레임이 깔리며, 신용카드사 실물 이미지(국민/현대/신한 등)가 세 장 나란히 '자동 호출' 형태로 노출되는 슬라이드와, 카카오페이 등 노란색 브랜드 바 및 '1만원 즉시할인' 텍스트 뱃지, 개별 유의사항 안내 문구가 나열되는 슬라이드가 Swiper 페이지네이션 도트와 함께 실시간 가로 롤링 캐러셀로 렌더링됩니다.",
    "backendSettings": [
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 Padding 여부를 결정합니다. 기본값 Y." },
      { "field": "서브타이틀", "id": "TMR_SUB_TITL_TEXT", "type": "String (50byte 한도)", "desc": "본문 최상단에 강조될 결제혜택 안내 소제목입니다. (예: '5월의 결제혜택')" },
      { "field": "안내문구 작성", "id": "NOTICE_TEXT", "type": "String (RichText)", "desc": "사용자에게 전달할 결제혜택 텍스트 상세 본문입니다. HTML 에디터 서식을 부분 지원합니다." },
      { "field": "PC 배너 이미지", "id": "PC_IMG_PATH_NM", "type": "File (1240px 권장)", "desc": "기획전 본문 상세 영역에 등록될 수동 PC 배너 이미지 파일입니다." },
      { "field": "모바일 배너 이미지", "id": "MOBI_IMG_PATH_NM", "type": "File (750px 권장)", "desc": "기획전 본문 상세 영역에 등록될 수동 모바일 배너 이미지 파일입니다." },
      { "field": "제휴사 혜택 데이터", "id": "dsCardDetail", "type": "DataSet", "desc": "카드사 자동 이미지 매핑 정보, 즉시/청구 할인율, 간편결제 뱃지 텍스트, 개별 유의사항 목록을 적재합니다." }
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
  },
  "SEARCH": {
    "cardKey": "SEARCH",
    "name": "검색창",
    "category": "NAV",
    "sourceFile": "frmPlanCardSearch.xfdl (어드민) / SearchInput.tsx + PlanningSearch/index.tsx (프론트)",
    "moduleCode": "MD10",
    "desc": "기획전 내부에서 키워드를 직접 입력하여 원하는 기획전을 즉시 조회할 수 있는 인라인 검색 인풋 컴포넌트입니다. 추천 해시태그를 클릭하면 해당 키워드가 자동 입력되어 검색이 실행됩니다.",
    "layoutDescription": "PC·모바일 공통으로 '진행 중인 기획전' 타이틀(h2) 아래에 배치됩니다. 입력창은 테두리 없이 하단에 2px solid 검정 구분선만 긋는 언더라인 방식이 특징이며, 우측에 SVG 돋보기 아이콘 버튼이 고정됩니다. 입력 중에는 X버튼(지우기)이 돋보기 좌측에 추가로 노출됩니다. 하단에는 어드민에서 등록한 추천 태그가 '#키워드' 형식으로 가로 스크롤 나열됩니다. 검색 영역 전체는 scroll sticky로 상단 고정됩니다(z-index: 6).",
    "backendSettings": [
      { "field": "추천 태그 (키워드)", "id": "RECOMMENDED_TAGS", "type": "String (선택, 콤마 구분)", "desc": "검색창 하단에 노출될 추천 검색 해시태그를 콤마(,)로 구분하여 등록합니다. 등록된 태그는 '#키워드' 형식으로 가로 스크롤 나열되며, 클릭 시 해당 키워드가 자동 검색됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 상단 Margin 사용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 Padding 사용 여부를 설정합니다. (기본값 Y)" }
    ],
    "codeSnippet": "// SearchInput.tsx - Front-end React 검색 인풋 + 추천 키워드 렌더링 핵심 로직\nexport default function SearchInput({ value, onChange, onSearchSubmit, onKeywordSelect, inputRef, contentRef }) {\n  const { data: keywordData } = useFetchEventKeyword({ options: { staleTime: 1000 * 60 * 2 } });\n\n  const handleKeyPress = (e) => {\n    if (e.key === 'Enter') { e.preventDefault(); onSearchSubmit(); }\n  };\n\n  return (\n    <div className={styles.searchArea} ref={contentRef}>\n      <div className={styles.searchBox}>\n        {/* 언더라인 border-bottom: 2px solid $black 구분선 방식의 입력창 */}\n        <input type=\"text\" enterKeyHint=\"search\" ref={inputRef}\n          value={value} autoComplete=\"off\"\n          placeholder=\"기획전을 검색해 보세요\"\n          onChange={(e) => onChange(e.target.value)}\n          onKeyPress={handleKeyPress} />\n        {/* 입력값이 있을 때만 X 지우기 버튼 표시 */}\n        {value !== '' && (\n          <button type=\"button\" className={styles.iconDelSearch}\n            onClick={() => { onChange(''); inputRef?.current?.focus(); }}>\n            <span className=\"blind\">검색어 지우기</span>\n          </button>\n        )}\n        {/* 돋보기 아이콘 버튼 (SVG 이미지 방식) */}\n        <button type=\"button\" className={styles.btnSearch}\n          onClick={() => onSearchSubmit()}>\n          <span className=\"blind\">검색</span>\n        </button>\n      </div>\n      {/* 추천 키워드 영역: API 미등록 시 미노출 */}\n      {keywordData?.body?.length > 0 && (\n        <div className={styles.keywordList}>\n          {keywordData.body.map((kw, i) => (\n            <span key={kw.keyword + i} className={styles.keyword}\n              onClick={() => onKeywordSelect(kw)}>#{kw.keyword}</span>\n          ))}\n        </div>\n      )}\n    </div>\n  );\n}",
    "warnings": "1. [엔터 이벤트 처리] 입력창에서 Enter 키 입력 시 onKeyPress 핸들러를 통해 검색이 실행됩니다. 검색어가 빈 문자열일 경우 '검색어를 입력해주세요.' 알럿이 노출되며 입력창에 포커스가 강제 이동합니다.\n2. [X 지우기 버튼 조건부 노출] 입력된 검색어가 존재할 때만 지우기(X) 버튼이 노출됩니다. 클릭 시 입력값이 초기화되고 입력창에 포커스가 유지됩니다.\n3. [추천 키워드 API 연동 필수] 추천 태그 데이터는 useFetchEventKeyword 훅을 통해 API에서 비동기 조회됩니다. 어드민에서 태그를 등록하지 않으면 키워드 영역 자체가 렌더링되지 않으며, staleTime(2분) 기반 캐싱이 적용됩니다.\n4. [스티키 고정 동작] 검색 영역(searchArea)은 z-index: 6이 적용되어 스크롤 시 화면 상단에 고정(sticky)되므로, 상단 컴포넌트와의 z-index 충돌 여부를 반드시 확인해야 합니다.\n5. [eTAG 로깅] 검색 실행 및 추천 키워드 선택 이벤트는 각각 별도 eTAG(E093, E223)로 로깅되므로 마케팅 GA 분석과의 연동 시 코드 충돌이 없는지 사전에 검증해야 합니다.",
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "추천 태그 최소 0개 (미등록 시 태그 영역 자체 미노출)",
      "prodMax": "추천 태그 최대 제한 없음 (가로 스크롤로 처리)",
      "adminValidation": "검색창 카드는 상품 직접 전시 및 이미지 업로드 기능이 없는 순수 기능형 NAV 컴포넌트입니다. 별도 필수 등록 항목이 없으므로 어드민(NBOS) 저장 시 특수 Validation 차단 조건은 존재하지 않습니다. 단, 추천 태그(RECOMMENDED_TAGS)를 등록할 경우 실제 기획전 검색 API와의 키워드 매핑이 정상적으로 이루어졌는지 QA 검수 후 기획전을 발행해야 합니다."
    }
  },
  "TILE_BANNER": {
    "cardKey": "TILE_BANNER",
    "name": "타일배너",
    "category": "BANNER",
    "sourceFile": "frmPlanCardTileBanner.xfdl (어드민) / TileBanner.tsx + TileBannerItem.tsx (프론트)",
    "moduleCode": "MD12",
    "desc": "기획전 본문에서 다양한 테마와 카테고리를 바둑판 형태로 유연하게 배치하여 시각적 흥미와 숏 배너의 역할을 충실히 수행하는 프리미엄 그리드형 배너 카드입니다.",
    "layoutDescription": "원형(Circle) 및 사각형(Square)의 두 가지 기본 형태를 지원하며, 어드민 설정에 따라 '3단 스와이프(9개 단위 SwiperSlide 구성)', '2단 기본 리스트(PC 2단/MO 2단)', '스와이프(3단 슬라이드 구성)' 총 3가지 레이아웃 유형으로 다채롭게 전시됩니다. 개별 타일은 링크 랜딩 정보, 뱃지(텍스트 뱃지, 이미지 뱃지) 오버레이를 유기적으로 포함할 수 있습니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "Color Hex (선택)", "desc": "배경 영역의 Hex 컬러 코드 값을 지정합니다. (예: #757575)" },
      { "field": "타일 개수", "id": "editTileNum", "type": "Integer (2~24개)", "desc": "기획전에 등록하여 전시할 전체 타일 배너의 개수를 등록합니다." },
      { "field": "레이아웃", "id": "radioLayout", "type": "Radio (B/T/S)", "desc": "B: 3단 스와이프 (9개 단위 3x3 캐러셀) / T: 2단 리스트 (기본 그리드형) / S: 스와이프 (3단 가로 슬라이더) 중 선택합니다." },
      { "field": "타일 형태", "id": "radioTileType", "type": "Radio (2/3)", "desc": "2: 원형(border-radius 50%) / 3: 사각형(모바일 32px, PC 72px 코너 둥글기 적용) 중 선택합니다." },
      { "field": "뱃지 설정", "id": "radioBadge", "type": "Radio (N/T/I)", "desc": "N: 사용안함 / T: 텍스트 뱃지 (텍스트 기입형) / I: 이미지 뱃지 (뱃지 이미지 업로드형) 중 선택합니다." },
      { "field": "뱃지 텍스트", "id": "BDG_TEXT", "type": "String (20byte 한도)", "desc": "텍스트 뱃지(T) 선택 시 타일 상단에 표기될 뱃지 문구입니다." },
      { "field": "타일 텍스트", "id": "BNR_DETL_TITL_TEXT", "type": "String (20byte 한도)", "desc": "타일 배너 하단에 노출될 명칭 텍스트입니다. 최대 20byte를 초과할 수 없습니다." },
      { "field": "타일 링크", "id": "LINK_URL_VAL", "type": "String (선택)", "desc": "개별 타일을 클릭했을 때 강제 이동할 랜딩 PC URL 주소입니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 상단 여백 유무를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 여백 유무를 설정합니다. 기본값 Y." }
    ],
    "codeSnippet": "// frmPlanCardTileBanner.xfdl.js - 텍스트 입력 시 실시간 바이트 제한 스크립트\nthis.limitInputTo20Bytes = function(obj:nexacro.Edit, e:nexacro.KeyEventInfo) {\n    var textVal = obj.value;\n    var byteCount = this.asciiByteCount(textVal);\n    \n    // 타일 배너 명칭 및 텍스트 뱃지는 최대 20byte (한글 10자, 영문 20자) 한도\n    if (byteCount > 20) {\n        this.gfnMessage(\"타일 텍스트 입력값은 최대 20byte(한글 기준 10자, 영문/기호 기준 20자)를 초과할 수 없습니다.\", \"A\");\n        obj.set_value(this.asciiByteSubstring(textVal, 20));\n    }\n};",
    "warnings": "1. [텍스트 자수 제한 엄격] 개별 타일의 텍스트 및 텍스트 뱃지는 **최대 20byte (한글 10자, 영문 20자)** 한도 제약이 있어, 입력 시 즉각 차단 경고음과 함께 초과 텍스트가 강제 잘림 처리됩니다.\n2. [홀수 개수 등록 시 빈 타일 채움] '2단 리스트(T2/T3)' 레이아웃 적용 시, 등록한 타일의 개수가 홀수일 경우 UI 레이아웃 무너짐을 방지하기 위해 프론트 컴포넌트 내부에서 **자동으로 1개의 빈 타일 구좌(emptyItem)**를 생성하여 짝수를 맞추어 줍니다.\n3. [랜덤 정렬 설정 주의] 랜덤 정렬 여부(RNDM_SORT_YN)가 'Y'로 설정되어 있으면 프론트 Swiper 렌더링 시 타일들의 순서가 페이지 로드 시마다 실시간으로 무작위 셔플되므로 순서 고정이 필요한 경우 'N'으로 지정하십시오.",
    "imageGuidelines": {
      "pcSize": "가로 280px × 세로 280px 권장 (1:1 정비율)",
      "moSize": "가로 100px × 세로 100px 권장 (1:1 정비율) *원형/사각형 크롭 처리가 자동 수행됨",
      "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
      "maxSize": "파일당 최대 200KB 이하",
      "adminValidation": "타일 배너 이미지는 넥사크로 UI 파일업로드 핸들러에서 **200KB를 1바이트라도 초과 시 업로드를 즉시 반려**하고 에러를 호출합니다. 업로드 전 사전에 이미지를 리사이징하는 것이 필수입니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 2개 이상",
      "tabMax": "최대 24개 이하 (2단 리스트 및 슬라이더 스크롤 지원 한도)",
      "prodMin": "최소 1자 이상 기입",
      "prodMax": "최대 20byte (한글 10자 / 영문 20자) *타일 텍스트 및 텍스트 뱃지",
      "adminValidation": "타일의 완성도와 심미성을 위해 **최소 2개 이상의 타일을 무조건 등록**하여 저장해야 합니다. 타일을 1개만 매핑한 상태에서는 저장 유효성 검증을 통과하지 못해 기획전 발행이 반려되며, 최대 등록 한도는 24개로 고정되어 있습니다."
    }
  },
  "ATTENDANCE": {
    "cardKey": "ATTENDANCE",
    "name": "출석체크",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardStamp.xfdl (어드민) / AttendanceStamp.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "기획전 본문에서 일 단위로 출석체크 스탬프를 찍어 브랜드 방문 리텐션을 확보하고 구매 혜택 및 마일리지를 지급하는 마케팅 특화용 구좌입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 달력형 7일/14일/30일 등의 스탬프 도장판을 노출합니다. 사용자가 '출석 도장 찍기' 버튼 클릭 시 실시간 API 통신을 통해 해당 일자에 완료 도장(Checked)이 날인되며, 누적 출석 일수에 따라 혜택 달성률 게이지 바(Progress bar)가 실시간으로 차오릅니다.",
    "backendSettings": [
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 Padding 여부를 결정합니다. 기본값 Y." },
      { "field": "캠페인 고유번호", "id": "STMP_CAMPAIGN_NO", "type": "Integer (필수)", "desc": "어드민 프로모션 관리에서 등록된 연동 출석체크 캠페인 고유 식별 번호입니다." },
      { "field": "스탬프 전체 일수", "id": "STMP_TOT_DAYS", "type": "Combo (5/7/10/14/30일)", "desc": "출석체크를 진행할 총 일수입니다. 이에 따라 프론트 도장판 개수가 반응형 그리드로 동적 매핑됩니다." },
      { "field": "보너스 혜택 조건", "id": "dsStampReward", "type": "DataSet", "desc": "특정 일차(예: 3일차, 5일차, 7일 완주) 달성 시 자동으로 마일리지나 쿠폰을 지급하기 위한 구간별 적립액 설정 데이터셋입니다." },
      { "field": "배경 색상코드", "id": "BKGD_CLR_VAL", "type": "Color Hex (선택)", "desc": "컴포넌트 배경 영역의 Hex 컬러 코드 값 (예: #ffffff)" }
    ],
    "codeSnippet": "// frmPlanCardStamp.xfdl.js - 기획전 전시 기간과 출석체크 캠페인 기간의 불일치를 방어하기 위한 정밀 유효성 스크립트 일부\nthis.fnStampPeriodValidator = function() {\n    var exhbStart = this.dsExhbInfo.getColumn(0, \"STRT_DT\");\n    var exhbEnd = this.dsExhbInfo.getColumn(0, \"END_DT\");\n    var stampStart = this.dsStampCampaign.getColumn(0, \"STRT_DT\");\n    var stampEnd = this.dsStampCampaign.getColumn(0, \"END_DT\");\n    \n    if (stampStart > exhbStart || stampEnd < exhbEnd) {\n        this.gfnMessage(\"출석체크 캠페인 기간은 기획전 전체 전시 기간을 포함(시작일은 같거나 이전, 종료일은 같거나 이후)해야 안전하게 동작합니다.\", \"A\");\n        return false;\n    }\n    return true;\n};",
    "warnings": "1. [캠페인 기간 종속성] 출석체크 캠페인 기간이 기획전 전시 기간보다 짧을 경우, 고객이 기획전에 진입했으나 출석체크 API가 조기 차단되어 프론트 템플릿 오류가 발생합니다. 반드시 캠페인 운영 기간을 기획전 전시 기간보다 여유 있게 설정하십시오.\n2. [어뷰징 및 동시성 락] 기획전 선착순 및 완주 혜택 마일리지 지급 시 매크로를 통한 다중 호출 공격을 차단하기 위해, 프론트 다운로드 액션 시 트랜잭션 락(isSubmitting 상태 분기)을 엄격히 적용해야 합니다.",
    "imageGuidelines": {
      "pcSize": "가로 120px × 세로 120px 권장 (커스텀 스탬프 도장 이미지 교체 시 적용)",
      "moSize": "가로 80px × 세로 80px 권장 (1:1 비율)",
      "allowTypes": "PNG, SVG (투명 배경 필수)",
      "maxSize": "파일당 최대 100KB 이하",
      "adminValidation": "기본적으로 LFmall의 고급 시그니처 완료 도장 디자인이 자동 적용되므로 이미지 등록은 선택사항(Optional)입니다. 교체 등록 시 용량이 100KB를 넘거나 투명 배경이 아닌 경우 디자인 정렬이 깨져 업로드가 제한됩니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 5일 구성",
      "tabMax": "최대 30일 구성 (5/7/10/14/30일 분기)",
      "prodMin": "보너스 리워드 최소 1구간 이상 설정 필수",
      "prodMax": "보너스 리워드 최대 3구간 이하 설정 제약",
      "adminValidation": "스탬프 전체 일수는 마케팅 성격에 따라 5일, 7일, 10일, 14일, 30일 중 콤보박스 형태로만 조절하여 세팅이 가능합니다. 어드민(NBOS) 저장 시 구간별 보너스 혜택 지급 설정(dsStampReward)이 단 1구간도 등록되지 않았거나 3구간을 초과하면 Validation 위반 에러와 함께 저장이 거부됩니다."
    }
  },
  "H_DEAL": {
    "cardKey": "H_DEAL",
    "name": "핫딜",
    "category": "PROD",
    "sourceFile": "frmPlanCardHotDeal.xfdl (어드민) / HotDealCard.tsx (프론트)",
    "moduleCode": "MD6",
    "desc": "기획전 본문 내에서 파격적인 단독 특가를 시간 제한(카운트다운) 및 한정 수량 진척도 바(Progress Bar) 요소와 결합하여 강력한 즉각 구매 결정을 유도해내는 최고 전환율의 핵심 프로모션 상품 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 대표 패션 상품의 대형 썸네일과 실시간 째깍이는 카운트다운 타이머가 코랄 색상으로 시각화 노출됩니다. 또한 실시간으로 구매 진척도(판매 비율 %)를 차오르는 오렌지-골드 그라데이션 게이지 바로 보여주어 한정 수량 긴박감을 유도하는 프리미엄 레이아웃입니다. (PC 환경에서는 좌측 이미지 - 우측 상품 정보의 쾌적한 가로형 2분할 플렉스 배치, 모바일 환경에서는 가독성을 확보하기 위해 수직으로 적층되는 1열 풀 레이아웃으로 부드럽게 반응형 자동 전환됩니다.)",
    "backendSettings": [
      { "field": "핫딜 상품 매핑 번호", "id": "HOTDEAL_PROD_NO", "type": "String (필수)", "desc": "넥사크로 상품 마스터 DB에서 직접 연계할 특가 상품의 고유 13자리 식별 번호입니다." },
      { "field": "할인 혜택 매핑코드", "id": "BENEFIT_CD", "type": "CODE (필수)", "desc": "해당 상품에 매핑되어 가격 줄긋기(원래 가격)와 실시간 할인가를 동적으로 노출할 혜택 코드입니다." },
      { "field": "전시 시작 일시", "id": "STRT_DT", "type": "DateTime (필수)", "desc": "핫딜 전시 및 타이머가 작동하기 시작할 정확한 날짜와 시간(초 단위 YYYYMMDDHHMMSS) 설정입니다." },
      { "field": "전시 종료 일시", "id": "END_DT", "type": "DateTime (필수)", "desc": "핫딜 전시와 타이머가 강제 종료되고 일반 가격으로 자동 환원되거나 솔드아웃 딤 처리될 종료 시점 설정입니다." },
      { "field": "전체 여백 설정", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "기획전 레이아웃 내에서 핫딜 구좌 상하단에 외부 여백(margin)을 유연하게 줄 것인지 여부입니다." },
      { "field": "배경 색상 코드", "id": "BKGD_CLR_VAL", "type": "Color Hex (선택)", "desc": "핫딜 카드 뒷배경을 우아하게 채울 HSL 테마 맞춤 컬러 코드 설정입니다. 기본값은 투명(Transparent)입니다." }
    ],
    "codeSnippet": "// frmPlanCardHotDeal.xfdl.js - 핫딜 등록 시 전시 기간 정밀 시간 유효성 검사 스크립트\nthis.fnHotDealPeriodValidator = function() {\n    var startDt = this.dsHotDealInfo.getColumn(0, \"STRT_DT\");\n    var endDt = this.dsHotDealInfo.getColumn(0, \"END_DT\");\n    \n    // 시작 시간이 종료 시간보다 미래이거나 동일할 때 저장을 반려하는 정밀 안전 장치\n    if (startDt >= endDt) {\n        this.gfnMessage(\"핫딜 시작 시간은 종료 시간보다 미래이거나 같을 수 없습니다. 정확한 전시 기간을 입력해주세요.\", \"A\");\n        return false;\n    }\n    return true;\n};",
    "warnings": "1. [시간 유효성 엄격] 핫딜의 전시 시작 시간은 반드시 종료 시간보다 정밀히 이전이어야 하며, 위반 시 넥사크로 어드민 폼 검증 스크립트단에서 저장이 반려됩니다.\n2. [서버 기준 시간 동기화] 클라이언트-서버 간 시간차로 인해 종료 타이머 오차가 유발되는 사고를 사전에 차단하기 위해, 브라우저 로컬 PC 시스템 시계를 절대 직접 참조하지 않고 넥사크로 공통 백엔드 API 서버의 UTC 기준 라이브 서버 타임을 호출하여 카운트다운을 표시하도록 코딩되어야 합니다.\n3. [품절 및 종료 딤 처리] 준비된 한정 수량 소진 완료 시 즉각적으로 'SOLD OUT' 텍스트와 함께 검은색 반투명 딤드(Opacity 60%) 레이어가 상품 이미지를 뒤덮어야 하며, 핫딜 기간 종료 시 화면에서 컴포넌트가 자동으로 보이지 않도록 동적 렌더링 스위치가 제어됩니다.",
    "imageGuidelines": {
      "pcSize": "해당 없음",
      "moSize": "해당 없음",
      "allowTypes": "해당 없음",
      "maxSize": "해당 없음",
      "adminValidation": "핫딜 카드는 별도의 이미지 업로드 기능을 제공하지 않으며, 등록한 상품 코드를 기반으로 실물 상품 이미지 데이터를 시스템에서 자동으로 연계하여 노출합니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 2개",
      "tabMax": "최대 8개",
      "prodMin": "최소 4개",
      "prodMax": "최대 60개",
      "adminValidation": "어드민(NBOS) 저장 시 각 탭별로 매핑된 상품 개수가 최소 4개 미만이거나 최대 60개를 초과할 경우 Validation 오류 메시지와 함께 저장이 자동으로 반려됩니다. 탭은 최소 2개에서 최대 8개까지 생성 가능합니다."
    }
  },
  "REVIEW": {
    "cardKey": "REVIEW",
    "name": "상품리뷰",
    "category": "PROD",
    "sourceFile": "frmPlanCardReview.xfdl (어드민) / ReviewSwiper.tsx (프론트)",
    "moduleCode": "MD7",
    "desc": "기획전 본문 내에 브랜드 리뷰 또는 스태프들의 실착 후기를 이미지 및 텍스트와 함께 노출하여, 실구매자의 생생한 피드백을 통해 기획전의 쇼핑 신뢰감과 구매 전환율을 격상시키는 수동 등록형 상품리뷰 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 별점 표현 여부, 인스타 디자인 적용 여부에 따라 디자인이 변경되어 렌더링됩니다. 레이아웃 옵션에 따라 스와이프 캐러셀(S) 또는 리스트 격자(L) 형태로 표현됩니다. PC 화면에서는 한 화면에 3열(3개)로 정렬 노출되며, 모바일 화면에서는 한 화면에 1열(1개)로 노출됩니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (Hex Color)", "desc": "리뷰 카드의 배경색을 Hex 코드 형태로 입력합니다. 입력한 배경색의 8% 투명도로 연하게 표현됩니다." },
      { "field": "레이아웃", "id": "BLBR_LYOT_VAL", "type": "Radio (S/L)", "desc": "S: 스와이프 (Swiper 슬라이드 회전형), L: 리스트 (격자 나열형) 형태로 리뷰 노출 방식을 선택합니다." },
      { "field": "인스타 디자인", "id": "ISTG_DSGN_YN", "type": "Radio (Y/N)", "desc": "Y 설정 시 인스타그램 피드 형태의 둥근 라운드 그리드 이미지 스타일로 렌더링을 전환합니다." },
      { "field": "별점 표현", "id": "LIKE_POINT_YN", "type": "Radio (Y/N)", "desc": "Y 설정 시 개별 리뷰 영역에 5점 만점의 별점이 표시되며, 어드민 개별 리뷰 등록 시에도 별점 점수 입력이 필수가 됩니다." },
      { "field": "리뷰 개수", "id": "editAttenCheckNum", "type": "Integer (2~5개)", "desc": "어드민 상단 스피너(+, -)와 적용 버튼을 통해 등록할 개별 리뷰 구역의 총 개수(최소 2개 ~ 최대 5개)를 조절합니다." },
      { "field": "상단 설명 문구 / 하단 설명 문구", "id": "BLBR_HEDR_TEXT / BLBR_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 상/하단에 노출할 보조 설명 텍스트입니다. 서로 배타적인 속성으로 동시 입력이 불가합니다." },
      { "field": "타이틀", "id": "BLBR_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "상품리뷰 컴포넌트의 메인 타이틀입니다. 최대 2줄(줄바꿈 \\n)까지 입력할 수 있습니다." },
      { "field": "PC 이미지 / MO 이미지 (선택)", "id": "PC_IMG_PATH_NM / MOBI_IMG_PATH_NM", "type": "File (배경 배너용)", "desc": "리뷰 카드 상단 배경 영역 등에 선택적으로 올리는 카드 마스터 배경용 이미지입니다. (최대 200KB 제한)" },
      { "field": "[개별] 브랜드/상품", "id": "BRAND_NM", "type": "String (40byte 한도, 필수)", "desc": "개별 리뷰 대상 상품의 브랜드명 또는 상품 식별 명칭입니다." },
      { "field": "[개별] 리뷰 이미지 (PC / MO)", "id": "PC_IMG_PATH_NM / MOBI_IMG_PATH_NM", "type": "Files (각 200KB 이하, 필수)", "desc": "개별 리뷰 항목마다 PC/모바일 사용자 화면에 전시될 착샷/실물 사진 이미지입니다." },
      { "field": "[개별] 리뷰 제목", "id": "BLBR_DETL_TITL", "type": "String (50byte 한도)", "desc": "개별 리뷰의 한 줄 머리말 요약 제목입니다." },
      { "field": "[개별] 리뷰 내용", "id": "BLBR_DETL_CONTENTS_VAL", "type": "String (200byte 한도, 필수)", "desc": "상세한 실제 구매 및 착용 코멘트 본문입니다." },
      { "field": "[개별] 별점", "id": "LIKE_POINT_VAL", "type": "Integer (최대 5점)", "desc": "별점 표현을 활성화(Y)한 경우 필수 입력 사항이 되며, 5점 이하의 점수를 숫자로 입력합니다." },
      { "field": "[개별] 고객 정보", "id": "WRTR_IFRM_VAL", "type": "String (50byte 한도)", "desc": "리뷰어의 신체 정보(예: 175cm) 또는 작성자 닉네임 문자열입니다." },
      { "field": "[개별] 버튼 링크", "id": "LINK_URL_ADR / LINK_TRGE_VAL", "type": "String & Combo", "desc": "리뷰 터치 시 바로 이동할 타겟 상세페이지 랜딩 PC URL 경로 및 새창/현재창 링크 타겟 설정입니다." }
    ],
    "codeSnippet": "// frmPlanCardReview.xfdl.js - 상품리뷰 어드민 저장 시 유효성 검증 로직 일부\nthis.fn_Validation = function(msgId,msgVal){\n    if (!msgVal) {\n        this.gfnMessage(\"취소되었습니다.\",\"A\",\"\",\"\");\n        return;\n    }\n    var colorCode = this.editBtnText.value;\n    var colorCodePattern = /^#[0-9A-Fa-f]{6,8}$/;\n    if(colorCode && !colorCodePattern.test(colorCode)){\n        this.gfnAlert(\"msg.err.validator\", [\"색상코드를 확인해주세요.\"]);\n        return false;\n    }\n    if(this.gfnIsNull(this.radioLayout.value)||this.gfnIsNull(this.radioInstar.value)||this.gfnIsNull(this.radioStarPoint.value)){\n        this.gfnMessage(\"리뷰 내용을 입력해주세요.\",\"A\",\"\",\"\");\n        return;\n    }\n    for(var i=0;i<this.editAttenCheckNum.value;i++){\n        if(this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.textHeadLine.value\"))\n        ||this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.textBottomDesc.value\"))\n        ||eval(\"this.divDay\"+(i+1)+\".form.textHeadLine.value\").trim()===\"\"\n        ||eval(\"this.divDay\"+(i+1)+\".form.textBottomDesc.value\").trim()===\"\"){\n            this.gfnMessage(\"리뷰 내용을 입력해주세요.\",\"A\",\"\",\"\");\n            return;\n        }\n        if(this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.editPCImg\"+(i+1)+\".value\"))\n        ||this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.editMOImg\"+(i+1)+\".value\"))){\n            this.gfnMessage(\"리뷰 이미지를 등록해주세요.\",\"A\",\"\",\"\");\n            return;\n        }\n        if(this.radioStarPoint.value==\"Y\"&&this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.texStarPoint.value\"))){\n            this.gfnMessage(\"별점을 입력해주세요.\",\"A\",\"\",\"\");\n            return;\n        }\n        if(eval(\"this.divDay\"+(i+1)+\".form.texStarPoint.value\")>5){\n            this.gfnMessage(\"별점의 값이 5를 초과했습니다.\",\"A\",\"\",\"\");\n            return;\n        }\n    }\n    if(this.textHeadDesc.value&&this.textBottomDesc.value){\n        this.gfnMessage(\"상단 설명 문구, 하단 설명 문구 중 하나만 입력하세요.\",\"A\",\"\",\"\");\n        return;\n    }\n    this.fn_Colset();\n};",
    "warnings": "1. [설명 문구 상호 배타성] 상단 설명 문구(BLBR_HEDR_TEXT)와 하단 설명 문구(BLBR_SUB_TEXT)는 시스템 제약 상 절대 동시에 입력하여 저장할 수 없으며, 하나가 채워지면 다른 하나는 무조건 빈 칸이어야 에러를 막을 수 있습니다.\n2. [용량 초과 차단 주의] 업로드하는 모든 이미지(개별 리뷰 이미지 및 카드 메인 배너 이미지)는 파일당 최대 200KB 이하 제한 규격이 적용되어 초과 시 넥사크로 UI 스크립트단에서 업로드가 원천 차단됩니다.\n3. [별점 연동 및 유효성] '별점 표현' 옵션을 사용함(Y)으로 체크한 경우, 등록하는 모든 리뷰 구좌(1~5번)의 별점 점수가 필수로 채워져야 하고 5점을 초과하는 점수를 입력하여 저장하면 에러 팝업과 함께 저장이 자동으로 반려됩니다.\n4. [글자 수 바이트 제한] 브랜드/상품명(최대 40byte), 리뷰 제목(최대 50byte), 리뷰 내용(최대 200byte), 고객 정보(최대 50byte), 타이틀(최대 22byte) 등 텍스트 컬럼들의 바이트 제한 한도가 엄격히 통제되며 초과 시 뒤 영역이 자동 컷오프 처리됩니다.",
    "imageGuidelines": {
      "pcSize": "가로 640px × 세로 640px 권장 (1:1 비율 정비율 착샷) *배경용 카드 배너는 1240px × 420px 권장",
      "moSize": "가로 640px × 세로 640px 권장 (1:1 비율 정비율 착샷) *배경용 카드 배너는 750px × 420px 권장",
      "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
      "maxSize": "파일당 최대 200KB 이하 (개별 리뷰 이미지 및 카드 배경 이미지 모두 해당)",
      "adminValidation": "넥사크로 어드민에서 업로드 시 파일별 200KB 초과인 경우 경고 메시지와 함께 업로드가 차단 및 초기화됩니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 2개 리뷰 등록 필수",
      "tabMax": "최대 5개 리뷰 등록 제한",
      "prodMin": "해당 없음 (상품 설정 기능 없음)",
      "prodMax": "해당 없음 (상품 설정 기능 없음)",
      "adminValidation": "어드민(NBOS) 저장 시 등록된 리뷰 개수가 최소 2개 미만이거나 최대 5개를 초과할 수 없도록 스피너 버튼을 통해 강제 제어됩니다. 또한 상품 매핑 기능이 존재하지 않아 수동으로 브랜드명, 별점, 고객 스펙, 착샷 이미지, 리뷰 내용 텍스트 정보를 1:1 기입하여 전시해야 합니다."
    }
  },
  "ROULET": {
    "cardKey": "ROULET",
    "name": "룰렛",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardRoulet.xfdl (어드민) / RouletteGame.tsx (프론트)",
    "moduleCode": "MD9",
    "desc": "기획전 본문 내에 화려하고 유려한 100% 당첨형 룰렛 게임 그래픽을 연출하여, 고객들의 매일 반복적인 참여를 유도함으로써 브랜드 리텐션을 격상시키고 실시간으로 마일리지/시크릿 쿠폰 등의 당첨 혜택을 즉석 지급하는 고기능 마케팅 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 원형의 우아한 회전판 그래픽과 정중앙의 시작(START) 버튼, 상단의 대칭형 삼각 지침 핀이 렌더링됩니다. 어드민 설정에 따라 6칸 또는 8칸 룰렛판으로 분기되며, 사용자가 START 클릭 시 기동되는 5초간의 부드러운 가감속 회전 애니메이션이 탑재되어 극도의 몰입감과 기획전 긴장감을 증폭시킵니다. (PC 및 모바일 환경에서 정비율 1:1 박스 구조를 유지하여 회전 시 찌그러짐 현상이 유도되지 않도록 반응형 랩 처리가 완벽히 적용되어 있습니다.)",
    "backendSettings": [
      {
        "field": "캠페인 고유번호",
        "id": "ROULET_CAMPAIGN_NO",
        "type": "Integer (필수)",
        "desc": "어드민 프로모션 관리에서 사전에 등록된 연동 룰렛 이벤트 캠페인의 고유 식별 번호입니다."
      },
      {
        "field": "룰렛판 칸수 유형",
        "id": "radioRouletType",
        "type": "Combo/Radio (6/8)",
        "desc": "룰렛판 회전 그래픽의 칸 구성 형태를 결정합니다. 6칸형 또는 8칸형 선택에 따라 프론트 룰렛판 리워드 각도가 동적으로 분할 렌더링됩니다."
      },
      {
        "field": "시작버튼 유형",
        "id": "radioBtnType",
        "type": "Combo/Radio (A/B)",
        "desc": "정중앙의 스타트 버튼 디자인 유형입니다. A형: 모던 블랙&화이트 텍스트형 / B형: 강렬한 코랄 포인트 원형 심볼형 중 선택합니다."
      },
      {
        "field": "컴포넌트 배경색상",
        "id": "BKGD_CLR_VAL",
        "type": "Color Hex (선택)",
        "desc": "룰렛 게임 영역의 뒷배경을 채울 Hex 컬러 코드로 지정합니다. 기본값은 투명(Transparent)입니다."
      },
      {
        "field": "구간별 경품 목록",
        "id": "dsRouletReward",
        "type": "DataSet (필수)",
        "desc": "선택한 칸수 사양에 맞춘 당첨 리워드 정보 데이터셋입니다. 각 행마다 1대1 매핑할 리워드명(마일리지, 쿠폰 등), 혜택값(식별 ID), 아이콘 이미지, 그리고 로깅용 통계 카테고리 명칭을 필수로 등록해야 합니다."
      }
    ],
    "codeSnippet": "// RouletteGame.tsx - Front-end React 룰렛 회전판 인터랙션 및 애니메이션 제어 로직 일부\nconst RouletteGame = React.memo(({ rouletteInfo, isPreview }) => {\n  const [isSpinning, setIsSpinning] = useState(false);\n  const [prizeDeg, setPrizeDeg] = useState(0);\n  const { mutate: claimReward } = useMutationExhbRouletClaimPOST({\n    onSuccess: (data) => {\n      // 1. 당첨 결과에 따른 각도 계산 (전체 360도 중 당첨 구간 타겟팅 + 5회 이상 강제 롤링 보정)\n      const targetSector = data.winIndex; // 예: 0 ~ 5 (6칸 기준)\n      const sectorDeg = 360 / (rouletteInfo.rouletType === '6' ? 6 : 8);\n      const randomOffset = sectorDeg * 0.1 + Math.random() * (sectorDeg * 0.8);\n      const stopDeg = 3600 + (360 - (targetSector * sectorDeg + randomOffset));\n      setPrizeDeg(stopDeg);\n      setIsSpinning(true);\n      \n      setTimeout(() => {\n        setIsSpinning(false);\n        LFAlert.alert(`${data.rewardName}에 당첨되셨습니다! 🎁`);\n      }, 5000); // 5초간 회전 애니메이션 진행\n    },\n    onError: (err) => {\n      LFAlert.alert(err.message || \"이미 오늘 참여하셨거나 룰렛 참여 대상이 아닙니다.\");\n    }\n  });\n  \n  const handleStartSpin = () => {\n    if (isPreview) return LFAlert.alert(\"미리보기 화면에서는 룰렛을 돌릴 수 없습니다.\");\n    if (isSpinning) return;\n    claimReward({ campaignNo: rouletteInfo.rouletCampaignNo });\n  };\n  // ...\n});",
    "warnings": "1. [프로모션 연동 유효기간] 룰렛 캠페인의 운영 기간은 반드시 기획전 전시 기간을 완벽히 포함해야 합니다. 기획전 오픈 시점에 룰렛 캠페인이 비활성 상태거나 조기 종료되면 프론트 룰렛판 렌더링 시 빈 화면이 노출되어 대형 장애로 이어질 수 있습니다.\n2. [클라이언트 프론트 조작 어뷰징 방지] 룰렛의 회전 연출 및 결과 표시는 프론트 CSS/JS 모션으로 처리되지만, 실제 당첨 결과 데이터(경품 정보, 지급 여부)는 백엔드 API에서 암호화 검증된 토큰으로 처리되어야 합니다. 로컬 JS 난수로 당첨을 결정할 경우 심각한 보안 어뷰징 위험이 있으므로 절대 금지합니다.\n3. [6칸/8칸 리워드 매핑 일치성] 어드민 저장 시 룰렛 유형(6칸/8칸)과 등록한 리워드 수(dsRouletReward)가 정확히 일치하지 않는 경우 프론트에서 룰렛 판 그래픽 각도가 어긋나 텍스트와 보상이 꼬이게 되므로 저장 전 반드시 사전 체크를 진행해 주십시오.",
    "imageGuidelines": {
      "pcSize": "가로 600px × 세로 600px 권장 (원형 룰렛판 백그라운드 이미지 스펙)",
      "moSize": "가로 450px × 세로 450px 권장 (1:1 비율 정비율 원형)",
      "allowTypes": "PNG, JPG, JPEG (백그라운드 투명 PNG 강력 권장)",
      "maxSize": "파일당 최대 150KB 이하",
      "adminValidation": "룰렛 회전판의 우아한 렌더링을 위해 **원형의 투명 PNG 포맷 사용을 강력 가이드**합니다. 어드민 등록 시 파일 사이즈가 150KB를 1바이트라도 초과하면 넥사크로 UI 파일 검증 단에서 차단됩니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 6칸 구성 (6칸형 선택 시)",
      "tabMax": "최대 8칸 구성 (8칸형 선택 시)",
      "prodMin": "최소 1개 이상 구간에 꽝 이외의 당첨 리워드 매핑 필수",
      "prodMax": "최대 8개 구간 이하 (룰렛 타입 설정에 종속)",
      "adminValidation": "어드민(NBOS) 저장 시 6칸 또는 8칸 룰렛판 유형에 정확히 일치하는 리워드 데이터셋(dsRouletReward) 행 개수가 아닐 시, 논리적 정렬 불일치 에러와 함께 저장이 거부됩니다. 즉, 6칸형 룰렛이면 반드시 리워드도 6개, 8칸형이면 반드시 8개가 1대1 완벽 매핑되어야 합니다."
    }
  },
  "G_PURCHASE": {
    "cardKey": "G_PURCHASE",
    "name": "공동구매",
    "category": "PROD",
    "sourceFile": "frmPlanCardGroupPurchase.xfdl (어드민) / GroupPurchaseCard.tsx (프론트)",
    "moduleCode": "MD6",
    "desc": "기획전 상품에 대하여 실시간으로 구매 및 참여 신청 인원이 누적될수록 단계별 목표(Milestone)를 달성하여 할인 혜택율이 점점 올라가도록 유도하는 마케팅 특화형 소셜 커머스 상품 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상품의 고화질 이미지와 함께 실시간 신청 인원 현황, 그리고 목표 단계별(1단계 / 2단계 / 3단계 최종) 달성 진척도 게이지 바(Progress Bar)를 세련되게 묘사합니다. 사용자가 '공동구매 참여하기' 클릭 시 실시간 API 통신으로 누적 수치가 올라가며, 게이지가 역동적으로 확장하여 고객의 공동 참여 심리와 구매 바이럴을 유도합니다. (PC에서는 가로형 그리드 배열, 모바일에서는 세로 적층형의 유연한 반응형 뷰를 제공합니다.)",
    "backendSettings": [
      {
        "field": "공구 캠페인 번호",
        "id": "GPUR_CAMPAIGN_NO",
        "type": "Integer (필수)",
        "desc": "어드민 프로모션 관리 시스템에서 생성된 연동 공동구매 캠페인의 고유 식별 번호입니다."
      },
      {
        "field": "대상 상품 코드",
        "id": "PRODUCT_CD",
        "type": "String (필수)",
        "desc": "공동구매 특가 혜택을 매핑할 13자리 상품 마스터 코드입니다."
      },
      {
        "field": "최소 활성 인원",
        "id": "editMinQty",
        "type": "Integer (필수)",
        "desc": "공동구매 딜이 최종 발효(성공)되기 위해 필요한 최소 총 신청 인원 한계선입니다."
      },
      {
        "field": "구간 할인율 설정",
        "id": "dsGpurScale",
        "type": "DataSet (필수)",
        "desc": "단계별 달성 인원 및 할인율 매핑 정보입니다. (예: 1단계: 100명/20%, 2단계: 500명/35%, 3단계: 1000명/50% 반값 특가)"
      },
      {
        "field": "배경 색상 코드",
        "id": "BKGD_CLR_VAL",
        "type": "Color Hex (선택)",
        "desc": "공동구매 컴포넌트 전체의 테마 배경색을 지정합니다. 기본값은 투명(Transparent)입니다."
      }
    ],
    "codeSnippet": "// GroupPurchaseCard.tsx - Front-end React 공동구매 실시간 인원 신청 및 게이지 렌더링 일부\nconst GroupPurchaseCard = React.memo(({ gpurInfo, isPreview }) => {\n  const [currentQty, setCurrentQty] = useState(gpurInfo.totalAppliedQty || 0);\n  const { mutate: applyGroupPurchase } = useMutationExhbGpurApplyPOST({\n    onSuccess: (data) => {\n      setCurrentQty(prev => prev + 1);\n      LFAlert.alert(\"공동구매 신청이 완료되었습니다! 목표 달성 시 특가 혜택이 적용됩니다. 🎉\");\n    },\n    onError: (err) => {\n      LFAlert.alert(err.message || \"이미 신청하셨거나 신청 불가능한 상품입니다.\");\n    }\n  });\n  // ...\n});",
    "warnings": "1. [인원수 논리 오류 방지] 각 할인 단계(1단계 ~ 3단계)의 목표 인원수(dsGpurScale.TARGET_QTY)는 이전 단계보다 무조건 순차적으로 큰 값이어야 하며, 위반 시 넥사크로 어드민 폼 저장 스크립트단에서 저장이 차단됩니다.\n2. [실시간 동시성 락] 대량의 신청자가 동시에 공구 참여 버튼을 누르는 핫딜/선착순 형태의 폭주 상황을 방어하기 위해, 프론트 단에서는 트랜잭션 신청 중(isSubmitting 락) 버튼 재클릭을 강제 비활성화해야 합니다.\n3. [취소/환불 보정 규칙] 공동구매 행사 중 결제 취소 또는 환불건 발생 시 누적 참여 인원수의 실시간 감산 처리를 백엔드 스케줄러가 보정 동기화해야 최종 단계 도달 및 가격 정산 오류를 막을 수 있습니다.",
    "imageGuidelines": {
      "pcSize": "가로 500px × 세로 500px 권장 (1:1 비율 정비율)",
      "moSize": "가로 500px × 세로 500px 권장 (1:1 비율 정비율)",
      "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
      "maxSize": "파일당 최대 200KB 이하",
      "adminValidation": "공동구매 대표 상품 썸네일 이미지는 넥사크로 UI 파일업로드 핸들러에서 200KB를 초과할 시 업로드를 차단합니다. 업로드 전 사전에 이미지를 리사이징하고 경량화하는 것이 필수입니다."
    },
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "최소 1개 (단일 상품)",
      "prodMax": "최대 1개 (단일 상품)",
      "adminValidation": "공동구매 카드는 단일 상품(1개)만 연동하여 혜택을 제공하는 컴포넌트입니다. 어드민(NBOS) 저장 시 등록된 상품 개수가 1개가 아니거나, 목표 할인 단계(dsGpurScale)가 최소 2단계 미만 또는 5단계를 초과하는 경우 저장 시 에러가 호출되며 기획전 저장이 반려됩니다."
    }
  },
  "M_BENEFIT": {
    "cardKey": "M_BENEFIT",
    "name": "마케팅혜택",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardBenefitM.xfdl (어드민) / MarketingBenefitCard.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "기획전 본문 내에서 앱 푸시 수신, 야간 마케팅 알림 동의, 소셜 계정 연동 로그인 등 다양한 마케팅성 고객 액션을 장려하고 조건 충족 시 실시간 쿠폰 또는 포인트를 자동 발급하는 혜택 유도 전용 프로모션 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 은은한 그라데이션이 감도는 와이드 띠 배너와 혜택 수령용 바로가기 버튼(CTA)이 가로 플렉스로 배치됩니다. 사용자가 '동의하고 쿠폰받기' 클릭 시 브라우저 푸시 알림 권한 체크 또는 소셜 계정 동의 창이 팝업되며, 성공 처리에 따라 버튼 상태가 실시간 '동의 완료' 회색 비활성형으로 유려하게 토글 전환되어 동시성 중복 발급을 차단합니다.",
    "backendSettings": [
      {
        "field": "마케팅 캠페인 번호",
        "id": "MKTG_CAMPAIGN_NO",
        "type": "Integer (필수)",
        "desc": "어드민 프로모션 관리 도구에서 사전 기획 생성된 연동 마케팅 캠페인의 고유 번호입니다."
      },
      {
        "field": "참여 유도 유형",
        "id": "comboMktgType",
        "type": "Combo (PUSH/NIGHT/SNS/SMS)",
        "desc": "마케팅 액션 분류 유형을 정의합니다. PUSH(앱 알림 동의), NIGHT(야간 푸시 동의), SNS(소셜 회원 연계), SMS(마케팅 문자 동의)에 따라 프론트 팝업 시나리오가 자동으로 분기 매핑됩니다."
      },
      {
        "field": "컴포넌트 배경색상",
        "id": "BKGD_CLR_VAL",
        "type": "Color Hex (선택)",
        "desc": "마케팅 혜택 영역의 배경색상입니다. 기본값은 투명(Transparent)이며 HSL 테마 매칭 컬러를 추천합니다."
      },
      {
        "field": "리워드 연동 설정",
        "id": "dsMktgReward",
        "type": "DataSet (필수)",
        "desc": "조건 충족 시 발급할 마일리지 코드, 쿠폰 마스터 번호 및 노출용 보상 텍스트를 기입하기 위한 혜택 설정 데이터셋입니다."
      }
    ],
    "codeSnippet": "// MarketingBenefitCard.tsx - Front-end React 앱 푸시 및 야간 알림 동의 인터랙션 일부\nconst MarketingBenefitCard = React.memo(({ mktgInfo, isPreview }) => {\n  const [isAgreed, setIsAgreed] = useState(mktgInfo.isPushConsented || false);\n  const { mutate: requestPushConsent } = useMutationExhbPushConsentPOST({\n    onSuccess: (data) => {\n      setIsAgreed(true);\n      LFAlert.alert(\"동의 완료! 마케팅 수신동의 무료배송 쿠폰 발급이 완료되었습니다. 🎁\");\n    },\n    onError: (err) => {\n      LFAlert.alert(err.message || \"이미 혜택을 받으셨거나 참여 대상 고객이 아닙니다.\");\n    }\n  });\n  // ...\n});",
    "warnings": "1. [유형별 디바이스 종속성] 앱 푸시(PUSH) 및 야간 알림(NIGHT) 동의는 모바일 모바일 웹뷰(WebView) 또는 모바일 네이티브 앱(App) 환경에서만 정상 작동합니다. PC 및 모바일 일반 브라우저(Safari, Chrome 등) 진입 시에는 브라우저 API 환경의 제약으로 동의 팝업이 무조건 에러 차단되므로, 프론트에서는 PC/웹 환경에 대응해 'LFmall 모바일 앱 전용 혜택' 문구와 함께 스토어 다운로드 랜딩 또는 QR코드 레이어를 띄우도록 가드 코딩이 필수 적용되어야 합니다.\n2. [리워드 공백 반려] 마케팅 캠페인 저장 시 발급 대상 쿠폰이나 마일리지 데이터셋(dsMktgReward)이 완전 비어있을 시 넥사크로 유효성 스크립트에 의해 저장이 원천 반려됩니다.\n3. [개인정보 처리 동기화] 동의 철회 또는 푸시 권한 수동 변경 시의 싱크 상태를 백엔드 배치 데몬이 주기적으로 동기화하여야 부정 중복 발급 시도를 제어할 수 있습니다.",
    "imageGuidelines": {
      "pcSize": "가로 800px × 세로 200px 권장 (와이드형 띠 배너)",
      "moSize": "가로 710px × 세로 280px 권장 (1단 띠 배너)",
      "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
      "maxSize": "파일당 최대 150KB 이하",
      "adminValidation": "커스텀 홍보 이미지 띠 배너를 등록하는 경우 파일 용량이 150KB를 초과하게 되면 업로드가 즉시 차단되므로, 업로드 전에 무손실 경량화를 사전에 권장합니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 1개 마케팅 구좌 등록 필수",
      "tabMax": "최대 2개 마케팅 구좌 등록 가능 (수직 스택형 배열 한도)",
      "prodMin": "해당 사항 없음 (상품 비연합 독립형)",
      "prodMax": "최대 1개 리워드 코드 매핑 제한",
      "adminValidation": "마케팅 구좌 저장 시 연동 가능한 리워드 혜택(dsMktgReward)은 논리 정합성 유지를 위해 최대 1개로 제약됩니다. 리워드 코드가 존재하지 않거나 2개 이상 과도하게 매핑되어 저장 시도할 경우, 어드민 검증에 의해 저장이 반려됩니다."
    }
  },
  "BANNER_BLOCK": {
    "cardKey": "BANNER_BLOCK",
    "name": "배너블록",
    "category": "BANNER",
    "sourceFile": "frmPlanCardBannerBlock.xfdl (어드민) / BannerBlock.tsx (프론트)",
    "moduleCode": "MD12 (MDL12)",
    "desc": "한 구좌 내에 정밀하게 대칭되는 2열(2분할) 또는 3열(3분할) 레이아웃 형태로 여러 장의 시각 배너 이미지를 격자 적재하여 테마 기획전, 브랜드 모음전 또는 하위 카테고리 숏컷 랜딩을 질서 있게 유도하는 복합 그리드 배너 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 화면(PC/Mobile)에서 바둑판 모양의 정렬된 격자(Grid) 구조로 렌더링됩니다. 어드민의 '노출 열 개수(BLOCK_COL_CNT)' 및 '여백 크기(BLOCK_GAPS)' 설정에 따라 **2열 바둑판(PC 가로 정렬, 모바일 1열 2단 자동 래핑 등) 또는 3열 다단 배열**로 완전 반응형 유연 정렬이 수행됩니다. 개별 배너는 개별 링크와 대체 텍스트(alt)를 수반하여 단독 배너처럼 독립 작동합니다.",
    "backendSettings": [
      {
        "field": "여백 상단외부",
        "id": "CARD_THTP_EXTR_MRGI_USE_YN",
        "type": "Boolean (Y/N)",
        "desc": "배너 블록 최상단 바깥 여백(Margin) 적용 유무입니다."
      },
      {
        "field": "여백 상단내부",
        "id": "CARD_THTP_INNR_MRGI_USE_YN",
        "type": "Boolean (Y/N)",
        "desc": "배너 블록 최상단 안쪽 여백(Padding) 적용 유무입니다."
      },
      {
        "field": "노출 열 개수",
        "id": "BLOCK_COL_CNT",
        "type": "Combo (2/3)",
        "desc": "한 가로줄에 노출할 격자 컬럼 개수(2열 또는 3열 분할)를 결정합니다."
      },
      {
        "field": "블록간 여백",
        "id": "BLOCK_GAPS",
        "type": "Integer (px)",
        "desc": "배너 그리드 블록 간의 여백 크기를 픽셀 단위로 설정합니다. (기본값 8px, 최대 24px)"
      },
      {
        "field": "PC 이미지",
        "id": "PC_IMG_PATH_NM",
        "type": "File (그리드별)",
        "desc": "격자 구좌별 PC 화면용 배너 원본 파일입니다. (최소 2장 ~ 최대 6장)"
      },
      {
        "field": "모바일 이미지",
        "id": "MOBI_IMG_PATH_NM",
        "type": "File (그리드별)",
        "desc": "격자 구좌별 모바일 화면용 배너 원본 파일입니다."
      },
      {
        "field": "개별 배너 링크",
        "id": "LINK_URL_VAL",
        "type": "String (구좌별)",
        "desc": "해당 배너 클릭 시 각각 강제 랜딩될 타겟 URL 경로입니다. PC용 스펙을 입력합니다."
      },
      {
        "field": "링크 타겟",
        "id": "LINK_TRGE_VAL",
        "type": "Combo (S/B)",
        "desc": "S: 현재창(_self) / B: 새창(_blank)"
      },
      {
        "field": "eTAG 랜딩 코드",
        "id": "LINK_DIV_VAL",
        "type": "Combo (필수)",
        "desc": "배너 클릭 로깅 및 마케팅 성과 추적을 위한 필수 태깅 코드입니다."
      }
    ],
    "codeSnippet": "// BannerBlock.tsx - Front-end React 그리드 분할 및 모바일 2열 전환 계산 로직 일부\nexport const BannerBlock = React.memo(({ templateDetail, blockColCnt = 3, blockGaps = 8 }) => {\n  const banners = templateDetail?.planModuleBannerBlockList ?? [];\n  \n  const gridStyle = useMemo(() => ({\n    display: 'grid',\n    gap: `${blockGaps}px`,\n    gridTemplateColumns: `repeat(${blockColCnt}, 1fr)`,\n  }), [blockColCnt, blockGaps]);\n\n  return (\n    <div className={styles.bannerBlockContainer}>\n      <div style={gridStyle} className={styles.bannerGrid}>\n        {banners.map((bnr, idx) => (\n          <a key={bnr.bannerBlockSq || idx} href={bnr.linkUrl} target={bnr.linkTarget === 'B' ? '_blank' : '_self'}>\n            <picture>\n              <source srcSet={`${IMAGE_HOST}/${bnr.mobiImgPath}`} media=\"(max-width: 768px)\" />\n              <img src={`${IMAGE_HOST}/${bnr.pcImgPath}`} className={styles.gridImage} alt={bnr.imgAltText || `배너_${idx + 1}`} />\n            </picture>\n          </a>\n        ))}\n      </div>\n    </div>\n  );\n});",
    "warnings": "1. [eTAG 연동 필수 규정] 그리드에 적재되는 **모든 개별 이미지 배너 슬롯마다 eTAG 랜딩 구분 코드 설정이 누락 없이 강제 매핑**되어야만 어드민 저장이 유효합니다. 단 하나라도 누락되면 넥사크로 DataSet의 유효성 바인더(checkValidation)단에서 저장이 차단됩니다.\n2. [비율 불일치 경고] 격자형 배너 특성상 등록되는 배너 이미지들 간의 **세로 높이 비율이 1픽셀이라도 다를 경우**, 프론트엔드 그리드 렌더링 시 높낮이가 어긋나는 치명적인 불균형 현상이 초래됩니다. 기획 단계에서 모든 그리드 배너의 크기를 픽셀 단위로 완벽하게 동일 정규화해 업로드하여야 합니다.",
    "imageGuidelines": {
      "pcSize": "2열 선택 시: 가로 610px × 세로 300px 권장 / 3열 선택 시: 가로 400px × 세로 260px 권장 (배너간 비율 일치 필수)",
      "moSize": "2열 선택 시: 가로 360px × 세로 220px 권장 / 3열 선택 시: 가로 230px × 세로 180px 권장",
      "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
      "maxSize": "개별 슬롯 이미지당 최대 200KB 이하 (그리드 배너 전체 용량 통제)",
      "adminValidation": "넥사크로 어드민에서 그리드 이미지 슬롯별 업로드 시 200KB를 1바이트라도 초과하면 Validation 얼럿과 함께 파일 로드가 자동으로 롤백됩니다. 전체 배너 개수가 '노출 열 개수'의 배수가 아닌 경우(예: 3열 세팅인데 이미지 5장만 등록), 빈 슬롯 영역에 흰색 공백 레이아웃 깨짐이 생기므로 등록 개수를 열 개수의 정수배로 채울 것을 강하게 가이드 권장합니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 2장 등록 필수 (2열 배열 시)",
      "tabMax": "최대 6장까지 제한 (2열 3단 또는 3열 2단 등 정수배 배열)",
      "prodMin": "블록간 여백 최소 4px",
      "prodMax": "블록간 여백 최대 24px",
      "adminValidation": "어드민(NBOS) 저장 시 노출 열 개수(BLOCK_COL_CNT)는 2 또는 3만 콤보박스로 선택 가능하며, 등록된 배너의 총 개수가 최소 2개 미만이거나 최대 6개를 초과할 시 저장 유효성 검증 단에서 반려 얼럿이 작동합니다. 블록간 간격(BLOCK_GAPS)은 스피너(Spin)를 통해 4px ~ 24px 범위를 벗어나 수동 입력할 시 저장 단에서 8px 기본값으로 강제 리셋 교정되어 안전 처리됩니다."
    }
  },
  "TEXT": {
    "cardKey": "TEXT",
    "name": "텍스트",
    "category": "BANNER",
    "sourceFile": "frmPlanCardText.xfdl (어드민) / Intro.tsx (프론트)",
    "moduleCode": "MD2",
    "desc": "자유롭고 감각적인 대/소단 타이틀과 설명 문구를 배치할 수 있는 공용 텍스트 영역입니다. 어드민에서 지정한 상/하단 여백 및 기획전 소개 문구, 진행 기간 등을 감각적인 에디토리얼 레이아웃으로 표현합니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상단 여백 설정(상단외부/내부, 하단외부/내부)에 반응하며, 브랜드 타이포그래피 규칙에 맞춰 상단 설명 문구, 메인 타이틀(최대 2줄), 하단 설명 문구, 그리고 기획전 소개 본문 내용(최대 120자)이 수직 정렬 형태로 노출됩니다. 기획전 진행 기간이 존재할 경우 하단에 날짜 범위 텍스트가 표시됩니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 상단 여백(Margin) 사용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 여백(Padding) 사용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 하단 여백(Margin) 사용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 하단 여백(Padding) 사용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "TEXT_HDR_TITL", "type": "String (50자 한도)", "desc": "타이틀 상단에 작게 배치되는 강조 설명 텍스트입니다. 하단 설명 문구와 동시에 등록할 수 없습니다." },
      { "field": "타이틀", "id": "TEXT_TITL", "type": "String (30자 한도)", "desc": "텍스트 컴포넌트의 메인 타이틀입니다. 최대 2줄까지만 입력이 지원됩니다." },
      { "field": "하단 설명 문구", "id": "TEXT_SUB_TITL", "type": "String (50자 한도)", "desc": "타이틀 하단에 배치되는 설명 텍스트입니다. 상단 설명 문구와 동시에 등록할 수 없습니다." },
      { "field": "내용 (소개문구)", "id": "TEXT_CONTENTS_VAL", "type": "String (120자 한도, 필수)", "desc": "기획전의 상세 소개 본문 내용입니다. 공백 포함 120자까지 작성이 가능합니다." },
      { "field": "진행기간", "id": "PGSS_PERD_TEXT", "type": "String (선택)", "desc": "기획전 진행 날짜 범위를 지정합니다. 'YYYYMMDD HHmmss ~ YYYYMMDD HHmmss' 형식으로 저장됩니다." }
    ],
    "codeSnippet": "// Intro.tsx - Front-end React 텍스트(기획전 소개) 컴포넌트 핵심 로직\nexport const Intro = ({ template }: { template: PlanTemplateMasterDTO }) => {\n  const { data } = useFetchPlanIntroModuleGET({\n    param: { masterNumber: Number(template?.masterNumber), planSq: Number(template?.planSq), moduleType: template?.moduleType, siteCd: \"03\" }\n  });\n  if (data?.body?.exhibitionYn === \"N\") return <></>;\n  return (\n    <div className={styles.intro}>\n      {data?.body?.content?.split(\"\\n\").map((title, idx) =>\n        title === \"\" ? <br key={idx} /> : <p key={idx}>{title}</p>\n      )}\n      <p className={styles.date}>{data?.body?.moduleTitle}</p>\n    </div>\n  );\n};",
    "warnings": "1. [상/하단 설명 문구 상호 배타성] 어드민 nexacro 저장 검증 시 상단 설명 문구(TEXT_HDR_TITL)와 하단 설명 문구(TEXT_SUB_TITL)는 동시에 등록할 수 없습니다. 동시에 등록하여 저장을 시도할 시 오류 알럿과 함께 저장이 반려됩니다.\n2. [소개글 필수 및 글자 수 제한] 본문 내용(TEXT_CONTENTS_VAL)은 필수 입력 항목이며, 공백 포함 최대 120자까지만 저장을 허용합니다.\n3. [타이틀 개행 제약] 메인 타이틀(TEXT_TITL)은 최대 30자 이내여야 하며, 개행(\\n)은 최대 2줄까지만 허용합니다. 3줄 이상 입력하고 저장을 시도할 경우, 어드민단에서 차단 알럿이 구동됩니다.",
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "최소 1자 이상 기입 (내용 필드 필수)",
      "prodMax": "최대 120자 (내용 필드) / 30자 (타이틀 필드)",
      "adminValidation": "텍스트 카드는 상품이나 이미지를 직접 전시하지 않는 에디토리얼 전용 컴포넌트입니다. 어드민(NBOS) 저장 시 내용(소개문구)이 비어있거나 120자를 초과할 경우 저장이 거부됩니다. 또한 타이틀의 라인수가 3줄 이상이거나, 상/하단 설명 문구가 둘 다 채워져 있는 모순이 발생하면 반려 스크립트가 실행됩니다."
    }
  },
  "PICTORIAL": {
    "cardKey": "PICTORIAL",
    "name": "화보",
    "category": "BANNER",
    "sourceFile": "frmPlanCardPictorial.xfdl (어드민) / Magazine.tsx (프론트)",
    "moduleCode": "MD8",
    "desc": "룩북이나 매거진 화보 레이아웃을 본떠 고화질 이미지를 잡지처럼 넘겨보고, 이미지 내 3x3 핫스팟 구역(1~9번 위치)을 통해 모델 착장 상품을 즉각 태깅하여 바로가기 링크를 연계하는 인터랙티브 스타일 배너 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상단 여백 옵션이 유연하게 동적 가감되며, 에디토리얼 디자인에 맞게 최상단에 화보 썸네일들이 바둑판식 격자로 배치(이미지가 4개인 경우 styles.photo4 전용 레이아웃 분기 구동)됩니다. 그 하단에 메인 타이틀, 홍보 문구 설명이 표시되고, 개별 화보 슬라이드 하단에 설명 문구가 출력됩니다. 화보 이미지 위에 3x3 격자(goProduct no1~no9) 형태로 영역이 구분되어 있어, 사용자가 이미지 내 상품 부위를 직접 탭하면 해당 상품 상세페이지로 부드럽게 화면 이동됩니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 상단 여백(Margin) 유무를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 상단 여백(Padding) 유무를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 바깥쪽 하단 여백(Margin) 유무를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 안쪽 하단 여백(Padding) 유무를 설정합니다." },
      { "field": "상단 설명 문구", "id": "TEXT_HDR_TITL", "type": "String (50자 한도)", "desc": "타이틀 상단에 작게 배치되는 서브 설명 문구입니다." },
      { "field": "타이틀", "id": "TEXT_TITL", "type": "String (30자 한도)", "desc": "화보 컴포넌트의 메인 타이틀입니다. 최대 2줄까지만 입력이 지원됩니다." },
      { "field": "하단 설명 문구", "id": "TEXT_SUB_TITL", "type": "String (50자 한도)", "desc": "메인 타이틀 하단 보조 설명 텍스트입니다." },
      { "field": "중간 타이틀", "id": "MID_TITE_VAL", "type": "String (30자 한도)", "desc": "화보 슬라이드 영역 바로 상단에 단독 강조되는 보조 타이틀 텍스트입니다." },
      { "field": "홍보 문구", "id": "EVNT_DSCR", "type": "String (120자 한도)", "desc": "화보 전체의 컨셉이나 브랜드 스토리를 전달하는 본문 상세 글입니다." },
      { "field": "화보 개수", "id": "comboPictorialCnt", "type": "Combo (2~8개)", "desc": "전시할 화보 이미지 슬라이드 장수를 세팅합니다." },
      { "field": "이미지 업로드", "id": "PC_IMG_PATH_NM / MOBI_IMG_PATH_NM", "type": "Files (필수)", "desc": "각 화보 슬라이드에 노출될 PC/MO 이미지 파일입니다." },
      { "field": "링크 갯수", "id": "comboProdCnt", "type": "Combo (0~9개)", "desc": "개별 화보 이미지 내에 배치할 핫스팟 링크 영역의 총 수량을 지정합니다." },
      { "field": "링크 위치", "id": "comboLinkPosition", "type": "Combo (1~9번 구역)", "desc": "3x3 격자 분할된 가상 영역 중 핫스팟 아이콘을 배치할 좌표 구역 번호입니다." },
      { "field": "링크 타입", "id": "comboCodeType", "type": "Combo (PROD/EXHB/BRAND)", "desc": "핫스팟 클릭 시 이동할 랜딩 대상 코드 속성 구분입니다." },
      { "field": "링크 값", "id": "editLinkDtlValue", "type": "String (필수)", "desc": "매핑할 상품 코드 또는 전시 기획전 고유 코드 값입니다." }
    ],
    "codeSnippet": "// Magazine.tsx - Front-end React 화보 3x3 핫스팟 이미지 맵 및 상품 앵커 매핑 일부\nconst MagazineItem = ({ mobileImagePath, planModuleProductInfoDTOList, content }) => {\n  const exhibitionSequences = planModuleProductInfoDTOList?.reduce(\n    (pre, cur) => [...pre, styles[`selectNo${cur.exhibitionSequence}`]], []\n  );\n  return (\n    <div className={styles.magazine__items}>\n      <div className={styles.photo}>\n        <img src={`https://img.lfmall.co.kr/file/WAS/display/${mobileImagePath}`} className={styles.thumb} alt=\"화보\" />\n        <div className={`${styles.wrapLinks} ${exhibitionSequences?.join(\" \")}`}>\n          {planModuleProductInfoDTOList?.map((item, idx) => (\n            <Link to={`${ROUTE_PATH.PRODUCT}/${item.productCode}`} key={`${item.productCode}_${idx}`} className={`${styles.goProduct} no${item.exhibitionSequence}`}>\n              <span className=\"blind\">상품 바로가기</span>\n            </Link>\n          ))}\n        </div>\n      </div>\n      {content && <div className={styles.disc}>{content.split(\"\\n\").map((txt, i) => <Fragment key={i}>{i !== 0 && <br />}{txt}</Fragment>)}</div>}\n    </div>\n  );\n};",
    "warnings": "1. [핫스팟 링크 중복 방지] 동일한 화보 슬라이드 내에서 링크 위치(1~9번 구역)는 중복 지정될 수 없습니다. 중복 지정 시 어드민단에서 경고 메시지를 노출하며, 프론트엔드에서도 두 개의 상품 정보 버튼이 겹쳐 렌더링 손상이 초래됩니다.\n2. [용량 및 포맷 규격 제한] 개별 화보 이미지의 용량은 파일당 최대 200KB 이하여야 합니다. 모바일 무선 트래픽 부담을 덜기 위해 이미지 최적화를 마친 후 업로드해야 합니다.\n3. [상/하단 설명 문구 상호 배타성] 어드민 nexacro 시스템 제약으로 상단 설명 문구와 하단 설명 문구는 동시에 적재해 저장할 수 없으므로 둘 중 하나만 채워야 합니다.",
    "imageGuidelines": {
      "pcSize": "가로 1240px × 세로 비율 제한 없음 (세로형 화보는 3:4 비율 권장)",
      "moSize": "가로 750px × 세로 비율 제한 없음 (모바일 풀사이즈 소구 시 세로 1000px 이상 권장)",
      "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
      "maxSize": "파일당 최대 200KB 이하 (화보별 최대 8장 등록 가능)",
      "adminValidation": "어드민 넥사크로 UI 파일 바인더에서 이미지당 200KB를 1바이트라도 초과하는 경우 업로드가 원천 차단됩니다. 핫스팟 링크를 활성화하는 경우 상품 데이터 무결성을 위해 실존하는 정상 판매 상태의 13자리 상품 코드를 정확히 기재해야 Validation을 통과합니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 2장 이상 필수",
      "tabMax": "최대 8장까지 등록 가능",
      "prodMin": "화보당 핫스팟 최소 1개",
      "prodMax": "화보당 핫스팟 최대 9개 (3x3 격자 범위 제한)",
      "adminValidation": "화보 개수는 2장 미만이거나 8장 초과 시 저장이 반려되며, 개별 화보당 삽입 가능한 상품 핫스팟 앵커(comboProdCnt)는 3x3 격자 제약에 의해 최소 1개 ~ 최대 9개까지만 넥사크로 그리드를 통해 등록 저장이 허용됩니다."
    }
  },
  "FCFS_CPN": {
    "cardKey": "FCFS_CPN",
    "name": "선착순쿠폰",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardFCFSCoupon.xfdl (어드민) / Coupon.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "지정된 선착순 수량 동안 다운로드 가능한 고기능 프로모션 쿠폰입니다. 쿠폰 형태(일반, e-기프트마일리지, 무료배송)에 따라 전용 UI 테마가 자동 분기되며, 실시간 다운로드 버튼과 함께 다운로드 달성도 프로그레스 바를 노출하여 구매 긴박감을 증폭시킵니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상하단 여백에 반응하며, 혜택 유형(일반쿠폰/기프트마일리지/배송비쿠폰)에 맞춰 테마 스타일이 동적으로 다르게 연출됩니다. 2단 또는 다단 쿠폰을 나열할 경우 설정된 쿠폰 개수(1~5개)만큼 혜택 카드들이 차례로 세로 배열됩니다. 각 쿠폰 카드 내부에는 혜택 타이틀(최대 22byte), 설명(최대 100byte), 남은 수량 비주얼 프로그레스 바(블랙/레드 등 색상 분기), 그리고 다운로드 버튼이 포함됩니다.",
    "backendSettings": [
      { "field": "배경 색상 코드", "id": "BKGD_CLR_VAL", "type": "Color Hex (선택)", "desc": "선착순쿠폰 영역 뒷배경을 채울 Hex 컬러 코드 값입니다. 기본값은 투명(Transparent)입니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 상단 외부 여백(Margin) 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 상단 내부 여백(Padding) 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 하단 외부 여백(Margin) 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "컴포넌트 하단 내부 여백(Padding) 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "BNFT_HEDR_TEXT_VAL", "type": "String (100byte 한도)", "desc": "컴포넌트 상단에 노출할 설명 텍스트입니다. 하단 설명 문구와 중복 등록이 불가능합니다." },
      { "field": "타이틀", "id": "BNFT_TITL", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 최대 2줄까지만 입력 허용됩니다." },
      { "field": "하단 설명 문구", "id": "BNFT_DSCR", "type": "String (100byte 한도)", "desc": "컴포넌트 하단에 노출할 설명 텍스트입니다. 상단 설명 문구와 중복 등록이 불가능합니다." },
      { "field": "쿠폰 개수", "id": "editCouponCount", "type": "Integer (1~5개)", "desc": "컴포넌트에 포함시킬 개별 쿠폰의 총 갯수를 조절합니다. (최대 5개)" },
      { "field": "PC 이미지", "id": "PC_IMG_PATH_NM", "type": "File (선택)", "desc": "선착순 쿠폰 배너 영역에 전시할 커스텀 PC용 이미지 파일입니다." },
      { "field": "MO 이미지", "id": "MOBI_IMG_PATH_NM", "type": "File (선택)", "desc": "선착순 쿠폰 배너 영역에 전시할 커스텀 모바일용 이미지 파일입니다." },
      { "field": "[개별] 혜택 타이틀", "id": "BNFT_DETL_TITL", "type": "String (22byte 한도, 필수)", "desc": "개별 쿠폰의 대표 명칭(예: 10% 쿠폰)입니다." },
      { "field": "[개별] 혜택 설명 문구", "id": "BNFT_DETL_SUB_VAL", "type": "String (100byte 한도, 필수)", "desc": "개별 쿠폰의 할인 한도나 보완 혜택 정보입니다." },
      { "field": "[개별] 선착순 쿠폰", "id": "CPN_ID_VAL", "type": "String (10자리 숫자, 필수)", "desc": "실제 다운로드와 연계할 10자리 마스터 쿠폰 고유 ID 번호입니다. 우측 쿠폰 연결 팝업을 통해 매핑합니다." },
      { "field": "[개별] 수량 바 색상", "id": "PGSS_CLR_VAL", "type": "Radio (선택)", "desc": "잔여 수량을 표현할 프로그레스 바의 테마 컬러(예: BLACK/RED 등)입니다." },
      { "field": "[개별] 하단 유의사항", "id": "BNFT_DETL_DSCR", "type": "String (100byte 한도)", "desc": "쿠폰 사용 시의 개별 하단 유의사항 문구입니다." }
    ],
    "codeSnippet": "// frmPlanCardFCFSCoupon.xfdl.js - 어드민 선착순 쿠폰 Validation 로직 일부\nthis.fnCheckValidation = function ()\n{\n\tvar colorCodePattern = /^#[0-9A-Fa-f]{6,8}$/;\n\tif(this.editBgColor.value && !colorCodePattern.test(this.editBgColor.value)){\n\t\tthis.gfnAlert(\"msg.err.validator\", [\"배경색상 코드 항목을 체크해주세요.\"]);\n\t\treturn false;\n\t}\n\tif (this.textTopDesc.value && this.textBottomDesc.value)\n\t{\n\t\tthis.gfnAlert(\"msg.err.validator\", [\"상단 설명 문구, 하단 설명 문구 중 하나만 입력하세요.\"]);\n\t\treturn false;\n\t}\n\tvar pcImg = this.editPCImg.value;\n\tvar moImg = this.editMOImg.value;\n\tvar isCheckImgFlag = (pcImg != null && pcImg != \"\") != (moImg != null && moImg != \"\");\n\tif(isCheckImgFlag){\n\t\tthis.gfnAlert(\"msg.err.validator\", [\"PC이미지와 MO이미지 모두 입력해주세요.\"]);\n\t\treturn false;\n\t}\n\tfor(var i=1; i<=this.editCouponCount.value; i++){\n\t\tvar nDiv = this[\"divBenefit\"+i];\n\t\tif(!nDiv.form.editCouponID.value){\n\t\t\tthis.gfnAlert(\"msg.err.validator\", [\"쿠폰을 연결해 주세요.\"]);\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n};",
    "warnings": "1. [텍스트 상호 배타성 규칙] 상단 설명 문구와 하단 설명 문구는 어드민 시스템 제약 상 절대 동시에 입력하여 저장할 수 없으며 하나는 무조건 공백이어야 합니다.\n2. [이미지 세트 매핑 규정] PC용 배너 이미지와 모바일(MO)용 배너 이미지는 반드시 동시에 둘 다 존재하거나 둘 다 비워두어야 하며, 하나만 등록하고 저장을 시도할 경우 Validation 에러가 작동해 저장이 반려됩니다.\n3. [글자 수 바이트 엄격 제한] 어드민 저장 검증 시 설명 문구류는 최대 100byte(한글 기준 50자), 타이틀류는 최대 22byte(한글 기준 11자)로 제한되며 초과분은 즉각 잘림 처리되므로 등록 시 문구 길이를 필히 확인해야 합니다. 또한 메인 타이틀의 라인수(개행)가 2줄을 초과할 시에도 저장이 즉각 차단됩니다.",
    "imageGuidelines": {
      "pcSize": "가로 1240px × 세로 제한 없음 (와이드형 중앙 정렬)",
      "moSize": "가로 750px × 세로 제한 없음 (상단 마진 기본 탑재)",
      "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
      "maxSize": "파일당 최대 200KB 이하",
      "adminValidation": "어드민 넥사크로 UI 파일 바인더에서 이미지당 200KB를 1바이트라도 초과하는 경우 업로드가 원천 차단됩니다. 핫스팟 링크를 활성화하는 경우 상품 데이터 무결성을 위해 실존하는 정상 판매 상태의 13자리 상품 코드를 정확히 기재해야 Validation을 통과합니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 1개 혜택 카드 노출",
      "tabMax": "최대 5개 혜택 카드 노출 (세로 정렬 한도)",
      "prodMin": "혜택당 10자리 쿠폰 마스터 ID 필수 연계",
      "prodMax": "해당 없음",
      "adminValidation": "선착순 쿠폰 개수는 최소 1개에서 최대 5개까지 세팅 가능하며, 개별 혜택 카드마다 실존하는 10자리 정상 쿠폰 고유 코드가 연결되어 있지 않으면 저장 검증 단계에서 반려 처리됩니다."
    }
  },
  "BADGE": {
    "cardKey": "BADGE",
    "name": "행사뱃지",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardBadge.xfdl (어드민) / PromoBadge.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "기획전 고유 행사 아이콘이나 특별 혜택 뱃지들을 전시하는 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역에서 행사 전용 비주얼 뱃지(예: L+Day 등)를 타이틀 영역 근처 혹은 기획전 전용 배너 영역에 겹쳐서 또는 나란히 노출하여, 기획전 혜택을 강조하고 시각적인 소구 효과를 제공합니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 여부" },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 여부" },
      { "field": "뱃지 유형", "id": "BADGE_TYPE_VAL", "type": "Combo (LPLUS / BRND / EVNT)", "desc": "LPLUS: L+Day 뱃지, BRND: 브랜드 뱃지, EVNT: 일반 이벤트 뱃지" },
      { "field": "뱃지 명칭", "id": "BADGE_NM", "type": "String (20자 한도)", "desc": "뱃지 표기 텍스트" },
      { "field": "연동 이미지", "id": "PC_IMG_PATH_NM / MOBI_IMG_PATH_NM", "type": "Files (선택)", "desc": "뱃지용 커스텀 이미지 파일" }
    ],
    "warnings": "1. 행사뱃지는 기획전 성격에 따라 L+Day 또는 특정 행사 규격을 준수하여 등록해야 합니다. 이미지 업로드 시 배경 투명(PNG) 포맷 처리가 필수적입니다.\n2. 모바일 화면에서 뱃지가 깨지거나 텍스트가 줄바꿈되어 잘리지 않도록 글자 수를 한글 10자 이내로 제어해 주세요.",
    "imageGuidelines": {
      "pcSize": "가로 120px × 세로 120px 권장 (1:1 비율 PNG)",
      "moSize": "가로 80px × 세로 80px 권장 (1:1 비율 PNG)",
      "allowTypes": "PNG, JPG, JPEG",
      "maxSize": "50KB 이하",
      "adminValidation": "넥사크로 어드민 업로드 시 투명 배경(PNG) 형태가 아닌 경우, 배경 흰색이 그대로 노출되어 레이아웃이 어색해질 수 있으므로 디자이너 제작 표준 가이드를 반드시 확인하고 등록해야 합니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 1개",
      "tabMax": "최대 3개",
      "prodMin": "최소 1자 이상",
      "prodMax": "최대 20자",
      "adminValidation": "뱃지는 한 화면 구좌 내 최대 3개까지 구성하여 저장이 가능하며, 초과 시 저장 유효성 검증 단에서 반려 얼럿이 작동합니다."
    }
  },
  "PAYBACK": {
    "cardKey": "PAYBACK",
    "name": "페이백",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardPayBack.xfdl (어드민) / Payback.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "구매 완료 시 결제 금액의 일정 비율 또는 일정 금액을 적립금으로 페이백해주는 특화 프로모션 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 페이백 행사 안내 이미지와 함께 FckEditor로 입력된 상세 안내문구(evntDscr)가 노출됩니다. 로그인한 사용자에 대해 실시간 누적 주문 금액이 표시되며, 진행바 표시 여부(prgsLineYn)를 활성화하면 결제 완료 금액과 구간별 페이백 도달도가 진행바(Progress Bar) 상에 시각적으로 가시화됩니다. 구간 도달 시에는 말풍선(Speech Bubble) 애니메이션과 함께 페이백 혜택(정액 마일리지 M 또는 정율 %)이 강조 노출되고, 하단에는 다음 구간 페이백을 받기 위한 잔여 구매금액이 실시간으로 동적 출력됩니다(예: 'N원 더 구매 시 M 페이백 가능'). 신청 전/완료 상태 및 행사 대상 여부에 따라 버튼 텍스트가 분기되며 중복 클릭 방지 처리 및 백엔드 API 연동이 수행됩니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 어드민의 editBtnText 인풋에 값을 지정하며, 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 유효성이 검증됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 헤더 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "PC 이미지", "id": "PC_IMG_PATH_NM", "type": "File (1240px 권장)", "desc": "PC 사용자 화면에 전시될 표준 이미지 파일입니다. (최대 200KB 이하)" },
      { "field": "모바일 이미지", "id": "MOBI_IMG_PATH_NM", "type": "File (670px 권장)", "desc": "모바일 사용자 화면에 전시될 표준 이미지 파일입니다. (최대 200KB 이하)" },
      { "field": "결제금액 텍스트", "id": "EVNT_NTOR_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "나의 주문 금액 영역 좌측에 표시되는 사용자 개인 맞춤형 레이블 텍스트입니다. (예: '나의 주문 금액')" },
      { "field": "페이백 유형", "id": "PGSS_LINE_TYPE_VAL", "type": "Combo (S/P)", "desc": "S: 단일 지급 (1단계만 지정 가능), P: 단계별 지급 (2~5단계만 지정 가능)." },
      { "field": "진행바 표시여부", "id": "PRGS_LINE_YN", "type": "Combo (Y/N)", "desc": "구매금액 진행바(Progress Bar) 노출 여부를 제어합니다." },
      { "field": "페이백 형태", "id": "PYBC_TYPE_VAL", "type": "Combo (R/A)", "desc": "R: 정율 (%, 최대 99% 제한), A: 정액 (원, 마일리지 지급)으로 페이백 지급 형식을 선택합니다." },
      { "field": "버튼명", "id": "BTN_TEXT_VAL", "type": "String (30byte 한도)", "desc": "신청 전 또는 신청 가능 상태일 때 노출되는 버튼 텍스트입니다." },
      { "field": "완료버튼명", "id": "BTN_CMPE_TEXT_VAL", "type": "String (30byte 한도)", "desc": "페이백 참여 완료 또는 마감 상태일 때 노출되는 버튼 텍스트입니다." },
      { "field": "페이백 설명 문구", "id": "EVNT_DSCR", "type": "RichText (HTML)", "desc": "에디터를 통해 작성하는 페이백 유의사항 및 상세 안내 가이드 본문입니다." },
      { "field": "하단 안내 문구", "id": "EXCU_TEXT_VAL", "type": "String (60byte 한도)", "desc": "로그인 후 누적 구매 금액이 0원일 때 하단에 표시되는 기본 안내 메시지입니다." },
      { "field": "상품 조건", "id": "CNDT_FIST_VAL / CNDT_SCND_VAL", "type": "Combo & Input", "desc": "A: 전체상품대상, L: 전관행사대상 (전관행사 ID 입력 필수), B: 뱃지상품대상 (이벤트번호 입력 필수), M: 수기상품대상 (어드민 저장 완료 후 상품 등록 팝업 활성화)." },
      { "field": "페이백 조건 설정", "id": "dsCond", "type": "Dataset Binding", "desc": "설정한 단계(1~5단계)별로 구매금액 조건(STDR_VAL) 및 페이백 금액(PYBC_AMT) 혹은 비율(PYBC_RTO)을 매핑하여 바인딩합니다." }
    ],
    "warnings": "1. [배경색상 검증] 배경색상은 '#'을 반드시 기재한 7자 또는 8자 Hex Code 형태(예: #FFFFFF)여야 하며, 정규식을 벗어나면 저장이 반려됩니다.\n2. [설명문구 상호 배타성] 상단 설명 문구와 하단 설명 문구는 어드민 검증에 의해 동시에 입력할 수 없습니다. 하나는 공백이어야 유효성 에러를 피할 수 있습니다.\n3. [텍스트 바이트 한도] 타이틀 및 결제금액 텍스트는 최대 22byte 이내, 버튼명 및 완료버튼명은 최대 30byte 이내, 하단 안내 문구는 최대 60byte 이내여야 합니다. 타이틀 줄바꿈은 2줄까지만 허용됩니다.\n4. [지급 유형 및 단계 검증] 단일 지급일 경우 1단계만, 단계별 지급일 경우 2~5단계만 조건 적용이 허용됩니다. 어긋날 시 유효성 메시지와 함께 저장이 반려됩니다.\n5. [조건값 검증] 설정한 조건 단계마다 구매금액 조건과 페이백 금액/비율이 반드시 모두 채워져야 하며, 구매금액에 0원은 입력할 수 없습니다.\n6. [상품조건 필수값] 전관행사대상일 때는 전관행사 ID가, 뱃지상품대상일 때는 이벤트 번호가 비어 있을 시 저장이 불가능합니다. 수기상품대상의 경우 카드가 먼저 저장되어 있어야 상품 등록 팝업을 열 수 있으므로 사전 '전체상품대상' 저장이 필수적입니다.\n7. [이미지 제한] 개별 업로드 이미지 용량이 200KB를 초과할 시 파일 정보 체크 단계에서 에러가 발생하며 업로드가 취소됩니다.",
    "qtyGuidelines": {
      "tabMin": "단일 지급은 1단계 필수 구성, 단계별 지급은 최소 2단계 구성 필요",
      "tabMax": "최대 5단계까지 조건 설정 제공",
      "prodMin": "구매금액 조건 최소 1원 이상 지정 (0원 지정 불가)",
      "prodMax": "정율 페이백 시 비율 최대 99% 제한",
      "adminValidation": "어드민 저장 시 단일 지급은 1단계만, 단계별 지급은 2~5단계만 지정 가능하도록 강제하며, 각 단계별로 구매 금액 조건과 페이백 비율(정율) 또는 페이백 금액(정액)이 모두 채워져 있어야 유효성 검사를 통과합니다. 비율 설정 시 2자리 한도(최대 99%)로 제한되며, 업로드하는 이미지 용량이 200KB를 초과하면 업로드가 즉시 반려됩니다."
    }
  },
  "ENTCODE": {
    "cardKey": "ENTCODE",
    "name": "입장코드",
    "category": "NAV",
    "sourceFile": "frmPlanCardAccessCode.xfdl (어드민) / EntryCode.tsx (프론트)",
    "moduleCode": "MD13",
    "desc": "프라이빗 기획전 진입을 위해 전용 입장 암호코드를 넣어야 하는 차단 영역입니다.",
    "layoutDescription": "사용자 프론트 영역 전체를 딤드 블러 처리하거나 차단 팝업 형태로 렌더링하며, 중앙에 입장코드 입력창과 확인 버튼을 배치하여 올바른 비밀코드를 입력한 경우에만 하위 컨텐츠를 공개하도록 제어합니다.",
    "backendSettings": [
      { "field": "입장 암호코드", "id": "ACCESS_CODE_VAL", "type": "String (필수)", "desc": "입장에 필요한 전용 영문/숫자 비밀코드 (4~12자리)" },
      { "field": "비밀기획전 여부", "id": "PRIVATE_YN", "type": "Boolean (Y/N)", "desc": "Y 설정 시 페이지 최초 로드 시 입장코드 입력을 강제합니다." },
      { "field": "실패 안내 메시지", "id": "ERR_MSG_TEXT", "type": "String (선택)", "desc": "잘못된 코드 입력 시 하단에 노출할 경고 안내 문구" }
    ],
    "warnings": "1. 입장코드는 대소문자를 구분하므로 기획전 홍보물 제작 시 대소문자를 명확히 구분하여 고객에게 고지해야 합니다.\n2. 보안을 위해 최소 4글자 이상의 복잡한 문자열로 코드를 세팅할 것을 강하게 가이드 권장합니다.",
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "최소 4글자",
      "prodMax": "최대 12글자",
      "adminValidation": "입장 암호코드는 공백을 포함할 수 없으며, 4자 미만이거나 12자를 초과하는 경우 넥사크로 유효성 검사에서 저장 반려됩니다."
    }
  },
  "APPLY": {
    "cardKey": "APPLY",
    "name": "응모하기",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardEnter.xfdl (어드민) / EventApply.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "럭키 드로우나 사은 행사 등에 실시간 원클릭으로 응모 및 접수하는 버튼 영역입니다.",
    "layoutDescription": "사용자 프론트 영역에서 이벤트 타이틀, 응모 대상 및 기간 설명과 함께 실시간 원클릭 '응모하기' 버튼을 노출합니다. 중복 참여 제한 옵션에 따라 로그인한 사용자가 이미 응모한 경우 '응모 완료'로 동적 변경됩니다.",
    "backendSettings": [
      { "field": "이벤트 일련번호", "id": "EVENT_NO", "type": "Integer (필수)", "desc": "연동할 백엔드 프로모션 이벤트 고유 번호" },
      { "field": "응모 기회 구분", "id": "APPLY_CHANCE_DIV", "type": "Combo (ONCE / DAILY / UNLIMIT)", "desc": "ONCE: 기간 내 1회만 응모, DAILY: 매일 1회 응모, UNLIMIT: 무제한 응모" },
      { "field": "마케팅 동의 필수 여부", "id": "MKT_AGREE_REQ_YN", "type": "Boolean (Y/N)", "desc": "Y 설정 시 마케팅 수신동의 팝업 체크 후 응모 처리" },
      { "field": "버튼 텍스트", "id": "BTN_TEXT_VAL", "type": "String (20자 한도)", "desc": "응모 버튼에 노출될 액션 문구 (기본값: 응모하기)" }
    ],
    "warnings": "1. 연동된 백엔드 이벤트 번호가 종료되었거나 실존하지 않는 경우, 응모 시 에러 얼럿이 발생하므로 백엔드 이벤트 생성을 반드시 선행해야 합니다.\n2. 로그인 체크가 필수이므로 비로그인 사용자는 로그인 페이지로 자동 이동됩니다.",
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "최소 1자 (버튼명)",
      "prodMax": "최대 20자 (버튼명)",
      "adminValidation": "연동할 이벤트 번호(EVENT_NO)는 필수 숫자 타입으로 입력되어야 하며, 유효하지 않은 포맷인 경우 어드민 단에서 저장이 반려됩니다."
    }
  },
  "EMP_PROD": {
    "cardKey": "EMP_PROD",
    "name": "강조상품",
    "category": "PROD",
    "sourceFile": "frmPlanCardFeaturedProduct.xfdl (어드민) / FeaturedProduct.tsx (프론트)",
    "moduleCode": "MD6",
    "desc": "일반 리스트 중에서 메인으로 가장 많이 소구할 단독 강조형 딜 레이아웃입니다.",
    "layoutDescription": "사용자 프론트 영역에서 일반적인 3열/4열 격자 레이아웃을 탈피하여, 단 하나의 메인 추천 상품을 전면에 와이드하게(가로 100% 비주얼 배너급 크기로) 노출하고 상품명, 혜택, 상세 소개 글을 우측 또는 하단에 시원하게 배치하는 프리미엄 강조 구좌입니다.",
    "backendSettings": [
      { "field": "상품 코드", "id": "PRODUCT_CD", "type": "String (필수)", "desc": "강조 노출할 13자리 상품 고유 식별 번호" },
      { "field": "추천 강조 문구", "id": "FEAT_COMMENT_VAL", "type": "String (60자 한도, 필수)", "desc": "상품 하단에 추가 노출할 감성적인 추천 소구 텍스트" },
      { "field": "비주얼 배경색", "id": "FEAT_BG_COLOR_VAL", "type": "Color Hex (선택)", "desc": "강조 구좌의 뒷배경을 채울 브랜드 HSL 계열 컬러값" },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 여부" }
    ],
    "warnings": "1. 단독으로 상품을 극대화 소구하므로, 고화질의 정비율 상품 비주얼 컷이 확보되어 있어야 고급스러운 브랜드 감성을 유지할 수 있습니다.\n2. 추천 강조 문구는 한글 30자(60byte)를 초과해 등록할 경우 모바일 뷰에서 개행 오버플로우가 생기므로 글자 수 제약에 특별히 주의해야 합니다.",
    "imageGuidelines": {
      "pcSize": "가로 800px × 세로 800px 권장 (1:1 정비율 비주얼 컷)",
      "moSize": "가로 600px × 세로 600px 권장 (1:1 정비율 비주얼 컷)",
      "allowTypes": "JPG, JPEG, PNG, GIF",
      "maxSize": "200KB 이하",
      "adminValidation": "강조상품의 대표 썸네일은 200KB를 초과할 수 없으며, 어드민 업로드 시 용량 체크 필터에 의해 초과분은 업로드가 원천 차단됩니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 1개 상품 매핑",
      "tabMax": "최대 1개 상품만 구성 가능 (단독 강조 구좌)",
      "prodMin": "최소 1자 (추천 문구)",
      "prodMax": "최대 60byte (한글 30자)",
      "adminValidation": "어드민 저장 시 단 1개의 상품 코드만 입력해야 하며, 2개 이상의 코드를 기재하거나 공백인 경우 저장 유효성 오류 메시지와 함께 저장이 자동으로 반려됩니다."
    }
  },
  "SHARE": {
    "cardKey": "SHARE",
    "name": "공유하기",
    "category": "NAV",
    "sourceFile": "frmPlanCardShare.xfdl (어드민) / SnsShare.tsx (프론트)",
    "moduleCode": "SHARE",
    "desc": "기획전 전용 SNS 공유(카카오톡) 및 URL 복사 버튼 구좌를 배치하여 바이럴 효과를 극대화하는 컴포넌트입니다.",
    "layoutDescription": "사용자 화면(PC/MO)에서는 배경색상 및 여백 옵션이 적용된 컨테이너 내부에 타이틀과 설명 문구가 노출되며, 하단에는 카카오톡 공유 및 URL 복사하기 버튼이 가로 배치됩니다. 카카오톡 공유는 카카오톡 피드 메시지를 전송하고, URL 복사하기는 기획전 고유 URL(제휴 코드 파라미터가 연동된 주소)을 클립보드에 복사합니다. 로그인 여부 검증 및 ETag 로그 전송이 연동되어 작동합니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (Hex Color)", "desc": "기획전 카드의 배경색상 Hex Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 유효성 패턴 체크가 실행됩니다. 프론트엔드 렌더링 시 입력한 색상의 8% 투명도로 연하게 배경색이 적용됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "SHRG_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "타이틀 영역 윗부분에 표시되는 설명 텍스트 문구입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "SHRG_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "중앙에 크게 배치되는 메인 헤드라인 텍스트입니다. 줄바꿈(\\n) 기준 최대 2줄까지만 입력 가능합니다." },
      { "field": "하단 설명 문구", "id": "SHRG_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 보조 설명 텍스트입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "카카오톡 공유", "id": "USE_YN (KK)", "type": "Radio (Y/N)", "desc": "카카오톡 공유 기능 버튼의 노출 및 작동 활성화 여부를 선택합니다." },
      { "field": "URL 복사", "id": "USE_YN (URL)", "type": "Radio (Y/N)", "desc": "URL 복사 기능 버튼의 노출 및 작동 활성화 여부를 선택합니다." },
      { "field": "공유 이미지 구분", "id": "SHRG_IMG_TYPE_VAL", "type": "Radio (E/C)", "desc": "E: 기획전 배너 자동 대체 / C: 수기 이미지 개별 등록" },
      { "field": "모바일 공유 이미지", "id": "MOBI_IMG_PATH_NM", "type": "File (최대 200KB)", "desc": "공유 이미지 구분이 'C(이미지 등록)'로 선택된 경우 노출할 썸네일 이미지 파일입니다. (PC 이미지 권장 000px / 모바일 이미지 권장 000px, 200KB 제한)" },
      { "field": "AF코드 사용", "id": "AFLN_CD", "type": "Combo", "desc": "공유 링크 내 제휴 코드 주입 종류를 지정합니다. (미사용 / SH002 주문적재 / SH003 방문적재)" },
      { "field": "연관카드번호", "id": "RLTS_CARD_MSTR_NO", "type": "String (숫자)", "desc": "AF코드를 사용(SH002, SH003)할 때 필수 매핑되는 기획전 내 마스터 카드 번호(MSTR_NO)입니다. 연관 코드가 없을 시 연관카드번호가 비활성화됩니다." }
    ],
    "codeSnippet": "// SnsShare.tsx - 제휴코드 조회 후 공유 처리 핵심 코드\nconst { refetch } = useFetchExhbShrgAfCodeGET({\n  exhbNo: Number(exhbNo),\n  evntNo: Number(evntNo),\n  handleSuccess: (data) => {\n    const afCode = data.body ?? \"\";\n    let shareUrl = window.location.href;\n\n    if (!!afCode) {\n      if (searchParams.get(\"af\")) {\n        const url = new URL(shareUrl);\n        const paramsToDelete = [\"af\", \"sc\", \"sp\"];\n        paramsToDelete.forEach((param) => url.searchParams.delete(param));\n        shareUrl = url.toString();\n      }\n      shareUrl += shareUrl.indexOf(\"?\") > 0 ? \"&\" : \"?\";\n      shareUrl += `af=${afCode}&sc=${loginInfo.customerId}&sp=${exhbNo}`;\n    }\n    afterCheckAfCode(shareUrl);\n  }\n});\n\nfunction afterCheckAfCode(shareUrl: string) {\n  if (shareType === \"URL\") {\n    copyClipboard({\n      value: shareUrl,\n      onSuccess: () =>\n        LFAlert.alert(\"클립보드에 복사되었습니다.\").then(() => {\n          handleEventMutation(shareType);\n        }),\n    });\n  } else if (shareType === \"KAKAO\") {\n    sns.KakaoTalk({\n      installTalk: true,\n      objectType: \"feed\",\n      content: {\n        title: `[LF mall]\\n${planNm}`,\n        imageWidth: 300,\n        imageHeight: 300,\n        imageUrl: `${IMAGE_ROOT_PATH}/${thumbImg}`,\n        link: { mobileWebUrl: shareUrl, webUrl: shareUrl }\n      },\n      buttons: [\n        { title: \"웹으로 보기\", link: { mobileWebUrl: shareUrl, webUrl: shareUrl } },\n        { title: \"앱으로 보기\", link: { androidExecParams: \"url=\" + encodeUrl_android, iosExecParams: \"url=\" + encodeUrl_ios } }\n      ]\n    });\n    handleEventMutation(shareType);\n  }\n}",
    "warnings": "1. [설명문구 배타성] 상단 설명 문구(SHRG_HEDR_TEXT)와 하단 설명 문구(SHRG_SUB_TEXT)는 어드민 시스템 제약 상 절대 동시에 입력하여 저장할 수 없습니다. 둘 다 값이 있을 경우 유효성 에러와 함께 저장이 반려됩니다.\n2. [채널 선택 제한] 카카오톡 공유와 URL 복사 라디오 버튼이 둘 다 'N(사용안함)'으로 세팅될 수 없으며, 저장을 위해선 최소 1개 이상 사용하도록 유효성이 검사됩니다.\n3. [이미지 등록 필수성] 공유 이미지 구분을 'C(이미지 등록)'로 선택했음에도 모바일 공유 이미지(MOBI_IMG_PATH_NM)가 업로드되어 있지 않으면 에러가 노출됩니다.\n4. [비로그인 차단 및 이동] 프론트 화면에서 로그인하지 않은 세션의 사용자가 버튼을 클릭하면 '로그인 후 참여해주세요.' 얼럿이 작동하고 로그인 화면으로 자동 이동합니다.\n5. [제휴 파라미터 조립 규칙] 로그인 상태인 경우, 제휴코드 조회 API를 통해 획득한 afCode를 반영하여 'https://.../planning.shtml?af={afCode}&sc={customerId}&sp={exhbNo}' 주소 파라미터를 조립합니다. 만약 기존 주소에 이미 af, sc, sp가 존재하면 해당 파라미터들을 지우고 덮어씁니다.\n6. [이벤트 로그 및 참여 이력] 공유 동작이 완료되면 ETag 이벤트 로그('5_카카오톡' 또는 '4_URL복사')를 발생시키고, 기획전 공유 참여 이력 API를 호출해 참가 이력을 갱신합니다.",
    "imageGuidelines": {
      "pcSize": "제한 없음 (기본 이미지 썸네일 사용)",
      "moSize": "기본 이미지 사이즈 000px × (제한없음) (정비율 1:1 권장)",
      "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
      "maxSize": "파일당 최대 200KB 이하",
      "adminValidation": "공유 이미지를 수기 등록할 때, 모바일 이미지 파일 용량이 200KB를 초과할 경우 넥사크로 UI 및 서버의 파일 용량 체크 로직에 의해 즉시 차단 및 파일 초기화가 이뤄집니다."
    },
    "qtyGuidelines": {
      "tabMin": "최소 1개 채널 선택 필수",
      "tabMax": "최대 2개 채널 선택 가능 (카카오톡, URL)",
      "prodMin": "해당 없음",
      "prodMax": "해당 없음",
      "adminValidation": "어드민 저장 시 카카오톡과 URL 복사 채널이 둘 다 미사용 처리되어 있는 경우 저장이 차단됩니다. 또한, AF코드 선택 콤보가 '미사용'이 아닐 경우에만 연관카드번호(RLTS_CARD_MSTR_NO) 입력 필드가 비활성화 상태에서 활성화 상태로 전환됩니다."
    }
  },
  "BUY_KING": {
    "cardKey": "BUY_KING",
    "name": "구매왕",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardTopBuyer.xfdl (어드민) / TopBuyerLeaderboard.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "기획전 기간 동안 실시간 최고 구매액 결제 순위(1~10위) 리더보드와 함께 증정 사은품 정보를 전시하여 구매를 유도하는 마케팅 특화 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 Hex 배경색의 8% 불투명도 톤이 배경으로 깔린 세련된 보드가 노출됩니다. 상단 설명 문구와 2줄 이내의 메인 타이틀이 배치되며, 좌측 또는 상단에는 지정된 사은품 이미지(PC/MO 공통 1:1 정비율), 사은품명, 브랜드 및 상당 가치 텍스트가 박스 형태로 매력적으로 렌더링됩니다. 우측 또는 하단에는 마스킹된 고객명(예: 김*우)과 총 누적 구매 금액이 포함된 실시간 랭킹 리더보드 테이블이 구매 현황 표시 여부(PRHS_PNCN_SIGN_YN)에 따라 동적으로 로딩됩니다. 최하단에는 당첨자 발표 여부(PRWN_ANNO_DD_SIGN_YN)에 따라 지정된 당첨자 발표일이 깔끔하게 표시됩니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 색상 포맷 유효성이 검증되며, 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 톤업하여 배경으로 자동 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 헤더 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "PC 사은품 이미지", "id": "PC_IMG_PATH_NM", "type": "File (640x640px 권장)", "desc": "사은품 카드 좌측에 표출될 이미지 파일입니다. (최대 200KB 이하)" },
      { "field": "모바일 사은품 이미지", "id": "MOBI_IMG_PATH_NM", "type": "File (640x640px 권장)", "desc": "모바일 사은품 카드 상단에 표출될 이미지 파일입니다. (최대 200KB 이하)" },
      { "field": "사은품 브랜드", "id": "PRSN_BRAND_NM", "type": "String (30byte 한도)", "desc": "사은품 증정 대상 브랜드명입니다. (예: 'HAZZYS LADIES')" },
      { "field": "사은품명", "id": "PRSN_NM", "type": "String (50byte 한도)", "desc": "사은품 증정 상품명입니다. (예: '서머 린넨 숄더백')" },
      { "field": "사은품가격(가치)", "id": "PRSN_PRC_TEXT", "type": "String (30byte 한도)", "desc": "사은품의 가치 설명 텍스트입니다. (예: '15만원 상당' 또는 '99,000원 상당')" },
      { "field": "구매 현황 표시여부", "id": "PRHS_PNCN_SIGN_YN", "type": "Radio (Y/N)", "desc": "실시간 랭킹 리더보드 테이블의 노출 여부를 제어합니다." },
      { "field": "당첨자 발표 표시여부", "id": "PRWN_ANNO_DD_SIGN_YN", "type": "Radio (Y/N)", "desc": "당첨자 발표 일시 노출 여부를 제어합니다." },
      { "field": "당첨자 발표일", "id": "PRWN_ANNO_DD", "type": "DateTime (YYYYMMDD hhmmss)", "desc": "당첨자를 공식 발표할 년월일 및 시간입니다. (예: '20260630 180000'). Y 표시 상태에서만 활성화됩니다." },
      { "field": "상품 조건", "id": "comboProdCondition", "type": "Combo (A/L/B/M)", "desc": "A: 전체상품대상, L: 전관행사대상 (전관행사 ID 필수), B: 뱃지상품대상 (이벤트번호 필수), M: 수기상품대상 (어드민 저장 완료 후 상품 등록 팝업 활성화)." },
      { "field": "전관행사 ID / 이벤트번호", "id": "editProdConditionSubVal", "type": "String / Integer", "desc": "상품 조건이 전관행사('L')일 때는 전관행사 ID를 콤마(,) 구분자로, 뱃지상품('B')일 때는 단일 이벤트 번호 숫자를 매핑합니다." }
    ],
    "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 형태(7~8자)여야 하며 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 만족하지 않을 시 저장이 반려됩니다. 프론트 렌더링 시에는 이 색상의 8% 농도로 연하게 배경색이 적용됩니다.\n2. [설명문구 배타성] 상단 설명 문구와 하단 설명 문구는 동시에 기입할 수 없으며, 유효성 검사에서 둘 다 값이 채워져 있으면 에러 얼럿이 노출됩니다.\n3. [당첨일시 검증] 당첨자 발표일 표시여부를 'Y'로 할 경우, 발표일(Calendar)과 시간(Edit)이 둘 다 필수로 입력되어야 하며, 시간 포맷은 24시간 형식의 6자리 숫자(hhmmss)여야 합니다. 이를 위반하면 저장 시 유효성 에러가 발생합니다.\n4. [상품조건 필수값 및 수기 제한] 전관행사대상 시 전관행사 ID, 뱃지상품대상 시 이벤트 번호가 반드시 입력되어야 합니다. 수기상품의 경우 카드가 데이터베이스에 최소 1회 저장되어 고유 이벤트 번호(EVNT_NO)를 획득하기 전에는 상품 등록 팝업을 열 수 없으므로 신규 작성 시에는 '전체상품대상' 등으로 선저장 후 수정 모드에서 등록해야 합니다.\n5. [이미지 용량 제한] 업로드하는 PC 및 모바일 사은품 이미지 파일 크기는 각각 최대 200KB를 넘을 수 없으며, 초과 시 업로드가 즉시 에러 얼럿과 함께 취소됩니다.",
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "최소 1자 (텍스트 입력 항목)",
      "prodMax": "브랜드명 30byte, 사은품명 50byte, 사은품가격 30byte 제한",
      "adminValidation": "사은품 텍스트 규격(브랜드 최대 30byte, 사은품명 최대 50byte, 사은품가격 최대 30byte) 및 타이틀 규격(최대 22byte), 설명문구(각 최대 50byte) 바이트 한도가 입력 단에서 실시간(oninput, onkeyup)으로 감시 및 자동 잘림 처리됩니다. 사은품 이미지는 200KB 이하의 가로세로 640x640px 1:1 이미지를 필수 업로드해야 저장이 승인됩니다."
    }
  },
  "RANDOM_NO": {
    "cardKey": "RANDOM_NO",
    "name": "난수입력",
    "category": "NAV",
    "sourceFile": "frmPlanCardRandomNumber.xfdl (어드민) / RandomNo.tsx (프론트)",
    "moduleCode": "MD13",
    "desc": "배포된 전용 시리얼 쿠폰이나 1회용 프로모션 난수코드를 사용자 화면에서 입력하여 실시간 검증을 거쳐 매핑된 쿠폰 혜택을 즉시 발급받을 수 있는 시리얼/난수 프로모션 연동 컴포넌트입니다.",
    "layoutDescription": "Hex 배경색상 위에 상단 설명 문구, 메인 타이틀(최대 2줄)이 렌더링되며, 설정에 따라 사용자가 시리얼 번호를 입력할 수 있는 직각 인풋 박스와 인증/혜택 지급 완료를 처리하는 가로형 버튼이 정밀 정렬되어 표출됩니다. 난수 사용 여부가 미사용(N)일 때는 인풋 박스가 숨겨지고 혜택 받기 버튼만 원드랍 형태로 나타납니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 입력 시 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 톤업하여 배경으로 자동 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 헤더 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "난수 사용여부", "id": "RNNO_USE_YN", "type": "Radio (Y/N, 필수)", "desc": "난수 입력 박스 노출 여부입니다. Y 설정 시 인풋 박스가 렌더링되며, N 설정 시 버튼만 노출됩니다." },
      { "field": "프롬프트", "id": "EXCU_TEXT_VAL", "type": "String (30byte 한도, 필수)", "desc": "사용자가 난수 코드를 입력하는 인풋 박스의 placeholder 문구입니다." },
      { "field": "버튼 색상", "id": "BTN_CLR_VAL", "type": "Radio (BK/WH, 필수)", "desc": "인증/등록 버튼의 색상을 설정합니다. BK: 블랙, WH: 화이트." },
      { "field": "버튼 텍스트", "id": "BTN_TEXT_VAL", "type": "String (24byte 한도, 필수)", "desc": "인증/등록 버튼에 노출될 텍스트입니다." },
      { "field": "난수 구좌 마스터 설정", "id": "dsRound", "type": "DataSet", "desc": "난수 입력 구좌별 고유 순번(NTOR_SEQ), 프로모션 ID(PRMN_ID), 판매예약 번호(SASN_OFF_SNO) 및 혜택여부(BENEFIT_YN)를 매핑합니다. (난수 개수 설정에 따라 1~6행 유동적 생성)" },
      { "field": "연결 제휴 난수 코드", "id": "dsRandomSave", "type": "DataSet", "desc": "각 구좌별로 사용자가 입력하여 적용 및 매핑될 제휴 난수 마스터 번호(RNNO_MSTR_NO, 구좌당 최대 5개)를 저장합니다." },
      { "field": "난수 발급 대상 회원", "id": "dsCondition", "type": "DataSet", "desc": "각 구좌별 난수 발급 대상을 설정합니다. 기존회원(E)/신규회원(N)/윈백회원(W) 다중 체크 조합 및 VIP 승급 여부(AFLN_MBR_GRD_PMOT_YN, Y/N)를 지정합니다." },
      { "field": "연결 쿠폰 혜택", "id": "dsBenfitCoupon", "type": "DataSet", "desc": "각 구좌별 조건 달성 시 실시간 지급할 마스터 쿠폰 ID(CPN_ID_VAL, 구좌당 최대 5개)를 지정하여 매핑합니다." }
    ],
    "codeSnippet": "// RandomNo.tsx 프론트엔드 연동 핵심 로직\nconst checkRnnoNo = () => {\n  if (isPreview) return;\n\n  if (!loginInfo.isLoginSuccess) {\n    LFAlert.alert(\"로그인이 필요한 서비스입니다.\").then(() => {\n      navigate(ROUTE_PATH.LOGIN, {\n        state: { from: { pathname: location.pathname + location.search } },\n      });\n      return;\n    });\n  } else if (eventInfo?.body?.rnnoUseYn === \"Y\" && !rnnoNo) {\n    LFAlert.alert(\"코드를 입력해주세요.\");\n    return;\n  }\n\n  isLoading.current = true;\n\n  exbhRnnoNoJoin.mutate({\n    evntNo: Number(template?.exhbCardNo),\n    exhbNo: Number(template.exhbNo),\n    rnnoNo: String(rnnoNo)?.trim(),\n    rnnoUseYn: String(eventInfo?.body?.rnnoUseYn),\n    siteCd: \"03\",\n  });\n};",
    "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 형태(7~8자)여야 하며 정규식 만족 필수입니다. 공란이 아닐 경우 프론트에서는 설정된 색상의 8% 투명도로 연하게 배경 톤을 연출합니다.\n2. [설명문구 배타성] 상단 설명 문구(EVNT_HEDR_TEXT)와 하단 설명 문구(EVNT_SUB_TEXT)는 배타적 속성으로, 두 영역 모두에 값이 채워져 있으면 어드민에서 저장 시 에러가 노출되고 반려됩니다.\n3. [난수 사용 여부 및 프롬프트 필수] 난수 사용여부(RNNO_USE_YN)와 프롬프트(EXCU_TEXT_VAL) 항목은 어드민 저장 시 상시 필수값으로 체크되어 비어 있는 경우 에러가 발생합니다.\n4. [발급 대상 필수 및 VIP 조건] 등록하는 각 구좌별로 최소 1개 이상의 발급 대상 회원 구분(기존/신규/윈백)이 체크되어야 합니다. VIP 승급 혜택 활성화 시 사전 협의된 제휴 기획전이 아닌 경우 사용을 지양해 주십시오.\n5. [발급 대상 합산 유효성 검사 (★매우 중요)] 어드민 저장 시, 난수 사용(Y) 상태인 경우 연결한 난수 코드별로, 난수 미사용(N) 상태인 경우 전체 구좌 대상으로 회원 구분 컬럼값 합산 시 기존회원(E), 신규회원(N), 윈백회원(W)이 모두 최소 1회 이상 다중 조합 매핑되어 커버되어야 저장이 정상 완결됩니다. 이를 누락할 시 '난수코드와 발급대상을 확인해주세요' 등의 에러가 발생합니다.",
    "qtyGuidelines": {
      "tabMin": "최소 1개 난수 구좌 설정 필요",
      "tabMax": "최대 6개 난수 구좌까지 추가 지원",
      "prodMin": "구좌당 연결 난수/쿠폰 각각 최대 5개 매핑 가능",
      "prodMax": "프롬프트 최대 30byte, 버튼 텍스트 최대 24byte 제한",
      "adminValidation": "난수 구좌의 개수는 어드민 Plus/Minus 버튼을 통해 1~6 범위 내로 제어됩니다. 텍스트 바이트 한도 (설명 문구 각 50byte, 타이틀 22byte, 프롬프트 30byte, 버튼명 24byte)는 입력 시 실시간으로 계산되어 한도 초과 시 자동 컷오프 처리됩니다."
    }
  },
  "SALE_CODE": {
    "cardKey": "SALE_CODE",
    "name": "할인코드",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardDiscountCode.xfdl (어드민) / DiscountCodeBlock.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "제휴 할인코드 복사 및 입력, 대상 회원 등급 필터링 및 팝업 안내를 복합 지원하며 하단 제휴 스토어 바로가기 버튼을 연계하는 기획전 제휴 전용 프로모션 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 Hex 배경색의 8% 불투명도 배경 톤을 가진 보드가 노출됩니다. 상단 설명 문구와 2줄 이내의 메인 타이틀이 배치되고, 할인코드 개수(1~4개)에 맞춘 쿠폰 카드가 그리드(PC 2열, 모바일 1열) 레이아웃으로 동적 렌더링됩니다. 개별 쿠폰은 지정된 배경 이미지 및 로고 이미지(PC/MO 규격), 그리고 복사 대상 난수코드 텍스트 박스, 쿠폰 사용이 제한되는 대상 회원 등급 뱃지가 가시성 있게 표출됩니다. 난수 복사 시 지정된 팝업 안내 텍스트가 안내 얼럿 형태로 동작합니다. 최하단에는 바로가기 버튼 설정(BTN_ACTN_TYPE_VAL='Y')이 적용되었을 경우 제휴 스토어로 연결(현재창/새창, ETAG 랜딩)해 주는 가로 100% 라운드 버튼이 함께 출력됩니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 색상 포맷 유효성이 검증되며, 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 톤업하여 배경으로 자동 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 헤더 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "할인코드 개수", "id": "editCodeNum", "type": "Integer (1~4)", "desc": "화면에 구성할 개별 할인코드 쿠폰의 개수입니다. 1~4 범위 내에서만 조작이 가능하며, 적용 시 개수만큼 설정 폼 구역(divCode1~4)이 활성화됩니다." },
      { "field": "난수 코드", "id": "RNNO_VAL", "type": "String (20byte 한도, 필수)", "desc": "쿠폰 카드로 노출되며 사용자가 복사/적용하여 쓸 실제 할인코드 문자열입니다." },
      { "field": "대상 회원", "id": "dsCond / CNDT_TYPE_VAL / STDR_VAL", "type": "Checkbox (다중선택, 필수)", "desc": "할인코드 적용 대상을 제한합니다. CNDT_TYPE_VAL='LFM' 기준으로 SP(S_Platinum), PT(Platinum), GD(Gold), SV(Silver), BK(Black), PP(Purple), RD(Red) 등급 코드를 체크한 수만큼 매핑 바인딩합니다. '전체' 체크 시 일괄 체크/해제가 지원됩니다." },
      { "field": "쿠폰 PC 이미지", "id": "PC_IMG_PATH_NM", "type": "File (480x222px 권장, 필수)", "desc": "쿠폰 카드의 배경이 될 PC 이미지 파일입니다. (최대 200KB 이하, 자사 쿠폰 규격인 600x276px도 사용 가능)" },
      { "field": "쿠폰 모바일 이미지", "id": "MOBI_IMG_PATH_NM", "type": "File (480x222px 권장, 필수)", "desc": "쿠폰 카드의 배경이 될 모바일 이미지 파일입니다. (최대 200KB 이하)" },
      { "field": "로고 PC 이미지", "id": "PC_LOGO_IMG_PATH_NM", "type": "File (295x24px 권장)", "desc": "쿠폰 카드 상단 브랜드 로고 영역에 표시될 PC 이미지 파일입니다. (최대 200KB 이하)" },
      { "field": "로고 모바일 이미지", "id": "MOBI_LOGO_IMG_PATH_NM", "type": "File (295x24px 권장)", "desc": "쿠폰 카드 상단 브랜드 로고 영역에 표시될 모바일 이미지 파일입니다. (최대 200KB 이하)" },
      { "field": "팝업 텍스트", "id": "EVNT_NTOR_MAIN_TEXT", "type": "String (30byte 한도)", "desc": "코드 복사 또는 적용 액션 시 브라우저 얼럿 안내창에 노출할 메시지입니다." },
      { "field": "버튼 사용여부", "id": "BTN_ACTN_TYPE_VAL", "type": "Radio (Y/N)", "desc": "하단 공통 바로가기 버튼의 노출 여부를 설정합니다. N일 시 하위 버튼 설정 항목은 disabled 및 null로 초기화됩니다." },
      { "field": "버튼 링크 타겟", "id": "LINK_TRGE_VAL", "type": "Combo (S/N)", "desc": "S: 현재창 (_self), N: 새창 (_blank)으로 이동 타겟을 정의합니다." },
      { "field": "버튼 링크 URL", "id": "LINK_URL_VAL", "type": "String", "desc": "버튼 클릭 시 연결될 PC용 바로가기 웹페이지 주소입니다. (필수)" },
      { "field": "ETAG 여부", "id": "LINK_DIV_VAL", "type": "Combo (Y/N)", "desc": "바로가기 이동 시 eTAG 랜딩 추적 방식을 활성화할지 여부입니다. Y 선택 필수." },
      { "field": "버튼 명칭", "id": "BTN_TEXT_VAL", "type": "String (필수)", "desc": "바로가기 버튼 상에 표시될 텍스트 명칭입니다." }
    ],
    "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 형태(7~8자)여야 하며 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 만족하지 않을 시 저장이 반려됩니다. 프론트 렌더링 시에는 이 색상의 8% 농도로 연하게 배경색이 적용됩니다.\n2. [설명문구 배타성] 상단 설명 문구와 하단 설명 문구는 동시에 기입할 수 없으며, 유효성 검사에서 둘 다 값이 채워져 있으면 에러 얼럿이 노출됩니다.\n3. [할인코드 구좌 필수 기입] 적용한 개수(1~4개)만큼 생성되는 모든 코드 영역에서 '난수 코드(RNNO_VAL)', '대상 회원 등급(최소 1개 이상)', 'PC/MO 쿠폰 이미지(필수)'가 입력되지 않으면 저장 유효성 검사 단계에서 반려 에러가 발생합니다.\n4. [하단 버튼 검증] 버튼 사용여부를 'Y'로 활성화한 경우, 링크 타겟, 링크 URL, ETAG 여부, 버튼 명칭이 전부 비어 있지 않고 모두 적법한 데이터 포맷으로 채워져야 저장이 완결됩니다.\n5. [이미지 용량 제한] 업로드하는 쿠폰 이미지 및 브랜드 로고 이미지 파일 크기는 각각 최대 200KB를 넘을 수 없으며, 초과 시 업로드가 즉시 에러 얼럿과 함께 취소됩니다.",
    "qtyGuidelines": {
      "tabMin": "최소 1개 할인코드 구좌 구성 필요",
      "tabMax": "최대 4개 할인코드 구좌까지 추가 지원",
      "prodMin": "개별 할인코드 난수 최대 20byte, 팝업 텍스트 최대 30byte 제한",
      "prodMax": "대상 회원 등급은 최대 7개 등급 중 중복 및 다중 매핑 가능",
      "adminValidation": "할인코드 문자열 바이트 한도(20byte) 및 팝업 안내 텍스트 바이트 한도(30byte)는 입력 단에서 실시간(oninput, onkeyup)으로 감시되어 초과 기입 시 자동 컷오프 처리됩니다. 쿠폰 이미지(권장 480x222px)와 브랜드 로고 이미지(권장 295x24px)는 파일 당 200KB 이하 규격에 맞추어 필수 업로드해야 저장이 승인됩니다."
    }
  },
  "CNDT_BNFT": {
    "cardKey": "CNDT_BNFT",
    "name": "조건혜택",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardBenefitC.xfdl (어드민) / ConditionalBenefit.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "특정 회원 등급, 누적 결제금액, 구매 횟수 등 정교하게 개인화된 응모 조건에 따라 1~10회차별 미션을 달성하면 쿠폰, 사은품, 마일리지 등의 혜택을 다운로드할 수 있는 응모/미션형 특화 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 Hex 배경색의 8% 불투명도 배경 톤 위에 RichText로 작성한 이벤트 설명 및 이벤트 이미지(PC/MO)가 노출됩니다. 응모 조건 유형(단수/복수)에 따라 각 회차별 조건(구매금액/구매횟수) 달성도가 지정된 프로그레스바 색상(Hex) 및 버튼 색상(블랙/화이트)으로 시각화되어 렌더링됩니다. 고객의 미션 진행 상태에 따라 달성 완료 회차는 완료 상태 버튼명(BTN_CMPE_TEXT_VAL), 진행 중 회차는 신청용 버튼명(BTN_TEXT_VAL)과 함께 프로그레스바 게이지바가 차오르고, 미개봉 회차는 Lock(자물쇠) 스타일로 블라인드 렌더링됩니다. 선착순 사용(radioEntryYN='Y') 시 '선착순 노출문구'와 회차별 한정 수량 실시간 게이지가 가시화됩니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 색상 포맷 유효성이 검증되며, 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 톤업하여 배경으로 자동 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 헤더 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "이벤트 설명", "id": "WebBrowser01", "type": "RichText (HTML)", "desc": "에디터를 통해 작성하는 이벤트 및 혜택 참여 상세 안내 본문입니다." },
      { "field": "이벤트 이미지 (PC / MO)", "id": "PC_IMG_PATH_NM / MOBI_IMG_PATH_NM", "type": "File (640x640px 권장)", "desc": "이벤트 대표 이미지입니다. PC/모바일 개별 업로드하며 파일 당 최대 200KB 이하만 허용됩니다." },
      { "field": "버튼명 / 완료 버튼명", "id": "BTN_TEXT_VAL / BTN_CMPE_TEXT_VAL", "type": "String (각 30byte 한도, 필수)", "desc": "미신청 및 달성 전 활성 상태 버튼 텍스트와, 참여 완료 또는 마감 상태일 때 노출되는 버튼 텍스트입니다." },
      { "field": "버튼 색상", "id": "BTN_CLR_VAL", "type": "Radio (BK/WH, 필수)", "desc": "버튼 배경 색상 테마를 결정합니다. BK: 블랙, WH: 화이트." },
      { "field": "프로그레스바 색상", "id": "PRGS_LINE_CLR_VAL", "type": "String (최대 7자, 필수)", "desc": "미션 달성도를 표시할 진행 게이지바의 Hex 색상 코드입니다. (예: #000000)" },
      { "field": "응모 조건 구분", "id": "radioConditionType", "type": "Radio (S/P, 필수)", "desc": "S: 단수 조건 (1개의 조건만 설정), P: 복수 조건 (2개의 개별 조건을 설정하여 다중 만족 체크)." },
      { "field": "조건1/조건2 타이틀", "id": "editConditionTilte1 / editConditionTilte2", "type": "String (각 30byte 한도)", "desc": "복수 조건('P') 설정 시 활성화되는 개별 조건의 대표 레이블 명칭입니다. (예: '첫 구매 조건', 'VIP 등급 조건')" },
      { "field": "응모 회차 수", "id": "editEntryRound", "type": "Integer (1~10, 필수)", "desc": "혜택을 지급받을 수 있는 총 응모 회차 수입니다. 적용 시 회차 개수만큼 혜택 설정 구역(divDay1~10)이 아래에 활성화됩니다." },
      { "field": "지급 방식", "id": "radioPayoutType", "type": "Radio (I/A, 필수)", "desc": "I: 즉시 지급 (쿠폰/EGM만 가능), A: 수기 지급 (마일리지만 가능)." },
      { "field": "응모 방식", "id": "radioDuplicateType", "type": "Radio (N/Y, 필수)", "desc": "N: 기간 내 전체 1회만 응모 가능, Y: 회차별 중복 응모 가능." },
      { "field": "구매내역 팝업", "id": "radioPopupYN", "type": "Radio (Y/N, 필수)", "desc": "고객 화면상에 구매 실적 내역 확인 팝업을 활성화할지 여부입니다." },
      { "field": "선착순 조건", "id": "radioEntryYN", "type": "Radio (Y/N, 필수)", "desc": "Y: 선착순 선착 기준 적용, N: 미적용. Y일 시 선착순 노출문구 및 회차별 혜택 인원이 필수가 됩니다." },
      { "field": "선착순 노출문구", "id": "editEntryTitle", "type": "String", "desc": "선착순 사용('Y') 시 표출될 공지 메시지입니다. (예: '선착순 마감 주의')" },
      { "field": "회차별 혜택 인원", "id": "PRSN_QTY", "type": "Integer", "desc": "선착순 사용('Y') 시 각 회차별로 혜택을 수령할 수 있는 최대 선착순 정원입니다. (0명 지정 불가)" },
      { "field": "회차별 혜택 기간", "id": "calStartDate / editStartTime / calEndDate / editEndTime", "type": "DateTime (필수)", "desc": "각 회차별 응모 및 참여 시작/종료 일시입니다. 기획전 전체 기간 내에 존재해야 합니다." },
      { "field": "회차별 상세 조건", "id": "editCond1 / editCond2", "type": "Integer", "desc": "각 회차의 미션 달성 기준입니다. checkCond1(구매금액) 및 checkCond2(구매횟수) 중 1개 이상을 선택하여 숫자(0 불가)를 지정해야 합니다." },
      { "field": "혜택 유형", "id": "comboBenefitType", "type": "Combo (C/G/M, 필수)", "desc": "C: 쿠폰 (즉시 지급만 가능), G: 사은품 (즉시/수기 모두 가능), M: 마일리지 (수기 지급만 가능, 1회차만 단독 사용 가능)." }
    ],
    "warnings": "1. [배경 및 프로그레스바 색상 검증] 배경색상 및 프로그레스바 색상은 '#'을 포함한 7자 또는 8자 Hex Code 포맷 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 만족해야 하며, 어긋나면 저장이 반려됩니다.\n2. [설명문구 배타성] 상단 설명 문구와 하단 설명 문구는 어드민 검증에 의해 동시에 입력할 수 없습니다. 하나는 공백이어야 유효성 에러를 피할 수 있습니다.\n3. [지급방식-혜택유형 결합 제약] 즉시 지급('I')일 때는 마일리지('M')를 혜택으로 지정할 수 없고, 수기 지급('A')일 때는 쿠폰('C')을 지정할 수 없습니다. 위반 시 저장 전 밸리데이션 검사에서 에러 메시지와 함께 저장이 반려됩니다.\n4. [마일리지 제약 조건] 마일리지('M')는 응모 회차 수(editEntryRound)가 1인 경우에만 혜택 유형으로 지정할 수 있습니다. 2회차 이상인데 마일리지를 선택하면 저장이 불가능합니다. 또한, 여러 회차를 구성할 경우 모든 회차의 혜택 유형은 동일해야 합니다.\n5. [복수 조건 및 타이틀] 응모 조건을 복수('P')로 지정할 경우, 조건 1과 조건 2의 타이틀이 각각 채워져 있어야 하고 조건 2의 대상상품 및 혜택 상세 조건2가 필수적으로 입력 및 매핑되어야 합니다.\n6. [회차별 기간 검증] 각 회차의 시작/종료 일시는 기획전 마스터 기간 내에 위치해야 하며, 회차별 기간이 서로 중복되거나 앞 회차의 종료일시보다 뒷 회차의 시작일시가 앞설 경우 기간 중복 반려 에러가 작동합니다.\n7. [선착순 및 조건값 검증] 선착순 사용('Y') 시 선착순 노출문구가 누락되거나, 개별 회차의 혜택 인원이 0명 이하일 때, 또는 회차별 혜택 상세 조건의 금액/횟수 수치가 0일 때 저장 유효성 검사 단계에서 에러가 발생합니다.\n8. [이미지 제한] 업로드하는 이벤트 이미지 용량이 200KB를 초과할 시 파일 정보 체크 단계에서 에러가 발생하며 업로드가 거부됩니다.",
    "qtyGuidelines": {
      "tabMin": "최소 1회차 이상 구성 필요",
      "tabMax": "최대 10회차까지 응모 회차 조건 설정 제공",
      "prodMin": "구매금액 조건 1원 이상, 구매횟수 조건 1회 이상 필수 설정 (0 지정 불가)",
      "prodMax": "타이틀 최대 22byte, 설명문구 최대 50byte, 버튼명 30byte, 조건 타이틀 30byte 한도",
      "adminValidation": "어드민 저장 시 응모 방식에 따른 혜택 유형별(쿠폰/마일리지) 호환성 유효성 체크, 회차별 기간 중복 연산 검증, 상세 조건값의 0 제한 검증이 서버 저장 트랜잭션 전 단계에서 엄격히 통제되며, 개별 파일 용량이 200KB를 초과하는 경우 파일 찾기 완료 즉시 파일 사이즈 유효성 팝업과 함께 인풋이 초기화됩니다."
    }
  },
  "RANGE": {
    "cardKey": "RANGE",
    "name": "레인지",
    "category": "PROD",
    "sourceFile": "frmPlanCardRange.xfdl (어드민) / RangeCard.tsx, RangeContent.tsx (프론트)",
    "moduleCode": "MD13",
    "desc": "가격대/할인율/사이즈별 필터 칩과 1단/2단 분류 탭을 지원하는 지능형 상품 레인지 필터링 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 다단 Depth를 지원하는 분류 탭 메뉴바가 노출됩니다. 사용자는 1단 및 2단 탭을 통해 카테고리/브랜드를 탐색할 수 있으며, 탭별로 지정된 배경색상 및 텍스트 문구가 반영됩니다. 하단에는 할인율/가격대/사이즈 기준의 필터 칩(Chip)들이 나열되어 사용자가 선택한 범위 내의 상품 목록만을 최대 50개(viewCount)까지 동적으로 필터링하여 화면에 즉시 노출합니다. 또한, 모바일 화면에서는 SW3_1(3x1 Swiper), SW3_2(3x2 그리드 Swiper), SW2_1, SW2_2, SW1_2, SW1_3 등의 복합 Swiper 레이아웃이 적용되고, PC 화면에서는 SW4_1(4x1), SW4_2(4x2) Swiper 레이아웃으로 유연하게 반응형 렌더링 전환됩니다. 뒤로가기 시 이전 탐색 상태를 복구하기 위해 세션 스토리지(rangePrevTabInfo, rangePrevOption, rangePrevSlide, eventTemplateV3ScrollPosition)에 탭 정보, 선택된 옵션 필터 및 슬라이드 스크롤 위치를 캐싱하여 자연스러운 UX를 유지합니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6}$/ 패턴으로 색상 포맷 유효성이 엄격히 검증됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 헤더 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "1단 탭 구성", "id": "FIST_TAB_USE_YN", "type": "Boolean (Y/N)", "desc": "1단 탭의 사용여부를 결정합니다." },
      { "field": "1단 탭 분류코드", "id": "FIST_TAB_CLFC_CD", "type": "Combo (BR/BS/CL/CM/CS)", "desc": "BR: 브랜드(대표), BS: 브랜드(서브), CL: 카테고리(대), CM: 카테고리(중), CS: 카테고리(소) 중 탭의 분류 기준을 선택합니다. 2단 탭 분류코드와 중복 선택이 불가합니다." },
      { "field": "1단 탭 랜덤", "id": "RNDM_SORT_YN", "type": "Boolean (Y/N)", "desc": "1단 탭 메뉴의 노출 순서를 랜덤하게 셔플할지 여부를 결정합니다." },
      { "field": "2단 탭 구성", "id": "SCND_TAB_USE_YN", "type": "Boolean (Y/N)", "desc": "2단 탭(다단 구조)의 사용여부를 결정합니다. 1단 탭 미사용 시에는 사용으로 설정할 수 없습니다." },
      { "field": "2단 탭 분류코드", "id": "SCND_TAB_CLFC_CD", "type": "Combo (BR/BS/CL/CM/CS)", "desc": "2단 탭 메뉴의 분류 기준을 선택합니다. 1단 탭 분류코드와 중복 선택이 불가합니다." },
      { "field": "2단 탭 랜덤", "id": "SCND_TAB_RNDM_SORT_YN", "type": "Boolean (Y/N)", "desc": "2단 탭 메뉴의 노출 순서를 랜덤하게 셔플할지 여부를 결정합니다." },
      { "field": "버튼 사용", "id": "BTN_LCTI_VAL", "type": "Boolean (Y/N)", "desc": "탭 내 우측 영역 바로가기 버튼의 노출 여부를 제어합니다." },
      { "field": "상품 정렬 순서", "id": "PROD_DISP_TYPE_VAL", "type": "Combo (A/R/S/V/C/M)", "desc": "A: 등록순, R: 추천순, S: 할인순, V: 조회순, C: 리뷰순, M: 랜덤정렬순 중 기획전 상품 정렬 기준을 결정합니다." },
      { "field": "옵션 구성", "id": "RNG_OPTN_TYPE_VAL", "type": "Radio (SR/PR/SZ)", "desc": "SR: 할인율, PR: 가격대, SZ: 사이즈 중 상품 필터링을 제공할 핵심 옵션 기준을 지정합니다." },
      { "field": "전체탭 사용", "id": "ALL_TAB_USE_YN", "type": "Boolean (Y/N)", "desc": "필터 옵션을 미선택한 기본 상태의 '전체' 보기 탭을 노출할지 여부를 결정합니다. 기본값 Y." },
      { "field": "상품 표현 (MO)", "id": "PROD_EPSR_TYPE_VAL", "type": "Radio (SW3_2/SW3_1/SW2_2/SW2_1/SW1_2/SW1_3)", "desc": "모바일에서 노출될 Swiper 그리드 레이아웃 형식을 설정합니다." },
      { "field": "상품 표현 (PC)", "id": "PC_PROD_EPSR_TYPE_VAL", "type": "Radio (SW4_1/SW4_2)", "desc": "PC에서 노출될 Swiper 그리드 레이아웃 형식을 설정합니다." },
      { "field": "옵션 설정", "id": "dsOptionData", "type": "Dataset Binding", "desc": "할인율/가격대 옵션 선택 시, 지정한 개수(최소 2개 ~ 최대 10개)에 따라 OPTN_STRT_VAL(시작값), OPTN_END_VAL(종료값), OPTN_NM(옵션명)을 바인딩합니다. 사이즈 옵션 시에는 비활성화됩니다." }
    ],
    "warnings": "1. [배경색상 제한] 배경색상은 '#'을 포함한 정교한 Hex Code 양식(예: #FFFFFF)으로 입력해야 하며, 정규식을 벗어나거나 포맷이 불일치할 시 저장이 반려됩니다.\n2. [텍스트 상호 배타성] 상단 설명 문구와 하단 설명 문구는 어드민 시스템 설계 제약 상 동시에 입력할 수 없습니다. 하나가 입력되면 다른 하나는 비어있어야 Validation 에러가 발생하지 않습니다.\n3. [타이틀 제한] 타이틀(EVNT_MAIN_TEXT)은 최대 22byte(한글 약 11자) 이내로 입력해야 하며, 줄바꿈(\\n)은 2줄까지만 허용됩니다. 초과 시 오류 메시지와 함께 저장이 거부됩니다.\n4. [탭 코드 중복 불가] 1단 탭 분류코드와 2단 탭 분류코드에 서로 동일한 값을 매핑할 수 없습니다. 콤보 박스 선택 시 이미 매핑된 분류는 필터링되어 중복 선택이 원천 방지됩니다.\n5. [옵션 구간 규칙] 할인율/가격대 옵션 설정 시 각 구간의 시작값은 종료값보다 작아야 하며, (i-1)번째 옵션의 종료값이 i번째 옵션의 시작값 이상으로 겹쳐서 기입될 경우 중복 에러로 반려됩니다.\n6. [탭 상태 변경 후 분류 필수] 1단/2단 탭 사용여부가 변경될 경우 화면 레이아웃과 데이터 불일치를 막기 위해, 반드시 어드민에서 '엑셀 업로드' 혹은 '자동 분류'를 새로 수행하여 탭 매핑 상태를 동기화한 뒤에만 저장이 승인됩니다.\n7. [용량 제한] 업로드하는 상품 정보와 탭 정보는 서버 전체 트랜잭션 용량 한도 내에서 안전하게 관리되어야 합니다.",
    "qtyGuidelines": {
      "tabMin": "1단 탭 미사용 시 1개 (전체), 사용 시 최소 2개 이상의 분류 탭 구성 필요",
      "tabMax": "1단 탭 최대 15개, 2단 탭 최대 8개까지 추가 및 롤링 가능",
      "prodMin": "각 분류 탭별 최소 4개 이상의 유효 상품 매핑 필수",
      "prodMax": "각 분류 탭별 최대 48개 상품 등록 한도 (필터 적용 시 최대 50개까지 노출)",
      "adminValidation": "어드민(NBOS) 저장 시 각 분류별 매핑된 상품 개수가 4개 미만이거나 48개를 초과할 경우, 데이터 정합성 Validation 오류 메시지와 함께 저장이 강제 반려됩니다. 옵션 구간은 최소 2개에서 최대 10개까지 설정 가능하며, 상품 자동 분류 실행 시에는 브랜드/카테고리 정보를 기준으로 서버단에서 자동 분류 탭 매핑이 연산 처리됩니다. 엑셀 업로드 시 파일의 1열에는 반드시 13자리의 상품코드만 존재해야 합니다."
    }
  },
  "COMMENT": {
    "cardKey": "COMMENT",
    "name": "댓글",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardComment.xfdl (어드민) / Comment.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "사용자들의 실시간 댓글 작성 및 소통 참여가 이루어지는 대화형 영역입니다.",
    "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 Hex 배경색의 8% 불투명도 배경 톤 위에 작성한 상단/하단 설명 문구 및 타이틀이 노출됩니다. 중앙에는 텍스트 및 대댓글을 입력할 수 있는 댓글 입력창(등록 버튼 포함)이 배치되며, 하단에는 전체 댓글 개수 표시와 정렬 필터(최신순/추천순/내글보기) 및 댓글 리스트가 렌더링됩니다. 대댓글 허용(LWRN_CMNT_PMSN_YN='Y') 시 답글 형태의 대댓글 목록이 활성화되며, 하단 중앙의 '댓글 더보기' 버튼을 통해 추가적인 페이지 목록을 불러옵니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 색상 포맷 유효성이 검증되며, 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 딤드 처리되어 배경으로 자동 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "CMNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 상단 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "CMNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "CMNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "대댓글 허용 여부", "id": "LWRN_CMNT_PMSN_YN", "type": "Radio (Y/N, 필수)", "desc": "Y: 대댓글 작성 허용, N: 대댓글 작성 차단. 미지정 시 유효성 검사에서 오류가 발생합니다." },
      { "field": "대댓글 레벨", "id": "LWRN_CMNT_MAX_LVL_VAL", "type": "Integer (기본값 1)", "desc": "대댓글이 허용될 때의 최대 깊이 레벨 수준을 지정합니다." }
    ],
    "warnings": "1. [배경색상 검증] 배경색상 Hex 코드는 '#'을 포함한 7자 또는 8자 Hex Code 포맷 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 만족해야 하며, 어긋나면 저장이 반려됩니다.\n2. [설명문구 배타성] 상단 설명 문구(CMNT_HEDR_TEXT)와 하단 설명 문구(CMNT_SUB_TEXT)는 어드민 검증에 의해 동시에 입력할 수 없습니다. 하나는 공백이어야 유효성 에러를 피할 수 있습니다.\n3. [대댓글 허용 필수] 대댓글 허용 여부(LWRN_CMNT_PMSN_YN)는 필수 선택 항목이며, 미지정 시 '대댓글 허용여부를 선택해 주세요.' 경고가 작동합니다.\n4. [바이트 및 줄바꿈 제한] 타이틀(CMNT_MAIN_TEXT)은 최대 22byte(한글 11자) 이내여야 하고, 줄바꿈은 최대 2줄까지만 허용됩니다. 2줄 초과 시 경고와 함께 뒤 내용이 잘립니다. 상/하단 설명 문구는 각각 최대 50byte(한글 25자) 이내로만 등록이 승인됩니다.\n5. [댓글 내용 제한] 프론트엔드 댓글 입력창에서 작성 가능한 글 길이는 한글 기준 최대 200자(400byte) 이내로 통제됩니다.",
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "해당 없음",
      "prodMax": "해당 없음",
      "adminValidation": "어드민 저장 시 대댓글 허용 여부 필수 체크 및 상/하단 설명의 배타적 중복 입력 밸리데이션 검사, 타이틀의 22byte 및 2줄 제한 유효성 체크가 트랜잭션 전에 동작하여 어긋날 경우 경고 메시지와 함께 저장이 원천 차단됩니다."
    }
  },
  "FCFS_CPN_P": {
    "cardKey": "FCFS_CPN_P",
    "name": "선착순쿠폰상품",
    "category": "PROD",
    "sourceFile": "frmPlanCardFCFSCouponFrod.xfdl (어드민) / CouponProductList.tsx (프론트)",
    "moduleCode": "MD6",
    "desc": "선착순 혜택 대상 상품 목록을 바인딩하여 혜택 뱃지와 함께 노출합니다.",
    "layoutDescription": "사용자 프론트 영역에서 선착순 다운로드 쿠폰의 대상이 되는 특정 상품 목록을 Swiper 롤링 슬라이더 또는 2열/3열 그리드 형태로 매핑 노출하며, 개별 상품의 이미지 좌상단에 '선착순쿠폰' 전용 컬러풀 뱃지를 오버레이 렌더링하는 전용 기획 코너 구좌입니다.",
    "backendSettings": [
      { "field": "매핑 쿠폰 고유 ID", "id": "COUPON_ID_VAL", "type": "String (10자리 숫자, 필수)", "desc": "상품들과 연동될 선착순 쿠폰 식별 번호" },
      { "field": "대상 상품 목록", "id": "TARGET_PRODUCT_CD_LIST", "type": "String (필수)", "desc": "쉼표로 구분된 13자리 상품 코드들" },
      { "field": "뱃지 테마 색상", "id": "BADGE_THEME_CLR", "type": "Combo (CORAL / TEAL / BLACK)", "desc": "상품 위에 띄울 뱃지의 백그라운드 색상 선택" },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 여부" }
    ],
    "warnings": "1. 등록된 상품들은 반드시 매핑된 쿠폰 ID의 사용 조건 및 대상 상품 기준과 완벽하게 일치해야 합니다. 불일치 시 고객 주문 시 쿠폰 미적용 불만이 발생합니다.\n2. 대상 상품은 그리드 미관을 위해 최소 2개 이상 등록해 주세요.",
    "qtyGuidelines": {
      "tabMin": "최소 2개 상품 연동",
      "tabMax": "최대 20개 상품 한도",
      "prodMin": "쿠폰 ID 10자리 필수",
      "prodMax": "해당 없음",
      "adminValidation": "연동 쿠폰 ID가 누락되었거나 상품 목록이 비어 있는 경우, 혹은 10자리 쿠폰 ID가 숫자가 아닐 시 어드민 저장 Validation 단계에서 저장이 차단됩니다."
    }
  },
  "OPT_CONTAINER": {
    "cardKey": "OPT_CONTAINER",
    "name": "옵션컨테이너",
    "category": "NAV",
    "sourceFile": "frmPlanCardOptionContainer.xfdl (어드민) / OptContainer.tsx (프론트)",
    "moduleCode": "MD13",
    "desc": "지정된 상품 목록 내에서 1단/2단 분류 탭을 통해 카테고리를 제공하고, 할인율, 가격대, 사이즈 등의 필터 옵션 칩을 통해 사용자가 원하는 조건의 상품들만 목록에서 실시간 필터링하여 감상할 수 있는 다기능 탭-옵션 필터 결합형 상품 전시 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(모바일 기획전 상세)에서 상하단 여백 및 배경색 설정에 반응하며, 상단/하단 설명 문구와 최대 2줄의 타이틀이 배치됩니다. 그 아래 1단 및 2단 탭 구조 of 분류 탭 메뉴바가 노출되어 카테고리나 브랜드 분류를 탐색할 수 있고, 할인율/가격대/사이즈 기준의 필터 칩들이 노출되어 필터링을 제공합니다. 필터링된 상품들은 모바일 Swiper 그리드 레이아웃(SW3_2, SW3_1, SW2_2, SW2_1, SW1_2, SW1_3) 또는 PC Swiper 그리드 레이아웃(SW4_1, SW4_2) 형태로 유연하게 반응형 렌더링 전환되어 전시됩니다. 뒤로가기 시 이전 탐색 상태를 복구할 수 있도록 세션 스토리지(con, tab, depth1NtorNo, depth2NtorNo, prevOption, optionIdx)에 탭 정보, 선택된 옵션 필터 및 스크롤 위치를 캐싱합니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 유효성이 검증되며, 프론트 렌더링 시 연하게 자동 딤드 처리되어 배경으로 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 헤더 영역에 노출되는 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "탭 형태", "id": "TAB_TYPE_VAL", "type": "Radio (1/2)", "desc": "1: 1단 탭, 2: 2단 탭으로 탭 단수를 결정합니다. 탭형태 수정 시 기존에 입력한 탭 세팅이 강제 초기화되므로 유의하십시오." },
      { "field": "1단 탭 랜덤", "id": "RNDM_SORT_YN", "type": "Boolean (Y/N)", "desc": "1단 탭 메뉴의 노출 순서를 랜덤하게 셔플할지 여부를 결정합니다." },
      { "field": "2단 탭 랜덤", "id": "SCND_TAB_RNDM_SORT_YN", "type": "Boolean (Y/N)", "desc": "2단 탭(다단 구조)의 노출 순서를 랜덤하게 셔플할지 여부를 결정합니다. 1단 탭일 때에는 비활성화됩니다." },
      { "field": "상품 정렬 순서", "id": "PROD_SORT_TYPE_VAL", "type": "Combo (A/R/S/V/C/M)", "desc": "A: 등록순, R: 추천순, S: 할인순, V: 조회순, C: 리뷰순, M: 랜덤정렬순 중 기획전 내 상품 정렬 기준을 결정합니다." },
      { "field": "옵션 구성", "id": "RNG_OPTN_TYPE_VAL", "type": "Radio (SR/PR/SZ)", "desc": "SR: 할인율, PR: 가격대, SZ: 사이즈 중 상품 필터링을 제공할 핵심 옵션 기준을 지정합니다. 사이즈 선택 시 개별 폼 입력은 비활성화됩니다." },
      { "field": "전체탭 사용", "id": "ALL_TAB_USE_YN", "type": "Boolean (Y/N)", "desc": "필터 옵션을 미선택한 기본 상태의 '전체' 보기 탭을 노출할지 여부를 결정합니다. 기본값 Y." },
      { "field": "상품 표현 (MO)", "id": "PROD_EPSR_TYPE_VAL", "type": "Radio (SW3_2/SW3_1/SW2_2/SW2_1/SW1_2/SW1_3)", "desc": "모바일에서 노출될 Swiper 그리드 레이아웃 형식을 설정합니다." },
      { "field": "상품 표현 (PC)", "id": "PC_PROD_EPSR_TYPE_VAL", "type": "Radio (SW4_1/SW4_2)", "desc": "PC에서 노출될 Swiper 그리드 레이아웃 형식을 설정합니다." },
      { "field": "옵션 설정", "id": "dsOptionData", "type": "Dataset Binding", "desc": "할인율/가격대 옵션 선택 시, 지정한 개수(최소 2개 ~ 최대 20개)에 따라 OPTN_STRT_VAL(시작값), OPTN_END_VAL(종료값), OPTN_NM(옵션명)을 바인딩합니다." },
      { "field": "1단/2단 탭 및 상품 관리", "id": "dsEventNtorMngTop / dsEventNtorMngLeaf", "type": "Dataset Binding", "desc": "설정된 탭 구조에 맞춰 개별 탭 명칭 및 해당 탭에 노출할 13자리 상품 코드 목록을 관리하여 맵핑합니다." }
    ],
    "codeSnippet": "// OptContainer.tsx - Front-end React 옵션 필터링 및 Swiper 데이터 바인딩 로직 일부\nconst swiperSlideList = useMemo(() => {\n  let productList = data?.pages[0].eventDealProductList ?? [];\n  let filterList: ExhbEventDealProductDTO[] = [];\n  const optionType = tabInfo.optnType; // SR(할인율), PR(가격대), SZ(사이즈)\n\n  if (selectOption) {\n    if (optionType === \"PR\") {\n      filterList = productList.filter(item => \n        Number(item.dcPrice) >= Number(selectOption.optnStrtVal) &&\n        Number(item.dcPrice) <= Number(selectOption.optnEndVal)\n      );\n    } else if (optionType === \"SR\") {\n      filterList = productList.filter(item => \n        Number(item.dcRate) >= Number(selectOption.optnStrtVal) &&\n        Number(item.dcRate) <= Number(selectOption.optnEndVal)\n      );\n    }\n  } else {\n    filterList = productList;\n  }\n  \n  if (tabInfo.prodSortType === \"M\") {\n    shuffleArray(filterList);\n  }\n  \n  return filterList.map((product, idx) => (\n    <SwiperSlide key={idx}>\n      <OptContItem props={product} template={template} ... />\n    </SwiperSlide>\n  ));\n}, [data, selectOption, tabInfo]);",
    "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 7자 또는 8자 Hex Code 형태(예: #FFFFFF)여야 하며, 정규식을 벗어나거나 포맷이 불일치할 시 저장이 반려됩니다.\n2. [설명문구 배타성] 상단 설명 문구와 하단 설명 문구는 어드민 검증에 의해 동시에 입력할 수 없습니다. 하나는 공백이어야 유효성 에러를 피할 수 있습니다.\n3. [타이틀 및 글자 수 한도] 타이틀은 최대 22byte 이내, 상/하단 설명 문구는 각각 최대 50byte 이내여야 합니다. 타이틀 줄바꿈은 2줄까지만 허용됩니다.\n4. [옵션 구간 규칙] 할인율/가격대 옵션 설정 시 각 구간의 시작값은 종료값보다 작아야 하며, (i-1)번째 옵션의 종료값이 i번째 옵션의 시작값 이상으로 겹쳐서 기입될 경우 중복 에러로 반려됩니다.\n5. [상품 등록 제한] 개별 탭마다 전시할 상품 개수가 최소 4개 미만이거나 40개를 초과할 시 저장 전 유효성 검사 단계에서 에러 발생해 저장이 반려됩니다.\n6. [탭 수정 초기화 경고] 탭 형태를 수정하여 적용할 경우, 기존에 입력해 둔 탭 명칭 및 상품 바인딩 데이터셋이 강제 리셋되므로 사전에 신중히 확인한 뒤 적용하여야 합니다.",
    "imageGuidelines": {
      "pcSize": "해당 없음 (이미지 업로드가 존재하지 않음)",
      "moSize": "해당 없음",
      "allowTypes": "해당 없음",
      "maxSize": "해당 없음",
      "adminValidation": "옵션컨테이너는 이미지 등록 기능이 없으며, 연동된 상품 정보의 대표 이미지를 프론트엔드에서 자동 참조하여 출력합니다."
    },
    "qtyGuidelines": {
      "tabMin": "1단 탭 미사용 시 1개, 사용 시 최소 2개 이상의 분류 탭 구성 필요",
      "tabMax": "최대 8개 탭 구성 지원",
      "prodMin": "각 분류 탭별 최소 4개 이상의 상품 매핑 필수",
      "prodMax": "각 분류 탭별 최대 40개 상품 등록 한도 (옵션 설정은 최소 2개 ~ 최대 20개)",
      "adminValidation": "어드민 저장 시 탭별 상품 개수(4~40개) 유효성 체크, 옵션 설정 개수(2~20개) 체크 및 각 구간 범위 겹침 검증, 그리고 각 탭 명칭 필수 입력 검증이 저장 트랜잭션 전 단계에서 엄격히 통제됩니다. 사이즈 옵션 선택 시에는 옵션 개수 설정이 비활성화됩니다."
    }
  },
  "GAME_CARD1": {
    "cardKey": "GAME_CARD1",
    "name": "게임카드1",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardGameTypeA.xfdl (어드민) / GameCard1.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "고객 참여 활성화를 위해 탑재된 룰렛 회전형 즉석 경품 당첨 미니 게임 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 Hex 배경색의 8% 불투명도 배경 톤 위에 작성한 상단/하단 설명 문구 및 타이틀이 노출됩니다. 중앙에는 5칸 또는 8칸으로 구성된 룰렛 회전판과 시작 핀(START PIN) 버튼이 배치되며, 고객이 클릭하여 룰렛을 작동하면 3D 회전 애니메이션 연출 후 당첨 결과 팝업(LfModal)을 노출하여 경품(쿠폰/사은품/꽝)을 즉시 지급 및 안내합니다. 하단부에는 HTML 에디터를 통해 작성한 게임 참여 방법 및 법적 유의사항(EVNT_DSCR)이 표출됩니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 색상 포맷 유효성이 검증되며, 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 딤드 처리되어 배경으로 자동 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 헤더 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "시작 전 유형", "id": "BFR_CNTN_TYPE_VAL", "type": "Radio (I/M, 필수)", "desc": "게임 시작 전 노출할 콘텐츠 유형을 결정합니다. I: 이미지, M: 동영상." },
      { "field": "시작 전 PC / MO 리소스", "id": "BFR_PC_IMG_PATH_NM / BFR_MOBI_IMG_PATH_NM", "type": "File / String", "desc": "시작 전 유형이 이미지('I')일 때는 이미지 파일을 업로드하고, 동영상('M')일 때는 동영상 URL 주소를 입력합니다." },
      { "field": "시작 후 유형", "id": "AFTR_CNTN_TYPE_VAL", "type": "Radio (I/M, 필수)", "desc": "게임 참여 후 노출할 콘텐츠 유형을 결정합니다. I: 이미지, M: 동영상." },
      { "field": "시작 후 PC / MO 리소스", "id": "AFTR_PC_IMG_PATH_NM / AFTR_MOBI_IMG_PATH_NM", "type": "File / String", "desc": "시작 후 유형이 이미지('I')일 때는 이미지 파일을 업로드하고, 동영상('M')일 때는 동영상 URL 주소를 입력합니다." },
      { "field": "게임 참여 제한수", "id": "APPC_LMTT_CNT", "type": "Integer (필수)", "desc": "고객 ID당 최대 참여 가능한 횟수를 지정합니다." },
      { "field": "룰렛 타입 설정", "id": "radioRouletType", "type": "Radio (5/8, 필수)", "desc": "5: 5칸형 룰렛 회전판 구성, 8: 8칸형 룰렛 회전판 구성. 선택에 따라 혜택 목록 개수 입력 칸이 동적으로 활성화됩니다." },
      { "field": "혜택 개수", "id": "editBenefitCount", "type": "Integer (필수)", "desc": "룰렛 타입에 맞게 5개 또는 8개의 혜택 조각 수를 지정합니다." },
      { "field": "유의사항 본문", "id": "EVNT_DSCR", "type": "RichText (HTML)", "desc": "게임판 하단에 표출될 게임 규칙, 당첨 안내 및 법적 유의사항 내용입니다." },
      { "field": "혜택 상세 설정", "id": "dsBenefitDtl / dsEventMngn", "type": "Dataset Binding", "desc": "각 룰렛 조각별 혜택 유형(C: 쿠폰, F: 사은품, X: 꽝), 당첨확률(%), 쿠폰 ID 매핑(최대 5개), 혜택 한정 인원, 당첨/실패 이미지 등을 1:1로 매핑 설정합니다." }
    ],
    "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 양식(예: #FFFFFF)으로 입력해야 하며 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 벗어나면 저장이 반려됩니다.\n2. [설명문구 배타성] 상단 설명 문구(EVNT_HEDR_TEXT)와 하단 설명 문구(EVNT_SUB_TEXT)는 동시에 입력할 수 없으며 하나는 비어있어야 합니다.\n3. [당첨확률 100% 검증 규칙] 설정된 모든 혜택 영역(1~5회차 또는 1~8회차)의 개별 당첨 확률(editProbability) 합계는 **반드시 정확히 100%**여야 하며, 100%를 초과하거나 미달하면 '당첨확률 합계 100% 맞춰주세요.' 메시지와 함께 서버 저장이 전면 차단됩니다.\n4. [시작 전/후 리소스 필수] 게임 시작 전 및 시작 후의 이미지 또는 동영상 URL 정보가 누락될 경우 '게임시작 전/후 이미지를 등록해주세요.' 혹은 '동영상URL을 등록해주세요.' Validation 오류로 저장이 거부됩니다.\n5. [혜택별 결합 규칙]:\n   - 쿠폰(C): 연결된 쿠폰이 최소 1개 이상 필수이고 이미지 표현 시 쿠폰 이미지 필수.\n   - 사은품(F): 사은품 이미지 필수 및 사은품 명칭 필수, 선착순 체크 시 선착순 인원 필수.\n   - 꽝(X): 당첨 실패 시 안내할 실패 이미지가 반드시 업로드되어야 합니다.\n6. [시작 후 수정 불가] 기획전 상태가 시작(`START`)인 경우에는 혜택 조각 개수 조절 및 개별 혜택 데이터 변경이 안전을 위해 비활성화 및 차단됩니다.",
    "imageGuidelines": {
      "pcSize": "480px × 가변 높이 (룰렛판 및 혜택 이미지 1:1 PNG 권장)",
      "moSize": "480px × 가변 높이 (1:1 비율 권장)",
      "allowTypes": "PNG, JPG, JPEG, GIF",
      "maxSize": "파일당 최대 200KB 이하",
      "adminValidation": "넥사크로 UI 이미지 등록 시 200KB를 초과할 경우 용량 한도 초과 오류와 함께 업로드가 취소되며, 투명도가 가미된 룰렛판 및 실패 이미지는 PNG 포맷으로 디자인할 것을 권장합니다."
    },
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "룰렛 타입(5 또는 8)에 맞추어 최소 5개 또는 8개의 혜택 행 세팅 필수",
      "prodMax": "최대 8개 혜택 영역(조각) 설정 제한",
      "adminValidation": "룰렛 타입이 5일 때는 5개의 혜택만 등록되어야 하고, 8일 때는 8개의 혜택이 정상 매핑되어야 합니다. 또한, 각 쿠폰 혜롯 슬롯마다 최대 5개까지의 쿠폰 ID가 다중 바인딩 가능(maxBenefitCnt: '5')합니다."
    }
  },
  "GAME_CARD2": {
    "cardKey": "GAME_CARD2",
    "name": "게임카드2",
    "category": "PROMOTION",
    "sourceFile": "frmPlanCardGameTypeB.xfdl (어드민) / casualGameTypeB.tsx (프론트)",
    "moduleCode": "MD3",
    "desc": "고객 참여 활성화를 위해 탑재된 카드 뒤집기(Flap) 즉석 경품 당첨 미니 게임 컴포넌트입니다.",
    "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 어드민에서 입력한 상단/하단 설명 문구 및 타이틀이 전시되며, 그 하단에 HSL 브랜드 색상 기반의 뒤집기 카드 세트(기본 3장 또는 6장 배치)가 노출됩니다. 고객이 한 장의 카드를 클릭하여 뒤집으면 smooth한 3D 회전 플랩(Flap) 애니메이션 효과와 함께 뒷면에 배치된 개별 옵션 모션(GIF)이 재생된 후 즉석 당첨 결과 팝업(LfModal)이 노출되어 혜택(쿠폰/사은품/꽝)을 지급합니다. 최하단부에는 유의사항 본문(EVNT_DSCR)이 표출됩니다.",
    "backendSettings": [
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "String (최대 7자)", "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 색상 포맷 유효성이 검증되며, 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 딤드 처리되어 배경으로 자동 표현됩니다." },
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩 적용 여부를 설정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "컴포넌트 헤더 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "시작 전 유형", "id": "BFR_CNTN_TYPE_VAL", "type": "Radio (I/M, 필수)", "desc": "게임 시작 전 노출할 콘텐츠 유형을 결정합니다. I: 이미지, M: 동영상." },
      { "field": "시작 전 PC / MO 리소스", "id": "BFR_PC_IMG_PATH_NM / BFR_MOBI_IMG_PATH_NM", "type": "File / String", "desc": "시작 전 유형이 이미지('I')일 때는 이미지 파일을 업로드하고, 동영상('M')일 때는 동영상 URL 주소를 입력합니다." },
      { "field": "게임 참여 제한수", "id": "APPC_LMTT_CNT", "type": "Integer (필수)", "desc": "고객 ID당 최대 참여 가능한 횟수를 지정합니다. 기본값 1." },
      { "field": "유의사항 본문", "id": "EVNT_DSCR", "type": "RichText (HTML)", "desc": "게임판 하단에 표출될 게임 규칙, 당첨 안내 및 법적 유의사항 내용입니다. 최대 50자 제한(staNotice)." },
      { "field": "옵션 이미지 표현 방식", "id": "radioImageDispType / OPTN_TYPE_VAL", "type": "Radio (I / N, 필수)", "desc": "I: 카드 뒷면 기본 이미지 필수 노출, N: 기본 이미지 생략 (모션 이미지만 사용)." },
      { "field": "옵션 개수", "id": "editOptionCount", "type": "Integer (필수)", "desc": "화면에 구성할 뒤집기 카드(옵션)의 개수 지정 (1~10개). 스피너 조절 후 적용 버튼 필수 클릭." },
      { "field": "옵션 상세 설정", "id": "dsOption", "type": "Dataset Binding", "desc": "개별 카드 옵션별 명칭(최대 10자), 기본 이미지(200KB 이하), 선택 모션 이미지(GIF 포맷 필수, 200KB 이하)를 1:1 매핑 설정합니다." },
      { "field": "혜택 개수", "id": "editBenefitCount", "type": "Integer (필수)", "desc": "혜택의 총 개수를 지정합니다 (1~10개)." },
      { "field": "혜택 상세 설정", "id": "dsBenefitDtl / dsEventMngn", "type": "Dataset Binding", "desc": "각 혜택 조각별 혜택 유형(C: 쿠폰, F: 사은품, X: 꽝), 당첨확률(%), 쿠폰 ID 매핑(최대 5개), 혜택 한정 인원, 당첨/실패 이미지 등을 1:1로 매핑 설정합니다." }
    ],
    "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 양식(예: #FFFFFF)으로 입력해야 하며 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 벗어나면 저장이 반려됩니다.\n2. [설명문구 배타성] 상단 설명 문구(EVNT_HEDR_TEXT)와 하단 설명 문구(EVNT_SUB_TEXT)는 동시에 입력할 수 없으며 하나는 비어있어야 합니다.\n3. [타이틀 및 줄바꿈] 타이틀 문구는 최대 30자 한글 제한이 적용되며 엔터 키를 활용한 줄바꿈은 최대 2줄까지만 허용되고 초과 시 반려됩니다.\n4. [당첨확률 100% 검증 규칙] 설정된 모든 혜택의 개별 당첨 확률(editProbability) 합계는 **반드시 정확히 100%**여야 하며, 100%를 초과하거나 미달하면 '당첨확률 합계 100% 맞춰주세요.' 메시지와 함께 서버 저장이 전면 차단됩니다.\n5. [옵션 설정 검증] 각 카드 옵션의 명칭은 필수이며 최대 10자 제한입니다. 또한 선택 모션 이미지는 **반드시 GIF 포맷**이어야 하며, 200KB 용량 제한을 초과하면 저장이 원천 차단됩니다.\n6. [혜택별 결합 규칙]:\n   - 쿠폰(C): 연결된 쿠폰이 최소 1개 이상 필수이고 다중 쿠폰(2개 이상) 또는 이미지표현(I) 설정 시 쿠폰 이미지 필수.\n   - 사은품(F): 사은품 이미지 필수 및 사은품 명칭(최대 20자) 필수, 선착순 체크 시 선착순 인원 필수.\n   - 꽝(X): 당첨 실패 시 안내할 실패 이미지가 반드시 업로드되어야 합니다.\n7. [시작 후 수정 불가] 기획전 상태가 시작(\"START\")인 경우에는 혜택 조각 개수, 옵션 설정 조절 및 상세 데이터 변경이 안전을 위해 비활성화 및 차단됩니다.",
    "imageGuidelines": {
      "pcSize": "개별 카드 기본 이미지: 1240px × 350px / 모션 GIF: 400px × 400px 권장",
      "moSize": "개별 카드 기본 이미지: 335px × 200px / 모션 GIF: 400px × 400px 권장",
      "allowTypes": "JPG, JPEG, PNG (기본 이미지) / GIF (선택 모션 이미지 전용)",
      "maxSize": "파일당 최대 200KB 이하",
      "adminValidation": "어드민 이미지 파일 업로드 시 200KB를 초과할 경우 경고 메시지와 함께 업로드가 차단되며, 모션 이미지 슬롯에는 GIF 확장자 파일만 업로드 가능하도록 확장자 2차 유효성 체크가 작동합니다."
    },
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "최소 3개 이상의 카드 옵션 행 및 혜택 매핑 구성 권장",
      "prodMax": "최대 10개 카드 옵션 및 10개 혜택 설정 제한",
      "adminValidation": "카드 옵션 개수(editOptionCount)와 혜택 개수(editBenefitCount)는 스피너를 통해 최소 1개에서 최대 10개까지 설정 가능하며, 각각 매핑된 개수만큼의 옵션 명칭/이미지 및 혜택 데이터가 입력되지 않을 경우 저장 유효성 검사 단계에서 에러 알림과 함께 저장이 차단됩니다."
    }
  },
  "TEXT": {
    "cardKey": "TEXT",
    "name": "텍스트",
    "category": "BANNER",
    "sourceFile": "frmPlanCardText.xfdl (어드민) / Intro.tsx (프론트)",
    "moduleCode": "MD2",
    "desc": "자유롭고 감각적인 대/소단 타이틀과 설명 문구를 배치할 수 있는 공용 텍스트 영역입니다. 이미지 업로드 기능 없이 순수 텍스트와 레이아웃 조작을 지원합니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상하단 여백 및 배경 색상 지정에 따라 텍스트가 정렬되어 렌더링됩니다. PC는 기본 중앙 정렬이며, 모바일은 좌측 정렬 레이아웃이 적용됩니다. 컴포넌트는 상단 설명 문구, 메인 타이틀, 하단 설명 문구, 본문 내용, 진행기간 순으로 수직 배열하여 브랜드의 아이덴티티와 가치를 감각적으로 전달합니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진(Margin) 사용 여부를 결정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩(Padding) 사용 여부를 결정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진(Margin) 사용 여부를 결정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩(Padding) 사용 여부를 결정합니다." },
      { "field": "상단 설명 문구", "id": "TEXT_HDR_TITL", "type": "String (50자 한도)", "desc": "타이틀 최상단에 작게 배치되는 강조형 보조 문구입니다." },
      { "field": "타이틀", "id": "TEXT_TITL", "type": "String (30자 한도)", "desc": "텍스트 카드의 메인 헤드라인 제목입니다." },
      { "field": "하단 설명 문구", "id": "TEXT_SUB_TITL", "type": "String (50자 한도)", "desc": "타이틀 바로 하단에 배치되는 서브 설명 텍스트입니다." },
      { "field": "내용", "id": "TEXT_CONTENTS_VAL", "type": "String (120자 한도, 필수)", "desc": "기획전 상세 내용 문구 본문입니다." },
      { "field": "진행기간", "id": "PGSS_PERD_TEXT", "type": "String (선택)", "desc": "진행하는 이벤트 기간 또는 날짜 표시 텍스트입니다." }
    ],
    "codeSnippet": "// Intro.tsx - Front-end React 텍스트(Intro) 컴포넌트 핵심 분석 소스\nexport const Intro = ({ template }) => {\n  const { data } = useFetchPlanIntroModuleGET({ param: { moduleType: template?.moduleType } });\n  if (data?.body?.exhibitionYn === \"N\") return <></>;\n  return (\n    <div className={styles.intro}>\n      {data?.body?.content?.split(\"\\n\").map((title, idx) =>\n        title === \"\" ? <br key={idx} /> : <p key={idx}>{title}</p>\n      )}\n      <p className={styles.date}>{data?.body?.moduleTitle}</p>\n    </div>\n  );\n};",
    "warnings": "1. [이미지 미지원] 텍스트 카드는 이미지를 직접 업로드하거나 배경 이미지로 사용할 수 있는 기능이 아예 존재하지 않습니다. 따라서 오직 단색 배경(White 등)과 텍스트 레이아웃으로만 가이드를 기획해야 합니다.\n2. [정렬 차이 주의] PC 버전은 text-align: center(중앙 정렬) 스펙이 강제 적용되나, 모바일 버전은 text-align: left(좌측 정렬)이 기본 탑재되므로 듀얼 레이아웃 설계 시 시각적 정렬 차이를 감안해야 합니다.\n3. [글자 제한 규격] 타이틀 최대 30자, 상단/하단 설명 문구 각 최대 50자, 본문 내용은 최대 120자 제한이 넥사크로 UI 및 DB 단에서 강력히 규제되므로, 텍스트 입력 시 바이트 한계를 준수해야 합니다.",
    "imageGuidelines": {
      "pcSize": "해당 없음 (이미지 업로드 미지원)",
      "moSize": "해당 없음 (이미지 업로드 미지원)",
      "allowTypes": "해당 없음",
      "maxSize": "해당 없음",
      "adminValidation": "텍스트 카드는 이미지를 업로드할 수 있는 데이터 구조나 파일 핸들러가 구성되어 있지 않습니다. 순수 텍스트 필드로만 데이터를 저장하고 조회합니다."
    },
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "해당 없음",
      "prodMax": "해당 없음",
      "adminValidation": "상품 매핑 기능이 없는 순수 텍스트 카드입니다. 어드민(NBOS) 저장 시 내용(TEXT_CONTENTS_VAL)은 필수 입력 사항이며 빈 값으로 저장할 경우 반려됩니다."
    }
  },
  "REVIEW_GUIDE": {
    "cardKey": "REVIEW_GUIDE",
    "name": "리뷰 작성",
    "category": "NAV",
    "sourceFile": "frmPlanCardReviewGuide.xfdl (어드민)",
    "moduleCode": "RG",
    "desc": "구매자들에게 적극적인 평점 및 리뷰 작성을 유도하고 보상 혜택을 알려주는 위젯입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서는 기획전 내에서 로그인된 사용자의 최근 구매 확정 내역을 비동기 조회하여 노출합니다. 구매 이력이 존재할 경우, 최근 구매한 상품 정보(이미지, 브랜드, 상품명)와 함께 [리뷰 작성] 버튼이 1:1로 매핑되어 표시되며, 클릭 시 해당 상품의 리뷰 작성 팝업 또는 페이지로 즉시 연동됩니다. 만약 구매 이력이 없는 사용자일 경우, 어드민에서 업로드한 이미지 배너(PC/MO)와 함께 대체 신청 버튼(사용 여부 및 명칭 설정 가능)을 제공하여 일반 참여를 유도합니다. 상단 설명 문구, 메인 타이틀, 하단 설명 문구를 자유롭게 설정할 수 있으며, 리뷰 혜택 안내의 노출 여부도 제어할 수 있습니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진(Margin) 사용 여부를 결정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩(Padding) 사용 여부를 결정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진(Margin) 사용 여부를 결정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩(Padding) 사용 여부를 결정합니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50자 한도)", "desc": "타이틀 상단에 노출되는 서브 설명 문구입니다. 하단 설명 문구와 동시에 등록할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (30자 한도)", "desc": "리뷰 작성 영역의 메인 타이틀입니다. 최대 2줄(줄바꿈 \\n)까지 입력할 수 있습니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50자 한도)", "desc": "타이틀 하단에 노출되는 보조 설명 문구입니다. 상단 설명 문구와 동시에 등록할 수 없습니다." },
      { "field": "리뷰 혜택 안내", "id": "GD_USE_YN", "type": "Combo (Y/N)", "desc": "Y: 표현 / N: 표현안함. 리뷰 작성 시 획득할 수 있는 혜택 안내 배너의 노출 여부를 설정합니다." },
      { "field": "리뷰 버튼 명칭", "id": "BTN_TEXT_VAL", "type": "String (20자 한도, 필수)", "desc": "최근 구매 상품 옆에 표시될 리뷰 작성 버튼의 텍스트명입니다." },
      { "field": "서브 타이틀", "id": "MID_TITE_VAL", "type": "String (30자 한도)", "desc": "구매 이력이 없는 사용자에게 노출되는 대체 안내 구좌의 서브 타이틀입니다." },
      { "field": "서브 설명 문구", "id": "EVNT_DSCR", "type": "String (50자 한도)", "desc": "구매 이력이 없는 사용자용 대체 안내 구좌의 서브 설명 문구입니다." },
      { "field": "PC 이미지", "id": "PC_IMG_PATH_NM", "type": "File (640px/가변 권장)", "desc": "구매 이력이 없는 사용자용 대체 배너에 표시될 PC 전용 이미지입니다. 200KB 이하로 제한됩니다." },
      { "field": "MO 이미지", "id": "MOBI_IMG_PATH_NM", "type": "File (750px/가변 권장)", "desc": "구매 이력이 없는 사용자용 대체 배너에 표시될 모바일 전용 이미지입니다. 200KB 이하로 제한됩니다." },
      { "field": "신청 버튼 형태", "id": "BTN_TYPE_VAL", "type": "Radio (Y/N)", "desc": "Y: 사용 / N: 사용안함. 대체 안내 구좌 내 신청 버튼의 노출 여부를 설정합니다." },
      { "field": "신청 버튼 명칭", "id": "BTN_TEXT_VAL", "type": "String (20자 한도)", "desc": "대체 안내 구좌 내 신청 버튼에 노출될 텍스트 명칭입니다. 신청 버튼 형태가 Y일 때 필수입니다." }
    ],
    "codeSnippet": "// frmPlanCardReviewGuide.xfdl.js - 리뷰작성 어드민 유효성 검증 및 입력 제한 스크립트\nthis.fnCheckValidation = function ()\n{\n    // 1. 상단 설명 문구와 하단 설명 문구의 상호 배타성 검증\n    if (this.textTopDesc.value && this.textBottomDesc.value)\n    {        this.gfnAlert(\"msg.err.validator\", [\"상단 설명 문구, 하단 설명 문구 중 하나만 입력하세요.\"]);\n        return false;\n    }\n    // 2. 리뷰 버튼 명칭 필수 입력 검증\n    if (!this.editReviewBtnText.value){\n        this.gfnMessage(\"리뷰 버튼 명칭을 입력해주세요.\", \"A\");\n        return false;\n    }\n    // 3. 대체 신청 버튼 사용 시 신청 버튼 명칭 필수 검증\n    if(this.radioJoinBtnYn.value==\"Y\" && !this.editJoinBtnText.value){\n        this.gfnMessage(\"참여 버튼 명칭을 입력해주세요.\", \"A\");\n        return false;\n    }\n    return true;\n};",
    "warnings": "1. [텍스트 배타 규정] 상단 설명 문구(EVNT_HEDR_TEXT)와 하단 설명 문구(EVNT_SUB_TEXT)는 시스템 제약 상 **절대 동시에 입력하여 등록할 수 없습니다.** 동시에 두 값을 저장하려 할 시 검증 오류로 저장이 반려됩니다.\n2. [리뷰 버튼 필수] 리뷰 버튼 명칭(BTN_TEXT_VAL)은 카드 렌더링에 필요한 핵심 요소이므로 생략 불가능한 필수 입력 사항입니다.\n3. [신청 버튼 필수 검증] 대체 구좌의 신청 버튼 형태를 '사용(Y)'으로 지정할 경우, 신청 버튼 명칭(BTN_TEXT_VAL) 역시 필수로 기입해야 하며 누락 시 검증 단계에서 저장 실패 처리가 납니다.\n4. [배너 이미지 제약] PC/MO 대체 배너 이미지는 확장자 검증 및 용량 검증(최대 200KB 이하)이 수반되며, 업로드 용량을 초과하는 경우 넥사크로 UI 핸들러단에서 즉각 반려 및 차단됩니다.",
    "imageGuidelines": {
      "pcSize": "가로 640px × 세로 높이 제한 없음 (대체 배너 영역용)",
      "moSize": "가로 750px × 세로 높이 제한 없음 (대체 배너 영역용)",
      "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
      "maxSize": "파일당 최대 200KB 이하",
      "adminValidation": "파일 업로드 시 200KB를 1바이트라도 초과하면 넥사크로 UI 내부 파일사이즈 검증 스크립트단에서 경고 메시지와 함께 업로드를 차단합니다."
    },
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "해당 없음",
      "prodMin": "해당 없음 (로그인 사용자의 최근 구매 확정 내역을 API 서버로부터 비동기로 자동 연동하여 호출)",
      "prodMax": "해당 없음",
      "adminValidation": "수동으로 상품을 등록 및 관리하지 않기 때문에 상품 수량 등록 제한이 존재하지 않습니다. 최근 구매 확정 이력을 비동기적으로 조회하여 노출하는 동적 바인딩 컴포넌트입니다."
    }
  },
  "FCFS_CPN_P": {
    "cardKey": "FCFS_CPN_P",
    "name": "선착순쿠폰상품",
    "category": "PROD",
    "sourceFile": "frmPlanCardFCFSCouponFrod.xfdl (어드민) / CouponProduct.tsx (프론트)",
    "moduleCode": "MD6",
    "desc": "선착순 쿠폰 혜택 대상 상품 목록을 탭 및 듀얼 레이아웃 구조로 렌더링하고, 실시간 쿠폰 남은 수량 상태에 맞춰 마감/마감임박 비주얼 뱃지를 노출하는 특화형 상품 카드입니다.",
    "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상하단 여백 및 배경 색상이 지정에 따라 가변 렌더링됩니다. PC 미리보기는 4열 와이드 그리드(SW4_1, SW4_2, LS4) 구조로 시원하게 배치되며, Mobile 미리보기는 Swiper 슬라이더(3x2, 3x1 등) 또는 2열 리스트(LS2) 구조로 렌더링됩니다. 각 상품 썸네일에는 쿠폰의 실시간 잔여량에 따른 배지 및 딤드 오버레이가 작동합니다.",
    "backendSettings": [
      { "field": "여백 상단외부", "id": "CARD_THTP_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 외부 마진(margin) 적용 여부를 설정합니다." },
      { "field": "여백 상단내부", "id": "CARD_THTP_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "상단 내부 패딩(padding) 적용 여부를 설정합니다. 기본값 Y." },
      { "field": "여백 하단외부", "id": "CARD_BTM_EXTR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 외부 마진(margin) 적용 여부를 설정합니다." },
      { "field": "여백 하단내부", "id": "CARD_BTM_INNR_MRGI_USE_YN", "type": "Boolean (Y/N)", "desc": "하단 내부 패딩(padding) 적용 여부를 설정합니다." },
      { "field": "배경색상", "id": "BKGD_CLR_VAL", "type": "Color Hex (선택)", "desc": "배경색을 Hex 코드형태(예: #757575)로 입력합니다. 해당 값은 프론트에서 8% 투명도로 연하게 표현됩니다." },
      { "field": "상단 설명 문구", "id": "EVNT_HEDR_TEXT", "type": "String (50byte 한도)", "desc": "타이틀 위에 배치할 상단 설명 문구입니다. 하단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "타이틀", "id": "EVNT_MAIN_TEXT", "type": "String (22byte 한도)", "desc": "메인 타이틀 제목입니다. 한글 기준 11자 내외 작성이 권장되며, 줄바꿈(\\n)으로 최대 2줄까지 등록 가능합니다." },
      { "field": "하단 설명 문구", "id": "EVNT_SUB_TEXT", "type": "String (50byte 한도)", "desc": "타이틀 아래에 노출될 하단 설명 문구입니다. 상단 설명 문구와 동시에 입력할 수 없습니다." },
      { "field": "특가 마감 문구", "id": "SPPR_CLSN_PHRS_VAL", "type": "String (20byte 한도, 필수)", "desc": "쿠폰 수량이 전체 소진(0개 이하)되었을 때 썸네일 오버레이에 노출할 문구입니다. (예: 쿠폰소진 / 지원마감)" },
      { "field": "상품 정렬 순서", "id": "PROD_SORT_TYPE_VAL", "type": "Combo (A/M)", "desc": "상품 노출 정렬 순서(A: 등록순, M: 랜덤정렬)를 지정합니다." },
      { "field": "탭 형태", "id": "TAB_TYPE_VAL", "type": "Radio (0/1/2)", "desc": "0: 사용안함, 1: 1단 탭, 2: 2단 탭 사용 여부 및 형태를 결정합니다." },
      { "field": "상품 표현 (MO)", "id": "PROD_EPSR_TYPE_VAL", "type": "Radio (SW3_2/SW3_1/SW2_2/SW2_1/SW1_2/SW1_3/LS2)", "desc": "모바일(MO) 사용자 화면에서의 상품 격자 배치 및 슬라이드 형태를 지정합니다." },
      { "field": "상품 표현 (PC)", "id": "PC_PROD_EPSR_TYPE_VAL", "type": "Radio (SW4_1/SW4_2/LS4)", "desc": "PC 사용자 화면에서의 상품 격자 배치 및 슬라이드 형태를 지정합니다." }
    ],
    "codeSnippet": "// CouponProductItem.tsx - 잔여수량(cpnRemainQty) 상태별 렌더링 분기\n<Link\n  to={\"\"}\n  className={`${styles.productItem} ${Number(props?.cpnRemainQty) <= 0 && styles.dimmed}`}\n  onClick={(e) => handleOnClickProduct(e, props?.prodCd || \"\")}\n>\n  <div className={`${styles.prdThumb} ${Number(props?.cpnRemainQty) <= 0 && styles.dimmed}`}>\n    <img src={`${IMAGE_WEB_HOST_URL_PRODUCT_PREFIX}/${props?.imgPath}`} alt=\"상품이미지\" />\n    {Number(props?.cpnRemainQty) <= 0 && <span className={styles.soldout}>{spprClsnPhrs}</span>}\n    {Number(props?.cpnRemainQty) > 0 && Number(props?.cpnRemainQty) < 10 && (\n      <button className={styles.deadline_badge} type=\"button\">\n        <span>마감임박</span>\n      </button>\n    )}\n  </div>\n  <div className={`${styles.prdInfo} ${Number(props?.cpnRemainQty) <= 0 && styles.dimmed}`}>\n    <p className={styles.brand}>{props?.brandEngNm}</p>\n    <p className={styles.name}>{props?.prodNm}</p>\n    {/* 남은수량 배지 */}\n    <button className={`${styles.deal_badge} ${Number(props?.cpnRemainQty) <= 0 ? styles.zero : Number(props?.cpnRemainQty) < 10 ? styles.red : styles.black}`} type=\"button\">\n      <span className={styles.deal_badge__label}>남은수량</span>\n      <span className={styles.deal_badge__right}>{props?.cpnRemainQty}</span>\n    </button>\n  </div>\n</Link>",
    "warnings": "1. [설명문구 상호 배타성] 상단 설명 문구와 하단 설명 문구는 동시에 입력할 수 없으며, 동시에 값이 존재할 경우 어드민 검증에 의해 저장이 반려됩니다.\n2. [특가 마감 문구 필수] 특가 마감 문구(SPPR_CLSN_PHRS_VAL)는 필수 입력 필드이며, 입력하지 않는 경우 어드민에서 경고창과 함께 저장이 차단됩니다.\n3. [배경색상 정규식] 배경색상 필드는 '#'을 포함한 유효한 Hex 코드 형식이어야 합니다.",
    "imageGuidelines": {
      "pcSize": "가로 1240px × 세로 높이 제한 없음 (탭 배너 이미지 사용 시)",
      "moSize": "가로 750px × 세로 높이 제한 없음 (탭 배너 이미지 사용 시)",
      "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
      "maxSize": "파일당 최대 200KB 이하",
      "adminValidation": "넥사크로 어드민에서 탭별 PC/MO 배너 이미지 업로드 시 파일당 200KB를 초과할 경우 업로드가 반려 및 초기화됩니다."
    },
    "qtyGuidelines": {
      "tabMin": "해당 없음",
      "tabMax": "1단 탭 최대 15개, 2단 탭 최대 8개까지 설정 가능",
      "prodMin": "최소 4개 상품 필수 등록",
      "prodMax": "최대 48개 (스와이프형) / 120개 (리스트형)",
      "adminValidation": "각 탭 및 구좌별 등록된 상품 개수가 최소 4개 미만이거나 최대 등록 가능 개수(스와이프 48개, 리스트 120개)를 초과할 경우, 어드민 저장 검증 스크립트단에서 에러 알럿과 함께 저장이 반려됩니다."
    }
  }
}
;