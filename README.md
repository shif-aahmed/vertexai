# VertexAI Tec - AI Solutions Website

## Overview
Company website for an AI solutions provider specializing in Google Cloud Vertex AI services.

## Technologies
- React 19.1.0, Vite, React Router
- Bootstrap, Framer Motion, React Icons
- Firebase (Auth, Firestore, Analytics)
- Azure DevOps CI/CD

## Features
- **Homepage**: Hero section, services showcase, about section, FAQ
- **Services**: Advisory, Engineering, AI, Optimization, Deployment, Support
- **Career Portal**: Job applications with Firebase authentication and CV upload
- **Interactive Chatbot**: Real-time chat with configurable API
- **Additional Pages**: Contact, Team, Blogs
- **Responsive Design**: Mobile-first with scroll animations

## Installation

1. Clone repository and install dependencies:
   ```bash
   git clone <repository-url>
   cd VertexAITec_Website
   npm install
   ```

2. Configure Firebase:
   - Update `src/firebase.js` with your Firebase config
   - Enable Authentication and Firestore

3. Configure Chatbot API:
   - Update `src/config.js` with your API endpoint

4. Start Vite development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

5. Build for production:
   ```bash
   npm run build
   ```

6. Preview production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── Components/          # UI components
├── Pages/              # Main pages
├── assets/             # Static assets
├── config.js           # Configuration
└── firebase.js         # Firebase setup
```

## Deployment

- Azure DevOps pipelines included
- Build: `npm run build`
- Deploy `dist` folder to hosting service

## Environment Variables

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project
VITE_CHATBOT_API_ENDPOINT=your_endpoint
```


