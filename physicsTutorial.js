$(document).ready(function() {
    var button = document.createElement("Button");
    button.className="btn btn-success tutorial";
    button.innerHTML = "?";
    button.id = "startTutorial";
    button.style = "top:0;right:0;height:50px;width:50px;position:absolute;z-index: 9999";
    document.body.appendChild(button);

    let el1 = $('label:contains("Select Geometry")');
el1.siblings("input, select, textarea ").attr("data-intro", " Сначала нужно выбрать геометрию.").attr("data-step", 1);
el1.after( '<span style="margin-left: 5px" title=" Сначала нужно выбрать геометрию."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el2 = $('label:contains("SelectedMaterial1")');
el2.siblings("input, select, textarea ").attr("data-intro", " Укажите материал для первой компоненты").attr("data-step", 2);
el2.after( '<span style="margin-left: 5px" title=" Укажите материал для первой компоненты"><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el3 = $('label:contains("Select Material For Component 2")');
el3.siblings("input, select, textarea ").attr("data-intro", " Укажите материал для второй компоненты. Если геометрия не имеет второго материала, то выбор ни на что не повлияет.").attr("data-step", 3);
el3.after( '<span style="margin-left: 5px" title=" Укажите материал для второй компоненты. Если геометрия не имеет второго материала, то выбор ни на что не повлияет."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el4 = $('label:contains("ElementType")');
el4.siblings("input, select, textarea ").attr("data-intro", "Тип элемента для большинства задач будет Hex8").attr("data-step", 4);
el4.after( '<span style="margin-left: 5px" title="Тип элемента для большинства задач будет Hex8"><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el5 = $('label:contains("Select Degrees of Freedom for Component 1")');
el5.siblings("input, select, textarea ").attr("data-intro", " Укажите степени свободы в первой компоненте.").attr("data-step", 5);
el5.after( '<span style="margin-left: 5px" title=" Укажите степени свободы в первой компоненте."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el6 = $('label:contains("Select Degrees of Freedom for Component 2")');
el6.siblings("input, select, textarea ").attr("data-intro", " На данный момент необходимо указывать одинаковые степени свободы.").attr("data-step", 6);
el6.after( '<span style="margin-left: 5px" title=" На данный момент необходимо указывать одинаковые степени свободы."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );
let el7 = $('label:contains("Physics Model Name")');
el7.siblings("input, select, textarea ").attr("data-intro", " Имя модели с физикой не может совпадать с именем геометрии.").attr("data-step", 7);
el7.after( '<span style="margin-left: 5px" title=" Имя модели с физикой не может совпадать с именем геометрии."><i class="glyphicon glyphicon-question-sign alert-info"></i></span>' );

});

$(document).on("click", "button.tutorial" , function() {

    introJs().start();

});
