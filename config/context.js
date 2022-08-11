module.exports = async ( { req }) => {
    // console.log('Contexto')
    // return {
    //     texto: 'Curso GraphQL!',
    //     imprimir() {
    //         console.log('Curso GraphQL!!!!')
    //     }
    // }

    //Em desenvolvimento 
    await require('./simularUsuarioLogado')(req)

    const auth = req.headers.authorization
    console.log(auth)   
}