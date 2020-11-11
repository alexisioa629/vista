const fetch = require('node-fetch');

const vista = (req,res) => {
    res.render('home');
} 

const send = async (req,res) => {    
    const {ip} = req.body;
    const {texto} = req.body;
    //http://localhost:3001/enviardato
     let path = `http://localhost:3001/enviardato=${ip,texto}`
    const send = await fetch(path,{method:'Post'});
    const data = await send.json();
    res.send(data)
}

module.exports = {
    vista,
    send
}

