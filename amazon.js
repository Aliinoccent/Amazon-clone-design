let img=document.querySelectorAll(".imagelist");
console.log(img);
let counter=0;
img.forEach((element,index)=>{
    // element.style.position = 'absolute'; 
    element.style.left = `${index * 100}%`;
});

function slide(){
    img.forEach((element)=>{
        element.style.transform=`translateX(${counter * 100}%)`
    });
}
function slideright(){
       
        counter++;
        console.log("slideright");
        slide();
        
    
    

    
}
function sldeleft(){
    
        counter--;
        console.log("sldeleft");
        slide();
  
    
}
const btnup = document.getElementById("btnup");
const btndown = document.getElementById("btndown");

btnup.addEventListener('click', slideright); 
btndown.addEventListener('click', sldeleft); 
