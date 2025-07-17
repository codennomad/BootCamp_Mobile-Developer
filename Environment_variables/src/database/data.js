async function connectToDatabase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log("Conexao estabelecida")
    } else {
        console.log("Falha ao conectar!");
    }
}

export default connectToDatabase;