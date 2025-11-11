1. Project Title
RoomIn – Online Hotel Booking System

2. Problem Statement
Current hotel booking systems are overly complex and often lack transparency and security. RoomIn aims to provide a simple, fast, and secure hotel booking platform with real-time availability and easy reservation management for both users and hotel owners.


3. System Architecture
Describe or diagram your project structure, e.g.:
Frontend → Backend (API) → Database
Example stack:
Frontend: React.js with React Router for page navigation


Backend: Node.js + Express


Database: MongoDB (non-relational)


Authentication:Google auth


Hosting:


Frontend → Netlify/Vercel


Backend → Render/Railway


Database → MongoDB Atlas



5. Key Features
Category
Features
Authentication & Authorization
User login via Google OAuth, role-based access (User / Hotel Owner / Admin), secure JWT sessions
CRUD Operations
Hotel owners can create, read, update, delete hotels and rooms; Admin can manage hotels, rooms, and bookings
Frontend Routing
Pages: Home, Hotel Listings, Hotel Details, Room Booking, User Dashboard, Admin Dashboard, Profile, Login
Room Booking & Management
Users can search hotels, filter by location/price/amenities, book rooms, view/cancel bookings; Admin can view all bookings
Reviews & Ratings
Users can leave reviews and ratings for hotels they’ve stayed in
Search & Filtering
Search hotels by location, price range, room type, rating, and availability
Payments (Optional Upgrade)
Integration with payment gateways like Razorpay or Stripe for secure booking payments
Hosting
Deploy frontend on Vercel/Netlify, backend on Render/Railway, 


6. Tech Stack
Category
Features
User Management
Sign up, login, role-based access (user/hotel owner/admin)
Hotel Listings
Search, filter, and view hotel details
Room Availability
Real-time updates to prevent overbooking
Booking Management
Make, view, and cancel bookings
Admin Dashboard
Manage hotel listings, pricing, and bookings


7. API Overview

Endpoint
Method
Description
Access
/api/auth/google
POST
Login or register user via Google OAuth
Public
/api/hotels
GET
Get all hotels with basic info
Public
/api/hotels/:id/rooms
GET
Get all rooms of a specific hotel
Public
/api/bookings
POST
Book a room for given dates
Authenticated
/api/bookings
GET
Get all bookings for the logged-in user
Authenticated


/api/admin/hotels
POST
Add a new hotel
Admin
/api/admin/hotels/:id
PUT
Update hotel details
Admin
/api/admin/hotels/:id
DELETE
Delete a hotel
Admin
/api/admin/bookings
GET
View all bookings across all users
Admin





Mohan Kumar C R
2401010282
