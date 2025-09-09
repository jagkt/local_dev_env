# local_dev_env

A streamlined **local development environment** for Node.js and Python services using Docker, Docker Compose, and Makefile commands for easy setup and development.

I wrote an article to illustrate this process on dev.to; click [here](https://dev.to/jagkush/docker-setup-a-local-js-and-python-development-environment-2ffc) to read.

---

##  Features

- **Polyglot apps:** Includes both a **FastAPI (Python)** service and a **Node.js (Express)** service.
- **Containerized workflow:** Uses Docker (with a Dockerfile for Python) and a pre-built Node image to ensure consistent environments.
- **Easy orchestration:** Docker Compose brings up all services with a single command.
- **Developer-friendly:** A `Makefile` abstracts common commands (`up`, `logs`, `down`) for maximum productivity.

---

##  Tech Stack

- **Python (FastAPI)** – Implements a simple REST API in `py/`, packaged via Docker.
- **Node.js (Express)** – A lightweight Express server defined in `node/`, run from the official Node image.
- **Docker & Docker Compose** – Full multi-service orchestration defined in `docker-compose.yml`.
- **Makefile** – Wraps Docker workflow commands into easy-to-use targets for efficiency.

---

##  Quick Start

```bash
git clone https://github.com/jagkt/local_dev_env.git
cd local_dev_env
```

### Bringing up both services:
```bash
make up
```

### Check services in your browser:
- **Python (FastAPI):** http://localhost:8000
- **Node.js (Express):** http://localhost:5000

### Tail logs:
```bash
make py_log
make node_log
```

### Bring down all services:
```bash
make down
```
### Alternatively, without make, you can run:
```bash
docker-compose up -d
```
