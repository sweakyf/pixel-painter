const editorElement = document.querySelector('.pixel-editor');
const selectElement = document.querySelector('select')


editorElement.addEventListener('click', function (evt) {
    if (evt.target.matches('.elem')) {
        evt.target.style.backgroundColor = selectElement.value;
    }   
   
    });
