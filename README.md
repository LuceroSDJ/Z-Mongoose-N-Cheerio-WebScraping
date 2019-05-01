# Mongoose-N-Cheerio-WebScraping

## `CLOUD PLATFORM: HEROKU`
* [https://serene-dawn-39975.herokuapp.com/](https://serene-dawn-39975.herokuapp.com/)

## GOAL
This app main goal is to scrape a website and extract specific data from the page to display it & allow users to add comments on the music videos.

## `APP LINKED TO MY PORTFOLIO`
[https://lucerosdj.github.io/Portfolio/](https://lucerosdj.github.io/Portfolio/)
```
    For the purpose of this assignment, this app has been added to my portfolio, however, it may be removed in the final version of my portfolio.
``` 
### TECHNOLOGIES
* express
* express-handlebars
* mongoose
* cheerio
* axios
* node.js
* boostrap
* jQuery

### FUNCTIONALITY

![scrapenav](https://user-images.githubusercontent.com/44692872/57042839-755e0400-6c2b-11e9-9219-82c2878554e3.png)


1. The main functionality of my app is the ability to scrape https://www.npr.org/sections/music-videos/ & extract music videos by clicking on the `Scrape npr` link found in the nav bar. Please refer to the image above.

2. Then, our app grabs the following data from the website, displays it in our page, and stores them in our mongo database:
``` 
    * Music Video Title
    * Link
    * Date the video was published
```

![scrapeRoute](https://user-images.githubusercontent.com/44692872/57041283-7a20b900-6c27-11e9-9d7e-a98e07068331.png)

![mongoDB](https://user-images.githubusercontent.com/44692872/57042732-2912c400-6c2b-11e9-8c83-763505f65223.png)

3. Once we get our music video data from npr website, user may click on the `API 🎵 Videos List` link to see a list of the music video in json format.

![videosJsonFormat](https://user-images.githubusercontent.com/44692872/57041903-f8ca2600-6c28-11e9-8e14-810d113c5c37.png)

4. All music videos can be deleted form our page and mongo database by clicking on `Delete 🎵 Videos`.

![dataDeletedFromMongoDB](https://user-images.githubusercontent.com/44692872/57043019-f5846980-6c2b-11e9-96d3-0166d37e8d91.png)

5. When user clicks on `Add Note`, a modal is displayed with the associated music video title in it for the user to add a comment about the video. 

### This is not working as exprected & needs to be revised in the future to deliver a fully functioning app. This is what I was able to achieve to associate the note to the clicked music video.

![noteModal](https://user-images.githubusercontent.com/44692872/57043219-9541f780-6c2c-11e9-8846-71b5e7fe3e8b.png)



