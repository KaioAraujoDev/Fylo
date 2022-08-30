const inputFile = document.querySelector('#arquivo');

inputFile.addEventListener('change',(event)=>{
    const tamanho = (inputFile.files[0].size) / (1024*1024)
    exibirValor(tamanho.toFixed(2));
    exibirRestante(tamanho.toFixed(2));
});

function exibirValor(valor){
    const progress = document.querySelector('#progress');
    const output = document.querySelector('#output');
    const labelValue = document.querySelector('#labelValue');

    progress.value = valor 
    output.innerText = valor;
    labelValue.innerText = valor + "MB";
    
}


function exibirRestante(size){
    const divRestante = document.querySelector('#divRestante');
    const outputRestante = divRestante.querySelector('#outputRestante');
    outputRestante.innerText = (100 - size).toFixed(2);

    setTimeout(()=>{
        divRestante.classList.add('visible');
    },1500);
    
    setTimeout(()=>{
        divRestante.classList.remove('visible');
    },4500);

}