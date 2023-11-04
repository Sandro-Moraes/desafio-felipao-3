// Construindo a classe, contendo o nome do herói, a idade e o tipo.
class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    toAttack(){ // Função toAttack(), que exibe um texto de ataque contendo o tipo do herói, o nome do herói e o tipo do ataque
        console.log(`O ${this.type} ${this.name} atacou usando ${attack(this.type)} `)
        
        function attack(type){ // Função attack(type), que verifica o tipo do herói e retorna o tipo do ataque 
        	switch(true){
            	case type==="mago":
				return "magia"
                break
                
                case type==="guerreiro":
				return "espada"
                break
                
                case type==="monge":
				return "artes marciais"
                break
                
                case type==="ninja":
				return "shurikens"
                break
            }
        }
    }   
}

let hero1 = new hero("João","23","ninja") // Criação da variável hero1, que instancia um novo objeto da classe hero{}

hero1.toAttack() // Chama a função toAttack() da classe hero{} com base nos dados da variável hero1