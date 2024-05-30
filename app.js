/*const express=require('express')
const cors=require('cors');

const app=express()

require('dotenv').config()
const PORT= process.env.PORT || 3000
app.use(express.json())
app.use(cors())
/*app.get('/',(req,res)=>{
    res.send('Hello World')
})*/


/*const server= () => {
    db()
    app.listen(PORT,() => {
    console.log('listening to port:',PORT)
    })
}

server()*/

/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose
const {readdirSync}=require('fs')
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))
// Define the db function
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

// Call the db function
const server = () => {
    db(); // Call db function
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server();
*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const {readdirSync} = require('fs')

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Db Connected');
    } catch (error) {
        console.error('DB Connection Error:', error.message);
        throw new Error('DB Connection Error');
    }
};

// Import routes
//const transactionsRoutes = require('./routes/transactions');
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
// Use routes
//app.use('/api/v1', transactionsRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to your API');
});

// Start the server
const startServer = async () => {
    try {
        await db();
        app.listen(PORT, () => {
            console.log('Server is running on port:', PORT);
        });
    } catch (error) {
        console.error('Error starting server:', error.message);
    }
};

startServer();

/*const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()*/