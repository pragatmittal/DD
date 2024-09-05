document.addEventListener("DOMContentLoaded", function() {

    const pickupBtn = document.querySelector("#pickup-btn");
    const dropBtn = document.querySelector(".preference .dropoff");
    const form = document.querySelector(".form");
  
   // hide the form initially
  
    pickupBtn.addEventListener("click", function() {
      console.log("Pickup button clicked!");
      form.style.display = "block";
      form.scrollIntoView({ behavior: "smooth" });
    });
  
    dropBtn.addEventListener("click", function() {
      console.log("Dropoff button clicked!");
      form.style.display = "block";
      form.scrollIntoView({ behavior: "smooth" });
    });
  });