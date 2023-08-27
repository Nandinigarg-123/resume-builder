function addNewWEFeild(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weFeild');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter Here');
    newNode.classList.add('border','border-dark');
    
    let weob=document.getElementById("we");
    let weAddButtonob = document.getElementById('weAddButton');
    
    weob.insertBefore(newNode, weAddButtonob);
}
function addNewAQFeild(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('acdFeild');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter Here');
    newNode.classList.add('border','border-dark');
    
    let aqob=document.getElementById("aq");
    let aqAddButtonob = document.getElementById('aqAddButton');
    
    aqob.insertBefore(newNode, aqAddButtonob);
}
 function addNewLAFeild(){
    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('lanFeild');
    newNode.classList.add('mt-2');
    newNode.classList.add('border','border-dark');
    
    newNode.setAttribute('placeholder','Enter Here');

    let laob=document.getElementById("la");
    let laAddButtonob = document.getElementById('laAddButton');
    
    laob.insertBefore(newNode, laAddButtonob);
} 
function addNewEXFeild(){
    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('expFeild');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter Here');
    newNode.classList.add('border','border-dark');
   
    let exob=document.getElementById("ex");
    let exAddButtonob = document.getElementById('exAddButton');
    
    exob.insertBefore(newNode, exAddButtonob);
}


function generatecv(){
     let nameFeild = document.getElementById("nameFeild").value;
     let nameT1 = document.getElementById('nameT1');
     nameT1.innerHTML=nameFeild;

    document.getElementById('nameT2').innerHTML=nameFeild;
    document.getElementById('contactT1').innerHTML=document.getElementById('contactFeild').value;
    
    document.getElementById('addressT').innerHTML=document.getElementById('addressFeild').value;

    document.getElementById('emailT1').innerHTML=document.getElementById('emailFeild').value;

    document.getElementById("fb").innerHTML=document.getElementById("fbFeild").value;

    document.getElementById('ins').innerHTML=document.getElementById('instaFeild').value;

    document.getElementById('lin').innerHTML=document.getElementById('linkedInFeild').value;

    document.getElementById('obt').innerHTML=document.getElementById('objectiveFeild').value;

    // <!--work experience-->
   let wes =  document.getElementsByClassName('weFeild');
   let str="";
   for(let e of wes){
    str=str+`<li> ${e.value} </li>`;
   }

   document.getElementById('wet').innerHTML=str;

    // academic qualification
    let acd =  document.getElementsByClassName('acdFeild');
   let str1="";
   for(let e of acd){
    str1=str1+`<li> ${e.value} </li>`;
   }

   document.getElementById('act').innerHTML=str1;

      //language
   let lan =  document.getElementsByClassName('lanFeild');
   let str3="";
   for(let e of lan){
    str3=str3+`<li> ${e.value} </li>`;
   }

   document.getElementById('lat').innerHTML=str3;


   // expertise
   let exp =  document.getElementsByClassName('expFeild');
   let str2="";
   for(let e of exp){
    str2=str2+`<li> ${e.value} </li>`;
   }

   document.getElementById('ext').innerHTML=str2;

//code for profilepic
  let file = document.getElementById('imgFeild').files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file);

  //set img to template
  reader.onloadend = function(){
  document.getElementById('imgT').src = reader.result;
  };

   document.getElementById('cv-form').style.display='none';
   document.getElementById('cv-template').style.display='block';

}

function printres(){
    window.print();
}
