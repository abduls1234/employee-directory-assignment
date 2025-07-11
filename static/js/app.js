document.addEventListener("DOMContentLoaded", () => {
  if (typeof mockEmployees === "undefined") {
    alert("Error: mockEmployees not loaded. Check script order in HTML.");
    console.error("mockEmployees is undefined. Ensure data.js is loaded BEFORE app.js");
    return;
  }

  

  let employees = [...mockEmployees];
  let filteredEmployees = [...employees];
  let currentPage = 1;
  let itemsPerPage = 10;

  const employeeListEl = document.getElementById("employeeList");
  const paginationControls = document.getElementById("paginationControls");
  const modal = document.getElementById("formModal");
  const form = document.getElementById("employeeForm");
  const formTitle = document.getElementById("formTitle");
  const cancelBtn = document.getElementById("cancelBtn");

  const fields = {
    id: document.getElementById("employeeId"),
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    department: document.getElementById("department"),
    role: document.getElementById("role"),
  };

  function generateId() {
    return Date.now();
  }

  function renderEmployees(data) {
    employeeListEl.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = data.slice(start, end);

    if (paginated.length === 0) {
      employeeListEl.innerHTML = "<p>No employees found.</p>";
      return;
    }

    paginated.forEach((emp) => {
      const card = document.createElement("div");
      card.className = "employee-card";
      card.innerHTML = `
        <h3>${emp.firstName} ${emp.lastName}</h3>
        <p>ID: ${emp.id}</p>
        <p>Email: ${emp.email}</p>
        <p>Department: ${emp.department}</p>
        <p>Role: ${emp.role}</p>
        <button class="edit-btn" data-id="${emp.id}">Edit</button>
        <button class="delete-btn" data-id="${emp.id}">Delete</button>
      `;
      employeeListEl.appendChild(card);
    });

    renderPagination(data.length);
  }

  function renderPagination(totalItems) {
    paginationControls.innerHTML = "";
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");
      btn.addEventListener("click", () => {
        currentPage = i;
        renderEmployees(filteredEmployees);
      });
      paginationControls.appendChild(btn);
    }
  }

  document.getElementById("searchInput").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    filteredEmployees = employees.filter(
      (e) =>
        e.firstName.toLowerCase().includes(term) ||
        e.lastName.toLowerCase().includes(term) ||
        e.email.toLowerCase().includes(term)
    );
    currentPage = 1;
    renderEmployees(filteredEmployees);
  });

  document.getElementById("filterToggleBtn").addEventListener("click", () => {
    document.getElementById("filterPanel").classList.toggle("hidden");
  });

  document.getElementById("applyFilterBtn").addEventListener("click", () => {
    const first = document.getElementById("filterFirstName").value.toLowerCase();
    const dept = document.getElementById("filterDepartment").value.toLowerCase();
    const role = document.getElementById("filterRole").value.toLowerCase();

    filteredEmployees = employees.filter((e) => {
      return (
        (first === "" || e.firstName.toLowerCase().includes(first)) &&
        (dept === "" || e.department.toLowerCase().includes(dept)) &&
        (role === "" || e.role.toLowerCase().includes(role))
      );
    });

    currentPage = 1;
    renderEmployees(filteredEmployees);
  });

  document.getElementById("resetFilterBtn").addEventListener("click", () => {
    document.getElementById("filterFirstName").value = "";
    document.getElementById("filterDepartment").value = "";
    document.getElementById("filterRole").value = "";
    filteredEmployees = [...employees];
    currentPage = 1;
    renderEmployees(filteredEmployees);
  });

  document.getElementById("addEmployeeBtn").addEventListener("click", () => {
   
    form.reset();
    fields.id.value = "";
    formTitle.textContent = "Add Employee";
    modal.classList.remove("hidden");
  });

  cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    form.reset();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = fields.id.value;
    const data = {
      id: id ? parseInt(id) : generateId(),
      firstName: fields.firstName.value.trim(),
      lastName: fields.lastName.value.trim(),
      email: fields.email.value.trim(),
      department: fields.department.value.trim(),
      role: fields.role.value.trim(),
    };

    if (!data.firstName || !data.lastName || !data.email || !data.department || !data.role) {
      alert("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Invalid email format.");
      return;
    }

    if (id) {
      employees = employees.map((emp) => (emp.id === data.id ? data : emp));
    } else {
      employees.push(data);
    }

    filteredEmployees = [...employees];
    modal.classList.add("hidden");
    form.reset();
    currentPage = 1;
    renderEmployees(filteredEmployees);
  });

  employeeListEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      const id = parseInt(e.target.dataset.id);
      const emp = employees.find((e) => e.id === id);
      if (emp) {
        fields.id.value = emp.id;
        fields.firstName.value = emp.firstName;
        fields.lastName.value = emp.lastName;
        fields.email.value = emp.email;
        fields.department.value = emp.department;
        fields.role.value = emp.role;

        formTitle.textContent = "Edit Employee";
        modal.classList.remove("hidden");
      }
    }

    if (e.target.classList.contains("delete-btn")) {
      const id = parseInt(e.target.dataset.id);
      const confirmDelete = confirm("Are you sure you want to delete this employee?");
      if (confirmDelete) {
        employees = employees.filter((emp) => emp.id !== id);
        filteredEmployees = [...employees];
        currentPage = 1;
        renderEmployees(filteredEmployees);
      }
    }
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    const value = e.target.value;
    if (value === "firstName") {
      filteredEmployees.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (value === "department") {
      filteredEmployees.sort((a, b) => a.department.localeCompare(b.department));
    }
    currentPage = 1;
    renderEmployees(filteredEmployees);
  });

  document.getElementById("itemsPerPage").addEventListener("change", (e) => {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1;
    renderEmployees(filteredEmployees);
  });

  renderEmployees(filteredEmployees);
});
