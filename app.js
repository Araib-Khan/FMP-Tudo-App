


// create button

var mainlist = document.getElementById("mainList")
var inp = document.getElementById('text');
var mainlist = document.getElementById("mainList")
function addElem() {

    var li = document.createElement('Li');
    var b = document.createTextNode(inp.value);
    li.appendChild(b);
    var delbtn = document.createElement("button");

    var deltext = document.createTextNode("Delete");
    delbtn.appendChild(deltext);
    li.appendChild(delbtn);
    delbtn.setAttribute('class', 'stylebutton');
    delbtn.setAttribute('onclick', 'deletetask(this)');

    // mainlist.appendChild(li);
    // edit button
    var editbutton = document.createElement("button");
    var edittext = document.createTextNode('edit');
    editbutton.appendChild(edittext);
    li.appendChild(editbutton);
    mainlist.appendChild(li);
    // set setAttribute
    editbutton.setAttribute('class', 'stylebutton');
    editbutton.setAttribute('onclick', 'edittask(this)');
    console.log(li);

}
function deletetask(element) {
    element.parentNode.remove();
}
function edittask(element) {
    console.log(element.parentNode);
    element.parentNode.firstChild.nodeValue = prompt();
}
function deleteAll() {
    mainlist.innerHTML = "";
    inp.value = "";
}