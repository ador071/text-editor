
const buttonBold = document.getElementById('btn-bold');
const buttonItalic = document.getElementById('btn-italic');
const buttonUnderline = document.getElementById('btn-underline');

// Add click event listeners to each button
buttonBold.addEventListener('click', () => toggleBoldButton(buttonBold));
buttonItalic.addEventListener('click', () => toggleBoldButton(buttonItalic));
buttonUnderline.addEventListener('click', () => toggleBoldButton(buttonUnderline));

// Function to toggle the active state of a button
function toggleBoldButton(button) {
  // Remove active class from all buttons
  buttonBold.classList.remove('active');
  buttonItalic.classList.remove('active');
  buttonUnderline.classList.remove('active');
  
  // Add active class to the clicked button
  button.classList.add('active');
}

buttonBold.addEventListener('click', () => toggleBoldText(buttonBold));
buttonItalic.addEventListener('click', () => toggleBoldText(buttonItalic));
buttonUnderline.addEventListener('click', () => toggleBoldText(buttonUnderline));

function toggleBoldText(button) {

    if (button === buttonBold){
        textArea.classList.remove('italic');
        textArea.classList.remove('underline');
        textArea.classList.add('font-bold')

    }
    else if (button === buttonItalic){
        textArea.classList.remove('font-bold');
        textArea.classList.remove('underline');
        textArea.classList.add('italic')

    }
    else if (button === buttonUnderline){
        textArea.classList.remove('font-bold');
        textArea.classList.remove('italic');
        textArea.classList.add('underline');

    }


}

document.getElementById('size-input').addEventListener('keyup', function(event){
    const fontSize = event.target.value; 

    const fontSizePx = fontSize+'px'; 
    textArea.style.fontSize = fontSizePx; 

})

document.getElementById('size-input').addEventListener('click', function(event){
    const fontSize = event.target.value;

    const fontSizePx = fontSize+'px'; 
    textArea.style.fontSize = fontSizePx; 
})

document.getElementById('case-change').addEventListener('click', function(){

    const checkCase = textArea.classList.contains('uppercase');
    if(checkCase === false){
        textArea.classList.add('uppercase');
    }
    else{
        textArea.classList.remove('uppercase');
    }
})

document.getElementById('color-input').addEventListener('input', function(event){
    const color = event.target.value;

    textArea.style.color=color; 
    
})
