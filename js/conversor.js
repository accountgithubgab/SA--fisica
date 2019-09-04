//Preloader
$(window).on('load', function () {
  $('#preloader .inner').fadeOut();
  $('#preloader').delay(400).fadeOut('slow');
  $('body').delay(400).css({ 'overflow': 'visible' });
})

// Desabilitar e Habilitar input
document.addEventListener('click', function (e) {

  var self = e.target;

  if (['cel', 'fah', 'kel'].indexOf(self.id) !== -1) {
    var celfah = document.getElementById(self.id === 'cel' ? 'fah' : 'cel');
    var celkel = document.getElementById(self.id === 'cel' ? 'kel' : 'cel');
    var fahkel = document.getElementById(self.id === 'fah' ? 'kel' : 'fah');

    self.removeAttribute('disabled');

    celfah.setAttribute('disabled', '');
    celfah.value = "";

    celkel.setAttribute('disabled', '');
    celkel.value = "";

    fahkel.setAttribute('disabled', '');
    fahkel.value = "";
    textPlaceholderNomal();
    limpar();
  }
})

$(document).keypress(function (e) {
  if (e.which == 13) {
    conversoes();
  }
});

// Restrição dos inputs Celsius e Fahrenheit
function SomenteNumero(e) {
  var tecla = (window.event) ? event.keyCode : e.which;
  if ((tecla == 46 || tecla == 45 || tecla > 47 && tecla < 58)) return true;
  else {
    if (tecla == 8 || tecla == 0) return true;
    else return false;
  }
}

// Restrição do input do Kelvin
function SomenteNumeroKel(e) {
  var tecla = (window.event) ? event.keyCode : e.which;
  if (tecla == 45) {
    $(function () {
      $("div.erro").slideDown(300).delay(1600).slideUp(400);
    });
    return false;
  } else {
    if ((tecla == 46 || tecla > 47 && tecla < 58)) return true;
    else {
      if (tecla == 8 || tecla == 0) return true;
      else return false;
    }
  }
}

// Função para limpar inputs
function limpar() {
  document.getElementById('cel').value = null;
  document.getElementById('fah').value = null;
  document.getElementById('kel').value = null;
  document.getElementById('rCel').value = null;
  document.getElementById('rFah').value = null;
  document.getElementById('rKel').value = null;
}

// Validação e calculos
function conversoes() {
  if (document.getElementById('cel').value == "" && document.getElementById('fah').value == "" && document.getElementById('kel').value == "") {
    document.getElementById("cel").style.borderColor = "red";
    document.getElementById("fah").style.borderColor = "red";
    document.getElementById("kel").style.borderColor = "red";
    document.getElementById("rCel").style.borderColor = "red";
    document.getElementById("rFah").style.borderColor = "red";
    document.getElementById("rKel").style.borderColor = "red";
    $(function () {
      $("div.validacao").slideDown(300).delay(1600).slideUp(400);
    });

  } else {

    if (document.getElementById('cel').value != "") {
      var C = parseFloat(document.getElementById('cel').value);
      var F;
      var K;

      F = ((C * 9) / 5 + 32).toFixed(2);
      K = ((C + 273.15)).toFixed(2);

      document.getElementById('rCel').value = C + " °C";
      document.getElementById('rFah').value = F + " °F";
      document.getElementById('rKel').value = K + " K";
    }

    if (document.getElementById('fah').value != "") {
      var F = parseFloat(document.getElementById('fah').value);
      var C;
      var K;

      K = ((F - 32) * 5 / 9 + 273.15).toFixed(2);
      C = ((F - 32) * 5 / 9).toFixed(2);

      document.getElementById('rCel').value = C + " °C";
      document.getElementById('rFah').value = F + " °F";
      document.getElementById('rKel').value = K + " K";
    }

    if (document.getElementById('kel').value != "") {
      var K = parseFloat(document.getElementById('kel').value);
      var C;
      var F;

      C = ((K - 273.15)).toFixed(2);
      F = ((K - 273.15) * 9 / 5 + 32).toFixed(2);

      document.getElementById('rCel').value = C + " °C";
      document.getElementById('rFah').value = F + " °F";
      document.getElementById('rKel').value = K + " K";
    }
  }
}


// Voltar input ao normal se o script de validação for ativado
function textPlaceholderNomal() {
  document.getElementById("cel").style.borderColor = 'darkslategrey';
  document.getElementById("fah").style.borderColor = 'darkslategrey';
  document.getElementById("kel").style.borderColor = 'darkslategrey';
  document.getElementById("rCel").style.borderColor = '#808080';
  document.getElementById("rFah").style.borderColor = '#808080';
  document.getElementById("rKel").style.borderColor = '#808080';
}