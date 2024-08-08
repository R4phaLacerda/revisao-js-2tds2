//Preciso verificar se a idade do aluno é maior que 7 anos

//Para alunos entre 8 e 12 ano: infantil
//Para alunos entre 13 e 17 ano: adolescentes
//Para alunos maiores de 18 anos adulto

let idadeAluno = 23;

if(idadeAluno > 7 && idadeAluno < 13) {
    console.log("Aluno está na categoria INFANTIL!");
} else if (idadeAluno > 12 && idadeAluno < 18) {
    console.log("Aluno está na categoria ADOLESCENTE!");
} else if (idadeAluno > 17) {
    console.log("Aluno está na categoria ADULTO!")
} else {
    console.log("Aluno não pode se matricular");
}