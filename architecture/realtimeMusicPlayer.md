# System architecture

## Realtime Music Player

You have a [music platform](https://www.beatsense.com/), with the following capabilities:

* [the user](assets/rageSing.png) can register/login
* the user can open a room 
* the user can search songs from YouTube 
* the songs are being added into to an online, shared playlist
  * online playlist means, that all users in a particular room can listen to th same song, at the same time.
  * when someone adds a new song to the playlist, everyone will be updated in realtime
  * when song ended, all users need to move to the next one.
* the user can invite his friends via email and when they joined the user gets 5 points.
* other users in the room can vote up/down other users' songs, and for each vote:
  * the song's user wll get/reduced 1 point.
  * the song itself gets/reduced 1 point.
* in the room you'll have a list of top users and songs based on their points.

## Questions
* Which technologies you'll use to build such system? (backend/frontend/infrastructure)
* How the database relationships will look like?
* How you'll implement the real-time playlist mechanism? (and what about scaling?)
* Give a ballpark estimation to build such a system?