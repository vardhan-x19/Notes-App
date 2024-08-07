const cont=document.getElementById("notes-container");
function addNotes() {
    let note=document.createElement("div");
    note.classList.add("note")
    let noteText=document.createElement("p");
    noteText.classList.add("noteText");
    noteText.setAttribute("contenteditable","true"); 
    let delImg=document.createElement("img");
    delImg.src='delete.png';
    delImg.classList.add("delImg");
    note.appendChild(noteText);
    note.appendChild(delImg);
    cont.appendChild(note);
};

cont.addEventListener("click",function(e){
    if(e.target.tagName==='IMG')
    {
        e.target.parentElement.remove();
        savedata();
    }
    else if(e.target.tagName=='P')
    {
        let list=document.querySelectorAll(".note");
        list.forEach(nt => {
            nt.onkeyup=function(){
                savedata();
            }
        });
    }
})
function savedata()
{
    localStorage.setItem("ele",cont.innerHTML);
}
function showData()
{
    cont.innerHTML=localStorage.getItem("ele");
}
showData();
