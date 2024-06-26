import React,{useRef} from 'react'

function TenthForm() {

let FirstNameInputRef=useRef();
let LastNameInputRef=useRef();
let EnglishInputRef=useRef();
let TeluguInputRef=useRef();
let HindiInputRef=useRef();
let MathsInputRef=useRef();
let ScienceInputRef=useRef();
let SocialInputRef=useRef();
let resultParaRef=useRef();
let EnglishSpanRef=useRef();
let TeluguSpanRef=useRef();
let HindiSpanRef=useRef();
let MathsSpanRef=useRef();
let ScienceSpanRef=useRef();
let SocialSpanRef=useRef();

let inputOnFocus=(inputRef)=>{
inputRef.current.style.backgroundColor="skyblue";
}
let inputOnblur=(inputRef)=>{
  inputRef.current.style.backgroundColor="";
}
let inputOnchange=(inputRef,spanRef)=>{
inputRef.current.style.backgroundColor="yellow";
spanRef.current.innerHTML=inputRef.current.value>35?"Pass":"Fail";   
spanRef.current.style.backgroundColor=inputRef.current.value>35?"green":"red";   
}
 
return (

<div>
<form className='TenthForm'>
<fieldset>
<legend>MarksSheet</legend>
     
<div>
<label>FirstName</label>
<input ref={FirstNameInputRef}type="text"
onFocus={()=>{
    inputOnFocus(FirstNameInputRef);
    }}
onBlur={()=>{
    inputOnblur(FirstNameInputRef)
    }}
></input>
<span></span>
</div>

<div>
<label>LastName</label>
<input ref={LastNameInputRef}type="text"
onFocus={()=>{
    inputOnFocus(LastNameInputRef);
    }}
onBlur={()=>{
    inputOnblur(LastNameInputRef);
    }}
></input>
<span></span>
</div>

<div>
<label>English</label>
<input ref={EnglishInputRef} type="number"
onFocus={()=>{
    inputOnFocus(EnglishInputRef);
}}
onChange={()=>{
    inputOnchange(EnglishInputRef,EnglishSpanRef);
}}
onBlur={()=>{
    inputOnblur(EnglishInputRef);
}}>          
</input>
<span ref={EnglishSpanRef}></span>
</div>

<div>
<label>Telugu</label>
<input ref={TeluguInputRef}type="number"
onFocus={()=>{
    inputOnFocus(TeluguInputRef)     
}}
onChange={()=>{
    inputOnchange(TeluguInputRef,TeluguSpanRef); 
}}
onBlur={()=>{
    inputOnblur(TeluguInputRef)   
}}        
></input>
<span ref={TeluguSpanRef}></span>
</div>
     
<div>
<label>Hindi</label>
<input ref={HindiInputRef}type="number" 

onFocus={()=>{
     inputOnFocus(HindiInputRef)   
}}
onChange={()=>{
    inputOnchange(HindiInputRef,HindiSpanRef); 
}}
onBlur={()=>{
    inputOnblur(HindiInputRef)
}}
></input>
<span ref={HindiSpanRef}></span>
</div>

<div>
<label>Maths</label>
<input ref={MathsInputRef}type="number"
        
onFocus={()=>{
    inputOnFocus(MathsInputRef)  
}}
onChange={()=>{
    inputOnchange(MathsInputRef,MathsSpanRef);
}}
onBlur={()=>{
     inputOnblur(MathsInputRef)  
}}>
</input>
<span ref={MathsSpanRef}></span>
</div>

<div>
<label>Science</label>
<input ref={ScienceInputRef} type="number"
onFocus={()=>{
    inputOnFocus(ScienceInputRef)
 }}
onChange={()=>{
    inputOnchange(ScienceInputRef,ScienceSpanRef);
}}
onBlur={()=>{
    inputOnblur(ScienceInputRef)
}}>
</input>
<span ref={ScienceSpanRef}></span>
</div>

<div>
<label>Social</label>
<input ref={SocialInputRef} type="number"
onFocus={()=>{
    inputOnFocus(SocialInputRef)
}}
onChange={()=>{
    inputOnchange(SocialInputRef,SocialSpanRef);
}}
onBlur={()=>{
    inputOnblur(SocialInputRef)
}}>
</input>
<span ref={SocialSpanRef}></span>
</div>

</fieldset>
<div> 
<button type="button" onClick={()=>{

let English=Number(EnglishInputRef.current.value);
let Telugu=Number(TeluguInputRef.current.value);
let Hindi=Number(HindiInputRef.current.value);
let Science=Number(ScienceInputRef.current.value);
let Maths=Number(MathsInputRef.current.value);
let Social=Number(SocialInputRef.current.value);

let result;

if(English >=35 && Telugu >=35 && 
   Hindi >=35 && Science >=35 &&
   Maths >=35 && Social >=35 )
    {result="Pass";
}else{
     result="Fail";
}

let totalmarks=English+Telugu+Hindi+Maths+Science+Social

let perc=(totalmarks/600)*100
//alert(`${FirstNameInputRef.current.value} totalmarks are ${totalmarks}`);//

resultParaRef.current.innerHTML=`${FirstNameInputRef.current.value}
${LastNameInputRef.current.value} ${result} in Tenth with
totalmarks are ${totalmarks} with percentage ${perc.toFixed(2)}%`;

}}>Submit</button>
<button type="button" onClick={()=>{
      
      let HallticketNo="no";
      let RollNumber="no";
      let FullName="no";
    
   if(HallticketNo=="yes"||
    RollNumber=="yes"||
    FullName=="yes"){
      console.log("you can check  your results");
   }else{
    console.log("you can check your results");
   }   

}}>Result</button>
</div>
<p id="resultPara" ref={resultParaRef}></p>
</form>
</div>
  )
}

export default TenthForm;


