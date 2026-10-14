# Student Registration System — Task 3

A responsive student registration app for the Cognifyz Full Stack Development Internship — Task 3. It uses Node.js, Express, and EJS, with all presentation styles in `public/styles.css`.

## Requirements

- Node.js 18 or newer (includes npm)
- A web browser

## Install and run on Windows

1. Open PowerShell or Command Prompt and change to this project folder:

   ```powershell
   cd "$HOME\OneDrive\Desktop\Task3_Responsive_Design"
   ```

2. Install the app dependencies:

   ```powershell
   npm install
   ```

3. Start the server:

   ```powershell
   npm start
   ```

4. Open **http://localhost:3000** in a browser. Keep the terminal open while using the app; press **Ctrl+C** to stop the server.

The app listens on port `3000` by default. Set the `PORT` environment variable to use a different port.

## Test the app

1. Submit a full name, valid email address, and department. The confirmation page should show the submitted values.
2. Use **Register another student** to return to the form.
3. Submit the form with missing or invalid values to verify client-side messages and field highlighting.
4. To check server-side validation independently, send a POST request to `/register` with an invalid name, email, or department; the server responds with HTTP 400 and re-renders the form with errors and retained values.
5. Resize the browser to mobile, tablet, and desktop widths. The form changes from one column to a two-column desktop layout and retains visible keyboard focus and hover states.

The app does not persist registrations to a database.
