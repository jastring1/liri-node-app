require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api")
var keys = require("./keys.js");
var fs = require("fs");
var inquiry = require("inquirer");
var moment = require("moment")

var spotKeys = new Spotify(keys.spotify);
var userInput = process.argv;

var liriFunc = userInput[2];
var searchItem = userInput.slice(3).join(" ");

function concertThis(a) {
    axios.get("https://rest.bandsintown.com/artists/" + a + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var concert = response.data[i];
                var dateTime = concert.datetime.split("T");
                var results = "----------------------------" +
                    "\nVenue: " + concert.venue.name +
                    "\nLocation: " + concert.venue.city + ", " + (concert.venue.region ? concert.venue.region : concert.venue.country) +
                    "\nDate: " + moment(dateTime[0]).format("L") + " -- " + moment(dateTime[1], "HH:mm:ss").format("LT")
                console.log(results +"\n");
                writeLog(results +"\n");
            }
        }).catch(function (error) {
            console.log(error.response)
        });
}
function spotifyThis(a) {
    if (!a) {
        a = "The Sign";
    }
    spotKeys.search({ type: 'track', query: a })
        .then(function (response) {
            for (var i = 0; i < 5; i++) {
                var track = response.tracks.items[i];
                var results = "----------------------------" +
                    "\nArtist: " + track.artists[0].name +
                    "\nSong Name: " + track.name +
                    "\nAlbum: " + track.album.name +
                    "\nPreview Link: " + (track.preview_url ? track.preview_url : "No preview available\n");
                console.log(results);
                writeLog(results + "\n");
            }
        }).catch(function (error) {
            console.log(error.response)
        });
}
function movieThis(a) {
    if (!a) {
        a = "Mr Nobody"
    }
    axios.get("http://www.omdbapi.com/?t=" + a + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            var movie = response.data;
            var results = "----------------------------" +
                "\nTitle: " + movie.Title +
                "\nYear: " + movie.Year +
                "\nRating: " + movie.imdbRating +
                "\nCountry: " + movie.Country +
                "\nLanguage: " + movie.Language +
                "\nPlot: " + movie.Plot +
                "\nActors: " + movie.Actors +
                "\nAwards: " + (movie.Awards ? movie.Awards : "None\n");
            console.log(results);
            writeLog(results +"\n");

        }).catch(function (error) {
            console.log(error.response)
        });
}
function fromFile() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        runLiri(dataArr[0], dataArr[1]);

    });
}
function writeLog(a){
    fs.appendFile("log.txt", a, function(err) {
        if (err) {
          console.log(err);
        }
      });
}

function runLiri(a, b) {
    switch (a) {
        case "concert-this": concertThis(b);
            break;

        case "spotify-this-song": spotifyThis(b);
            break;

        case "movie-this": movieThis(b);
            break;

        case "do-what-it-says": fromFile();
            break;

        default: console.log("Not a valid function")
            break;
    }
}
if (userInput.length > 2) {
    runLiri(liriFunc, searchItem);
} else {
    inquiry.prompt([
        {
            type: "list",
            name: "liriFunc",
            message: "Please select a function for Liri",
            choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"]
        },

        {
            type: "input",
            name: "searchItem",
            message: "Please enter a search value\nIf you chose 'do-what-it-says' just hit enter\n"
        }
    ]).then(function (user) {
        if (user.liriFunc === "do-what-it-says") {
            fromFile();
        } else {
            runLiri(user.liriFunc, user.searchItem)
        }
    })

}