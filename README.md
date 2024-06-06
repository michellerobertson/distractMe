# distractMe

## Overview

distractMe is a full-stack web application designed to help users manage mental health and anxiety by providing a quick and engaging distraction. When users feel overwhelmed by stress or negative thoughts, they can click a button to receive random, interesting facts that help shift their focus and calm their minds.

### Problem

In today's fast-paced world, many people struggle with mental health issues, including  anxiety. When anxiety takes hold, it can be difficult to break free from the cycle of anxious thoughts. Traditional methods of managing anxiety, such as deep breathing or mindfulness, are not always effective for everyone. distractMe addresses this problem by offering a simple and accessible way to divert the mind from stressful thoughts, providing a mental break that can help users regain a sense of calm and control.

### User Profile

Target Users:
Individuals experiencing stress, anxiety, or mental fatigue.
People looking for quick mental distractions to break the cycle of stressful or negative thoughts.
Users of all ages who need a simple, accessible tool for managing their mental health and calming their mind.

Usage:
Users can access the app during moments of high stress or anxiety.
They will use the app by simply clicking a button to receive random, interesting facts that help shift their focus away from their stressors.

Special Considerations:
The app must have a simple and intuitive user interface to ensure ease of use for individuals who may be in a state of distress.
Ensure quick loading times and responsive design for use on various devices (mobile, tablet, desktop).

### Disclaimer

The facts provided in this app are sourced from a third-party API. As a result, I cannot guarantee that all facts will be suitable for all ages or situations. Please use discretion when viewing the content.

### Features

Random Fact Generator:
As a user, I want to click a button to receive a random fact so that I can quickly divert my mind from stress.
As a user, I want the random facts to be diverse and interesting to keep my mind engaged.

Refresh Fact:
As a user, I want the option to refresh the fact to see a new one without reloading the page to continue distracting myself if the first fact is not effective.

User-Friendly Interface:
As a user, I want a clean and simple interface so that I can use the app without any confusion or difficulty.
As a user, I want the app to be responsive and accessible on various devices, including my phone, tablet, and computer.

Calming Design:
As a user, I want the design of the app to be visually calming with soothing colors and minimal distractions to enhance the app’s stress-relief purpose.

## Implementation

### Tech Stack

Frontend:
Utilizing React to construct a dynamic, user-friendly interface.

Backend:
Leveraging Node.js and Express to ensure robust server-side functionality.

Libraries & Imports:
Sass
JavaScript
Axios
React Router
CORS
Dotenv
Nodemon

### APIs

API Ninjas: Facts API

Description: The Facts API provides tons of random interesting facts about science, literature, philosophy and other cool topics.
URL: <https://api.api-ninjas.com/v1/facts>
Authentication: Requires an API key.

### Sitemap

Home Page
Description: Main page where users can click a button to get random facts.

Fact Display Page
Description: Page displaying the random facts retrieved from the API.

About Page
Description: Information about the app and its purpose.

### Mockups

### Data

As the application fetches facts from a third-party API, there are no data structures or relationships involved in this project. The app operates on a simple request-response model, where users interact with the frontend to request random facts, which are then fetched from the backend server and displayed on the frontend. There is no requirement for persistent storage or management of user-generated data.

### Endpoints

GET /v1/facts

- Returns one (or more) random facts.

Parameters:
Limit (optional). How many facts to return (premium feature). Must be between 1 and 100. Default is 1.

Sample Response:

[
  {
    "fact": "The tallest tree recorded is located in Humboldt Redwoods State Park, California. It is a coast redwood and has been measured at 117 metres high"
  }
]

### Auth

No authentication is required to access the endpoint. Users can retrieve random facts without the need for authentication.

## Roadmap

Set Up Development Environment:
Create React App with necessary dependencies.
Create Express server with necessary dependencies.
Set up Axios for API requests in the client app.

Implement Frontend Components:
Create Main page with button to retrieve facts.
Create About page with details about app and its purpose.
Set up routing between Main and About pages.

Integrate with Facts API:
Connect frontend to backend/Facts API for retrieving facts.
Implement logic for fetching and displaying random facts.

Design and Styling:
Style Main and About pages for a calming and user-friendly interface.
Ensure responsiveness for various devices.

Testing and Debugging:
Test frontend components for functionality and responsiveness.
Debug any issues with API integration or user interface.

## Nice-to-haves

User Preferences/Additional Endpoints: Allow users to customize their experience by selecting their preferred type of distraction (fact, trivia, joke).
GET /v1/trivia
GET /v1/jokes

Accessibility Options:
Ensure accessibility by providing options for adjusting font sizes, color schemes, or interface elements to accommodate users with different needs.

Integration with Calming Tools:
Integrate with external calming tools or resources, such as meditation apps, ambient sound generators, or relaxation playlists, to offer a comprehensive stress relief experience.

Content Filtering:
Implement content filtering mechanisms to ensure that the random facts displayed are appropriate for all users.
Explore methods such as keyword filtering, natural language processing, or machine learning to identify and filter out potentially inappropriate or triggering content.
Provide a seamless user experience by ensuring that the filtering process does not impact the responsiveness or performance of the app.
Explore options for adding a user reporting feature to allow users to flag inappropriate content. This could help enhance the effectiveness of the filtering system by gathering feedback from the users.
