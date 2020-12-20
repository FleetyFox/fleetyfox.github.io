// getPara(d,n).style.cssText = "background: rgba(255,255,255,.4);"; - Чтобы текущее занятие окрашивалось в самом списке

"use strict"
let timer = setInterval(main, 1000);
main();

function getPara(d, n){
    result = document.querySelector("#crr").innerHTML = document.querySelector("#day"+ d +" .trow:nth-of-type("+ n +")").innerHTML;
    console.log(result);
    return(result);
}

function main() {
    const date = new Date(),
        Day = date.getDay(),
        hours = date.getHours(),
        sec = date.getSeconds();
    
    let minutes = date.getMinutes(),
        month,
        nofday;
    if (minutes < 10) minutes = "0" + minutes;
    switch (date.getMonth())
        {
        case 0: month="января"; break;
        case 1: month="февраля"; break;
        case 2: month="марта"; break;
        case 3: month="апреля"; break;
        case 4: month="мае"; break;
        case 5: month="июня"; break;
        case 6: month="июля"; break;
        case 7: month="августа"; break;
        case 8: month="сентября"; break;
        case 9: month="октября"; break;
        case 10: month="ноября"; break;
        case 11: month="декабря"; break;
        }
    switch (Day)
        {
        case 0: nofday="Воскресенье"; break;
        case 1: nofday="Понедельник"; break;
        case 2: nofday="Вторник"; break;
        case 3: nofday="Среда"; break;
        case 4: nofday="Четверг"; break;
        case 5: nofday="Пятница"; break;
        case 6: nofday="Суббота"; break;
        }

    let time = hours + '' + minutes,
        time4nav =nofday + ', ' + date.getDate() + ' ' + month + ' ' + date.getFullYear() + "г, " + hours + ':' + minutes + ':' + sec;
        
    document.getElementById('time').innerHTML = (time4nav);
        
    if((time >= 700 && time < 800) ||(time >= 850 && time < 900) || (time >= 950 && time < 1000 ) || (time >= 1050 && time < 1100) || ( time >= 1150 && time < 1220 )){document.querySelector("#tz").innerHTML = "Скоро начнется:"}
    if (Day == 1) {
        document.getElementById('day1js').style.backgroundColor = 'rgba(255,255,255,.4';
        if (time >= 700 && time < 800){
            getPara(1,1);
        } else if (time >= 800 && time < 850){
            getPara(2,1);
        } else if (time >= 850 && time < 900){
            getPara(1,2);
        } else if (time >= 900 && time < 950){
            getPara(1,2);
        } else if (time >= 950 && time < 1000){
            getPara(1,3);
        } else if (time >= 1000 && time < 1050){
            getPara(1,3);
        } else if (time >= 1050 && time < 1100){
            getPara(1,4);
        } else if (time >= 1100 && time < 1150){
            getPara(1,4);
        } else if (time >= 1150 && time < 1220){
            getPara(1,5);
        } else if (time >= 1220 && time < 1310){
            getPara(1,5);
        } else {
            document.querySelector(".wrap-content").innerHTML = '<h3>Пары закончились, пора немного отдохнуть</h3>';
        }
    }
    if (Day == 2) {
        document.getElementById('day2js').style.backgroundColor = 'rgba(255,255,255,.4';
        if (time >= 700 && time < 800){
            getPara(2,1);
        } else if (time >= 800 && time < 850){
            getPara(2,1);
        } else if (time >= 850 && time < 900){
            getPara(2,2);
        } else if (time >= 900 && time < 950){
            getPara(2,2);
        } else if (time >= 950 && time < 1000){
            getPara(2,3);
        } else if (time >= 1000 && time < 1050){
            getPara(2,3);
        } else if (time >= 1050 && time < 1100){
            getPara(2,4);
        } else if (time >= 1100 && time < 1150){
            getPara(2,4);
        } else if (time >= 1150 && time < 1220){
            getPara(2,5);
        } else if (time >= 1220 && time < 1310){
            getPara(2,5);
        } else if (time >= 1310 && time < 1320){
            getPara(2,6);
        } else if (time >= 1320 && time < 1410){
            getPara(2,6);
        } else {
            document.querySelector(".wrap-content").innerHTML = '<h3>Пары закончились, пора немного отдохнуть</h3>';
        }
    }
    if (Day == 3) {
        document.getElementById('day3js').style.backgroundColor = 'rgba(255,255,255,.4';
        if (time >= 700 && time < 800){
            getPara(3,1);
        } else if (time >= 800 && time < 850){
            getPara(3,1);
        } else if (time >= 850 && time < 900){
            getPara(3,2);
        } else if (time >= 900 && time < 950){
            getPara(3,2);
        } else if (time >= 950 && time < 1000){
            getPara(3,3);
        } else if (time >= 1000 && time < 1050){
            getPara(3,3);
        } else if (time >= 1050 && time < 1100){
            getPara(3,4);
        } else if (time >= 1100 && time < 1150){
            getPara(3,4);
        } else if (time >= 1150 && time < 1220){
            getPara(3,5);
        } else if (time >= 1220 && time < 1310){
            getPara(3,5);
        } else if (time >= 1310 && time < 1320){
            getPara(3,6);
        } else if (time >= 1320 && time < 1410){
            getPara(3,6);
        } else {
            document.querySelector(".wrap-content").innerHTML = '<h3>Пары закончились, пора немного отдохнуть</h3>';
        }
    }
    if (Day == 4) {
        document.getElementById('day4js').style.backgroundColor = 'rgba(255,255,255,.4';
        if (time >= 700 && time < 800){
            getPara(4,1);
        } else if (time >= 800 && time < 850){
            getPara(4,1);
        } else if (time >= 850 && time < 900){
            getPara(4,2);
        } else if (time >= 900 && time < 950){
            getPara(4,2);
        } else if (time >= 950 && time < 1000){
            getPara(4,3);
        } else if (time >= 1000 && time < 1050){
            getPara(4,3);
        } else if (time >= 1050 && time < 1100){
            getPara(4,4);
        } else if (time >= 1100 && time < 1150){
            getPara(4,4);
        } else if (time >= 1150 && time < 1220){
            getPara(4,5);
        } else if (time >= 1220 && time < 1310){
            getPara(4,5);
        } else if (time >= 1310 && time < 1320){
            getPara(4,6);
        } else if (time >= 1320 && time < 1410){
            getPara(4,6);
        } else if (time >= 1410 && time < 1420){
            getPara(4,7);
        } else if (time >= 1420 && time < 1510){
            getPara(4,7);
        } else if (time >= 1510 && time < 1520){
            getPara(4,8);
        } else if (time >= 1520 && time < 1610){
            getPara(4,8);
        } else {
            document.querySelector(".wrap-content").innerHTML = '<h3">Пары закончились, пора немного отдохнуть</h3>';
        }
    }
    if (Day == 5) {
        document.getElementById('day5js').style.backgroundColor = 'rgba(255,255,255,.4';
        if (time >= 700 && time < 800){
            getPara(5,1);
        } else if (time >= 800 && time < 850){
            getPara(5,1);
        } else if (time >= 850 && time < 900){
            getPara(5,2);
        } else if (time >= 900 && time < 950){
            getPara(1,2);
        } else if (time >= 950 && time < 1000){
            getPara(5,3);
        } else if (time >= 1000 && time < 1050){
            getPara(5,3);
        } else if (time >= 1050 && time < 1100){
            getPara(5,4);
        } else if (time >= 1100 && time < 1150){
            getPara(5,4);
        } else if (time >= 1150 && time < 1220){
            getPara(5,5);
        } else if (time >= 1220 && time < 1310){
            getPara(5,5);
        } else if (time >= 1310 && time < 1320){
            getPara(5,6);
        } else if (time >= 1320 && time < 1410){
            getPara(5,6);
        } else if (time >= 1410 && time < 1420){
            getPara(5,7);
        } else if (time >= 1420 && time < 1510){
            getPara(5,7);
        } else if (time >= 1510 && time < 1520){
            getPara(5,8);
        } else if (time >= 1520 && time < 1610){
            getPara(5,8);
        } else {
            document.querySelector(".wrap-content").innerHTML = '<h3>Пары закончились, пора немного отдохнуть</h3>';
        }
    }
    if (Day == 6){
            document.querySelector(".wrap-content").innerHTML = '<h3>Сегодня выходной, ' + nofday + '</h3>';
            document.getElementById('day6js').style.backgroundColor = 'rgba(255,255,255,.4';
    }
    if (Day == 0){
            document.querySelector(".wrap-content").innerHTML = '<h3>Сегодня выходной, ' + nofday + '</h3>';
            document.getElementById('day7js').style.backgroundColor = 'rgba(255,255,255,.4';
    }
}