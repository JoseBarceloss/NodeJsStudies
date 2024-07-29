import inquirer from 'inquirer'
import chalk from 'chalk'


async function obterDados() {
    let respostas;

    try {
        respostas = await inquirer.prompt([
            {type: 'input', name: 'nome', message: 'Qual o seu nome?',
                validate: function (nome) {
                    if (nome.length < 3) {
                        return 'O nome deve ter no mínimo 3 caracteres'
                    }
                    return true
                }
            },
            {type: 'input', name: 'idade', message: 'Qual a sua idade?',
                validate: function (idade) {
                    if (isNaN(idade)) {
                        return 'Digite um número'
                    } if (idade < 0) {
                        return 'Digite um número acima de 0'
                    }
                    return true
                }
            },
        ]);
    }
    catch (err) {
        console.error(chalk.red('Erro ao obter dados: ', err))
        return;
    }

    console.log(
        chalk.black.bgYellow(`Olá, ${respostas.nome}! Você tem ${respostas.idade} anos.`)
    )
}

obterDados()

//o erro que infrentei foi que estava dando o console fora do Try Cat para pegar o nome e a idade do usuário e não estava conseguindo pegar os dados.
//  entao fiz uma let e peguei os dados a partir do let sem ter que colocar o console dentro do try cat.