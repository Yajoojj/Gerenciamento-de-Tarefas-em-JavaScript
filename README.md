# 🚀 Gerenciamento de Tarefas em JavaScript

Este é um sistema de gerenciamento de tarefas simples, criado em **JavaScript**, que permite adicionar tarefas, listá-las, marcar como concluídas, e atualizar atributos como prioridade e data de vencimento.

## 📜 Funcionalidades

- **Adicionar tarefas** com título, descrição, prioridade e data de vencimento.
- **Listar todas as tarefas** ou filtrar por status (Pendente, Concluída).
- **Marcar tarefas como concluídas**.
- **Atualizar a prioridade** de uma tarefa.
- **Alterar a data de vencimento** de uma tarefa.

## 🛠 Tecnologias Usadas

- **JavaScript** (ES6+)
- **Promises** e **setTimeout** para simulação de atraso no processo de adicionar tarefas.
- **Programação Orientada a Objetos (POO)** para a modelagem das tarefas e do gerenciador.
- WebStorm

## 📌 Como Rodar o Projeto

1. **Clone o repositório** para sua máquina local:

    ```bash
    git clone https://github.com/Yajoojj/gerenciamento-tarefas-js.git
    ```

2. **Abra o arquivo** `index.html` no seu navegador, ou se preferir, execute o código diretamente em um ambiente de desenvolvimento JavaScript como o [JSFiddle](https://jsfiddle.net/) ou [CodePen](https://codepen.io/).

3. **Execute o código no console do navegador** (ou em um ambiente Node.js) para ver as tarefas sendo adicionadas, atualizadas e listadas.

## 📤 Exemplo de Uso

```javascript
// Criação de uma instância do gerenciador de tarefas
const manager = new TaskManager();

// Adicionando tarefas
manager.addTask("Estudar JavaScript", "Revisar closures e promises", "Alta", "2025-03-10");
manager.addTask("Praticar exercícios", "Resolver problemas no Codewars", "Média", "2025-03-12");

// Listando todas as tarefas
console.log(manager.listTasks());

// Filtrando tarefas por status
console.log(manager.listTasks("Pendente"));

// Marcando uma tarefa como concluída
manager.completeTask(1);

// Atualizando prioridade e data de vencimento de uma tarefa
manager.updateTaskPriority(2, "Alta");
manager.updateTaskDueDate(2, "2025-03-15");

// Exibindo tarefas após as atualizações
console.log(manager.listTasks());
````

## 📂 Estrutura de Diretórios

/gerenciamento-tarefas-js  
│  
├── index.html          # Arquivo HTML para testar o código diretamente no navegador (opcional)  
├── script.js           # Arquivo JavaScript com o código das funcionalidades  
└── README.md           # Este arquivo de documentação


