const htmlEle = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = document.getElementById("sun");
const githubIcon = document.getElementById("github");
const linkedinIcon = document.getElementById("linkedin");
const logoIcon = document.getElementById("logo")

const THEME_KEY = 'site-theme';

const icons = {
    light: {
        Sun: "./Images/icons/Sun.svg",
        Github: "./Images/icons/Github.svg",
        Linkedin: "./Images/icons/Linkedin.svg",
        Logo: "./Images/icons/Size=Small, Mode=Dark.svg",
    },
    dark: {
        Sun: "./Images/icons/Sun.png",
        Github: "./Images/icons/Github.png",
        Linkedin: "./Images/icons/LinkedIn.png",
        Logo: "./Images/icons/Property 1=white small.svg",
    }
}

function lightMood()
{
    sunIcon.src = icons.light.Sun;
    githubIcon.src = icons.light.Github;
    linkedinIcon.src = icons.light.Linkedin;
    logoIcon.src = icons.light.Logo;
}
function darkMood()
{
    sunIcon.src = icons.dark.Sun;
    githubIcon.src = icons.dark.Github;
    linkedinIcon.src = icons.dark.Linkedin;
    logoIcon.src = icons.dark.Logo;
}

let savedTheme = localStorage.getItem(THEME_KEY)

if (savedTheme === 'true'){
    htmlEle.classList.add('light');
    lightMood()
}

themeToggle.addEventListener('click', () =>
{
    htmlEle.classList.toggle('light');
    isLight = htmlEle.classList.contains('light');
    localStorage.setItem(THEME_KEY, isLight)

    if (htmlEle.classList.contains('light'))
    {
        lightMood()
    } else
    {
        darkMood()
    }
})