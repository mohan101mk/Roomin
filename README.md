

🏨 RoomIn – Online Hotel Booking System

📌 Project Overview

RoomIn is a simple, secure, and efficient online hotel booking system designed to streamline the booking process for users and hotel owners alike.
Unlike existing platforms that are cluttered or confusing, RoomIn focuses on transparency, speed, and security, offering real-time room availability and seamless booking management.

⸻

🚩 Problem Statement

Most hotel booking systems are overly complex and lack transparency, causing frustration for both customers and hotel owners.
RoomIn solves this by providing:
	•	A clean, intuitive interface for booking rooms.
	•	Real-time availability updates.
	•	Secure authentication and role-based management for users, hotel owners, and admins.

⸻

🏗️ System Architecture

Overall Flow:
Frontend → Backend (API) → Database

Layer	Technology
Frontend	React.js with React Router for navigation
Backend	Node.js + Express
Database	MongoDB (Non-relational, MongoDB Atlas for hosting)
Authentication	Google OAuth + JWT
Hosting	Frontend → Netlify/VercelBackend → Render/RailwayDatabase → MongoDB Atlas


⸻

⚙️ Tech Stack

Category	Technology / Features
Frontend	React.js, React Router
Backend	Node.js, Express.js
Database	MongoDB Atlas
Authentication	Google OAuth 2.0, JWT
Hosting	Netlify/Vercel (Frontend), Render/Railway (Backend)
Version Control	Git + GitHub


⸻

🌟 Key Features

Category	Features
Authentication & Authorization	Google OAuth login, secure JWT sessions, role-based access (User / Hotel Owner / Admin)
CRUD Operations	Hotel owners can create, update, delete hotels and rooms; Admins can manage all data
Room Booking & Management	Users can book/cancel rooms; Hotel owners can manage rooms; Admins can view all bookings
Frontend Routing	Pages: Home, Hotel Listings, Hotel Details, Booking, User Dashboard, Admin Dashboard, Profile, Login
Search & Filtering	Filter hotels by location, price, rating, amenities, and room availability
Reviews & Ratings	Users can leave feedback and rate hotels
Payments (Optional Upgrade)	Future integration with Razorpay or Stripe for secure online payments


⸻

🧩 API Overview

Endpoint	Method	Description	Access
/api/auth/google	POST	Login or register user via Google OAuth	Public
/api/hotels	GET	Get all hotels with basic info	Public
/api/hotels/:id/rooms	GET	Get all rooms of a specific hotel	Public
/api/bookings	POST	Book a room for given dates	Authenticated
/api/bookings	GET	Get all bookings for logged-in user	Authenticated
/api/admin/hotels	POST	Add a new hotel	Admin
/api/admin/hotels/:id	PUT	Update hotel details	Admin
/api/admin/hotels/:id	DELETE	Delete a hotel	Admin
/api/admin/bookings	GET	View all bookings across all users	Admin
