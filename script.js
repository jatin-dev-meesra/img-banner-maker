const fileInput = document.querySelector(".file-input"),
  userInput = document.querySelector(".user-img-input"),
  userName = document.querySelector("#namefield"),
  userEmail = document.querySelector("#emailfield"),
  userMobile = document.querySelector("#mobilefield"),
  previewCreativeImg = document.querySelector(".preview-img img"),
  previewUserImg = document.querySelector(".user-img img"),
  chooseUserImgBtn = document.querySelector(".choose-user-img"),
  chooseCreativeImgBtn = document.querySelector(".choose-creative-img"),
  updateUserBtn = document.querySelector(".update-details"),
  saveCreativeImgBtn = document.querySelector(".download-img"),
  downloadCanvas = document.querySelector(".dl-save-img");

let upadetDetails = false;
const loadCreativeImage = () => {
  let file = fileInput.files[0];
  if (!file) return;
  previewCreativeImg.src = URL.createObjectURL(file);
};

const loadUserImage = () => {
  let file = userInput.files[0];
  if (!file) return;
  previewUserImg.src = URL.createObjectURL(file);
};

chooseUserImgBtn.addEventListener("click", () => {
  userInput.click();
  userInput.addEventListener("change", loadUserImage);
});

chooseCreativeImgBtn.addEventListener("click", () => {
  fileInput.click();
  fileInput.addEventListener("change", loadCreativeImage);
});

saveCreativeImgBtn.addEventListener("click", () => {
  if (upadetDetails) {
    html2canvas(downloadCanvas).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      var anchor = document.createElement("a");
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "creativeimg.png");
      anchor.click();
      anchor.remove();
    });
  } else {
    alert("You didn't update user details");
  }
});

updateUserBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("user_name").value;
  const emailInput = document.getElementById("user_email").value;
  const mobileInput = document.getElementById("user_mobile").value;

  if (!nameInput) {
    alert("Pls Enter Your Name");
  }
  if (!emailInput) {
    alert("Pls Enter Your Email");
  }
  if (!mobileInput) {
    alert("Pls Enter Your Mobile Number");
  }

  if (nameInput && emailInput && mobileInput) {
    userName.innerHTML = nameInput;
    userEmail.innerHTML = emailInput;
    userMobile.innerHTML = mobileInput;
    upadetDetails = true;
  }
});
