module.exports = ( { req }) => {
    // console.log('Contexto')
    // return {
    //     texto: 'Curso GraphQL!',
    //     imprimir() {
    //         console.log('Curso GraphQL!!!!')
    //     }
    // }

    const auth = req.headers.authorization
    console.log(auth)
}