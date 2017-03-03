# Shop

 Для запуска проекта необходимо установить angular cli
 
 _Установливаем angular-cli_
 
 `npm install -g @angular/cli`
 
 _Клонируем устанавливаем пакеты npm и запускаем._
 
 `git clone https://github.com/m21448/shop_test.git`
 
 `cd shop_test/`
 
 `npm install`
 
 _Для запуска_
 
 `ng build -prod`
 
 _Созаст в папке ./dist все необходимые js/css скрипты которые подключит в index.html.
  Для запуска приложения необходимо index.html открыть в браузере **обязательно посредством http севрера**_
    
  _или_
  
  `ng serve`
 _Запустит development http сервер. Создаст и подключит все скрипты к index.html, который станет доступным по адресу http://localhost:4200 - **этот вариант удобней**_ 
 