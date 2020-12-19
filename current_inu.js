    vrem()
    let timerId = setInterval(vrem, 1000);
    function vrem() {

        Data = new Date();
        Hours = Data.getHours();
        Minutes = Data.getMinutes();
        Day = Data.getDay();
        Seconds = Data.getSeconds();
        if (Hours < 10) Hours = "0" + Hours;
        if (Minutes < 10) Minutes = "0" + Minutes;
        if (Seconds < 10) Seconds = "0" + Seconds;

        time = Hours + '' + Minutes;
        timef = Hours + ':' + Minutes;
        timenavbar = Hours + ':' + Minutes + ':' + Seconds;
        currentrasp();
    }
    
        function currentrasp(){
                document.getElementById('time').innerHTML = (timenavbar);

        // Понедельник
        if (Day == 1) {
            document.getElementById('day1js').style.backgroundColor = 'rgba(255,255,255,.4';
            
            if (time >= 0800 && time < 0850) {
                document.getElementById('current-time').innerHTML = ('8:00-8:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Модели и методы управления</span><span class="mobile-name">МиМу</span><span class="type lection">Лекция</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1114&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1144">Страница курса</a>');
            }
            if (time >= 0900 && time < 0950) {
                document.getElementById('current-time').innerHTML = ('9:00-9:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Модели и методы управления</span><span class="mobile-name">МиМу</span><span class="type practice">Практика</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1114&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1144">Страница курса</a>');
            }
            if (time >= 1000 && time < 1050) {
                document.getElementById('current-time').innerHTML = ('10:00-10:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Взаимодействие человека с компьютером</span><span class="mobile-name">ВЧсК</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Прокопец Е.В.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=5574&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=5553">Страница курса</a>');
            }
            if (time >= 1100 && time < 1150) {
                document.getElementById('current-time').innerHTML = ('11:00-11:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Взаимодействие человека с компьютером</span><span class="mobile-name">ВЧсК</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Прокопец Е.В.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=5574&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=5553">Страница курса</a>');
            }
            if (time >= 1220 && time < 1310) {
                document.getElementById('current-time').innerHTML = ('12:20-13:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Численные методы</span><span class="mobile-name">ЧМ(о)</span><span class="type srsp">СРСП</span>');
                document.getElementById('current-prep').innerHTML = ('Бокаева М.С.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1602&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1621">Страница курса</a>');
            }

            // Перемены
            if (time >= 0850 && time < 0900) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 0950 && time < 1000) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1050 && time < 1100) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1150 && time < 1220) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1220 && time < 2359) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 0001 && time < 0800) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }

        }
        // Вторник
        if (Day == 2) {
            document.getElementById('day2js').style.backgroundColor = 'rgba(255,255,255,.4';
            if (time >= 0800 && time < 0850) {
                document.getElementById('current-time').innerHTML = ('8:00-8:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Иностранный язык(В1)</span><span class="mobile-name">ИнЯз</span><span class="type practice">Практика</span>');
                document.getElementById('current-prep').innerHTML = ('Атыгаева Ж.Е.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=7475&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=7358">Страница курса</a>');
            }
            if (time >= 0900 && time < 0950) {
                document.getElementById('current-time').innerHTML = ('9:00-9:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Иностранный язык(В1)</span><span class="mobile-name">ИнЯз</span><span class="type practice">Практика</span>');
                document.getElementById('current-prep').innerHTML = ('Атыгаева Ж.Е.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=7475&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=7358">Страница курса</a>');
            }
            if (time >= 1000 && time < 1050) {
                document.getElementById('current-time').innerHTML = ('10:00-10:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Иностранный язык(В1)</span><span class="mobile-name">ИнЯз</span><span class="type practice">Практика</span>');
                document.getElementById('current-prep').innerHTML = ('Атыгаева Ж.Е.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=7475&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=7358">Страница курса</a>');
            }
            if (time >= 1100 && time < 1150) {
                document.getElementById('current-time').innerHTML = ('11:00-11:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Инструментальные средства разработки программ</span><span class="mobile-name">ИСРП</span><span class="type lection">Лекция</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=2059&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=2062">Страница курса</a>');
            }
            if (time >= 1220 && time < 1310) {
                document.getElementById('current-time').innerHTML = ('12:20-13:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Инструментальные средства разработки программ</span><span class="mobile-name">ИСРП</span><span class="type practice">Практика</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=2059&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=2062">Страница курса</a>');
            }
            if (time >= 1320 && time < 1410) {
                document.getElementById('current-time').innerHTML = ('13:20-14:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Взаимодействие человека с компьютером</span><span class="mobile-name">ВЧсК</span><span class="type srsp">СРСП</span>');
                document.getElementById('current-prep').innerHTML = ('Прокопец Е.В.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=5574&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=5553">Страница курса</a>');
            }

            // Перемены
            if (time >= 0850 && time < 0900) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 0950 && time < 1000) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1050 && time < 1100) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1150 && time < 1220) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1310 && time < 1320) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1410 && time < 2359) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 0001 && time < 0800) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }

        }
        // Среда
        if (Day == 3) {
            document.getElementById('day3js').style.backgroundColor = 'rgba(255,255,255,.4';
            if (time >= 0800 && time < 0850) {
                document.getElementById('current-time').innerHTML = ('8:00-8:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Взаимодействие человека с компьютером</span><span class="mobile-name">ВЧсК</span><span class="type lection">Лекция</span>');
                document.getElementById('current-prep').innerHTML = ('Прокопец Е.В.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=5574&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=5553">Страница курса</a>');
            }
            if (time >= 0900 && time < 0950) {
                document.getElementById('current-time').innerHTML = ('9:00-9:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Взаимодействие человека с компьютером</span><span class="mobile-name">ВЧсК</span><span class="type practice">Практика</span>');
                document.getElementById('current-prep').innerHTML = ('Прокопец Е.В.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=5574&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=5553">Страница курса</a>');
            }
            if (time >= 1000 && time < 1050) {
                document.getElementById('current-time').innerHTML = ('10:00-10:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Инструментальные средства разработки программ</span><span class="mobile-name">ИСРП</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=2059&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=2062">Страница курса</a>');
            }
            if (time >= 1100 && time < 1150) {
                document.getElementById('current-time').innerHTML = ('11:00-11:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Инструментальные средства разработки программ</span><span class="mobile-name">ИСРП</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=2059&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=2062">Страница курса</a>');
            }
            if (time >= 1220 && time < 1310) {
                document.getElementById('current-time').innerHTML = ('12:20-13:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Основы информационных систем</span><span class="mobile-name">ОИС</span><span class="type lection">Лекция</span>');
                document.getElementById('current-prep').innerHTML = ('Прокопец Е.В.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1102&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1132">Страница курса</a>');
            }
            if (time >= 1320 && time < 1410) {
                document.getElementById('current-time').innerHTML = ('13:20-14:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Основы информационных систем</span><span class="mobile-name">ОИС</span><span class="type srsp">СРСП</span>');
                document.getElementById('current-prep').innerHTML = ('Прокопец Е.В.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1102&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1132">Страница курса</a>');
            }

            // Перемены
            if (time >= 0850 && time < 0900) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 0950 && time < 1000) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1050 && time < 1100) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1150 && time < 1220) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1310 && time < 1320) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1410 && time < 2359) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 0001 && time < 0800) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }

        }
        // Четверг
        if (Day == 4) {
            document.getElementById('day4js').style.backgroundColor = 'rgba(255,255,255,.4';
            if (time >= 1000 && time < 1050) {
                document.getElementById('current-time').innerHTML = ('10:00-10:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Численные методы</span><span class="mobile-name">ЧМ(о)</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Бокаева М.С.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1602&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1621">Страница курса</a>');
            }
            if (time >= 1100 && time < 1150) {
                document.getElementById('current-time').innerHTML = ('11:00-11:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Численные методы</span><span class="mobile-name">ЧМ(о)</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Бокаева М.С.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1602&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1621">Страница курса</a>');
            }
            if (time >= 1220 && time < 1310) {
                document.getElementById('current-time').innerHTML = ('12:20-13:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Иностранный язык(В1)</span><span class="mobile-name">ИнЯз</span><span class="type practice">Практика</span>');
                document.getElementById('current-prep').innerHTML = ('Атыгаева Ж.Е.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=7475&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=7358">Страница курса</a>');
            }
            if (time >= 1320 && time < 1410) {
                document.getElementById('current-time').innerHTML = ('13:20-14:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Иностранный язык(В1)</span><span class="mobile-name">ИнЯз</span><span class="type srsp">СРСП</span>');
                document.getElementById('current-prep').innerHTML = ('Атыгаева Ж.Е.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=7475&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=7358">Страница курса</a>');
            }
            if (time >= 1420 && time < 1510) {
                document.getElementById('current-time').innerHTML = ('14:20-15:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Модели и методы управления</span><span class="mobile-name">МиМу</span><span class="type srsp">СРСП</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1114&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1144">Страница курса</a>');
            }
            if (time >= 1520 && time < 1610) {
                document.getElementById('current-time').innerHTML = ('15:20-16:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Инструментальные средства разработки программ</span><span class="mobile-name">ИСРП</span><span class="type srsp">СРСП</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=2059&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=2062">Страница курса</a>');
            }

            // Перемены
            if (time >= 1050 && time < 1100) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1150 && time < 1220) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1310 && time < 1320) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1410 && time < 1420) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1510 && time < 1520) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1610 && time < 2359) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 0001 && time < 1000) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
        }
        // Пятница
        if (Day == 5) {
            document.getElementById('day5js').style.backgroundColor = 'rgba(255,255,255,.4';
            if (time >= 0800 && time < 0850) {
                document.getElementById('current-time').innerHTML = ('8:00-8:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Основы информационных систем</span><span class="mobile-name">ОИС</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Прокопец Е.В.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1102&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1132">Страница курса</a>');
            }
            if (time >= 0900 && time < 0950) {
                document.getElementById('current-time').innerHTML = ('9:00-9:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Основы информационных систем</span><span class="mobile-name">ОИС</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Прокопец Е.В.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1102&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1132">Страница курса</a>');
            }
            if (time >= 1000 && time < 1050) {
                document.getElementById('current-time').innerHTML = ('10:00-10:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Численные методы</span><span class="mobile-name">ЧМ(о)</span><span class="type lection">Лекция</span>');
                document.getElementById('current-prep').innerHTML = ('Бокаева М.С.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1602&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1621">Страница курса</a>');
            }
            if (time >= 1100 && time < 1150) {
                document.getElementById('current-time').innerHTML = ('11:00-11:50');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Численные методы</span><span class="mobile-name">ЧМ(о)</span><span class="type practice">Практика</span>');
                document.getElementById('current-prep').innerHTML = ('Бокаева М.С.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1602&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1621">Страница курса</a>');
            }
            if (time >= 1220 && time < 1310) {
                document.getElementById('current-time').innerHTML = ('12:20-13:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Модели и методы управления</span><span class="mobile-name">МиМу</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1114&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1144">Страница курса</a>');
            }
            if (time >= 1320 && time < 1410) {
                document.getElementById('current-time').innerHTML = ('13:20-14:10');
                document.getElementById('current-name').innerHTML = ('<span class="desktop-name">Модели и методы управления</span><span class="mobile-name">МиМу</span><span class="type lab">Лабораторная работа</span>');
                document.getElementById('current-prep').innerHTML = ('Ляшенко И.И.');
                document.getElementById('current-links').innerHTML = ('<a href="" onClick="window.open(&quot;https:\/\/cdo.ineu.kz\/mod\/chat\/gui_ajax\/index.php?id=1114&quot;, &quot;Chat&quot;, &quot;Width=800, Height=600&quot;)">Чат</a><a href="https://cdo.ineu.kz/course/view.php?id=1144">Страница курса</a>');
            }
            // Перемены
            if (time >= 0850 && time < 0900) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 0950 && time < 1000) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1050 && time < 1100) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1150 && time < 1220) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1310 && time < 1320) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Перемена');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 1410 && time < 2359) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
            if (time >= 0001 && time < 0800) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Пары закончились');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }
        }
        if (Day == 6) {
            document.getElementById('day6js').style.backgroundColor = 'rgba(255,255,255,.4';
            if (time >= 0001 && time < 2359) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Выходной');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }

        }
        if (Day == 0) {
            document.getElementById('day7js').style.backgroundColor = 'rgba(255,255,255,.4';
            if (time >= 0001 && time < 2359) {
                document.getElementById('current-time').innerHTML = (timef);
                document.getElementById('current-name').innerHTML = ('Выходной');
                document.getElementById('current-prep').innerHTML = ('');
                document.getElementById('current-links').innerHTML = ('');
            }

        }

    }