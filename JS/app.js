const inquirer = require('inquirer')

const promptUser = () => {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is you Name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }
        else {
          console.log('Please enter your name!');
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: userNameInput => {
        if (userNameInput) {
          return true;
        }
        else {
          console.log('Please enter your GitHub username!');
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ])
};

 

  const promptProject = portfolioData => {
    if (!portfolioData.projects){
     portfolioData.projects = []; 
    }
    

    console.log(`
    =================
    add a new project
    =================
    `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your Project?',
        validate: projectNameInput => {
          if (projectNameInput) {
            return true;
          }
          else {
            console.log('Please enter your project name!');
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (required)',
        validate: projectDescriptionInput => {
          if (projectDescriptionInput) {
            return true;
          }
          else {
            console.log('Please enter a description of your project!');
            return false
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: githubProjectInput => {
          if (githubProjectInput) {
            return true;
          }
          else {
            console.log('Please enter a GitHub link!');
            return false
          }
        }
      },
      
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      },
      
    ]);
  };

 promptUser()
 .then(answers => console.log(answers))
 .then(promptProject)
 .then(projectAnswers => console.log(projectAnswers))







// const fs = require('fs')
// const generatePage = require('./page-template');

// const pageHTML = generatePage(name, github);

// const [name, github] = profileDataArgs



// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

