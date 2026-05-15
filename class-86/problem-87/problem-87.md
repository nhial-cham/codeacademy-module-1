Problem 87
JavaScript OOP Challenge
Problem: Streaming Platform Content System
A streaming platform similar to Netflix or Disney+ wants to improve its software
 system to manage different types of entertainment content.

The platform contains:

Movies
TV Series
Documentaries

All content shares common information, but each type of content behaves 
differently when played.

As a software developer, your task is to create the system using 
Object-Oriented Programming (OOP), inheritance, and 
polymorphism in JavaScript.

The goal is to create a scalable system where new content types can be added 
easily in the future.

Requirements
Create a Parent Class
Create a parent class called:

StreamingContent


The class must include the following properties:

title
genre
duration

Example:

Title: Interstellar
Genre: Science Fiction
Duration: 169 minutes


Add Methods to the Parent Class
Create a method called:

showInformation()


This method must display all content information.

---

Create another method called:

play()


This method must exist in the parent class.

At the parent level, display:

Playing content...


Create Child Classes
Movie
Create a child class called:

Movie


The class must inherit from:

StreamingContent


Add a property:

director

Override:

play()


Example output:

Playing movie in cinematic mode.


Series
Create a child class called:

Series


Add a property:

numberOfEpisodes

Override:

play()


Example output:

Playing next episode automatically.


Documentary
Create a child class called:

Documentary


Add a property:

topic

Override:

play()


Example output:

Playing educational documentary.
Create Objects
Create:

One Movie object
One Series object
One Documentary object

Store Objects in an Array
Create an array called:

platformContent


Store all created objects.

Apply Polymorphism
Loop through the array.

For each object:

Show the content information.
Execute:

play()


The same method call must behave differently depending on the object.

Expected Concepts to Practice
Students should practice:

Classes
Constructors
Objects
Inheritance
extends
super()
Method overriding
Polymorphism
Arrays
Loops
Real-world software modeling