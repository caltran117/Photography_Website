client

npm install -g yarn

create the folder structure

yarn create react-app client

add proxy to package.json

.env file
# LINE_BELOW_SHOULD_ONLY_BE_FOR_DEV
DANGEROUSLY_DISABLE_HOST_CHECK=true

yarn add @apollo/client graphql jwt-decode react-router-dom

copy in src

update index.js

cd ../server

yarn add @apollo/server bcrypt cors cross-env dotenv express graphql graphql-tag jsonwebtoken mongoose

