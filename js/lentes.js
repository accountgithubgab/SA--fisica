





function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla == 46 || tecla > 47 && tecla < 58)) return true;
    else {
        if (tecla == 8 || tecla == 0) return true;
        else return false;
    }
}


function calcularLente() {
    if (document.getElementById('direito').value == "" && document.getElementById('esquerdo').value == "") {
        document.getElementsByName('direito')[0].placeholder = 'Inserir valor';
        document.getElementsByName('esquerdo')[0].placeholder = 'Inserir valor';
        document.getElementById("direito").style.borderColor = "red";
        document.getElementById("esquerdo").style.borderColor = "red";
    }
}


function limpar() {
    document.getElementById('direito').value = null;
    document.getElementById('esquerdo').value = null;
    document.getElementById('angulo').value = null;
    document.getElementById('tipoLente').value = null;
    document.getElementById('diametro').value = null;
}