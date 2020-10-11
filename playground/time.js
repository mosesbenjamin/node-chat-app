const moment =require('moment');

// const date = moment();
// date.add(1, 'year').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'))


//Jan 1st 1970 00:00:00 am (Unix timestamp stored in UTC)

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth())

// 10:35 am

// new Date().getTime() ===

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp)

var createdAt = 1234;
const date = moment(createdAt);
console.log(date.format('h:mm a'))