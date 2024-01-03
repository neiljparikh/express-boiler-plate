//DEPENDENCIES
const express = require("express");
const path = require("path");

//DATA


//APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
// stuff to get the req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//static assets
app.use(express.static("public"));

//ROUTES
// HTML routes - deliver pages
// GET / - the home page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
  );

// API Routes - deliver data
app.get("/api/todos", (req, res) => 
    res.json([
        {
            title: "Buy Milk",
        }
    ])
);

//404 route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/404.html"));
})
 
//START SERVER
app.listen(PORT, () => console.log(`Server live on port ${PORT}`))
