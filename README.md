# BOOKS API
## Overview
> This project is a TypeScript-based API for managing authors and books. It includes authentication endpoints for user login and registration, as well as endpoints for CRUD operations on authors and books.

**How to Run the Project** 

```
npm run start (ts-node src/app.ts)
```

**How to Build the Project** 

```
npm run build (tsc)
```

### Endpoints

#### Auth

#### Login
```
/login - POST
```
#### Login with the following data:

email: string(must include @)

password: min 8 characters, including symbols, uppercase, lowercase

#### Register
```
/register - POST
```
#### Register with the following data:

email: string
password: string (min 8 characters, including symbols, uppercase, lowercase)

#### Authors
```
/authors - GET
```
Get all authors.

```
/authors - GET
```
Get a specific author by ID.

```
/authors - PUT
```
Update a specific author by ID.

Param: id (string)

Body:
```
{
   "name": "string",
   "biography": "string",
   "birth_date": "Date"
}
```

```
/authors - DELETE
```

Delete a specific author by ID.

Param: id (string)

### Books

```
/books - GET
```

Get all books.

```
/books - GET
```

Get a specific book by ID.

Param: id (string)

```
/books - PUT
```

Update a specific book by ID.

Param: id (string)

Body:
```
{
   "title": "string",
   "published_at": "Date",
   "isbn": "string",
   "author_id": "number"
}
```

```
/books - DELETE
```

Delete a specific book by ID.

Param: id (string)
