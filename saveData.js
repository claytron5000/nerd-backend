const fs = require("fs")
exports.saveData = (data) => {

    const freshData = JSON.stringify(processSheets(data));

    fs.writeFile("sessions.json", freshData, (err) => {
        console.log(err);
    })

}

const processSheets = (data) => {

    const keys = data[0];

    const dataArray = data.slice(1);

    return dataArray.map(rowArray => {

        return keys.reduce((acc, curr, index) => {
            acc[curr] = rowArray[index];
            return acc;
        }, {});

    })

}