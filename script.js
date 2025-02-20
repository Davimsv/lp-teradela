lightbox.option({
    'resizeDuration': 50,
    'albumLabel': "Imagem %1 de %2"
})

const handleSubmit = () => {
    
    let nome = document.querySelector("#inputName").value;
    let email = document.querySelector("#inputEmail").value;
    let telefone = document.querySelector("#inputPhone").value;
    let termos = document.querySelector("#subscribeTerms").checked;
    let radios = document.getElementsByName("leadType");
    let tipoDeLead = '';
    
    for (const radio of radios) {        
        if (radio.checked) {
            tipoDeLead = radio.id;
            break;
        }
    }

    let payload = {
        nome: nome,
        email:email,
        telefone: telefone,
        Lead: tipoDeLead,
        termoMarcado: termos
    }

    console.log(payload);
    alert(JSON.stringify(payload, null, 4));
    
    return payload;
}
