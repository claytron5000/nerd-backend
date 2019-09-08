const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get('/', (req, res) => {

    fs.readFile("./sessions.json", "utf8", (err, data) => {
        massagedData = JSON.parse(data).reduce((acc, curr) => {
            if (curr.day === "Saturday") {
                acc.Saturday.push(curr);
                return acc;
            }
            else if (curr.day === "Sunday") {
                acc.Sunday.push(curr);
                return acc;
            }
        }, { "Saturday": [], "Sunday": [] })
        return err ? err : res.send(JSON.stringify(massagedData));
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))