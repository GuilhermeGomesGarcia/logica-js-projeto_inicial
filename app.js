alert ("Bem vindo ao jogo de adivinhação!");
let numeroSecreto = 42;
let numeroChute = prompt ("Escolha um número entre 0 e 100:");

if (numeroChute == numeroSecreto) 
    {
    console.log ("Parabéns, você acertou, o número secreto é 42!");
    }
    else if (numeroChute > numeroSecreto)
    {
    console.log ("O número secreto é menor que o chute!");
    }
    else if (numeroChute < numeroSecreto)
    {
    console.log ("O número secreto é maior que o chute!");
    }
    