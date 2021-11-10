# Demo-Project1
To learning purpose

Promises: were invented to solve the problem of callback hell and to better handle our tasks.
As the above charts show, a promise has three states:

--- Pending: This is the initial stage. Nothing happens here. Think of it like this, your customer is     taking their time giving you an order. But they haven't ordered anything yet.
--- Resolved: This means that your customer has received their food and is happy.
--- Rejected: This means that your customer didn't receive their order and left the restaurant.
Let's adopt promises to our ice cream production case study.


We need to understand four more things first ->

    $ Relationship between time and work
    $ Promise chaining
    $ Error handling
    $ The .finally handler

Promise chaining
In this method, we defining what we need to do when the first task is complete using the .then handler.  
The .then handler returns a promise when our original promise is resolved.



Which means our shop is closed. We're not selling ice cream to our customers anymore.

To handle this, we use the .catch handler. Just like .then, it also returns a promise, but only when our original promise is rejected.

A small reminder here:
    - .then works when a promise is resolved
    - .catch works when a promise is rejected


<!-- How Does Async / Await Work in JavaScript? -->

