let index = 0
switchesImage(0)
function switchesImage(i) {
    index = i + index;
    let izobrazheniya = document.getElementsByClassName("images");
    let ovaly = document.getElementsByClassName("dot");

    // для того, чтобы занулить все картинки после каждого переключения и оставить только нужную одну через присвоение ей свойства ниже
    for (let i = 0; i < izobrazheniya.length; i++) {
        izobrazheniya[i].style.display = "none";
    }

    // для того, чтобы занулить все кржуки после каждого нажатия на кнопку и потом затемнить через свойство ниже
    for (let i = 0; i < ovaly.length; i++) {
        ovaly[i].className = ovaly[i].className.replace(" active", "");
    }

    //чтобы ограничить перелючение и вернуть карусель в начало
    //проверяет чтобы не переключили на 4 картинку, кот/ нет, их только 3
    //проверяет, если мы на первой картинке, то index=0, пропускаем условие
    //если мы на второй картинке, то index=1, пропускаем условие
    /*если мы на последней (третьей) картинке и дальше нельзя, index=2,
    то условие не выполняется и мы зануляем index и возвражаемся на первую картинку и index становится = 0, картинка первая*/
    if (index > izobrazheniya.length - 1) {
        index = 0;
    }

    //а тут, если мы нажали назад с первой картинки, и хотим вернуть последнюю (третюю) картинку коллекции с картинками с index=2
    // то выполняем условие и приравниваем к предпоследней картинке
    if (index < 0) {
        index = izobrazheniya.length - 1;
    }

    // показываем нужную нам картинку по нашему идексу
    izobrazheniya[index].style.display = "block";

    // включаем заранее написанный класс active с затемненным кружком
    // (пробел после кавычки нужен, чтобы потом между знаком равно и свойством active был пробел и код работал
    ovaly[index].className += " active";
}