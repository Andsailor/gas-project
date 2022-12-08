const questions = () => {
    const triggers = document.querySelectorAll('.question__wrapper-questions-item-text');

    triggers.forEach(trigger => {
        let answer = trigger.nextElementSibling;
        let arrow = trigger.parentNode.previousElementSibling;
        answer.classList.add('animate__animated', 'animate__fadeInDown');
        trigger.addEventListener('click', () => {
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                trigger.classList.remove('question__wrapper-questions-item-text_active');
                arrow.setAttribute('src', './img/downarrow.png');             
            } else {
                answer.style.display = 'block';
                trigger.classList.add('question__wrapper-questions-item-text_active');
                arrow.setAttribute('src', './img/bluearrow.png');
            }
        });
    });
};

questions();