# Apollo 24/7 Clone - Destination Page

## 1. Project Overview

* **Goal:** Create a functional clone of the Apollo 24/7 "General Physician/Internal Medicine" destination page.
* **Focus:** Implement the core features of this page, with an emphasis on doctor listings and filter functionality.
* **Tech Stack:**
    * **Frontend:** React, Next.js, HTML, Inline CSS
    * **Backend:** Express.js
    * **Database:** MongoDB
* **Key Features:**
    * Doctor listing display (cards format)
    * Functional filters (Specialization, Location)
    * Search engine optimization (SEO)
    * Backend API for data management (Add Doctor, List Doctors with Filters and Pagination)
    * Pagination component (displays 4 cards per page, 3 pages in UI)

## 2. Functional Requirements

* **2.1 Backend (Express.js & MongoDB)**

    * **2.1.1 Database Schema (MongoDB):**
        * Design a MongoDB schema to store doctor information. The schema should include fields such as:
            * `name` (string): Doctor's name
            * `specialization` (string): Doctor's medical specialty
            * `location` (string): Doctor's location
            * `experience` (number): Years of experience
            * `fees` (number): Consultation fees
            * `language` (string): Languages spoken
            * `hospitalVisit` (boolean): Whether hospital visit is available
            * `onlineConsult` (boolean): Whether online consultation is available
            * `rating` (number): Doctor's rating
            * Other relevant fields (e.g., `bio`, `image`, etc.)
    * **2.1.2 API Endpoints:**
        * **Add Doctor (POST /api/add-doctor):**
            * Accept doctor data in the request body.
            * Store the doctor data in the MongoDB database.
            * Return a success/failure response with appropriate status codes (e.g., 201 Created, 400 Bad Request, 500 Internal Server Error).
        * **List Doctors with Filters and Pagination (GET /api/list-doctor-with-filter):**
            * Accept filter parameters in the query string:
                * `specialization` (string, optional): Filter by specialization.
                * `location` (string, optional): Filter by location.
                * `page` (number, optional, default: 1): Page number for pagination.
                * `limit` (number, optional, default: 4): Number of doctors per page (fixed at 4)
                * `hospitalVisit` (boolean, optional): Filter by hospital visit availability.
                * `onlineConsult` (boolean, optional): Filter by online consult availability.
                * `experience` (array of strings, optional): Filter by experience range
                * `fees` (array of strings, optional): Filter by fees range
                * `language` (string, optional): Filter by language
            * Apply the filters to the doctor data in the MongoDB database.
            * Implement pagination to return a subset of doctors based on the `page` and `limit` parameters.  The backend should calculate `totalPages` and return it in the response.
            * Return an array of doctor objects that match the filters, along with pagination metadata (e.g., `currentPage`, `totalPages`, `totalDoctors`).
            * Return appropriate status codes (e.g., 200 OK, 400 Bad Request, 500 Internal Server Error).
    * **2.1.3 Backend Technologies:**
        * Express.js for building the REST API.
        * Mongoose for interacting with the MongoDB database.
        * CORS (Cross-Origin Resource Sharing) to handle requests from the Next.js frontend.
        * Postman for testing API endpoints.

* **2.2 Frontend (Next.js)**

    * **2.2.1 Page Structure:**
        * Create a Next.js page (e.g., `pages/doctors.js`) to display the doctor listing.
        * The page should include the following components:
            * `Header`: (Existing component)
            * `Filters`: (Existing component, modified for UI)
            * `DoctorCard`: (Existing component)
            * `Pagination`: (New component, to be created)
    * **2.2.2 UI Components:**
        * **Header:**
            * Display the Apollo 24/7 logo.
            * Include a location selection element.
            * Implement a search bar for searching doctors (functional for location).
            * Include Login and Sign Up buttons.
        * **Filters:**
            * Display filter options in a sidebar.
            * Implement the following filters:
                * Specialty (dropdown)
                * Location (dropdown)
                * Mode of Consult (checkboxes): Hospital Visit, Online Consult
                * Experience (checkboxes with ranges)
                * Fees (checkboxes with ranges)
                * Language (dropdown)
            * The filters should be functional, meaning they update the doctor listing when applied.
        * **DoctorCard:**
            * Display doctor information in a card format.
            * Include details such as name, specialization, location, experience, rating, fees, etc.
        * **Pagination:**
            * Display pagination controls (e.g., page number buttons).
            * Display a maximum of 3 page numbers at a time.
            * The component should receive `currentPage`, `totalPages`, and a `paginate` function as props.
            * The component should call the `paginate` function when a page number is clicked.
    * **2.2.3 Data Fetching:**
        * Use Next.js's `useEffect` to fetch doctor data from the backend API (`/api/list-doctor-with-filter`).
        * Pass filter parameters and the current page number to the API endpoint.
        * The API should return the paginated data.
    * **2.2.4 Search Engine Optimization (SEO):**
        * Use Next.js's `<Head>` component to set the page title and meta description.
        * Ensure the page content is rendered on the server-side for better crawlability.
    * **2.2.5 UI/UX:**
        * Use inline CSS for styling.
        * Implement a responsive design.
        * Ensure a clear and user-friendly interface.
        * Implement a sidebar that can be opened and closed.

* **3. Non-Functional Requirements**

    * **Performance:** The page should load quickly and efficiently.
    * **Scalability:** The backend should be able to handle a large number of doctors and user requests.
    * **Maintainability:** The codebase should be well-organized, readable, and easy to maintain.
    * **Error Handling:** Implement proper error handling in both the frontend and backend.
    * **Security:** Consider basic security measures (e.g., input validation).

* **4. Code Structure (Based on Provided Information)**

    * **Frontend (Next.js):**
        * `pages/doctors.js`: Main page component.
        * `components/Header.js`: Header component.
        * `components/Filters.js`: Filters component.
        * `components/DoctorCard.js`: Doctor Card component
        * `components/Pagination.js`: Pagination component.
    * **Backend (Express.js):**
        * API endpoints defined in a separate file (e.g., `routes/doctorRoutes.js`).
        * Mongoose models defined in a separate file (e.g., `models/doctorModel.js`).
        * Database connection logic in a separate file (e.g., `config/db.js`).

* **5. Testing**

    * **Backend:**
        * Use Postman to test the API endpoints.
        * Verify that the endpoints return the correct data, apply filters correctly, and handle pagination.
        * Test error handling scenarios.
    * **Frontend:**
        * Test the UI components.
        * Verify that the filters work correctly.
        * Test the data fetching from the backend.
        * Check for responsiveness and cross-browser compatibility.
        * Use Next.js's built-in testing tools (if applicable).

* **6. Deployment**

    * Deploy the Next.js frontend to a hosting platform (e.g., Vercel, Netlify).
    * Deploy the Express.js backend to a hosting platform (e.g., Heroku, AWS).
        * Ensure the frontend and backend are correctly configured to communicate with each other.

## 7.  Running the Application

To run the application, follow these steps:

1.  **Install dependencies:**

    * **Frontend (Next.js):**

        ```bash
        cd frontend
        npm install
        ```

    * **Backend (Express.js):**

        ```bash
        cd backend
        npm install express mongoose cors  # Add cors here
        ```

        * Make sure you have MongoDB installed and running.

2.  **Start the frontend:**

    ```bash
    cd frontend
    npm run dev
    ```

3.  **Start the backend:**

    ```bash
    cd backend
    node app.js
    ```

This will start both the Next.js development server for the frontend and the Express.js server for the backend.

