# EventPass Ticketing System
## **Overview**
EventPass is a comprehensive ticketing system that allows users to purchase tickets for events and validates these tickets at the event venue. It consists of a React.js-based frontend and a Flask-based backend. The system generates unique digital tickets with QR codes for users, which can be scanned and validated on-site.

---
## **Features**

### **Frontend Features**
- User registration and login.
- Display of available events.
- Purchase tickets for selected events.
- Responsive design and user-friendly navigation.

### **Backend Features**
- Secure user authentication and authorization.
- CRUD operations for events.
- Ticket generation with unique QR codes.
- Validation of tickets using a QR scanner.

---
## **Technologies Used**

### **Frontend**
- React.js
- Axios
- React Router
- CSS (or optional use of Bootstrap)

### **Backend**
- Flask
- SQLAlchemy
- Flask-Migrate
- Flask-CORS
- Werkzeug Security
- Python QR Code Library

### **Database**
- SQLite (default) or any relational database supported by SQLAlchemy.

---
## **Installation Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/easypass-ticketing-system.git
cd easypass-ticketing-system
```
### **2. Backend Setup**
Create a Virtual Environment
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate
```
Install Dependencies
```bash
pip install -r requirements.txt
```
Configure the Database
Edit the backend/app/config.py file to configure your database. By default, it uses SQLite:
```bash
SQLALCHEMY_DATABASE_URI = 'sqlite:///tickets.db'
```
Run Database Migrations
```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```
Start the Backend Server
```bash
flask run
The backend will be available at http://127.0.0.1:5000/.
```
---
### **3. Frontend Setup**
Navigate to the Frontend Directory
```bash
cd ../frontend
```
Install Dependencies
```bash
npm install
```
Start the Frontend Development Server
```bash
npm start

The frontend will be available at http://localhost:3000/.
```
---
## **Usage Instructions**
### ***User Registration***
Navigate to the registration page via the Register link in the header<br>
Fill in your username, email, and password<br>
Submit the form to register.
### ***Login***
Navigate to the login page via the Login link in the header.<br>
Enter your email and password.<br>
Submit the form to log in.
### ***View Events***
Visit the homepage to see the list of available events.<br>
Each event displays its name, date, and price.<br>
### ***Purchase Tickets***
Click on an event to view its details.<br>
Click the "Purchase Ticket" button and confirm.<br>
A unique QR code will be generated for your ticket.<br>
### ***Validate Tickets***
Use the ticket validator system at the event venue.<br>
Scan the QR code using a QR scanner or a smartphone.<br>
The system checks the ticket's validity and updates its status.<br>

---
## **Project Structure**
```bashticketing-system/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   ├── models.py
│   │   ├── utils.py
│   ├── venv/
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── public/
│   │   ├── index.html
│   └── src/
│       ├── components/
│       │   ├── Header.jsx
│       │   ├── Register.jsx
│       │   ├── Login.jsx
│       │   ├── EventList.jsx
│       │   └── TicketPurchase.jsx
│       ├── App.jsx
│       ├── index.js
│       ├── api.js
│       └── styles.css
├── package.json
└── README.md
```
---
## **API Endpoints**
### Authentication
POST /register - Register a new user.<br>
POST /login - Log in an existing user.<br>
### Events
GET /events - Fetch all events.<br>
POST /events - Add a new event (admin only).
### Tickets
POST /purchase - Purchase a ticket for an event.<br>
POST /validate - Validate a ticket QR code.
### Future Improvements
Add user roles (e.g., admin vs. attendee).<br>
Include payment gateway integration for ticket purchases.<br>
Enable real-time ticket validation updates.<br>
Add unit and integration testing.
### Contributing
If you'd like to contribute, feel free to fork the repository and submit a <br> pull request. Ensure all code changes are well-documented and tested.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
### Contact
For any inquiries or support, reach out to the developer:

Email: isaacimonivwerha@gmail.com<br>
LinkedIn: https://www.linkedin.com/in/isaac-imonivwerha-9000b65a/<br>
GitHub: https://github.com/imonisweet1