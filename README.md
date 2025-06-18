
A full-stack web application with React frontend and Django backend, featuring user authentication, content generation, and profile management.

🚀 Features

- User Authentication: Secure login and registration system
- Content Generation: AI-powered content generation functionality
- Profile Management: User profile customization and password management
- Responsive Design: Modern, mobile-friendly UI with Bootstrap
- Real-time Loading: Smooth user experience with loading indicators

🛠️ Tech Stack

Frontend
- React.js - Modern JavaScript library for building user interfaces
- Bootstrap - CSS framework for responsive design
- React Router - Client-side routing
- Context API - State management for authentication

Backend
- Django - Python web framework
- SQLite - Lightweight database
- Django REST Framework - API development
- Django Admin - Built-in admin interface

📁 Project Structure

```
Yaseen/
├── Frontend/                 # React application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context for state management
│   │   ├── services/       # API service functions
│   │   └── assets/         # Static assets (CSS, images)
│   └── package.json
├── Server/                  # Django backend
│   └── outline/
│       ├── generator/       # Content generation app
│       ├── user/           # User management app
│       ├── outline/        # Main Django project
│       └── manage.py       # Django management script
└── README.md
```

🚀 Getting Started

Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- npm or yarn

Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Backend Setup

1. Navigate to the server directory:
   ```bash
   cd Server/outline
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run database migrations:
   ```bash
   python manage.py migrate
   ```

5. Create a superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

6. Start the development server:
   ```bash
   python manage.py runserver
   ```

7. The backend will be available at [http://localhost:8000](http://localhost:8000)

📱 Available Pages

- Home - Landing page with project overview
- Login - User authentication
- Register - New user registration
- Generator - Content generation tool
- Profile - User profile management
- Change Password - Password update functionality
- About Us - Project information
- Contact Us - Contact form

🔧 Configuration

Frontend Configuration
- API endpoints are configured in `src/services/`
- Authentication context is managed in `src/context/AuthContext.js`

Backend Configuration
- Database settings in `outline/settings.py`
- URL routing in `outline/urls.py`
- App-specific configurations in respective app directories

🚀 Deployment

Frontend Deployment
1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

Backend Deployment
1. Configure production settings in `settings.py`
2. Set up a production database (PostgreSQL recommended)
3. Deploy to platforms like Heroku, DigitalOcean, or AWS

🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

📞 Support

For support and questions, please contact us through the Contact Us page or create an issue in the repository.

🔄 Version History

- v1.0.0 - Initial release with basic authentication and content generation
- Future updates will include enhanced features and improvements

---

Note: Make sure both frontend and backend servers are running simultaneously for full functionality. 
