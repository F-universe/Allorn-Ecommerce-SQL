Allorn Project Documentation
This project represents a web application named Allorn, which includes basic features such as user registration, login, and navigation across different sections of the website. Below is an explanation of the structure and functionality of each file present in the project.

----HTML Files----
index.html
This is the main entry point of the application. It contains a simple layout for the home page, including navigation links to other sections of the website such as Products, About Us, and Contact.

about.html
The About Us page provides information about the company or project. It contains basic static content related to the application's purpose or the team behind it.

contact.html
This page includes a contact form where users can reach out for inquiries or feedback. Fields typically include name, email, and message.

products.html
This page displays a list of products offered by the company. Each product includes an image, description, and a button to add it to the cart.

auth.html
A navigation page that provides quick access to both login and registration modules. It serves as a simple redirection hub for authentication.

login.html
Contains the login form where users input their credentials (email and password). The form sends a POST request to login.php for authentication.

register.html
This page provides a registration form where new users can sign up. The form collects their email and password, then sends a POST request to register.php to store the data in the database.

----PHP Files----
login.php
Handles the login logic. It:

Connects to the MySQL database.
Checks if the user exists by querying the users table using the provided email.
Verifies the password entered by the user against the stored password in the database.
Displays a success message upon successful login or an error message if authentication fails.
register.php
Manages the user registration process. It:

Accepts email and password inputs from register.html.
Saves the provided email and password into the users table in the MySQL database.
Includes error handling for duplicate email entries and other database-related issues.
Displays appropriate messages for successful or failed registration.
----CSS and JavaScript----
style.css
Defines the visual styling of the web application. It ensures consistent layout and design across all pages, including:

Styling for headers, forms, buttons, and navigation menus.
Responsive design to enhance usability on different screen sizes.
script.js
Currently included for potential dynamic behaviors on the frontend. It could be extended to handle form validation, interactive UI components, or AJAX requests.

----Project Functionality Overview----
User Authentication: Users can register through the register.html page. Their credentials are securely stored in the database. Once registered, they can log in through the login.html page. The backend handles login and registration through login.php and register.php, respectively.

Navigation: The application allows users to navigate between different pages (Home, Products, About Us, Contact). The navigation bar is consistent across all pages for a seamless experience.

Dynamic User Feedback: After login or registration, users receive immediate feedback about the success or failure of their action.

----Database Structure----
The project uses a MySQL database named allorna. It contains a single table named users with the following columns:

id (INT, Primary Key, Auto Increment)
email (VARCHAR, Unique)
password (VARCHAR)
The database is accessed using prepared statements to prevent SQL injection and ensure data security.

----Important Notes----
Security: While this project provides a basic structure, for real-world deployment, always hash passwords using password_hash and verify using password_verify to enhance security.
Scalability: The project is designed with scalability in mind, allowing additional features such as product management, cart systems, or user sessions.
