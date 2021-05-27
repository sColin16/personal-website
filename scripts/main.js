/* Code that makes the main web page interactive (animations, active section detection, etc) */

function toggleNavbar() {
    const navBar = document.querySelector('nav');
    const hamburger = document.getElementById('nav-hamburger');

    if (navBar.classList.contains('open')) {
        navBar.classList.remove('open');
        hamburger.classList.remove('is-active');

    } else {
        navBar.classList.add('open');
        hamburger.classList.add('is-active');
    }
}

function updateActive() {
    const about = document.getElementById('about-section');
    const projects = document.getElementById('portfolio-section');
    const posts = document.getElementById('post-section');

    const aboutNav = document.getElementById('about-nav');
    const projectNav = document.getElementById('project-nav');
    const postNav = document.getElementById('post-nav');

    if (about.getBoundingClientRect().bottom > 100) {
        aboutNav.classList.add('active');
        projectNav.classList.remove('active');
        postNav.classList.remove('active');

    } else if (projects.getBoundingClientRect().bottom > 300) {
        aboutNav.classList.remove('active');
        projectNav.classList.add('active');
        postNav.classList.remove('active');

    } else {
        aboutNav.classList.remove('active');
        projectNav.classList.remove('active');
        postNav.classList.add('active');
    }
}

function makeTitleActive(titleElements, idx) {
    titleElements[idx].classList.add('active')
    const animationDuration = Number(getComputedStyle(titleElements[idx])['animation-duration'].slice(0, -1)) * 1000;
    //const animation
    // console.log(animationDuration);

    setTimeout(() => makeTitleActive(titleElements, (idx + 1) % (titleElements.length)), animationDuration);
    setTimeout(() => titleElements[idx].classList.remove('active'), animationDuration);
}

async function setTitleSize(titleElements) {
    /* Dynamically determine max size of headline to prevent shifting elements */
    let maxHeight = 0;
    let maxWidth = 0;

    // Remove any previous width and height constraints
    document.getElementById('title-scroller').style.width = 'auto';
    document.getElementById('title-scroller').style.height = 'auto';

    // Iterate over every element to determine it's width and height
    for (let idx = 0; idx < titleElements.length; idx++) {
        // Hide all elements, except the target
        for (let j = 0; j < titleElements.length; j++) {
            if (j !== idx) {
                titleElements[j].style.display = 'none';
            } else {
                titleElements[j].style.display = 'block'
            }
        }

        // Determine the resulting height of the element
        let height = Number(getComputedStyle(titleElements[idx]).height.slice(0, -2));
        let width = Number(getComputedStyle(titleElements[idx]).width.slice(0, -2));

        maxHeight = Math.max(height, maxHeight);
        maxWidth = Math.max(width, maxWidth);

        // Clear all the display styles
        for (let j = 0; j < titleElements.length; j++) {
            titleElements[j].style.display = '';
        }
    }

    document.getElementById('title-scroller').style.width = maxWidth + 'px';
    document.getElementById('title-scroller').style.height = maxHeight + 'px';
}

window.onload = function() {
    const titleElements = document.getElementById('title-scroller').children;

    document.addEventListener('scroll', updateActive);
    window.addEventListener('resize', () => setTitleSize(titleElements));

    updateActive();
    setTitleSize(titleElements);

    makeTitleActive(titleElements, 0);
}