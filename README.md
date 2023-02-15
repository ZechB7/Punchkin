# Punchkin
![license](https://img.shields.io/badge/license-MIT-blue)
## Description
A rendition of the Munchikin game by Steve Jackson. 

## Table of Contents
* [Wireframe](#wireframe)
* [Installation](#installation)
* [Usage](#usage) 
* [Future Development](#future-development)
* [License](#license)
* [Questions and Contributing](#questions-and-contributing)
* [Deployment](#deployment)

## Wireframe
[Figma](https://www.figma.com/file/2D5urK6kLu8lUUvuaFahwF/Munchkin-by-Punchkins?node-id=0%3A1&t=MdM5GEmrnJlCagDx-1)

## Installation
To install necessary dependencies, run the following command in the terminal using node.js:\
'npm init' --> 'npm i'\
mysql is also required to be installed to run this locally.

## Usage 
To start the server locally fisrt follow the installation instructions above then run the following commands:\
First go into .env and add user as root and password for your mysql\
Inside the db folder run 'mysql -u root -p' --> 'SOURCE schema.sql'\
On package.json run 'npm start' or use 'nodemon server.js'\
When creating a password it needs to be at least eight characters long\
In this first iteration the game play is not functioning so to see a demo replace .com/profile or the other pages with /demo and reload the page to see different information.

![punckin homepage](./assets/punch-homepage.png?raw=true)\
![punckin login](./assets/punch-login.png?raw=true)\
![punckin profile](./assets/punch-profile.png?raw=true)\
![punckin playgame](./assets/punch-playgame.png?raw=true)

## Future Development
* Add the game logic so that the game can be played
* More efficient data strategy-pull cards from database, then handle completely within front-end javascript
* Add more of the cards from the original game
* Add multiplayer and single player playable options
* Work on the styling of the pages, add graphics, etc.

## Deployment
This repo is hosted on Heroku\
[Heroku](https://punchkin.herokuapp.com/)

## License
This project is licensed under the MIT license.

## Questions and Contributing
Contact one of the contributors\
[zechariahbarrett@outlook.com](mailto:zechariahbarrett@outlook.com) GitHub: [zechB7](https://github.com/zechB7)\
[r3ub3nsandw1ch@gmail.com](mailto:r3ub3nsandw1ch@gmail.com) GitHub: [RoobyDoobster](https://github.com/RoobyDoobster)\
[joshuagoeke@gmail.com](mailto:joshuagoeke@gmail.com)GitHub: [joshuagoeke](https://github.com/joshuagoeke)\
[Kylehippledev@gmail.com](mailto:Kylehippledev@gmail.com) GitHub: [KlyDesign](https://github.com/KlyDesign)