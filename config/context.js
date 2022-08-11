module.exports = async ( { req }) => {
    // console.log('Contexto')
    // return {
    //     texto: 'Curso GraphQL!',
    //     imprimir() {
    //         console.log('Curso GraphQL!!!!')
    //     }
    // }
const jwt = require('jwt-simple')
    //Em desenvolvimento 
    await require('./simularUsuarioLogado')(req)

    const auth = req.headers.authorization
    const token = auth && auth.substring(7)

    let usuario = null 
    let admin = false 
    
    if(token) {
        try{
            let conteudoToken = jwt.decode(token,
                process.env.APP_AUTH_SECRET)

                if(new Date(conteudoToken.exp * 1000) > new Date()) {
                    usuario = conteudoToken
                }
        }catch(e) {
            // token inválido  
        }
    }

    if(usuario && usuario.perfis) {
        admin = usuario.perfis.includes('admin')
    }

    const err = new Error('Acesso negado!')

    return{
        usuario,
        admin,
        validarUsuario() {
            if(!usuario) throw err 
        },
        validarUsuario() {
            if(!admin) throw err 
        }
    }
     
}