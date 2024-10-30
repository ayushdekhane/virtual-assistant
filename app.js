let btn=document.querySelector("#btn");
let talk=document.querySelector("#talk");
let voice=document.querySelector("#voice")
let berlin=document.querySelector("#berlin")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=0.8;
    text_speak.pitch=1;
    text_speak.volume=1;
    window.speechSynthesis.speak(text_speak);
}
function wishme(){
    let day=new Date();
  
    let hours=day.getHours();
    if(hours>=0 && hours<12){
        speak("good morning sir how can i help you");
    }else if(hours>=12 && hours <16){
        speak("good afternoon sir how can i help you");
    }else{
        speak("good evening sir how can i help you");
    }
        
    
};

berlin.addEventListener("click",()=>{
    wishme();
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition ;
let recognition = new  speechRecognition()


recognition.onresult=(event)=>{
    let currentidx=event.resultIndex;
    let transcript=event.results[currentidx][0].transcript
    talk.innerText=transcript
    takecommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"

})
function takecommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")){
        speak("hello sir how can i help you");
    }else if(message.includes("how are you")){
        speak("I m fine what about you");
    }else if(message.includes("who are you")){
        speak("I am your assistant created for answering your questions how can i help you");
    }else if(message.includes("open youtube")){
        speak("opening youtube");
        window.open("https://www.youtube.com");
    }
    else if(message.includes("open facebook")){
        speak("opening facebook");
        window.open("https://www.facebook.com");
    }
    else if(message.includes("open instagram")){
        speak("opening instagram");
        window.open("https://www.instagram.com");
    }
    else if(message.includes("open google")){
        speak("opening google");
        window.open("https://www.google.com");
    }else if(message.includes("play" && "song" && "on" && "spotify")){
         let song=message.replace("play","").replace("song","").replace("spotify","").replace("on","").replace("berlin","");
         speak(`playing ${song} on spotify`);
         window.open(`https://open.spotify.com/search/${song}`);
        }
        else if(message.includes("time")){
            let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
            speak(time);
        }else if(message.includes("date")){
            let Day=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"});
            speak(Day);

        }
    else{
        let finaltext="this is what i found on internet regarding"+ message.replace("berlin","")
        speak(finaltext);
        window.open(`https://www.google.com/search?q=${message.replace("berlin","")}`);
    }

    
}
recognition.stop();