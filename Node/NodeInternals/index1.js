const fs = require("fs");
const crypto = require("crypto")

setTimeout(() => console.log("Set Timeout"), 0);

setImmediate(() => console.log("Set Immediate"));

process.env.UV_THREADPOOL_SIZE = 10
fs.readFile("test.txt", "utf-8", function (err, data) {
  setTimeout(() => console.log("Set Timeout fn in fs1"), 0);
  setImmediate(() => console.log("Set Immediate in fs1"));

  const start = Date.now()
  crypto.pbkdf2('password','salt1',10000,1024,'sha256', (err,data)=>{
    console.log(`[${Date.now() - start}ms] :Password 1 hased done`)
  })

   crypto.pbkdf2('password','salt1',10000,1024,'sha256', (err,data)=>{
    console.log(`[${Date.now() - start}ms] :Password 2 hased done`)
  })

   crypto.pbkdf2('password','salt1',10000,1024,'sha256', (err,data)=>{
    console.log(`[${Date.now() - start}ms] :Password 3 hased done`)
  })

   crypto.pbkdf2('password','salt1',10000,1024,'sha256', (err,data)=>{
    console.log(`[${Date.now() - start}ms] :Password 4 hased done`)
  })
   crypto.pbkdf2('password','salt1',10000,1024,'sha256', (err,data)=>{
    console.log(`[${Date.now() - start}ms] :Password 5 hased done`)
  })
   crypto.pbkdf2('password','salt1',10000,1024,'sha256', (err,data)=>{
    console.log(`[${Date.now() - start}ms] :Password 6 hased done`)
  })
});

console.log("Hello");
