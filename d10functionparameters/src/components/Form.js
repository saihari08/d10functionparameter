import React from 'react'

function Form() {
    let viratResult=()=>{
        let engMarks=88;
        let telMarks=78;
        let hindiMarks=91;
        let sciMarks=77;
        let socMarks=68;
        let mathsMarks=88;
        
       let total =engMarks+telMarks+hindiMarks+sciMarks+socMarks+mathsMarks;
       let perc=(total/600)*100;
      
      if(engMarks>=35 && telMarks>=35 && 
        hindiMarks>=35 &&sciMarks>=35 && 
        socMarks>=35 && mathsMarks){
          
        console.log(`virat Passed in Tenth`);
        }else{
          console.log(`virat Failed in Tenth`)
        }
      }
      
      
      let DhoniResult=()=>{
        let engMarks=88;
        let telMarks=78;
        let hindiMarks=91;
        let sciMarks=77;
        let socMarks=68;
        let mathsMarks=88;
        
       let total =engMarks+telMarks+hindiMarks+sciMarks+socMarks+mathsMarks;
       let perc=(total/600)*100;
      let passMarks=35;
      if(engMarks>=passMarks && telMarks>=passMarks && 
        hindiMarks>=passMarks &&sciMarks>=passMarks && 
        socMarks>=passMarks && mathsMarks){
      
        console.log(`Dhoni Passed in Tenth`);
        }else{
          console.log(`Dhoni Failed in Tenth`)
        }
      }
      
      viratResult();
      DhoniResult();
      
      let calculateResult=(engMarks,
        telMarks,
        mathsMarks,
        hindiMarks,
        sciMarks,
        socMarks,
        studentName
      )=>{
      let totalMarks=engMarks+telMarks+mathsMarks+hindiMarks+sciMarks+socMarks;
      
      let perc=(totalMarks/600)/100;
      
      if(engMarks>=35 && 
        telMarks>=35 && 
        hindiMarks>=35 &&
        sciMarks>=35 && 
        socMarks>=35 && 
        mathsMarks){
      
        console.log(`${studentName} Passed in Tenth`);
        }else{
        console.log(`${studentName} Failed in Tenth`);
        }
      
      console.log(totalMarks);
      };
      
      calculateResult(77,92,88,65,80,90,"surya");
      calculateResult(78,62,90,88,70,95,"Rohit");
      calculateResult(88,66,95,78,72,90,"yuvaraj");     
  return (
    <div>
       <h1>Functions with parameters</h1>
    </div>
  )
}

export default Form
