    // basic info
    const calendar = document.getElementById("calendar");
    const calendarBody = document.getElementById("calendarBody");
    const calInfo = document.getElementById("calInfo");
    const stringMonth = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    // calendar info
    function getCalendar(year, month) {
      calInfo.innerHTML = `
        <p class="month_info">${month + 1}</p>
        <div>${year} ${stringMonth[month]}</div>`;
      const today = new Date();
      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      calendarBody.innerHTML = '';
      let date = 1;

      for (let i = 0; i < 6; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            const td = document.createElement("td");
            tr.append(td);
          } else if (date > lastDate) {
            const td = document.createElement("td");
            tr.append(td);
          } else {
            const event = '';
            const td = document.createElement("td");
            td.classList.add("date")
            td.innerHTML = `
              <div>${date}</div>
              <p class="day_event">${event}</p>
            `;
            if (year === today.getFullYear() && month === today.getMonth() && date === today.getDate()) {
              td.classList.add('today');
            }
            tr.append(td);
            date++;
          }
        }
        calendarBody.append(tr);
        if (date > lastDate) {
          break;
        }
      }

      // dialog open
      const tdclick = calendarBody.querySelectorAll(".date");
      for (let i = 0; i < tdclick.length; i++) {
        tdclick[i].addEventListener("click", () => {
          const dialog = document.createElement("dialog");
          dialog.innerHTML = `
          <p>${year}년 ${month + 1}월 ${tdclick[i].innerText}일</p>
          <button type="button" id="btnCloseModal">닫기</button>
        `
          calendar.append(dialog)
          dialog.showModal();

          document.getElementById("btnCloseModal").addEventListener("click", () => {
            dialog.close();
            dialog.remove();
          })
        })
      }
    }

    const today = new Date();
    let curYear = today.getFullYear();
    let curMonth = today.getMonth();
    getCalendar(curYear, curMonth);

    // month change button
    const calPrev = document.getElementById("calPrev");
    const calNext = document.getElementById("calNext");

    calPrev.addEventListener('click', () => {
      curMonth--;
      if (curMonth < 0) {
        curMonth = 11;
        curYear--;
      }
      getCalendar(curYear, curMonth);
    })

    calNext.addEventListener('click', () => {
      curMonth++;
      if (curMonth > 11) {
        curMonth = 0;
        curYear++;
      }
      getCalendar(curYear, curMonth);
    })