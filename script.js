function includeHTML(file, containerId) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
      });
}
includeHTML('footer.html', 'footer-container');
includeHTML('sidebar.html', 'sidebar-container');

$(document).ready(function(){
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility","hidden");
  });

  $('.close-btn').click(function(){
    $('.side-bar').removeClass ('active');
    $('.side-bar').removeClass ('active2');
    $('.menu-btn').css("visibility","visible");
  });

});

const guestbookForm = document.getElementById('guestbook-form');
const guestbookEntries = document.getElementById('guestbook-entries');
const imageList = document.getElementById('image-list');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupText = document.getElementById('popup-text');
const closePopupButton = document.getElementById('close-popup');

// 이미지 클릭 시 팝업 열기
imageList.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-trigger')) {
        const imageIndex = e.target.getAttribute('data-image-index');
        const imageName = `Image ${imageIndex}`;
        const message = "팝업을 열 때 보이는 내용입니다.";

        popupImage.src = e.target.src;
        popupImage.alt = imageName;
        popupText.textContent = `${imageName}: ${message}`;
        popup.style.display = 'block';
    }
});

// 팝업 닫기 버튼 이벤트
closePopupButton.addEventListener('click', function () {
    popup.style.display = 'none';
});

// 방명록 항목 추가
guestbookForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message').value;
  
  // 랜덤 이미지 선택 (1에서 6까지)
  const randomImageIndex = Math.floor(Math.random() * 6) + 1;

  const entry = document.createElement('div');
  entry.classList.add('entry');
  entry.innerHTML = `<img src="image${randomImageIndex}.jpg" alt="Image ${randomImageIndex}" class="popup-trigger" data-image-index="${randomImageIndex}">
                    <strong>${name}</strong>:
                    ${message}
                    <button class="delete-button">삭제</button>`;

  // 삭제 버튼 이벤트
  const deleteButton = entry.querySelector('.delete-button');
  deleteButton.addEventListener('click', function () {
      const inputPassword = prompt("비밀번호를 입력하세요.");
      // 비밀번호 확인 후 삭제 로직을 추가하세요.
      // 비밀번호가 맞으면 entry를 삭제합니다.
      // 예시: if (inputPassword === password) { entry.remove(); }
  });

  guestbookEntries.appendChild(entry);
  guestbookForm.reset();
});