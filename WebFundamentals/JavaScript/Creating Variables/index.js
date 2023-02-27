function RideorNot() {
  console.log("Rider Check button clicked");
  let age = document.querySelector("#age").value;
  let height = document.querySelector("#height").value;
  if (height < 42) {
    console.log("Can't ride");
    document.querySelector("#No").style.display = "block"; // Displays Danger Message
    setTimeout(() => {
      document.querySelector("#No").style.display = "none"; // Hides Danger Message
    }, 5000);
    document.querySelector("#age").value = null; // This is clear age input field
    document.querySelector("#height").value = null; // This is clear height input field
  } else if (age < 10) {
    console.log("Can't Ride");
    document.querySelector("#No").style.display = "block"; // Displays Danger Message
    setTimeout(() => {
      document.querySelector("#No").style.display = "none"; // Hides Danger Message
    }, 5000);
    document.querySelector("#age").value = null; // This is clear age input field
    document.querySelector("#height").value = null; // This is clear height input field
  }
  } else {
    console.log("Able to ride");
    document.querySelector("#Yes").style.display = "block"; // Displays Success Message
    setTimeout(() => {
      document.querySelector("#Yes").style.display = "none"; // Hides Success Message
    }, 5000);
    document.querySelector("#age").value = null; // This is clear age input field
    document.querySelector("#height").value = null; // This is clear height input field
  }
}
