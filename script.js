$(document).ready(function() {
    var button = document.createElement("Button");
    button.className="btn btn-success tutorial";
    button.innerHTML = "?";
    button.id = "startTutorial";
    button.style = "top:0;right:0;height:50px;width:50px;position:absolute;z-index: 9999";
    document.body.appendChild(button);

    $('label:contains("Название")').siblings("input, select ").attr("data-intro", " Название модели должно быть корректным именем файла и быть уникальным.").attr("data-step", 1);
    $('label:contains("Элементов на оси")').siblings("input, select ").attr("data-intro", " Представительные объёмы в ACELAN генерируются на основе octree.").attr("data-step", 2);
    $('label:contains("Тип связности")').siblings("input, select ").attr("data-intro", " Тип связности и алгоритм генерации определяют список входных параметров.").attr("data-step", 3);
    $('label:contains("% включений")').siblings("input, select ").attr("data-intro", " Для большинства генераторов % включений не может быть менее 5%.").attr("data-step", 4);

});

$(document).on("click", "button.tutorial" , function() {

    introJs().start();

});
