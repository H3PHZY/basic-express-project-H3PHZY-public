[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/RLBkG_cW)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=23084586)
# In-Class Activity: Extending Your Express Server

## Week 4 - Session 1 - Express.js

## Objective
In the previous activity, you created your first Express server and confirmed that it runs successfully in the browser.

In this activity, you will extend that server by adding additional routes, working with dynamic URL parameters, processing query values, handling POST requests, and implementing simple middleware.

## Learning Goals
By the end of this exercise, you should be able to:

- Define multiple routes in an Express application.
- Use route parameters to capture values from a URL.
- Use query parameters to receive optional data from the client.
- Send structured JSON responses.
- Implement middleware that runs before route handlers.

These tasks represent core Express concepts such as routing, middleware, and request-response handling.

---

## Step 1 — Start Your Existing Express Server

1. Open the project folder you created in the previous activity.
2. Ensure the folder contains your main server file (for example `index.js` or `server.js`).
3. Start the server from the terminal using Node.
4. Open your browser and visit your root route (`/`) to confirm the server still works.

If everything is working correctly, you should see the response message returned by your root route.

> Do not proceed until your server is running successfully.

## Step 2 — Create Additional Pages (Routes)
Web servers normally serve multiple endpoints rather than just one root route.

Extend your Express application by creating two new routes:

### Route 1: `/about`
- Respond to a `GET` request.
- Return a simple text message describing the page.

### Route 2: `/contact`
- Respond to a `GET` request.
- Return a short message containing a fictional contact email.

### Testing
After creating these routes:

1. Restart your server.
2. Test both routes using your browser:
	- `/about`
	- `/contact`

Ensure each route returns a different message.

## Step 3 — Create a Route that Returns Data
Web APIs frequently return structured data rather than simple text.

Create a new route called `/users`.

This route should:

- Respond to a `GET` request.
- Return a list of users.
- Include an `id` and `name` for each user.

You can define a small list of users directly inside your route handler.

### Expected Behavior
When a client visits `/users`, the server should return a list of users in JSON format.

### Testing
Open the route in your browser and observe how the data appears differently from plain text responses.

## Step 4 — Capture Values from the URL (Route Parameters)
Web applications often need to retrieve specific records from a dataset.

Create a dynamic route that accepts a user ID in the URL:

- `/users/:id`

This route should:

- Capture the `id` value from the URL.
- Read the value from the request object.
- Return a response that includes the ID requested by the client.

### Testing
Test the route using several different URLs:

- `/users/1`
- `/users/2`
- `/users/100`

Observe how the server extracts the value from the URL.

## Step 5 — Use Query Parameters
In addition to route parameters, Express can read query parameters from a URL.

Query parameters are optional values added after a question mark in a URL.

Example format:

- `/search?name=value`

Create a new route called `/search`.

This route should:

- Accept a query parameter called `name`.
- Read the value from the request.
- Return a message showing the value provided by the user.

### Testing
Test the route in a browser with a query parameter.

Example:

- `/search?name=alice`

Confirm that the server reads and displays the query value correctly.

## Step 6 — Accept Data from a Client (POST Request)
So far, your server has only returned data. Now you will allow the client to send data to the server.

### Preparation
Your Express application must include middleware that allows it to read JSON request bodies.

Ensure your server is configured to parse JSON data.

### Task
Create a new route that:

- Responds to a `POST` request.
- Receives user data from the request body.
- Sends back a response confirming that the user was received.
- Includes the same data the client sent.

### Testing
Use Postman or Thunder Client to test this route.

Send a JSON object representing a user, for example fields such as:

- `name`
- `age`

Confirm that the server receives the data and returns it in the response.

## Step 7 — Add Middleware
Middleware functions run before the request reaches a route handler.

They are commonly used for tasks such as logging, authentication, or validation.

Create a middleware function that runs for every request.

The middleware should:

- Print a message to the terminal whenever a request arrives.
- Display the request URL in the console.
- Pass control to the next function in the request pipeline.

### Testing
After adding middleware:

1. Restart your server.
2. Visit several routes in your browser.
3. Observe terminal output to confirm the middleware runs for every request.

## Step 8 — Verify All Routes
At this stage, your Express server should support several endpoints.

Verify that all of the following routes function correctly:

| Route | Method | Purpose |
| --- | --- | --- |
| `/` | `GET` | Root page |
| `/about` | `GET` | About page |
| `/contact` | `GET` | Contact page |
| `/users` | `GET` | Returns list of users |
| `/users/:id` | `GET` | Returns a specific user ID |
| `/search` | `GET` | Reads query parameters |
| `/users` | `POST` | Accepts new user data |

Test browser-based routes and API routes (Postman/Thunder Client) where needed.

## Challenge Task (Optional)
Create a Courses API.

Your server should support the following routes:

| Route | Method | Description |
| --- | --- | --- |
| `/courses` | `GET` | Return a list of courses |
| `/courses/:id` | `GET` | Return a single course |
| `/courses` | `POST` | Add a new course |

Define a small list of courses within your application and update it when a new course is created.

## Expected Learning Outcome
After completing this activity, you should be comfortable with:

- Creating routes in an Express server.
- Handling different HTTP methods.
- Working with route parameters and query parameters.
- Receiving data from clients through request bodies.
- Using middleware in the request-response cycle.

These are fundamental concepts required for building APIs using Express.js.