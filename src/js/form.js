const formRequest = () => {
    const forms = document.querySelectorAll('form'),
          thanks = document.querySelector('.thanks'),
          popup = document.querySelector('.popup'),
          inputs = document.querySelectorAll('input'),
          closeThanksButton = document.querySelector('.btn_thanks');

    async function makeRequest(url, data) {
        const respond = await fetch(url, {
            method: 'POST',
            body: data
        });
        let result = await respond.text();
        return result;
    }

    function clearInputs() {
        inputs.forEach(input => {
            input.value = '';
            input.style.borderColor = '#DEDEDE';
        });
    }

    function closeThanksModal() {
        thanks.style.display = 'none';
        document.body.style.overflow = '';
        if (popup.style.display === 'flex') {
            popup.style.display ='none';
        }
    }

    closeThanksButton.addEventListener('click', () => {
        closeThanksModal();
        clearInputs();
    });

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let nameInput = form.querySelector('[name="name"]'),            
                phoneInput = form.querySelector('[name="phone"]');              
            if (nameInput.value.length > 1 && phoneInput.value.length > 8) {
                let formData = new FormData(form);
                makeRequest('question.php', formData)
                .then(result => console.log(result))
                .then(function() { 
                    thanks.classList.add('animate__animated', 'animate__fadeIn');
                    thanks.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                })
                .catch(e => alert(e))
                .finally(setTimeout(function() {
                    closeThanksModal();
                    clearInputs();
                }, 5000));
            } else {
                if (nameInput.value.length < 1) {
                    nameInput.style.borderColor = 'red';
                }
                if (phoneInput.value.length < 8) {
                    phoneInput.style.borderColor = 'red';
                }
            }
            
        });
    });
};

formRequest();