# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The name of the foreign key would be the id of the matched Animal row. The foreign key would be apart of the Sightings model. 

  Researched answer: After looking at the syllabus it looks like a better answer to the first part of this question would be the foreign keys name would be animal_id:



2. Which routes must always be passed params and why?

  Your answer: Create - you would only want valid info to be saved into your database 
               Destroy - you would want only a very specific input to be valid to delete information from your database
               Show - you want to look up something specific
               Edit - you want to edit something specific 

  Researched answer: After some research it looks like update would also need params because you are updating something specific.



3. Based on your knowledge of Rails conventions, write a route for a webpage called "game" that takes in a parameter called "guess" with a controller called "main".

  Your answer: get '/game/:guess' => 'main#show'

* Not very sure about what this question is asking *

4. Name three rails generator commands. What is created by each?

  Your answer: rails g model - creates a class model for your app along with the columns and the data types of those columns that will be inside your table
               rails g resource - creates the setup for RESTful routes  
               rails g migration - creates a migration file

  Researched answer: After looking into the syllabus I found that rails g resource sets up almost everything we need for our rails app including the model, migration, controller, and routes.



5. Consider the Rails routes below. Describe the responsibility of each route.

method="GET"    /users -   retreives all the rows in database      

method="GET"    /users/1 - retrieves info matching id 1

method="GET"    /users/new - retrieves the html page for a new data entry

method="GET"    /users/edit/1 - retreives the html form to edit the data belonging to id 1

method="POST"   /users/ - creates a new row in database

method="PUT"    /users/1 - updates the data belonging to id 1    

method="DELETE" /users/1 - destroys the row belonging to id 1    
