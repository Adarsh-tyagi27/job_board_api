import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();


//middleware
app.use(cors());
app.use(express.json());


//health check route
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
});




// 404 handler
app.use((req,res,next)=>{
    res.status(404).json({
        success:false,
        statusCode:404,
        message:'Route not found',
    });
});

// error handler 
app.use(errorHandler);

export default app;
