window.onload = ()=>{
    const menuBtn = document.querySelector('.menu-btn');
    const hamburger = document.querySelector('.menu-btn__burger');
    const nav = document.querySelector('nav');
    const navMenu = document.querySelector('.menu-nav');
    const nav_items = document.querySelectorAll('.menu-nav__item');
    const nav_link = document.querySelectorAll('.menu-nav__link');
    const work_hover = document.querySelectorAll('.worked__works__single');
    

    let showMenu = false;
    menuBtn.addEventListener('click', toggleMenu);
    function toggleMenu() {
        if (!showMenu) {
            hamburger.classList.add('open');
            nav.classList.add('open');
            navMenu.classList.add('open');
            nav_items.forEach(a => {
                a.classList.add('open');
            });
            showMenu = true;
        } else {
            hamburger.classList.remove('open');
            nav.classList.remove('open');
            navMenu.classList.remove('open');
            nav_items.forEach(a => {
                a.classList.remove('open');
            });
            showMenu = false;
        }
    }


    work_hover.forEach(a => {
        a.addEventListener('mouseover', function () {
            this.lastElementChild.classList.add('active');
        });

        a.addEventListener('mouseout', function () {
            this.lastElementChild.classList.remove('active');
        });

    });

    nav_link.forEach(aa => {
        aa.addEventListener('click', () => {
            hamburger.classList.remove('open');
            nav.classList.remove('open');
            navMenu.classList.remove('open');
            nav_items.forEach(a => {
                a.classList.remove('open');
            });
            showMenu = false;
        })
    })


}