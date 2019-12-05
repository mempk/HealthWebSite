const express = require('express');

const Router = express.Router();

module.exports =() =>{

    Router.get('/',(req, res, next)=>{
        return res.send("Index")
    } );

    return Router;
}

