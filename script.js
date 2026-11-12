/* ==========================================================================
   1. 메인 비주얼(Hero) 슬라이드 3장 설정
   ========================================================================== */
const heroSlides = [
  {
    img: "./images/hero-01.jpg",              // 첫 번째 메인 이미지 경로
    title: "SEREIN HOUSE",                   // 우측 하단 큰 제목
    sub: "SEOUL, KOREA · PRIVATE RESIDENCE"  // 우측 하단 작은 설명
  },
  {
    img: "./images/hero-02.jpg",              // 두 번째 메인 이미지 경로
    title: "MORROW COFFEE",
    sub: "SEONGSU, KOREA · COMMERCIAL SPACE"
  },
  {
    img: "./images/hero-03.jpg",              // 세 번째 메인 이미지 경로
    title: "STILL STAY",
    sub: "JEJU, KOREA · BOUTIQUE HOSPITALITY"
  }
];

let currentSlide = 0;

// 다음 슬라이드로 넘기는 함수
function nextSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  updateSlide();
}

// 화면의 이미지, 캡션, 01—03 게이지 바를 변경하는 함수
function updateSlide() {
  const data = heroSlides[currentSlide];
  const heroImg = document.getElementById('heroImg');
  
  heroImg.src = data.img;
  document.getElementById('heroCaptionTitle').textContent = data.title;
  document.getElementById('heroCaptionSub').textContent = data.sub;
  
  // 번호 변경 (01, 02, 03)
  document.getElementById('slideCurrent').textContent = `0${currentSlide + 1}`;
  // 게이지 바 길이 변경
  document.getElementById('pageBarFill').style.width = `${((currentSlide + 1) / heroSlides.length) * 100}%`;
}

// 6초마다 자동으로 다음 메인 이미지로 넘어감 
setInterval(nextSlide, 6000);


/* ==========================================================================
   2. 프로젝트 상담 문의 팝업창(모달) 열기 / 닫기
   ========================================================================== */
const modal = document.getElementById('contactModal');

function openModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

// 팝업창 바깥 어두운 배경을 클릭하면 창 닫기
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

// 상담 신청 버튼 클릭 시 완료 메시지
function submitForm(e) {
  e.preventDefault(); // 페이지 새로고침 방지
  alert('상담 문의가 정상적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  closeModal();
}


/* ==========================================================================
   3. 프로젝트 카드 클릭 시 동작
   ========================================================================== */
function openProjectDetail(title, info) {
  alert(`[${title}]\n${info}\n\n준비중입니다.`);
}