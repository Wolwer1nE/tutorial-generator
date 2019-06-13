$(document).ready(function() {
    var button = document.createElement("Button");
    button.className="btn btn-success tutorial";
    button.innerHTML = "?";
    button.id = "startTutorial";
    button.style = "top:0;right:0;height:50px;width:50px;position:absolute;z-index: 9999";
    document.body.appendChild(button);

    $('label:contains("Select Geometry")').siblings("input, select ").attr("data-intro", " Сначала нужно выбрать геометрию.").attr("data-step", 1);
    $('label:contains("SelectedMaterial1")').siblings("input, select ").attr("data-intro", " Укажите материал для первой компоненты").attr("data-step", 2);
    $('label:contains("Select Material For Component 2")').siblings("input, select ").attr("data-intro", " Укажите материал для второй компоненты. Если геометрия не имеет второго материала, то выбор ни на что не повлияет.").attr("data-step", 3);
    $('label:contains("ElementType")').siblings("input, select ").attr("data-intro", "Тип элемента для большинства задач будет Hex8").attr("data-step", 4);
    $('label:contains("Select Degrees of Freedom for Component 1")').siblings("input, select ").attr("data-intro", " Укажите степени свободы в первой компоненте.").attr("data-step", 5);
    $('label:contains("Select Degrees of Freedom for Component 2")').siblings("input, select ").attr("data-intro", " На данный момент необходимо указывать одинаковые степени свободы.").attr("data-step", 6);
    $('label:contains("Physics Model Name")').siblings("input, select ").attr("data-intro", " Имя модели с физикой не может совпадать с именем геометрии.").attr("data-step", 7);

});

$(document).on("click", "button.tutorial" , function() {

    introJs().start();

});
