// LFmall Exhibition Guide: FLASH_SALE
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["FLASH_SALE"] = {
  "cardKey": "FLASH_SALE",
  "name": "플래시 세일",
  "category": "PROD",
  "sourceFile": "frmPlanCardFlashSale.xfdl (어드민) / FlashSale.tsx (프론트)",
  "moduleCode": "MD6",
  "desc": "극히 짧은 시간에 강력한 폭탄 파격 세일가를 적용하여 전시하는 구좌입니다. 정해진 진행시간에 맞게 째깍이는 타이머가 노출되며, Swiper 슬라이더로 상품 리스트를 노출합니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상하단 여백 및 배경 색상이 지정에 따라 가변 렌더링되며, 중앙에는 메인 타이틀과 상/하단 설명 문구 중 하나가 노출됩니다. 또한, 진행 시간에 따라 실시간 카운트다운 타이머가 표시되고, 하단에는 Swiper 슬라이더를 통해 등록된 상품(1.113 slidesPerView 모바일 특화 구조)들이 브랜드, 상품명, 할인가(dcRate 적용 시 정가 대비 할인율 오버레이) 정보와 함께 좌우 롤링 형태로 노출됩니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "Color Hex (선택)",
      "desc": "플래시 세일 영역의 배경색을 Hex 코드형태(예: #757575)로 입력합니다. 해당 값은 프론트에서 8% 투명도로 연하게 표현됩니다."
    },
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 외부 마진 적용 여부를 설정합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y."
    },
    {
      "field": "여백 하단외부",
      "id": "CARD_BTM_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "하단 외부 마진 적용 여부를 설정합니다."
    },
    {
      "field": "여백 하단내부",
      "id": "CARD_BTM_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "하단 내부 패딩 적용 여부를 설정합니다."
    },
    {
      "field": "상단 설명 문구",
      "id": "EVNT_HEDR_TEXT",
      "type": "String (50byte 한도)",
      "desc": "타이틀 위에 작게 노출되는 서브 설명입니다. 하단 설명 문구와 동시에 등록할 수 없습니다."
    },
    {
      "field": "타이틀",
      "id": "EVNT_MAIN_TEXT",
      "type": "String (22byte 한도)",
      "desc": "플래시 세일의 메인 타이틀 제목입니다. 한글 기준 11자 내외 작성이 권장됩니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "EVNT_SUB_TEXT",
      "type": "String (50byte 한도)",
      "desc": "타이틀 아래 노출되는 상세 부연설명입니다. 상단 설명 문구와 동시에 등록할 수 없습니다."
    },
    {
      "field": "남은시간 표현",
      "id": "TM_TYPE_VAL",
      "type": "Radio (HMS/HMSMS)",
      "desc": "HMS: 시분초 표시 (HH|MM|SS), HMSMS: 시분초 및 밀리초 표시 (HH|MM|SS|MS)."
    },
    {
      "field": "상품정렬",
      "id": "PROD_SORT_TYPE_VAL",
      "type": "Radio (A/M)",
      "desc": "A: 등록순으로 상품을 고정 전시합니다, M: 랜덤으로 상품 순서를 섞어 노출합니다."
    },
    {
      "field": "상품 코드",
      "id": "PROD_CD",
      "type": "String (필수)",
      "desc": "매핑될 13자리 상품 코드입니다. 총 0건 표시 영역 우측 상품추가 버튼을 통해 관리합니다."
    }
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
};
