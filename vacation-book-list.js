function vacationBookList(pagesCount, pagesPerHour, daysCount) {
   let totalHours = pagesCount / pagesPerHour;
   let hoursPerDay = totalHours / daysCount;
   console.log(hoursPerDay);
}

vacationBookList(212, 20, 2);