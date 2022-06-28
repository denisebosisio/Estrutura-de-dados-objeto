console.log("Criando um objeto:");
let pessoa = {
    nome: "Denise",
    idade: 22,
    altura: 1.63,
};
console.log(pessoa);

console.log("Adicionando uma propriedade");
pessoa.idioma = "português";
console.log(pessoa);

console.log("Removendo uma propriedade:");
delete pessoa.altura;
console.log(pessoa);

console.log("Criando um array com objetos como elementos");
let cadastro = [
    {
        nome: "Bruno",
        idade: 25,
        telefone: 555555559,
        amigos: ["Carlos", "Miguel"],
    },
    {
        nome: "Ana",
        idade: 22,
        telefone: 945694565,
        amigos: ["Joana", "Carla"],
    },
    {
        nome: "João",
        idade: 19,
        telefone: 964948645,
        amigos: ["Gabriel", "Miguel"],
    },
    {
        nome: "Carla",
        idade: 21,
        telefone: 165961489,
        amigos: ["Lara", "Luan"],
    },
    {
        nome: "Daniele",
        idade: 27,
        telefone: 941984469,
        amigos: ["Thaína", "Murilo"],
    },
]
console.log(cadastro);

console.log("Mostrar o nome de um amigo de cada lista");
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[0]);
console.log(cadastro[3].amigos[1]);
console.log(cadastro[4].amigos[0]);