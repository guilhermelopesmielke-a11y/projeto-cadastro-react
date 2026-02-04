# 🚀 Sistema Fullstack de Cadastro de Usuários

Aplicação fullstack para gerenciamento de usuários, permitindo cadastro, listagem e exclusão de registros.

O projeto foi desenvolvido com foco em boas práticas modernas de desenvolvimento web, integração entre frontend e backend e organização profissional de arquitetura.

---

## 📌 Sobre o Projeto

Este sistema permite gerenciar usuários através de uma interface moderna e funcional, consumindo uma API REST desenvolvida em Node.js.

O objetivo principal do projeto é demonstrar habilidades em desenvolvimento fullstack, integração com banco de dados NoSQL e organização de projetos seguindo padrões utilizados no mercado.

---

## 🛠️ Tecnologias Utilizadas

### 🎨 Frontend
- React
- Vite
- Styled Components
- Axios
- React Router DOM

### ⚙️ Backend
- Node.js
- Express
- Prisma ORM
- MongoDB Atlas

---

## 🧠 Arquitetura do Projeto

projeto-cadastro-react
├── backend
└── frontend-react


### Backend
Responsável por:

- Construção da API REST
- Regras de negócio
- Integração com banco de dados
- Manipulação e persistência de usuários

### Frontend
Responsável por:

- Interface do usuário
- Consumo da API
- Navegação entre páginas
- Experiência visual e interação

---

## 📷 Demonstração

### 📝 Tela de Cadastro de Usuários
<img width="1920" height="1080" alt="Captura de tela 2026-02-04 181307" src="https://github.com/user-attachments/assets/34d6529d-3be6-4f13-ac5c-2e4a230d56cf" />

### 📋 Tela de Listagem de Usuários
<img width="1920" height="1080" alt="Captura de tela 2026-02-04 181446" src="https://github.com/user-attachments/assets/5f352c04-1296-4513-a70c-d2acb7ad24a7" />

### 📋 Tela do Banco de Dados dos Usuários
<img width="1920" height="1020" alt="Captura de tela 2026-02-04 181737" src="https://github.com/user-attachments/assets/3cc033d2-f147-434a-9937-7cb40377caa3" />

---

## ⚙️ Como Executar o Projeto Localmente

### 🔹 1. Clonar o Repositório

git clone https://github.com/guilhermelopesmielke-a11y/projeto-cadastro-react.git


---

## 🔧 Configuração do Backend

### Acesse a pasta do backend

cd backend


### Instale as dependências

npm install


### Configure as variáveis de ambiente

Crie um arquivo `.env` baseado no `.env.example`

Exemplo:

DATABASE_URL="sua_string_mongodb"
PORT=3000


### Executar servidor

npm run dev


Backend rodará em:

http://localhost:3000


---

## 💻 Configuração do Frontend

### Acesse a pasta do frontend

cd frontend-react


### Instale as dependências

npm install


### Executar aplicação

npm run dev


Frontend rodará em:

http://localhost:5173


---

## 🌐 Endpoints da API

### ➕ Criar Usuário
POST /users


### 📄 Listar Usuários
GET /users


### ❌ Remover Usuário
DELETE /users/:id


---

## 📦 Estrutura de Pastas

### Backend

backend
├── prisma
├── server.js
├── package.json
└── .env


### Frontend

frontend-react
├── src
│ ├── components
│ ├── pages
│ ├── services
│ ├── styles
│ └── routes
├── package.json
└── vite.config.js


---

## 📚 Conceitos Aplicados

- Integração completa entre React e Node.js
- Consumo e manipulação de APIs REST
- Uso do Prisma ORM com MongoDB
- Separação de responsabilidades entre frontend e backend
- Organização modular de componentes React
- Gerenciamento de rotas no frontend
- Estruturação de projeto fullstack escalável

---

## 📈 Melhorias Futuras

- Implementar autenticação JWT
- Validação avançada de dados
- Testes automatizados
- Deploy completo da aplicação
- Paginação e filtros de busca
- Tratamento global de erros
- Melhorias na experiência do usuário

---

## 🌍 Deploy

Deploy será disponibilizado futuramente.

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Lopes Mielke**

🔗 GitHub  
https://github.com/guilhermelopesmielke-a11y

---

## 📄 Licença

Este projeto está sob a licença MIT.
