/*
    e.target.classList.toggle("checked") - Eğer class ismi olarak 'checked' varsa kaldır, yoksa ekle.
    localStorage.setItem('data', listContainer.innerHTML) - Lokal olarak data isminde bir alana kayıt yapıyoruz.
    localStorage.getItem('data') - data ismindeki alanda bulunan değeri getirir.
    e.target.parentElement.remove() - Seçili elementin parentını kaldırır.
    e.target.tagName - seçili elementin etiket ismini verir.
*/

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();