
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
function encryptar() {
  var inputValue = document.getElementById("input-texto").value;
  const nuevaStr1 = inputValue.replace(/[e]/g, "enter");
  const nuevaStr2 = nuevaStr1.replace(/[i]/g, "imes");
  const nuevaStr3 = nuevaStr2.replace(/[a]/g, "ai");
  const nuevaStr4 = nuevaStr3.replace(/[o]/g, "ober");
  var Str2 = nuevaStr4.replace(/[u]/g, "ufat");
  document.getElementById("msg").value = Str2;
}



function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = "abcdefghyjklmnñopqrstuvwxyz";
  especiales=[32];
  tecla_especial = false;
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    let valor="ERROR: ha ingresado un caracter inválido.";
    document.getElementById("valueInput").innerHTML = valor;
    return false;
  }
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function desencryptar() {
  let inputValue = document.getElementById("msg").value;
  const nuevaStr1 = inputValue.replace(/enter/g, "e");
  const nuevaStr2 = nuevaStr1.replace(/imes/g, "i");
  const nuevaStr3 = nuevaStr2.replace(/ai/g, "a");
  const nuevaStr4 = nuevaStr3.replace(/ober/g, "o");
  const Str2 = nuevaStr4.replace(/ufat/g, "u");
  document.getElementById("msg").value = Str2;
}

function copiarTexto() {
  var content = document.getElementById("msg").value;
  navigator.clipboard
    .writeText(content)
    .then(() => {
      console.log("Texto copiado");
    })
    .catch((err) => {
      console.log("Algo salió mal", err);
    });
}
