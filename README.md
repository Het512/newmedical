# Static Website with AWS Infrastructure

This project contains a static website deployed on AWS using S3 and CloudFront, with automated CI/CD through GitHub Actions.

## Infrastructure

The infrastructure is built using AWS CDK and includes:
- S3 bucket for static website hosting
- CloudFront distribution for content delivery
- Origin Access Identity (OAI) for secure access

## Development

### Prerequisites
- Node.js 20.x
- AWS CDK
- AWS CLI configured with appropriate credentials

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the website:
   ```bash
   npm run build
   ```

### Deployment
The website is automatically deployed through GitHub Actions when changes are pushed to the main branch.

## CI/CD Pipeline

The CI/CD pipeline includes:
1. Building the website
2. Deploying to S3
3. Invalidating CloudFront cache

## Environment Variables

The following environment variables are required for deployment:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` (default: us-east-1)

## License

MIT 