import http from "http";
const server = http.createServer((req,res)=>{
    res.end("hello this is ashish chaurasiya");
});

server.listen(3300,()=>{
    console.log("Server is running on port 3300")
})
