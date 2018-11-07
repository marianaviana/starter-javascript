/******************************************************
Escreva uma função que dado um total de anos de
estudo retorna o quão experiente o usuário é:
-------------------------------------------------------
function experiencia(anos) {
  // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
------------------------------------------------------
De 0-1 ano: Iniciante
De 1-3 anos: Intermediário
De 3-6 anos: Avançado
De 7 acima: Jedi Master
******************************************************/

function experiencia(anos) {
  var nivelExperiencia = ['Iniciante', 'Intermediário', 'Avançado', 'Jedi Master'];
  if(anos >= 0 && anos <= 1) {
    return nivelExperiencia[0];
  } else if(anos > 1 && anos <= 3){
    return nivelExperiencia[1];
  } else if(anos > 3 && anos <= 6){
    return nivelExperiencia[2];
  } if(anos > 6){
    return nivelExperiencia[3];
  } else {
    return "Entrada inválida, entre com um número maior ou igual a zero.";
  }
}
var anosEstudo = 7;
console.log(experiencia(anosEstudo));