let index = 0;
let totalBit = 0;
let colors = ["red","green","blue","pink","grey"];
let command = ["start","stop"];
document.addEventListener("DOMContentLoaded",()=> {
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="green";
    },1000);
    setInterval(()=>{
        document.querySelector("body").style.backgroundColor=colors[index];
        if (index<colors.length)
            index++;
        else
            index = 0;
        totalBit++;
        if (index % 3 == 0)
            document.getElementById("display").innerHTML += "1";
        else
            document.getElementById("display").innerHTML += "0";
        if (totalBit % 50 === 0)
            document.getElementById("display").innerHTML +="<br>";
        if (totalBit > 50 * 6){
            totalBit = 0;
            document.getElementById("display").innerHTML += command[0];
            document.getElementById("display").innerHTML +="<br>";            
        }
       // document.getElementById("display").innerHTML = command[1];
    },150);
});
