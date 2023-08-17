

const buttonLeft = document.getElementById('btn-left');
const buttonCenter = document.getElementById('btn-center');
const buttonRight = document.getElementById('btn-right');
const buttonJustify = document.getElementById('btn-justify');

buttonLeft.addEventListener('click',  function(){toggleButton(buttonLeft)});
buttonCenter.addEventListener('click', function(){toggleButton(buttonCenter)});
buttonRight.addEventListener('click',  function(){toggleButton(buttonRight)});
buttonJustify.addEventListener('click',  function(){toggleButton(buttonJustify)});

buttonLeft.addEventListener('click',  function(){toggleText(buttonLeft)});
buttonCenter.addEventListener('click', function(){toggleText(buttonCenter)});
buttonRight.addEventListener('click',  function(){toggleText(buttonRight)});
buttonJustify.addEventListener('click',  function(){toggleText(buttonJustify)});

function toggleButton(button){
    buttonLeft.classList.remove('active');
    buttonCenter.classList.remove('active');
    buttonRight.classList.remove('active');
    buttonJustify.classList.remove('active');

    button.classList.add('active')
}

function toggleText(button) {
    const textArea = document.getElementById('user-text');
    if (button === buttonLeft){
        textArea.classList.remove('text-center');
        textArea.classList.remove('text-right');
        textArea.classList.remove('text-justify');

        textArea.classList.add('text-left');

    }
    else if (button === buttonCenter){
        textArea.classList.remove('text-left');
        textArea.classList.remove('text-right');
        textArea.classList.remove('text-justify');

        textArea.classList.add('text-center');

    }
    else if (button === buttonRight){
        textArea.classList.remove('text-left');
        textArea.classList.remove('text-center');
        textArea.classList.remove('text-justify');

        textArea.classList.add('text-right');

    }
    else if (button === buttonJustify){
        textArea.classList.remove('text-left');
        textArea.classList.remove('text-center');
        textArea.classList.remove('text-right');

        textArea.classList.add('text-justify');

    }



}
