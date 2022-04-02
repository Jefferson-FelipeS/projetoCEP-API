'use strict';

//Declaracão de variaveis, de acordo com os campos;
const container = document.querySelector('.container');
const containerTwo = document.querySelector('.containerTwo');
const btn = document.querySelectorAll('#btn');//buttom;
let inputCEP = document.querySelector('#inputCEP');//input para preenchimento do cep;
let msgERROR = document.querySelector('#msgERROR');
const Span = document.querySelectorAll('#Span');//Variável responsavel pelos campos das informacões;

//funções responsaveis pela tela aparente;
btn[0].addEventListener('click',() =>{ 
    if((inputCEP.value === '')) alert('É necessário digitar o CEP desejavel!');
    else
    {
        container.style.display = 'none';
        containerTwo.style.display = 'flex'; }
});
btn[1].addEventListener('click',() =>{
    container.style.display = 'flex';
    containerTwo.style.display = 'none';
});

//Funcão responsavel por retornar os dados da API CEP para dentro da aplicação;
btn[0].addEventListener('click',() =>{
    let CEP = inputCEP.value;
    const url = 'http://viacep.com.br/ws/'+CEP+'/json/';
    
/*If ternário que vai verificar se o CEP foi digitado,lembrando que nao vai verificar 
se ele foi digitado corretamente, e sim apenas vai verificar se o seu tamanho é valido;*/
    if((CEP.length < 7 || CEP.length > 9) ? msgERROR.textContent = 'Voce digitou o cep errado!' : msgERROR.textContent = '');

/*Função fetch,responsavel por nos fornecer informações assíncronas, onde nos 
retornará o response do json com todos os dados necessarios para a aplicação;*/
 fetch(url)
    .then(r => r.json())
    .then(a => {
       if(CEP === '55805000')
       {
            a.logradouro = 'Rua do rosário';
            a.bairro = 'Centro';
       }
//Inserindo as informações da API em cada campo HTML correspondente;
         Span[0].textContent = a.logradouro;
         Span[1].textContent = a.bairro;
         Span[2].textContent = a.localidade;
         Span[3].textContent = a.uf;
         Span[4].textContent = a.cep;
    });
});