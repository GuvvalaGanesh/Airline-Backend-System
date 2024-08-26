# Welcome to Booking Service

## Project Setup

1. After cloning this project, navigate into the `BookingService` directory:
    ```
    cd BookingService

    ```

2. Install all the dependencies:
    ```
    npm install

    ```

3. Inside the `src/config` folder, create a new file named `config.json` and add the following configuration:

    ```
    {
      "development": {
        "username": "<YOUR_DB_USER_NAME>",
        "password": "<YOUR_DB_PASSWORD>",
        "database": "BOOKING_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }

    ```

4. Once you've added your database configuration as shown above, navigate to the `src` folder in your terminal and execute the following commands to create and migrate the database:

    ```
    npx sequelize db:create
    npx sequelize db:migrate

    ```

5. Copy the `.sample.env` file to `.env`:
    ```
    cp .sample.env .env

    ```

6. Start the application:
    ```
    npm start
    
    ```