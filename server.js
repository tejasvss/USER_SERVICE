const express = require('express');
const app = express();

const port = 3000


app.get('/', function (req, res) {
    res.send('************* WELCOME TO USER SERVICE BACKEND *************');
});



app.listen(port, () => {
    console.log("****************************************************************")
    console.log(`Server is started on ${port} successfully for USER_SERVICE `)
    
    console.log("****************************************************************")

});



