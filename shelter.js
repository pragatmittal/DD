const helpBtn = document.getElementById("help-btn");
const infoSection = document.getElementById("info");

helpBtn.addEventListener("click", function() {
    console.log("button clicked!");

    // Make the infoSection element visible
    infoSection.style.display = "block";
    
    // Set the styles
    infoSection.style.width = "60%";                  // Adjust width as needed
    infoSection.style.height = "auto";                // Auto height to fit content
    infoSection.style.padding = "30px";               // Consistent padding
    infoSection.style.margin = "0";                   // Remove default margins
    infoSection.style.backgroundColor = "#EFF1F0";   // Set a background color
    infoSection.style.position = "relative";             // Fixed positioning
    infoSection.style.top = "13%";                    // Center vertically
    infoSection.style.left = "50%";                   // Center horizontally
    infoSection.style.transform = "translate(-50%, -50%)"; // Center both horizontally and vertically
    infoSection.style.zIndex = "1000";                // Ensure it is above other content
    infoSection.style.textAlign = "center";           // Center text inside the element

    // Smooth scroll into view
    infoSection.scrollIntoView({ behavior: "smooth" });
});