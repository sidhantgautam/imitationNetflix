# Netflix Clone

A modern Netflix clone built with React.js that replicates the core functionality and user interface of the popular streaming platform. This project features user authentication, movie browsing, genre filtering, and a responsive design that closely mimics the Netflix experience.

## 🚀 Features

- **User Authentication**: Sign up and login functionality using Firebase Authentication
- **Movie Browsing**: Browse movies and TV shows with a Netflix-like interface
- **Genre Filtering**: Filter content by different genres
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Movie Player**: Video player interface for streaming content
- **User Lists**: Personal movie/show lists (My List functionality)
- **Search Functionality**: Search through available content
- **Smooth Animations**: Engaging UI with smooth transitions and hover effects

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 18.3.1
- **Routing**: React Router DOM 6.24.1
- **State Management**: Redux Toolkit 2.2.6
- **Styling**: Styled Components 6.1.11
- **Authentication**: Firebase 10.12.3
- **HTTP Client**: Axios 1.7.2
- **Icons**: React Icons 5.2.1
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BackgroundImage.jsx
│   ├── Card.jsx
│   ├── CardSlider.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── NotAvailable.jsx
│   ├── SelectGenre.jsx
│   └── Slider.jsx
├── pages/              # Main application pages
│   ├── Login.jsx
│   ├── Movies.jsx
│   ├── Netflix.jsx     # Home page
│   ├── Player.jsx
│   ├── Signup.jsx
│   ├── TVShows.jsx
│   └── UserListedMovies.jsx
├── store/              # Redux store configuration
│   └── index.js
├── utils/              # Utility functions and configurations
│   ├── constants.js
│   └── firebase-config.js
├── assets/             # Images and media files
└── App.jsx             # Main application component
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Firebase account for authentication setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sidhantgautam/imitationNetflix.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Firebase Configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password provider
   - Update the Firebase configuration in `src/utils/firebase-config.js` with your project credentials

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application

## 📱 Available Pages

- **/** - Home page with featured content and movie sliders
- **/login** - User login page
- **/signup** - User registration page
- **/movies** - Movies catalog page
- **/tv** - TV shows catalog page
- **/mylist** - User's personal watchlist
- **/player** - Video player interface

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Key Components

- **Navbar**: Navigation bar with user authentication status
- **Slider**: Horizontal scrolling movie/show carousels
- **Card**: Individual movie/show display cards
- **BackgroundImage**: Dynamic background image component
- **SelectGenre**: Genre filtering dropdown

## 🔐 Authentication

The application uses Firebase Authentication for user management:
- Email/password authentication
- Protected routes requiring user login
- Persistent login state across sessions

## 🌟 Future Enhancements

- Integration with real movie APIs (TMDB, OMDB)
- Video streaming functionality
- Advanced search and filtering options
- User reviews and ratings
- Social features (sharing, recommendations)
- Offline viewing capabilities
- Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes. Please respect Netflix's intellectual property and trademarks.

## 🙏 Acknowledgments

- Netflix for the design inspiration
- The Movie Database (TMDB) for movie data
- Firebase for authentication services
- React community for excellent documentation and resources

---

**Note**: This is a clone project created for learning purposes. It is not affiliated with Netflix, Inc.
