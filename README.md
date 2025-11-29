# HungMovie Website

<div align="center">

![CineStream Banner](https://img.shields.io/badge/CineStream-Movie%20Platform-red?style=for-the-badge&logo=netflix)

A modern streaming platform built with React, Vite, and TMDB API. Discover, explore, and watch trailers of thousands of movies from around the world.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel)](https://hungmovie.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/hunghk43/Movies_web?style=for-the-badge&logo=github)](https://github.com/hunghk43/Movies_web)


[Features](#features) • [Demo](#demo) • [Installation](#installation) • [Usage](#usage) • [Tech Stack](#tech-stack) • [Contributing](#contributing)

</div>

---

## Features

###  Core Features
- **Dynamic Banner** - Auto-rotating featured movies with stunning backgrounds
- **Movie Carousel** - Smooth, responsive carousels for different movie categories
- **Advanced Search** - Real-time movie search with instant results
- **Trailer Preview** - Watch HD movie trailers in beautiful modal popups
- **Trending Movies** - Daily updated trending movies from TMDB
- **Movie Details** - Comprehensive information including ratings, release dates, and descriptions

###  UI/UX Features
- **Advanced Hover Effects** - Netflix-style card animations
  - Cards scale and blur when others are hovered
  - Smooth glow effects and transitions
  - Play button animations
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark Theme** - Eye-friendly dark mode with gradient accents
- **Loading Animations** - Smooth skeleton loaders and spinners
- **Glassmorphism** - Modern glass effects throughout the UI

###  Pages
- **Home** - Featured movies and multiple categories
- **About** - Company information and mission
- **Contact** - Contact form and social links
- **Search Results** - Filtered movie search results

---

##  Demo

### Homepage
![Homepage Screenshot](https://i.imgur.com/3dPICFC.png)

### Movie Hover Effects
![Hover Effects](https://i.imgur.com/8nueoLP.png)

### Trailer Modal
![Trailer Modal](https://i.imgur.com/E1oxrC0.png)

---

##  Live Demo

Check out the live demo: [HungMovie Demo](https://hungmovie.vercel.app/)

---

##  Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=flat&logo=tailwind-css)
![React Router](https://img.shields.io/badge/React_Router-6.26.0-CA4245?style=flat&logo=react-router)

### Libraries & Tools
- **react-multi-carousel** - Responsive carousels
- **react-modal** - Accessible modals
- **react-youtube** - YouTube player integration
- **TMDB API** - Movie database

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

##  Installation

### Prerequisites
- Node.js 18.x 
- npm or yarn
- TMDB API Key 

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/hunghk43/Movies_web.git
cd Movies_web
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Create environment file**
```bash
# Create .env file in root directory
touch .env
```

4. **Add your TMDB API credentials**
```env
VITE_API_KEY=your_tmdb_api_key_here
VITE_IMG_URL=https://image.tmdb.org/t/p/w500
VITE_IMG_URL_BANNER=https://image.tmdb.org/t/p/original
```

5. **Start development server**
```bash
npm run dev
# or
yarn dev
```

6. **Open browser**
```
Navigate to http://localhost:5173
```

---

## Usage

### Development
```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Production Deployment

#### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel Dashboard
3. Add environment variables:
   - `VITE_API_KEY`
   - `VITE_IMG_URL`
   - `VITE_IMG_URL_BANNER`
4. Deploy!

#### Manual Deployment
```bash
# Build the project
npm run build

# The build output will be in the 'dist' folder
# Upload the 'dist' folder to your hosting service
```

---

## Project Structure

```
Movies_web/
├── public/                 # Static assets
│   ├── banner.webp
│   └── ...
├── src/
│   ├── assets/            # Images, icons
│   │   ├── play-button.png
│   │   └── ...
│   ├── components/        # React components
│   │   ├── Banner.jsx
│   │   ├── Header.jsx
│   │   ├── MovieList.jsx
│   │   ├── MovieSearch.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── .gitignore
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md
```


##  Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**


---




---

##  Author

**Hung HK**

- GitHub: [@hunghk43](https://github.com/hunghk43)
- Email: Hoangkimhung2004@gmail.com


---

##  Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie database API
- [React](https://reactjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for beautiful utility-first CSS
- [Vercel](https://vercel.com/) for seamless deployment
- Netflix for UI/UX inspiration

---

##  Support

If you like this project, please give it a star!

For support, email Hoangkimhung2004@gmail.com 

---

<div align="center">

Made with  by [Hung HK](https://github.com/hunghk43)

 Star this repo if you find it helpful!

</div>
