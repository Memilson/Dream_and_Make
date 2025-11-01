# Dream SPA

This is a Single Page Application (SPA) built with TypeScript and React using Vite. The project is structured to follow a feature-based architecture, which helps in organizing the codebase efficiently and avoiding repetition of styles and structure.

## Project Structure

The project is organized into several key directories:

- **src/dream/app**: Contains the main application components, including routing and layout.
- **src/dream/routes**: Defines the application's routes and guards for authentication.
- **src/dream/pages**: Contains the different pages of the application, such as Home, About, and Not Found.
- **src/dream/features**: Contains feature-specific components, hooks, and services, such as authentication and todos.
- **src/dream/shared**: Contains shared components, hooks, utilities, and styles that can be reused across the application.
- **src/dream/widgets**: Contains widget components like navigation and footer.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd dream-spa
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the application in action.

## Features

- **Theming**: The application supports theming through a centralized theme provider.
- **Routing**: Utilizes React Router for navigation between different pages.
- **Authentication**: Includes authentication features with a login form and protected routes.
- **Todo Management**: Provides functionality to manage todos.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.