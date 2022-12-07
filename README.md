# Photomate

## CRUD Frontend

## Links

## Produccion

💫[Back deploy on Render](https://cristina-fores-final-project-202209.onrender.com/)

💫[Photomate app](https://cristina-fores-final-project-202209.netlify.app/)

## Repository

💫[Repository Frontend](https://github.com/isdi-coders-2022/Cristina-Fores_Front-Final-Project-202209-BCN)

💫[Repository Backend](https://github.com/isdi-coders-2022/Cristina-Fores_Back-Final-Project-202209-BCN)

## Sonar

✅[Sonar Backend](https://sonarcloud.io/project/overview?id=isdi-coders-2022_Cristina-Fores_Back-Final-Project-202209-BCN)

✅[Sonar Frontend](https://sonarcloud.io/project/overview?id=isdi-coders-2022_Cristina-Fores_Front-Final-Project-202209-BCN)

# PREVIEW

![home.png](https://github.com/isdi-coders-2022/Cristina-Fores_Front-Final-Project-202209-BCN/blob/master/home.png)
![login.png](https://github.com/isdi-coders-2022/Cristina-Fores_Front-Final-Project-202209-BCN/blob/master/login.png)
![filtro.png](https://github.com/isdi-coders-2022/Cristina-Fores_Front-Final-Project-202209-BCN/blob/master/filtro.png)
![paginacion.png](https://github.com/isdi-coders-2022/Cristina-Fores_Front-Final-Project-202209-BCN/blob/master/paginacion.png)
![crear.png](https://github.com/isdi-coders-2022/Cristina-Fores_Front-Final-Project-202209-BCN/blob/master/crear.png)

# Data Layer

## 📝Post

### Show data:

- Does not show if the user is not logged in

### Data modifications:###

- loadPost - load the post
- loadOnePost - load the detail (id)
- createPost - add a new post
- updatePost - modify a post
- deletePost - delete a bot

## User 👩‍💻👨‍💻

### Show data:

- initialState:
  - id: "",
  - token: "",
  - username: "",
  - isLogged: false

### Data modifications:

- Login
  -Logout

## UI (user interface)👌🔍

### Show data:

UiState:

- modal:

  - text: string
  - showModal: boolean
  - isError: boolean

- isLoading: boolean

ShowModalActionPayload {
isError: boolean;
text: string;
}

### Data modifications:

- showModal: show text, and change the isError(true/false)
- hiddeModal: show nothing

- hiddeLoading:show isLoading: true
- showLoading: show isLoading: false

---

## APP

### Show data

- Header component
- Navigation bar
- Login page before user
- Registration page link
- Home page when the user is logged in
- FormPage when the user wants to update the profile
- NotFoundPage when the user tries to navigate to an unknown path
- Loading component while pages are loading
- Modal to show comments and error messages.

# Pages

## Page Login

### Show data

- Form component with inputs:
  - Username
  - Key code
  - Image
- Button component with "enter" text
- Link to the registration page "Don't have an account? Sign up"

### Receive interactions

- Submit form on click
- Navigate to registration page on click

## Page Register

### Show data

- Form component with inputs:
  - Username
  - Key code
  - Image
  - email
  - Button component with the text "Register"
- Link to login page

### Receive interactions

- Submit form on click
- Navigate to login page on click

## Page Home

### Show data

- Level 2 header with the text "Photomate"
  -Nav-var
- Post list component

## Page NotFound/ERRORS /NO RESULTS

### Show data

- Header level 1 component with the text "404 page not found"
- Link to login page or home page

### Receive interactions

- Navigate to login page or home page on click

##PageDeailsPost

### Show data

- Header, and the detail of the publication

## PageListPost

### Show data

- Header, and the list of publications

# Componenst

## ListPost

### Show data

- A user card component for each post on the list

## Navbar

### Show data

- Link :
  - Logo with typography
    -InputSearch
    -Link Home
- Link create new post
- Profile photo link

### Receive interactions

- Browse Pages by clicking:
- navigate to /home on click
- navigate to /create on click
- navigate to /perfilUser click

## Post Card

### Show data (in user profile / general list)

- User profile image of the publication
- 2 Button delete / modify (it is shown if the publication is from the logged in user
- Image/s with the URL of the received image and with the alternative text of the received robot name
- Icon move images
- Date of publication
- Title a level 2 title with the name of the post
- Button with a text 'Read more'
- Heart icon ♥️
- Number of likes
- a button with icon/text editing
- a button with the text delete/icon

### Receive interactions

- 2 Button delete / modify: in case it belongs to the user they will appear
  - delete received post on click
  - edit leads to another page (form), navigate to page / edit-post on click
- Icon ♥️ changes its status to true and the number / color,
- Toggle the relationship status in the selection where they are
- Button with a text 'Read more': receives the user's click and takes him to the main page

## Button

### Show data

- Show the received text inside the button.

### Receive interactions

- Call the action received on click.

## InputsGeneric

### Show data

- Show the text of the placeholder.
- Type text, text area, password, image, location, tags.

### Receive interactions

- receive the data entered by the user

## Header

### Show data

- Level 2 header with the text "............"
  -Nav-var

##Form

### Show data

- Shows a title of the corresponding form

### Receive interaction

- Receive the data entered by the user
