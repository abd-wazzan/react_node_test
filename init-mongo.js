// MongoDB initialization script
// This script runs when the MongoDB container is first created

db = db.getSiblingDB('myDatabase');

// Create a user for the application database
db.createUser({
  user: 'appuser',
  pwd: 'apppassword',
  roles: [
    {
      role: 'readWrite',
      db: 'myDatabase'
    }
  ]
});

// Create initial collections if needed
db.createCollection('users');
db.createCollection('tasks');

// Optional: Insert some initial data
db.users.insertOne({
  email: 'admin@example.com',
  fullName: 'Admin User',
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date()
});

print('MongoDB initialization completed');