function contar() {
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('ires')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivle contar!'
        //alert('[ERRO!] Faltam dados!')
       
    } else {
       res.innerHTML = 'Contando: <br> '
       let ninicio = Number(inicio.value)
       let nfim = Number(fim.value)
       let npasso = Number(passo.value)
       if (npasso <= 0) {
            alert('Passo invalido! Considerando PASSO: 1')
            npasso = 1
       }
       if (ninicio < nfim) {
            // Contagem crescente
            for(let contagem = ninicio; contagem <= nfim; contagem += npasso) {
                res.innerHTML += `${contagem} \u{1f449}` //formatação para emogi (troque u+ por \u{})
            }
            
        } else {
            // Contagem regressiva
            for(let contagem = ninicio; contagem >= nfim; contagem -= npasso) {
                res.innerHTML += `${contagem} \u{1f449}` 
            }
            
        }
        
        res.innerHTML += `\u{1f3c1}`
    }
    
    

}