const APiLink = "https://cat-fact.herokuapp.com/facts";
let btn = document.querySelector("#btn")
let Rsetbtn = document.querySelector("#btn2")
let pera = document.querySelector(".result");
let counter = document.querySelector("#counter");


let count = 0;
let i = 0;

const getData = async () =>{
    let responce = await fetch(APiLink);
    let processToJson = await responce.json();
  
if(i==0){
    pera.innerHTML=processToJson[i].text; 
    i =1
}else{
    pera.innerHTML=processToJson[i].text; 
    i++
}
counter.innerHTML=i

}
const reset= ()=>{
    btn.disabled= false;
    counter.innerHTML="0";
    count=0;
    i = 0;
     minesCount=0
    pera.innerHTML="Fetching......."
    btn.innerText="Fetch";
    loader.style.display="none";
  
   
}

  function click(){
   count++
   btn.innerText="NEXT"
   console.log(count);
   if(count==6){
   btn.disabled= true;
    count=0;

    loader.style.display="block";
    setTimeout(reset, 4000);
   
   }
  } 

btn.onclick=()=>{
    getData();
    click()

}

//cursor Images------------------------------------------------------------------------
let cursor = document.querySelector(".cursor");
let cursorImg = document.querySelector(".cursor img");
let main = document.querySelector("main");

main.addEventListener("mousemove",(e)=>{
      cursor.style.left= e.x+"px";
      cursor.style.top= e.y+"px";
      console.log();

})
let loader = document.querySelector(".loader");