/* eslint-disable @typescript-eslint/naming-convention */
const langCodes: Record<string, string> = {
  af_na: "Afrikaans (Namibia)",
  af_za: "Afrikaans (South Africa)",
  af: "Afrikaans",
  ak_gh: "Akan (Ghana)",
  ak: "Akan",
  sq_al: "Albanian (Albania)",
  sq: "Albanian",
  am_et: "Amharic (Ethiopia)",
  am: "Amharic",
  ar_dz: "Arabic (Algeria)",
  ar_bh: "Arabic (Bahrain)",
  ar_eg: "Arabic (Egypt)",
  ar_iq: "Arabic (Iraq)",
  ar_jo: "Arabic (Jordan)",
  ar_kw: "Arabic (Kuwait)",
  ar_lb: "Arabic (Lebanon)",
  ar_ly: "Arabic (Libya)",
  ar_ma: "Arabic (Morocco)",
  ar_om: "Arabic (Oman)",
  ar_qa: "Arabic (Qatar)",
  ar_sa: "Arabic (Saudi Arabia)",
  ar_sd: "Arabic (Sudan)",
  ar_sy: "Arabic (Syria)",
  ar_tn: "Arabic (Tunisia)",
  ar_ae: "Arabic (United Arab Emirates)",
  ar_ye: "Arabic (Yemen)",
  ar: "Arabic",
  hy_am: "Armenian (Armenia)",
  hy: "Armenian",
  as_in: "Assamese (India)",
  as: "Assamese",
  asa_tz: "Asu (Tanzania)",
  asa: "Asu",
  az_cyrl: "Azerbaijani (Cyrillic)",
  az_cyrl_az: "Azerbaijani (Cyrillic, Azerbaijan)",
  az_latn: "Azerbaijani (Latin)",
  az_latn_az: "Azerbaijani (Latin, Azerbaijan)",
  az: "Azerbaijani",
  bm_ml: "Bambara (Mali)",
  bm: "Bambara",
  eu_es: "Basque (Spain)",
  eu: "Basque",
  be_by: "Belarusian (Belarus)",
  be: "Belarusian",
  bem_zm: "Bemba (Zambia)",
  bem: "Bemba",
  bez_tz: "Bena (Tanzania)",
  bez: "Bena",
  bn_bd: "Bengali (Bangladesh)",
  bn_in: "Bengali (India)",
  bn: "Bengali",
  bs_ba: "Bosnian (Bosnia and Herzegovina)",
  bs: "Bosnian",
  bg_bg: "Bulgarian (Bulgaria)",
  bg: "Bulgarian",
  my_mm: "Burmese (Myanmar [Burma])",
  my: "Burmese",
  yue_hant_hk: "Cantonese (Traditional, Hong Kong SAR China)",
  ca_es: "Catalan (Spain)",
  ca: "Catalan",
  tzm_latn: "Central Morocco Tamazight (Latin)",
  tzm_latn_ma: "Central Morocco Tamazight (Latin, Morocco)",
  tzm: "Central Morocco Tamazight",
  chr_us: "Cherokee (United States)",
  chr: "Cherokee",
  cgg_ug: "Chiga (Uganda)",
  cgg: "Chiga",
  zh_hans: "Chinese (Simplified Han)",
  zh_hans_cn: "Chinese (Simplified Han, China)",
  zh_hans_hk: "Chinese (Simplified Han, Hong Kong SAR China)",
  zh_hans_mo: "Chinese (Simplified Han, Macau SAR China)",
  zh_hans_sg: "Chinese (Simplified Han, Singapore)",
  zh_hant: "Chinese (Traditional Han)",
  zh_hant_hk: "Chinese (Traditional Han, Hong Kong SAR China)",
  zh_hant_mo: "Chinese (Traditional Han, Macau SAR China)",
  zh_hant_tw: "Chinese (Traditional Han, Taiwan)",
  zh: "Chinese",
  kw_gb: "Cornish (United Kingdom)",
  kw: "Cornish",
  hr_hr: "Croatian (Croatia)",
  hr: "Croatian",
  cs_cz: "Czech (Czech Republic)",
  cs: "Czech",
  da_dk: "Danish (Denmark)",
  da: "Danish",
  nl_be: "Dutch (Belgium)",
  nl_nl: "Dutch (Netherlands)",
  nl: "Dutch",
  ebu_ke: "Embu (Kenya)",
  ebu: "Embu",
  en_as: "English (American Samoa)",
  en_au: "English (Australia)",
  en_be: "English (Belgium)",
  en_bz: "English (Belize)",
  en_bw: "English (Botswana)",
  en_ca: "English (Canada)",
  en_gu: "English (Guam)",
  en_hk: "English (Hong Kong SAR China)",
  en_in: "English (India)",
  en_ie: "English (Ireland)",
  en_il: "English (Israel)",
  en_jm: "English (Jamaica)",
  en_mt: "English (Malta)",
  en_mh: "English (Marshall Islands)",
  en_mu: "English (Mauritius)",
  en_na: "English (Namibia)",
  en_nz: "English (New Zealand)",
  en_mp: "English (Northern Mariana Islands)",
  en_pk: "English (Pakistan)",
  en_ph: "English (Philippines)",
  en_sg: "English (Singapore)",
  en_za: "English (South Africa)",
  en_tt: "English (Trinidad and Tobago)",
  en_um: "English (U.S. Minor Outlying Islands)",
  en_vi: "English (U.S. Virgin Islands)",
  en_gb: "English (United Kingdom)",
  en_us: "English (United States)",
  en_zw: "English (Zimbabwe)",
  en: "English",
  eo: "Esperanto",
  et_ee: "Estonian (Estonia)",
  et: "Estonian",
  ee_gh: "Ewe (Ghana)",
  ee_tg: "Ewe (Togo)",
  ee: "Ewe",
  fo_fo: "Faroese (Faroe Islands)",
  fo: "Faroese",
  fil_ph: "Filipino (Philippines)",
  fil: "Filipino",
  fi_fi: "Finnish (Finland)",
  fi: "Finnish",
  fr_be: "French (Belgium)",
  fr_bj: "French (Benin)",
  fr_bf: "French (Burkina Faso)",
  fr_bi: "French (Burundi)",
  fr_cm: "French (Cameroon)",
  fr_ca: "French (Canada)",
  fr_cf: "French (Central African Republic)",
  fr_td: "French (Chad)",
  fr_km: "French (Comoros)",
  fr_cg: "French (Congo - Brazzaville)",
  fr_cd: "French (Congo - Kinshasa)",
  fr_ci: "French (Côte d’Ivoire)",
  fr_dj: "French (Djibouti)",
  fr_gq: "French (Equatorial Guinea)",
  fr_fr: "French (France)",
  fr_ga: "French (Gabon)",
  fr_gp: "French (Guadeloupe)",
  fr_gn: "French (Guinea)",
  fr_lu: "French (Luxembourg)",
  fr_mg: "French (Madagascar)",
  fr_ml: "French (Mali)",
  fr_mq: "French (Martinique)",
  fr_mc: "French (Monaco)",
  fr_ne: "French (Niger)",
  fr_rw: "French (Rwanda)",
  fr_re: "French (Réunion)",
  fr_bl: "French (Saint Barthélemy)",
  fr_mf: "French (Saint Martin)",
  fr_sn: "French (Senegal)",
  fr_ch: "French (Switzerland)",
  fr_tg: "French (Togo)",
  fr: "French",
  ff_sn: "Fulah (Senegal)",
  ff: "Fulah",
  gl_es: "Galician (Spain)",
  gl: "Galician",
  lg_ug: "Ganda (Uganda)",
  lg: "Ganda",
  ka_ge: "Georgian (Georgia)",
  ka: "Georgian",
  de_at: "German (Austria)",
  de_be: "German (Belgium)",
  de_de: "German (Germany)",
  de_li: "German (Liechtenstein)",
  de_lu: "German (Luxembourg)",
  de_ch: "German (Switzerland)",
  de: "German",
  el_cy: "Greek (Cyprus)",
  el_gr: "Greek (Greece)",
  el: "Greek",
  gu_in: "Gujarati (India)",
  gu: "Gujarati",
  guz_ke: "Gusii (Kenya)",
  guz: "Gusii",
  ha_latn: "Hausa (Latin)",
  ha_latn_gh: "Hausa (Latin, Ghana)",
  ha_latn_ne: "Hausa (Latin, Niger)",
  ha_latn_ng: "Hausa (Latin, Nigeria)",
  ha: "Hausa",
  haw_us: "Hawaiian (United States)",
  haw: "Hawaiian",
  he_il: "Hebrew (Israel)",
  he: "Hebrew",
  hi_in: "Hindi (India)",
  hi: "Hindi",
  hu_hu: "Hungarian (Hungary)",
  hu: "Hungarian",
  is_is: "Icelandic (Iceland)",
  is: "Icelandic",
  ig_ng: "Igbo (Nigeria)",
  ig: "Igbo",
  id_id: "Indonesian (Indonesia)",
  id: "Indonesian",
  ga_ie: "Irish (Ireland)",
  ga: "Irish",
  it_it: "Italian (Italy)",
  it_ch: "Italian (Switzerland)",
  it: "Italian",
  ja_jp: "Japanese (Japan)",
  ja: "Japanese",
  kea_cv: "Kabuverdianu (Cape Verde)",
  kea: "Kabuverdianu",
  kab_dz: "Kabyle (Algeria)",
  kab: "Kabyle",
  kl_gl: "Kalaallisut (Greenland)",
  kl: "Kalaallisut",
  kln_ke: "Kalenjin (Kenya)",
  kln: "Kalenjin",
  kam_ke: "Kamba (Kenya)",
  kam: "Kamba",
  kn_in: "Kannada (India)",
  kn: "Kannada",
  kk_cyrl: "Kazakh (Cyrillic)",
  kk_cyrl_kz: "Kazakh (Cyrillic, Kazakhstan)",
  kk: "Kazakh",
  km_kh: "Khmer (Cambodia)",
  km: "Khmer",
  ki_ke: "Kikuyu (Kenya)",
  ki: "Kikuyu",
  rw_rw: "Kinyarwanda (Rwanda)",
  rw: "Kinyarwanda",
  kok_in: "Konkani (India)",
  kok: "Konkani",
  ko_kr: "Korean (South Korea)",
  ko: "Korean",
  khq_ml: "Koyra Chiini (Mali)",
  khq: "Koyra Chiini",
  ses_ml: "Koyraboro Senni (Mali)",
  ses: "Koyraboro Senni",
  lag_tz: "Langi (Tanzania)",
  lag: "Langi",
  lv_lv: "Latvian (Latvia)",
  lv: "Latvian",
  lt_lt: "Lithuanian (Lithuania)",
  lt: "Lithuanian",
  luo_ke: "Luo (Kenya)",
  luo: "Luo",
  luy_ke: "Luyia (Kenya)",
  luy: "Luyia",
  mk_mk: "Macedonian (Macedonia)",
  mk: "Macedonian",
  jmc_tz: "Machame (Tanzania)",
  jmc: "Machame",
  kde_tz: "Makonde (Tanzania)",
  kde: "Makonde",
  mg_mg: "Malagasy (Madagascar)",
  mg: "Malagasy",
  ms_bn: "Malay (Brunei)",
  ms_my: "Malay (Malaysia)",
  ms: "Malay",
  ml_in: "Malayalam (India)",
  ml: "Malayalam",
  mt_mt: "Maltese (Malta)",
  mt: "Maltese",
  gv_gb: "Manx (United Kingdom)",
  gv: "Manx",
  mr_in: "Marathi (India)",
  mr: "Marathi",
  mas_ke: "Masai (Kenya)",
  mas_tz: "Masai (Tanzania)",
  mas: "Masai",
  mer_ke: "Meru (Kenya)",
  mer: "Meru",
  mfe_mu: "Morisyen (Mauritius)",
  mfe: "Morisyen",
  naq_na: "Nama (Namibia)",
  naq: "Nama",
  ne_in: "Nepali (India)",
  ne_np: "Nepali (Nepal)",
  ne: "Nepali",
  nd_zw: "North Ndebele (Zimbabwe)",
  nd: "North Ndebele",
  nb_no: "Norwegian Bokmål (Norway)",
  nb: "Norwegian Bokmål",
  nn_no: "Norwegian Nynorsk (Norway)",
  nn: "Norwegian Nynorsk",
  nyn_ug: "Nyankole (Uganda)",
  nyn: "Nyankole",
  or_in: "Oriya (India)",
  or: "Oriya",
  om_et: "Oromo (Ethiopia)",
  om_ke: "Oromo (Kenya)",
  om: "Oromo",
  ps_af: "Pashto (Afghanistan)",
  ps: "Pashto",
  fa_af: "Persian (Afghanistan)",
  fa_ir: "Persian (Iran)",
  fa: "Persian",
  pl_pl: "Polish (Poland)",
  pl: "Polish",
  pt_br: "Portuguese (Brazil)",
  pt_gw: "Portuguese (Guinea-Bissau)",
  pt_mz: "Portuguese (Mozambique)",
  pt_pt: "Portuguese (Portugal)",
  pt: "Portuguese",
  pa_arab: "Punjabi (Arabic)",
  pa_arab_pk: "Punjabi (Arabic, Pakistan)",
  pa_guru: "Punjabi (Gurmukhi)",
  pa_guru_in: "Punjabi (Gurmukhi, India)",
  pa: "Punjabi",
  ro_md: "Romanian (Moldova)",
  ro_ro: "Romanian (Romania)",
  ro: "Romanian",
  rm_ch: "Romansh (Switzerland)",
  rm: "Romansh",
  rof_tz: "Rombo (Tanzania)",
  rof: "Rombo",
  ru_md: "Russian (Moldova)",
  ru_ru: "Russian (Russia)",
  ru_ua: "Russian (Ukraine)",
  ru: "Russian",
  rwk_tz: "Rwa (Tanzania)",
  rwk: "Rwa",
  saq_ke: "Samburu (Kenya)",
  saq: "Samburu",
  sg_cf: "Sango (Central African Republic)",
  sg: "Sango",
  seh_mz: "Sena (Mozambique)",
  seh: "Sena",
  sr_cyrl: "Serbian (Cyrillic)",
  sr_cyrl_ba: "Serbian (Cyrillic, Bosnia and Herzegovina)",
  sr_cyrl_me: "Serbian (Cyrillic, Montenegro)",
  sr_cyrl_rs: "Serbian (Cyrillic, Serbia)",
  sr_latn: "Serbian (Latin)",
  sr_latn_ba: "Serbian (Latin, Bosnia and Herzegovina)",
  sr_latn_me: "Serbian (Latin, Montenegro)",
  sr_latn_rs: "Serbian (Latin, Serbia)",
  sr: "Serbian",
  sn_zw: "Shona (Zimbabwe)",
  sn: "Shona",
  ii_cn: "Sichuan Yi (China)",
  ii: "Sichuan Yi",
  si_lk: "Sinhala (Sri Lanka)",
  si: "Sinhala",
  sk_sk: "Slovak (Slovakia)",
  sk: "Slovak",
  sl_si: "Slovenian (Slovenia)",
  sl: "Slovenian",
  xog_ug: "Soga (Uganda)",
  xog: "Soga",
  so_dj: "Somali (Djibouti)",
  so_et: "Somali (Ethiopia)",
  so_ke: "Somali (Kenya)",
  so_so: "Somali (Somalia)",
  so: "Somali",
  es_ar: "Spanish (Argentina)",
  es_bo: "Spanish (Bolivia)",
  es_cl: "Spanish (Chile)",
  es_co: "Spanish (Colombia)",
  es_cr: "Spanish (Costa Rica)",
  es_do: "Spanish (Dominican Republic)",
  es_ec: "Spanish (Ecuador)",
  es_sv: "Spanish (El Salvador)",
  es_gq: "Spanish (Equatorial Guinea)",
  es_gt: "Spanish (Guatemala)",
  es_hn: "Spanish (Honduras)",
  es_419: "Spanish (Latin America)",
  es_mx: "Spanish (Mexico)",
  es_ni: "Spanish (Nicaragua)",
  es_pa: "Spanish (Panama)",
  es_py: "Spanish (Paraguay)",
  es_pe: "Spanish (Peru)",
  es_pr: "Spanish (Puerto Rico)",
  es_es: "Spanish (Spain)",
  es_us: "Spanish (United States)",
  es_uy: "Spanish (Uruguay)",
  es_ve: "Spanish (Venezuela)",
  es: "Spanish",
  sw_ke: "Swahili (Kenya)",
  sw_tz: "Swahili (Tanzania)",
  sw: "Swahili",
  sv_fi: "Swedish (Finland)",
  sv_se: "Swedish (Sweden)",
  sv: "Swedish",
  gsw_ch: "Swiss German (Switzerland)",
  gsw: "Swiss German",
  shi_latn: "Tachelhit (Latin)",
  shi_latn_ma: "Tachelhit (Latin, Morocco)",
  shi_tfng: "Tachelhit (Tifinagh)",
  shi_tfng_ma: "Tachelhit (Tifinagh, Morocco)",
  shi: "Tachelhit",
  dav_ke: "Taita (Kenya)",
  dav: "Taita",
  ta_in: "Tamil (India)",
  ta_lk: "Tamil (Sri Lanka)",
  ta: "Tamil",
  te_in: "Telugu (India)",
  te: "Telugu",
  teo_ke: "Teso (Kenya)",
  teo_ug: "Teso (Uganda)",
  teo: "Teso",
  th_th: "Thai (Thailand)",
  th: "Thai",
  bo_cn: "Tibetan (China)",
  bo_in: "Tibetan (India)",
  bo: "Tibetan",
  ti_er: "Tigrinya (Eritrea)",
  ti_et: "Tigrinya (Ethiopia)",
  ti: "Tigrinya",
  to_to: "Tonga (Tonga)",
  to: "Tonga",
  tr_tr: "Turkish (Turkey)",
  tr: "Turkish",
  uk_ua: "Ukrainian (Ukraine)",
  uk: "Ukrainian",
  ur_in: "Urdu (India)",
  ur_pk: "Urdu (Pakistan)",
  ur: "Urdu",
  uz_arab: "Uzbek (Arabic)",
  uz_arab_af: "Uzbek (Arabic, Afghanistan)",
  uz_cyrl: "Uzbek (Cyrillic)",
  uz_cyrl_uz: "Uzbek (Cyrillic, Uzbekistan)",
  uz_latn: "Uzbek (Latin)",
  uz_latn_uz: "Uzbek (Latin, Uzbekistan)",
  uz: "Uzbek",
  vi_vn: "Vietnamese (Vietnam)",
  vi: "Vietnamese",
  vun_tz: "Vunjo (Tanzania)",
  vun: "Vunjo",
  cy_gb: "Welsh (United Kingdom)",
  cy: "Welsh",
  yo_ng: "Yoruba (Nigeria)",
  yo: "Yoruba",
  zu_za: "Zulu (South Africa)",
  zu: "Zulu",
  ar_dj: "Arabic (Djibouti)",
  ar_eh: "Arabic (Western Sahara)",
  ar_er: "Arabic (Eritrea)",
  ar_il: "Arabic (Israel)",
  ar_km: "Arabic (Comoros)",
  ar_mr: "Arabic (Mauritania)",
  ar_ps: "Arabic (Palestinian Territories)",
  ar_so: "Arabic (Somalia)",
  ar_ss: "Arabic (South Sudan)",
  ar_td: "Arabic (Chad)",
  bas: "Basaa",
  bas_cm: "Basaa (Cameroon)",
  br: "Breton",
  br_fr: "Breton (France)",
  brx: "Bodo",
  brx_in: "Bodo (India)",
  bs_cyrl: "Bosnian (Cyrillic)",
  bs_cyrl_ba: "Bosnian (Cyrillic, Bosnia & Herzegovina)",
  bs_latn: "Bosnian (Latin)",
  bs_latn_ba: "Bosnian (Latin, Bosnia & Herzegovina)",
  ca_ad: "Catalan (Andorra)",
  ca_fr: "Catalan (France)",
  ca_it: "Catalan (Italy)",
  ce: "Chechen (ce)",
  ce_ru: "Chechen (Russia)",
  de_it: "German (Italy)",
  dje: "Zarma",
  dje_ne: "Zarma (Niger)",
  dsb: "Lower Sorbian",
  dsb_de: "Lower Sorbian (Germany)",
  dua: "Duala",
  dua_cm: "Duala (Cameroon)",
  dyo: "Jola-Fonyi",
  dyo_sn: "Jola-Fonyi (Senegal)",
  dz: "Dzongkha",
  dz_bt: "Dzongkha (Bhutan)",
  en_ag: "English (Antigua & Barbuda)",
  en_ai: "English (Anguilla)",
  en_at: "English (Austria)",
  en_bb: "English (Barbados)",
  en_bi: "English (Burundi)",
  en_bm: "English (Bermuda)",
  en_bs: "English (Bahamas)",
  en_cc: "English (Cocos [Keeling] Islands)",
  en_ch: "English (Switzerland)",
  en_ck: "English (Cook Islands)",
  en_cm: "English (Cameroon)",
  en_cx: "English (Christmas Island)",
  en_cy: "English (Cyprus)",
  en_de: "English (Germany)",
  en_dg: "English (Diego Garcia)",
  en_dk: "English (Denmark)",
  en_dm: "English (Dominica)",
  en_er: "English (Eritrea)",
  en_fi: "English (Finland)",
  en_fj: "English (Fiji)",
  en_fk: "English (Falkland Islands)",
  en_fm: "English (Micronesia)",
  en_gd: "English (Grenada)",
  en_gg: "English (Guernsey)",
  en_gh: "English (Ghana)",
  en_gi: "English (Gibraltar)",
  en_gm: "English (Gambia)",
  en_gy: "English (Guyana)",
  en_im: "English (Isle of Man)",
  en_io: "English (British Indian Ocean Territory)",
  en_je: "English (Jersey)",
  en_ke: "English (Kenya)",
  en_ki: "English (Kiribati)",
  en_kn: "English (St. Kitts & Nevis)",
  en_ky: "English (Cayman Islands)",
  en_lc: "English (St. Lucia)",
  en_lr: "English (Liberia)",
  en_ls: "English (Lesotho)",
  en_mg: "English (Madagascar)",
  en_mo: "English (Macau SAR China)",
  en_ms: "English (Montserrat)",
  en_mw: "English (Malawi)",
  en_my: "English (Malaysia)",
  en_nf: "English (Norfolk Island)",
  en_ng: "English (Nigeria)",
  en_nl: "English (Netherlands)",
  en_nr: "English (Nauru)",
  en_nu: "English (Niue)",
  en_pg: "English (Papua New Guinea)",
  en_pn: "English (Pitcairn Islands)",
  en_pr: "English (Puerto Rico)",
  en_pw: "English (Palau)",
  en_rw: "English (Rwanda)",
  en_sb: "English (Solomon Islands)",
  en_sc: "English (Seychelles)",
  en_sd: "English (Sudan)",
  en_se: "English (Sweden)",
  en_sh: "English (St. Helena)",
  en_si: "English (Slovenia)",
  en_sl: "English (Sierra Leone)",
  en_ss: "English (South Sudan)",
  en_sx: "English (Sint Maarten)",
  en_sz: "English (Swaziland)",
  en_tc: "English (Turks & Caicos Islands)",
  en_tk: "English (Tokelau)",
  en_to: "English (Tonga)",
  en_tv: "English (Tuvalu)",
  en_tz: "English (Tanzania)",
  en_ug: "English (Uganda)",
  en_vc: "English (St. Vincent & Grenadines)",
  en_vg: "English (British Virgin Islands)",
  en_vu: "English (Vanuatu)",
  en_ws: "English (Samoa)",
  en_zm: "English (Zambia)",
  es_br: "Spanish (Brazil)",
  es_bz: "Spanish (Belize)",
  es_cu: "Spanish (Cuba)",
  es_ea: "Spanish (Ceuta & Melilla)",
  es_ic: "Spanish (Canary Islands)",
  ewo: "Ewondo",
  ewo_cm: "Ewondo (Cameroon)",
  ff_cm: "Fulah (Cameroon)",
  ff_gn: "Fulah (Guinea)",
  ff_mr: "Fulah (Mauritania)",
  fo_dk: "Faroese (Denmark)",
  fr_dz: "French (Algeria)",
  fr_gf: "French (French Guiana)",
  fr_ht: "French (Haiti)",
  fr_ma: "French (Morocco)",
  fr_mr: "French (Mauritania)",
  fr_mu: "French (Mauritius)",
  fr_nc: "French (New Caledonia)",
  fr_pf: "French (French Polynesia)",
  fr_pm: "French (St. Pierre & Miquelon)",
  fr_sc: "French (Seychelles)",
  fr_sy: "French (Syria)",
  fr_tn: "French (Tunisia)",
  fr_vu: "French (Vanuatu)",
  fr_wf: "French (Wallis & Futuna)",
  fr_yt: "French (Mayotte)",
  fur: "Friulian",
  fur_it: "Friulian (Italy)",
  fy: "Western Frisian",
  fy_nl: "Western Frisian (Netherlands)",
  gd: "Scottish Gaelic",
  gd_gb: "Scottish Gaelic (United Kingdom)",
  gsw_fr: "Swiss German (France)",
  gsw_li: "Swiss German (Liechtenstein)",
  gv_im: "Manx (Isle of Man)",
  ha_gh: "Hausa (Ghana)",
  ha_ne: "Hausa (Niger)",
  ha_ng: "Hausa (Nigeria)",
  hr_ba: "Croatian (Bosnia & Herzegovina)",
  hsb: "Upper Sorbian",
  hsb_de: "Upper Sorbian (Germany)",
  in: "Indonesian",
  in_id: "Indonesian (Indonesia)",
  it_sm: "Italian (San Marino)",
  it_va: "Italian (Vatican City)",
  iw: "Hebrew",
  iw_il: "Hebrew (Israel)",
  jgo: "Ngomba",
  jgo_cm: "Ngomba (Cameroon)",
  kk_kz: "Kazakh (Kazakhstan)",
  kkj: "Kako",
  kkj_cm: "Kako (Cameroon)",
  ko_kp: "Korean (North Korea)",
  ks: "Kashmiri",
  ks_in: "Kashmiri (India)",
  ksb: "Shambala",
  ksb_tz: "Shambala (Tanzania)",
  ksf: "Bafia",
  ksf_cm: "Bafia (Cameroon)",
  ksh: "Colognian",
  ksh_de: "Colognian (Germany)",
  ky: "Kyrgyz",
  ky_kg: "Kyrgyz (Kyrgyzstan)",
  lb: "Luxembourgish",
  lb_lu: "Luxembourgish (Luxembourg)",
  no: "Norwegian",
  no_no: "Norwegian (Norway)",
  no_no_ny: "Norwegian (Norway Nynorsk)",
  pt_ao: "Portuguese (Angola)",
  pt_ch: "Portuguese (Switzerland)",
  pt_cv: "Portuguese (Cape Verde)",
  pt_gq: "Portuguese (Equatorial Guinea)",
  pt_lu: "Portuguese (Luxembourg)",
  pt_mo: "Portuguese (Macau SAR China)",
  pt_st: "Portuguese (São Tomé & Príncipe)",
  pt_tl: "Portuguese (Timor-Leste)",
  ru_by: "Russian (Belarus)",
  ru_kg: "Russian (Kyrgyzstan)",
  ru_kz: "Russian (Kazakhstan)",
  prs_af: "Dari (Afghanistan)",
  sr_ba: "Serbian (Bosnia and Herzegovina)",
  sr_cs: "Serbian (Serbia and Montenegro)",
  sr_me: "Serbian (Montenegro)",
  sr_rs: "Serbian (Serbia)",
  th_th_th: "Thai (Thailand)",
  uz_uz: "Uzbek (Latin) (Uzbekistan)",
  uz_af: "Uzbek (Afghanistan)",
  zh_hk: "Chinese (Simplified, China) (zh-Hans-CN)",
};

export default langCodes;