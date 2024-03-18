/* '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
// function getDayName(date) {
//   //const tempDate = new Date(Date.parse(date));
//   let tempDate = new Date(date);

//   console.log(tempDate);
//   console.log(tempDate.getUTCDay());
//   const options = { weekday: 'long', timeZone: 'UTC' };
//   const dayName = new Intl.DateTimeFormat('en-US', options).format(tempDate);
//   return dayName;
// }

// console.log(getDayName('01 Jan 1970 00:00:00 UTC'));



/*
'2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
'1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
*/


// function getWeekNumberByDate(date) {
//   const yearStart = new Date(date.getFullYear(), 0, 1);
//   const time = date.getTime() - yearStart.getTime();
//   return Math.ceil((time - 10) / 1000 / 60 / 60 / 24 / 7);
// }


// function getWeekNumberByDate(date) {
// const yearStart = new Date(date.getFullYear(), 0, -3);
// let count = 0;
// while (yearStart.getTime() <= date.getTime()) {
//   yearStart.setDate(yearStart.getDate() + 7);
//   count += 1;
// }
// return count;
//   let dateWeekStart = new Date(date.getFullYear(), 0, 1);
//   let i = 1;
//   while (dateWeekStart.getDay() !== 1) {
//     dateWeekStart = new Date(date.getFullYear(), 0, 1 - i);
//     i += 1;
//   }
//   let yearStart = new Date(date.getFullYear(), 0, 1);
//   i = 1;
//   while (yearStart.getDay() !== 1) {
//     yearStart = new Date(date.getFullYear(), 0, 1 - i);
//     i += 1;
//   }
//   console.log(yearStart);
//   console.log(date);
//   const time = date.getTime() - yearStart.getTime();
//   return Math.ceil(time / 1000 / 60 / 60 / 24 / 7);
// }

//console.log(getWeekNumberByDate(new Date(2019, 5, 23)));

console.log(new Map([
  ['Belarus', ['Brest', 'Grodno', 'Minsk']],
  ['Russia', ['Omsk', 'Samara']],
  ['Poland', ['Lodz']],
]));
