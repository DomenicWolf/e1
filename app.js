const express = require('express');
const {ExpressError} = require('./error')
const routes = require('./routes');
const {checkAndReturn,mean,mode,median} = require('./functions');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/mean', (req,res,next) => {
    arr = req.query.nums
    try {
        let resp = checkAndReturn(arr)
        let meanRes = mean(resp)
        console.log(mean(resp))
        let result = {
            operation: "mean",
            result: meanRes
        }
    
        return res.send(result)
    } catch(e) {
        return next(e)
    }
    
    
});

app.get('/median', (req,res) => {
    arr = req.query.nums
    try {
        let resp = checkAndReturn(arr) 
        let medianRes = median(resp)
        console.log(medianRes)
        console.log('asdsad')
        return res.send({
            operation: "median",
            result: medianRes
        })
    } catch(e) {
        return next(e)
    }
});

app.get('/mode', (req,res) => {
    arr = req.query.nums
    try {
        let resp = checkAndReturn(arr) 
        let modeRes = mode(resp)
        //console.log(modeRes)
        return res.send({
            operation: "mode",
            result: modeRes
        })
    } catch(e) {
        return next(e)
    }
})






app.use((req,res,next) => {
    const e = new ExpressError('page not found',404)
    next(e)
})

app.use((err,req,res,next) => {
    console.log(err.msg)
    console.log(err.msg)
    res.status(err.code).send(err.msg)
})

module.exports = {app}