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

function listar(valor) {
    var db = firebase.firestore();

    db.collection("users").where("first", "==", valor)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());

                $('#resultado').append(doc.id + ' - ' + doc.data().first + '<br>');
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