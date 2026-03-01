# CI/CD Platform

This repository serves as a centralized hub for reusable CI/CD workflows and actions across the organization. By centralizing our CI/CD utilities, we ensure consistent quality, security, and standards across all projects while minimizing repetitive setup.

## Available Actions

### 1. SonarCloud Scan (`sonarqube`)

A composite GitHub Action that automates static code analysis using **SonarCloud**.

This action simplifies the process of integrating SonarCloud into your repositories by:
- Automatically extracting the repository name for SonarCloud project naming.
- Creating the SonarCloud project dynamically via API if it does not already exist.
- Executing the SonarQube Scanner safely with the proper environment configuration.
- Running proper git fetches (`fetch-depth: 0`) to allow SonarCloud to blame code accurately.

#### Usage Example

To use this action in your repository workflow, reference it directly like so:

```yaml
jobs:
  sonarcloud-analysis:
    runs-on: ubuntu-latest
    steps:
      # You do not need actions/checkout here because 
      # the composite action handles checking out the code itself.
      
      - name: Run SonarCloud Scan
        uses: namsee-org/cicd-platform/.github/actions/sonarqube@main
        with:
          sonar-token: ${{ secrets.SONAR_TOKEN }}
          # sonar-organization is optional and defaults to "namsee-org"
          # sonar-organization: "your-custom-org"
```

#### Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `sonar-token` | Your SonarCloud authentication token. This should be stored as a GitHub Repository Secret, do not hardcode it. | **Yes** | N/A |
| `sonar-organization` | The SonarCloud organization key where the project will be created (or resides). | No | `"namsee-org"` |

## Contributing
When adding new custom actions:
1. Create a new folder under `.github/actions/<action-name>`.
2. Define the action properly in `action.yml`.
3. Update this `README.md` to document the purpose, usage, and inputs of the new action.
