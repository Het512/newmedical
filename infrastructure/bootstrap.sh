#!/bin/bash

# Get AWS account ID and region
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=${AWS_REGION:-"us-east-1"}

# Print current user and permissions
echo "Current AWS User:"
aws sts get-caller-identity

echo "Current IAM Policies:"
aws iam list-attached-user-policies --user-name ci-cd

# Bootstrap CDK with specific execution policy
cdk bootstrap aws://${AWS_ACCOUNT_ID}/${AWS_REGION} \
    --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
    --trust ${AWS_ACCOUNT_ID}

# Install dependencies
npm install

# Clean the dist directory before build
rm -rf dist/

# Build the project
npm run build 