// LFmall Exhibition Guide: BANNER_BLOCK
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["BANNER_BLOCK"] = {
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
    },
    {
      "field": "이미지 표현 형식",
      "id": "IMG_WIDE_TYPE_VAL",
      "type": "Combo (S/W)",
      "desc": "S: 기본형 (1240px 중앙 정렬) / W: 와이드형 (1920px 화면 가득 채움)을 선택합니다."
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
    },
    {
      "field": "배너 타입",
      "id": "BNR_TYPE_VAL",
      "type": "Radio (B1/S1)",
      "desc": "B1: 기본형 배너 / S1: Swiper 회전 슬라이드 배너 타입을 정의합니다."
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
      "field": "버튼 색상",
      "id": "BTN_CLR_VAL",
      "type": "Radio (B/W)",
      "desc": "B: 블랙 버튼 / W: 화이트 버튼 색상을 선택합니다."
    },
    {
      "field": "버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (30byte)",
      "desc": "노출할 버튼의 텍스트 이름입니다."
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
};
