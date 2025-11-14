# BRN Demand Manager - Sistema de Gestão de Demandas Técnicas

## 📋 Descrição do Projeto

Sistema interno desenvolvido para centralizar a gestão de demandas técnicas de provedores de internet, conforme especificado no teste técnico para Desenvolvedor Fullstack.

**Cenário:** Equipe de consultoria especializada em redes de computadores que oferece suporte técnico a diversos provedores de internet (ISPs).

## 🎯 Objetivo do Sistema

Centralizar a gestão das demandas dos provedores, permitindo:
- Cadastro de provedores atendidos
- Registro de novas demandas técnicas
- Acompanhamento de status e histórico de ações
- Documentação técnica completa das intervenções

## 🛠️ Stack Tecnológica

### Backend
- **Node.js** com **TypeScript**
- **Prisma ORM** + **PostgreSQL**
- **Express.js** + **CORS**
- **Docker** + **Docker Compose**

### Frontend
- **React** com **TypeScript**
- **TailwindCSS** para estilização
- **React Router** para navegação
- **Context API** para gerenciamento de estado
- **Axios** para consumo de API

## 📁 Estrutura do Projeto
```
brn-demand-manager/
├── backend/ # API RESTful
│ ├── src/
│ │ ├── controllers/ # Lógica das rotas
│ │ ├── routes/ # Definição de endpoints
│ │ └── server.ts # Configuração do servidor
│ ├── prisma/ # Schema do banco de dados
│ └── Dockerfile
├── frontend/ # Interface do usuário
│ ├── src/
│ │ ├── components/ # Componentes reutilizáveis
│ │ ├── pages/ # Páginas da aplicação
│ │ ├── hooks/ # Custom hooks
│ │ ├── contexts/ # Gerenciamento de estado
│ │ └── services/ # Cliente da API
│ ├─ Dockerfile
└ └─ docker-compose.yml # Orquestração de containers
```


## 🗃️ Modelo de Dados

### Entidades Principais

#### Provider (Provedor)
- `id` (Int, autoincrement)
- `name` (String) - Nome fantasia
- `email` (String, unique) - Email de contato
- `contact` (String?, optional) - Telefone
- `responsible` (String?, optional) - Responsável técnico
- `createdAt` (DateTime)

#### Demand (Demanda)
- `id` (Int, autoincrement)
- `title` (String) - Título da demanda
- `description` (String) - Descrição detalhada
- `type` (DemandType) - Tipo de solicitação
- `status` (DemandStatus) - Status atual
- `providerId` (Int) - Provedor relacionado
- `createdAt` (DateTime)

#### Action (Ação Técnica)
- `id` (Int, autoincrement)
- `label` (String) - Descrição da ação
- `technician` (String) - Nome do técnico
- `done` (Boolean) - Concluída
- `demandId` (Int) - Demanda relacionada
- `createdAt` (DateTime)

### Enums

#### DemandType
- `DIAGNOSTICO` - Análise de problemas
- `MANUTENCAO` - Manutenção preventiva/corretiva
- `CONFIGURACAO` - Configuração de equipamentos
- `INSTALACAO` - Instalação de novos serviços
- `OUTRO` - Outros tipos

#### DemandStatus
- `PENDENTE` - Aguardando atendimento
- `EM_ANDAMENTO` - Em progresso
- `CONCLUIDA` - Finalizada com sucesso
- `CANCELADA` - Cancelada

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Docker e Docker Compose instalados
- Git para clonagem do repositório

### Execução com Docker

```bash
# 1. Clone o repositório
git clone <https://github.com/NovaesThiago/brn-demand-manager-fullstack>
cd brn-demand-manager-fullstack

# 2. Execute com Docker Compose
docker-compose up -d

# 3. Acesse a aplicação
# Frontend: http://localhost:5173
# Backend API: http://localhost:3000
```
### Execução em Desenvolvimento

```bash
# Backend
cd backend
npm install
npx prisma generate
npx prisma db push
npm run dev

# Frontend (outro terminal)
cd frontend
npm install
npm run dev
```
## 📡 Endpoints da API
### 🔧 Providers (Provedores)

- `GET /providers` - Listar todos os provedores

- `GET /providers/:id` - Buscar provedor por ID

- `POST /providers` - Criar novo provedor

- `PUT /providers/:id` - Atualizar provedor

- `DELETE /providers/:id` - Remover provedor

### 📋 Demands (Demandas Técnicas)

- `GET /demands` - Listar demandas (com filtros opcionais)

- `GET /demands/:id` - Buscar demanda por ID

- `POST /demands` - Criar nova demanda

- `PUT /demands/:id` - Atualizar demanda

- `DELETE /demands/:id` - Remover demanda

**Filtros disponíveis para GET /demands:**

- `?status=Pendente` - Filtrar por status

- `?providerId=1` - Filtrar por provedor

### 🔨 Actions (Ações Técnicas)

- `GET /actions` - Listar todas as ações

- `GET /actions/demand/:demandId` - Listar ações de uma demanda específica

- `GET /actions/:id` - Buscar ação por ID

- `POST /actions` - Criar nova ação técnica

- `PUT /actions/:id` - Atualizar ação

- `DELETE /actions/:id` - Remover ação


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
