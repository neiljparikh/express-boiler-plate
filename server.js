//DEPENDENCIES
const express = require("express");


//DATA


//APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

//MIDDLEWARE


//ROUTES

//START SERVER
app.listen(PORT, () => console.log(`Server live on port ${PORT}`))
