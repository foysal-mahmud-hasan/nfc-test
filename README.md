# NFC Application

A modern React-based NFC (Near Field Communication) testing application built with Vite, featuring user authentication, card design management, and multilingual support.

## 🚀 Features

- **User Authentication**: Secure login system with form validation
- **Card Design Management**: Multiple card design templates including:
  - Bold Card
  - Elegant Card
  - Simple Card
  - Custom designs (DesignFour, DesignFive, DesignSix)
- **User Management**: Complete CRUD operations for user profiles
- **Multilingual Support**: English and Bengali language support
- **Responsive Design**: Built with Mantine UI components for modern, responsive interface
- **NFC Integration**: Digital business card generation and management
- **Export Features**: Generate vCard files for contact sharing

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0 with Vite
- **UI Framework**: Mantine UI 7.10.1
- **Routing**: React Router DOM 6.23.1
- **State Management**: React Hooks
- **Internationalization**: React i18next
- **Form Handling**: Mantine Form with validation
- **HTTP Client**: Axios
- **Styling**: CSS Modules
- **Icons**: Tabler Icons
- **Development**: ESLint, Vite

## 📦 Dependencies

### Core Dependencies
- React & React DOM
- Mantine UI ecosystem (core, hooks, form, dates, etc.)
- React Router DOM
- Axios for API calls
- React i18next for internationalization
- React Phone Input for phone number handling

### Development Dependencies
- Vite for build tooling
- ESLint for code linting
- TypeScript definitions

## 🚦 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nfc-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/
│   ├── form-builders/       # Reusable form components
│   ├── layout/             # Layout components (Header, Footer, etc.)
│   └── modules/            # Feature modules
│       ├── Login.jsx
│       ├── CardDesigns/    # Card design templates
│       ├── sign-up/        # User registration
│       ├── sign-upView/    # User profile view
│       ├── sign-upEdit/    # User profile editing
│       └── sign-upTable/   # User management table
├── assets/
│   ├── css/               # CSS modules
│   └── images/            # Static images
├── lang/                  # Internationalization files
├── utils/                 # Utility functions
├── App.jsx               # Main application component
├── AppRoute.jsx          # Route configuration
└── main.jsx             # Application entry point
```

## 🔐 Authentication

The application includes a secure authentication system with:
- Login form with validation
- Password input with visibility toggle
- Form validation using Mantine Form
- Navigation guards for protected routes

## 🎨 Card Designs

Multiple card design templates are available:
- **BoldCard**: Bold and striking design
- **ElegantCard**: Sophisticated and professional
- **SimpleCard**: Clean and minimalist
- **Custom Designs**: Additional creative templates

## 🌍 Internationalization

The application supports multiple languages:
- English (default)
- Bengali
- Language switching capability
- Localized content throughout the application

## 📱 Responsive Design

Built with mobile-first approach using Mantine UI components:
- Responsive grid system
- Mobile-optimized forms
- Touch-friendly interactions
- Cross-device compatibility

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.js`.

### ESLint Configuration
Code quality is maintained with ESLint rules for React applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Known Issues

- None currently reported

## 🔮 Future Enhancements

- Real-time NFC card testing
- Advanced card customization options
- Analytics dashboard
- Bulk user import/export
- API integration documentation

## 📞 Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ using React + Vite
