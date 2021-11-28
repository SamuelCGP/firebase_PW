function getFields(){
    // FIELDS
    var fields = {
        nome: null,
        cpf: null,
        data: null,
        sexo: null,
        estadoCivil: null,
        renda: null,
        logradouro: null,
        numero: null,
        complemento: null,
        estado: null,
        cidade: null
    }

    fields.nome = document.getElementById("iNome").value;
    fields.cpf = document.getElementById("iCPF").value;
    fields.data = document.getElementById("iData").value;

    if(document.getElementById("iMasculino").checked == true){
        fields.sexo = "masculino"
    }else{
        fields.sexo = "feminino"
    }

    fields.estadoCivil = document.getElementById("iEstadoCivil").value;
    fields.renda = document.getElementById("iRenda").value;
    fields.logradouro = document.getElementById("iLogradouro").value;
    fields.numero = document.getElementById("iNumero").value;
    fields.complemento = document.getElementById("iComplemento").value;
    fields.estado = document.getElementById("iEstado").value;
    fields.cidade = document.getElementById("iCidade").value;

    return fields;
}

function changePage(){
    switch(currentPage){
        case "index":
            window.location.href = getBaseUrl() + "listar.html"
            break;
        case "listar":
            window.location.href = getBaseUrl() + "index.html"
            break;
        default:
            break;
    }
}

function getBaseUrl() {
    return window.location.href.match(/^.*\//);
}