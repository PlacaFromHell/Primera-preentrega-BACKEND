import express from 'express';
import productRouter from './router/products.routes.js';
import cartRouter from './router/products.routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

app.listen(PORT, () =>{

});

