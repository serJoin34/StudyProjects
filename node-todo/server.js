const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

PORT = 8080
app.listen(PORT, function (){
    console.log(`Server is running on port ${PORT}.`);
})
require('./routes/TodoRoute')(app);

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Test API",
            description: "Test API Information",
            contact: {
                name: "Todo List"
            },
            servers: ["http://localhost:8080"]
        }
    },
    apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));