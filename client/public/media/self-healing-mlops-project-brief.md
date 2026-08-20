# Self-Healing MLOps Pipeline

> **A resilient sentiment-analysis deployment that watches for model confidence drift and returns traffic to a stable model before degraded inference becomes a product problem.**

## The operating problem

A production model can remain online while becoming less dependable. This project treats confidence drift as an operational signal: when confidence behavior crosses a defined boundary, the deployment should have a safe path back to a known-good model rather than leaving users with quietly degraded results.

## The system approach

The pipeline combines a sentiment-analysis API with a CI/CD and monitoring stack. Jenkins automates delivery; Docker packages the service; Kubernetes manages blue-green deployment paths; and Prometheus, Grafana, and Alertmanager provide observability and alerting around model behavior. The recovery design directs traffic to a stable model version when confidence drift is detected.

| Layer | Responsibility |
| --- | --- |
| Application | Sentiment-analysis API serving model inference |
| Delivery | Jenkins-driven CI/CD with containerized releases |
| Deployment | Kubernetes blue-green strategy for controlled switching |
| Monitoring | Prometheus metrics, Grafana dashboards, and Alertmanager notifications |
| Recovery | Rollback to a stable model path when confidence drift is detected |

## Design decisions

The project favors observable releases over opaque automation. Blue-green deployment makes the recovery route explicit; containerization keeps environments repeatable; and monitoring turns a model-quality signal into an operational decision point. The result is a system designed not only to deploy a model, but to respond when its behavior starts to change.

## Stack

Jenkins · Docker · Kubernetes · Prometheus · Grafana · Alertmanager · AWS EC2

## Repository

Open the implementation: https://github.com/khairulwarahussain251203-max/selfhealing-mlops-FA23-BAI-022

---

**Khair Ul Wara Hussain** · AI/ML Engineer & Python Developer · Islamabad, Pakistan
