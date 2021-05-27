/* Code that makes the main web page interactive (animations, active section detection, etc) */

// Defines the number of projects and posts visible by default. More are revealed by pressing the "Show More" button
const PROJECT_COUNT_START = 3;
const POST_COUNT_START = 3;

// The maximum number of projects or posts revelaed when pressing "Show More" (limited by total number of projects/posts)
const PROJECT_COUNT_INC = 2;
const POST_COUNT_INC = 2;

// Time in milliseconds that items are offset in becoming visible
const VISIBLE_DELAY = 100;

// Track the current number of projects and posts visible
// Global variables, but oh well
let projectCount = PROJECT_COUNT_START;
let postCount = POST_COUNT_START;

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

function makeChildVisible(children, index, delay) {
    // Base case: stop making the next child visible after all are complete
    if (index >= children.length) {
        return;
    }

    children[index].classList.remove('hidden');
    console.log('making visible', index)

    setTimeout(() => makeChildVisible(children, index + 1, delay), delay);
}

/* Makes hidden projects/posts visible (when pressing the show more button) */
function makeChildrenVisible(children, currentVisible, increment, delay) {
    const childrenSubset = Array.from(children).slice(currentVisible, currentVisible + increment);

    makeChildVisible(childrenSubset, 0, delay);
}

window.onload = function() {
    const titleElements = document.getElementById('title-scroller').children;

    // Make initial projects and posts visible
    const portfolioContainer = document.querySelector('#portfolio-section .right-section-partition');
    const postContainer = document.querySelector('#post-section .right-section-partition');

    makeChildrenVisible(portfolioContainer.children, 0, projectCount, VISIBLE_DELAY);
    makeChildrenVisible(postContainer.children, 0, postCount, VISIBLE_DELAY);

    // Register even listeners for both of the buttons
    const portfolioShowMoreButton = document.getElementById('portfolio-show-more-button');
    const postShowMoreButton = document.getElementById('post-show-more-button');

    portfolioShowMoreButton.addEventListener('click', () => {
        makeChildrenVisible(portfolioContainer.children, projectCount, PROJECT_COUNT_INC, VISIBLE_DELAY);

        projectCount += PROJECT_COUNT_INC;

        // Hide the show more button if we've shown all the projects
        if (projectCount >= portfolioContainer.children.length - 1) {
            portfolioShowMoreButton.style.display = 'none'
        }
    });

    postShowMoreButton.addEventListener('click', () => {
        makeChildrenVisible(postContainer.children, postCount, POST_COUNT_INC, VISIBLE_DELAY);

        postCount += POST_COUNT_INC;

        // Hide the show more button if we've shown all the posts
        if (postCount >= postContainer.children.length - 1) {
            postShowMoreButton.style.display = 'none'
        }
    });

    // Change the "active" menu item on scroll
    document.addEventListener('scroll', updateActive);

    // Adjust the size of the scrolling titles whenever the page is resized
    window.addEventListener('resize', () => setTitleSize(titleElements));

    updateActive();
    setTitleSize(titleElements);

    makeTitleActive(titleElements, 0);
}