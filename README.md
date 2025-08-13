<p align="center">
  <img src="banner (2).png" alt="Netflix Microservices Clone" width="60%" />
</p>


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
netflix-microservices-clone/
├── infrastructure/ # Terraform for AWS EKS
├── charts/ # Helm charts for each microservice
├── services/ # Microservice source code (Dockerized)
├── argocd/ # ArgoCD app configs
├── .github/workflows/ # GitHub Actions CI/CD pipelines
├── README.md
└── LICENSE


---

## 🚀 Deployment Overview

### 1. ✅ Infrastructure (Terraform)
cd infrastructure/eks
terraform init
terraform apply
Creates:

AWS VPC

EKS Cluster

IAM roles

Kubeconfig context

2. 🐳 Docker & GitHub Actions
Each service is:

Built using Docker

Pushed to DockerHub or ECR via GitHub Actions

Automatically deployed using Helm via ArgoCD

✅ Update in services/* triggers GitHub Actions → image build → Helm upgrade via ArgoCD.

3. ☸️ Helm Charts
Each service has its own Helm chart:

bash
Copy
Edit
cd charts/user-service
helm upgrade --install user-service . -f values.yaml
4. 🎯 ArgoCD (GitOps)
Install ArgoCD:

kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
Apply ArgoCD Application:

kubectl apply -f argocd/app.yaml
Access ArgoCD UI and sync applications.

🧪 Local Development

cd services/user-service
docker build -t user-service:dev .
docker run -p 8001:8001 user-service:dev

