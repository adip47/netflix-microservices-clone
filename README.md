# 🎬 Netflix Microservices Clone

A cloud-native microservices application inspired by Netflix architecture, built using:

- 🐳 Docker (Containerization)
- ☸️ Kubernetes (AWS EKS)
- 🎯 Helm (K8s Package Manager)
- 🚀 ArgoCD (GitOps-based Deployment)
- 🔁 GitHub Actions (CI/CD)
- ☁️ AWS (EKS, S3, IAM, VPC)
- 📦 Terraform (Infrastructure as Code)

---

## 📦 Microservices

| Service               | Description                        | Port |
|------------------------|------------------------------------|------|
| `user-service`         | Manages user accounts & profiles   | 8001 |
| `auth-service`         | Handles authentication & JWT       | 8002 |
| `video-service`        | Streams video content              | 8003 |
| `watch-history-service`| Tracks user viewing history        | 8004 |

Each service:
- Is Dockerized
- Has its own Helm chart
- Deployed independently to EKS via GitOps

---

## 📁 Project Structure

