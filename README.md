<h1>FULL STACK BLOG WEBSITE - Blogify </h1>
This is a full-stack blog application built using Node.js, Express, EJS, and MongoDB. This platform enables users to create, manage, and explore blog content with a seamless authentication system and an interactive user interface. The backend is powered by Express and MongoDB Atlas, while the frontend is rendered using EJS templating and styled with CSS and JavaScript.

<h2>Tech Stack</h2>

 **Frontend**:
  - EJS (Embedded JavaScript Templates)
  - CSS
  - Vanilla JavaScript

  **Backend**:
  - Node.js
  - Express.js

  **Database**:
  - MongoDB Atlas (cloud-hosted NoSQL database)
  - Mongoose (MongoDB object modeling for Node.js)

<h2>Packages & Tools Used</h2>

 1. **Multer**:  
 - Handles image uploads for **profile pictures** and **blog cover images**.


 2. **Passport.js**:  
 - Implements user **authentication** and session handling.


 3. **Bcrypt**:  
 - Hashes and verifies passwords securely before storing them in the database.


 4. **Express-session**:  
 - Maintains user sessions after login for a smooth browsing experience.


 5. **Mongoose**:  
 - Provides a schema-based solution to model application data and interact with MongoDB.


 6. **MongoDB Atlas**:  
 - Serves as the cloud database solution, ensuring real-time syncing and scalability.


<h2>Key Features</h2>

 1. <h3>User Authentication System:</h3> Secure registration and login using Passport.js and bcrypt.

 2. <h3>Add Blog with Rich Text Editor:</h3> Blogs support formatted content input through an integrated text editor.

 3. <h3>Minimalist, User-Friendly Frontend:</h3> Clean, responsive UI designed for smooth navigation and readability.

 4. <h3>Dashboard with Filters and Search:</h3> Users can filter blogs by theme and search by title or keywords from their personal dashboard.

 5. <h3>Edit and Delete Your Blogs:</h3>  Full CRUD support—users can update or remove their own blog posts.

 6. <h3>Explore and Engage:</h3> View other users' blogs and leave comments to interact and connect.

 6. <h3>Admin Panel:</h3> Admins can manage users, blogs, and reported content

 <h2>Project Folder Structure</h2>
 

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

<h2>Getting Started</h2>
Follow the steps below to run the project locally:

1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
2. Create a .env file in your project root
```
DB_URL=mongodb+srv://<username>:<password>@<cluster-address>/<database-name>?retryWrites=true&w=majority&appName=<appName>

```
Replace username, password, cluster-address and database-name with your actual MongoDB Atlas credentials.

3. Install Dependencies
```bash
npm install
```
4. Run The Server
```bash
node app.js
```

5. View In Browser
```bash
 http://localhost:3000
``` 
    
<h2>Website Screenshots</h2>
<h3>Home Page</h3>
<img width="1874" height="891" alt="image" src="https://github.com/user-attachments/assets/4932d6df-8538-4e74-a4f7-88472fca863e" />
<h3>User Dashboard</h3>
<img width="1755" height="848" alt="image" src="https://github.com/user-attachments/assets/c3aa279a-5866-4a0b-a46e-fe5aee40c806" />


<h2>Admin Role Assignment (Backend)</h2>
By default, users are stored with a regular role (user). To make someone an admin:

<h3>Update via MongoDB Atlas</h3>

1.Go to your MongoDB Atlas dashboard.

2. Navigate to your users collection.

3. Find the user you want to make admin.

4. Modify their document like this:

```
{
  "_id": "someid",
  "username": "john",
  "password": "somePassword",
  "isAdmin": "true"
}

```


<h2>CONTRIBUTERS- DHANYA GIRDHAR & RAASHI SHARMA</h2>




