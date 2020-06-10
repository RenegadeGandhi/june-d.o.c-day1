const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/port", (req, res, next) => {
    res.send(`The Script is running on port ${port}`);
});

app.get("/fibonacci", (req, res, next) => {
    const fibonacci = (n) => {
        if (n===1) {
            return [0, 1];
        } else {
            let s = fibonacci(n - 1);
            s.push(s[s.length - 1] + s[s.length - 2]).toString();
            return s;
        }
    };
    res.send((fibonacci(100)));
});

app.use((req, res, next) => {
    res.status(302).send(`Head over to /port`);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});