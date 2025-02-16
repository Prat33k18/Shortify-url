# URL Shortener

A simple and efficient URL Shortener web application developed using **Spring Boot** for the backend, **React.js** for the frontend, and **MySQL** for data storage. The frontend is styled using **Tailwind CSS**.

## Features

- **Generate Short URLs**: Convert long URLs into short, shareable links.
- **Redirect to Original URL**: Access the original URL when visiting a short link.
- **Database Storage**: Stores URL mappings in MySQL.
- **API Support**: Backend provides RESTful APIs for URL management.
- **Minimal UI**: A simple and clean user interface for quick link generation.

## Tech Stack

### Frontend:

- React.js
- Tailwind CSS
- Axios (for API requests)

### Backend:

- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL Database

### Other Tools:

- Postman (for API testing)
- Git & GitHub (version control)

## Installation & Setup

### Prerequisites:

- Java (JDK 17 or latest)
- Node.js & npm
- MySQL Database

### Steps:

1. Configure MySQL Database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/urlshortener
   spring.datasource.username=root
   spring.datasource.password=yourpasswordFrontend (React.js):
   ```

1) Navigate to the frontend directory:
   ```sh
   cd url-shortener/frontend
   ```
2) Install dependencies:
   ```sh
   npm install
   ```
3) Start the development server:
   ```sh
   npm start
   ```

## API Endpoints

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | `/api/shorten`     | Shorten a long URL       |
| GET    | `/api/{shortCode}` | Redirect to original URL |

## Contribution

Feel free to contribute! Fork the repo, make changes, and submit a pull request.

## License

This project is open-source and available under the MIT License.

