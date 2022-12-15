function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value,
        telefone: document.getElementById("telefone").value,
    }


    const serviceID = "service_2dp6nfb";
    const templateID = "template_co56nal";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mensagem").value = "";
                document.getElementById("telefone").value = "";
                console.log(res);
                alert("Mensagem enviada com sucesso!");
            })
        .catch((err) => console.log(err));
}