# Semantic Release Demo

[![Release](https://github.com/ShouYuqing/semantic_release/actions/workflows/release.yml/badge.svg)](https://github.com/ShouYuqing/semantic_release/actions/workflows/release.yml)
[![npm version](https://badge.fury.io/js/@yourusername%2Fsemantic-release-demo.svg)](https://badge.fury.io/js/@yourusername%2Fsemantic-release-demo)

A comprehensive example of automated semantic release integrated with GitHub, featuring automated versioning, changelog generation, and NPM publishing based on conventional commit messages.

## 🚀 Features

- **Automated Versioning**: Automatically determines version bumps based on commit messages
- **Changelog Generation**: Generates detailed changelogs from commit history
- **GitHub Integration**: Creates GitHub releases with assets
- **NPM Publishing**: Automatically publishes to NPM registry
- **Multi-Branch Support**: Supports main, beta, and alpha release channels
- **Quality Gates**: Runs tests and linting before releases
- **Git Hooks**: Enforces commit message conventions and code quality

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git repository connected to GitHub
- NPM account (for publishing)

## 🔧 Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure GitHub Secrets

In your GitHub repository, add the following secrets:

- `NPM_TOKEN`: Your NPM automation token
  - Go to [npmjs.com](https://www.npmjs.com/) → Account → Access Tokens → Generate New Token → Automation

### 3. Initialize Git Hooks

```bash
npm run prepare
```

### 4. Update Package Information

Edit `package.json` to update:
- `name`: Your package name (follow npm naming conventions)
- `author`: Your information
- `repository.url`: Your repository URL

## 📝 Commit Message Convention

This project uses [Conventional Commits](https://conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

| Type | Description | Version Bump |
|------|-------------|--------------|
| `feat` | New feature | Minor |
| `fix` | Bug fix | Patch |
| `docs` | Documentation changes | Patch |
| `style` | Code style changes | Patch |
| `refactor` | Code refactoring | Patch |
| `perf` | Performance improvements | Patch |
| `test` | Test additions/changes | No release |
| `build` | Build system changes | No release |
| `ci` | CI configuration changes | No release |
| `chore` | Maintenance tasks | No release |

### Breaking Changes

Add `BREAKING CHANGE:` in the footer or `!` after type to trigger a major release:

```bash
feat!: remove deprecated API
```

### Examples

```bash
# Feature (minor version bump)
feat: add user authentication

# Bug fix (patch version bump)
fix: resolve memory leak in data processing

# Breaking change (major version bump)
feat!: redesign public API

# Documentation (patch version bump)
docs: update API documentation

# No release
test: add unit tests for user service
```

## 🏗️ Release Branches

- **`main`/`master`**: Production releases (latest)
- **`beta`**: Beta pre-releases
- **`alpha`**: Alpha pre-releases

## 🔄 Release Process

1. **Development**: Make changes and commit using conventional commits
2. **Pull Request**: Create PR to main branch
3. **CI/CD**: Automated tests and linting run
4. **Merge**: Merge PR to main branch
5. **Release**: Semantic release automatically:
   - Analyzes commits since last release
   - Determines version bump
   - Generates changelog
   - Creates GitHub release
   - Publishes to NPM
   - Updates package.json and commits back

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📊 Release Analytics

Semantic release will:

1. **Analyze commits** since the last release
2. **Determine version** based on commit types
3. **Generate changelog** from commit messages
4. **Create GitHub release** with release notes
5. **Publish to NPM** (if configured)
6. **Update repository** with new version

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `.releaserc.json` | Semantic release configuration |
| `.commitlintrc.json` | Commit message linting rules |
| `.github/workflows/release.yml` | GitHub Actions workflow |
| `.husky/` | Git hooks configuration |
| `jest.config.js` | Testing configuration |
| `.eslintrc.json` | Code linting rules |

## 🚨 Troubleshooting

### Common Issues

1. **Release not triggered**: Ensure commits follow conventional format
2. **NPM publish fails**: Check NPM_TOKEN secret and package name availability
3. **Tests fail**: Fix failing tests before merging
4. **Permission denied**: Ensure GitHub token has proper permissions

### Debug Release

Run semantic release in dry-run mode:

```bash
npx semantic-release --dry-run
```

### Check Commit Messages

Validate commit message format:

```bash
echo "feat: add new feature" | npx commitlint
```

## 📚 Learn More

- [Semantic Release Documentation](https://semantic-release.gitbook.io/)
- [Conventional Commits](https://conventionalcommits.org/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [NPM Publishing](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Semantic Release](https://github.com/semantic-release/semantic-release) team
- [Conventional Commits](https://conventionalcommits.org/) community
- GitHub Actions team 