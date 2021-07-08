# hoover_project

This Project solves a challenge where there is a Grid which represents a room. Imagine you are a roomba and are given instructions to move throughout a room. Throughout the room there are pieces of dirt and if the instructions given to the roomba run over a piece of dirt it will be counted towards your dirt pickup count. 

Additional details are outlined here - https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5#https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5

# How to Run
1. Download or clone the repo locally.
2. Ensure you have node js installed.  If you do not have node js installed please follow the instructions here - https://nodejs.dev/learn/how-to-install-nodejs/
3. Open your terminal window and navigate to the hoover_project folder

![Screen Shot 2021-07-07 at 9 13 18 PM](https://user-images.githubusercontent.com/7964638/124847100-32fd8380-df68-11eb-9c2a-d3128448e6ad.png)

4. Run the following command:  node roomba.js

![Screen Shot 2021-07-07 at 9 16 20 PM](https://user-images.githubusercontent.com/7964638/124847327-9e475580-df68-11eb-95a5-72772afdabf7.png)

5. Click Enter and the code will execute and log the following:
1 3  = Ending Position of the Roomba
1    = Number of unique pieces of dirt picked up

![Screen Shot 2021-07-07 at 9 17 40 PM](https://user-images.githubusercontent.com/7964638/124847410-ccc53080-df68-11eb-99ba-7f0bc315bb1b.png)


# How to Change Input Commands

The Input commands given are in the input.txt file located in the same project as roomba.js

Here is an example of the text file contents
![Screen Shot 2021-07-07 at 9 25 39 PM](https://user-images.githubusercontent.com/7964638/124847955-e9ae3380-df69-11eb-8847-1d47a8e4d6c6.png)

- The 1st line in the max grid dimensions
- The 2nd line is the roomba starting position (x y)
- The subsequent lines are the pieces of dirt x and y locations (this is dynamic)
- The last line is the directions given to the roomba. 
(N = +1 to Y axis) 
(S = -1 to Y axis) 
(E = +1 to X axis) 
(W = -1 to X axis) 

Modify this file to your linking to give different commands to the roomba and add or remove pieces of dirt.
