// const fs = require("fs")
// // const math = require("./math")
// fs.writeFile('./test.txt',"Hello Deep",()=>{})
// const { addnew } = require("./math") 
// // console.log({ __filename, __dirname})
// // console.log(math.add(2,5))

// // console.log(math())
// console.log(math.addnew(2,5))
// function __require(id){
//     //...agar id .(Dot) se shuru hua toh user ki dir mei code ko dhundho
//     // otherwise khud ke internal module mei dhundho
//     // agar toh mil gaya to well & good nahi to node_modules mei dhundho
//     // ... user ko error throw karo
// }


const http = require("http")

const express = require('express')

const handlerFunctionV2 = express()

handlerFunctionV2.use((req,res,next) => {
    next()
})
handlerFunctionV2.get('/', (req,res) => res.end("Homepage"))
handlerFunctionV2.get('/contact-us', (req,res) => res.end("Contact Us page"))

function handlerFunction(req,res){
    // console.log(`Incoming req aaya`)
    // console.log(req.method)
    // console.log(req.url)
    // res.end("Ye lo ji response")
    switch(req.method){
        case 'GET' : 
        {
            if (req.url === '/') return res.end('Homepage')
            if (req.url === '/contact-us') return res.end('Contact us page')
            if (req.url === '/about-us') return res.end('About us page')
        }
        break;
        case 'POST' : 
        {

        }
        break;
        c
    }
}
// const server = http.createServer(handlerFunction)
// const server = http.createServer(handlerFunctionV2)


// server.listen(8000,function (){
//     console.log(`Server Started`)
// })

handlerFunctionV2.listen(8000,function (){
    console.log(`Server Started`)
})