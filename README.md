# 💬 Real-Time Chat App

A modern, full-stack real-time chat application built with React, Node.js, Express, and MongoDB. Features include user authentication, real-time messaging, image sharing, and multiple theme options.

## ✨ Features

- 🔐 **User Authentication** - Secure signup/login with JWT
- 💬 **Real-time Messaging** - Instant messaging between users
- 🖼️ **Image Sharing** - Upload and share images in chat
- 👥 **User Management** - View online/offline status
- 🎨 **Multiple Themes** - Choose from various UI themes
- 📱 **Responsive Design** - Works on desktop and mobile
- 🔒 **Protected Routes** - Route protection based on authentication
- ⚡ **Real-time Updates** - Live chat updates without refresh

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI Library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **Axios** - HTTP client
- **Zustand** - State management

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Chat-App/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoChatSelected.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── skeletons/   # Loading skeletons
│   │   ├── pages/           # Page components
│   │   │   ├── Homepage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── SettingsPage.jsx
│   │   │   └── SignupPage.jsx
│   │   ├── store/           # State management
│   │   │   ├── useAuthStore.js
│   │   │   ├── useChatStore.js
│   │   │   └── useThemeStore.js
│   │   ├── lib/             # Utilities
│   │   │   └── axiosInstance.js
│   │   └── constants/       # App constants
│   │       └── themes.js
│   └── package.json
├── backend/                  # Node.js backend
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── models/          # Database models
│   │   │   ├── user.model.js
│   │   │   └── message.model.js
│   │   ├── routes/          # API routes
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   ├── middleware/      # Custom middleware
│   │   │   └── auth.middleware.js
│   │   ├── lib/             # Utilities
│   │   │   ├── db.js
│   │   │   ├── utils.js
│   │   │   └── cloudinary.js
│   │   └── server.js        # Entry point
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ForeverKnight1455/Chat-App.git
   cd Chat-App
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/chat-app
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chat-app

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server
PORT=5000
NODE_ENV=development
```

### Running the Application

1. **Start the backend server**

   ```bash
   cd backend
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

3. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

## 📱 Usage

### Getting Started

1. **Sign Up** - Create a new account with email and password
2. **Login** - Access your account
3. **Start Chatting** - Select a user from the sidebar to start messaging
4. **Customize** - Change themes in the settings page
5. **Profile** - Update your profile information

### Features Walkthrough

- **Real-time Messaging**: Messages appear instantly without page refresh
- **Image Sharing**: Click the image icon in the message input to share photos
- **Theme Selection**: Choose from multiple themes in the settings page
- **Online Status**: See which users are currently online
- **Responsive Design**: Use the app on any device

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/check` - Check authentication status

### Messages

- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get messages with specific user
- `POST /api/messages/send/:id` - Send message to user

## 🎨 Themes

The app includes multiple pre-built themes:

- Light
- Dark
- Cupcake
- Bumblebee
- Emerald
- Corporate
- Synthwave
- Retro
- Cyberpunk
- Valentine
- Halloween
- Garden
- Forest
- Aqua
- Lofi
- Pastel
- Fantasy
- Wireframe
- Black
- Luxury
- Dracula
- CMYK
- Autumn
- Business
- Acid
- Lemonade
- Night
- Coffee
- Winter

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- Theme buttons may not display if the `THEMES.map()` function doesn't return JSX properly
- Toast notifications require the `<Toaster />` component to be rendered in the app
- Online status requires Socket.io implementation to be fully functional

## 🔮 Future Enhancements

- [ ] Group chat functionality
- [ ] Voice messages
- [ ] Video calls
- [ ] Message reactions
- [ ] File sharing (documents, videos)
- [ ] Message search
- [ ] Push notifications
- [ ] Message encryption
- [ ] Custom emojis
- [ ] Message status (read/unread)

## 📧 Contact

- GitHub: [@ForeverKnight1455](https://github.com/ForeverKnight1455)
- Project Link: [https://github.com/ForeverKnight1455/Chat-App](https://github.com/ForeverKnight1455/Chat-App)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket.io](https://socket.io/)
- [Cloudinary](https://cloudinary.com/)
- [Lucide Icons](https://lucide.dev/)

---

⭐ Don't forget to star this repository if you found it helpful!
