const myForm = document.getElementById('myForm');


myForm.addEventListener('submit', (event) => {

    

    if(!myForm[0].validity.valid)
    {

        const spanError = document.createElement('span');

        spanError.innerText = 'Error, please check your email';

        spanError.id = 'error';

        myForm[0].insertAdjacentElement('afterend', spanError);

    }
    else
    {

        const elementRemove = document.getElementById('error');

        if(elementRemove)
        {
            elementRemove.remove();            
        }

    }

    event.preventDefault();

});