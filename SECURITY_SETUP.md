# Security Setup Guide

This document describes the security workflow setup for CosmoFusion DAO web application.

## Overview

The project uses automated security scanning with different levels of strictness:

- **Dev Branch**: Basic security checks with critical vulnerability detection
- **Main/Master Branch**: Comprehensive security scanning with high severity threshold

## Workflows

### 1. Dev Security Check (`dev-security-check.yml`)

**Triggers:**
- Push to `dev` branch
- Pull requests to `dev` branch

**Checks:**
- Snyk vulnerability scan (critical threshold)
- npm audit (critical level)
- yarn audit (critical level)
- Dependency outdated check
- Unused dependencies check

### 2. Production Security Scan (`security-scan.yml`)

**Triggers:**
- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch

**Checks:**
- Snyk vulnerability scan (high threshold)
- Snyk license compliance check
- Snyk code vulnerability scan
- npm audit (high level)
- yarn audit (high level)
- **Code Quality Security Checks:**
  - ESLint security rules
  - Hardcoded secrets detection
  - Console.log statements check
  - eval() usage detection
  - innerHTML usage detection
- **Dependency Vulnerability Scan:**
  - OWASP Dependency Check
  - Comprehensive dependency analysis
- **Secrets Scanning:**
  - TruffleHog for secrets detection
  - Git history analysis
- Container scanning (if Dockerfile exists)
- SARIF report upload to GitHub Security tab
- Slack notifications for failures

### 3. Advanced Security Checks (`advanced-security.yml`)

**Triggers:**
- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch

**Checks:**
- **Bandit Scan:** Python security linter
- **Semgrep:** Advanced static analysis
  - Security audit patterns
  - Secrets detection
  - OWASP Top 10 compliance
  - JavaScript/React/TypeScript specific rules
- **Gitleaks:** Git secrets detection
- **SonarQube:** Code quality and security analysis
- **Dependency Track:** SBOM generation and analysis
- **License Compliance:** License checking and reporting
- **Security Headers Check:** HTTP security headers validation
- **Malware Scan:** ClamAV virus scanning

## Required Secrets

Add these secrets to your GitHub repository:

### 1. SNYK_TOKEN
```bash
# Get your Snyk token from https://app.snyk.io/account
# Add to GitHub repository secrets as SNYK_TOKEN
```

### 2. SLACK_WEBHOOK_URL (Optional)
```bash
# Create Slack webhook for security notifications
# Add to GitHub repository secrets as SLACK_WEBHOOK_URL
```

### 3. SONAR_TOKEN (Optional)
```bash
# Get your SonarQube token
# Add to GitHub repository secrets as SONAR_TOKEN
```

### 4. SONAR_HOST_URL (Optional)
```bash
# Your SonarQube server URL
# Add to GitHub repository secrets as SONAR_HOST_URL
```

## Setup Instructions

### 1. Snyk Integration

1. Sign up at [Snyk.io](https://snyk.io)
2. Get your API token from account settings
3. Add token to GitHub repository secrets as `SNYK_TOKEN`

### 2. GitHub Security Tab

The workflow automatically uploads results to GitHub Security tab:
- Go to your repository
- Click on "Security" tab
- View vulnerability reports

### 3. Slack Notifications (Optional)

1. Create a Slack app
2. Set up incoming webhook
3. Add webhook URL to GitHub secrets as `SLACK_WEBHOOK_URL`

## Security Checks Explained

### Snyk Scans

- **Vulnerability Scan**: Checks dependencies for known vulnerabilities
- **License Check**: Ensures dependencies have acceptable licenses
- **Code Scan**: Analyzes application code for security issues

### npm/yarn Audit

- Built-in security audit tools
- Checks against vulnerability databases
- Reports security issues in dependencies

### Container Scanning

- Uses Trivy for Docker image scanning
- Only runs if Dockerfile is present
- Scans for OS and application vulnerabilities

### Code Quality Security

- **ESLint Security Rules:** Checks for security anti-patterns
- **Hardcoded Secrets:** Detects passwords, tokens, keys in code
- **Console.log Detection:** Finds debug statements in production code
- **eval() Usage:** Detects dangerous eval() function usage
- **innerHTML Usage:** Checks for XSS-prone innerHTML usage

### Advanced Static Analysis

- **Semgrep:** Advanced pattern matching for security issues
- **Bandit:** Python-specific security linter
- **Gitleaks:** Git history secrets detection
- **SonarQube:** Comprehensive code quality and security analysis

### Dependency Management

- **OWASP Dependency Check:** Comprehensive dependency analysis
- **TruffleHog:** Secrets detection in repositories
- **License Compliance:** Ensures acceptable license usage
- **SBOM Generation:** Software Bill of Materials creation

### Infrastructure Security

- **Security Headers Check:** Validates HTTP security headers
- **Malware Scanning:** ClamAV virus detection
- **Container Security:** Docker image vulnerability scanning

## Customization

### Adjusting Severity Levels

Edit the workflow files to change severity thresholds:

```yaml
# For more strict checking
args: --severity-threshold=medium

# For less strict checking  
args: --severity-threshold=critical
```

### Adding Custom Security Checks

Add new steps to the workflow:

```yaml
- name: Custom Security Check
  run: |
    # Your custom security check here
    echo "Running custom security check..."
```

### Excluding False Positives

Create `.snyk` file in project root:

```yaml
version: v1.25.0
ignore:
  'npm:package-name@version':
    - vulnerability-id:
        reason: 'False positive'
        expires: 2024-12-31T00:00:00.000Z
```

## Monitoring

### GitHub Security Tab

- View all security findings
- Track vulnerability status
- Manage security alerts

### Workflow Notifications

- Email notifications for workflow failures
- Slack notifications (if configured)
- GitHub status checks

## Best Practices

1. **Regular Updates**: Keep dependencies updated
2. **Review Findings**: Regularly review security reports
3. **Fix Promptly**: Address high/critical vulnerabilities quickly
4. **Monitor**: Set up alerts for new vulnerabilities
5. **Document**: Document security decisions and exceptions

## Troubleshooting

### Common Issues

1. **Snyk Token Invalid**
   - Verify token is correct
   - Check token permissions

2. **Workflow Failures**
   - Check GitHub Actions logs
   - Verify secrets are set correctly

3. **False Positives**
   - Use `.snyk` file to ignore false positives
   - Document reasons for ignoring

### Getting Help

- Check Snyk documentation: https://docs.snyk.io
- Review GitHub Actions logs
- Contact security team for critical issues

## Security Policy

This project follows these security practices:

1. **Automated Scanning**: All code is automatically scanned
2. **Vulnerability Management**: Critical issues must be fixed before merge
3. **Dependency Updates**: Regular dependency updates required
4. **Code Review**: Security-focused code review process
5. **Incident Response**: Defined process for security incidents

## Compliance

The security setup helps with:

- **OWASP Top 10**: Addresses common web vulnerabilities
- **NIST Framework**: Aligns with cybersecurity framework
- **GDPR**: Helps protect user data
- **Industry Standards**: Follows security best practices 