import chalk from "chalk";

const PromptSchemamain = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta (1 - QRCode ou (2- PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escplha apenas 1 e 2"),
        required: true,
    },
];

export default PromptSchemamain;