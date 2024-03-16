//Карта
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.77, 37.64],

    zoom: 17,
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}


//Поиск
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-header-form').addEventListener('click', (e) => {
    document.getElementById('header-form').classList.add('header-form_show')
  })

  document.getElementById('header-form-close').addEventListener('click', (e) => {
    document.getElementById('header-form').classList.remove('header-form_show')
  })

  document.getElementById('header-form-close').addEventListener('click', (e) => {
    e.preventDefault()
  })
})

//Меню
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('burger').addEventListener('click', (e) => {
    document.querySelector('header').classList.toggle('open')
  })

  document.getElementById('header-burger-close').addEventListener('click', (e) => {
    document.querySelector('header').classList.remove('open')
  })
})






