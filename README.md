## XMeme

### Live Project

### Deployment and Execution 
    1.  You should have the following prerequisites:
    - NodeJS 14.12.0 (Any other recent versions should also work fine);
    - MongoDB database (Any recent versions should work fine)

    2. Install dependencies with one of the following commands
    - `npm install` Installs all dependencies

    3. To run the App use:
        - `$ cd frontend` 
        -  `npm start` Runs the app in the development mode.
        -  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.    

    4. To build the app for production 
        - Builds the app for production to the `build` folder.

    5. To run backend 
        - `$ cd backend`
        - npm start - runs the app on port 8081


### Pages Available 
    XMeme Page- http://localhost:3000/

### Backend End Points 
    Backend server - http://localhost:8081
    1. POST /memes          - New meme to add to system
    2. GET  /memes          - fetch latest 100 memes from backend
    3. GET  /memes{id}      - Fetch one meme for params id 
    4. PATCH /memes/{id}    - Update Meme caption/url
    5. http://localhost:8081/swagger-ui - documentation for swagger-ui

