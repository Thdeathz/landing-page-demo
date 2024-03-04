ifeq (,$(wildcard .env))
$(shell cp .env.example .env)
endif

include .env

devup:
	docker compose up -d --remove-orphans

devrun:
	docker exec -it $(COMPOSE_PROJECT_NAME)-web-1 yarn dev

devinstall:
	@docker exec -it ${COMPOSE_PROJECT_NAME}-web-1 yarn
	@docker exec -it $(COMPOSE_PROJECT_NAME)-api-1 composer install
	@test -f api/.env || (cp api/.env.example api/.env && docker exec -it ${COMPOSE_PROJECT_NAME}-api-1 php artisan key:generate)
	@docker exec -it $(COMPOSE_PROJECT_NAME)-api-1 sh -c "chown -R :www-data storage/* bootstrap/cache"

devmigrate:
	docker exec -it $(COMPOSE_PROJECT_NAME)-api-1 php artisan migrate --seed

devfresh:
	docker exec -it $(COMPOSE_PROJECT_NAME)-api-1 php artisan migrate:fresh --seed

devdown:
	docker compose down --remove-orphans

devclean: devdown
	@docker rmi $$(docker images -a -q)
	@docker volume rm $$(docker volume ls -q)
	@docker network rm $$(docker network ls -q)
