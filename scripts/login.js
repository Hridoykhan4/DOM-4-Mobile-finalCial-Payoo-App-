document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = getInputFieldValueById("phone-number");
    const pinNumber = getInputFieldValueById("pin-number");

    if (phoneNumber === 5 && pinNumber === 1234) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.href = "./home.html";
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Password",
        text: "Something went wrong!",
        timer: 1500,
      });
    }
  });
