var a=0;
var nextmarginleft=60;
var nextmargintop=15;
var butincr=1;
var activenote=null
var container=document.getElementById('add') 

function increment(){
    //var containerWidth = container.offsetWidth;
    var ins=document.getElementById('instruction')
    ins.style.display='none';
    var boxsize=100;
     if(nextmarginleft+boxsize>window.innerWidth-200)
        {
            nextmargintop+=210;
            nextmarginleft=60;
        }

    var newbox=document.createElement('div')
    newbox.className='box'
    newbox.style.left=nextmarginleft+"px"
    newbox.style.top=nextmargintop+"px"
    var textcontent=document.createElement('textarea');
    textcontent.placeholder="Type here..."
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
    if(a===0)
    {
        nextmarginleft=60;
        nextmargintop=15;
        alert('No Sticky notes to delete');
        return;
    }
    if(activenote){
        activenote.parentNode.removeChild(activenote)
        activenote=null;
        if(nextmarginleft===60){
            nextmargintop-=210;
        }
        a--;
    }
    else{
        var delbox=document.getElementById('add')
        delbox.removeChild(delbox.lastChild);
        nextmarginleft-=210
        if(nextmarginleft===60 && a!=1){
            nextmargintop-=210;
        }
        a--;
    }
}
function deleteall(){
    if(a===0)
        {
            nextmarginleft=60;
            nextmargintop=15;
            alert('No Sticky notes to delete');
            return;
        }
    var delbox = document.getElementById('add');
    while (delbox.firstChild) {
            delbox.removeChild(delbox.firstChild);
        
    }
    nextmarginleft=60;
    nextmargintop=15;
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
    var bg=document.getElementById('bodytheme')
    var bgmen=document.getElementById('menubar')
    var ins=document.getElementById('instruction')
        // Apply box shadow to each box
       
    // Check current icon and toggle accordingly
    if (icon.innerText === 'dark_mode') {
       
        icon.innerText = 'light_mode'; // Change to light mode icon
        icon.setAttribute('title','light mode')
        bg.style.background = `
        linear-gradient(135deg, #383737 25%, transparent 25%) -50px 0,
        linear-gradient(225deg, #383737 25%, transparent 25%) -50px 0,
        linear-gradient(315deg, #383737 25%, transparent 25%),
        linear-gradient(45deg, #383737 25%, transparent 25%)`;
        bg.style.backgroundSize = "100px 100px";
        bg.style.backgroundColor='#1c1c1c'
        bgmen.style.backgroundColor='#e6e5e3'
        bgmen.style.color='black'
        ins.style.color='white'
    } else {
        icon.innerText = 'dark_mode'; // Change to dark mode icon
        ins.style.color='black'
        bg.style.background = `
        linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, #ECEDDC 25%, transparent 25%),
    linear-gradient(45deg, #ECEDDC 25%, transparent 25%)`;
    bg.style.backgroundSize = "100px 100px";
        bg.style.backgroundColor='#82ebd1'
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
