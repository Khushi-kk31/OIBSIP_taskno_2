var typed = new Typed(".multi-text",{
    strings: ["Frontend Developer", "UI-UX Designer",
    "Coder", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

function about() {
   
    document.getElementById("hero-btn-1").style.display = "none";
    document.getElementById("about-desc").style.display = "block";
    document.getElementById("hero-btn-2").style.display = "flex";
}

function back(){
    document.getElementById("hero-btn-1").style.display = "inline"
    document.getElementById("about-desc").style.display = "none";
    document.getElementById("hero-btn-2").style.display = "none";
}