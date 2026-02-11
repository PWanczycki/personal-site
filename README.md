# Philip Wanczycki's Personal Site

## Local Setup

### 1. Install dependencies

```
bundle install
npm install
```

### 2. Setup DB

```
bin/rails db:prepare
```

### 3. (Optional) Configure the Rails server port

Create a `.env` file in the project's root directory with the following entry

```
SERVER_PORT=3030 # or your preferred port
```

### 4. Start the Rails server and Vite dev server

```
bin/dev
```

## Test Suite

You can run the test suite with

```
bin/rails db:test:prepare test
```

## Things to note

- Ruby version 3.4.7

- Rails version 8.1.1

- Deployment instructions TBD
