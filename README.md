# Full Stack Practical Test

## Requirements

- Git
- NodeJS >= 10
- NPM >= 6.14
- MongoDB Database >= 4.2
- For ReactJS Frontend, Create a new app using `create-react-app` cli command
- For AngularJS Frontend, Create a new app using `ng new` cli command


## What you have to do?

Create an Employee management web application which covers below features:

Fields:

- First name
- Last name
- Email
- Profile Pic
- Employee Type [ radio ]
  - WFH
  - office workplace
- DOB [ while listing show age in years, month and days ]
- Hobbies [ Multiselect Dropdown]
  - Java learning
  - CakePHP learning
  - Angular learning
  - Node learning

1. Listing - search with first name, last name or email
2. Add - with validation
3. Update - with validation
4. Delete - need a confirmation box

## What we're looking for

- **Use standard best practices when writing the code.** Code must be with proper standards, any standard you want just stick with it and specify it `README.md` file that which standard you used while writing your code.
- **Structure your code.** Structure your code properly into modularized way.
- **Code must be re-usable.** Split your code into small, re-usable components so that it can be easily reused in the future.
- **Focus of code readability.** While writing code have one thing in mind that this code not only read by you but also others, so code that way that it easier to grasp and understand by new developer. Add comments, use meaningful variable names, etc. do whatever necessary to achieve this.

## What we're not looking for

- **Don't worry about the design.** Don't give your time on the designing the pages, just structure the page properly so page doesn't look too bad to see.
- **You don't need to go crazy in terms of componentization.** Extract components when it helps you maintain what would otherwise be annoying duplication, but don't break things apart needlessly.
- **You don't need to write tests.** If they help you then sure go for it, but don't prioritize them.

## Start by following steps

- Fork this [repo](https://github.com/gitbizcon/full-stack-assignment-01). Refer [this link](https://docs.gitlab.com/ee/gitlab-basics/fork-project.html) if you have no idea about how to fork a repo.
- [Clone](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html#clone-a-repository) your forked repo into your system. And install project dependencies. Start doing your work. Along with your actual code, put together a short `README.md` file describing steps that we have to perform in order to get this project up and running.
- Copy .env.example content to .env file for setting up environment variables, which contains server and database related configrations, you can use mySQL or mongoDB as per convenience (Sample schema is defined in models directory, you can update existing schema if required) if choosen mySQL first create databse in mySQL

- Install dependencies

  `npm install`

- Start server

  `npm start`

## How to Submit

The source code should be accessible via a git repository or sent to us as a zip file, if possible including git history.

And you're done! From there we'll take care of it and review your submission.

Thank you & best of luck.
