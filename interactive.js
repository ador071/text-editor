
const buttonBold = document.getElementById('btn-bold');
const buttonItalic = document.getElementById('btn-italic');
const buttonUnderline = document.getElementById('btn-underline');

// Add click event listeners to each button
buttonBold.addEventListener('click', () => toggleButton(buttonBold));
buttonItalic.addEventListener('click', () => toggleButton(buttonItalic));
buttonUnderline.addEventListener('click', () => toggleButton(buttonUnderline));

// Function to toggle the active state of a button
function toggleButton(button) {
  // Remove active class from all buttons
  buttonBold.classList.remove('active');
  buttonItalic.classList.remove('active');
  buttonUnderline.classList.remove('active');
  
  // Add active class to the clicked button
  button.classList.add('active');
}

buttonBold.addEventListener('click', () => toggleText(buttonBold));
buttonItalic.addEventListener('click', () => toggleText(buttonItalic));
buttonUnderline.addEventListener('click', () => toggleText(buttonUnderline));

function toggleText(button) {
    const textArea = document.getElementById('user-text');
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