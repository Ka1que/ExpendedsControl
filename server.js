// import { createServer } from 'node:http'


// const server = createServer((req, res) => {
//     res.write('oi')
//     res.write('<h1>TESTE</h1>')
//     return res.end()
// })

// server.listen(1212)

import { fastify } from 'fastify'

const server = fastify()

server.post('/home/post', ()=> {
    return 'Hello'
})

server.get('/home', ()=> {
    return 'Hello get'
})

server.put('/home/put', ()=> {
    return 'Hello put'
})

server.delete('/home/del', ()=> {
    return 'Hello del'
})

server.listen({
    port: 1212
})


