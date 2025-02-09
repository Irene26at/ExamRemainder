# [Project Name] 🎯


## Basic Details
### Team Name: [Syntax Scholars]


### Team Members
- Member 1: [Irene Ann Thomas] - [College of Engineering,Perumon]
- Member 2: [Swathi Gopan S] - [College of Engineering,Perrumon]
- Member 3: [Linta George] - [College of Engineering,Perumon]

### Hosted Project Link
[https://exam-remainder.vercel.app/]

### Project Description
[This exam reminder helps you keep track of upcoming tests, ensuring you’re well-prepared and never miss an important date. Set personalized alerts, organize your study schedule, and stay stress-free.]

### The Problem statement
[Design and develop an Exam Reminder System that enables students to effectively manage their study schedules and stay on top of upcoming tests and exams.]

### The Solution
[This Exam Countdown Timer allows users to input their exam date and time, then calculates and displays the time remaining. It updates every second and, when only 10 seconds remain, shows a random motivational quote and plays an audio clip for encouragement. Once the countdown reaches zero, it displays "Exam Started!" and plays the motivational audio again. 🚀📚]

## Technical Details
### Technologies/Components Used
For Software:
- [Languages used - Hyper Text Markup Language(HTML) , Cascading Style Sheets(CSS) , Javascript]
- [Frameworks used]
- [Libraries used]
- [Tools used]

For Hardware:
- [List main components]
- [List specifications]
- [List tools required]

### Implementation
For Software:
# Installation
[commands - 
    Here are the installation commands for VS Code on various platforms:

            *Windows*
            1. Using winget (Windows Package Manager):
            ```
            winget install Microsoft.VisualStudioCode
            ```
            2. Using Chocolatey:
            ```
            choco install vscode
            ```
            3. Manual download and installation:
            Download the VS Code installer from the official website (https://code.visualstudio.com/Download) and follow the installation prompts.
            
            *macOS (via Homebrew)*
            1. Install Homebrew if you haven't already:
            ```
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            ```
            2. Install VS Code:
                   brew install --cask visual-studio-code 

            Linux (Ubuntu-based distributions)
                    Linux (Ubuntu-based distributions)
                    
                      1. Update the package list:
                      
                      sudo apt update
                      
                      2. Install VS Code:
                      
                      sudo apt install code
                      
                      
                      Linux (Fedora-based distributions)
                      1. Install VS Code:
                      
                      sudo dnf install code

   Here are the commands for installing Git on various platforms:

            *Windows*
            1. Using winget (Windows Package Manager):
            ```
            winget install Git.Git
            ```
            2. Using Chocolatey:
            ```
            choco install git
            ```
            3. Manual download and installation:
            Download the Git installer from the official website (https://git-scm.com/download/win) and follow the installation prompts.
            
            *macOS (via Homebrew)*
            1. Install Homebrew if you haven't already:
            ```
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            ```
            2. Install Git:
            ```
            brew install git
            ```
            
            *Linux (Ubuntu-based distributions)*
            1. Update the package list:
            ```
            sudo apt update
            ```
            2. Install Git:
            ```
            sudo apt install git
            ```
            
            *Linux (Fedora-based distributions)*
            1. Install Git:
            ```
            sudo dnf install git
            ```
            
            Verify the installation by running:
            ```
            git --version
            ```
            This should display the version of Git installed on your system.
                  
# Run
[commands -
          Here are the basic Git commands to get you started:

*Configuration*
1. Set your username:
```
git config --global user.name "Your Name"
```
2. Set your email:
```
git config --global user.email "your@email.com"
```

*Creating a Repository*
1. Create a new Git repository:
```
git init
```
2. Clone an existing repository:
```
git clone https://github.com/username/repository.git
```

*Basic Git Workflow*
1. Add files to the staging area:
```
git add .
```
2. Commit changes:
```
git commit -m "Commit message"
```
3. Push changes to a remote repository:
```
git push origin branch-name
```

*Branching and Merging*
1. Create a new branch:
```
git branch new-branch
```
2. Switch to a branch:
```
git checkout branch-name
```
3. Merge branches:
```
git merge branch-name
```

*Status and Log*
1. Check the status of your repository:
```
git status
```
2. View commit history:
```
git log
```

*Remote Repositories*
1. Add a remote repository:
```
git remote add origin https://github.com/username/repository.git
```
2. Fetch changes from a remote repository:
```
git fetch origin
```

*Undoing Changes*
1. Undo changes in the staging area:
```
git reset
```
2. Revert a commit:
```
git revert commit-hash
```

These are just the basics, but they should give you a good starting point for working with Git.
   Here are the commands to run HTML, CSS, and JavaScript files:

*Running HTML Files*
To run an HTML file, simply open it in a web browser. You can do this by:

1. Double-clicking the HTML file
2. Right-clicking the HTML file and selecting "Open with" > "Google Chrome" (or your preferred browser)
3. Using the command line:

*Windows*
```
start file.html
```
*macOS (via Terminal)*
```
open file.html
```
*Linux*
```
xdg-open file.html
```

*Running CSS Files*
CSS files are used to style HTML documents and cannot be run independently. However, you can verify that your CSS file is working correctly by opening the associated HTML file in a web browser.

*Running JavaScript Files*
To run a JavaScript file, you'll need to use a JavaScript runtime environment like Node.js. Here's how:

*Using Node.js*
1. Install Node.js from the official website: https://nodejs.org/
2. Open a terminal or command prompt
3. Navigate to the directory containing your JavaScript file
4. Run the JavaScript file using Node.js:

```
node file.js
```

Note: Make sure to replace `file.html`, `file.css`, and `file.js` with the actual names of your files.]

### Project Documentation
For Software:

# Screenshots (Add at least 3)
![Screenshot1](![Screenshot (2)](https://github.com/user-attachments/assets/d5ea1f7b-b947-4214-aae1-6a169d0ebe3b))
*Add caption explaining what this shows* - This is the interface we get when we input the exam date and time providing motivation after a time at 0 seconds.

![Screenshot2](![Screenshot 2025-02-09 102249](https://github.com/user-attachments/assets/a7c43d47-43f6-425c-892a-cdc51d5a7a51))
*Add caption explaining what this shows* - Here the three placeholders indicate the input for entering date,time and and then starts the countdown and it displays when inpute the date and time of exam reminding us of how much time we have left for preparation.

![Screenshot3](Add screenshot 3 here with proper name - ![WhatsApp Image 2025-02-09 at 10 43 31 AM](https://github.com/user-attachments/assets/c55d3c4f-0b4a-4781-b706-27f7b69b027a))
*Add caption explaining what this shows* - This is javascript code that provides the actions of countdowwn for our web application.

# Diagrams
![Workflow](Add your workflow/architecture diagram here)
*Add caption explaining your workflow*

For Hardware:

# Schematic & Circuit
![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

# Build Photos
![Team](Add photo of your team here! -[WhatsApp Image 2025-02-09 at 5 10 29 AM](https://github.com/user-attachments/assets/c3c8afc9-aa32-4ce1-8d63-0015fe2227ef))


![Components](Add photo of your components here-![WhatsApp Image 2025-02-09 at 10 49 18 AM](https://github.com/user-attachments/assets/85926d41-03a3-4df0-b3dc-24416cd51055))
*List out all components shown* - in this simple web based application we have utilised html,css and javascript.Html to inpt data, css to provide styles and beautification to the code and javascript for performing the actions


![Build](Add photos of build process here-![WhatsApp Image 2025-02-09 at 10 43 31 AM](https://github.com/user-attachments/assets/29823c81-d7e3-4b8a-9764-fadc03178373))
*Explain the build steps*-This Exam Countdown Timer allows users to input their exam date and time, then calculates and displays the time remaining. It updates every second and, when only 10 seconds remain, shows a random motivational quote and plays an audio clip for encouragement. Once the countdown reaches zero, it displays "Exam Started!" and plays the motivational audio again. 🚀📚.The steps involved includes The HTML structure includes input fields for the exam date and time, a button to start the countdown, and elements to display the timer and motivational messages. The CSS styles the page with a background image, formatted text, and responsive design for different screen sizes. The JavaScript retrieves user input, calculates the remaining time, and updates the countdown every second. When only 10 seconds remain, it displays a motivational quote and plays an audio reminder. Once the timer hits zero, it shows "Exam Started!" and plays the audio again. The countdown logic ensures real-time updates and enhances user engagement. 🚀📚

![Final](Add photo of final product here -![Screenshot 2025-02-09 102249](https://github.com/user-attachments/assets/01cebb64-4da4-49e0-b25c-f348f07acac9))
*Explain the final build*-  Exam Remainder System
The Exam Remainder System is a web-based application that allows students to set reminders for upcoming exams and tests. The system sends notifications to the students before the exam date, helping them stay on track and prepare well.Once started, the timer continuously updates, providing a real-time countdown to the selected exam.

Features
- Set reminders for upcoming exams and tests
- Receive notifications before the exam date
- View upcoming exams and tests in a calendar
- Edit and delete reminders as needed

### Project Demo
# Video
[Add your demo video link here-![(https://github.com/user-attachments/assets/3991a7a7-a09e-4c19-a1ce-f7d8a501f11f)]
*Explain what the video demonstrates*--The screen recording showcases the development of an "Exam Countdown" webpage using HTML, CSS, and JavaScript. The video captures a coding environment, where the user is working on an index.html file, along with a linked CSS file (style.css) and a JavaScript script (script.js). The page includes an input field for entering an exam time, a countdown display, and a motivational audio clip that plays when the countdown starts. Additionally, the extracted text suggests elements such as a title ("Exam Countdown"), a button to start the countdown, and an audio file named "ninakenthenkilum-oru-kazhivundo---naga-chechi-meme-made-with-Voicemod.mp3."

# Additional Demos
[Add any extra demo materials/links]

## Team Contributions
- [Irene Ann Thomas]: [Frontend developer,Javascript logic and documentation]
- [Swathi Gopan S]: [Frontend developer,Javascript logic and documentation]
- [Linta George]: [Idea Presenter,Frontend Developer and documentation]

---
Made with ❤️ at TinkerHub
