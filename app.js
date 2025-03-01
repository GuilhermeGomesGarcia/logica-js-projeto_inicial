let num = 100;

let nomeUsuario = prompt (`Bem vindo ao jogo de adivinhação! Qual o seu nome?`);
alert (`Olá ${nomeUsuario}! Vamos começar!`);



let numeroSecreto = parseInt ( Math.random() * num + 1 );

console.log (numeroSecreto);
let numeroChute;
let tentativas = 1;

while(numeroChute != numeroSecreto)
{
    

    numeroChute = prompt (`${nomeUsuario} escolha um número entre 0 e ${num}:`);

    
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

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert (`Parabéns ${nomeUsuario}, você acertou, o número secreto é ${numeroSecreto}, com ${tentativas} ${palavraTentativa} !`);



// Fim do código