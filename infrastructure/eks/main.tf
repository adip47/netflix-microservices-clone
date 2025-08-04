# Terraform config for AWS EKS
provider "aws" {
  region = "us-west-2"
}

module "eks" {
  source = "terraform-aws-modules/eks/aws"
  cluster_name = "netflix-clone-eks"
  subnets      = ["subnet-xyz"]
}