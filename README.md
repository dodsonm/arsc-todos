# ASRC Todo List

Bootstrapped using the Create React App tool.

## Quick Start

```bash
# Install dependencies
npm install

# View locally (Will launch a new browser tab/window @ http://localhost:3000)
npm start
```

### Notes
- I nearly missed the requirement for importing data with a button click. I was importing automatically on App.componentWillMount. To keep things simple, the user currently has to click to import data before they can add new Todos or sort. Hopefully that's ok.
- I didn't make an 'enter' *button* for adding a new Todo. The user will currently have to focus into the field with the "Add Todo..." placeholder text and hit the 'enter' *key* to add new Todos--I'm just realizing it might have been a misinterpretation of the reqs on my part.
- I started adding edit functionality, but I think that was safe to leave incomplete

## History recap
- I basically started off building the basic Todo components using data in a local obj in App.js
- Next, I moved the static data to an external JSON file in the public folder & loaded it using the Axios library on componentWillMount
- After the JSON import was working, I added the basic Add & Delete features
- Then I moved on to sorting
– Finally, I made some minimal CSS updates. Ideally, I'd use something like Material-UI or even Bootstrap, but I just didn't want to complicate things.
