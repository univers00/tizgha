var touchstart = 0
var touchend =0


var Value = 1
var list = Array.from(document.querySelectorAll(".containt"));

window.addEventListener('wheel', function(event)
{

 if (event.deltaY < 0)
 {
pre_page();
 }
 else if (event.deltaY > 0)
 {
next_page();
 }
});

window.document.addEventListener('touchstart', function(event){
    touchstart = event.changedTouches[0].screenX;
},false);
window.document.addEventListener('touchend', function(event)
{
    touchend = event.changedTouches[0].screenX;

    console.log(touchstart);
    console.log(touchend);

    if (touchstart < touchend)
    {
   pre_page();
    }
    else if(touchstart > touchend)
    {
   next_page();
    }else{
    
    }



 },false);


function pre_page(){
    console.log('hello');
    if(Value != 0){
   Value = Value - 1;
    }

   list[Value].style.display ='grid';
   list.forEach((ele)=>{
       if(list.indexOf(ele) == Value){
       return;
       }else{
           ele.style.display = 'none';
       }
   });

}

function next_page(){
    list[Value].style.display ='grid';
    list.forEach((ele)=>{
        if(list.indexOf(ele) == Value){
        return;
        }else{
            ele.style.display = 'none';
        }
    });

    if(Value != 4){
        Value++;
    }
}


function change_page(e){
    console.log(e.textContent)
if(e.textContent ==""){
    Value = 1;
    next_page();

}else if(e.textContent == "Home"){
    Value = 1;
    next_page();
}else if(e.textContent =="Work"){
    Value =2;
    next_page();
}else if(e.textContent =="About"){
    Value = 3;
    next_page();
}else if(e.textContent =="Contact"){
    Value = 4;
    next_page();
}
}