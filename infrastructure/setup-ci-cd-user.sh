#!/bin/bash

# Get AWS account ID
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# Create the CDK bootstrap policy
sed "s/\${AWS::AccountId}/$AWS_ACCOUNT_ID/g" cdk-bootstrap-policy.json > cdk-bootstrap-policy-processed.json
sed -i '' "s/\${AWS::Region}/us-east-1/g" cdk-bootstrap-policy-processed.json

# Create the policy
aws iam create-policy \
    --policy-name CDKBootstrapPolicy \
    --policy-document file://cdk-bootstrap-policy-processed.json

# Attach the policy to the CI/CD user
aws iam attach-user-policy \
    --user-name ci-cd \
    --policy-arn arn:aws:iam::${AWS_ACCOUNT_ID}:policy/CDKBootstrapPolicy

# Create access key for the CI/CD user
aws iam create-access-key \
    --user-name ci-cd

echo "Please save the AccessKeyId and SecretAccessKey for GitHub Secrets" 