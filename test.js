console.log("hello world");


const temp = -4;
if(temp<-30){
console.log('Оставайтесь дома');
} else if (temp<=-10){
    console.log('Сегодня холодно');
}   else if(temp<=5){
    console.log('Не холодно');
}else if(temp<=15){
    console.log('Тепло');
}else{
    console.log('Очень тепло');
}
///ОБЬЕКТЫ

////Создайте обьект maFavoriteFilm описывающий ваш любимый фильм.
/// Объект должен содержать свойства с названием фильма, с датой выпуска, именем режиссера и страной выпуска. 

const myFavoriteFilm={
    title:"Titanik",
    releaseDate:"1997",
    director:"James Cameron",
    country:"England",
}

/////Добавить свойство содержащее значение выручки фильма в прокате.
myFavoriteFilm.profit="20000000"

/////Добавить метод, который который будет выводить название фильма в консоль.



/////Удалить свойство содержащее год выпуска.
delete myFavoriteFilm.releaseDate

////Вывести в консоль объект myFavoriteFilm и проанализировать его структуру.
console.log(myFavoriteFilm)

////Типы данных

let str = "Hello Anna";
////Создаем новую ветку