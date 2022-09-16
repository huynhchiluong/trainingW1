const position = ["top-left", "top-right", "bottom-left", "bottom-right"];
const toast1 = document.getElementById("toast1");
const toast2 = document.getElementById("toast2");
const toast3 = document.getElementById("toast3");
const toast4 = document.getElementById("toast4");
const btn = document.getElementById("btn");

var newToast;

const toastArray = [
  `<div class="toast toast--info-blue">
  <img class="toast--info-blue__icon" src="./assets/info-icon.svg" alt="info-blue">
  <ul>
      <li>
          <p> Chi phí để xem chi tiết tin chính chủ là: <strong>1.000 VNĐ/ tin</strong></p>

      </li>
      <li>
          <p>Tin đã xem sẽ không bị tính phí khi xem lại</p>
      </li>
  </ul>
</div>`,
  `<div class="toast toast--error">
    <img class="toast--error__icon" src="./assets/error-icon.svg" alt="error-icon">
    <div class="toast--error__info">
        <h5 class="toast--error__info__title">Bạn cần cập nhật lại thông tin sau để tiếp tục</h5>
        <span class="toast--error__info__description">Mã số thuế và tên công ty không khớp nhau</span>
    </div>
</div>`,
  `<div class="toast toast--info">
    <img src="./assets/info-mini-icon.svg" alt="info-icon">
    <div class="toast--info__description">
        <p>Bạn cần hoàn thành hồ sơ doanh nghiệp để có thể chỉnh sửa thông tin
            doanh nghiệp</p>
        <a href="#">Bấm để hoàn thành hồ sơ</a>
    </div>
</div>`,
  `<div class="toast__close toast__close--success">
    <img src="./assets/success-icon.svg" alt="success-icon">
    <div class="toast__close__info">
        <h4 class="toast__close__info__title">Success title </h4>
        <p class="toast__close__info__description">Write detail about the message, it’s take up to maximum 3
            rows</p>
    </div>
    <img class="toast__close__btn" src="./assets/xmask-blur.svg" alt="close-btn">
</div>`,
  `<div class="toast__close toast__close--error">
    <img src="./assets/error-mini-icon.svg" alt="success-icon">
    <div class="toast__close__info">
        <h4 class="toast__close__info__title">Error title </h4>
        <p class="toast__close__info__description">Write detail about the message, it’s take up to maximum 3
            rows</p>
    </div>
    <img class="toast__close__btn" src="./assets/xmask.svg" alt="close-btn">
</div>`,
];

function createToast() {
  let toast = document.createElement("div");
  toast.style.marginBottom = "10px";
  let index = Math.round(Math.random() * 4);
  let position = Math.round(Math.random() * 3) + 1;
  console.log(index);
  let toastRandom = toastArray[index];
  toast.innerHTML = toastRandom;

  switch (position) {
    case 1:
      newToast = toast1;
      break;

    case 2:
      newToast = toast2;
      break;

    case 3:
      newToast = toast3;
      break;

    case 4:
      newToast = toast4;
      break;
    default:
      return;
  }
  //Add animation depend on position
  if (position === 1 || position === 2) {
    toast.style.animation = "slide_show 2s ease forwards";
    newToast.appendChild(toast);

    setTimeout(function () {
      toast.style.animation = "slide_hide 1s ease forwards";
    }, 3000);
  } else {
    toast.style.animation = "slide_show_left 2s ease forwards";
    newToast.appendChild(toast);

    setTimeout(function () {
      toast.style.animation = "slide_hide_left 1s ease forwards";
    }, 3000);
  }

  setTimeout(function () {
    toast.remove();
  }, 3500);
}
