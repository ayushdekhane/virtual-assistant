let btn=document.querySelector("#btn");
let talk=document.querySelector("talk");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    window.speechSynthesis.speak(text_speak);
}
function wishme(){
    let day=new Date();
    console.log(day)
    let hours=day.getHours();
    if(hours>=0 && hours<12){
        speak("good morning sir");
    }else if(hours>=12 && hours <16){
        speak("good afternoon sir");
    }else{
        speak("good evening sir");
    }
        
    
};

btn.addEventListener("click",()=>{
    wishme();
})