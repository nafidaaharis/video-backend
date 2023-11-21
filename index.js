// 1. import json server
    // use-------json data run cheyyan
const jsonserver=require('json-server')

// 2. create json server
const server=jsonserver.create()

// set router
const router=jsonserver.router("db.json")

// 3. create middle ware act as a parser
    // use-----json server json data in  to js format
    // backend data -json    frontend data--javascript
const middleware=jsonserver.defaults()

// 4. create port
const PORT=process.env.PORT || 4000

// 5. middle ware use in server
    //   json data conver in javascript data 
server.use(middleware)

server.use(router)

// 6. Run server
server.listen(PORT,()=>{
    console.log("media player server started at port:"+PORT);
})