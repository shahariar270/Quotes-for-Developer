const show_quate=document.querySelector('#show_quate');
const btn=document.querySelector('#btn');

const hour=document.querySelector('#hour');
const minitue=document.querySelector('#minitue');
const ampm=document.querySelector('#appm');
const day=document.querySelector('#day');
const month=document.querySelector('#month');
const year=document.querySelector('#year');
// const hour=document.querySelector('#hour');



//start time and date setting

const time=()=>{
    let h=new Date().getHours();
    let m=new Date().getMinutes();


if (h>12) {
    ampm.innerHTML="PM"
    
} else {
        ampm.innerHTML="AM"  
}
if (h<10) {
    hour.innerHTML="0"+h;
} else{
        hour.innerHTML=h;
}


if (m<10) {
    minitue.innerHTML="0"+m;
} else{
        minitue.innerHTML=m;
}
        }



        

const date=()=>{
    let d=new Date().getDate();
let M=new Date().getMonth();
let y=new Date().getFullYear();
    year.innerHTML=y;


if (M<10) {
    month.innerHTML="0"+M;
} 
else{
    month.innerHTML=M;
}

if (d<10) {
    month.innerHTML="0"+d;
} else{
        day.innerHTML=d;
}
    
        }


//end time and date setting



 
const data=()=>{
    let quate=[
        "Simplicity is the soul of efficiency.",
        "The more I study, the more insatiable do I feel my genius for it to be.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "The function of good software is to make the complex appear to be simple.",
        "Don’t comment bad code – rewrite it",
        "Quality is a product of a conflict between programmers and testers",
        "Don’t compare yourself with anyone in this world…if you do so, you are insulting yourself.",
        "A language that doesn’t affect the way you think about programming is not worth knowing",
        "In programming, if someone tells you “you’re overcomplicating it,” they’re either 10 steps behind you or 10 steps ahead of you.",

    ]
    show_quate.innerHTML=quate[0]
    const clickedEvent=()=>{
        let rendomNumber=Math.floor(Math.random()*8)+1;
       let quateGenarator=quate[rendomNumber]
        show_quate.innerHTML=quateGenarator;
        console.log(rendomNumber);
        
    }
    
    btn.addEventListener("click",clickedEvent)
}

data();
time();
date();

