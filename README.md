# React + Laravel Project

## Requirement

- Docker >= 20.10
- Docker compose plugin
- NodeJS 18

## How to use it

Run the following command in the root directory of project:

```bash
make devup
```

This will create a `.env` file in the root directory. You can configure environment variables in this file according to your needs.

Install require dependencies:

```bash
make devinstall
```

Migrate and seed dummy data:

```bash
make devmigrate
make devfresh
```

Run the application:

```bash
make devrun
```

The application will be accessible at:

- Web: [http://project.localhost:3000](http://project.localhost:3000)
- Api: [http://project.localhost:3000/api/](http://project.localhost:3000/api/)
- Traefik: [http://traefik.localhost:3000](http://traefik.localhost:3000)

Stop the application:

```bash
make devdown
```
