[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15935599&assignment_repo_type=AssignmentRepo)
# Angular Dev-Duel
# Assignment Overview

For this assignment, students are tasked with developing a small full-stack application that interfaces with [GitHub's API](https://developer.github.com/v3/) in order to aggregate, transform, and display a given user's profile and repository data.  

The assignment is composed of two independent pieces that make up a simple full-stack application.
	
1. A [Node](https://nodejs.org/en/docs/) **server** exposing an API using [Express](https://expressjs.com/en/api.html)
2. A Web-based **client** using [Angular](https://angular.io)


This specification is split into multiple parts. 
- [Assignment Overview](README.md) - Gives a general overview of the assignment and technical requirements
- [Development](DEVELOPMENT.md) - Instructions on setting up development environment and servers
- [Server](server/README.md) - Information specific to Node API implementation

---

## Requirements Overview

Students will implement a web application to communicate with a provided supporting API to get the following data for a given user's GitHub profile. The backend has been implemented as a Node API using Express that will call GitHub's API to fetch data necessary to derive/display the data specified. The user will see a home page where they can choose between two options: **inspect** or **duel**.

## Token setup

In order to increase your rate limit with the GitHub API and improve overall testability of your application as you develop, you will need to create and use a GitHub token. Instructions for this process are included in the [token-setup/README.md](token-setup/README.md).

# Getting Started with the Client
Students will build a client side application using Angular. The app will consist of a Home Page, an Inspect Page, and a Duel Page. Refer to the wireframe below as a basic guideline for the structure.

### Inspect
On the **inspect** page, a client will enter a username, submit, and be displayed the user's `profile` data.

### Duel
For the **duel** page, it is left up to the student to choose how a winner is determined. Two usernames will be entered, submitted, and their `profile` data displayed. Using the fields that are received from the API and displayed to the user, the student will need to visually signify differences in the data displayed as well as make an overall winner apparent to the user.

## Error Handling
Display the error messages given by the API.

---

### Wireframe
[Figma Wireframe](https://www.figma.com/file/nas0hU6wALYMd22JjSRzbz/Dev-Duel?node-id=0%3A1)

## As mentioned in the Assessment Overview at the top of this page, additional information and token setup for the server can be found in its respective folder `README.md`.

#### [server/README.md](server/README.md)
