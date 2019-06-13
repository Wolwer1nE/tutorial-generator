$(document).ready(function() {
    var button = document.createElement("Button");
    button.className="btn btn-success tutorial";
    button.innerHTML = "?";
    button.id = "startTutorial";
    button.style = "top:0;right:0;height:50px;width:50px;position:absolute;z-index: 9999";
    document.body.appendChild(button);

    let el1 = $('label:contains("Select Model")');
el1.siblings("input, select, textarea ").attr("data-intro", " Сначала нужно выбрать модель с физикой.").attr("data-step", 1);
el1.after( '<span style="margin-left: 5px" title=" Сначала нужно выбрать модель с физикой."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el2 = $('label:contains("Select Solver")');
el2.siblings("input, select, textarea ").attr("data-intro", " Для задач с положительно-определенной матрицей подходят решатели из alglib, Paige-Saunders подходит для небольших СЛАУ с седловой матрицей, внешние решатели нужны для решения крупных седловых СЛАУ").attr("data-step", 2);
el2.after( '<span style="margin-left: 5px" title=" Для задач с положительно-определенной матрицей подходят решатели из alglib, Paige-Saunders подходит для небольших СЛАУ с седловой матрицей, внешние решатели нужны для решения крупных седловых СЛАУ"><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el3 = $('label:contains("Set Boundary Conditions")');
el3.siblings("input, select, textarea ").attr("data-intro", "Граничные условия описываются на наборах узлов, примеры граничных условий доступны справа от поля ввода").attr("data-step", 3);
el3.after( '<span style="margin-left: 5px" title="Граничные условия описываются на наборах узлов, примеры граничных условий доступны справа от поля ввода"><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el4 = $('button:contains("Identify Electric")');
el4.siblings("input, select, textarea ").attr("data-intro", "Для идентификации материальных свойств в задачах электростатики можно использовать готовые скрипты").attr("data-step", 4);
el4.after( '<span style="margin-left: 5px" title="Для идентификации материальных свойств в задачах электростатики можно использовать готовые скрипты"><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el5 = $('button:contains("Identify Elastic")');
el5.siblings("input, select, textarea ").attr("data-intro", "Аналогично, готовые скрипты есть и для задачи теории упругости").attr("data-step", 5);
el5.after( '<span style="margin-left: 5px" title="Аналогично, готовые скрипты есть и для задачи теории упругости"><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );

});

$(document).on("click", "button.tutorial" , function() {

    introJs().start();

});
