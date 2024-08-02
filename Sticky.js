var a=1;
var nextmarginleft=60;
var nextmargintop=15;
var butincr=1;
var activenote=null
var container=document.getElementById('add') 
function increment(){
    //var containerWidth = container.offsetWidth;
    var boxsize=100;
     if(nextmarginleft+boxsize>window.innerWidth-200 && nextmargintop+boxsize>window.innerHeight-200)
     {
         alert("Queue is full! Cannot add more sticky notes")
         return;
     }
     else if(nextmarginleft+boxsize>window.innerWidth-200 && nextmargintop+boxsize<window.innerHeight-200)
        {
            nextmargintop+=210;
            nextmarginleft=60;
        }

    var newbox=document.createElement('div')
    newbox.className='box'
    newbox.style.left=nextmarginleft+"px"
    newbox.style.top=nextmargintop+"px"
    var textcontent=document.createElement('textarea');
    textcontent.className="textbox"
    newbox.appendChild(textcontent)
    document.getElementById('add').appendChild(newbox)
    //applyboxshadow() // Get the icon element
    //newbox.innerHTML=a;
    //var b1=document.createElement('button')
    //b1.textContent="Edit"
    //newbox.appendChild(b1)
    newbox.addEventListener('mousedown',mouseDown)
    textcontent.addEventListener('mousedown',mouseDown)
    a++;
    nextmarginleft+=210;
    newbox.addEventListener('click',()=>{
        activenote=newbox;
    })
}
// function edit()
// {
//     var text=document.createElement('textarea')
//     text.className='textcontent'
//     document.getElementsByClassName().appendChild(text)
// }
function decrement(){
    if(activenote){
        activenote.parentNode.removeChild(activenote)
        activenote=null;
        nextmargin-=100
        a--;
    }
    else{
        var delbox=document.getElementById('add')
        delbox.removeChild(delbox.lastChild);
        nextmargin-=100
        a--;
}
}
function deleteall(){
    var delbox = document.getElementById('add');
    while (delbox.firstChild) {
            delbox.removeChild(delbox.firstChild);
        
    }
    nextmargin=0;
}
function choosing()
{
    document.getElementById('colorpicker').click();
    document.getElementById('colorpicker').addEventListener('input',(event)=>{
        var colorbox=event.target.value;
        if(activenote){
            activenote.style.backgroundColor=colorbox;
           // activenote.firstChild.style.color = activenote.firstChild.style.color || 'black';
        }
    })
}
function choosing2()
{
    document.getElementById('colorpicker2').click();
    document.getElementById('colorpicker2').addEventListener('input',(event)=>{
        var colorbox=event.target.value;
        if(activenote){
            activenote.firstChild.style.color=colorbox;   
        }
    })
}
function mode()
{
    document.getElementById('modeIcon').addEventListener('click', toggleMode);
}
function toggleMode() {
    var icon = document.getElementById('modeIcon'); // Get the icon element
    var bg=document.getElementById('maindiv')
    var bgmen=document.getElementById('menubar')

        // Apply box shadow to each box
       
    // Check current icon and toggle accordingly
    if (icon.innerText === 'dark_mode') {
       
        icon.innerText = 'light_mode'; // Change to light mode icon
        icon.setAttribute('title','light mode')
        bg.style.backgroundColor='#1c1c1c'
        bgmen.style.backgroundColor='#e6e5e3'
        bgmen.style.color='black'
        
    } else {
        icon.innerText = 'dark_mode'; // Change to dark mode icon
        bg.style.backgroundColor='#e5e5e5'
        bgmen.style.backgroundColor='black'
        bgmen.style.color='white'
        icon.setAttribute('title','dark mode')
    }
}

var drag;
var newX=0;
var newY=0;
var startX=0;
var startY=0;
function mouseDown(e){
    //e.preventDefault(); // Prevent text selection in textarea
    drag = e.target.closest('.box');
    startX=e.clientX
    startY=e.clientY
    document.addEventListener('mousemove',mouseMove)
    document.addEventListener('mouseup',mouseUp)
}
function mouseMove(e){
    if(drag)
    {
        var newX = e.clientX - startX;
        var newY = e.clientY - startY;

        var newLeft = drag.offsetLeft + newX;
        var newTop = drag.offsetTop + newY;

        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;

        var boxWidth = drag.offsetWidth;
        var boxHeight = drag.offsetHeight;

        newLeft = Math.max(0, Math.min(newLeft, viewportWidth - boxWidth-130));
        newTop = Math.max(0, Math.min(newTop, viewportHeight - boxHeight-40));

        drag.style.left = newLeft + "px";
        drag.style.top = newTop + "px";

        startX = e.clientX;
        startY = e.clientY;
    }
}
function mouseUp(){
    drag=null
    document.removeEventListener('mousemove',mouseMove)
    document.removeEventListener('mouseup',mouseUp)
}
