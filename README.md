# The Wild Oasis - Staff-Side Web Application

## Overview

**The Wild Oasis - Staff-Side Web Application** is a powerful administrative interface designed to manage bookings, cabins, users, and settings for a hotel. Built with React.js, this application provides a seamless and efficient experience for staff members to oversee day-to-day hotel operations. The staff-side application integrates with Supabase for data storage and real-time updates.

## Features

### Authentication

- Secure user authentication with sign-up, login, and logout functionality.
- User profile management, including password updates and avatar uploads.

### Booking Management

- Full CRUD (Create, Read, Update, Delete) operations for bookings.
- Filter, sort, and paginate bookings for efficient data management.
- Prefetching of adjacent pages for smooth navigation.

### Cabin Management

- Add, edit, view, and delete cabins with image upload support.
- Robust error handling for image uploads to ensure data consistency.

### Settings Management

- Update hotel configurations in real time through the settings page.

### User Management

- Create new users with an intuitive sign-up form.

### Global Features

- Dark mode support with `DarkModeProvider`.
- Responsive design styled using `styled-components`.
- Comprehensive error handling with `ErrorBoundary`.

## File Structure

```
📂 src
├── 📂 context
│   └── DarkModeContext.jsx
├── 📂 data
│   ├── data-bookings.js
│   ├── data-cabins.js
│   ├── data-guests.js
│   └── Uploader.jsx
├── 📂 features
│   ├── 📂 authentication
│   ├── 📂 bookings
│   ├── 📂 cabins
│   ├── 📂 check-in-out
│   ├── 📂 dashboard
│   └── 📂 settings
├── 📂 hooks
│   ├── useLocalStorageState.js
│   ├── useMoveBack.js
│   ├── useOutsideClick.js
│   ├── useUrl.js
│   ├── useSignup.js
│   ├── useUpdateUser.js
│   ├── useUser.js
│   ├── useBookings.js
│   └── useDeleteBooking.js
├── 📂 pages
│   ├── Account.jsx
│   ├── Booking.jsx
│   ├── Bookings.jsx
│   ├── Cabins.jsx
│   ├── Checkin.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── PageNotFound.jsx
│   └── Users.jsx
├── 📂 services
│   ├── apiAuth.js
│   ├── apiBookings.js
│   ├── apiCabins.js
│   ├── apiSettings.js
│   └── supabase.js
└── 📂 ui
    ├── AppLayout.jsx
    ├── Button.jsx
    ├── DarkModeToggle.jsx
    ├── ErrorFallback.jsx
    ├── Heading.jsx
    ├── Modal.jsx
    ├── Pagination.jsx
    ├── ProtectedRoute.jsx
    ├── Spinner.jsx
    └── TableOperations.jsx
```

## Technologies Used

- **Frontend**: React.js
- **State Management**: React Query
- **Styling**: Styled Components
- **Backend**: Supabase
- **Routing**: React Router DOM
- **Error Handling**: React Error Boundary
- **Notifications**: React Hot Toast

## How to Run the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/meierrene/the-wild-oasis.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 17-the-wild-oasis
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Key Components

### Pages

- **Dashboard**: Overview of key hotel metrics.
- **Bookings**: Manage all bookings with filtering, sorting, and detailed views.
- **Cabins**: View and manage cabin data, including adding and updating cabins.
- **Settings**: Update global hotel settings.
- **Users**: Create new user accounts.
- **Authentication**: Secure login and account management.
- **404 Page**: Custom error page for undefined routes.

### Custom Hooks

- **`useLocalStorageState`**: Persists state in local storage.
- **`useMoveBack`**: Provides navigation to the previous page.
- **`useOutsideClick`**: Detects clicks outside a specified element.
- **`useUrl`**: Reads and updates URL parameters dynamically.
- **`useSignup`**: Handles user registration.
- **`useUpdateUser`**: Manages user profile updates.
- **`useUser`**: Fetches authenticated user data.
- **`useBookings`**: Fetches bookings with filters and pagination.
- **`useDeleteBooking`**: Deletes bookings and updates the cache.

### APIs

- **`apiAuth.js`**: Handles user authentication and profile updates.
- **`apiBookings.js`**: Manages booking operations.
- **`apiCabins.js`**: CRUD operations for cabins.
- **`apiSettings.js`**: Fetches and updates settings.

## Deployment

The staff-side web application is deployed on Vercel. You can access it here:
[The Wild Oasis Staff-Side Application](https://the-wild-oasis-rm.vercel.app)

## Course Link

This project was created as part of [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/).

## License

This project is licensed under the MIT License.

---

Feel free to update this README file as needed! If you have any issues or need further clarification, let me know. 😊
