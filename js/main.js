const inputFile = document.querySelector('#arquivo');

inputFile.addEventListener('change',(event)=>{
    const tamanho = (inputFile.files[0].size) / (1024*1024)
    exibirValor(tamanho.toFixed(2));
});

function exibirValor(valor){
    const progress = document.querySelector('#progress');
    progress.value = valor 
    
}

