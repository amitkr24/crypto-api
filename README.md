
# Crypto Transaction API

An API created using NodeJS for tracking the transaction of user by their address.



## Run Locally

Clone the project

```bash
  git clone https://github.com/amitkr24/crypto-api.git
```

Go to the project directory

```bash
  cd crypto-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
## Documentation

Root Hosted Link - https://crypto-eook.onrender.com/

Routes :

    a. /transaction - 
    b. /price   - Get price of the transaction.
    c. /balance - Get current value and currrent price of currency

Data that needs to be sent with a route :
    
    a. /transaction - name(address) (Form type:x-www-form-urlencoded) [method post]
    b. /price       - fetch price and add to database [method get]
    c. /balance     - name(address) (Form type:x-www-form-urlencoded) [method post]
    
    Note: Enter name as field for address and then enter their address id
Folder Structure

    a. index.js - Server runs here
    b. model - Contains all the models for address, price, transaction.
    c. routes - Contains all the routes.
    d. controller - Contains all the controllers.
    e. config - Contains all the config files.



  
