const lista = document.querySelector("ol");

const itensLista1 = lista.querySelectorAll("li");

for(let i = 0; i< itensLista1.length; i++){
    if((i+1) % 2 == 0){
        itensLista1[i].style.fontWeight = 900;
    }else{
        itensLista1[i].style.color = "red";
    }
}
