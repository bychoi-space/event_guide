const fs = require('fs');
const path = require('path');

const guidesDir = path.join(__dirname, 'db', 'guides');

const blacklist = new Set([
  'BNR_DIV_VAL', 'PLANSTDT', 'PLANEDDT', 'PC_IMG_PATH_NM', 'NEW_FILE_NAME', 
  'OLD_FILE_NAME', 'CAT_BRAND_DIV_VAL', 'BNR_HEDR_TITL_TEXT', 'BNR_TITE_TEXT', 
  'BNR_SUB_TITE_TEXT', 'RNDM_SORT_YN', 'BDG_PC_IMG_PATH_VAL', 'MOBI_IMG_PATH_NM', 
  'NEW_BFR_PC_IMG_PATH_NM', 'NEW_BFR_MOBI_IMG_PATH_NM', 'NEW_AFTR_PC_IMG_PATH_NM', 
  'NEW_AFTR_MOBI_IMG_PATH_NM', 'NEW_BSCS_IMG_PATH_NM', 'NEW_DYNM_IMG_PATH_NM',
  'PC_IMG_PATH_NM_BNR', 'MOBI_IMG_PATH_NM_BNR', 'PC_IMG_PATH', 'MOBILE_IMG_PATH',
  'BNR_NO', 'EXHB_NO', 'BNR_DETL_NO', 'BNR_DETL_SEQ', 'NEW_PC_IMG_PATH_NM', 
  'NEW_MOBI_IMG_PATH_NM', 'USE_YN', 'RGSR_DT', 'RGSR_ID', 'UPDA_DT', 'UPDA_ID', 
  'MSTR_NO'
]);

function shouldRemove(setting) {
  if (blacklist.has(setting.id)) {
    return true;
  }
  if (setting.field === setting.id) {
    return true;
  }
  if (/^[A-Z0-9_]+$/.test(setting.field)) {
    return true;
  }
  return false;
}

const files = fs.readdirSync(guidesDir).filter(f => f.startsWith('gd_') && f.endsWith('.js'));

for (const file of files) {
  const filePath = path.join(guidesDir, file);
  const cardKey = file.substring(3, file.length - 3).toUpperCase();
  
  global.window = {};
  require(filePath);
  const currentGuide = global.window.ExhibitionGuides[cardKey];
  
  if (!currentGuide) continue;
  
  const oldSettings = currentGuide.backendSettings || [];
  const newSettings = oldSettings.filter(setting => {
    if (shouldRemove(setting)) {
      console.log(`[CLEANUP] ${cardKey}: Removed field ${setting.id} (${setting.field})`);
      return false;
    }
    return true;
  });
  
  currentGuide.backendSettings = newSettings;
  
  const fileOutputContent = `// LFmall Exhibition Guide: ${cardKey}
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["${cardKey}"] = ${JSON.stringify(currentGuide, null, 2)};
`;

  fs.writeFileSync(filePath, '\ufeff' + fileOutputContent, 'utf8');
}

console.log('Cleanup completed.');
