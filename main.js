$(document).ready(function(){

    $('form').on('submit', function(e) {
    e.preventDefault();

    const tarefaNova = $('<li></li>');
    const nomeTarefa = $('#nome-tarefa').val();

    console.log(nomeTarefa)
    $("<li>").html(`${nomeTarefa}`).appendTo('ul');

    $('#nome-tarefa').val(" ")

    $('li').click(function(){
        $('li').css("text-decoration","line-through");
        })

    })









})