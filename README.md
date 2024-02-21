# Writeup

# Walk us through your development process. 
## THE WEBSITE IS NOW FULLY DEPLOYED AND AVAILABLE HERE: https://hack-the-north-frontend-dev-yhaq.vercel.app/

## 1. 
Hey Hack the North frontend team! I planned out the structure and design with a lot of inspiration from the documentation on notion. 
For example, as the document mentioned using Postman to fetch the data from the API first, that was my initial step in the process. 
I decided to use GraphQL as my experience with it was less extensive compared to my experience with Rest APIs, and there is truly no better time to experience learning than through projects. 
After analysing the quantity and contents of the JSON response, I set to work creating a script with JavaScript, Express, and Node, as these were all very familiar technologies that would have 
high chemistry with any frontend framework of my choice. I wanted to replicate the API call and fetching of data without Postman and got it done quickly with these technologies. 
I then got to work on the largest chunk of the project, and that was the frontend portion! I decided to use Vite with React, the former for speed and the latter for familiarity and strength in components, 
which together with Express and Node created a deviation of the MERN stack. I also used Boostrap for elements like buttons, dropdowns, and cards, but created the entirety of the functionality in JavaScript/JSX. 
I decided to forego MongoDB as any interaction with data would be limited to a login authentication screen, whose credentials could be hardcoded in the server. 
I actually ran into a significant number of issues with the project, the first of which remains a pain for any frontend developer, the dreaded CORS error. 
This prevented me from calling the API directly from the frontend with a library like axios, which caused a significant headache while managing the integration of both the frontend and backend of the project. 
Had this project not experienced that early CORS error, it may not have even needed a backend at all. I solved these problems with a lot of console.logs in order to identify where exactly an error would occur. 
I also had an issue later on, as the token to signify whether or not a user was logged in was not being parsed. I would narrow down the issue to a certain section of code which made fixing it much more manageable. 
I’m particularly proud of the functionality of the design. In addition to the requirements, I also went a step further by implementing a dropdown menu to filter by event type and even further filter through 
the use of a search bar, as was suggested in the Notion document. I also spent extensive time working with CSS animations, particularly the rising and glowing bubble effect on the home page. 
I also invested quite extensively in this project, working for 4 entire full days to ensure that all bugs were sorted out. 

## 2. 
Given additional time there would be some things that I would have changed. While I did reference foregoing the backend/database in the earlier question, 
I do think that implementing the option for users to perhaps submit forms of suggestions for future workshops or the like would be extremely helpful. 
This would send data to the backend database which would require the integration of MongoDB through a JavaScript library like Mongoose, which would be able to be implemented through the creation of a models folder.
And while it was suggested in the notion document, I was unable to create an option to drag around different events and have them persist in their new order, which would be able to be accomplished through a 
React library like redux. A significant portion of the testing done for logging in and checking conditional rendering was also completed through primarily the screen size of just my current laptop. 
It would be crucial to ensure testing would be done through a multitude of different screen sizes equally, although I did ensure responsive design through the use of measurements like rem instead of px. 

## 3.
The website is available here, hosted on vercel: https://hack-the-north-frontend-dev-yhaq.vercel.app/ 
The credentials to log in are:
- Email: jonathankim@hackthenorth.com
- Password: waterlooforever

If there are any questions, feel free to contact me via email jonathan.jiwon.kim@gmail.com 
