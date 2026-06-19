// LFmall Exhibition Guide: PICTORIAL
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["PICTORIAL"] = {
  "cardKey": "PICTORIAL",
  "name": "화보",
  "category": "BANNER",
  "sourceFile": "frmPlanCardPictorial.xfdl (어드민) / Magazine.tsx (프론트)",
  "moduleCode": "MD8",
  "desc": "룩북이나 매거진 화보 레이아웃을 본떠 고화질 이미지를 잡지처럼 넘겨보고, 이미지 내 3x3 핫스팟 구역(1~9번 위치)을 통해 모델 착장 상품을 즉각 태깅하여 바로가기 링크를 연계하는 인터랙티브 스타일 배너 카드입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상단 여백 옵션이 유연하게 동적 가감되며, 에디토리얼 디자인에 맞게 최상단에 화보 썸네일들이 바둑판식 격자로 배치(이미지가 4개인 경우 styles.photo4 전용 레이아웃 분기 구동)됩니다. 그 하단에 메인 타이틀, 홍보 문구 설명이 표시되고, 개별 화보 슬라이드 하단에 설명 문구가 출력됩니다. 화보 이미지 위에 3x3 격자(goProduct no1~no9) 형태로 영역이 구분되어 있어, 사용자가 이미지 내 상품 부위를 직접 탭하면 해당 상품 상세페이지로 부드럽게 화면 이동됩니다.",
  "backendSettings": [
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 상단 여백(Margin) 유무를 설정합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 상단 여백(Padding) 유무를 설정합니다. 기본값 Y."
    },
    {
      "field": "여백 하단외부",
      "id": "CARD_BTM_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 하단 여백(Margin) 유무를 설정합니다."
    },
    {
      "field": "여백 하단내부",
      "id": "CARD_BTM_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 하단 여백(Padding) 유무를 설정합니다."
    },
    {
      "field": "중간 타이틀",
      "id": "MID_TITE_VAL",
      "type": "String (30자 한도)",
      "desc": "화보 슬라이드 영역 바로 상단에 단독 강조되는 보조 타이틀 텍스트입니다."
    },
    {
      "field": "홍보 문구",
      "id": "EVNT_DSCR",
      "type": "String (120자 한도)",
      "desc": "화보 전체의 컨셉이나 브랜드 스토리를 전달하는 본문 상세 글입니다."
    }
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
};
