# HungMovie

<div align="center">

![CineStream Banner](https://img.shields.io/badge/CineStream-Movie%20Platform-red?style=for-the-badge&logo=netflix)

A modern movie streaming platform built with React, Vite, and TMDB API. Discover thousands of movies with a beautiful Netflix-inspired interface.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel)](https://hungmovie.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/hunghk43/Movies_web)

**[Live Demo](https://hungmovie.vercel.app/)** • **[Features](#features)** • **[Installation](#installation)** • **[Tech Stack](#tech-stack)**

</div>

---

## Features

- **User Authentication** - Secure login/signup with Firebase
- **Dynamic Banner** - Auto-rotating featured movies
- **Movie Carousels** - Smooth browsing across categories
- **Real-time Search** - Instant movie discovery
- **Trailer Preview** - HD trailers in modal popups
- **Trending Daily** - Updated movies from TMDB
- **Fully Responsive** - Perfect on all devices
- **Netflix-style UI** - Hover effects, glassmorphism, dark theme

---

## Screenshots

<div align="center">

### Login / Sign Up

![Sign In / Sign Up](https://i.imgur.com/BaO4Nop.png)

### Homepage

![Homepage](https://i.imgur.com/3dPICFC.png)

### Hover Effects & Trailer Modal

<img src="https://i.imgur.com/8nueoLP.png" width="49%" /> <img src="https://i.imgur.com/E1oxrC0.png" width="49%" />

</div>

---

## Quick Start

### Prerequisites

- Node.js 18+
- TMDB API Key ([Get free key](https://www.themoviedb.org/settings/api))
- Firebase Project ([Setup guide](https://firebase.google.com/))

### Installation

```bash
# Clone repository
git clone https://github.com/hunghk43/Movies_web.git
cd Movies_web

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

### Environment Variables

Create a `.env` file in root directory:

```env
# TMDB API
VITE_API_KEY=your_tmdb_api_key_here
VITE_IMG_URL=https://image.tmdb.org/t/p/w500
VITE_IMG_URL_BANNER=https://image.tmdb.org/t/p/original

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Run Development Server

```bash
npm run dev
# Open http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## Tech Stack

**Frontend:**
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)
![React Router](https://img.shields.io/badge/React_Router-6.26.0-CA4245?logo=react-router)

**Services:**
![TMDB](https://img.shields.io/badge/TMDB-API-01b4e4?logo=themoviedatabase)
![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase)

**Key Libraries:** react-multi-carousel • react-modal • react-youtube

---

## Deployment

### Vercel

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Add environment variables from `.env`
4. Deploy!

### Other Platforms

```bash
npm run build
# Upload 'dist' folder to your hosting service
```

---

## Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Author

- Email: Hoangkimhung2004@gmail.com

---
