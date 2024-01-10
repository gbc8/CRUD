# CRUD

This repository is used to create CRUD applications in several different technologies to assist in the learning process.

#### Product description:
| Name        | Type        | Contraints|
| ----------- | ----------- | --------- |
| id          | integer     |primary key|
| name        | string      | not null  |
| category    | string      | not null  |
| description | string      |           |
| quantity    | integer     | not null  |

#### API Endpoints:

```markdown
GET /api/product - Retrieve all products
```
```markdown
GET /api/product/{id} - Retrieve product by id
```
```markdown
POST /api/product - Create new product
```
```markdown
PUT /api/product/{id} - Update product by id
```
```markdown
DELETE /api/product/{id} - Delete product by id
```

