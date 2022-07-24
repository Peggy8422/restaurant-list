# My Restaurant List
A simple web application for fav-restaurants collection (as a demo project) created with Node.js by using Express.

![Index page](/public/AC_2-3_A1.jpg)

## Features
- listing all favorite restaurant collection from restaurants.json file
- checking each restaurant's information when clicking the card (go through the specific route)
- searching restaurant by title and category

### Show Restaurant Details
click on the whole card link to get the page of showing restaurant's details
### Searching
type the title or the category of restaurants in search bar

## Getting Started
1. run terminal and check if installed node.js and npm 
2. use `git clone` to clone this project to your local computer
```
git clone https://github.com/Peggy8422/restaurant-list.git
```
3. cd to the project file and install npm, use the command below:
```
npm install
```
4. use npm to install nodemon, use the command below:
```
npm install -g nodemon
```
5. start running the project, use the command below:
```
npm run start (for first start)
npm run dev (when developing)
```
6. if the message below shows in terminal, the project is running successfully. 
```
Express is running on http://localhost:3000
```
7. open the browser and get to http://localhost:3000
8. to stop listening, press `ctrl+C`

## Develop Tools and Packages Used
- Node.js @16.16.0
- Express @4.16.4
- Express-handlebars @3.0.0
- Bootstrap 5.1.3
- Font-awesome 5.8.1

