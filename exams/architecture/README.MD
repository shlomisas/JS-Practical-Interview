# System architecture

## General

You have a music platform, with the following capabilities:

* the user can register/login
* the user can open a room 
* the user can add songs from YouTube to the online playlist
    * online playlist means, that all users in a particular room can listen to th same song, 
at the same time.
* the user can invite his friends via email
* the user's friends (that are other users) can automatically join the system with 
a token from the email
* other users in the room, can also add songs and vote other users' songs
* in the room you'll have a list of most popular users and songs

## Questions
* Which technologies you'll use to build such system? (backend/frontend/infrastructure)
* How the database relationships will looks like?
* How you'll implement the real-time playlist mechanism? (and what about scaling?)
* How much time you think will take you to build such system?