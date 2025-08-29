# Ermal Baki Portfolio Website

[![Portfolio Live](https://img.shields.io/badge/Live-GitHub%20Pages-blue)](https://ErmalMC.github.io/)
[![CI/CD](https://github.com/ErmalMC/ermalmc.github.io/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/ErmalMC/ermalmc.github.io/actions/workflows/ci-cd.yml)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://hub.docker.com/repository/docker/ermalmc/portfolio)
[![Try It](https://img.shields.io/badge/Play%20with%20Docker-Launch-blue?logo=docker)](https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/ErmalMC/ermalmc.github.io/main/docker-compose.yml)


This is my personal portfolio website showcasing my experience, projects, and technical skills.

---

## Built With
- **React**  
- **TailwindCSS**  
- **Vite**

---

## DevOps & Deployment
- **Dockerized:** Runs entirely in a Docker container for consistent environments.  
- **CI/CD:** Automated build, Docker image creation, and deployment to GitHub Pages via GitHub Actions.  
- **DockerHub:** Docker images are versioned and published for easy local testing.

---

## Run Locally with Docker

```bash
# Pull the latest Docker image
docker pull ermalmc/portfolio:latest

# Run the portfolio locally
docker run -p 3000:80 ermalmc/portfolio:latest
