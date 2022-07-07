# Styling Journler App using React Material Design Library

## Context 

Join millions of Journler users and create a healthier, happier mind. Journler helps increase positive energy and minimize the impact of negative mood swings, ​

It facilitates users to be more grateful and have a calmer mind by building healthy thinking through journaling.
## Problem Statement

The application should have all the boilerplates components along with its logical functionality, You need to replace the existing below listed React components with latest React Material component.​

Use Exiting Material components like Card, Button, Icon, List etc and if required you can customize with Material styled component styling feature.​

## Journler Ui Component structure

### JournalerCollection Component 
1. JournalerCollection component is used to show all the created journals on app, this can show its Mood Icon also.
1. Use Material Components like List, Card, Typography, Icon to show all the created journler data along with smiley. 
1. Use props like sx, varient and wrap html <i> tag into material Icon component to show respective icons 
### JournalerEditor Component 
1. JournalerEditor component is use to add journal record which will describe the task or today's planning.
1. Use Material Components like Typography, IconButton, Button, TextField accordingly which will combinely create a ui for user input interaction.
1. Use Material components props like sx, variant, placeholder, value, color and wrap html <i> tag into material IconButton component to show respective icons.
1. Try to use below list of icons to show Mood.
    - Happy: `far fa-smile fa-fw`,
    - Excited: `far fa-smile-beam fa-fw`,
    - Surprised: `far fa-surprise fa-fw`,
    - Sad: `far fa-frown fa-fw`,
    - Angry: `far fa-angry fa-fw`,

### JournalerViewer Component 

1. JournalerViewer component is use to show particular journal record which will be in descriptive format.
1. Use Material Components like Card, Typography, Button accordingly which will show description and perform action like `Edit` or `Delete`.
1. Use Material components props like sx, color, size and wrap html <i> tag into material IconButton component to show respective icons.
### MoodStats Component 

1. MoodStats component is use to show statistics data of mood which was used in your journaler record.
1. Use Material Components like Icon, Stack, Typography to show list of mood icons and its used count frequency.
1. Use Material components props like sx, color, size and wrap html <i> tag into material IconButton component to show respective icons.
## Instructions  

1. Download and unzip the boilerplate code.  
2. Run the command `npm install` to install the dependencies. 
3. Open the boilerplate code in VSCode to develop the assignment solution.  
4. The Journler application has been created using the `create-react-app` tool.  
5. Edit App, JournalCollection, JournalEditor, JournalViewer and MoodStats components which are placed inside the `src` folder.
6. Mood Smileys used in the application are available by adding the following link:`<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css">`
7. Try to Refactor the existing html code and recreate the ui using React Material library by installing it in project and ensure the UI is similar to attached.
8. Run the test scripts available under `src/test` by giving the `npm run test` command in the terminal to test locally. 
9. Refactor the solution to ensure all test cases are passing.
10. Zip the solution code with the name same as the assignment name and try to ignore node_module folder while zipping.  
11. Upload the zipped solution for submission. 

​
