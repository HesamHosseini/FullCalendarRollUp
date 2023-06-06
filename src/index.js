import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from "@fullcalendar/list"
import fa from "@fullcalendar/core/locales/fa"
import './index.css';


let calendardar ;






document.addEventListener('DOMContentLoaded', function() {

  var calendarEl = document.getElementById('calendar');

  calendardar = new Calendar(calendarEl, {
    plugins :[dayGridPlugin , timeGridPlugin , listPlugin],
    initialView : "dayGridMonth",
    headerToolbar : {
      left : 'prev , next today',
      center : 'title',
      right : 'dayGridMonth,timeGridWeek,listWeek'
    },
    locale : fa
  });

  calendardar.render();


  
});






const btn = document.getElementById("dokme")


btn.addEventListener("click" , addadd)



function addadd ()  {

const dataArr = []
  for (let index = 0; index <2; index++) {
    
    switch (index) {
      case index: 0
        dataArr.push(prompt("enter you task date : ", Date.now()))
        break;
      case index: 1
        dataArr.push(prompt("task title : ", "تتیر تسک خود را وارد کنید"))
        break;
      case index: 2
        dataArr.push(prompt("ایا کل روز من را اشغال میکند ؟ : ", true))
        break;

      default:
        break;
    }
    
  }

  

  console.log(calendardar)

  calendardar.addEvent({
    title :"the title",
    start : "2023-06-06",
    allday : true,
    id : "mamadGholi"
  })

}


