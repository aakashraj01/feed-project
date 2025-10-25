# foo-rum - Social Feed Application

A modern social feed application built with React, TypeScript, and Tailwind CSS.

## Features

- **Authentication System**: Sign In & Sign Up with local storage persistence
- **Feed Page**: View and create posts with emoji reactions
- **Post Editor**: Rich text editor with formatting options (UI only)
- **Responsive Design**: Clean, modern UI following design specifications
- **Smooth Animations**: CSS-based animations for better UX
- **Test Accounts**: Pre-configured demo accounts for testing

## Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Vite** - Build Tool
- **LocalStorage** - Data Persistence

## Test Accounts

Use these credentials to test the application:

1. **Demo Account**
   - Email: `demo@example.com`
   - Password: `password123`

2. **Test Account**
   - Email: `test@user.com`
   - Password: `testpass`

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/icons/         # SVG icons
├── components/
│   ├── common/          # Reusable components (Button, Input, Modal, Icon)
│   ├── layout/          # Layout components (Navbar, Layout)
│   └── features/        # Feature-specific components
│       ├── auth/        # Authentication components
│       └── feed/        # Feed components
├── pages/               # Page components
├── context/             # React Context (Auth)
├── hooks/               # Custom hooks
├── types/               # TypeScript types
├── services/            # Business logic
├── utils/               # Utilities and constants
└── index.css           # Global styles and animations
```

## Key Design Decisions

### Architecture

- **Clean Code Principles**: Single Responsibility, DRY, Separation of Concerns
- **Component-Based**: Atomic design with reusable components
- **Type Safety**: Comprehensive TypeScript types throughout
- **State Management**: Context API for auth, custom hooks for posts
- **Service Layer**: Separated business logic from UI components

### Styling

- **Tailwind-First**: 99% Tailwind CSS for all styling
- **Custom Animations**: CSS keyframes for smooth transitions
- **No UI Libraries**: Built from scratch as per requirements
- **Design Fidelity**: Pixel-perfect implementation from Figma designs

### Features

#### Implemented
- ✅ Complete authentication flow (Sign In/Sign Up)
- ✅ Feed page with post creation
- ✅ Post editor with emoji picker
- ✅ Post cards with user information
- ✅ Modal for authentication
- ✅ Dedicated auth pages
- ✅ Smooth animations and transitions
- ✅ LocalStorage persistence
- ✅ Test accounts support

#### Alerts for Future Implementation
- ⚠️ Text formatting buttons (bold, italic, etc.)
- ⚠️ List buttons
- ⚠️ Quote and code buttons
- ⚠️ Attachment buttons (plus, mic, video)
- ⚠️ Post interactions (like, comment, share)

## User Flow

1. **Landing on Feed**: Unauthenticated users see the feed but can't interact
2. **Interaction Triggers Auth**: Clicking on editor or any interactive element shows sign-in modal
3. **Authentication**: Users can sign in or create an account
4. **Post Creation**: Authenticated users can create posts with optional emoji
5. **Feed Updates**: New posts appear at the top of the feed

## What Was Fun

- Implementing clean architecture patterns in a React application
- Creating smooth animations without external libraries
- Building a complete authentication system with localStorage
- Pixel-perfect recreation of Figma designs using only Tailwind CSS

## What Was Challenging

- Balancing between over-engineering and maintainability
- Creating all UI components from scratch without libraries
- Managing state across authentication and posts
- Implementing smooth animations with pure CSS

## Future Enhancements

- Backend API integration
- Real-time updates
- User profiles
- Post editing and deletion
- Comments system
- Like functionality
- Image uploads
- Rich text editing functionality
- Dark mode

## License

MIT

## Author

Built as a frontend assignment demonstrating clean code architecture and modern React development practices.
