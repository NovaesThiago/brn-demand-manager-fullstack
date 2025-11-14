# 🚀 BRN Demand Manager

Sistema interno para gestão centralizada de demandas técnicas de provedores de internet. Desenvolvido para consultorias especializadas em redes de computadores que oferecem suporte técnico para diversos ISPs (Internet Service Providers).

## 📋 Sobre o Projeto

Este sistema resolve o problema de gestão informal de demandas (planilhas e e-mails) através de uma plataforma centralizada que permite:

- ✅ **Cadastro de provedores** atendidos pela consultoria
- ✅ **Registro de demandas técnicas** com tipos específicos (Diagnóstico, Manutenção, Configuração, etc.)
- ✅ **Acompanhamento de status** e histórico completo de ações
- ✅ **Filtros avançados** por status e provedor
- ✅ **Documentação técnica** integrada de todas as intervenções

### 🎯 Exemplo de Fluxo

1. **Provedor** "BRNX Fibra" reporta lentidão na rede
2. **Atendente** registra demanda do tipo "Diagnóstico" com status "Pendente"
3. **Consultor** analisa, aplica correções e documenta as ações
4. **Sistema** mantém histórico completo para consultas futuras
5. **Cliente** recebe relatório final da atividade

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** + **TypeScript**
- **Express.js** - Framework web
- **Prisma ORM** - Banco de dados
- **Zod** - Validação de dados
- **PostgreSQL** - Banco de dados principal
- **Docker** + **Docker Compose** - Containerização

### Ferramentas
- **Swagger/OpenAPI** - Documentação interativa
- **Supabase** - PostgreSQL em nuvem (opcional)

## 🏗️ Arquitetura do Sistema
```
src/
├── controllers/ # Lógica das rotas HTTP
├── services/ # Regras de negócio e validações
├── repositories/ # Camada de acesso ao banco (Prisma)
├── routes/ # Definição de endpoints da API
├── schemas/ # Schemas de validação com Zod
└── config/ # Configurações da aplicação
```

## 📦 Como Executar o Projeto

### Pré-requisitos
- Docker e Docker Compose instalados
- Acesso à internet (para conexão com Supabase)

### 🐳 Execução com Docker (Recomendado)

```bash
# 1. Clone o repositório
git clone <https://github.com/NovaesThiago/brn-demand-manager-backend.git>
cd brn-demand-manager

# 2. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações

# 3. Execute a aplicação
docker-compose up -d

# 4. Acesse a aplicação
# API: http://localhost:3000
# Documentação: http://localhost:3000/docs

###👨‍💻 Desenvolvimento Local

# 1. Instale as dependências
npm install

# 2. Configure o banco de dados
npx prisma generate
npx prisma db push

# 3. Execute em modo desenvolvimento
npm run dev

# 4. Acesse: http://localhost:3000

```
### 📡 Endpoints da API
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

### 🗃️ Modelos de Dados

**Provider (Provedor)**
```typescript
{
  id: number;
  name: string;           // Nome fantasia
  email: string;          // Email de contato
  contact: string;        // Telefone/contato
  responsible: string;    // Nome do responsável
  createdAt: Date;
  updatedAt: Date;
}
```

**Demand (Demanda Técnica)**
```typescript
{
  id: number;
  title: string;          // Título da demanda
  description: string;    // Descrição detalhada
  type: 'Diagnóstico' | 'Manutenção' | 'Configuração' | 'Instalação' | 'Outro';
  status: 'Pendente' | 'Em Andamento' | 'Concluída' | 'Cancelada';
  providerId: number;     // Provedor associado
  createdAt: Date;
  updatedAt: Date;
}
```

**Action (Ação Técnica)**
```typescript
{
  id: number;
  description: string;    // Descrição da ação realizada
  technician: string;     // Nome do técnico responsável
  demandId: number;       // Demanda associada
  createdAt: Date;
}
```

### 🐳Comandos Docker Úteis

```bash
# Ver logs da aplicação
docker-compose logs app

# Ver logs em tempo real
docker-compose logs -f app

# Parar aplicação
docker-compose down

# Rebuildar imagens
docker-compose build --no-cache

# Executar comandos no container
docker-compose exec app npx prisma studio
```

### 🔄 Fluxo de Desenvolvimento
1. Modificar código na pasta `src/`

2. Testar localmente com `npm run dev`

3. Atualizar Prisma schema se necessário

4. Gerar migrations: `npx prisma migrate dev`

5. Testar com Docker: `docker-compose up --build`

### 📊 Funcionalidades Implementadas
- CRUD completo de provedores, demandas e ações

- Validação de dados com Zod

- Filtros por status e provedor

- Documentação API com Swagger

- Containerização com Docker

- Tipagem TypeScript em todo o projeto

- Arquitetura organizada (MVC + Services + Repositories)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.