var contactsRadio = document.getElementById("contacts");
var contactsMessage = document.getElementById("message-contacts");

var manualRadio = document.getElementById("manual");
var manualMessage = document.getElementById("message-manual");

contactsRadio.addEventListener("click", function() {
    contactsMessage.classList.remove("hide");
    manualMessage.classList.add("hide");
})  

manualRadio.addEventListener("click", function() {
    contactsMessage.classList.add("hide");
    manualMessage.classList.remove("hide");
})