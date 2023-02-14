function hamburgerMenu() {
    let iconBars = document.getElementById("mainNav");
    if (iconBars.className === "topnav"){
        iconBars.className += " responsive";
    } else {
        iconBars.className = "topnav";
    }
}