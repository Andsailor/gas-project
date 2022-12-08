const slider = () => {
    const sliderItem = document.querySelectorAll('.slider-main-item'),
          nextButton = document.querySelector('.next-arrow'),
          prevButton = document.querySelector('.prev-arrow'),
          dots = document.querySelectorAll('.dot');

    let slideIndex = 0;

    function showSlide(num) {
        sliderItem.forEach(item => {
            item.style.display = 'none';
        });
        sliderItem[num].classList.add('animate__animated', 'animate__fadeIn');
        sliderItem[num].style.display = 'flex';
    }
    showSlide(slideIndex);
    
    function changeDotsActiveClass(arg) {
        dots.forEach(dot => {
            dot.classList.remove('dot_active');
            dots[arg].classList.add('dot_active');
        });
    }

    nextButton.addEventListener('click', () => {
        if (slideIndex === dots.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        showSlide(slideIndex);
        changeDotsActiveClass(slideIndex);     
    });

    prevButton.addEventListener('click', () => {
        if (slideIndex === 0) {
            slideIndex = dots.length - 1;
        } else {
            slideIndex--;
        }
        showSlide(slideIndex);
        changeDotsActiveClass(slideIndex);
    });
    
    dots.forEach((dot, i) => {        
        dot.addEventListener('click', () => {
            changeDotsActiveClass(i);
            slideIndex = i;
            showSlide(slideIndex);
        });
    });
};

slider();