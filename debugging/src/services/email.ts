async function getBaseEmail(senderName: String): Promise <string>{
    let base = `Ola ${senderName}, gostaria de me inscrever para uma vaga`;

    base += "\n estou deixando o meu curriculo";

    return base;
}

export {getBaseEmail}