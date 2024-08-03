var a=0;
var nextmarginleft=60;
var butincr=1;
var activenote=null
var container=document.getElementById('add') 
function increment(){
    var ins = document.getElementById('instruction');
    ins.style.display = 'none';
    var container = document.getElementById('add');
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;

    var boxWidth = 100; 
    var boxHeight = 100;
    
    var randomLeft = Math.random() * (containerWidth - boxWidth-200);
    var  randomTop = Math.random() * (containerHeight - boxHeight-200);

    var newbox = document.createElement('div');
    newbox.className = 'box';
    newbox.style.position = 'absolute';
    newbox.style.left = randomLeft + 'px';
    newbox.style.top = randomTop + 'px';
    var textcontent=document.createElement('textarea');
    textcontent.placeholder="Type here..."
    textcontent.className="textbox"
    newbox.appendChild(textcontent)
    document.getElementById('add').appendChild(newbox)
    newbox.addEventListener('mousedown',mouseDown)
    textcontent.addEventListener('mousedown',mouseDown)
    newbox.addEventListener('touchstart',touchStart)
    textcontent.addEventListener('touchstart',touchStart)
    a++;
    newbox.addEventListener('click',()=>{
        activenote=newbox;
        
    })
}
function decrement(){
    if(a===0)
    {
        nextmarginleft=60;
        alert('No Sticky notes to delete');
        return;
    }
    if(activenote){
        activenote.parentNode.removeChild(activenote)
        activenote=null;
        nextmarginleft-=60;
        a--;
    }
    else{
        var delbox=document.getElementById('add')
        delbox.removeChild(delbox.lastChild);
        nextmarginleft-=60;
        a--;
    }
}
function deleteall(){
    if(a===0)
        {
            nextmarginleft=60;
            alert('No Sticky notes to delete');
            return;
        }
    var delbox = document.getElementById('add');
    while (delbox.firstChild) {
            delbox.removeChild(delbox.firstChild);
        
    }
    nextmarginleft=60;
    a=0;
}
    

function choosing()
{
    document.getElementById('colorpicker').click();
    document.getElementById('colorpicker').addEventListener('input',(event)=>{
        var colorbox=event.target.value;
        if(activenote){
            activenote.style.backgroundColor=colorbox;
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
    var icon = document.getElementById('modeIcon');
    var bg=document.getElementById('bodytheme')
    var bgmen=document.getElementById('menubar')
    var ins=document.getElementById('instruction')

    if (icon.innerText === 'dark_mode') {
       
        icon.innerText = 'light_mode'; 
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
        ins.style.color='white';
    } else {
        icon.innerText = 'dark_mode';
        bg.style.background = `
        linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, #ECEDDC 25%, transparent 25%),
    linear-gradient(45deg, #ECEDDC 25%, transparent 25%)`;
    bg.style.backgroundSize = "100px 100px";
        bg.style.backgroundColor='#82ebd1'
        bgmen.style.backgroundColor='black'
        bgmen.style.color='white'
        ins.style.color='black'
        icon.setAttribute('title','dark mode')
    }
}

var drag;
var newX=0;
var newY=0;
var startX=0;
var startY=0;
var offsetX = 0;
var offsetY = 0;
function mouseDown(e) {
    e.preventDefault(); // Prevent text selection
    drag = e.target.closest('.box');
    startX = e.clientX;
    startY = e.clientY;
    offsetX = drag.offsetLeft;
    offsetY = drag.offsetTop;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function touchStart(e) {
    e.preventDefault(); // Prevent default touch behavior
    drag = e.target.closest('.box');
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    offsetX = drag.offsetLeft;
    offsetY = drag.offsetTop;

    document.addEventListener('touchmove', touchMove);
    document.addEventListener('touchend', touchEnd);
}

function mouseMove(e) {
    if (drag) {
        var newX = e.clientX - startX;
        var newY = e.clientY - startY;

        drag.style.left = offsetX + newX + 'px';
        drag.style.top = offsetY + newY + 'px';
    }
}

function touchMove(e) {
    if (drag) {
        var newX = e.touches[0].clientX - startX;
        var newY = e.touches[0].clientY - startY;

        drag.style.left = offsetX + newX + 'px';
        drag.style.top = offsetY + newY + 'px';
    }
}

function mouseUp() {
    drag = null;
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}

function touchEnd() {
    drag = null;
    document.removeEventListener('touchmove', touchMove);
    document.removeEventListener('touchend', touchEnd);
}