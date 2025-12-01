# Desafio 1 – Containers em Rede

Este desafio demonstra a criação de dois containers Docker que se comunicam entre si dentro de uma rede customizada.  
Um container atua como **servidor** (porta 8080) e o outro como **cliente**, realizando requisições contínuas ao servidor.

---

## Estrutura do Desafio

```
desafio1/
├── server/
│   ├── Dockerfile
│   └── index.js
└── client/
    ├── Dockerfile
    └── index.js
```

---

## Passos para Execução

### 1. Criar a rede Docker

```bash
docker network create proj2-net
```

---

### 2. Build das imagens

```bash
docker build -t desafio1-server ./server
docker build -t desafio1-client ./client
```

---

### 3. Subir o servidor

```bash
docker run -d --name server --network proj2-net -p 8080:8080 desafio1-server
```

---

### 4. Subir o cliente

```bash
docker run --name client --network proj2-net desafio1-client
```

---

## Prints de Execução

### Resposta do servidor em `localhost:8080`
![server_response](b43d585a-3bd9-4c3e-9290-3d6b08da4d37.png)

---

### Containers em execução (Docker Desktop)
![docker_running](22ca47f9-a547-4354-8312-d01678e61954.png)

---

### Cliente enviando requisições continuamente
![client_logs](b44b1d18-6801-4c11-acc8-cb7349de3efb.png)

---

## Como Validar o Funcionamento

### Verificar logs do cliente
```bash
docker logs -f client
```

Saída esperada:

```
{"ok":true}
{"ok":true}
{"ok":true}
...
```

### Verificar logs do servidor
```bash
docker logs -f server
```

### Acessar no navegador
```
http://localhost:8080
```

---

## Conclusão

Este desafio comprova:

- Comunicação entre containers via rede Docker
- Resolução automática de nomes (DNS interno)
- Execução simultânea de servidor e cliente em ambientes isolados

---

Arquivo gerado automaticamente.
