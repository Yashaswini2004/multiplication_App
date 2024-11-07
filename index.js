var s = 0;

function generateRandomNumbers() {
    document.getElementById("ip").textContent=" ";
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);
    
    document.getElementById("num1").textContent = x;
    document.getElementById("num2").textContent = y;

    return { x, y };
}

var numbers = generateRandomNumbers();

document.getElementById("btn").addEventListener("click", function() {
 
    var x = parseInt(document.getElementById("num1").textContent);
    var y = parseInt(document.getElementById("num2").textContent);
    
    var res = x * y;
    var z = parseInt(document.getElementById("ip").value); 

   
    if (res === z) {
        s++;
    } else {
        s--;
    }

   document.getElementById("score").textContent = s;

   
    numbers = generateRandomNumbers();
   
});
