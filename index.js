const hoverElements = document.getElementsByClassName("showcase");

// Loop through each element and attach event listeners
for (let i = 0; i < hoverElements.length; i++) {
  const hoverElement = hoverElements[i];

  // Function to add hover event listeners to buttons

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
    this.style.top = "";
    const img = this.querySelector(".hover-image");
    if (img) {
      this.removeChild(img);
    }
  }

  // Define the event handler for click
  function handleClick(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent

    const img = this.querySelector(".hover-image"); //removes the cat
    if (img) {
      this.removeChild(img);
    }

    const elementId = event.currentTarget.id; //clicked elements ID.
    //can be showcase-middle, showcase-right, showcase-left.

    // Create the grey overlay
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    // Create the popup content
    const popupContent = document.createElement("div");
    popupContent.className = "popup-content container d-flex flex-column pt-3"; // Add Bootstrap flex classes

    // Populate the popup with content based on the clicked element
    const content = document.createElement("div");
    content.classList.add("d-flex", "flex-column", "align-items-center"); // Make the row vertical and center its items
    popupContent.appendChild(content);

    switch (elementId) {
      case "showcase-middle":
        content.innerHTML =
          '<div style ="background-color: #e6e6e6;" class="d-flex col-12 justify-content-center align-items-center">' +
          '<img src="main.png" alt="showcased image" class="img-fluid " id="computer-screen">' +
          "</div>" +
          '<div class=" px-5 mt-5">' +
          '<p class=" showcase-title">YoCo</p>' +
          '<p class=" showcase-words">YoCo is a website built for a teacher who wants to start her own online teaching business. It focused on immigrants from Spanish speaking countries starting a new life</p>' +
          '<a href="project2.html"<button class="btn align-self-start showcase-button">View Project</button></a>' +
          "</div>";
        break;
      case "showcase-right":
        content.innerHTML =
          '<div style ="background-color: #e6e6e6;" class="d-flex col-12 justify-content-center align-items-center">' +
          '<img src="image 71.png" alt="showcased image" class="img-fluid " id="right-phone-image">' +
          "</div>" +
          '<div class=" px-5 mt-4">' +
          '<p class="showcase-title">Mama’s Kitchen</p>' +
          '<p class="showcase-words">Mama’s Kitchen is a meal keeper mobile app concept to assist students who are frustrated by their inability to save money because of excessive spending on dining out.</p>' +
          '<a href="project3.html"<button class="btn align-self-start showcase-button">View Project</button></a>' +
          "</div>";
        break;
      case "showcase-left":
        content.innerHTML =
          '<div style ="background-color: #e6e6e6;"class="d-flex col-12 justify-content-center align-items-center">' +
          '<div class="left-phone-gif"><p id="left-phone-text-showcase">let’s start your<br>study session!</p></div>' +
          "</div>" +
          '<div class=" px-5 mt-5">' +
          '<p class="showcase-title">Meet Buddy</p>' +
          '<p class="showcase-words">Buddy is a mobile app created during my masters program. It aims to help relieve exam induced stress and anxiety by using mixed reality. </p>' +
          '<a href="project1.html" <button class="btn align-self-start showcase-button">View Project</button></a>' +
          "</div>";
        break;
      default:
        content.innerHTML = "<p>Unknown project</p>";
        break;
    }

    // Create the close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.className = "close-button";

    // Define the event handler for the close button
    closeButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the click event from bubbling up to the parent

      // Remove the popup and overlay
      document.body.removeChild(overlay);
      document.body.removeChild(popupContent);
    });

    // Append the close button to the popup content
    popupContent.appendChild(closeButton);

    // Append the overlay and popup content to the body
    document.body.appendChild(overlay);
    document.body.appendChild(popupContent);

    // Add event listeners to the new button depending on its ide name add an id too
    const newButton = popupContent.querySelector(".showcase-button");
    if (newButton) {
      newButton.addEventListener("mouseover", function () {
        newButton.id = elementId + "-button";
      });

      newButton.addEventListener("mouseout", function () {
        newButton.id = "";
      });
    }
  }

  // Attach the event listeners
  hoverElement.addEventListener("mouseover", handleMouseOver);
  hoverElement.addEventListener("mouseout", handleMouseOut);
  hoverElement.addEventListener("click", handleClick);
}
