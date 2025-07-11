# 📇 Employee Directory – Ajackus Front-End Assignment
## 🔗 Live Demo

👉 [View on GitHub Pages](https://employee-directory-assignment-plum.vercel.app/)


## 🔍 Overview

This project is a fully responsive and interactive **Employee Directory Web Interface** developed as part of the **Ajackus Front-End Assignment** using only **HTML, CSS, and Vanilla JavaScript**. The app simulates a Freemarker-based template system by mimicking the folder structure and server-rendered content using mock data in the front-end.

All features including **viewing, adding, editing, deleting, searching, filtering, sorting, and paginating employees** are handled using JavaScript with no backend — demonstrating a full in-memory UI/UX experience.

---

## 📁 Project Structure

```
employee-directory/
├── index.html                    # Main entry file (simulates Freemarker template)
├── static/
│   ├── css/
│   │   └── style.css             # Custom styling with media queries
│   └── js/
│       ├── data.js               # Mock data (global employee array)
│       └── app.js                # All business logic: CRUD, render, UI interactivity
├── README.md                     # Project documentation
├── Assignment Screenshots/       # Screenshot folder for evaluation
```

---

## 🚀 How to Run the Project

1. Clone or download this repo to your local machine.
2. Open `index.html` in any modern browser.
3. No backend, server, or installations required.

---

## ✅ Features Implemented

### 🧾 1. Dashboard View (Employee Cards)
- All employees are displayed in a **card-based grid layout**.
- Each card includes:
  - Full name
  - Email
  - Department
  - Role
  - Unique ID
  - Action buttons: **Edit** and **Delete**

![Dashboard Full View](Assignment%20Screenshots/1_Dashboard(full%20view%20on%20desktop).png)

### ➕ 2. Add Employee
- Opens modal with an empty form
- Inputs: First Name, Last Name, Email, Department, Role
- On Submit:
  - Validates required fields and email
  - Creates new employee with `Date.now()` ID
  - Updates the grid with the new card

![Add Form Empty](Assignment%20Screenshots/2_Empty%20Add%20Employee%20Form%20(Modal%20open).png)
![Add Form Filled](Assignment%20Screenshots/3_Filled%20Add%20Employee%20Form%20(Ready%20to%20save).png)
![Card After Save](Assignment%20Screenshots/4_New%20Employee%20Card%20Appears%20After%20Save.png)

### ✏️ 3. Edit Employee
- Clicking **Edit** opens modal pre-filled with employee data
- Allows editing and saving changes
- Reflects updates in-place

![Edit Modal](Assignment%20Screenshots/5_Edit%20Form%20with%20Pre-filled%20Data%20(Modal%20open).png)
![After Edit](Assignment%20Screenshots/6_After%20Editing%20—%20Updated%20Card%20in%20List,%20edited%20email%20from%20jane.smith@example.com%20to%20jane.smith_1@example.com.png)

### ❌ 4. Delete Employee
- Clicking **Delete** prompts for confirmation
- On confirmation, removes employee from memory and re-renders the list

![Delete Confirm](Assignment%20Screenshots/7_Delete%20Confirmation%20Prompt.png)
![After Deletion](Assignment%20Screenshots/8_After%20Deletion%20—%20Employee%20Removed.png)

### 🔍 5. Search
- Live search as you type
- Filters by **First Name**, **Last Name**, or **Email**
- Case-insensitive

![Search Result](Assignment%20Screenshots/9_Search%20Input%20With%20Filtered%20Results.png)

### 🎯 6. Filter Panel
- Sidebar panel with fields:
  - First Name
  - Department
  - Role
- Filters are combinable
- Reset restores full list

![Filter Open](Assignment%20Screenshots/10_Filter%20Panel%20Open%20(Before%20Apply).png)
![Filter Applied](Assignment%20Screenshots/11_After%20Apply%20Filter%20—%20Filtered%20List.png)
![Reset Filter](Assignment%20Screenshots/12_After%20Reset%20Filter%20—%20All%20Employees%20Restored.png)

### ↕️ 7. Sort
- Sort dropdown allows:
  - Sort by First Name (A-Z)
  - Sort by Department

![Sorted](Assignment%20Screenshots/13_Sorted%20by%20First%20Name.png)

### 📄 8. Pagination
- Controls at the bottom:
  - Items per page: 10, 25, 50, 100
  - Page numbers with active state
- Pagination works with filters, search, and sort

### 📱 9. Responsive Design
- Grid adjusts on mobile and tablet view
- Modals and forms are responsive

![Mobile View Dashboard](Assignment%20Screenshots/14_Mobile%20View%20—%20Dashboard%20List.png)
![Mobile Modal](Assignment%20Screenshots/15_Mobile%20View%20Add-Edit%20Modal.png)

### 🧪 10. Form Validation
- All fields are required
- Email format is validated via RegEx
- Shows inline error messages

![Validation Required](Assignment%20Screenshots/16_Validation%20Message%20—%20Required%20Fields.png)
![Validation Email](Assignment%20Screenshots/17_Validation%20Message%20—%20Invalid%20Email%20Format.png)

---

## 🧰 Freemarker Simulation Strategy

While no actual backend was used, the project simulates Freemarker-style data binding and folder structure. Dynamic rendering is achieved with JS.

---

## 📝 Final Notes

This project fulfills the complete Ajackus UI assignment with full feature coverage, modular and semantic code, and pixel-perfect responsiveness.
