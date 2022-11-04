// section
const loadingSection = document.querySelector(".cont-result-loading");
const resultSection = document.querySelector(".cont-result");
const modalSection = document.querySelector("#modal");


// button
const startButton = document.querySelector(".btn-exc");
const openButton = document.querySelector(".btn-go");
const closeButton = document.querySelector(".btn-close");
const shareButton = document.querySelector(".btn-share");


// 시간 계산
function calculate() {
  const fieldValue = document.querySelector('#inp-field');
  const timeValue = document.querySelector('#inp-time');
  // console.log(fieldValue.value, timeValue.value)  // 확인 차 실행

  if(fieldValue.value == "") {
    alert('비정상 접근입니다.');
    return
  } else if(timeValue.value === "") {
    alert('비정상 접근입니다.');
    return
  } else if(timeValue.value >= 24) {
    alert('하루는 24시간입니다! 다시 입력해주세요');
    return
  } else if(timeValue.value >= 12) {
    alert("우리의 육체는 로봇이 아닙니다! 다시 입력해주세요");
    return
  };


  // .cont-result-loadig이 먼저 보이고 result가 보여야함
  loadingSection.style.display = "block";

  setTimeout(function() {
    const fieldResult = document.querySelector(".field-result");
    const timedResult = document.querySelector(".time-result");

    loadingSection.style.display = "none";
    resultSection.style.display = "block";

    fieldResult.innerText = fieldValue.value;
    timedResult.innerText = 10000/parseInt(timeValue.value);

  }, 2000)
};


// 모달 띄어주기
function openmodal() {
  modalSection.style.display = "flex";
};

// 모달 닫기
function closemodal() {
  modalSection.style.display = "none";
};

// url copy
function copyUrl() {
  // 3가지 방법
  // - 구 버전: 이제 사용 X
  // - 신 버전: safari에서 이슈 발생
  // - clipboard.js 라이브러리 사용
  
  // 구 버전)
  // let url = window.location.href
  // console.log(url);

  // let temp = document.createElement('input');
  // temp.value = url;
  // document.body.appendChild(temp);
  // temp.select();
  // document.execCommand("copy");
  // document.body.removeChild(temp);
  // alert("URL이 복사되었습니다.");

  // 신 버전)
  // Navigator는 사용자 에이전트의 상태와 신원 정보를 나타내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용
  let url = window.location.href
  navigator.clipboard.writeText(url)
  .then(() => {
    alert('URL이 복사되었습니다.');
  })
  .catch(err => {
    alert('URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다');
    console.log(err);
  })
};



startButton.addEventListener('click', calculate);
openButton.addEventListener('click', openmodal);
closeButton.addEventListener('click', closemodal);
shareButton.addEventListener('click', copyUrl);


// 모달 창이 전체화면으로 나왔을 때 다른 곳을 클릭하면 모달창이 꺼지도록!
window.onclick = function(event) {
  if(event.target == modalSection) {
    closemodal();
  }
}