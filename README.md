# AngularChallenge

Angular 7

na primeira página teremos um formulário para consulta de CPF, essa consulta
deverá ter a possibilidade de dois caminhos, o de insucesso, onde o CPF inserido não é valido, gerando uma mensagem de erro na tela, e o feliz, onde
o CPF é localizado e o usuário direcionado a tela dois. Na “tela dois”, após ser inserido um CPF válido no formulário, deverá carregar os dados do cooperado.
Importante seguir o modelo de interface que segue abaixo

## Caminho de insucesso (Caminho infeliz) 😢

Escrever um CPF Invalido no campo, por exemplo: 111.111.111-11
deverá receber uma mensagem de CPF não é válido
assim como outras mensagens de validação, required, lenght.

Escrever um CPF Válido mas o mesmo não existir na base de Dados
deverá receber uma mensagem de "Coperado não encontrado."

## Caminho de sucesso (Caminho feliz) 😄

Escrever um CPF válido no campo que esteja cadastrado na base de dados
438.265.920-50 - EU 😄
881.628.750-00 - Mariane de Souza Oliveira (que tava na tela)

assim o resultado esperado é que renderize os dados do cooperado e as contas conforme as telas do figma

## Como rodar???

Estou usando angular 7, e Node para a api, tudo ta rodando com a versão `v16.20.2` do node
Achei que seria interessante ter uma API para consumo de dados, coloquei aqui mesmo dentro do projeto, para facilitar

Para inciar a api basta rodar `npm run start-api` só basta isso, já vai instalar as dependencias e funcionar normal
A api roda na `http://localhost:3000`

Para iniciar o front basta rodar o `ng serve`
o endereço é o `http://localhost:4200/` redirecionei todas as rotas para a `home`
só entrar que ja vai para a tela inicial

## Problemas ⚠️⚠️⚠️⚠️⚠️

Não cosnegui os icones da barra de navegação e alguns icones que estão na tela do desafio
então usei o material icons mesmo

não consegui rodar os testes, acredito que seja por
algum B.O de incompatibilidade de versões do karma webpack e do jasmine

## Observações

muitos itens estão na tela para seguir o design, os botões de notificação, da barra de navegação... ETC
mas quanto a todo fluxo de CPF que foi pedido no desafio ta 100% ✅
