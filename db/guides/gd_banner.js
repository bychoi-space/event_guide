// LFmall Exhibition Guide: BANNER
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["BANNER"] = {
  "cardKey": "BANNER",
  "name": "배너",
  "category": "BANNER",
  "sourceFile": "frmPlanCardBanner.xfdl (어드민) / Banner.tsx (프론트)",
  "moduleCode": "MD12",
  "desc": "기획전 본문 내에 구성하는 표준적인 단일 혹은 다단 이미지/링크 연동 배너 컴포넌트입니다. 본문에 자유롭게 적재하여 시각적 구분을 하거나 테마별 페이지 전환용 링크 버튼을 내포할 수 있습니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 타이틀, 설명문구, 버튼이 이미지 위에 겹쳐서 노출(Overlay)되지 않고, 이미지의 위와 아래에 각각 독립적으로 배치되는 수직 레이아웃 형태입니다. 구체적으로 **[상단: 타이틀 & 설명문구] -> [중단: Swiper 슬라이드 이미지 및 페이지네이션 도트] -> [하단: 바로가기 버튼]** 순서로 질서정연하게 렌더링되도록 설계되었습니다. 이미지를 2장 이상 복수 업로드할 경우 중단의 이미지 영역만 Swiper 모듈을 통해 캐러셀(슬라이드) 회전 배너로 작동합니다.",
  "backendSettings": [
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 상단 여백 유무를 설정합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 상단 여백 유무를 설정합니다. 기본값 Y."
    },
    {
      "field": "여백 하단외부",
      "id": "CARD_BTM_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 하단 여백 유무를 설정합니다."
    },
    {
      "field": "여백 하단내부",
      "id": "CARD_BTM_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 하단 여백 유무를 설정합니다."
    },
    {
      "field": "이미지 표현 형식",
      "id": "IMG_WIDE_TYPE_VAL",
      "type": "Combo (S/W)",
      "desc": "S: 기본형 (1240px 중앙 가둠) / W: 와이드형 (1920px 화면 전체 채움)"
    },
    {
      "field": "버튼 형태",
      "id": "BTN_STYL_VAL",
      "type": "Radio (N/S/R)",
      "desc": "N: 버튼 미노출 / S: 직사각형 버튼 / R: 양끝이 둥근 라운드 버튼"
    },
    {
      "field": "버튼 유형",
      "id": "BTN_TYPE_VAL",
      "type": "Radio (O/S)",
      "desc": "O: 투명 배경 고스트 버튼 / S: 채우기 단색 버튼"
    },
    {
      "field": "버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (40byte 한도)",
      "desc": "노출될 버튼 이름입니다. 한글 약 20자 한도 내 작성을 권장합니다."
    },
    {
      "field": "버튼 링크 URL",
      "id": "BTN_MVMN_URL_VAL",
      "type": "String (선택)",
      "desc": "버튼 클릭 시 타겟 랜딩 페이지 링크 주소(PC URL 기준)를 매핑합니다."
    },
    {
      "field": "배너 개별 링크",
      "id": "LINK_URL_VAL",
      "type": "String (선택)",
      "desc": "배너 자체 클릭 시 이동할 타겟 랜딩 URL입니다. PC URL 스펙으로 작성합니다."
    },
    {
      "field": "링크 타겟",
      "id": "LINK_TRGE_VAL",
      "type": "Combo (N/S/B)",
      "desc": "N: 사용안함 / S: 현재창(_self) / B: 새창(_blank)"
    },
    {
      "field": "eTAG 랜딩 여부",
      "id": "LINK_DIV_VAL",
      "type": "Combo (필수)",
      "desc": "배너 링크 클릭 이벤트를 로깅 및 추적하기 위한 필수 태깅 분류 코드입니다."
    },
    {
      "field": "배너 타입",
      "id": "BNR_TYPE_VAL",
      "type": "Radio (B1/S1)",
      "desc": "B1: 기본형 배너 / S1: Swiper 회전 슬라이드 배너 타입을 정의합니다."
    },
    {
      "field": "버튼 색상",
      "id": "BTN_CLR_VAL",
      "type": "Radio (B/W)",
      "desc": "B: 블랙 버튼 / W: 화이트 버튼 색상을 선택합니다."
    }
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
};
