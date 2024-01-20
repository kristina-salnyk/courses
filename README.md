
# Courses

The Courses is a comprehensive web application designed to manage and display courses, providing features for course creation, editing, and user authentication. The app is built using cutting-edge technologies, including React, Redux, Styled Components, JavaScript, Jest, and React Testing Library, ensuring efficient state management, and employs a robust API backend to handle various functionalities.
## Features

- **Registration:** Users can register by providing their email, name, and password. The registration form is accessible via the "Registration" link on the login page.
- **Login:** Authenticated users can log in using their email and password. The login form is available via the "Login" link on the login page.
- **Token Management:** Upon successful login, the application saves the token, enabling automatic navigation to the Courses page if a valid token exists. Logging out removes the token and redirects the user to the Login page.
- **Courses Management:** The application displays a list of courses at the Courses page.
- **Course Information:** Clicking on the "Show course" button in the Course Card navigates the user to a dedicated course information page.
- **Course Creation:** Users can add new courses, providing a title, description, and duration. The duration is displayed in the format "hh:mm" (e.g., 02:02 for 122 minutes).
- **Author Management:** Logic for creating, adding, and deleting authors is incorporated into the app, with the ability to associate authors with specific courses.
- **Saving Courses:** Newly created courses are saved, ensuring they appear in the courses list.
- **Searching:** The application allows users to search for courses based on title or ID. The search results are reset when the search bar is empty.
- **Routing:** The application utilizes React Router for navigation, ensuring seamless transitions between components.
- **Private Routes:** Certain routes are restricted to users with an ADMIN role, enforced through PrivateRoute components.
- **Redux State Management:** The application employs Redux to manage state, with separate reducers for users, courses, and authors.
- **Redux Thunk Middleware:** Thunk middleware is utilized for asynchronous actions, enabling API calls to retrieve and save data.
- **API Integration:** Thunk middleware is utilized for asynchronous actions, enabling API calls to retrieve and save data.
- **Styling:** The application leverages Styled Components for a modular and dynamic styling approach. Each component is styled independently, promoting reusability and maintainability.
- **Testing:** Unit tests are incorporated, covering components such as Header, CourseCard, Courses, and coursesReducer. Pre-commit hooks ensure that failing tests prevent committing changes.

## Tech Stack

- **React:** Frontend library for building user interfaces.
- **Redux:** State management library for React applications.
- **React Router:** Library for navigation in React applications.
- **Styled Components:** Library for styling React components.
- **Jest and React Testing Library:** Testing frameworks for writing and running unit tests.
- **ESLint, Prettier, and Pre-commit Hooks:** Code linting, formatting, and pre-commit hooks ensure code quality and consistency.
- **JavaScript:** Core programming language for building the application logic.




## Run Locally

To run the project locally, follow these steps:

1. Clone the project:
```bash
  git clone https://github.com/kristina-salnyk/courses.git
```
2. Go to the project directory:

```bash
  cd courses
```

3. Install dependencies:

```bash
  npm install
```

4. Start the development server:

```bash
  npm start
```

This will launch the application on http://localhost:1234. Open your web browser and navigate to this address to explore Courses  locally.


## Deployment

Embark on a journey of learning with the Courses app, now live and accessible at [Courses](https://courses-sooty-two.vercel.app/). This platform showcases the harmonious integration of React, Redux, Styled Components, and JavaScript, offering users an intuitive and feature-rich educational experience. Explore the app and start your learning adventure with Courses!
