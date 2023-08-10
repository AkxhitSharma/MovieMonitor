# WhiteCarrot Intern Assignment
In this exercise, you are given 2 Questions. In the first question you will be asked to complete a feature on the given vue js app. The second questions, you are aksed to share database design, API contracts required to implement a FinzTracker app. The questions details are below

Questions:
1. you are given an existing code-base for a simple Movies application. You are expected to go over the items in the [Evaluation](#evaluation) section, make your changes in this repository, and follow the instructions in the [Submission](#submission) section to submit. **Use node v14 to run the app.**

Requirements: As a user you should be able to search by movie name and mark it as favourite movie. The current application is half done. As part of this assignment you will improve the application to make it usable.

2. FinzTracker is a currency exchange rate tracker application that allows users to create notification alerts when a currency reaches user's desired exchange rate.

Real-life use case:
- As a procurement manager at a global trading company, I want to pay my vendors when the currency hits the desired exchange rate. I set alerts to find out if the desired exchange rate has been hit.
- This user typically wants to create multiple alerts
- A user should be able to track if the alert has been triggered or not.
- Refer a similar application https://wise.com/tools/exchange-rate-alerts/

You are required to design/document the database tables, API Contracts required to implement FinzTracker application.

**Please try to do as much as you can improve under ten hours.**

## What is the use of this Repo [![Generic badge](https://img.shields.io/badge/What-VueJS-blue.svg)](https://vuejs.org/v2/guide/)

This Repo demonstrates the use of the following in vuejs
1. Vue Routing
2. Components
3. Communication between Components ( Parent to child component )
4. Axios Library to make HTTP calls

## Prerequisites

### Install NodeJS [![Generic badge](https://img.shields.io/badge/Prerequisite-NodeJS-blue.svg)](https://nodejs.org/en/)

Refer https://nodejs.org/en/ to install **NodeJS v14**

### Install Vue Cli [![Generic badge](https://img.shields.io/badge/Prerequisite-VueCli-blue.svg)](https://cli.vuejs.org/guide/)

Install Vue Cli Node Package Globally using the following Command.

```bash
npm install -g @vue/cli
```
## How to run the Application

Clone the application to local

Go into the project Folder and install the npm packages using the following command
```bash
npm install
```
Run the following command to run the application
```
npm run serve
```
The Application runs on **localhost:8080**

## Evaluation

Question 1
In the provided source code under `src/` directory, please do the following tasks:
- performance improvements
- semantic elements
- components usability
- Improve responsiveness
- repository cleanup (possible future issues and/or potential security issues)
- Bonus - improve UI/UX
- Bonus - clean commit history (trein/dev-best-practices/wiki/Git-Commit-Best-Practices)

You can use 3rd party libraries or pick any tool of your choice that might help you to make improvements. However, in this task, we don't expect you to spend too much time. Please leave fancy UI improvements aside and focus more on technical aspects. We don't require you to spend a lot of time on this task. For time-consuming activities, you can skip them and share as a feedback or code comment.

Question 2
- Database tables design, assuming you are desing the application using any SQL type database.
- API contracts
- Documentation quality
- Document the assumptions considered for the design.

## Submission

Question 1
Please open a Pull/Merge request to this repository with everything you have prepared. If used, include references for used libraries, frameworks, or code snippets.

Question 2
Please add question-2.MD file and write details about your tables desings or api contracts or add relevant links to access the design / documentation files outside.

## References

**VueJS** : https://vuejs.org/v2/guide/

**vue cli** : https://cli.vuejs.org/guide/

**axios** : https://www.npmjs.com/package/axios

**vue bootstrap** : https://bootstrap-vue.js.org/docs

**vue router** : https://router.vuejs.org/guide/

**currency tracker**: https://wise.com/tools/exchange-rate-alerts/
