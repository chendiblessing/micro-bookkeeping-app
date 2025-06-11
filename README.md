# 📒 Micro-Bookkeeping App

A lightweight, offline-first bookkeeping app designed for **micro-enterprises** and **small business owners** to track sales, expenses, and profits — even without an internet connection.

---

## 🚀 Project Overview

This app aims to solve the problem of financial tracking in underserved areas with limited connectivity. Users can:

- Register or use the app as a guest
- Track income (sales) and expenses
- Categorize transactions
- View dashboard summaries
- Export reports (Excel or PDF)
- Sync data to the cloud (optional for registered users)

---

## 🧑‍💻 Tech Stack

| Layer         | Technology               |
|---------------|--------------------------|
| Frontend      | React Native / React (TBD) |
| Backend       | Java / Spring Boot (or Rust, if preferred) |
| Storage       | SQLite (local), PostgreSQL (cloud) |
| Authentication| Token-based (JWT) |
| Sync & Export | Background sync queue, Excel/PDF export libraries |

---

## 🛠️ Project Structure

```bash
micro-bookkeeping-app/
├── backend/           # Java backend (Spring Boot or similar)
├── frontend/          # React Native or React web app
├── shared/            # Shared models & utilities (optional)
├── docs/              # Technical documents, user stories, etc.
└── README.md
