function openNav() {
    document.getElementById("mySidenav").style.width = "275px";
    document.getElementById("container").style.marginLeft = "275px";
    document.getElementById("header").style.backgroundPosition = "275px center";
    document.getElementById("main").style.width = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("container").style.marginLeft= "0";
    document.getElementById("header").style.backgroundPosition = "center";
}