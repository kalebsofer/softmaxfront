# Softmax Website

### [softmaxco.io](https://softmaxco.io)

## Overview

This repository contains the source code for the Softmax corporate website. Built with Next.js and React, it serves as the primary online presence for Softmax Ltd, showcasing our services, terms, and privacy policy.

## Table of Contents

- [Softmax Website](#softmax-website)
    - [softmaxco.io](#softmaxcoio)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Development](#development)
    - [Branch Naming](#branch-naming)
  - [Deployment](#deployment)
    - [Staging](#staging)
    - [Production](#production)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/softmax/corporate-website.git
   cd corporate-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env.local
   ```
   Edit `.env.local` with your specific configuration.

4. Start the development server:
   ```
   npm run dev
   ```

## Development

### Branch Naming

Use the following format for branch names:
- Feature branches: `feature/description-of-feature`
- Bug fix branches: `fix/description-of-bug`

## Deployment

Our CI/CD pipeline automatically deploys changes to the `main` branch to our staging environment. Production deployments are manually triggered.

### Staging
- URL: https://staging.softmaxco.io
- Automatically deployed on merges to `main`

### Production
- URL: https://softmaxco.io
- Manually triggered via our deployment dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License

Copyright (c) 2023 Softmax Ltd