const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")
btn.forEach(function(button){
    console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==="Green_Teal"){
            body.style.backgroundColor="#08784F";
            body.style.color="#ffff";
        }
        if(e.target.id==="Night"){
            body.style.backgroundColor="#070505"
            body.style.color="#ffff";
        }
        if(e.target.id==="Dark_Maroon"){
            body.style.backgroundColor="#360007"
            body.style.color="#ffff";
        }
        if(e.target.id==="Surfie_Green"){
            body.style.backgroundColor="#095F5D"
            body.style.color="#ffff";
        }
        if(e.target.id==="Mulberry"){
            body.style.backgroundColor="#71073C"
            body.style.color="#ffff";
        }
        if(e.target.id==="Medium_Brown"){
            body.style.backgroundColor="#633F0D"
            body.style.color="#ffff";
        }
    })
})





