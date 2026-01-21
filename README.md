# 🚚 Transport Management Backend (Builty System)

This project is a **Transport Management Backend API** built using **Node.js, Express, and MongoDB**. It manages **Builty (LR)** records, **Vehicles**, **Drivers**, and **Owners**, with automatic calculations and clean service-based architecture.

---

## 🧩 Features

### 📦 Builty Management

* Create Builty with consignor, consignee, goods, route, vehicle, driver & owner details
* Server-side freight & balance calculation
* Update all Builty details
* Get Builty list with pagination
* Get Builty by ID
* Delete Builty

### 🚛 Vehicle Management

* Auto-create or update vehicle when a Builty is created
* Get vehicle list
* Get single vehicle details
* Fetch all builties related to a vehicle

### 🧮 Business Logic

* Freight = (weight × rate) + other charges
* Balance = freight − advance
* All calculations handled securely on backend

## 🏗️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **express-validator** (request validation)
* **dotenv** (environment variables)

---

## 🧱 Models Overview

### 🧾 Builty Model

* builty_no (unique)
* date
* vehicle_no
* route (from, to)
* consignor
* consignee
* goods (weight, rate)
* charges (freight, advance, balance)
* driver
* owner
* timestamps

### 🚚 Vehicle Model

* vehicle_no (unique)
* driver
* owner
* last_used_builty
* timestamps

---

## 🔄 Auto Vehicle Sync Logic

When a new Builty is created:

1. Builty is saved
2. Vehicle service is called
3. Vehicle is **created or updated (upsert)** based on vehicle number

This ensures:

* No duplicate vehicles
* Always updated driver/owner info

---

## 🛡️ Validation

* Uses `express-validator`
* Validators stored in `/validators`
* Required fields checked before hitting service layer

---

## ⏱️ Timestamps

All models use:

```js
{ timestamps: true }
```

Automatically adds:

* createdAt
* updatedAt

Useful for:

* Sorting
* Auditing
* Reports

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Server

```bash
npm run dev
```

## 🧪 Error Handling

* Centralized error middleware
* Mongo duplicate key errors handled
* Validation errors returned clearly

---

## 📈 Future Enhancements

* Authentication & role-based access
* PDF generation for Builty
* Vehicle earnings reports
* Search & filters
* Soft delete

---

## 👨‍💻 Learning Outcome

This project demonstrates:

* Real-world backend architecture
* MongoDB data modeling
* Service-based business logic
* Clean API design

---

## 📌 Author

**Moushumi Maitra**

Frontend & Backend Developer

---

## ⭐ Final Note

This backend is designed to be **scalable**, **maintainable**, and **production-ready**. It follows industry best practices and is ideal for transport/logistics applications.

Happy Coding 🚀
