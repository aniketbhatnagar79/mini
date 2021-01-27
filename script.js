
function call(){
    fetch('http://115.99.169.87:5000/getalldata')
    .then(res=>res.json())
.then(data =>{
    console.log(data);
    document.getElementById("id1").innerText=data[0].id;
    document.getElementById("name1").innerText=data[0].name;
    document.getElementById("age1").innerText=data[0].age;
    document.getElementById("desc1").innerText=data[0].desc;

    document.getElementById("id2").innerText=data[1].id;
    document.getElementById("name2").innerText=data[1].name;
    document.getElementById("age2").innerText=data[1].age;
    document.getElementById("desc2").innerText=data[1].desc;

    document.getElementById("id3").innerText=data[2].id;
    document.getElementById("name3").innerText=data[2].name;
    document.getElementById("age3").innerText=data[2].age;
    document.getElementById("desc3").innerText=data[2].desc;

    
});

document.querySelectorAll(".table")[0].style.visibility="visible";
document.querySelectorAll(".table")[1].style.visibility="visible";
document.querySelectorAll(".table")[2].style.visibility="visible";
}
document.querySelector(".button").addEventListener("click",call);
