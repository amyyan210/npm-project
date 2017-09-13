const $ = require("jquery");

const hello = () => console.log("Hello world from webpack!");
    hello();

// npm run build in terminal before being able to see for the first time
$("body").html("<h1>Hello from jQuery</h1>").css("background-color", "gray");