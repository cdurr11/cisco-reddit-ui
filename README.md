** CISCO Reddit API GUI **

This application was built using the React.js framework.

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

--How the Application Works:
The bulk of the app is centered in App.js.  The css for the app is mostly located
in App.css.  

In App.js there is one central component called App.

- constructor -
The state of the app is managed in this.state.  The initial values for state are
defined in the constructor.  The state is the central entity that stores the
values entered in the text fields.  NumberValue stores the value of the what was
specified in the number text field and value is what was stored in the subreddit
field.

- handleSubmit -
This catches errors by checking if the value entered in the number field, is in
fact a number.  If it is not a number the user is alerted gracefully.
If it is a number, a url is concatenated with the subreddit field value and
the number field value.  This URL is then fed into a fetch command, where a
usable JSON object is returned.  This data is then fed into the
parseAPIData function (discussed below).

- handleChange -
Sets the value of the state when text is entered into the subreddit field

- handleNumberChange -
Sets the NumberValue of the state when text is entered into the number field

- parseAPIData -
This function first checks to see if the data returned was an error.  If it was
then an alert is generated describing the error that was returned.  If an error
was not returned then the data is parsed.  The data extracted is the title of
the article, the author of the article, and the URL of this article.  This data
is then placed inside an immutable array to be accessed later.  This is done for
all of the articles that are retrieved.  They are stored in this.state.articles.
The format is [title, author, url].

- render -
render is composed of all of the visual elements.  The layout of the app is
organized in here.  All of the classes specified in the html elements correspond
to classes in App.css.  In render is also where the data from parseAPIData is
received.  Conditional rendering is used to map all of the articles to html
elements.  This generates n div elements representing articles where n
is the length of this.state.articles.  Also each div is linked here so that when
it is clicked, the user is taken to the reddit article.
