const $ = require("jquery"); // loading jquery.min.js, third party module

const data = require("./data"); // use ./ before file name for custom module

const hello = () => console.log("Hello world from webpack!");
    hello();

console.log(data.whichSideOfTheForce);

// npm run build in terminal before being able to see for the first time
$("body").html("<h1>Hello from jQuery</h1>").css("background-color", "gray");