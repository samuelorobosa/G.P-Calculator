var info=document.querySelector("#info");
var cl=document.querySelector("#main");
var submit=document.querySelector("#submit");
var input=document.querySelector("#input");
var gp = document.querySelector("#main2");
var result=document.querySelector("#result");
var creditLoadArray=[];
var gradePointArray=[];
var newGradePoints=[];

function check (num){
    if (num =="a"|| num =="A"){
   num = 5}
   
   else if (num=="b"|| num =="B"){
   num = 4
      } 
         else if(num== "c"|| num =="C"){
             num = 3
   }
   else if(num=="d"|| num =="D"){
       num = 2
 }
   else if(num=="f"|| num =="F"){
      num = 0

   }
    return num
}

function calcArray(total, num){
    return total + num;
}

submit.addEventListener("click", function(){
    
    if (input.value>0 && input.value<21){
    var label=document.getElementById("label")
    label.parentNode.removeChild(label);
    submit.parentNode.removeChild(submit);
    info.innerHTML="Enter grades and credit loads in the input fields below " 
    input.parentNode.removeChild(input);
        
        
        
        
       var creditLoadText=document.createTextNode("Enter Credit Loads here");
        var gradePointText=document.createTextNode("Enter Grades here");
         
        var creditLoadParagraph=document.createElement("p");
        var gradePointParagraph=document.createElement("p");
        
        creditLoadParagraph.appendChild(creditLoadText);
        gradePointParagraph.appendChild(gradePointText);
        
        cl.appendChild(creditLoadParagraph);
        gp.appendChild(gradePointParagraph); 
        
        
    for(var i=0;i<input.value; i++){
        
        var creditLoad =  document.createElement("input");
        creditLoad.type="number";
        creditLoad.className="creditLoad";
        cl.appendChild(creditLoad);
        
       var gradePoint = document.createElement("input");
        gradePoint.type="text";
        gradePoint.className="gradePoint"
        gp.appendChild(gradePoint);
    }
    
    var text=document.createTextNode("Calculate");
    var calculate=document.createElement("button");
    calculate.addEventListener("click",calculateTotalGp) 
    calculate.appendChild(text);
    result.appendChild(calculate);
}else{alert("Enter a positive value below 21")}})

function calculateTotalGp(){
    var creditLoads=document.getElementsByClassName("creditLoad");
    var gradePoints=document.getElementsByClassName("gradePoint");
     
    for(var i=0;i<creditLoads.length;i++){
        creditLoadArray.push(Number(creditLoads[i].value))
        gradePointArray.push(gradePoints[i].value);
    }
    
    newGradePoints=gradePointArray.map(check); //converts the letters to numbers
   alert("Calculating")
    var totalGradePointCredits = 0;
    
    for(var i=0; i<creditLoadArray.length; i++){
    totalGradePointCredits += creditLoadArray[i]* newGradePoints[i];
        creditLoads[i].value="";
        gradePoints[i].value="";
    }
    
 var totalCreditLoad = creditLoadArray.reduce(calcArray);
        
    var GPA = totalGradePointCredits/totalCreditLoad;
    
    alert("G.P Calculated")
    
    var calculatedGp=document.createTextNode("Your G.P.A is "+ GPA);
    var GpaParagraph=document.createElement("p").appendChild(calculatedGp);
    GpaParagraph.id="gpaparagraph"
    result.appendChild(GpaParagraph);
    
    alert("Your G.P.A is "+ GPA+". Refresh this page to continue")
}