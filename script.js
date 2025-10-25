const htmlEle = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');

const THEME_KEY = 'site-theme';


themeToggle.addEventListener('click', () =>
{
    htmlEle.classList.toggle('light');
    isLight = htmlEle.classList.contains('light');
    localStorage.setItem(THEME_KEY, isLight)
})

// Start active link effects

const links = document.querySelectorAll('.nav-icon-container a')
const currentPath = window.location.pathname


function setAllToLine()
{
    links.forEach(l =>
        {
            const activeIcon = l.querySelector('i')
            activeIcon.className = activeIcon.className.replace('-fill', '-line')
        })
}

function setFill(link)
{
    const i = link.querySelector('i')
    i.className = i.className.replace(/-line\b/g, '-fill');
}

setAllToLine()

links.forEach(link =>
{
    link.addEventListener('click', () =>
    {
        setAllToLine()
        setFill(link)
    })
})

links.forEach(link =>
{
    const icon = link.querySelector('i')
    icon.className = icon.className.replace('-fill', '-line')
    if (currentPath.includes(link.getAttribute('href')) || location.hash === link.getAttribute('href'))
    {
        setFill(link)
    }
})

// Add pop up more
const moreLinks = document.querySelectorAll('.more')
const moreSlide = document.querySelector('.more-slide')

moreLinks.forEach(link =>
{
    link.addEventListener('click', () =>
    {
        moreSlide.classList.toggle('active')
    })
})

window.addEventListener('click', (e) =>
{
    if (!e.target.closest('.more') && !e.target.closest('.more-slide'))
    {
        moreSlide.classList.remove('active');
    }
})