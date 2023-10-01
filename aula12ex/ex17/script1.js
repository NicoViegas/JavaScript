function contar() {
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementById("resultados");
    let gambiarra = "<p>Preparando contagem...<p>"
    res.innerHTML = gambiarra;

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Não pode ter campos nulos")
    }else{
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p<=0){
            window.alert("Passo não pode ser negativos ou nulo !!!")
        }else{

            if(i<f){
                for(let c = i; c <= f; c+=p){
                    res.innerHTML += `${c}👉`;

                }
            }else{
                for(let c = i; c >= f; c-=p){
                    res.innerHTML += `${c}👉`;
                }
            }
            res.innerHTML += `\u{1F3C1}`;
        }
        
    }

    

}