// Select all elements with the class "showcase"
const hoverElements = document.getElementsByClassName("showcase");

// Loop through each element and attach event listeners
for (let i = 0; i < hoverElements.length; i++) {
  const hoverElement = hoverElements[i];

  // Store the original state
  const originalTop = hoverElement.style.top;
  const originalWidth = hoverElement.style.width;
  const originalHeight = hoverElement.style.height;

  // Define the event handler for mouseover
  function handleMouseOver() {
    this.style.top = "-20px";

    // Create the image element
    const img = document.createElement("img");
    img.src = "rat.png"; // Replace with the path to your image
    img.className = "hover-image";
    img.style.position = "absolute";
    img.style.top = "-80px"; // Adjust to position the image outside the element
    img.style.right = "-20px"; // Adjust to position the image outside the element
    // Append the image to the hover element
    this.appendChild(img);
  }

  // Define the event handler for mouseout
  function handleMouseOut() {
    this.style.top = originalTop;
    this.style.width = originalWidth;
    this.style.height = originalHeight;
    const img = this.querySelector(".hover-image");
    if (img) {
      this.removeChild(img);
    }
  }

  // Attach the event listeners
  hoverElement.addEventListener("mouseover", handleMouseOver);
  hoverElement.addEventListener("mouseout", handleMouseOut);
}
