function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados!!!');
    }else{
        var fSex = document.getElementsByName('radsex');
        var idade = ano-Number(fAno.value);
        var gender = '';

        var img = document.createElement('img');

        img.setAttribute('id', 'foto');
        if(fSex[0].checked){
            gender = 'Homem';
            if(idade>=0 && idade <=18){
                img.setAttribute("src","./assets/boy.jpg");
            }else if(idade <=60){
                img.setAttribute("src","./assets/man.jpg");
            }else{
                img.setAttribute("src","./assets/old-man.jpg");
            }
        }else{
            gender = 'Mulher';
            if(idade>=0 && idade <=18){
                img.setAttribute("src","./assets/girl.jpg");
            }else if(idade <=60){
                img.setAttribute("src","./assets/woman.jpg");
            }else{
                img.setAttribute("src","./assets/old-woman.jpg");
            }
        }

        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${gender} com ${idade} anos<br>`;
        res.appendChild(img);
    }
}