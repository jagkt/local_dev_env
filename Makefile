up:
	docker compose up -d

down:
	docker compose down 

py:
	docker exec -ti py bash

node:
	docker exec -ti node sh

py_log:
	docker logs -ft --details py

node_log:
	docker logs -ft --details node