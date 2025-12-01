# Projeto Docker – Desafios de Containerização

Este repositório reúne cinco desafios práticos desenvolvidos na disciplina **Fundamentos da Computação Concorrente, Paralela e Distribuída (FCCPD)**.  
Os exercícios exploram desde conceitos básicos de containerização, redes e volumes até arquiteturas completas de microsserviços com API Gateway.

---

## Estrutura do Repositório

```
projeto2/
├── README.md
├── desafio1/                 # Containers em Rede
│   ├── README.md
│   ├── server/
│   └── client/
├── desafio2/                 # Volumes e Persistência
│   ├── README.md
│   ├── app/
│   └── reader/
├── desafio3/                 # Docker Compose (Web + DB + Cache)
│   ├── README.md
│   ├── docker-compose.yml
│   └── web/
├── desafio4/                 # Microsserviços Independentes
│   ├── README.md
│   ├── service-a/
│   └── service-b/
└── desafio5/                 # API Gateway
    ├── README.md
    ├── docker-compose.yml
    ├── gateway/
    ├── users-service/
    └── orders-service/
```

Observação:  
Cada diretório possui seu próprio README com instruções completas, fluxos, arquitetura e exemplos de execução.

---

## Como Executar

Cada desafio pode ser executado individualmente.  
A navegação e os comandos variam conforme o ambiente operacional.

### Windows (PowerShell)

```
cd desafio1
.\docker_setup.ps1
.\docker_cleanup.ps1   # para limpar o ambiente
```

### Linux/Mac (Bash)

```
cd desafio1
chmod +x docker_setup.sh docker_cleanup.sh
./docker_setup.sh
./docker_cleanup.sh    # para limpar o ambiente
```

Os passos são semelhantes para os demais desafios, mudando apenas o diretório.

---

## Resumo de Cada Desafio

### Desafio 1 — Containers em Rede
Implementação de dois containers Docker que se comunicam entre si através de uma rede customizada.  
Demonstra o uso básico de redes Docker, resolução interna de nomes e comunicação entre um servidor e um cliente.

### Desafio 2 — Volumes e Persistência
Demonstração do uso de volumes Docker para persistência de dados utilizando PostgreSQL.  
Mostra como dados continuam acessíveis mesmo após a remoção e recriação de containers.

### Desafio 3 — Docker Compose
Orquestração de múltiplos serviços utilizando Docker Compose.  
Inclui um serviço Web Node.js integrado com PostgreSQL e Redis.  
Destaca dependências entre serviços, rede interna e volumes.

### Desafio 4 — Microsserviços Independentes
Dois microsserviços Node.js independentes, onde o Serviço B consome rotas fornecidas pelo Serviço A via HTTP.  
Demonstra comunicação interna e isolamento de serviços.

### Desafio 5 — Microsserviços com API Gateway
Criação de uma arquitetura completa com dois microsserviços internos (usuários e pedidos) e um API Gateway responsável por expor endpoints públicos e orquestrar as chamadas entre os serviços.

---

## Pré-requisitos

- Docker instalado e em execução  
- Docker Compose instalado  
- PowerShell (Windows) ou Bash (Linux/Mac)

---

## Tecnologias Utilizadas

- Docker  
- Docker Compose  
- Node.js  
- Express  
- PostgreSQL  
- Redis  

