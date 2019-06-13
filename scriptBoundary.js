$(document).ready(function() {
    var button = document.createElement("Button");
    button.className="btn btn-success tutorial";
    button.innerHTML = "?";
    button.id = "startTutorial";
    button.style = "top:0;right:0;height:50px;width:50px;position:absolute;z-index: 9999";
    document.body.appendChild(button);

    $('label:contains("Select Model")').siblings("input, select, textarea ").attr("data-intro", " Сначала нужно выбрать модель с физикой.").attr("data-step", 1);
$('label:contains("Select Solver")').siblings("input, select, textarea ").attr("data-intro", " Для задач с положительно-определенной матрицей подходят решатели из alglib, Paige-Saunders подходит для небольших СЛАУ с седловой матрицей, внешние решатели нужны для решения крупных седловых СЛАУ").attr("data-step", 2);
$('label:contains("Set Boundary Conditions")').siblings("input, select, textarea ").attr("data-intro", "Граничные условия описываются на наборах узлов, примеры граничных условий доступны справа от поля ввода").attr("data-step", 3);
$('button:contains("Identify Electric")').siblings("input, select, textarea ").attr("data-intro", "Для идентификации материальных свойств в задачах электростатики можно использовать готовые скрипты").attr("data-step", 4);
$('button:contains("Identify Elastic")').siblings("input, select, textarea ").attr("data-intro", "Аналогично, готовые скрипты есть и для задачи теории упругости").attr("data-step", 5);

});

$(document).on("click", "button.tutorial" , function() {

    introJs().start();

});
