
function call(){
//     fetch('http://27.7.29.206:5000/getalldata')
//     .then(res=>res.json())
// .then(data =>{
//     console.log(data);
//     // document.getElementById("id1").innerText=data[0].id;

    
// });
document.getElementById("id1").innerHTML="wkdms";
document.querySelectorAll(".table")[0].style.visibility="visible";
document.querySelectorAll(".table")[1].style.visibility="visible";
document.querySelectorAll(".table")[2].style.visibility="visible";
}
document.querySelector(".button").addEventListener("click",call);