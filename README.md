# React Habit Tracker

A simple habit-tracking web application built with React + Vite.

## About the project

This app helps you manage daily habits — you can add, edit, and delete habits, mark habits as completed for each day, and track your progress over time. All data is stored locally (in browser storage), so you don’t need a backend.  

---

## 📌 Requirements

To run this project locally, you need:

- **Node.js** (version 18+ recommended)  
- **npm**
- **Docker**  

---

## 🚀 Getting Started / Installation

Follow the steps below to run the full project (frontend + backend).

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ShenolShengov/react-habit-tracker.git
cd react-habit-tracker
```

### 2️⃣ Install frontend dependencies

```bash
npm install
```

## 🐳 Backend Setup (Docker)

The backend server is fully dockerized.  
Use the provided **compose.yml** to start it.

### 3️⃣ Configure environment variables

Create a `.env` file with required backend environment variables

**Required backend environment variables:**

```
POSTGRES_USER=root
POSTGRES_PASSWORD=root
POSTGRES_DB=habit_tracker_db
JWT_SECRET=your-jwt-secret
```
You can generate jwt secret [here](https://jwtsecrets.com/)  (at least 256 bits)

### 4️⃣ Start backend server

Run:

```bash
docker compose up -d
```

This will:

- Build and start your backend container  
- Expose the API on the ports defined in the compose file  

To stop the backend:

```bash
docker compose down
```

If you have problem with starting backend server you can refer to the [backend repository](https://github.com/hyuseinleshov/habit-tracker-api) for more info 

---

## 🖥️ Frontend Development Server

After starting the backend, run the frontend:

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---
## 🛠️ Available Scripts

- `npm run dev` — start development server (hot reload)  
- `npm run build` — build for production  
- `npm run preview` — preview the production build  
- `npm run lint` — format the code base

## 🧩 Features

- Add new habits with custom name and descrpition  
- Mark habits as done/not done for each day  
- Edit or delete existing habits  
- Persist habit data locally (so it stays after reload)  
- Simple, clean UI for easy tracking  

## 📂 Project Structure (simplified)

```
react-habit-tracker/
├── src/         # React source files
├── public/      # Static assets, HTML template
├── package.json
├── vite.config.js
└── README.md
```

## ⚡ Usage

- Open the app in browser after running dev server
- Create account or login in existing one
- Use the “Add Habit” button to create a new habit  
- Mark habits as done each day  
- Edit or remove habits as needed  

## 📄 License

This project is open-source and free to use.  

