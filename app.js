alert ("Bem vindo ao jogo de adivinhação!");
let numeroSecreto = 32;
console.log (numeroSecreto);
let numeroChute = prompt ("Escolha um número entre 0 e 100:");

if (numeroChute == numeroSecreto) 
    {
    alert (`Parabéns, você acertou, o número secreto é ${numeroSecreto} !`);
    }
    else if (numeroChute > numeroSecreto)
    {
    alert (`O número secreto é menor que o chute!`);
    }
    else if (numeroChute < numeroSecreto)
    {
    alert (`O número secreto é maior que o chute!`);	
    }
    