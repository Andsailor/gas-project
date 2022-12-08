const displayUp = () => {
    const upArrow = document.querySelector('.up');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1500) {
            upArrow.style.opacity = '1';
        } else {
            upArrow.style.opacity = '0';
        }
    });    
};

displayUp();