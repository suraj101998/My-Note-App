# My Note App

My Note App is a simple web application that allows users to create, manage, and search for notes. This project is built using React and provides a user-friendly interface for adding, viewing, editing, and deleting notes.

## Features

- **Add Note:** Users can input and save new notes, and the note content is cleared from the input field upon submission.

- **View Notes:** All saved notes are displayed as individual cards in a list, with the newest notes appearing at the top.

- **Delete Note:** Users can easily delete unwanted notes by clicking a delete button associated with each note.

- **Edit Note (Bonus):** Optionally, users can edit existing notes. Notes can be clicked to enter an edit mode where users can make changes and save them.

- **Search Note (Bonus):** Users can quickly find specific notes by using a search bar at the top of the notes list. The list filters in real-time based on the user's search query.

- **Responsive Design:** The app is designed to be usable on both desktop and mobile devices. The layout adjusts to fit various screen sizes.

- **Error Handling and User Feedback:** The app provides user feedback and manages unforeseen errors. Notifications alert users of failed note additions or deletions, and loading indicators are displayed when the app processes data or awaits a response.

## Getting Started

1. Navigate to the project directory: `cd my-note-app`
2. Install the necessary dependencies: `npm install`
3. start the project: `npm start`
4. to run the test scripts: `npm test`
5. to run the test using selenium: `node SeleniumTest.js`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Git
clone the master branch this repo: https://github.com/suraj101998/My-Note-App.git

## CREATE GIT CONFLICT AND RESOLVE
Step 1: Create Two Branches and Make Different Changes

Navigate to your project directory: cd /path/to/your/project
Create and switch to a new branch named feature-branch-1: git checkout -b feature-branch-1
Make changes to the same file where you made the Selenium script changes. For example, you can add a comment or modify an existing line.
Commit your changes: git add .
git commit -m "Made changes on feature-branch-1"


Switch back to the master branch: git checkout master
Create and switch to a new branch named feature-branch-2: git checkout -b feature-branch-2
Make different changes to the same file. Again, add a comment or modify a different line.
Commit your changes: git add .
git commit -m "Made changes on feature-branch-2"


Step 2: Merge Branches to Create a Conflict
Switch back to the master branch: git checkout master
Merge feature-branch-1 into master: git merge feature-branch-1
Merge feature-branch-2 into master: git merge feature-branch-2
You'll likely encounter a merge conflict since both branches made changes to the same file.

Step 3: Resolve the Merge Conflict
Open the conflicted file in your text editor. Git will mark the conflicting sections.
Manually resolve the conflict by choosing the correct version or integrating changes from both branches.
After resolving the conflict, mark it as resolved: git add <conflicted-file>
Continue the merge process: git merge --continue
If there are multiple conflicts, repeat the process until all conflicts are resolved.
After resolving conflicts, commit the changes: git commit -m "Merge feature-branch-1 and feature-branch-2"

Step 4: Push Changes to GitHub
Push the changes to your GitHub repository: git push origin master

## License

This project is licensed under the MIT License.

---

Developed by Suraj Chakraborty
