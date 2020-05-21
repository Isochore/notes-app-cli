# notes-app-cli
A notes app working with arguments using yargs and nodejs

### Installing

```
npm install
```

### Availables arguments

## Add

Takes two flags title and body: 

```
node app.js add --title="My title" --body="My body"
```

Allow you to add a note.

## Remove

Takes one flag title: 

```
node app.js remove --title="My title"
```
Allow you to remove a specific note.

## Read

Takes one flag title: 

```
node app.js read --title="My title"
```

Allow you to read a specific note and print it in the console.

## List

Takes no flag: 

```
node app.js remove
```

Allow you to list all notes existing.
