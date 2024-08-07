const inputBox = document.getElementById('input_box');
const listContainor = document.getElementById('list_containor');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainor.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savaData();
}

listContainor.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savaData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savaData();
    }
}, false);

function savaData(){
    localStorage.setItem("data", listContainor.innerHTML);
}

function showTask(){
    listContainor.innerHTML = localStorage.getItem("data");
}
showTask();
