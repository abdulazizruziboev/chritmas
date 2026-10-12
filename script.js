const themeToggleButtonEl = document.querySelector("#themeToggleButton");

themeToggleButtonEl.textContent = document.firstElementChild.classList.contains("dark") ? "Light Mode" : "Dark Mode";

themeToggleButtonEl.addEventListener("click",()=>{
    localStorage.getItem("theme") === "light" ? localStorage.setItem("theme","dark") :  localStorage.setItem("theme","light"); 
    document.firstElementChild.classList.toggle("dark");
    themeToggleButtonEl.textContent = document.firstElementChild.classList.contains("dark") ? "Light Mode" : "Dark Mode"
});
