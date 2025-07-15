const databaseType = {
    userType: "Admin",
    typeData: "datalocal",
}

async function connectToDatabase(dataName) {
    console.log(`conectado ao Banco ${dataName}`);
    
}

async function disconnectToDatabase() {
    console.log("Desconectando do Banco de dados");
}

export  {connectToDatabase, disconnectToDatabase, databaseType};