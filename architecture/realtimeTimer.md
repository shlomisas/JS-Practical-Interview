# System architecture

## Realtime Timer

You need to design a system that every 5 minutes sends a push to all of it's connected clients (sockets)

* The servers need to be able to scale horizontally
* We should have only single timer among all servers
* The timer need to be persistence, mean if the cluster experience with a restart we won't miss the next 5 minutes tick

