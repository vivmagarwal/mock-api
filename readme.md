# Mock API Server with JWT Authentication

## Installation
```
npm i
npm start
```

## How to video
https://www.loom.com/share/f4d8c58a0e224aebbbd0d20fbe946928

## Node version
v16.18.0

## Resources
/cats 336x

/users 50x

/posts 500x

/comments 5000x

/photos 1000x

/todos 500x

/recipeCategories 14x

/recipeIngredients 570x

/recipes 284x

/areas 25x

/recipeTags 73x

To access and modify `cats`, you can use any HTTP method:
`GET` `POST` `PUT` `PATCH` `DELETE` OPTIONS

For all other routes `GET` is open but all other HTTP methods requires Authentication.



## Authentication
### Register a new user 
```
POST http://localhost:9999/user/register
Content-Type: application/json

    {
    "username": "john.smith",
    "firstname": "John",
    "lastname": "Smith",
    "email": "John@mail.com",
    "password": "john.smith",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/304.jpg"
    }
```    

### Login an existing user with password
```
POST http://localhost:9999/user/login
Content-Type: application/json

    {
      "username": "john.smith",
      "password": "john.smith"
    }
```

###

## More examples
https://github.com/vivmagarwal/mock-api-server-with-JWT-authentication/blob/main/server.rest

## VSCode extension to make API calls from the .rest file
https://marketplace.visualstudio.com/items?itemName=humao.rest-client 

## Change port
Update `PORT=3000` in the `.env` file before `npm start`.

## Add Custom Routes & Protected Routes
https://www.loom.com/share/f4d8c58a0e224aebbbd0d20fbe946928