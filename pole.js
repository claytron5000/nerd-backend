const { getAuth } = require("./authorizeSheets.js");
const { getData, checkHash } = require("./sheetsHelpers.js");
const { saveData } = require("./saveData.js");
const cron = require('node-cron');

cron.schedule('* * * * *', () => {

    getAuth()
        .then(getData)
        .then(checkHash)
        .then(data => {

            if (!data) {
                return;//die because we don't need to update the database
            }
            else {
                saveData(data);
            }
        })
        .catch(err => {
            console.log(err)
        })

});