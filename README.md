<h1>LIRI Bot</h1>
<h3><b> by: Tripp Stringfield (application engineer)</b></h3>


<h3><b>Overview</b></h3>

<p>In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.</p><br><br>

<h3><b>Organization</b></h3><br>

<ul><li> Liri is organized as a set of functions. each function will perform a different task that will be passed to the main function of the program runLiri()</li><li> runLiri() will also accept another argument that will be the query term for the function that is trying to be called. ex. runLiri(movie-this,Inception)</li><li>A conditional statement starts the program to determine if the user will be running from the console or using the interactive menu provided by liri.</li></ul><br>

<h3><b>How does Liri run?</h3></b><br>

<p><b>There are 2 different ways that liri can be executed</b><br>
<ul>
  <li><b>(1) Command Line</b> - Liri can accept two arguments from the command line. The first will be the function that you want liri to perform and the second will be the search query that liri will perform the function on.</li><br>

<li><b>(2) Interactive menu</b> - If Liri is run with no other arguments entered in the command line; Liri will provide a list of options that a user can choose from to be performed. Once the function is selected Liri will ask for the search term that the user wants to query.</li><br>
</ul>
</p>
<img src="https://github.com/jastring1/liri-node-app/blob/master/images/Capture.JPG">
<img src="https://github.com/jastring1/liri-node-app/blob/master/images/liri2.JPG">

<h3><b>What can Liri Do?</h3></b><br>

<p><b>Liri currently executes 4 different functions, each function will log the results to log.txt</b><br>
<ul>
  <li><b>(1) concert-this</b> - Liri will search the Bands in Town API for all scheduled concerts of the given artist. Liri will return all of the events listed with this information: The name of the venue for the event, The location (city and state if the concert is in the USA, city and country if located outside the USA), The date and the time of the event(formatted by moment.js)
  <img src="https://github.com/jastring1/liri-node-app/blob/master/images/liri-3.JPG"><br>
  <img src="https://github.com/jastring1/liri-node-app/blob/master/images/liri4.JPG"></li><br>
  <br>

<li><b>(2) spotify-this</b> - Liri searches the Spotify API for relevant information for music tracks. Liri will return the closest 5 matches for a given track name. The information that liri provides for these tracks are: The artist, the song name, the album name from which the song is in, a link to a preview of the song from spotify(if available - if not liri says "No preview available".If no search term if provided, Liri defaults to "the sign"
<img src="https://github.com/jastring1/liri-node-app/blob/master/images/liri5.JPG"><br>
<img src="https://github.com/jastring1/liri-node-app/blob/master/images/liri6.JPG"></li><br><br>

<li><b>(3) movie-this</b> - Liri searches the OMDB databse for movies. Liri will choose the closest match of a movie compared to the search term that is provided.  The information that Liri provides for movie queries are: The title, the year released, the IMDB rating, the country produced in, The languages available, the plot, list of actors, and award wins and nominations(if any - if not displays none.If no search term if provided, Liri defaults to "Mr. Nobody"
<img src="https://github.com/jastring1/liri-node-app/blob/master/images/liri7.JPG"></li><br><br>

<li><b>(4) do-what-it-says</b> - Liri also can perform searched based on information that is stored in Random.txt. Liri takes the first term of the file as the function that needs to be run and then second term as the search query for that function.
<img src="https://github.com/jastring1/liri-node-app/blob/master/images/liri8.JPG"><br>
<img src="https://github.com/jastring1/liri-node-app/blob/master/images/liri9.JPG"></li><br><br>
</p>
</ul><br>

<h3><b>Data Persistence</b></h3><br>

<p><ul><li> Liri logs all results from the functions run into log.txt</li>
  <li>Liri does not delete the data performed, Liri appends the results to the log each time runLiri() occurs
  <img src="https://github.com/jastring1/liri-node-app/blob/master/images/liri10.JPG"></li></ul></p>
  
 <h3><b> Technologies Used</b></h3><br>
 <p>
 <ul>
  <li><b> Javascript - </b>Liri is written in Javascript  </li><br>
  <li><b> Node.js - </b>Liri is executed in the node.js environment  </li><br>
  <li><b> Axios - </b>Liri uses Axios to connect to the OMDB and Bands in Town API  </li><br>
  <li><b> Spotify - </b>Liri used the npm package from Spotify to search the API  </li><br>
  <li><b> FS - </b>Liri uses the fs npm package to be able to read and write to files  </li><br>
  <li><b> Inquirer - </b>Liri uses the Inquirer npm package in order to deliver a more user friendly experience  </li><br>
  <li><b> Moment - </b>Liri uses moment.js to format dates and times provided by the APIs used  </li><br>
</ul>
 </p>
 

