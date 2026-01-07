# Express + Sequelize + PostgreSQL Project

A basic Node.js Express application with Sequelize ORM connected to PostgreSQL (Neon.tech).

## 📁 Project Structure

```text
test-postgres/
├── config/
│   └── database.js       # Database configuration
├── models/
│   ├── User.js          # Sample User model
│   └── index.js         # Models export
├── routes/
│   └── userRoutes.js    # User CRUD routes
├── .env                 # Environment variables (create this)
├── .env.example         # Environment template
├── .gitignore
├── index.js             # Main server file
└── package.json
```

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Database Connection

1. Copy `.env.example` to `.env`:

   ```bash
   copy .env.example .env
   ```

2. Add your Neon.tech PostgreSQL connection string to `.env`:

   ```env
   DATABASE_URL=postgresql://username:password@host/database?sslmode=require
   PORT=3000
   NODE_ENV=development
   ```

### 3. Run the Server

**Development mode (with auto-restart):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The server will start on `http://localhost:3000`

## 📡 API Endpoints

### Health Check

- `GET /` - Welcome message
- `GET /health` - Database connection status

### User Routes (CRUD)

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🧪 Testing the API

### Create a user

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John Doe\",\"email\":\"john@example.com\",\"age\":30}"
```

### Get all users

```bash
curl http://localhost:3000/api/users
```

## 📝 User Model Schema

```javascript
{
  id: INTEGER (Primary Key, Auto-increment),
  name: STRING (Required),
  email: STRING (Required, Unique, Valid Email),
  age: INTEGER (Optional, 0-150),
  isActive: BOOLEAN (Default: true),
  createdAt: TIMESTAMP,
  updatedAt: TIMESTAMP
}
```

## 🔧 Technologies Used

- **Express.js** - Web framework
- **Sequelize** - ORM for PostgreSQL
- **PostgreSQL** - Database (Neon.tech)
- **dotenv** - Environment variable management
- **nodemon** - Development auto-reload

## 📚 Next Steps

1. Add more models in the `models/` folder
2. Create additional routes in the `routes/` folder
3. Add authentication middleware
4. Implement error handling middleware
5. Add input validation
6. Set up logging

## 🛠️ Sequelize Commands

The database will auto-sync when the server starts. To modify sync behavior, edit `index.js`:

```javascript
// Safe sync (updates existing tables)
await sequelize.sync({ alter: true });

// Drop and recreate (WARNING: deletes all data)
await sequelize.sync({ force: true });

// No sync
await sequelize.sync();
```

## 📄 License

ISC
