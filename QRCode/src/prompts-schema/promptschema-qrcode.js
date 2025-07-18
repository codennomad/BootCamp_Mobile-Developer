import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gera o QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo (1- NORMAL ou (2- TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas 1 ou 2"),
        required: true,
    },
];

export default promptSchemaQRCode;