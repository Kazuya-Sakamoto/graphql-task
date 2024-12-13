# ■ Query GQL

## ・User

### SignIn

```gql
mutation SignIn($signInInput: SignInInput!) {
  signIn(signInInput: $signInInput) {
    accessToken
    user {
      id
      name
      email
    }
  }
}
```

```json
{
  "signInInput": {
    "email": "test@example.com",
    "password": "testuser1-pass"
  }
}
```

### CreateUser

```gql
mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
    name
    email
    createdAt
    updatedAt
  }
}
```

```json
{
  "createUserInput": {
    "name": "test_user1",
    "email": "test@example.com",
    "password": "testuser1-pass"
  }
}
```

### GetUser

```gql
query GetUser($email: String!) {
  getUser(email: $email) {
    name
    email
    createdAt
    updatedAt
    id
  }
}
```

```json
{
  "email": "test@example.com"
}
```

## ・Task

### GetTasks

```gql
query GetTasks($userId: Int!) {
  getTasks(userId: $userId) {
    id
    name
    dueDate
    status
    description
    createdAt
    updatedAt
  }
}
```

```json
{
  "userId": 1
}
```

### CreateTask

```gql
mutation CreateTask($createTaskInput: CreateTaskInput!) {
  createTask(createTaskInput: $createTaskInput) {
    id
    name
    dueDate
    description
    status
    createdAt
    updatedAt
  }
}
```

```json
{
  "createTaskInput": {
    "name": "Test Create Task Yeah!!!",
    "dueDate": "2024-04-01",
    "userId": 1
  }
}
```

### UpdateTask

```gql
mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {
  updateTask(updateTaskInput: $updateTaskInput) {
    id
    name
    dueDate
    status
    description
    createdAt
    updatedAt
  }
}
```

```json
{
  "updateTaskInput": {
    "id": 1,
    "name": "updated task"
  }
}
```

### DeleteTask

```gql
mutation DeleteTask($id: Int!) {
  deleteTask(id: $id) {
    id
    name
    dueDate
    status
    description
    createdAt
    updatedAt
  }
}
```

```json
{
  "id": 6
}
```
