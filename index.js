const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// port number
const port = process.env.PORT || 3000;


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Homepage
app.get('/', (req, res) => {
    res.render('index');
});

// About page
app.get('/about', (req, res) => {
    res.render('about');
} );

// work page
app.get('/mywork', (req, res) => {
    res.render('work');
} );

// Contact page
app.get('/contact', (req, res) => {
    res.render('contact');
} );



// server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    }
);