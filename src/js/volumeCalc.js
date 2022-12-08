const calcVolume = () => {
    const calcTriggers = document.querySelectorAll('.btn_volume'),
          calcImages = document.querySelectorAll('.volume__wrapper-img-carrier');

    calcTriggers.forEach((trigger, i) => {
        trigger.addEventListener('click', () => {
            calcTriggers.forEach(trigger => {
                trigger.classList.remove('btn_volume_active');
                calcTriggers[i].classList.add('btn_volume_active');
            });
            calcImages.forEach(img => {
                img.style.display = 'none';
                calcImages[i].classList.add('animate__animated', 'animate__fadeIn');
                calcImages[i].style.display = 'block';
            });           
        });
    });
};

calcVolume();