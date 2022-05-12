//Создание одной простейшей заметки .
var note = {
	addNewNote:function() {
		notes.innerHTML += '<div id="form"><textarea id="textwindow1" cols="30" rows="10"></textarea>' 
		+'<button >добавить</button></div>';		
	},
    saveNoteText:function() {
          document.querySelectorAll('textarea').forEach(function(e) {
            //получаем значение из LocalStorage по ключу и присваиваем текстовому полю 
            if (e.value === '') e.value = window.localStorage.getItem('key', e.value);
            e.addEventListener('input', function() {
                // проверяем текстовое поле на входные данные и устанавливаем в LocalSTorage новое значение
                window.localStorage.setItem('key', e.value);
            })
        })
    }
}
note.addNewNote();



//Сохранение заметки между сеансами приложения, в любом формате.
document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы
    //текст приложения при первом запуске
    var text = document.getElementById('textwindow1');
    if (localStorage.getItem('name') === null) {
        text.value = 'Правда жизни в том, что чужие книги это классно. Всякие странности, шутейности, грустности, да хоть обычности, которые оставили читатели до тебя, – это все интересно изучать. На днях мы попросили наших читателей поделиться самыми необычными заметками, которые они находили,надо сказать, ребята, вы нас не подвели. Представляем вашему вниманию: разгромная диванная критика, свидетельства смерти членов семьи на полях, ну и, конечно, особенно пугающий секретный кодекс самоуправления США. Это ли не прекрасно.'
        window.localStorage.setItem('key', text.value);
        localStorage.setItem('name', '1');
        document.querySelectorAll('textarea').forEach(function(e) {
            e.addEventListener('input', function() {
                // проверяем текстовое поле на входные данные и устанавливаем в LocalSTorage новое значение
                window.localStorage.setItem('key', e.value);
            })
        })
    } else {
        note.saveNoteText();
    }
});

//Добавление пустой, новой заметки при нажатии на кнопку
b = document.querySelector('button');
b.onclick = function () {
    
    note.addNewNote();

} 











   
   
