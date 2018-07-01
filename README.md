## Test assignment for 2018 Summer JavaScript Internship - Skygate

### Link to demo

[https://marcinmiler.netlify.com/](https://marcinmiler.netlify.com/)

### Core functionality

-   [x] Add event
-   [x] View all created events
-   [x] Ability to search by title and/or location
-   [x] Filtering or sorting
-   [x] Delete event
-   [x] Edit event
-   [ ] Saving the application status in IndexedDB
-   [x] GUI
-   [x] README

### Additional functionality

-   [ ] Tests on client
-   [x] Tests on server
-   [x] Google API (autocomplete, maps)
-   [ ] File API
-   [x] Good UI and animations
-   [x] Days counter
-   [x] Data persistence
-   [x] Downloading the user's location and calculating the distance from the given event
-   [x] Warning when we try delete event

## How to run project local

1.  Download project from github

```
git clone https://github.com/MarcinMiler/Skygate-Test-2018.git
```

2.  Navigate to the client folder

```
cd Skygate-Test-2018/client
```

3.  Install dependencies

```
yarn
```

3.  Run client

```
yarn start
```

4.  Open another terminal and navigate to the server folder

```
cd Skygate-Test-2018/server
```

5.  Install dependencies

```
yarn
```

6.  Run server

```
yarn start
```

7.  If you want to client connect with server locally you need to change uri in Test/client/apollo.js

```javascript
import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})
```

## Tests (tests are only on server)

To run test you need to change database connection config in ormconfig.json

```
cd Test/server && yarn test
```
