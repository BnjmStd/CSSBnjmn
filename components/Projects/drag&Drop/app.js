const $color = document.getElementById('color');
const $createBtn = document.getElementById('createBtn');
const list = document.getElementById('list')

$createBtn.onclick = () => {
    const $newNote = document.createElement('div')

    $newNote.classList.add('note');
    $newNote.innetHTML = `                  <span class="close">X</span>
                <textarea name=""
                placeholder="write content ..." rows="10" cols="30"
                id=""></textarea>
                `

    $newNote.style.borderColor = $color.value;
    list.appendChild($newNote)
}