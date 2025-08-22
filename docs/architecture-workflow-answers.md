# Architecture & Workflow Short Answers

## **1. Scaling: Designing the Backend for 100k+ Concurrent Users**

To handle 100k+ concurrent users, I would adopt a **serverless architecture** using **API Gateway + AWS Lambda** to scale automatically based on demand. For database scalability, I would use **RDS Proxy** to pool connections, **RDS read replicas** for horizontal scaling of reads, and **ElastiCache** to reduce database load for frequent queries. Additionally, I would use **CloudFront CDN** for static asset delivery and implement **auto-scaling policies** on key services. This combination ensures high performance, fault tolerance, and cost efficiency.

---

## **2. CI/CD: Continuous Deployment for React Native + AWS**

I would set up a CI/CD pipeline using **GitHub Actions** or **AWS CodePipeline** integrated with **Expo Application Services (EAS)** for React Native. On every commit to the main branch, the pipeline would run automated tests, linting, and build the React Native bundles. The backend would be deployed to AWS Lambda via **Infrastructure as Code (IaC)** using AWS SAM or CDK for consistent environments. Staged deployments (dev → staging → production) would ensure safe rollouts while minimizing downtime.

---

## **3. Team Workflow: Fast Iteration Without Sacrificing Quality**

To balance speed and quality, I would adopt a **feature-branch + pull request workflow** with **peer reviews** to catch issues early. Automated tests, linting, and type checking would run on every PR to maintain code quality. I’d also implement **feature flags** to safely deploy incomplete features without blocking releases. Finally, regular standups and retrospectives ensure alignment while maintaining a rapid, feedback-driven development cycle.
