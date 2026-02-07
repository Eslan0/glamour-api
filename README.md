# API

## Structure

``` pipline
glamour-api/
├── src/
│   ├── config/          # Variáveis de ambiente e conexão DB
│   ├── controllers/     # Validação de entrada e resposta (HTTP)
│   ├── middlewares/     # Erros, Auth, Logging
│   ├── models/          # Schemas do Mongoose
│   ├── routes/          # Definição das rotas
│   ├── services/        # Regras de negócio
│   └── server.ts        # Entry point
├── .env                 # Credenciais do Atlas
├── tsconfig.json        # Configuração do TS
└── package.json
```

## Dependencies

``` pipline
glamour-api/
├── @koa/cors@5.0.0
├── @types/koa-bodyparser@4.3.13
├── @types/koa-router@7.4.9
├── @types/koa@3.0.1
├── dotenv@17.2.4
├── koa-bodyparser@4.4.1
├── koa-router@14.0.0
├── koa@3.1.1
├── mongoose@9.1.6
├── ts-node-dev@2.0.0
└── typescript@5.9.3
```
