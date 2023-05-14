let voicesList = []
let volume = 5;

if ('speechSynthesis' in window) {
    voicesList = getVoices();

    let rate = 1, pitch = 2, volume = 1;
    let text = "Speaking with volume = 1 rate =1 pitch =2 ";
  
    speak(text, voicesList[5], rate, pitch, volume);
  
    setTimeout(()=>{ // speak after 2 seconds 
      rate = 0.5; pitch = 1.5, volume = 0.5;
      text = "Speaking with volume = 0.5 rate = 0.5 pitch = 1.5 ";
      speak(text, voicesList[10], rate, pitch, volume );
    }, 2000);

    voicesList = getVoices();

    if(voicesList.length == 0){
        console.log(' No Voices Found 😞');
    
        //Adding voices:
        voicesList.push("Rishi (en-IN)");
        voicesList.push("Google US English");    
    }
}else{
  console.log(' Speech Synthesis Not Supported 😞'); 
}



//1. get document elements for rate and pitch
rateRange  =  document.getElementById("rateRange");
pitchRange =  document.getElementById("pitchRange");

//2. Get Voice from the Select Element and store it in a variable
voicesSelect =   document.getElementById("voicesSelect");

function PopulateVoices()
{
    // Loop through the array
    for (var i = 0; i < voicesList.length; ++i) {
        // Append the element to the end of Array list
        voicesSelect[voicesSelect.length] = new Option(voicesList[i], voicesList[i]);
    }
}

//3. Get the text from the text area and store it in a variable named te

function PlayOrStop(event)
{
    if(event.target.value == "Play")
    {
        //Speak logic:
        //4. Call speak with the text, voice, rate and pitch
        speak(text, voicesSelect.value, rateRange.value, pitchRange.value, volume);
    }
    else{
        //Stop logic:
    }
}

PopulateVoices();