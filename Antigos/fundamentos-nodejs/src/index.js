const { response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());
// sempre começa no terminal com "yarn dev"



// GET - buscar informaçõe dentro do servidor 
// POST - inserir uma informação no servidor
// PUt - alterar uma informação no servidor 
// PATCH - alterar uma informação especifica 
// DELETE - deletar uma informação no servidor 


/*
Tipos de parametros

route params (exemplo  o /"id" o id é o parametro)=> Identificar um recurso, editar/deletar/buscar

Query params ()=>  paginação/ filtro 

Body params => Os objetos passados por inserção/ alteração   ( sempre utilisado como JSON)



*/


app.get("/courses", (request, response) => {
    const query = request.query
    console.log(query);clear 
    return response.json(["curso 1", "curso 3", "curso 2",]);
})

app.post("/courses", (request, response) => {
    const body = request.body
    console.log(body);
    return response.json(["curso 1", "curso 3", "curso 2","curso 4"]);
})
app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log(id);
    return response.json(["curso 6", "curso 3", "curso 2","curso 4"]);
})
app.patch("/courses/:id", (request, response) => {
    return response.json(["curso 6", "curso 3", "curso 7","curso 4"]);
})
app.delete("/courses/:id", (request, response) => {
    return response.json(["curso 6", "curso 7","curso 4"]);
})

app.listen(3333);

