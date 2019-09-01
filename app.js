const express=require('express');

var bodyParser=require('body-parser');

const path=require('path');

var cors = require('cors')
 
const app=express();

app.use(cors());
app.use('/',express.static(path.join(__dirname,'AngularApp')));
 
 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


 
const productRoutes=require('./api/routes/products');

const orderRoutes=require('./api/routes/order');

const AuthenticateUserRoutes=require('./api/routes/authenticateuser');

const RegisterUserRoutes=require('./api/routes/RegisterUser');

const ProcessOrderRoutes=require('./api/routes/processOrder');

const getOrderRoutes=require('./api/routes/getOrder');

const MyOrderOrderRoutes=require('./api/routes/MyOrders');


const UploadProdImageRoutes=require('./api/routes/UploadProductImage');

app.use('/productsDetail',productRoutes);
app.use('/MyOrders',MyOrderOrderRoutes);

 
app.use('/order',orderRoutes);

app.use('/authenticateuser',AuthenticateUserRoutes);

app.use('/registeruser',RegisterUserRoutes);
app.use('/processOrder',ProcessOrderRoutes);
app.use('/getOrder',getOrderRoutes);
app.use('/UploadProdImage',UploadProdImageRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'AngularApp','index.html'));
});

module.exports=app;