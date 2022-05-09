const lista = document.querySelector("ol");

const itensLista1 = lista.querySelectorAll("li");

for(let i = 0; i< itensLista1.length; i++){
    if((i+1) % 2 === 0){
        itensLista1[i].style.fontWeight = 900;
    }else{
        itensLista1[i].style.color = "red";
    }
}

// V2
// const itensLista2 = document.querySelectorAll("ol li");
// V3
// const itensLista2 = document.getElementsByTagName("li");
// V4
// itensLista1.forEach((el, idx) =>{
//     if((idx+1) % 2 === 0){
//         el.style.fontWeight = 900;
//     }
// })

