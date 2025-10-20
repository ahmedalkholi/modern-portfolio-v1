const htmlEle = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = document.getElementById("sun");
const githubIcon = document.getElementById("github");
const linkedinIcon = document.getElementById("linkedin");
const logoIcon = document.getElementById("logo")

const THEME_KEY = 'site-theme';

let savedTheme = localStorage.getItem(THEME_KEY)

if (savedTheme === 'true'){
    htmlEle.classList.add('light');
}

themeToggle.addEventListener('click', () =>
{
    htmlEle.classList.toggle('light');
    isLight = htmlEle.classList.contains('light');
    localStorage.setItem(THEME_KEY, isLight)
})