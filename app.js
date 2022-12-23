const fs = require('fs')
const mongoose= require('mongoose')
const express = require('express')
const Login=require('./models/login')
const port = process.env.PORT || '3000' 


//connect to database mangodb

//'mongodb+srv://login:login123@cluster0.vjgy1.mongodb.net/login?retryWrites=true&w=majority'

const dbURI='mongodb+srv://dentist1:tausif123@cluster0.1wdavla.mongodb.net/dentist'

 mongoose.connect(dbURI).then(()=>{
   console.log('connected to mongodb!')
}).catch((err)=>{
    console.log(err)
 });
 
// cconst cors = require('cors')
const app  = express()
const path = require('path')
app.use(express.json());


// app.use(cors())

//mongoose and mongo sandbox routes

     app.post('/test', (req, res)=>{
        const payload = req.body;
        console.log(payload)
          const data=new Login({
            name:payload.name,
            email:payload.email,
            Mobile:payload.Mobile,
            reason:payload.reason
           });
          
           data.save()   
           .then((result)=>{
            res.send(result)

          })
           .catch((err)=>{
             console.log(err);
         })
     })
    //username:'user2',
    //password:'wasid@123'


    

app.get('/home.html',(req,res)=>{
    return res.sendFile(path.join(__dirname, '/home.html'));
})

app.get('/about.html',(req,res)=>{
    return res.sendFile(path.join(__dirname, '/about.html'));
})


app.get('/services.html',(req,res)=>{
    return res.sendFile(path.join(__dirname, '/services.html'));
})

app.get('/contact.html',(req,res)=>{
    return res.sendFile(path.join(__dirname, '/contact.html'));
})


app.get('/client.js',(req,res)=>{
    return res.sendFile(path.join(__dirname, '/client.js'));
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/nav.js',(req,res)=>{
    return res.sendFile(path.join(__dirname, '/nav.js'));
})



// app.use(express.static(path.join(__dirname, 'image')));

// app.post('/save',(req,res)=>{
//     console.log('request received!')
//     console.log(req.body)
//     fs.appendFile('test.txt',JSON.stringify(req.body),(err)=>{
//         if(err) {return console.log(err)}
//         // return res.json({status:'success',message:'saved succesfully!'})

//     })
//     return res.json({status:'success',message:'saved succesfully!'})
// })

app.listen(port,()=>{
    console.log('Server up on 3000');
})