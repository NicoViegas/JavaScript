function magia(){
    let num = document.getElementById('txtnum');
    let tab = document.getElementById("seltab");
    let res = document.getElementById("resultados");


    let n = Number(num.value);
    tab.innerHTML='';
    for(let i = 1; i<=10; i++){
        let item = document.createElement('option');
        item.value = `tab${i}`;
        item.text=`${n} X ${i} = ${n*i}`;
        tab.appendChild(item);
    }
}