// Importa apenas a parte de Routes do Express
const { Router } = require('express')

// Importa Axios para que seja poss�vel acessar apis externas.
const axios = require('axios')

// Faz a utiliza��o das rotas.
const routes = Router()

// Cria primeira rota
// request - Requisi��o enviada.
// response - Resposta retornada.

// Tipos de Par�metros dentro do Express.
// Query Params: � utilizado apenas no m�todo GET, para filtrar/pagina��es de informa��es. (request.query)
// Route Params: � utilizado no m�todo PUT e DELETE, para identificar um recurso que ser� alterado/deletado. (request.params)
// Body: � utilizado principlamente no POST, s�o as informa��es que ser�o gravadas. (request.body)
routes.post('/devs', async (request, response) => {

    const { github_username } = request.body

    // Verifica API do github passando o usu�rio. 
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    console.log(apiResponse.data)

    return response.json({ message: 'Hello Teste'})
})

// M�todos HTTP que ser�o utilizados.
// get - Busca informa��o
// post - Criar informa��o
// put - Alterar informa��o
// delete - Excluir informa��o

// Exporta as rotas para que fique vis�vel ao APP
module.exports = routes