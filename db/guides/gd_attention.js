// LFmall Exhibition Guide: ATTENTION
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["ATTENTION"] = {
  "cardKey": "ATTENTION",
  "name": "유의사항",
  "category": "NAV",
  "sourceFile": "frmPlanModify.xfdl (어드민) / Notice.tsx (프론트)",
  "moduleCode": "MD10",
  "desc": "기획전 하단부에 안정적으로 배치하여, 프로모션 대상 조건, 할인/마일리지 적립 한도 및 유효기간, 구매 취소 및 반품 관련 유의조항들을 아코디언 토글 구조로 제공하는 표준 안내 정보 컴포넌트(V2)입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 타이틀 버튼을 클릭하면 smooth하게 본문 영역이 펼쳐지고 닫히는 아코디언 토글이 적용됩니다. 활성화 시 화살표 아이콘이 180도 회전하며, 본문 영역은 연한 그레이 배경(#efefef) 위에 텍스트들이 가독성 높게 정렬됩니다. PC에서는 flex-wrap 기반의 2열 가로 분할 레이아웃으로 넓고 시원하게 구성되며, 모바일에서는 1열 블록 구조로 하단에 누적 전시됩니다. 글자 가독성 확보를 위해 글자색은 PC와 모바일 모두 동일하게 #111111로 통일됩니다.",
  "backendSettings": [
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 상단 여백(Margin) 노출 여부를 제어합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 상단 여백(Padding) 노출 여부를 제어합니다. 기본값 Y."
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
  "codeSnippet": "// Notice.tsx (V2 Mobile 컴포넌트 소스)\nconst Notice = ({ template }: { template: PlanTemplateMasterDTO }) => {\n  const [isActive, setIsActive] = useState<Boolean>(false);\n  const { data: noticeData } = useFetchPlanPrecautionModuleGET({ param: { masterNumber: Number(template?.masterNumber), planSq: Number(template?.planSq), siteCd: \"03\" } });\n  if (noticeData?.body?.exhibitionYn === \"N\" || !noticeData?.body?.planModuleAdditionInfoDTOList?.length) return <></>;\n  return (\n    <div className={`${styles.notice} ${(isActive && styles.active) || \"\"}`}>\n      <button type=\"button\" className={styles.btnOpen} onClick={() => setIsActive(!isActive)}>유의사항</button>\n      {noticeData?.body?.planModuleAdditionInfoDTOList?.map((noticeItem) => (\n        <div key={noticeItem.additionInfoNumber} className={styles.notice__wrap}>\n          {noticeItem.moduleTitle && <strong className={styles.title}>{noticeItem.moduleTitle}</strong>}\n          {noticeItem.content?.split(\"\\n\").map((text: string, idx: number) => text ? (\n            <p className={styles.text} key={`notice_${idx}`}>{text}</p>\n          ) : \"\")}\n        </div>\n      ))}\n    </div>\n  );\n};",
  "warnings": "1. [유의사항 개수 제한] 어드민에서는 최소 1개에서 최대 5개까지의 유의사항 묶음(Precaution Bundle)을 추가하여 구성할 수 있습니다.\n2. [내용 줄바꿈 처리] 각 유의사항 내용(CONT) 입력창에 입력한 줄바꿈(\n)은 프론트에서 자동으로 스플릿되어 독립된 유의사항 리스트 항목(-)으로 변환되어 출력됩니다.\n3. [글자 수 및 용량 제약] 개별 타이틀 및 내용의 입력 글자 수가 시스템 데이터베이스 한계(4000byte, 한글 약 2000자)를 초과할 경우 저장이 반려될 수 있으므로 간결하고 명확한 문구 구성을 권장합니다.",
  "imageGuidelines": {
    "pcSize": "해당 없음",
    "moSize": "해당 없음",
    "allowTypes": "해당 없음",
    "maxSize": "해당 없음",
    "adminValidation": "V2 유의사항 컴포넌트는 이미지 업로드를 지원하지 않으며, 순수 텍스트(타이틀 및 내용)로만 구성되어 렌더링 속도와 가독성을 최적화합니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 1개 묶음",
    "tabMax": "최대 5개 묶음",
    "prodMin": "묶음별 타이틀 최소 1자 이상 기입",
    "prodMax": "묶음별 내용 최대 4000byte (한글 약 2000자)",
    "adminValidation": "어드민(NBOS) 저장 시 선택한 유의사항 개수 콤보(comboPrecaution) 설정값에 따라 타이틀(MDUL_TITL) 및 내용(CONT) 값이 최소 1자 이상 채워져 있어야 유효성 검사를 통과할 수 있으며, 빈 상태로 저장 시 반려 처리됩니다."
  }
};
