// LFmall Exhibition Guide: TOP_BANNER
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["TOP_BANNER"] = {
  "cardKey": "TOP_BANNER",
  "name": "탑배너",
  "category": "BANNER",
  "sourceFile": "frmPlanCardBanner.xfdl (어드민) / TopBanner.tsx (프론트)",
  "moduleCode": "MD1 (MDL1)",
  "desc": "기획전 최상단에 강렬한 브랜드 이미지를 전달하는 비주얼 포커스 배너입니다. 단일 통 이미지 노출 뿐만 아니라 텍스트 오버레이, 뱃지, 블러 딤드(Dimmed) 레이어 및 직사각형/라운드형 링크 버튼 등의 복합 타이포그래피 요소들을 조립식으로 렌더링할 수 있는 고기능 컴포넌트입니다.",
  "layoutDescription": "최상단 전체 가로폭 반응형으로 렌더링되며, 모바일 화면에서는 세로 비율을 안전하게 확보하기 위해 '스퀘어형(최대 높이 414px 고정)' 뷰 옵션을 지원합니다. UI 유형에 따라 'OP01/OP03 (포토 중심 타이포)' 및 'OP02 (텍스트 중심 타이포)' 레이아웃이 적용되며, 어드민 여백 설정값에 따라 상/하단 내외부 마진(10px 내외)이 정밀하게 동적 가감됩니다.",
  "backendSettings": [
    {
      "field": "이미지 표현 형식",
      "id": "IMG_WIDE_TYPE_VAL",
      "type": "Combo (S/W)",
      "desc": "S: 기본형 (1240px 중앙 가둠) / W: 와이드형 (1920px 화면 가득 채움)"
    },
    {
      "field": "버튼 유형",
      "id": "BTN_TYPE_VAL",
      "type": "Radio (O/S)",
      "desc": "O: 투명 배경에 외곽선만 그리는 고스트 버튼 / S: 채우기 단색 버튼"
    },
    {
      "field": "버튼 스타일",
      "id": "BTN_STYL_VAL",
      "type": "Radio (N/S/R)",
      "desc": "N: 버튼 미노출 / S: 직사각형 버튼 / R: 양끝이 둥근 알약형 라운드 버튼"
    },
    {
      "field": "버튼 링크 URL",
      "id": "BTN_MVMN_URL_VAL",
      "type": "String (필수)",
      "desc": "배너 클릭 또는 전용 버튼 클릭 시 강제 랜딩될 타겟 URL 경로입니다. PC용 스펙을 입력합니다."
    },
    {
      "field": "텍스트 정렬",
      "id": "TEXT_SORT_VAL",
      "type": "Radio (CC/LC)",
      "desc": "CC: 중앙정렬 / LC: 좌측정렬을 지정합니다."
    },
    {
      "field": "텍스트 색상",
      "id": "TEXT_CLR_TYPE_VAL",
      "type": "Radio (BK/WH)",
      "desc": "BK: 블랙 텍스트 / WH: 화이트 텍스트 테마를 선택합니다."
    },
    {
      "field": "카테고리명",
      "id": "CAT_BRAND_NM",
      "type": "String",
      "desc": "상단에 노출되는 대표 브랜드 또는 카테고리 명칭입니다."
    },
    {
      "field": "서브 타이틀(상)",
      "id": "TOP_DSCR_TEXT",
      "type": "String (50byte)",
      "desc": "메인 타이틀 상단에 배치되는 보조 설명 문구입니다."
    },
    {
      "field": "타이틀 메인",
      "id": "HEDR_TEXT_VAL",
      "type": "String (22byte)",
      "desc": "카드의 중앙 메인 타이틀 제목입니다."
    },
    {
      "field": "서브 타이틀(하)",
      "id": "BTM_DSCR_TEXT_VAL",
      "type": "String (50byte)",
      "desc": "메인 타이틀 하단에 배치되는 상세 보조 설명 문구입니다."
    },
    {
      "field": "딤드 적용여부",
      "id": "CLR_OFF_YN",
      "type": "Boolean (Y/N)",
      "desc": "배경 이미지 위에 30% 어두운 블러 딤드(Dimmed) 처리 적용 여부를 선택합니다."
    },
    {
      "field": "진행 기간",
      "id": "EXHB_PERD_TEXT_VAL",
      "type": "String",
      "desc": "이벤트의 상시 진행 여부 또는 특정 시작/종료 일시 텍스트 설정입니다."
    },
    {
      "field": "버튼 색상",
      "id": "BTN_CLR_VAL",
      "type": "Radio (B/W)",
      "desc": "B: 블랙 버튼 / W: 화이트 버튼 색상을 선택합니다."
    },
    {
      "field": "링크 타겟",
      "id": "LINK_TRGE_VAL",
      "type": "Combo (S/B)",
      "desc": "S: 현재창(_self) / B: 새창(_blank)으로 링크 타겟 페이지를 띄우도록 설정합니다."
    },
    {
      "field": "버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (30byte)",
      "desc": "노출할 버튼의 텍스트 이름입니다."
    },
    {
      "field": "eTAG 랜딩구분",
      "id": "LINK_DIV_VAL",
      "type": "Combo (필수)",
      "desc": "배너 클릭 로깅 및 성과 추적을 위한 eTAG 분류 코드 매핑값입니다."
    },
    {
      "field": "배너 타입",
      "id": "BNR_TYPE_VAL",
      "type": "Radio (B1/S1)",
      "desc": "B1: 기본형 배너 / S1: Swiper 회전 슬라이드 배너 타입을 정의합니다."
    }
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
};
