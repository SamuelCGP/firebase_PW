function cadastrar(dados) {
    var db = firebase.firestore();
    var dados = getFields();
    db.collection("users").add(dados)
        .then((docRef) => {
            alert("Document written");
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            alert("Error adding document: ", error);
            console.error("Error adding document: ", error);
        });
}

function editar(valor, valorAtual) {
    var db = firebase.firestore();
    var ag = db.collection("users").where("first", "==", valor);

    ag.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var dados = db.collection("users").doc(doc.id);

                dados.update({
                    first: valorAtual
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

function listar(){
    var db = firebase.firestore();
    var ag = db.collection("users");

    ag.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            $("#tableData").append("<tr>");
            $("#tableData").append("<td class='table-active' scope='row'>" + doc.id + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().nome + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().cpf + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().data + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().sexo + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().estadoCivil + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().renda + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().logradouro + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().numero + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().complemento + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().estado + "</td>");
            $("#tableData").append("<td class='table-active'>" + doc.data().cidade + "</td>");
            $("#tableData").append("<td class='table-active'><button type='button' class='btn btn-outline-secondary'>Editar</button> | <button type='button' class=\"btn shadow-none btn-danger\" style='background-color: #dc3545 !important'>Excluir</button></td>");
            $("#tableData").append("</tr>");
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

function excluir(valor) {
    var db = firebase.firestore();

    db.collection("users").where("first", "==", valor)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                db.collection("users").doc(doc.id).delete().then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}