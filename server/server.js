import {createServer} from 'node:http';
import get from '../API/GET.js'
import post from '../API/POST.js';


const PORT = 4546;


const router = {

    GET: {'/students': get },

    POST: {'/create': post }
    
}


const server = createServer(async (req, res) => {

    router[req.method][req.url](req,res)

});


    


server.listen(PORT, () => {

    console.log(`Server listening on port: ${PORT}...`);
    
})


// curl http://localhost:4546/students

// curl -X POST http://localhost:4546/create -H "Content-Type: application/json" -d '{"id": , "name" : "", "school": }'














    

