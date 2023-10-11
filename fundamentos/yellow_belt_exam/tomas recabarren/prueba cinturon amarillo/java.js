document.getElementById("carro").addEventListener("click",function(){
    if(confirm("Your cart is empy!")){
    }else{
     }
});

function aceptarCookies(){
        localStorage.setItem('cookiesAceptadas','true');
        document.getElementById('cookie-warning').style.display='none';
    }
    window.onload=function(){
        if(!localStorage.getItem('cookiesAceptadas')){
            document.getElementById('cookie-warning').style.display='block';
        }
    };