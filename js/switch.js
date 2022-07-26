var monthlySwitch = document.getElementById("filt-monthly"),
    yearlySwitch = document.getElementById("filt-hourly"),
    switcher = document.getElementById("switcher"),
    monthlyCard = document.getElementById("card-bill--monthly"),
    yearlyCard = document.getElementById("card-bill--yearly");

monthlySwitch.addEventListener("click", function () {
    switcher.checked = false;
    monthlySwitch.classList.add("toggler--is-active");
    yearlySwitch.classList.remove("toggler--is-active");
    monthlyCard.classList.remove("hide");
    yearlyCard.classList.add("hide");
});

yearlySwitch.addEventListener("click", function () {
    switcher.checked = true;
    yearlySwitch.classList.add("toggler--is-active");
    monthlySwitch.classList.remove("toggler--is-active");
    monthlyCard.classList.add("hide");
    yearlyCard.classList.remove("hide");

});

switcher.addEventListener("click", function () {
    yearlySwitch.classList.toggle("toggler--is-active");
    monthlySwitch.classList.toggle("toggler--is-active");
    monthlyCard.classList.toggle("hide");
    yearlyCard.classList.toggle("hide");
    console.log(yearlyCard);
});