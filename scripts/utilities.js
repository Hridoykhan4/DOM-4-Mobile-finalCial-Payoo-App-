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

  document.getElementById(elementId).classList.remove("hidden");
}
