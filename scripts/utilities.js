function getInputFieldValueById(elementId) {
  const element = document.getElementById(elementId).value;
  return parseFloat(element);
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  return parseFloat(textValue);
}

function setElementById(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

function showASection(elementId) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");
  document.getElementById("bonus-section").classList.add("hidden");

  document.getElementById(elementId).classList.remove("hidden");
}

const removeAllBg = () => {
  const active = document.getElementsByClassName("active");
  for (const btn of active) {
    btn.classList.add("btn-ghost");
    btn.classList.remove("text-white");
    btn.classList.add("text-black");

    // btn.classList.remove('text-white')
  }
};
