async function apicall(){
    let response=await fetch("https://meowfacts.herokuapp.com/")
    let final response=response.json()
    document.getElementById("box").innerHTML=final response.data[0]
    speechSynthesis.speak(new SpeechSynthesisUtterance(final response.data[0]))
}   