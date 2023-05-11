CSE 264 – Web System Programming – Spring 2023

Final Project
1. Your final project is to implement a game or puzzle as a web app. Here's a chance to use some
creativity.
2. The complexity should be a good bit greater than Tic Tac Toe. You must email me with your idea to
verify that it’s OK. Also, if you are going to work in a group (max group members = 3) then give
me the names of your group members and what part of the project each member is going to work
on. As ideas are selected I’ll post them on Coursesite so you can see what other people are doing.
We don’t want a dozen versions of the same app. Of course, the more team members the more work
is expected.
3. You must use html, css, javascript. All other technologies are optional.`
4. The app may be totally stand alone or may have a server side component. If there is a server side
component to the app, it must be bundled with the client with instructions on how to run it. I can
provide you with assistance in setting up your app on a server.
5. All final projects must be completed by 5/15/23. You will need to demo your project during our
8-11am scheduled final period unless you have demoed it during a class period. We may have to do
some of the demos in class due to time constraints. I will ask for volunteers if necessary. In either
case, you still need to commit your code to github.

Ultimate Tic Tac Toe

Ultimate Tic Tac Toe is an advanced version of the classic Tic Tac Toe game, where players compete to get three marks in a row on a 3x3 grid. However, in Ultimate Tic Tac Toe, the game is played on a larger 9x9 grid, consisting of nine individual 3x3 boards arranged in a similar structure.

The objective of Ultimate Tic Tac Toe is to win three of the individual 3x3 boards in a row, either horizontally, vertically, or diagonally. Each move a player makes determines which board the opponent will have to play on next. The strategy and decision-making in Ultimate Tic Tac Toe become more complex, as each move influences the game state as well as the subsequent moves available.

Repository Structure
This repository is organized as follows:

src/: This directory contains the source code for the Ultimate Tic Tac Toe game implementation. It includes all the necessary classes, functions, and logic required to play the game.

LICENSE: This file contains the license under which this software is distributed. Please review the license before using or contributing to the project.

Getting Started
To get started with Ultimate Tic Tac Toe, follow these steps:

Clone the repository to your local machine using the command:

bash
Copy code
git clone https://github.com/your-username/ultimate-tic-tac-toe.git
Navigate to the project's directory:

bash
Copy code
cd ultimate-tic-tac-toe
Review the documentation in the docs/ directory to understand the game rules and strategies.

Explore the src/ directory to examine the source code implementation.

Run the game using the provided command-line interface (CLI) or graphical user interface (GUI), depending on the available options.

Enjoy playing Ultimate Tic Tac Toe with your friends or challenge yourself against an AI opponent!

License
The Ultimate Tic Tac Toe game is distributed under the MIT License. You can review the specific terms and conditions in the LICENSE file.

Enjoy playing Ultimate Tic Tac Toe!


To Do
Top Priority
--Check for tie conditions
--Disable Buttons after win
--format buttons
--make winning squares look better
--X turn and O turn display

Low Priority
--Make Blue Highlight look better
--Play again button (refresh page)
--display who won