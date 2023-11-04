# Desafio do Felipão da DIO

## Quem sou eu?
  Olá! Eu me chamo Sandro Moraes e sou acadêmico de Engenharia de Software. Estou participando do Bootcamp Ifood Programação do Zero,
 no qual estou aprendendo Lógica de Programação e realizando desafios de código para testar meus conhecimentos adquiridos até então.

## 🕹O Desafio 
  Este é o último desafio proposto pelo Felipão da DIO! Salve, meu chefe!
 O desafio consiste em criar uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}"
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 

## 🧩Como eu resolvi?
  Não havia a necessidade de utilizar laços de repetição. Então, utilizei a estrutura de decisão switch-case para resolver o problema.  

  Criei uma classe hero{}, contendo o método constructor(){} que vai armazenar os dados do novo herói que for criado.  

  Em seguida, criei a função toAttack(){} que exibe um texto de ataque toda vez que for chamada, contendo o tipo do herói, o nome e o tipo do ataque.  

  Para exibir o tipo do ataque, criei a função attack(type) dentro da função toAttack(). A função attack(type) verifica o tipo do herói por meio da estrutura switch-case e retorna o tipo do ataque para onde foi chamada.   

  Por fim, criei uma variável hero1 que instancia um novo objeto da classe hero{}, contendo dados do novo herói e, em seguida, chamei a função toAttack(), utilizando os dados de hero1, com o comando:  

  hero1.toAttack()