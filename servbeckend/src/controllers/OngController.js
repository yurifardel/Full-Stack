const crypto = require('crypto');
// conexão com o banco
const connection = require('../database/connection');

// exporta um obj com os metodos
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf  } = request.body;

    
        // gera 4 bytes de caracteres aleatorios e converte eles em uma string de tipo hexadecimal
        const id = crypto.randomBytes(4).toString('HEX'); // gera um id

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};