 var bottaoCalcular = document.querySelector("#butt");

 bottaoCalcular.addEventListener("click", function()
{
 let alunos = document.querySelectorAll(".aluno");

 //para cada linha de alunos que achar faça:
 alunos.forEach(function (aluno) {

    //pegando os dados inseridos pelo usuario
    let n1 = parseFloat(aluno.querySelector(".infon1").value);
    let n2 = parseFloat(aluno.querySelector(".infon2").value);
    let n3 = parseFloat(aluno.querySelector(".infon3").value);
    //parseFloat: converte o text (7, 6, etc) em numero decimal
    //.value: serve para pegar o valor digitado pelo usuario 
    let tmedia = (n1+n2+n3)/3;

    // Colocando valor da media nno campo de media
    let tbMedia = aluno.querySelector(".media");
    tbMedia.textContent = tmedia.toFixed(1); //toFixed serve para reduzir os numeros decimais (nesse caso para 1)

    let tbStatus = aluno.querySelector(".status");

    if (tmedia >= 7) {
        tbStatus.textContent = "Aprovado!!"
        tbStatus.style.color = "green"
    } else if(tmedia >=5) {
        tbStatus.textContent = "Recuperação"
        tbStatus.style.color = "yellow"
    } else {
        tbStatus.textContent = "Reprovado"
        tbStatus.style.color = "red"
    }
    //textContent é para ler ou escrever (nesse caso escrever) um texto (nesse caso no campo <td>) 


 })
    //Consegui fazer em 5 horas!!!! È TETRAAA!!!!
});