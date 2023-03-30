# My Movies

You can store your watched movies in your personal catalog and rank them from one to five.
share your catalog with your friends. You can also comment on your friends and talk about movies. 
A nice feature is to rank other's catalogs to see who has the best movies. This is a great place
to learn about movies and read others opinions. 

<img width="1792" alt="Screenshot 2023-01-27 at 10 26 17 PM" src="https://user-images.githubusercontent.com/96025063/215247069-72278e05-cfd5-4e4d-bd87-0833708eec59.png">

<img width="1792" alt="Screenshot 2023-01-27 at 10 26 30 PM" src="https://user-images.githubusercontent.com/96025063/215247101-ee5e3337-2574-4d02-8d07-1dbda85a115d.png">


Key features:
-	Secure login over HTTPS
-	ability to have a movie catalog
-	sorting of catalog
-	deleting movies from catalog
-	friends list
-	viewing others catalog


GitHub Notes: \
things that i learned is how easy it is to make commits from vsCode. \
I also learned that I can open up a terminal and get an up to date code project just from a simple pull request. \
overall I have never used github so learining all of these new commands was great and extreamly useful.


EC2 Notes:
- a remote server subscription run by amazon
- name instances well with perpouse better for remembering
- how to having a web server up and running
- learned aws basic EC2 
- elastic IP addresses and there benefits

route 53: 
- Domain names made for human readability
- How was makes it easy to get domain names just follow route 53 page
- How to get sub-domain names by using * in the create records 
- dont forget to add public IP to the value box

HTTPS, TLS, and certificates:
- Caddy provides a HTTPS 
- Data encryption using TLS
- The certificate issuer is responsible for verifying that the certificate owner actually owns the domain name represented by the certificate
- Caddy uses lets encrypt by Mozilla 
- Modern day usually only accepts HTTPS and not HTTP

css/simon css
- I liked how with media control we can exclude things got make it smoother for different displays.
- Using a flex box we can make different orientations 
- With a grid we can have better organization. 
- bootstrap makes it easy to have the css go straight into the HTML and when you know then it is easy to read
- when coding the simon css it was intersting to see how the class elemts relate to the css


startup html and css
- html can be reused and if the classes are the same then the css will apply to them
- with css you can tag mult. stamemts and get the right effect
- margin and padding are different and should experimeint with which works best for the project.
- div tags are important and useful if wanting a container. 

simon javascript
- I learned that we can insert html elements into the web page directly with script
- I also learned that all elemtets need to be in file when working with javascript or else it wount work properly and debugging becomes hard
- with javascript we can add all the functionality we need for the wev page.
- javascript makes it possible to edit the html and css to suit your needes.

startup javascript 
- learning how inner html works and to set using ` ` tages diff from ' ' tags
- making a button do actions like adding inner html or switching views 
- onclick action and geting elements the correct way 
- appending a child with JavaScript
 
fetch 
- make calls to apis with javascript making it more useful and allowing my to use api's with easy with the JSON.stringify call.

Simon Service
- express and how to make it listen
- I also found the idea of public packages to be made avalible for all of my front-end application files.
- there is only a index.js file and that is what I like about the file structure of the application. 
- while looking at the files I found that all even the assests are in the public section

Simon DB
- I like how mongodb makes it easy for someone to store information in there datatbase
- what I remember most is how to make the Key private. 
- making keys private is done in termainal and because im using mac it is under .zprofile
- when accessing the db it is done in a seprate file usually just to get connection and information 
- express is used to make the db more interactive placing scores in there
- over all i liked how the tech all works together

Simon Login
- using the express index is where get and post user information
- index.js will call the databas.js working together to set user up and login user.
- packages installed through npm makes this possibel use bcrypt, cookie-parser, express, mongodb, and uuid
- some packages used to make it easier to clean up datat like cookie-parser
- on datatbase the password is also encrypted so if db gets leaked there is still some security

Simon webSocket
- add infor in index.js for websocket
- i like how it makes informatoin to user more avaliable 
- puablicly allows talk 
