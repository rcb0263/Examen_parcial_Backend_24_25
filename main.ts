// Update a document
import {MongoClient, ObjectId} from "mongodb"
import { libro, libroModel } from "./types.ts";
// Replace the uri string with your MongoDB deployment's connection string
const url = Deno.env.get("MONGO_URL") || "mongodb+srv://Avalero:Avalero0811@cluster0.a4nz0xh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
if(!url){

}
console.info(url)
const client = new MongoClient(url);

const handler = async (req: Request) : Promise<Response> =>{

  const biblioteca = client.db("sample_mflix");

  const libros = biblioteca.collection("libros");
  const autores = biblioteca.collection("autores");

  const Method = req.method
  const web = req.url
  console.info(web)
  let path = ""
  for(let i= 22; i<web.length; i++){
    path += web.at(i)
  }

  if(Method === "POST"){
    if(path === "libro"){
      const body = libro1
      const result = await libros.insertOne({body});
      return new Response("Funciona: "+ result.insertedId)
    }else if (path === "autor"){
      const body = autor1
      const result = await autores.insertOne({body});
      return new Response("Funciona: "+ result.insertedId)
    }else{
      return new Response("Error: wrong path")
    }
  }else if(Method === "GET"){
    if(path === "libros"){
      let lista = await libros.find().toArray();
      return new Response("Funciona: "+ JSON.stringify(lista))

    }else if (path === "libro"){
      const query = { _id: "5fca76d4f4c2b5fbb788d123" };
      let result = await libros.findOne(query);

      return new Response("Funciona: "+ JSON.stringify(result))
    }else{
      return new Response("Error: wrong path")
    }

  }else if(Method === "PUT"){
    if (path === "libro"){

    }else{
      return new Response("Error: wrong path")
    }
  }else if(Method === "DELETE"){
    if (path === "libro"){
      const query = { _id: "5fca76d4f4c2b5fbb788d123" };
      const result = await libros.deleteOne(query);
      if (result.deletedCount === 1) {
        return new Response("Successfully deleted one document");
    } else {
     return new Response("document does not exist");
    }
    }else{
      return new Response("Error: wrong path")
    }
  }
  return new Response("url: "+ req.url+"\nlength: "+req.url.length+"\nat 22: "+req.url.at(22)+"\npath: "+path)
}

Deno.serve({port: 3000}, handler);



const libro1 ={
  "titulo": "1984",
  "autores": ["5fca76d4f4c2b5fbb788d121", "5fca76d4f4c2b5fbb788d122"],
  "copiasDisponibles": 5
};

const libroAct ={
  "id": "5fca76d4f4c2b5fbb788d123",
  "titulo": "1984 (Edición 2024)",
  "autores": ["5fca76d4f4c2b5fbb788d121"],
  "copiasDisponibles": 10
}

const autor1={
  "nombre": "George Orwell",
  "biografia": "George Orwell fue un escritor y periodista británico...",
}