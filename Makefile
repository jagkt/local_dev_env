up:
	docker compose up -d

down:
	docker compose down 

sh_py:
	docker exec -ti py bash

sh_node:
	docker exec -ti node bash