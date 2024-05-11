
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.720624, 37.636927], // Координаты центра карты
        zoom: 10 // Масштаб карты
    });

    var myPlacemark = new ymaps.Placemark([55.720624, 37.636927], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'https://site.ru/images/myIcon.png', // Путь к своему изображению иконки
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
}