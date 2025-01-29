// Ensure the DOM is fully loaded before running the script
$(document).ready(function () {
  // Get the current file name
  var fileName = window.location.pathname.split("/").pop();

  // Check if the current file is index.html
  if (fileName === "index.html" || fileName === "") {
    // Change the border of the first homeNavBarButton
    $(".homeNavBarButton").eq(0).css("border", "1px solid rgb(0, 0, 0)");
    $(".homeNavBarButton").eq(0).css("background-color", "#ffffff");
  } else if (fileName === "about.html") {
    // Change the border of the second homeNavBarButton
    $(".homeNavBarButton").eq(1).css("border", "1px solid rgb(0, 0, 0)");
    $(".homeNavBarButton").eq(1).css("background-color", "#ffffff");
  } else if (fileName === "cv.html") {
    // Change the border of the second homeNavBarButton
    $(".homeNavBarButton").eq(2).css("border", "1px solid rgb(0, 0, 0)");
    $(".homeNavBarButton").eq(2).css("background-color", "#ffffff");
    $("#navbar").css("background-color", "#FFF7F8");
  }

  // Add click event listener to change background color to white
});
