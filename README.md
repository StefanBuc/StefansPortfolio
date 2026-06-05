# Stefan's Portfolio

---

Welcome to my personal portfolio!  
This site showcases my software projects, skills, and experiences as a Computer Science student at the University of Guelph.  
It’s designed to reflect both my technical ability and design sense.

[Visit my portfolio](https://portfolio.stefanb.me)

## Docker deployment

On the server:

```sh
git pull
docker compose up -d --build
```

The container serves the built Vite site through nginx on host port `8088`.
