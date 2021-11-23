var btnInserir = document.getElementById("btnInserir");
var btnListar = document.getElementById("btnListar");
var btnEditar = document.getElementById("btnEditar");
var btnExcluir = document.getElementById("btnExcluir");

btnInserir.addEventListener('click', cadastrar)

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
    fields.data = document.getElementById("iCPF").value;

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