let nomeUsuario = prompt (`Bem vindo ao jogo de adivinhação! Qual o seu nome?`);
alert (`Olá ${nomeUsuario}! Vamos começar!`);

let numeroSecreto = 32;
console.log (numeroSecreto);
let numeroChute;
let tentativas = 1;

while(numeroChute != numeroSecreto)
{
    

    numeroChute = prompt (`${nomeUsuario} escolha um número entre 0 e 100:`);

    
    if (numeroChute == null) 
    {
        alert (`${nomeUsuario}, você desistiu do jogo!`);
        break;
    }
        
    
    while (numeroChute < 0 || numeroChute > 100) 
    {
        alert (`${nomeUsuario}, o número deve ser entre 0 e 100!`);

        numeroChute = prompt (`${nomeUsuario} escolha um número entre 0 e 100:`);
    }

    if (numeroChute == numeroSecreto) 
        {

            break;
        }
                
        else 
        {
            if(numeroChute > numeroSecreto)
            {
                alert (`O número secreto é menor que ${numeroChute}!`);
            }
            else 
            {
                alert (`O número secreto é maior que ${numeroChute}!`);
            }
            
            tentativas++;
        }


}

if (tentativas == 1)
{
    alert (`Parabéns, você acertou, o número secreto é ${numeroSecreto}, com ${tentativas} tentaviva !`);
}
else
{
    alert (`Parabéns, você acertou, o número secreto é ${numeroSecreto}, com ${tentativas} tentavivas !`);
}


// Fim do código