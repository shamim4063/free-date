## Installation

```bash
$ npm install
```

## Setup Databse

```bash
$ npm run setup-databse
```

## Generate Resource

```bash
$ nest g resource [users]
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Add Migrations

```bash
# Generate new migration for changed entity
$ npm run migration:generate -- db/migrations/[MigrationName]

#To execute migrations
$ npm run migration:run

#Show migratioins
$ npm run migration:show

```

