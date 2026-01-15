const preview = document.getElementById("preview");
const styleSelect = document.getElementById("styleSelect");
const fontSelect = document.getElementById("fontSelect");
const fontSize = document.getElementById("fontSize");

// 폰트 리스트
const fontData = {
 gothic: [
  { name: "고딕체01", value: "'Paperozi', sans-serif" },
  { name: "고딕체02", value: "'Pretendard', sans-serif" },
  { name: "고딕체03", value: "'Suit', sans-serif" },
  { name: "고딕체04", value: "'NanumSquare', sans-serif" },
  { name: "고딕체05", value: "'Noto Sans KR', sans-serif" },
  { name: "고딕체06", value: "'Elice DX Neolli', sans-serif" },
  { name: "고딕체07", value: "'Dohyun', sans-serif" },
  { name: "고딕체08", value: "'Isamanru', sans-serif" },
  { name: "고딕체09", value: "'SchoolSafetyStraightTitle', sans-serif" },
  { name: "고딕체10", value: "'Escoredream', sans-serif" },
  { name: "고딕체11", value: "'GMarketSans', sans-serif" },
  { name: "고딕체12", value: "'Black Han Sans', sans-serif" }
],
  myeongjo: [
  { name: "명조체01", value: "'Nanum Myeongjo', serif" },
  { name: "명조체02", value: "'BookkMyungjo', serif" },
  { name: "명조체03", value: "'KimJeongcheolMyoungjo', serif" },
  { name: "명조체04", value: "'JoseonBoldMyongjo', serif" },
  { name: "명조체05", value: "'MaruBuri', serif" },
  { name: "명조체06", value: "'MapoAemin', serif" },
  { name: "명조체07", value: "'YesMyungjo', serif" },
  { name: "명조체08", value: "'HsBombaram21', serif" },
  { name: "명조체09", value: "'JeonnamEducationTtobaks', serif" },
  { name: "명조체10", value: "'Simple', serif" },
  { name: "명조체11", value: "'MuseumCulturalFoundationClassic', serif" },
  { name: "명조체12", value: "'SandoolGukdaeTteokbokki', serif" }
],
  handwriting: [
    { name: "손글씨01", value: "'NostalgicMongtori', cursive" },
    { name: "손글씨02", value: "'KotraHope', cursive" },
    { name: "손글씨03", value: "'MitmiFont', cursive" },
    { name: "손글씨04", value: "'OngleipParkDahyeon', cursive" },
    { name: "손글씨05", value: "'OngleebDaisy', cursive" },
    { name: "손글씨06", value: "'NexonBazzi', cursive" },
    { name: "손글씨07", value: "'KccMurukMuruk', cursive" },
    { name: "손글씨08", value: "'DaeguDongseongRo', cursive" },
    { name: "손글씨09", value: "'IsYun', cursive" }
  ],
  display: [
  { name: "장식체01", value: "'OneStoreMobilePop', sans-serif" },
  { name: "장식체02", value: "'MungyeongGamhongApple', sans-serif" },
  { name: "장식체03", value: "'ChangwonDanggamAsak', sans-serif" },
  { name: "장식체04", value: "'PartialSans', sans-serif" },
  { name: "장식체05", value: "'PuradakGentleGothic', sans-serif" },
  { name: "장식체06", value: "'SinchonRhapsody', sans-serif" },
  { name: "장식체07", value: "'Aggravo', sans-serif" },
  { name: "장식체08", value: "'Cafe24ClassicType', serif" },
  { name: "장식체09", value: "'PyeongchangPeace', sans-serif" }
]
};

// 폰트 옵션 생성
function updateFontList() {
  fontSelect.innerHTML = "";
  fontData[styleSelect.value].forEach(font => {
    const option = document.createElement("option");
    option.textContent = font.name;
    option.value = font.value;
    fontSelect.appendChild(option);
  });
  preview.style.fontFamily = fontSelect.value;
}

// 이벤트
styleSelect.addEventListener("change", updateFontList);

fontSelect.addEventListener("change", () => {
  preview.style.fontFamily = fontSelect.value;
});

fontSize.addEventListener("input", () => {
  preview.style.fontSize = fontSize.value + "px";
});

// 초기 실행
updateFontList();
