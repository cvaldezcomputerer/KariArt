// Get the modal element
var modal = document.getElementById("modal");

// Get the buttons that open the modal
var btn1 = document.getElementById("openModal1");
var btn2 = document.getElementById("openModal2");
var btn3 = document.getElementById("openModal3");

// Get the modal text element where content will change
var modalText = document.getElementById("modalText");
var modalImg = document.getElementById("modalImg");
var modalBtn = document.getElementById("modalButton");

// Get the close button
var closeButton = document.getElementById("close");

// Variables to store the hover event handlers
var mouseEnterHandler;
var mouseLeaveHandler;

// Function to set and remove modal button hover styles
function setModalBtnHoverStyles(hoverColor) {
  // First, remove any existing hover event listeners
  if (mouseEnterHandler) {
    modalBtn.removeEventListener("mouseenter", mouseEnterHandler);
  }
  if (mouseLeaveHandler) {
    modalBtn.removeEventListener("mouseleave", mouseLeaveHandler);
  }

  // Define the new handlers
  mouseEnterHandler = function () {
    modalBtn.style.background = hoverColor;
    modalBtn.style.borderColor = hoverColor;
  };

  mouseLeaveHandler = function () {
    modalBtn.style.background = "#ffffff";
    modalBtn.style.borderColor = "#000";
  };

  // Add the new event listeners
  modalBtn.addEventListener("mouseenter", mouseEnterHandler);
  modalBtn.addEventListener("mouseleave", mouseLeaveHandler);
}

// Open modal for Button 1
btn1.onclick = function () {
  modal.style.display = "block";
  modalBtn.href = "project1.html";
  modalHeader.innerHTML = "Meet Buddy";
  modalText.innerHTML =
    "Buddy is a mobile app created during my masters program. It aims to help relieve exam induced stress and anxiety by using mixed reality.";
  modalImg.src = "docs/assets/images/homePage/showcasePics/homePageBudd.png";

  // Set hover styles for modal button (Modal 1 specific styles)
  setModalBtnHoverStyles("#e4e3b7");
};

// Open modal for Button 2
btn2.onclick = function () {
  modal.style.display = "block";
  modalBtn.href = "project2.html";
  modalHeader.innerHTML = "YoCo";
  modalText.innerHTML =
    "YoCo is a website built for a teacher who wants to start her own online teaching business. It focused on  immigrants from Spanish speaking countries starting a new life";
  modalImg.src =
    "docs/assets/images/homePage/showcasePics/homePageComputer.png";

  // Set hover styles for modal button (Modal 2 specific styles)
  setModalBtnHoverStyles("#ede7ff");
};

// Open modal for Button 3
btn3.onclick = function () {
  modal.style.display = "block";
  modalBtn.href = "project3.html";
  modalHeader.innerHTML = "Mama’s Kitchen";
  modalText.innerHTML =
    "Mama’s Kitchen is a meal keeper mobile app concept to assist students who are frustrated by their inability to save money because of excessive spending on dining out.";
  modalImg.src =
    "docs/assets/images/homePage/showcasePics/homePageFoodAppPic.png";

  // Set hover styles for modal button (Modal 3 specific styles)
  setModalBtnHoverStyles("#f5f8ff");
};

// When the user clicks on the close button, close the modal
closeButton.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside the modal, close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
