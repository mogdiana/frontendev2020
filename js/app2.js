document.addEventListener("DOMContentLoaded",()=> {
    alert("Hello");
});
document.getElementById("superButton").addEventListener("click",()=>{
    alert("Event listener works");
});
setTimeout(()=>{
    alert("2 seconds");
});
setInterval(()=>{
    alert("One more second");
});