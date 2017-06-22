# Practical JS Exam for programmer #1 (Fullstack)

## General

The task is quite simple, you need to build a small web app with ability to search on YouTube, show the selected results on a (YouTube) player and save it as history into a database. 
    
## UI

Here is a mockup:
![alt tag](mock.png)

The UI include the following flows:  
* User search a YouTube's video and get back relevant results for his query.
* Each search result contain the following fields: video thumbnail, name, num of votes and a play button
* When click play button, the YouTube player underneath start play the video. also, a new `history` record will save into our database and will add to the history list on the left.
* When click on a video form the history list, it'll play in the player. 
* When user click `delete` on each history record, it'll delete from the database and will remove form the history list.

## Principles
* Implement all with JavaScript, for frontend and backend.
* On both, frontend and backend, you can select any Frameworks you want to use.
* For a database, please use Mongo or MySql.
* For YouTube operations use the following:  
    * For the search use [this Search API](https://developers.google.com/youtube/v3/docs/search) 
    * For the player use [this iFrame SDK](https://developers.google.com/youtube/iframe_api_reference)
* Please try express yourself as much you can, try to use your daily basis coding so we can see your level and knowledge

## Task output
* Inside your exam's project, create a README.md with explanations about how to build and run the project, don't forget global NPM installations if required.
* Please send back a link to a new github repository or a ZIP file with the project files. 

Wish you good luck, 
Shlomi.
     