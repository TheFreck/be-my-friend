# be-my-friend
If you need a friend this is your application.

### Do you like Goats?
Of course you do. Everybody loves goats! If you want to know which goat you're most compatable with then you are in the right place.

### Just answer a couple questions
In the survey you will be prompted to answer 10 personality questions and enter an activity you like to do. Choose the image that describes you most as a person. Choose wisely as this choice will have no impact on your match.

## What's going behind the curtain
This application uses Node.js to run the server. When the user submits their choices an object is created and sent to a JS page to handle the matching logic. As this project does not as yet include a database, the matches are held in an array of objects, each object holding their unique scores. The absolute differences between each score is summed up and compared with the combined scores of the other potential friends. Each person in the array doesn't currently have their own profile picture. Instead a random goat profile pic is presented each time (Hey! The're all cute and they're all worthy of your love. Don't complain!). The friend with the lowest difference score is then presented as the match to the user.

##### Future additions as time allows
The obivous addition would be a connection to a database allowing it to be used dynamically with multiple users
