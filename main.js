const dotenv = require('dotenv');

dotenv.config()

const checkList = function(arr) {
    const objective = arr[0];
    const todo_date = arr[6];
    const email = process.env.EMAIL

    now = new Date();
    day = now.getDate();
    month= now.getMonth() + 1;
    year = now.getFullYear();

    todaysDate = day + '/' + month + '/' + year;
    if (todaysDate == todo_date ) {
        console.log('Sending mail to user');
    }
};

module.exports = checkList;
