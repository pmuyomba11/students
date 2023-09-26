 # Students Management System

This is a simple web application to manage a list of students. It allows you to create, read, update and delete students from the list.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Create a `.env` file and set the `PORT` variable to the desired port number.
4. Run the server using `npm start`.

## Prerequisites

- Node.js
- Epress
- npm

## Built With

- Express.js
- EJS
- dotenv
- colors
- morgan
- method-override

## Features

- View a list of all students.
- Add a new student.
- Edit an existing student.
- Delete an existing student.
- View details of a specific student.

## Usage

### Index

Displays a list of all students.

`GET /students`

### New

Displays a form to add a new student.

`GET /students/new`

### Create

Adds a new student to the list.

`POST /students`

### Edit

Displays a form to edit an existing student.

`GET /students/:id/edit`

### Update

Updates an existing student in the list.

`PUT /students/:id`

### Delete

Deletes an existing student from the list.

`DELETE /students/:id`

### Show

Displays details of a specific student.

`GET /students/:id`

![Screenshot](/imgs/screen1.png)
![Screenshot](/imgs/Screen2.png)



## Authors

- [Simon Peter Muyomba]

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
