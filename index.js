const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..','view','homepage.html'))
});

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..','view','services.html'))
});

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..','view','contact.html'))
});

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..','view','projects.html'))
});

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..','view','aboutme.html'))
});

module.exports = router;