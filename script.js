/* 
Control Flow
formato do if e else
ex:
if (condicional){
  codigo executado caso a condição seja satisfeita
}else if {
  para uma necessidade de mais de uma condição
}else{
  caso a condição do if não seja satisfeita
}


let temperature = 37.4

if(temperature >= 37.5){
  console.log('febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
  console.log('febre moderada')
} else{
  console.log('saudável')
}


Switch 

let expression = 'a'

switch(expression) {
  case 'a':
    //código 
    console.log('primeira expressão')
    break
    case 'b':
      console.log('segunda expressão')
      break
      default:
        console.log('sem expressões detectadas')  
      }
      
      
Exercício calculadora      

function calculate(number1 , operator , number2) {
  let result  
  
  switch (operator) {
    case '+':
      result = number1 + number2
      break
      case '-':
        result =  number1 - number2
        break
        case'*': 
        result = number1 * number2
        break
        case '/':
          result = number1 / number2
          break
          default:
            console.log('método não implementado')
            break;
          }
          
          return result
          
}

console.log(calculate(2  , '*' , 3))



Exercicio sayMyName
o try/throw/catch é uma forma de achar erros numa
aplicação , como no exemplo abaixo , não permitindo que
um campo fique sem a string
o throw joga uma mensagem após o try/catch ser executado
o comando try executa a função com a intenção de capturar uma condicional
se a condicional for satisfeita o catch ativa o comando de capturar o erro
e assim, a string é lançada pelo throw

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }
  
  console.log(name)
}


try {
  sayMyName('julia')
} catch(e) {
  console.log(e)
}

//console.log('depois do try')

For 


break - para a execução do loop
continue - pula a execução do momento


for(let i = 10 ; i > 0 ; i--){
  if(i === 5){
    continue;
  }
  console.log(i)
  
}

Whhile
Usamos o while quando não sabemeos o momento da parada
let i = 0
while(i < 10){
  console.log(i)
  i++
}


For of


let name = 'alex'
let names = ['julia' , 'mariana' , 'joão']



for(let name of names){
  console.log(name)
}


For in
*/
let person = {
name: 'john',
age: 30 ,
weigth:88.6

}


for(let property in person ){
  console.log(property)
  console.log(person[property])
}


