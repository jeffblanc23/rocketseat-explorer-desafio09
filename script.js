/*
    Jeffrey Carlos Mourão Blanc

    Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

        - nome;
        - nota da primeira prova;
        - nota da segunda prova.

        Depois de criada a lista:

        - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
        - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

let calculateAVG = function (av01, av02) {
    let avg = ((av01 + av02) / 2).toFixed(2)
    return avg
}

students = [
    {
        name: 'João',
        av01: 10,
        av02: 8.5
    },
    {
        name: 'Letícia',
        av01: 4,
        av02: 7
    },
    {
        name: 'Diego',
        av01: 7,
        av02: 6.5,
    },
    {
        name: 'Júlia',
        av01: 7.5,
        av02: 6.5
    }
]

for(student of students) {
    if(calculateAVG(student.av01, student.av02) >= 7) {
        alert(`
        A média do(a) Aluno(a) ${student.name} é: ${calculateAVG(student.av01, student.av02)}
        Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
        `)
    } else {
        alert(`
        A média do(a) Aluno(a) ${student.name} é: ${calculateAVG(student.av01, student.av02)}
        Não foi dessa vez, ${student.name}! Tente novamente!
        `)
    }

}

