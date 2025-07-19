# Contributing to Semantic Release Demo

Thank you for your interest in contributing! This guide will help you get started with contributing to this project.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/semantic_release.git
   cd semantic_release
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Install Git hooks**:
   ```bash
   npm run prepare
   ```

## 📝 Commit Message Guidelines

This project follows the [Conventional Commits](https://conventionalcommits.org/) specification. All commit messages must follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (white-space, formatting, etc.)
- **refactor**: Code changes that neither fix bugs nor add features
- **perf**: Performance improvements
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files

### Examples

```bash
feat: add user authentication system
fix: resolve memory leak in data processing
docs: update API documentation
style: format code according to style guide
refactor: extract utility functions
perf: improve query performance
test: add unit tests for user service
build: update dependencies
ci: add automated testing workflow
chore: update development tools
```

### Breaking Changes

To indicate breaking changes, add `!` after the type or include `BREAKING CHANGE:` in the footer:

```bash
feat!: remove deprecated API endpoints

# OR

feat: redesign user authentication

BREAKING CHANGE: The authentication API has been completely redesigned.
Old authentication methods are no longer supported.
```

## 🔧 Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** following the project's coding standards

3. **Run tests** to ensure everything works:
   ```bash
   npm test
   ```

4. **Run linting** to check code quality:
   ```bash
   npm run lint
   npm run lint:fix  # to automatically fix issues
   ```

5. **Commit your changes** using conventional commit format:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feat/your-feature-name
   ```

7. **Create a Pull Request** on GitHub

## 🧪 Testing

- Run all tests: `npm test`
- Run tests with coverage: `npm test -- --coverage`
- Run specific test: `npm test -- --testNamePattern="your test name"`

### Writing Tests

- Place test files next to the code they test with `.test.js` extension
- Use descriptive test names that explain what is being tested
- Follow the AAA pattern: Arrange, Act, Assert
- Mock external dependencies when necessary

## 💻 Code Style

- Use ESLint configuration provided in the project
- Follow modern JavaScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Tests pass (`npm test`)
- [ ] Code follows style guidelines (`npm run lint`)
- [ ] Commit messages follow conventional format
- [ ] Documentation is updated if needed
- [ ] Changes are covered by tests

### Pull Request Description

Include in your PR description:

1. **What** changes you made
2. **Why** you made them
3. **How** to test the changes
4. Screenshots (if applicable)
5. Link to related issues

### Review Process

1. Automated checks must pass (tests, linting, etc.)
2. At least one maintainer review is required
3. All feedback must be addressed
4. PR will be merged using "Squash and merge" to maintain clean history

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description** of the issue
2. **Steps to reproduce** the problem
3. **Expected behavior**
4. **Actual behavior**
5. **Environment** (Node.js version, OS, etc.)
6. **Screenshots** (if applicable)

## 💡 Feature Requests

When requesting features:

1. **Describe the problem** you're trying to solve
2. **Propose a solution** or approach
3. **Consider alternatives** you've explored
4. **Provide examples** of how it would be used

## 🔄 Release Process

This project uses automated semantic release:

1. **Merge to main** triggers the release process
2. **Commit analysis** determines version bump
3. **Changelog generation** from commit messages
4. **GitHub release** creation
5. **NPM publishing** (if applicable)

## 📚 Resources

- [Conventional Commits](https://conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Jest Testing Framework](https://jestjs.io/)
- [ESLint](https://eslint.org/)

## 🤝 Code of Conduct

Be respectful and inclusive. We're all here to learn and improve together.

## ❓ Questions

If you have questions about contributing, feel free to:

- Open an issue for discussion
- Reach out to maintainers
- Check existing documentation and issues

Thank you for contributing! 🎉 