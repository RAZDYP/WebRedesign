var dashboardButton = document.getElementsByClassName("dashboard-navbaar--links--button");

$(dashboardButton).click(function(e){
    e.preventDefault();
    $(this).parent().find('button.active').removeClass('active');
    $(this).addClass("active");
});