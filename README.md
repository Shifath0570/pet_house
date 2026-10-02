# 🐾 PawFind

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

<p align="center">
  <strong>Find Love. Adopt a Pet.</strong>
</p>

<p align="center">
  A modern pet adoption platform that connects pets with loving families.
</p>

---

## 🌐 Live Demo

**PawFind:**
https://pet-house-khaki.vercel.app/


> Dashboard routes require authentication. Unauthenticated users are redirected to the login page.

---

# 📖 About PawFind

**PawFind** is a full-stack pet adoption platform designed to make pet adoption easier, more organized, and accessible.

The platform allows users to discover pets looking for loving homes, explore pet information, submit adoption requests, add pets for adoption, and manage their own pet listings.

The main idea behind PawFind is simple:

> **Find Love. Adopt a Pet.**

The public homepage introduces pets available for adoption across categories such as **dogs, cats, birds, and rabbits** and provides a simple adoption journey from browsing pets to submitting an adoption request and bringing a pet home.

---

# 🎯 Project Objectives

PawFind was developed to solve common problems in the traditional pet adoption process.

### Main objectives

* 🐾 Make pets easier to discover
* 🏠 Help pets find suitable loving homes
* 🔎 Provide useful pet information
* ❤️ Simplify the adoption request process
* 👤 Allow users to manage their adoption requests
* ➕ Allow users to add pets for adoption
* 📋 Allow users to manage their own pet listings
* 🔐 Protect private user dashboard functionality
* 📱 Provide a responsive and user-friendly experience

---

# ✨ Features

## 🐶 1. Browse Available Pets

Users can explore pets available for adoption.

The platform currently presents categories including:

* 🐕 Dogs
* 🐈 Cats
* 🐦 Birds
* 🐇 Rabbits

The homepage displays featured pets with information including:

* Pet name
* Category
* Breed
* Age
* Location
* Price
* Pet image

For example, the live homepage currently displays pets such as **Buddy, Milo, Coco, Snowball, Max, and Luna**.

---

## 🔎 2. Pet Details

Users can select a pet and view its details before deciding whether to submit an adoption request.

Pet information can include:

```text
Pet Name
Category
Breed
Age
Location
Price
Description
Image
```

This allows potential adopters to learn more about a pet before starting the adoption process.

---

# ❤️ 3. Adoption Request

PawFind provides an adoption request workflow.

The intended flow is:

```text
Browse Pets
     ↓
Select Pet
     ↓
View Pet Details
     ↓
Submit Adoption Request
     ↓
Wait for Approval
     ↓
Bring Pet Home
```

The homepage presents the adoption process as three simple steps: **Browse Pets → Submit Request → Bring Home**.

---

# 📋 4. My Requests

Authenticated users can access their adoption requests from:

```text
/dashboard/myrequests
```

### My Requests allows users to:

* View submitted adoption requests
* Track their requests
* Review adoption-related information
* Manage their request activity

The route is protected and redirects users who are not logged in to the authentication page.

---

# ➕ 5. Add Pet

Authenticated users can access:

```text
/dashboard/addpet
```

This feature allows users to add a pet to the PawFind platform for adoption.

### Pet listing information can include:

* Pet name
* Pet category
* Breed
* Age
* Location
* Price
* Description
* Pet image

This creates a two-sided platform where users can not only **adopt pets**, but also **list pets for adoption**.

The Add Pet route is protected and requires authentication.

---

# 📑 6. My Listings

Users can manage pets they have added through:

```text
/dashboard/mylistings
```

### My Listings provides a personal listing-management area where users can:

* View their listed pets
* Manage their listings
* Review pet information
* Update listing information
* Manage pets they have submitted

The route is authentication-protected and redirects unauthenticated users to login.

---

# 🔐 7. Authentication

PawFind includes protected user functionality.

The authentication interface provides:

* Email & Password Login
* Google Sign-In
* User Registration
* Protected Dashboard Routes

The live login page currently provides both **email/password authentication** and **Google sign-in**.

Protected routes include:

```text
/dashboard/myrequests
/dashboard/addpet
/dashboard/mylistings
```

---

# 🏠 8. Why Adopt?

The homepage explains several benefits of pet adoption.

### ❤️ Save Lives

Adoption helps pets find safety, care, and permanent homes.

### 🏡 Build Companionship

Pets can become loving companions and bring happiness to families.

### 🤝 Encourage Responsibility

Taking care of a pet encourages love, patience, care, and responsibility.

These adoption-focused sections are part of the public PawFind homepage.

---

# 🌟 9. Adoption Success Stories

PawFind includes an adoption success-story section to demonstrate the positive impact of pet adoption.

Featured stories include:

* **Bella & Sarah**
* **Milo & Alex**
* **Rocky & Emma**

These stories illustrate successful pet-and-family connections.

---

# 🐾 10. Pet Care Tips

PawFind also provides basic pet-care information.

### 🥗 Healthy Nutrition

Provide pets with balanced meals and clean drinking water.

### 💉 Regular Vaccination

Regular veterinary checkups and vaccinations help maintain pet health.

### 🏃 Daily Exercise

Physical activity helps pets stay healthy, active, and mentally stimulated.

---

# 📊 Platform Impact

The homepage presents the following impact statistics:

| Metric               |  Value |
| -------------------- | -----: |
| Pets Rescued         | 1,200+ |
| Successful Adoptions |   950+ |
| Happy Families       |   500+ |
| Love & Care          |   100% |

These figures are presented as part of the site's **Our Impact** section.

---

# 🔄 Complete User Flow

```text
                         ┌──────────────┐
                         │     Home     │
                         └──────┬───────┘
                                │
                                ▼
                       ┌────────────────┐
                       │    All Pets    │
                       └───────┬────────┘
                               │
                               ▼
                       ┌────────────────┐
                       │  Pet Details   │
                       └───────┬────────┘
                               │
                               ▼
                     ┌───────────────────┐
                     │ Login / Register  │
                     └─────────┬─────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
                 ▼                           ▼
        ┌─────────────────┐        ┌─────────────────┐
        │ Adoption Request│        │     Add Pet     │
        └────────┬────────┘        └────────┬────────┘
                 │                           │
                 ▼                           ▼
        ┌─────────────────┐        ┌─────────────────┐
        │   My Requests   │        │   My Listings   │
        └─────────────────┘        └─────────────────┘
```

---

# 🧩 Main Application Pages

```text
PawFind
│
├── 🏠 Home
│
├── 🐾 All Pets
│
├── 🔎 Pet Details
│
├── 🔐 Login
│
├── 📝 Register
│
└── 📊 Dashboard
    │
    ├── 📋 My Requests
    │
    ├── ➕ Add Pet
    │
    └── 📑 My Listings
```

---

# 🛠️ Technology Stack

## Frontend

* **Next.js**
* **JavaScript**
* **Tailwind CSS**
* **Responsive Web Design**

## Backend

* **Node.js**
* **Express.js**
* **REST API**

## Database

* **MongoDB**

## Authentication

* **Better Auth**
* **Email & Password Authentication**
* **Google Authentication**

## Deployment

* **Vercel**

---

# 📂 Project Structure

A representative project structure:

```text
PawFind/
│
├── app/
│   ├── page.js
│   │
│   ├── login/
│   ├── register/
│   │
│   ├── pets/
│   │
│   ├── dashboard/
│   │   ├── myrequests/
│   │   ├── addpet/
│   │   └── mylistings/
│   │
│   └── api/
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── PetCard/
│   ├── PetDetails/
│   ├── AdoptionRequest/
│   ├── AddPet/
│   └── Dashboard/
│
├── models/
│   ├── Pet.js
│   └── AdoptionRequest.js
│
├── lib/
│   ├── mongodb.js
│   └── auth.js
│
├── public/
│   ├── images/
│   └── icons/
│
├── .env.local
├── package.json
├── next.config.js
└── README.md
```

> Update this structure to exactly match your repository if your folder names differ.

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/Shifath0570/pet_house
```

## 2. Navigate to the project

```bash
cd pawfind
```

## 3. Install dependencies

```bash
npm install
```

## 4. Configure environment variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Add any other environment variables required by your implementation.

## 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🚀 Deployment

The project is deployed on **Vercel**.

### Live Website

https://pet-house-khaki.vercel.app/

### Dashboard Routes

```text
https://pet-house-khaki.vercel.app/dashboard/myrequests
https://pet-house-khaki.vercel.app/dashboard/addpet
https://pet-house-khaki.vercel.app/dashboard/mylistings
```

All three dashboard routes are authentication-protected in the deployed application.

---

# 🎨 UI/UX Highlights

PawFind focuses on a friendly and approachable pet-adoption experience.

### Design principles

* 🐾 Clean pet-focused interface
* 📱 Responsive design
* 🧭 Simple navigation
* 🃏 Card-based pet presentation
* ❤️ Clear adoption actions
* 🔐 Protected user dashboard
* 📋 Organized request management
* 📑 Personal listing management
* 🖼️ Image-focused pet presentation

The homepage uses clear sections for featured pets, adoption benefits, success stories, pet-care tips, impact, and the adoption process.

---

# 🧠 Key Learning Outcomes

Developing PawFind helped strengthen my practical experience with:

* Next.js application development
* React component development
* JavaScript
* Tailwind CSS
* Responsive UI/UX development
* Authentication implementation
* Google authentication
* Protected routes
* Dashboard development
* Adoption request workflows
* Pet listing management
* REST API integration
* MongoDB database operations
* Mongoose
* Form handling
* CRUD operations
* Deployment with Vercel
* Git & GitHub

---

# 🔮 Future Improvements

Possible future improvements include:

* 🔎 Advanced pet filtering
* 📍 Location-based search
* 🐕 Filter by pet category
* 🐾 Breed-based filtering
* 💰 Price-range filtering
* ❤️ Favorite / Wishlist system
* 🔔 Adoption notifications
* 📧 Email notifications
* 💬 Adopter and pet-owner messaging
* ⭐ Pet reviews and ratings
* 🏥 Pet health records
* 💉 Vaccination records
* 📅 Adoption appointment scheduling
* 📊 Admin analytics dashboard
* 🛡️ Pet listing moderation
* 📱 Progressive Web App support

---

# 📸 Screenshots

Create a `screenshots` folder and add screenshots of your project.

### Homepage

```md
![PawFind Homepage](./screenshots/homepage.png)
```

### All Pets

```md
![PawFind All Pets](./screenshots/all-pets.png)
```

### Pet Details

```md
![PawFind Pet Details](./screenshots/pet-details.png)
```

### My Requests

```md
![PawFind My Requests](./screenshots/my-requests.png)
```

### Add Pet

```md
![PawFind Add Pet](./screenshots/add-pet.png)
```

### My Listings

```md
![PawFind My Listings](./screenshots/my-listings.png)
```

### Login

```md
![PawFind Login](./screenshots/login.png)
```

---

# 👨‍💻 Developer

## Kazi Mohammad Shariful Amin Shifath

**Software Engineer | Full Stack Developer**

PawFind was developed as a full-stack project to demonstrate practical experience in modern web development, authentication, database management, CRUD operations, dashboard development, and responsive UI/UX.

### Technical Skills

```text
JavaScript
Next.js
Node.js
Express.js
MongoDB
Tailwind CSS
Better Auth
GitHub
Vercel
```

---

# 🌐 Connect With Me

### GitHub

https://github.com/Shifath0570

### LinkedIn

Add your LinkedIn profile here.

---

# 📄 License

This project was developed for **educational and portfolio purposes**.

---

<p align="center">
  🐾 <strong>PawFind</strong> — Find Love. Adopt a Pet.
</p>

<p align="center">
  Made with ❤️ by <strong>Kazi Mohammad Shariful Amin Shifath</strong>
</p>
