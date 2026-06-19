// LFmall Exhibition Guide: SEARCH
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["SEARCH"] = {
  "cardKey": "SEARCH",
  "name": "검색창",
  "category": "NAV",
  "sourceFile": "frmPlanCardSearch.xfdl (어드민) / SearchInput.tsx + PlanningSearch/index.tsx (프론트)",
  "moduleCode": "MD10",
  "desc": "기획전 내부에서 키워드를 직접 입력하여 원하는 기획전을 즉시 조회할 수 있는 인라인 검색 인풋 컴포넌트입니다. 추천 해시태그를 클릭하면 해당 키워드가 자동 입력되어 검색이 실행됩니다.",
  "layoutDescription": "PC·모바일 공통으로 '진행 중인 기획전' 타이틀(h2) 아래에 배치됩니다. 입력창은 테두리 없이 하단에 2px solid 검정 구분선만 긋는 언더라인 방식이 특징이며, 우측에 SVG 돋보기 아이콘 버튼이 고정됩니다. 입력 중에는 X버튼(지우기)이 돋보기 좌측에 추가로 노출됩니다. 하단에는 어드민에서 등록한 추천 태그가 '#키워드' 형식으로 가로 스크롤 나열됩니다. 검색 영역 전체는 scroll sticky로 상단 고정됩니다(z-index: 6).",
  "backendSettings": [
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 상단 Margin 사용 여부를 설정합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 상단 Padding 사용 여부를 설정합니다. (기본값 Y)"
    },
    {
      "field": "이미지 표현 형식",
      "id": "IMG_WIDE_TYPE_VAL",
      "type": "Combo (S/W)",
      "desc": "S: 기본형 (1240px 중앙 정렬) / W: 와이드형 (1920px 화면 가득 채움)을 선택합니다."
    },
    {
      "field": "배너 타입",
      "id": "BNR_TYPE_VAL",
      "type": "Radio (B1/S1)",
      "desc": "B1: 기본형 배너 / S1: Swiper 회전 슬라이드 배너 타입을 정의합니다."
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
      "field": "링크 타겟",
      "id": "LINK_TRGE_VAL",
      "type": "Combo (S/B)",
      "desc": "S: 현재창(_self) / B: 새창(_blank)으로 링크 타겟 페이지를 띄우도록 설정합니다."
    },
    {
      "field": "eTAG 랜딩구분",
      "id": "LINK_DIV_VAL",
      "type": "Combo (필수)",
      "desc": "배너 클릭 로깅 및 성과 추적을 위한 eTAG 분류 코드 매핑값입니다."
    }
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
};
