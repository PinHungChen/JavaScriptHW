
function calnum(){
let calresult = "<table><tr>";                
for (var i = 2; i < 10; i++) { 
    calresult += "<td>";
    for (var j = 2; j < 10; j++) {
    calresult+=`${i} X ${j} = ${i * j}<br>`;
    }            
calresult+="</td>";
}          
return calresult;       
}

document.querySelector(".HW1body").innerHTML = calnum();
                    
                    