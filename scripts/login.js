document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    // This is temporary
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("yOU are logged in");
      window.location.href = "/home.html";
    } else {
      alert("Wrong Phone Number Or Pin");
    }
  });
