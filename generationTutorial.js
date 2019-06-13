$(document).ready(function() {
    var button = document.createElement("Button");
    button.className="btn btn-success tutorial";
    button.innerHTML = "?";
    button.id = "startTutorial";
    button.style = "top:0;right:0;height:50px;width:50px;position:absolute;z-index: 9999";
    document.body.appendChild(button);

    let el1 = $('label:contains("Название")');
el1.siblings("input, select, textarea ").attr("data-intro", " Название модели должно быть корректным именем файла и быть уникальным.").attr("data-step", 1);
el1.after( '<span style="margin-left: 5px" title=" Название модели должно быть корректным именем файла и быть уникальным."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el2 = $('label:contains("Элементов на оси")');
el2.siblings("input, select, textarea ").attr("data-intro", " Представительные объёмы в ACELAN генерируются на основе octree.").attr("data-step", 2);
el2.after( '<span style="margin-left: 5px" title=" Представительные объёмы в ACELAN генерируются на основе octree."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el3 = $('label:contains("Тип связности")');
el3.siblings("input, select, textarea ").attr("data-intro", " Тип связности и алгоритм генерации определяют список входных параметров.").attr("data-step", 3);
el3.after( '<span style="margin-left: 5px" title=" Тип связности и алгоритм генерации определяют список входных параметров."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el4 = $('label:contains("% включений")');
el4.siblings("input, select, textarea ").attr("data-intro", " Для большинства генераторов % включений не может быть менее 5%.").attr("data-step", 4);
el4.after( '<span style="margin-left: 5px" title=" Для большинства генераторов % включений не может быть менее 5%."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );

});

$(document).on("click", "button.tutorial" , function() {

    introJs().start();

});
