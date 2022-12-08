const bindModal = () => {
    const triggers = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.popup'),
          close = document.querySelector('.popup__content-close');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modal.classList.add('animate__animated', 'animate__fadeIn');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === close) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

bindModal();