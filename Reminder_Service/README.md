# Welcome to Reminder Service

## Project Setup
- Execute `npm install` inside this folder for install all the dependencies.
- Copy .sample.env to .env
    - `cp .sample.env .env`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_USER_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "REMINDER_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`
- Start with `npm start`

```