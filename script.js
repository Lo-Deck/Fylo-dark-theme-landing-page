

const myForm = document.getElementById('myForm');

console.log(myForm);




myForm.addEventListener('submit', (event) => {

    

    if(!myForm[0].validity.valid)
    {



        const spanError = document.createElement('span');

        //spanError.classList.add('error');

        spanError.innerText = 'Error, please check your email';

        spanError.id = 'error';

        myForm[0].insertAdjacentElement('afterend', spanError);

       // console.log(spanError);



    }
    else
    {

        console.log('valid');

        //console.log(error);
        
        const elementRemove = document.getElementById('error');

        console.log(elementRemove);

        if(elementRemove)
        {
            elementRemove.remove();            
        }

    }

    event.preventDefault();

});