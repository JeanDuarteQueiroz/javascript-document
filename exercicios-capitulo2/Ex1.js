const frm = document.querySelector('form');
const descMed = document.querySelector('#outDescMed');
const precoMed = document.querySelector('#outPrecoMed');

frm.addEventListener("submit", (e) => {

    const promoMed = Math.floor(Number(frm.inPrecoMed.value)*2)
    const descMedicamento = frm.inDescMed.value
    
    descMed.innerText = `Promoção de ${descMedicamento}`
    precoMed.innerText = `Leve dois por apenas: ${promoMed.toFixed(2)}`

    e.preventDefault();
})

