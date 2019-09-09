## Reddit API GUI

This application was built using the React.js library.

In order to launch this application locally, you must first install Node.js and
npm.  You can install both of those here ---> https://www.npmjs.com/get-npm

Scroll to Download Node.js and npm, select that, and then follow the instructions.
Once you have npm successfully installed (you can check by doing "node -v" in the
terminal) you can launch the application.

To Launch the application, cd to the repository on your local machine using
terminal.  Once you are inside, do "npm start".  This should launch the
application on localhost:3000.

--Using the Application:
The app uses the reddit api to retrieve the the top articles in a certain
subreddit.  

To interactively query the API, type the subreddit you wish to query into the
subreddit field.  Then, enter a number in the next field.  This number
represents the maximum amount of queries that will be returned.  

After you have filled all of those fields, press enter.  

The result of your queries will be returned below.

The title and author of the top articles will be returned.  Clicking on any of
the articles will then open a new window on reddit, displaying the article.

For example, type in the first field "bitcoin" and the second field "10" will
yield the top 10 articles on the bitcoin subreddit.

The bulk of the app is centered in App.js.  The css for the app is mostly located
in App.css.  

