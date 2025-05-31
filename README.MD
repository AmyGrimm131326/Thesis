# Thesis #

 - [Intro] 
 - [Install Dependencies](#How-to-install-dependencies)
 - [Start Mongo](Start-Mongo)
 - [Start Server](#Start-Server)
 - [Access Server](#How-to-access-the-server)
 - [Seed the Database](#How-to-connect-to-and-seed-the-database)
 - [Instructions](#Instructions-for-typical-user)
 - [References](#References)
---

## Intro ##
Welcome to my Pizza By The Slice & Shakeups on Ice. I have a mobile Pizza RV that serves pizza by the slice or an entire pizza that is XL. The XL pizza can be ordered online and picked up at a location that can be found by looking at my map on the location page. If I move I only move my RV on the hour if I move at all.

---

## Start Mongo ##
Open a floating terminal and type :

```bash
  `/usr/local/mongodb/bin/mongod --dbpath ~/.mongo`
```

## Install Dependencies For Backend##
Let's install our dependencies. Start by opening your terminal in the projects main directory.

```bash
`cd server`
`npm i`
```
---
## Database Seed ##

Every time you refresh your page your seed will be there.

``` bash
  `npm run seed`
```
---

## Start Server ##
Once all of the dependencies are successfully installed you can start the server by typing the following into the terminal

```bash
  `npm start`
```
---
---
## Install Dependencies for Front End##
Let's install our dependencies. Start by opening your terminal in the projects main directory.
```bash
`cd client`
`npm i`
```
---
## Start React ##
Once all of the dependencies are successfully installed you can start your React by typing the following into the current terminal

```bash
  `npm start`
```
---
 

## Instructions ##
 
 1. Once the user has loaded the page onto their browser, they will see the home/landing page. At the top of the home page is the nav bar. Within the nav bar are links to location page and the sign-in modal. The image of a pizza at the top of the nav bar is clickable and will take the user back to the home page when clicked. If the user clicks "Sign In", a modal will appear with areas to input the user email address and password. Under the nav bar is a small blurb about our business. Folling the blurb about our business is a button to sign up for exclusive offers. Once the button is clicked a modal will appear with areas for the user's first name, last name, email address, password and verify password. Once the users clicks the submit button the modal will disappear and the user will be taken back to the home page. Below the sign-up is the menu and cart to order your products. At the top of the menu is a link for "Carry Out" that takes you to the locations page. The menu is divided into 3 sections, By The Slice, XL Speciality, Shakeups. Once the user has made their selections a dropdown appears with the item, the number of items and the total price. When the user is ready to check out they will click the "$$ Check Out $$" button. Once the check out button is clicked a modal will appear with areas for the first name, last name. credit card number, card type and the cvc number. The total amount due appears at the button of the modal above the submit button to submit payment for the order. Once the payment has been submitted a second modal will apear thanking the customer for their order and let them know when their order will be ready for pick up. At the bottom of the page is the footer, with where to find us on the web, our phone number, email, a clickable link for our "Online Order Policy" and a clickable link to find our location. The pizza icon is the link to the admin page.
 2. Once the user clicks on the "location" link they will see the location page. At the top of the location page is the nav bar. Within the nav bar are links to home page and the sign-in modal. The image of a pizza at the top of the nav bar is clickable and will take the user back to the home page when clicked. If the user clicks "Sign In", a modal will appear with areas to input the user email address and password. You will then see a blurb on how we move on the hour if we move at all. There is a map located under the blurb to show where we are located at that time. At the bottom of the page is the footer, with where to find us on the web, our phone number, email, a clickable link for our "Online Order Policy" and a clickable link to find our location. The pizza icon is the link to the admin page.
 3. THE ADMIN PAGE once you sign in by clicking on the pizza icon. You use email [admin@gmail.com], and the password is [adminOne]. You are able to go to the admin page and review the Current Orders and once you push complete it will go to a Previous Orders page. You can click on the Previous Orders and see what was ordered, you also have the option to delete it. You Sign Out of the Admin Page by clicking the Sign Out in the NavBar. Also on the tab at the top of the page it has how many orders you have to complete when you are on Current Orders page.


## References ##

1. Wikipedia
2. Alysha Eppard
3. light House

1. I used wikipedia to get some of the images I used in my project.

2. Alysha helped me when I would not be able to figure out how to target something and how to utilize the logic I needed and get my admin side running the way I wanted.

3. Light House had some images I used.

## Essay 548 Words ##
	For my thesis I converted my class components to functional components.  This is a more direct way to use the React state and lifecycle. Looking towards the future hooks probably will become the primary way of writing React Components. So I wanted to challenge myself by changing my classes to Hooks. 
	One of the things I learned is that you can’t use Hooks inside a class component, but you can mix classes and function components with Hooks. Class components are more complex because of having to keep track of lifecycle methods and all the side effects that happen like re-rendering and data flow management. When you are building your component it is the foundation of the application. In React these components are used to build the User Interface of the application by splitting the User Interface features and functions into independent and reusable modules. Every component is a JavaScript class or function. The function will accept inputs called properties or (props) and return a React element. 
	The Elements contain the process and information of how the user interface will look and appear to the user using the application. Functional components in React are simple JavaScript functions. Using Class Components are characterized by the usage of this.state() and this.setState() in React and when using functional Components you use the useState() Hook along with others. These are used to manage the component’s internal state. Functional Components in React are very valuable in instances when you want to separate state management from components. When you use functional components you do not have to worry about hidden state and there are not as many side effects when it comes to functional components; so for every input, the function will have exactly one output. They are easier to read and write. The syntax is less complex than the class components and it is easier to read. 
	The use of deconstructing props is a real benefit so you can see what is going on and what is coming into of the component. Functional components are easier to debug being a benefit. When it comes to performance optimization there really is not a difference in terms of which components benefit you more performance wise. Using Class Components are looked at as lengthy and complicated and more complex. When you build bigger web applications the Functional Component will speed up the application when it is loading. You might not be able to tell with smaller applications but it has its perks with the loading time on bigger applications for sure. I had a lot of difficulties converting my class components in to functional components. It was hard to figure out how to change the Did mount into Use state and just how all that works together. It seems like I struggled at it a little bit more than others, but I do not want to just stop coding. I would like to continue doing coding so I can get more familiar with how everything works in React. I did enjoy building each piece and being able to watch how my application came together piece by piece. I do not work well under pressure so I usually start projects before I fully understand the language and then I keep working at my understanding of the language daily. 
