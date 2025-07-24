# Blogify – Full Stack Blog Platform

**Blogify** is a full-stack blog web application built using **Node.js**, **Express**, **EJS**, and **MongoDB**. It offers a rich, interactive blogging experience with authentication, a personal dashboard, commenting system, and admin controls. Whether you're an individual blogger or a developer looking for a collaborative blog template, Blogify serves as a complete solution.

---
## Tech Stack

### Frontend
- **EJS (Embedded JavaScript Templates)** – Server-side rendering
- **CSS** – Styling and layout
- **Vanilla JavaScript** – Interactivity and DOM handling

### Backend
- **Node.js** – Runtime environment
- **Express.js** – Web application framework

### Database
- **MongoDB Atlas** – Cloud-based NoSQL database (used in this project)
- **Mongoose** – ODM for MongoDB

---
## Packages & Tools Used

| Tool/Library     | Purpose                                                                 |
|------------------|-------------------------------------------------------------------------|
| **Passport.js**  | User authentication (login/register with session support)              |
| **Bcrypt**       | Hashing passwords before saving them to the DB                         |
| **Multer**       | Handling image uploads (profile pictures, blog cover images)           |
| **Express-session** | Maintaining session state across requests                           |
| **Mongoose**     | MongoDB schema modeling and querying                                   |
| **MongoDB Atlas**| Real-time cloud-based NoSQL database                                   |
| **Dotenv**       | Securely manage environment variables                                  |

---

## Key Features

### User System
- Secure **authentication** using Passport.js
- Passwords hashed with Bcrypt
- Persistent **login sessions**

### Blog Management
- Create, edit, and delete your own blogs (CRUD)
- Upload blog **cover images**
- Write blogs using a **rich text editor**

### Dashboard
- View all your blogs
- Filter blogs by **category/theme**
- Search blogs by **title or keywords**

### Interaction
- View full blogs by others
- **Comment system** to engage with content

### Admin Panel
- View and manage all users
- Delete/report blogs or comments
- Assign admin privileges (via database)

### UI & UX
- Clean, minimalist responsive layout
- Enhanced UX with clear navigation and layouts

---
## Folder Structure
 

```
├───config/
│   └───passport.js
├───middlewares/
│   ├───isAdmin.js
│   ├───isLogged.js
│   └───upload.js
├───models/
│   ├───blog.js
│   ├───comment.js
│   └───user.js
├───node_modules
├───public/
│   ├───images/
│   ├───js/
│   ├───uploads/
│   └───style.css
├───routes/
│   ├───admin.js
│   ├───auth.js
│   ├───blog.js
│   └───comments.js
└───views/
    ├───admin/
    │   ├───dashboard.ejs
    │   └───viewBlogs.ejs
    ├───auth/
    │   ├───login.ejs
    │   └───register.ejs
    ├───blog/
    │   ├───addBlog.ejs
    │   ├───edit.ejs
    │   ├───fullBlog.ejs
    │   └───index.ejs
    └───app.js
```


##  Getting Started
Follow the steps below to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
### 2. Create a .env file in your project root
```
DB_URL=mongodb+srv://<username>:<password>@<cluster-address>/<database-name>?retryWrites=true&w=majority&appName=<appName>

```
Replace username, password, cluster-address and database-name with your actual MongoDB Atlas credentials. <\br>
This .env file is ignored via .gitignore, so your credentials are never exposed publicly.

<h2>MongoDB Setup Options</h2> 

You can choose how to run MongoDB for your project:

<h3>Option 1: MongoDB Atlas (Cloud-hosted)</h3>

> Recommended for teams or deployment

#### Steps:
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Whitelist your IP address and create a database user
4. Copy the connection string from **Connect > Drivers**
5. Paste the URL as DB_URL in your `.env` file

This allows you and your collaborators to share the same cloud database easily.

---

<h3> Option 2: Local MongoDB (Offline) </h3>

> Ideal for solo/local development

#### Steps:
1. [Install MongoDB Community Edition](https://www.mongodb.com/try/download/community)
2. Start your local MongoDB server:
3. In your `.env`, set:
   ```
   DB_URL=mongodb://127.0.0.1:27017/blogify
   ```
This will create and use a local database named `blogify`.

---


### 3. Install Dependencies
```bash
npm install
```
### 4. Run The Server
Once MongoDB is set up (Atlas or Local), start your server:
```bash
node app.js
```

### 5. View In Browser
```bash
 http://localhost:3000
``` 
    
## Website Screenshots
### Home Page
<img width="1874" height="891" alt="image" src="https://github.com/user-attachments/assets/4932d6df-8538-4e74-a4f7-88472fca863e" />


### User Dashboard
<img width="1755" height="848" alt="image" src="https://github.com/user-attachments/assets/c3aa279a-5866-4a0b-a46e-fe5aee40c806" />


## Admin Role Assignment

By default, all users are regular users.

To assign admin rights:

### Using MongoDB Atlas or MongoDB Compass:

1. Go to your `users` collection
2. Locate the user’s document
3. Add or update the field `isAdmin` as shown below:

```
{
  "_id": "someid",
  "username": "john",
  "password": "somePassword",
  "isAdmin": "true"
}

```
This user will now have access to:
- Admin Dashboard
- Manage all users
- Moderate or delete blogs and comments

---
## Contributors

- **Dhanya Girdhar**  
- **Raashi Sharma**




