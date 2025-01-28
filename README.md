# React App with Spring Boot Backend

This project is a full-stack application with a React frontend and a Spring Boot backend. The frontend is built using React and the backend is built using Spring Boot. The application demonstrates a simple setup with a REST API and a responsive UI.

## Project Structure

```
react-app/
├── backend/                # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/yourcompany/projectname/
│   │   │   │       └── DemoApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   ├── pom.xml
├── frontend/               # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   ├── package.json
├── .gitignore
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (for the frontend)
- [Java 17](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) (for the backend)
- [Maven](https://maven.apache.org/) (for the backend)

## Setup

### Backend

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Build the backend:
   ```sh
   mvn clean install
   ```

3. Run the backend:
   ```sh
   mvn spring-boot:run
   ```

The backend will be running at `http://localhost:8080`.

### Frontend

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the frontend:
   ```sh
   npm start
   ```

The frontend will be running at `http://localhost:3000`.

## Usage

- Open your browser and navigate to `http://localhost:3000` to view the React application.
- The React application will make API calls to the Spring Boot backend at `http://localhost:8080`.

## API Endpoints

- `GET /api/hello`: Returns a greeting message from the Spring Boot backend.

## License

This project is licensed under the MIT License.
