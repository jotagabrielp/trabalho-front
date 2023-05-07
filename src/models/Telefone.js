const mysql = requere('mysql2/promise');
const db = require('db.js');


class Telefone {
    constructor({id, numero}){
        this.id =  id;
        this.numero = numero;
      
    }
    // O método getAll retorna todos os telefones do banco de dados como uma lista de objetos de telefone
    async getAll(){
        const connection = await mysql.db;
        
        const novo =  connection.execute('SELECT * FROM telefones');

        return novo.map(novo => new Telefone(novo));  
    }
    // O método getById recebe um ID como parâmetro e retorna o telefone correspondente ou null se não existir.
    async getById(id){
        const connection = await mysql.db;

        const


    }



}

