# KataQuest

KataQuest is a retro 8-bit styled web app where users can practice **JavaScript katas** directly in the browser.  
It includes an interactive code editor and notes for each kata to help users understand key concepts as they solve problems.

This repository contains the **frontend** of the project. The backend repository can be found here:  
[Backend Repo](https://github.com/Sam-Clayton/coding-game-backend)

---

## Live Demo

You can try KataQuest here:  
[https://kataquest.netlify.app/](https://kataquest.netlify.app/)

---

## Project Goals

This project was built during the Northcoders bootcamp as a group project.

Our main goals were:

- To practice working as a **team of developers** on a real-world style project
- To learn how to **connect a frontend and backend** together
- To gain hands-on experience with **React, Vite, Tailwind, Clerk, and CodeMirror**
- To create something fun, retro-themed, and engaging that shows our progress as junior developers

---

## How It Works

1. Users can either **log in with Clerk** or **continue as a guest**
2. From the **kata gallery**, they can browse katas by difficulty
3. When a kata is chosen, the **CodeMirror editor** opens, where they can write and test JavaScript solutions
4. Each kata comes with **supporting notes** to guide learning
5. Users can move on to different katas from the gallery and continue practicing

---

## Features

- Interactive code editor built with **CodeMirror**
- Each kata has **difficulty levels** (easy, medium, hard)
- **Notes** provided for every kata to support learning
- **Authentication with Clerk** (users can log in)
- Option to **play as a guest** without creating an account
- Browse a **gallery of katas** and choose which to solve

---

## Tech Stack

- **React 19** – component-based frontend framework
- **Vite** – fast development and build tool
- **TailwindCSS** – styling and layout
- **CodeMirror** – code editor integration
- **Clerk** – authentication and user management
- **Axios** – HTTP client for API requests
- **React Router** – routing and navigation

---

## Installation & Setup

1. Clone this repository:

   ```bash
   git clone <this-repo-url>
   cd kataquest-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The frontend will connect to the hosted backend API automatically.  
If you prefer, you can also run the backend locally (see instructions in the [Backend Repo](https://github.com/Sam-Clayton/coding-game-backend)).

---

## Future Ideas

Some features we wanted to add but didn’t manage during the bootcamp:

- Leaderboard and gamification (XP, levels, achievements)
- Support for more programming languages beyond JavaScript
- Additional retro-style UI polish and custom themes

---

## Team

This project was created during the **Northcoders bootcamp** by:

- [Darko Gjichev](https://github.com/DarkoGjichev)
- [On-Kei She (Kiki)](https://github.com/On-KeiShe)
- [Melissa Page-Jones](https://github.com/melissapj)
- [Sam Clayton](https://github.com/Sam-Clayton)
- [Will Barnett](https://github.com/will-barnett99)
- [Joe Morris](https://github.com/smilingdogjpeg)
- [Jacob Guest](https://github.com/Wolfsmirks)

---

## Acknowledgements

Thanks to **Northcoders** for the guidance and support during the course.  
Inspired by classic **8-bit retro games** for the design and style.
