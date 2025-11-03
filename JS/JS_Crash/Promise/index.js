const fs = require("fs");
const fs2 = require('fs/promises')

// -----------------Modern Code with Promise ------------------
fs2.readFile('./hello.txt','utf-8')
.then((content)=> fs2.writeFile('backup.txt',content))
.then(()=> fs2.unlink('.hello.txt'))
.catch((e)=> console.log("Error",e))


//---------------Custome Promise ----------------------------

function readFileWithPromise(filepath,encoding){
    return new Promise((resolve,reject) =>{
        fs.readFile(filepath,encoding, (err,content) =>{
            if(err){
                reject(err)
            } else{
                resolve(content)
            }
        })
    })
}

function writeFileWithPromise(filepath,content){
    return new Promise((resolve,reject) =>{
        fs.writeFile(filepath,content,(error)=>{
            if(error){
                reject(error)
            }else{
                resolve()
            }
        })
    })
}

function unlinkWithPromise(filepath){
    return new Promise((resolve,reject)=>{
        fs.unlink(filepath, (error)=>{
            if(error){
                reject(error)
            }else{
                resolve()
            }
        })
    })
}

function wait(seconds){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },seconds*1000)
    })
}
const result = readFileWithPromise("./hello.txt","utf-8")
result
.then(content => writeFileWithPromise("backup.txt",content))
.then(() => unlinkWithPromise("./hello.txt"))
.catch((e)=> console.log("Error ",e))
.finally(()=>console.log("All Done"))

// ----------------- Aysnc Await -------------------

async function doTask(){
    try {
        const fileContent = await readFileWithPromise('./hello.txt','utf-8')
    await writeFileWithPromise('backup.txt',fileContent)
    // await wait(10)
    await unlinkWithPromise('.hello.txt')
    } catch (error) {
        console.log("Error", error)
    } finally {
        console.log("All Done")
    }
}

doTask().then(() => {console.log("All Done");
})

// -------------Legacy exitCode(Old)-----------------------
fs.readFile('hello.txt','utf-8',function (err,content){
    if(err){
        console.log("Error in reading file", err);
    } else {
        console.log("File content", content);
        fs.writeFile('backup.txt',content,function (error){
            if(error){
                console.log("Error in Writing in backup file", error);
            }else {
                fs.unlink('./hello.txt', function (er){
                    if(er){
                        console.log("Error in Deleting",er);
                    }else{
                        console.log("File delete Success");
                        
                    }
                })
            }
        })
    }
})