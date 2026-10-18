# Development AAPC Medical Coding

A web-based learning management system (LMS) for medical coding education, with public-facing informational pages, admin portal and student account management, course discovery, and a student learning portal

## Table of Contents

- [Overview](#overview)
- [Features and Modules](#features-and-modules)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database and Prisma Setup](#database-and-prisma-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Application Routes](#application-routes)
- [Development Guidelines](#development-guidelines)
- [Testing and Validation](#testing-and-validation)
- [Git and GitHub Guidelines](#git-and-github-guidelines)
- [Security and Sensitive Files](#security-and-sensitive-files)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

**Development AAPC Medical Coding** is a web application designed to support medical coding education and related learning resources.

The application combines a public website with a student portal. Its codebase includes public marketing pages, course and blog pages, authentication flows, API route handlers, reusable React components, database models, and seed-data scripts.

### Project objectives

- Provide a central website for medical coding courses and training information.
- Allow students to register, authenticate, and manage their accounts.
- Provide a student dashboard and access to enrolled-course information.
- Support student profile management and password changes.
- Provide course progress, payment history, documents, certificates, and quiz-related areas.
- Maintain a structured, reusable, and type-safe application architecture.

## Features and Modules

The following modules are represented in the current project structure. Their availability and completeness should be verified in the running application.

### Public website

- Home page and marketing layout.
- About and career pages.
- Contact page.
- Course listings and course detail pages.
- Blog listing and individual blog posts.
- Mock-exam pages and individual mock-exam details.
- Revenue cycle management (RCM) and training pages.
- Video gallery and related learning resources.

### Authentication and account management

- Student registration and login.
- Forgot-password and reset-password pages.
- Email verification page.
- Authentication API routes.
- Authenticated-user endpoint and logout endpoint.
- Student profile viewing and editing.
- Change-password functionality.

### Student portal

- Dashboard.
- My Courses and enrolled-course pages.
- Course progress.
- Payment history.
- Course documents.
- Certificates.
- Quiz page.
- Student navigation and reusable dashboard layouts.

### Location and profile data

The API structure includes endpoints for countries, states, cities, and postal codes. These support database-backed location selection in student profile forms.

### Database and master data

The Prisma directory includes database schema, migration history, and seed-data files for application data such as courses, locations, blog content, and mock exams.

## Technology Stack

| Technology             | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| Next.js App Router     | Application routing and server/client rendering |
| React                  | Component-based user interface                  |
| TypeScript             | Static type checking                            |
| Tailwind CSS           | Styling and responsive layouts                  |
| MySQL                  | Relational database                             |
| Prisma ORM             | Database schema and data access                 |
| Prisma MariaDB adapter | Database connectivity                           |
| NextAuth / Auth.js     | Authentication integration, as configured       |
| bcrypt                 | Password hashing, where used                    |
| Zod                    | Input and form validation                       |
| React Hook Form        | Form management, where used                     |
| Axios                  | HTTP requests, where used                       |
| React Icons            | Interface icons                                 |
| Framer Motion          | UI animations, where used                       |
| Resend                 | Email delivery, if configured                   |

The exact dependency versions and scripts are maintained in `package.json` and `package-lock.json`. Refer to those files for the authoritative dependency list.

## Prerequisites

Install the following before setting up the project:

- Node.js version compatible with the installed Next.js release.
- npm.
- MySQL 8 or a compatible MySQL database server.
- Git.
- Visual Studio Code or another TypeScript-capable editor.

Verify your installations:

```bash
node --version
npm --version
git --version
```

Ensure the MySQL server is running and that you have permission to create or access the development database.

## Getting Started

### 1. Clone the repository

After the GitHub repository has been created, clone it using the actual repository URL:

```bash
git clone <GITHUB_REPOSITORY_URL>
cd development-aapc-medical-coding
```

Replace the placeholder with the repository URL supplied by your team.

### 2. Install dependencies

```bash
npm ci
```

Use `npm ci` when the committed `package-lock.json` is available and consistent with `package.json`. For ordinary dependency changes during development, use `npm install` and commit the resulting lockfile changes when appropriate.

### 3. Configure environment variables

Create your local `.env` file using `.env.example` as a template.

In Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

If `.env` already exists, do not overwrite it. Update it manually instead.

Configure the local database credentials, authentication secrets, public application URLs, and any email-provider credentials required by the application.

See [Environment Variables](#environment-variables).

### 4. Configure the database

Create or select the MySQL database configured for local development.

Review `prisma/schema.prisma` and `prisma.config.ts`, generate the Prisma client, and apply migrations as described in [Database and Prisma Setup](#database-and-prisma-setup).

### 5. Start the development server

```bash
npm run dev
```

Open the URL printed in the terminal. The default Next.js development URL is usually:

http://localhost:3000

## Environment Variables

The repository should contain `.env.example`, which documents the configuration required to run the application. The actual `.env` file is local and must not be committed.

The following variables have been identified for this project. Confirm each variable against the current source code and configuration before treating it as mandatory.

| Variable                | Purpose                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `DATABASE_URL`          | Database connection URL, if used by Prisma configuration or other database code     |
| `DATABASE_HOST`         | Database hostname                                                                   |
| `DATABASE_PORT`         | Database port, commonly `3306`                                                      |
| `DATABASE_USER`         | Database username                                                                   |
| `DATABASE_PASSWORD`     | Database password                                                                   |
| `DATABASE_NAME`         | Database name                                                                       |
| `NEXT_PUBLIC_SITE_NAME` | Public-facing site name                                                             |
| `NEXT_PUBLIC_SITE_URL`  | Public site URL                                                                     |
| `AUTH_SECRET`           | Authentication/session secret, if required by the configured Auth.js implementation |
| `JWT_SECRET`            | JWT signing or verification secret, if used by the application                      |
| `NEXT_PUBLIC_APP_URL`   | Public application base URL                                                         |
| `RESEND_API_KEY`        | Resend email API key, if email delivery is enabled                                  |
| `EMAIL_FROM`            | Sender identity for outgoing emails                                                 |

### Environment-variable guidance

- Never commit real credentials or secrets.
- Never use production credentials in local development.
- Variables beginning with `NEXT_PUBLIC_` may be exposed to the browser. Do not put passwords, API keys, or private tokens in them.
- Use unique, sufficiently random authentication secrets for the appropriate environments.
- Keep `.env.example` limited to variable names and safe placeholder values.
- Document new environment variables whenever new functionality requires them.

### Database configuration note

The current Prisma adapter configuration uses individual database settings such as host, port, username, password, and database name. `DATABASE_URL` should be retained if it is referenced by another part of the application or the Prisma CLI configuration; do not assume it is required simply because it is common in Prisma projects.

## Database and Prisma Setup

The project maintains its Prisma schema and migrations in the `prisma/` directory.

### Important files

- `prisma/schema.prisma` — database models, fields, enums, and relationships.
- `prisma.config.ts` — Prisma CLI configuration.
- `src/lib/prisma.ts` — Prisma client and database adapter initialization, if present at this path.
- `prisma/migrations/` — committed database migration history.
- `prisma/seed.ts` — seed entry point.
- `prisma/course-data.ts` — course-related seed data.
- `prisma/location-data.ts` — location seed data.
- `prisma/country-mobile-rules.ts` — country mobile validation data.
- `prisma/generate-country-mobile-rules.ts` — country mobile-rule generation script.
- `prisma/blog-data.ts` — blog seed data.
- `prisma/mock-exam-data.ts` — mock-exam seed data.

### 1. Generate the Prisma client

```bash
npx prisma generate
```

The configured generator outputs the client under `src/generated/prisma/`. Run generation after installing dependencies and whenever the Prisma schema changes.

### 2. Apply development migrations

For a database managed through Prisma migrations, review the pending changes and run:

```bash
npx prisma migrate dev
```

Use this command only in the intended development environment.

For deployment environments, apply reviewed and committed migrations using:

```bash
npx prisma migrate deploy
```

Do not use database-reset or destructive migration commands against a database containing data you need to preserve.

### 3. Seed the database

The repository contains a Prisma seed file and supporting data files. Run the seed command configured by the project's Prisma configuration and package scripts.

Before seeding, confirm the target database and review the seed logic. Seed data should not contain real user credentials, production personal data, or private secrets.

### 4. Verify database connectivity

The repository includes a database test script under `scripts/test_db.ts`. Review its contents and use the project's configured TypeScript runner to execute it if appropriate.

You can also test database connectivity through the application's health endpoint, where enabled:

`/api/health/db`

Do not expose detailed database errors or credentials from health endpoints in production.

## Running the Application

### Development server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Production server

```bash
npm run start
```

Run the production server after a successful build.

### Linting and type checking

Check the scripts in `package.json` before using them. If configured, run:

```bash
npm run lint
npx tsc --noEmit
```

Use the scripts actually defined by the repository rather than assuming every command exists.

## Project Structure

The following is a condensed view of the important application directories and files from the project structure listing. Generated build output and installed dependencies are intentionally omitted.

```text
development-aapc-medical-coding/
├── .env.example
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── prisma.config.ts
├── proxy.ts
├── tsconfig.json
│
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   ├── blog-data.ts
│   ├── course-data.ts
│   ├── location-data.ts
│   ├── mock-exam-data.ts
│   ├── country-mobile-rules.ts
│   ├── generate-country-mobile-rules.ts
│   └── migrations/
│
├── public/
│   └── images/
│       ├── courses/
│       ├── posts/
│       ├── profile/
│       ├── team/
│       └── training/
│
├── scripts/
│   └── test_db.ts
│
└── src/
    ├── actions/
    │   ├── auth.actions.ts
    │   ├── contact-us.action.ts
    │   └── student-profile.actions.ts
    │
    ├── app/
    │   ├── (auth)/
    │   ├── (marketing)/
    │   ├── api/
    │   └── student/
    │
    ├── components/
    │   ├── auth/
    │   ├── blog/
    │   ├── career/
    │   ├── contact_us/
    │   ├── course/
    │   ├── home/
    │   ├── layout/
    │   ├── student/
    │   ├── ui/
    │   └── videos/
    │
    ├── config/
    ├── constants/
    │   ├── roles.ts
    │   └── routes.ts
    │
    ├── generated/
    │   └── prisma/
    │
    ├── lib/
    ├── repositories/
    └── schemas/
```

This tree is a documentation summary, not a replacement for the complete source tree. Update it when major folders are added, removed, or renamed.

### Directory responsibilities

| Directory or file         | Responsibility                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------- |
| `src/app/`                | Next.js pages, layouts, route handlers, and application routing                    |
| `src/app/(auth)/`         | Login, registration, forgot-password, reset-password, and email-verification pages |
| `src/app/(marketing)/`    | Public marketing, course, blog, career, and training pages                         |
| `src/app/api/`            | HTTP API route handlers                                                            |
| `src/app/student/`        | Authenticated student portal pages                                                 |
| `src/actions/`            | Server actions for supported mutations and workflows                               |
| `src/components/`         | Reusable application UI components                                                 |
| `src/components/auth/`    | Authentication-related forms and controls                                          |
| `src/components/layout/`  | Shared header, footer, navigation, and layout components                           |
| `src/components/student/` | Student dashboard and portal components                                            |
| `src/constants/`          | Shared route names and role constants                                              |
| `src/lib/`                | Shared utilities and application infrastructure                                    |
| `src/repositories/`       | Data-access functions, where implemented                                           |
| `src/schemas/`            | Validation schemas, where implemented                                              |
| `src/generated/prisma/`   | Generated Prisma client output                                                     |
| `prisma/`                 | Schema, migration history, seed scripts, and master data                           |
| `public/images/`          | Static images served by the application                                            |
| `scripts/`                | Development and diagnostic scripts                                                 |
| `proxy.ts`                | Request interception or routing logic, according to its implementation             |
| `next.config.ts`          | Next.js configuration                                                              |
| `prisma.config.ts`        | Prisma CLI configuration                                                           |
| `package.json`            | Dependencies and npm scripts                                                       |
| `package-lock.json`       | Dependency-resolution lockfile                                                     |

## Application Routes

The following routes are represented in the project structure.

### Public and marketing pages

| Route                           | Purpose                                          |
| ------------------------------- | ------------------------------------------------ |
| `/`                             | Home page                                        |
| `/about`                        | About page                                       |
| `/career`                       | Career page                                      |
| `/contact`                      | Contact page                                     |
| `/blog`                         | Blog listing                                     |
| `/blog/[slug]`                  | Individual blog post                             |
| `/courses`                      | Course listing                                   |
| `/courses/[slug]`               | Course details                                   |
| `/mocks`                        | Mock-exam listing                                |
| `/mocks/[slug]`                 | Mock-exam details                                |
| `/rcm`                          | RCM information                                  |
| `/training`                     | Training information                             |
| `/training/claims-adjudication` | Claims adjudication training                     |
| `/training/medical-billing-ar`  | Medical billing and accounts receivable training |
| `/training/medical-coding`      | Medical coding training                          |
| `/training/on-job-training`     | On-the-job training                              |
| `/videos`                       | Video gallery                                    |

### Authentication pages

| Route              | Purpose              |
| ------------------ | -------------------- |
| `/login`           | Student login        |
| `/register`        | Student registration |
| `/forgot-password` | Password recovery    |
| `/reset-password`  | Password reset       |
| `/verify-email`    | Email verification   |

### Student portal

| Route                              | Purpose                 |
| ---------------------------------- | ----------------------- |
| `/student/dashboard`               | Student dashboard       |
| `/student/my-courses`              | My Courses              |
| `/student/enrolled_courses`        | Enrolled courses        |
| `/student/enrolled_courses/[slug]` | Enrolled-course details |
| `/student/progress`                | Course progress         |
| `/student/payments`                | Payment history         |
| `/student/documents`               | Course documents        |
| `/student/certificates`            | Certificates            |
| `/student/profile_view`            | View profile            |
| `/student/profile_edit`            | Edit profile            |
| `/student/change-password`         | Change password         |
| `/student/quiz`                    | Quiz area               |

The route tables describe paths visible in the repository structure. Authentication requirements, redirects, and exact page behavior should be confirmed in the relevant page, layout, and proxy code.

### API routes

The current structure includes API endpoints for:

- Authentication and authenticated-user information.
- Registration and logout.
- Health checks and database connectivity.
- Country, state, city, and postal-code lookups.
- Forgot-password and reset-password workflows.
- Student enrolled-course information.

See the route handlers under `src/app/api/` for the exact HTTP methods, request formats, authorization rules, and response structures.

## Development Guidelines

### Code organization

- Use TypeScript for application logic and component interfaces.
- Keep UI components focused and reusable.
- Place server-side operations in suitable server actions, API route handlers, or data-access modules.
- Reuse shared layouts and page templates.
- Avoid duplicating business logic between client and server code.

### Validation and forms

- Validate user input on the server even when client-side validation is present.
- Use consistent validation schemas and clear error messages.
- Handle loading, success, and failure states.
- Avoid unintended duplicate submissions.
- Do not trust client-supplied user IDs or role information for authorization.

### Database changes

- Update `prisma/schema.prisma` when the data model changes.
- Create and review migrations for schema changes.
- Commit migration files alongside related code.
- Regenerate the Prisma client after schema updates.
- Test changes against a development database.
- Use transactions when related database changes must succeed or fail together.

### UI and accessibility

- Maintain consistent styling and responsive behavior.
- Use meaningful labels and keyboard-accessible controls.
- Provide visible focus states.
- Test important pages on both desktop and mobile viewports.

## Testing and Validation

Before committing code, run the checks appropriate for your changes.

```bash
npx prisma generate
npx tsc --noEmit
npm run build
```

Run the lint and test scripts defined in `package.json`, if available.

Manually verify the affected workflows, including:

- Registration, login, logout, and protected-page access.
- Password recovery and reset.
- Student profile viewing and editing.
- Course and enrolled-course navigation.
- Database-backed location selection.
- Database reads and writes.
- Contact form and email delivery, if enabled.
- Responsive layouts and validation feedback.

A successful build does not replace functional testing.

## Git and GitHub Guidelines

### What should be committed

Commit the source and configuration required to reproduce the application:

- `src/`
- `prisma/schema.prisma`
- `prisma/migrations/`
- Appropriate seed and master-data files.
- Required static assets under `public/`.
- `package.json` and `package-lock.json`.
- `next.config.ts`, `prisma.config.ts`, `tsconfig.json`, and lint/CSS configuration.
- `.gitignore`
- `.env.example`
- `README.md`
- Any required scripts and project configuration.

### What should not be committed

Do not commit:

- `.env` or files containing real environment-specific secrets.
- `node_modules/`.
- `.next/` or other generated build output.
- Local caches and TypeScript build caches.
- Database backups containing real data.
- User-uploaded profile photos or private documents.
- Temporary debug files and large diagnostic directory listings.
- IDE-specific settings that are personal or machine-specific.
- Generated Prisma client files when they are reliably regenerated during setup and build.

Review every staged file before committing. Ignoring a file does not remove it if Git is already tracking it.

### Recommended branch and commit workflow

Create a feature branch:

```bash
git switch -c feature/<short-feature-name>
```

Review the working tree:

```bash
git status
git diff
```

Stage only the intended files:

```bash
git add <file-or-directory>
git diff --cached
```

Commit with a meaningful message:

```bash
git commit -m "docs: improve project setup documentation"
```

Push the branch:

```bash
git push -u origin feature/<short-feature-name>
```

Create a pull request when required by the team's review process.

## Security and Sensitive Files

The application includes authentication, student profiles, and database-backed functionality. Treat credentials and personal data carefully.

- Keep secrets in local or deployment environment configuration.
- Use least-privilege database accounts.
- Store passwords as secure hashes rather than plaintext.
- Enforce authorization in server-side code.
- Validate uploaded files and limit file types and sizes.
- Avoid exposing password hashes, tokens, and unnecessary personal information through APIs.
- Do not include real student data in seed scripts or test fixtures.
- Keep backups protected and outside source control.
- Use HTTPS and appropriate secure-cookie settings in production.
- Rotate any credential that has been exposed.

If a secret has been committed, removing it from the latest version is not enough to erase it from Git history. Rotate the credential and follow the repository's incident-response process.

## Troubleshooting

### Database connection errors

1. Verify that MySQL is running.
2. Confirm the host, port, database name, and credentials.
3. Test connectivity independently of the application.
4. Review database user permissions and network settings.
5. Check the Prisma adapter and connection-pool configuration.
6. Inspect the server terminal for the underlying error.

### Prisma client or model errors

Run:

```bash
npx prisma generate
```

Restart the development server and verify that imports match the configured generated-client output.

### Environment variables are missing

- Verify that `.env` is in the project root.
- Check variable names against the code.
- Restart the development server after changing environment variables.
- Ensure public variables do not contain secrets.

### TypeScript or build errors

Run:

```bash
npx tsc --noEmit
npm run build
```

Resolve the first meaningful error before attempting deployment.

## Contributing

1. Create a dedicated feature or bug-fix branch.
2. Make focused changes that follow the project's conventions.
3. Update documentation when setup, configuration, routes, or data models change.
4. Run the relevant checks.
5. Review staged changes for secrets and unrelated files.
6. Submit a descriptive commit and pull request where applicable.

## License

The project license and distribution terms have not been specified in this README. Add the applicable license or proprietary-use statement before distributing the repository publicly.
