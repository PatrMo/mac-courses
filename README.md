# Mac Courses

Mac Courses is a web application designed to help **McMaster University students** plan and choose courses more effectively by leveraging the **McMaster API** and visualizing academic requirements in a clear, intuitive way.

---

## 📌 Objective

Help McMaster students make informed course-selection decisions by:

* Accessing McMaster’s official course data via API
* Visualizing prerequisites, antirequisites, and program requirements
* Allowing students to filter, save, and personalize their academic planning

---

## 🎯 Core Features

### 1. Course Tree View

* Search for a course
* View a **tree of prerequisites and antirequisites**
* Understand eligibility paths visually

### 2. Program Requirements

* View **all required courses** for a selected program
* Identify **eligible elective lists**
* See which courses are mandatory vs optional

---

## 🧩 Implied / Extended Features

* Register as a specific **faculty / program**
* Filter courses by:

  * Faculty
  * Required vs non-required
  * Active vs inactive courses
* Program-specific eligibility trees
* User authentication
* Save preferences, schedules, and viewed courses

---

## 🚀 Proposed Features (Scope-Aware)

* 📍 **Booked Rooms at McMaster** (availability lookup)
* 👨‍🏫 **Professor Association** *(optional – may be removed to avoid scope creep)*

  * See which professors teach which sections
  * Integrate RateMyProf data to suggest optimal sections
* 👥 **Friend Schedule Comparison**

  * Shareable schedule links
* 🌗 **Light & Dark Mode**

---

## 🏗️ Tech Stack

### Frontend

* React
* Vite
* TypeScript
* Tailwind CSS

### Backend

* Java Spring Boot *(current plan)*
* Alternative under consideration:

  * Node.js (Express / Fastify)
  * Python (Flask / FastAPI)
* Postman for API & integration testing

### Authentication & Data

* Firebase Authentication
* Cloud SQL (PostgreSQL)
* Secret Manager for credentials
* Scheduled course data sync

### Deployment

* Google Cloud Platform

  * Cloud Run (no Kubernetes)
* Domain via Namecheap or Cloudflare

> **Note:** Azure may be required depending on McMaster API constraints

---

## 🔌 API Integration

* Uses McMaster’s official API to retrieve:

  * Courses
  * Prerequisites & antirequisites
  * Program requirements

---

## 🛠️ Next Steps (Before API Access)

1. Apply for McMaster API access
2. Purchase domain: `mac.courses`
3. Set up cloud infrastructure (Azure / GCP)
4. Configure backend & CORS
5. Decide final backend language & framework

---

## 🧪 Steps After API Access

1. Build frontend using React + Vite + Tailwind
2. Implement backend API wrapper
3. Connect frontend to backend via HTTP requests
4. Deploy backend and frontend
5. Set up authentication and database

---




##
