document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role'); // Assume role is passed as a query parameter

   // fetch(`http://localhost:5000/api/dashboard/${role}`)


    fetch(`/api/dashboard/${role}`)
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('dashboard-content');
            contentDiv.innerHTML = `<h1>Welcome, ${data.role}</h1><p>${data.message}</p>`;
        })
        .catch(error => console.error('Error fetching dashboard data:', error));
        
});

/////////////////////////////////////////////////////////Accountant/////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Fetch financial overview data
    fetch('http://localhost:5000/api/tsdash/overview')  // Updated URL
        .then(response => response.json())
        .then(data => {
            document.getElementById('total-revenue').textContent = `$${data.totalRevenue.toFixed(2)}`;
            document.getElementById('total-expenses').textContent = `$${data.totalExpenses.toFixed(2)}`;
            document.getElementById('net-profit').textContent = `$${data.netProfit.toFixed(2)}`;
        })
        .catch(error => console.error('Error fetching financial overview:', error));

    // Fetch invoices data
    fetch('http://localhost:5000/api/tsdash/invoices')  // Updated URL
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('invoices-table').querySelector('tbody');
            tableBody.innerHTML = data.invoices.map(invoice =>
                `<tr>
                    <td>${invoice.invoiceNumber}</td>
                    <td>${invoice.client}</td>
                    <td>$${invoice.amount.toFixed(2)}</td>
                    <td>${invoice.status}</td>
                    <td>${new Date(invoice.dueDate).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching invoices:', error));

        document.addEventListener('DOMContentLoaded', function() {
    // Fetch invoices data
    fetch('http://localhost:5000/api/invoices')  // Updated URL
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('invoices-table').querySelector('tbody');
            tableBody.innerHTML = data.map(invoice =>
                `<tr>
                    <td>${invoice.invoiceNumber}</td>
                    <td>${invoice.client}</td>
                    <td>$${invoice.amount.toFixed(2)}</td>
                    <td>${invoice.status}</td>
                    <td>${new Date(invoice.dueDate).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching invoices:', error));

    // Other data fetches can be added similarly
});


    // Fetch expenses data
    fetch('http://localhost:5143/api/tsdash/expenses')  // Updated URL
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('expenses-table').querySelector('tbody');
            tableBody.innerHTML = data.expenses.map(expense =>
                `<tr>
                    <td>${expense.expenseId}</td>
                    <td>${expense.description}</td>
                    <td>$${expense.amount.toFixed(2)}</td>
                    <td>${new Date(expense.date).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching expenses:', error));

    // Fetch recent transactions data
    fetch('http://localhost:5143/api/tsdash/transactions')  // Updated URL
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('transactions-table').querySelector('tbody');
            tableBody.innerHTML = data.transactions.map(transaction =>
                `<tr>
                    <td>${transaction.transactionId}</td>
                    <td>${transaction.description}</td>
                    <td>$${transaction.amount.toFixed(2)}</td>
                    <td>${new Date(transaction.date).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching transactions:', error));

    // Fetch revenue analysis data (e.g., for charting)
    fetch('http://localhost:5143/api/tsdash/revenue')  // Updated URL
        .then(response => response.json())
        .then(data => {
            // Code for rendering charts or graphs using a library like Chart.js or D3.js
            console.log('Revenue data:', data);
        })
        .catch(error => console.error('Error fetching revenue analysis:', error));

        
});
/************************************************************user**********************************/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('user-form');
    const tableBody = document.querySelector('#user-table tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const id = document.getElementById('user-id').value;
        const name = document.getElementById('user-name').value;
        const email = document.getElementById('user-email').value;
        const role = document.getElementById('user-role').value;

        // Create a new row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${role}</td>
            <td><button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button></td>
        `;

        // Append the new row to the table
        tableBody.appendChild(row);

        // Clear the form
        form.reset();
    });

    // Optional: Add event listeners for edit and delete buttons (if needed)
});

/**********************************projects ***********************************************/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('project-form');
    const tableBody = document.querySelector('#project-table tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const id = document.getElementById('project-id').value;
        const name = document.getElementById('project-name').value;
        const description = document.getElementById('project-description').value;
        const status = document.getElementById('project-status').value;

        // Create a new row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${description}</td>
            <td>${status}</td>
            <td><button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button></td>
        `;

        // Append the new row to the table
        tableBody.appendChild(row);

        // Clear the form
        form.reset();
    });

    // Optional: Add event listeners for edit and delete buttons (if needed)
});

/*****************************************************************financials**********************************/
document.addEventListener('DOMContentLoaded', function() {
    // Fetch financial overview data
    fetch('http://localhost:5000/api/tsdash/overview')  // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {
            document.getElementById('total-revenue').textContent = `$${data.totalRevenue.toFixed(2)}`;
            document.getElementById('total-expenses').textContent = `$${data.totalExpenses.toFixed(2)}`;
            document.getElementById('net-profit').textContent = `$${data.netProfit.toFixed(2)}`;
        })
        .catch(error => console.error('Error fetching financial overview:', error));

    // Fetch transactions data
    fetch('http://localhost:5000/api/tsdash/transactions')  // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('transactions-table').querySelector('tbody');
            tableBody.innerHTML = data.transactions.map(transaction =>
                `<tr>
                    <td>${transaction.transactionId}</td>
                    <td>${transaction.description}</td>
                    <td>$${transaction.amount.toFixed(2)}</td>
                    <td>${new Date(transaction.date).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching transactions:', error));
});
                                  /*transation*/

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transaction-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const transactionId = document.getElementById('transactionId').value;
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const date = document.getElementById('date').value;

        // Perform input validation if needed
        if (!transactionId || !description || isNaN(amount) || !date) {
            messageDiv.textContent = 'Please fill in all fields correctly.';
            messageDiv.style.color = 'red';
            return;
        }

        const transactionData = {
            transactionId,
            description,
            amount,
            date
        };

        // Send data to the server using fetch
        fetch('http://localhost:5000/api/tsdash/transactions', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionData)
        })
        .then(response => response.json())
        .then(data => {
            messageDiv.textContent = 'Transaction added successfully!';
            messageDiv.style.color = 'green';

            // Optionally, you can reset the form
            form.reset();
        })
        .catch(error => {
            messageDiv.textContent = 'Error adding transaction. Please try again.';
            messageDiv.style.color = 'red';
            console.error('Error:', error);
        });
    });
});

/***************************************************************Activities*****************************************************/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('activity-form');
    const messageDiv = document.getElementById('message');
    const activitiesTableBody = document.getElementById('activities-table').querySelector('tbody');

    // Fetch existing activities
    fetch('http://localhost:5000/api/tsdash/activities')  // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {
            activitiesTableBody.innerHTML = data.activities.map(activity =>
                `<tr>
                    <td>${activity.activityId}</td>
                    <td>${activity.description}</td>
                    <td>${new Date(activity.date).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => {
            messageDiv.textContent = 'Error fetching activities. Please try again.';
            messageDiv.style.color = 'red';
            console.error('Error:', error);
        });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const activityId = document.getElementById('activityId').value;
        const description = document.getElementById('activityDescription').value;
        const date = document.getElementById('activityDate').value;

        // Perform input validation if needed
        if (!activityId || !description || !date) {
            messageDiv.textContent = 'Please fill in all fields correctly.';
            messageDiv.style.color = 'red';
            return;
        }

        const activityData = {
            activityId,
            description,
            date
        };

        // Send data to the server using fetch
        fetch('http://localhost:5000/api/tsdash/activities', {  // Replace with your actual API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activityData)
        })
        .then(response => response.json())
        .then(data => {
            messageDiv.textContent = 'Activity added successfully!';
            messageDiv.style.color = 'green';

            // Optionally, you can add the new activity to the table
            activitiesTableBody.innerHTML +=
                `<tr>
                    <td>${activityData.activityId}</td>
                    <td>${activityData.description}</td>
                    <td>${new Date(activityData.date).toLocaleDateString()}</td>
                </tr>`;

            // Reset the form
            form.reset();
        })
        .catch(error => {
            messageDiv.textContent = 'Error adding activity. Please try again.';
            messageDiv.style.color = 'red';
            console.error('Error:', error);
        });
    });
});

/****************************************************Announcements********************************************************/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('announcement-form');
    const messageDiv = document.getElementById('message');
    const announcementsTableBody = document.getElementById('announcements-table').querySelector('tbody');

    // Fetch existing announcements
    fetch('http://localhost:5000/api/tsdash/announcements')  // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {
            announcementsTableBody.innerHTML = data.announcements.map(announcement =>
                `<tr>
                    <td>${announcement.announcementId}</td>
                    <td>${announcement.title}</td>
                    <td>${announcement.description}</td>
                    <td>${new Date(announcement.date).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => {
            messageDiv.textContent = 'Error fetching announcements. Please try again.';
            messageDiv.style.color = 'red';
            console.error('Error:', error);
        });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const announcementId = document.getElementById('announcementId').value;
        const title = document.getElementById('announcementTitle').value;
        const description = document.getElementById('announcementDescription').value;
        const date = document.getElementById('announcementDate').value;

        // Perform input validation if needed
        if (!announcementId || !title || !description || !date) {
            messageDiv.textContent = 'Please fill in all fields correctly.';
            messageDiv.style.color = 'red';
            return;
        }

        const announcementData = {
            announcementId,
            title,
            description,
            date
        };

        // Send data to the server using fetch
        fetch('http://localhost:5000/api/tsdash/announcements', {  // Replace with your actual API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(announcementData)
        })
        .then(response => response.json())
        .then(data => {
            messageDiv.textContent = 'Announcement added successfully!';
            messageDiv.style.color = 'green';

            // Optionally, you can add the new announcement to the table
            announcementsTableBody.innerHTML +=
                `<tr>
                    <td>${announcementData.announcementId}</td>
                    <td>${announcementData.title}</td>
                    <td>${announcementData.description}</td>
                    <td>${new Date(announcementData.date).toLocaleDateString()}</td>
                </tr>`;

            // Reset the form
            form.reset();
        })
        .catch(error => {
            messageDiv.textContent = 'Error adding announcement. Please try again.';
            messageDiv.style.color = 'red';
            console.error('Error:', error);
        });
    });
});

  /******************************************************************Documents***********************************/
  document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('upload-form');
    const uploadMessage = document.getElementById('upload-message');
    const documentsTableBody = document.getElementById('documents-table').querySelector('tbody');
    const searchInput = document.getElementById('search');
    const roleFilter = document.getElementById('roleFilter');
    const shareWithSelect = document.getElementById('shareWith');

    // Fetch existing documents
    function fetchDocuments() {
        fetch('http://localhost:5000/api/tsdash/documents')  // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                documentsTableBody.innerHTML = data.documents.map(doc =>
                    `<tr>
                        <td>${doc.documentId}</td>
                        <td>${doc.title}</td>
                        <td>${doc.description}</td>
                        <td>${doc.uploadedBy}</td>
                        <td>${new Date(doc.date).toLocaleDateString()}</td>
                        <td>${doc.sharedWith.join(', ')}</td>
                    </tr>`
                ).join('');
                filterDocuments();
            })
            .catch(error => {
                uploadMessage.textContent = 'Error fetching documents. Please try again.';
                uploadMessage.style.color = 'red';
                console.error('Error:', error);
            });
    }

    // Fetch users to populate the share select
    function fetchUsers() {
        fetch('http://localhost:5000/api/tsdash/users')  // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                shareWithSelect.innerHTML = data.users.map(user =>
                    `<option value="${user.id}">${user.name} (${user.role})</option>`
                ).join('');
                populateRoleFilter(data.users);
            })
            .catch(error => {
                uploadMessage.textContent = 'Error fetching users. Please try again.';
                uploadMessage.style.color = 'red';
                console.error('Error:', error);
            });
    }

    // Populate role filter dropdown
    function populateRoleFilter(users) {
        const roles = [...new Set(users.map(user => user.role))];
        roleFilter.innerHTML = `<option value="">Filter by Role</option>` + roles.map(role =>
            `<option value="${role}">${role}</option>`
        ).join('');
    }

    // Handle file upload
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(uploadForm);
        const selectedUsers = Array.from(shareWithSelect.selectedOptions).map(option => option.value);

        formData.append('shareWith', JSON.stringify(selectedUsers));

        fetch('http://localhost:5000/api/tsdash/documents', {  // Replace with your actual API endpoint
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            uploadMessage.textContent = 'Document uploaded and shared successfully!';
            uploadMessage.style.color = 'green';

            // Optionally, fetch the updated list of documents
            fetchDocuments();
        })
        .catch(error => {
            uploadMessage.textContent = 'Error uploading document. Please try again.';
            uploadMessage.style.color = 'red';
            console.error('Error:', error);
        });
    });

    // Search and filter functionality
    function filterDocuments() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRole = roleFilter.value;

        Array.from(documentsTableBody.querySelectorAll('tr')).forEach(row => {
            const cells = row.querySelectorAll('td');
            const matchesSearch = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchTerm));
            const matchesRole = !selectedRole || row.cells[3].textContent.includes(selectedRole);

            row.style.display = matchesSearch && matchesRole ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterDocuments);
    roleFilter.addEventListener('change', filterDocuments);

    // Initial fetch
    fetchDocuments();
    fetchUsers();
});

/*-----------------------------------------------------------------------------------------------------------------------*/

/////////////////////////////////////////////////////////Admin/////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Fetch user management data
    fetch('http://localhost:5000/api/admin/users')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('users-table').querySelector('tbody');
            tableBody.innerHTML = data.users.map(user =>
                `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.role}</td>
                    <td>${user.status}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching users:', error));

    // Fetch system statistics
    fetch('http://localhost:5000/api/admin/statistics')
        .then(response => response.json())
        .then(data => {
            const statsDiv = document.getElementById('stats');
            statsDiv.innerHTML = `
                <p>Total Users: ${data.totalUsers}</p>
                <p>Active Projects: ${data.activeProjects}</p>
                <p>System Uptime: ${data.systemUptime}</p>
            `;
        })
        .catch(error => console.error('Error fetching statistics:', error));

    // Fetch project overview data
    fetch('http://localhost:5000/api/admin/projects')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('projects-table').querySelector('tbody');
            tableBody.innerHTML = data.projects.map(project =>
                `<tr>
                    <td>${project.name}</td>
                    <td>${project.status}</td>
                    <td>${new Date(project.deadline).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching projects:', error));

    // Fetch financial overview data
    fetch('http://localhost:5000/api/admin/financials')
        .then(response => response.json())
        .then(data => {
            const financialsDiv = document.getElementById('financials');
            financialsDiv.innerHTML = `
                <p>Total Revenue: ${data.totalRevenue}</p>
                <p>Total Expenses: ${data.totalExpenses}</p>
                <p>Profit Margin: ${data.profitMargin}%</p>
            `;
        })
        .catch(error => console.error('Error fetching financials:', error));

    // Fetch recent activities
    fetch('http://localhost:5000/api/admin/activities')
        .then(response => response.json())
        .then(data => {
            const activitiesList = document.getElementById('activities-list');
            activitiesList.innerHTML = data.activities.map(activity =>
                `<li>${activity}</li>`
            ).join('');
        })
        .catch(error => console.error('Error fetching activities:', error));

    // Fetch announcements
    fetch('http://localhost:5000/api/admin/announcements')
        .then(response => response.json())
        .then(data => {
            const announcementsList = document.getElementById('announcements-list');
            announcementsList.innerHTML = data.announcements.map(announcement =>
                `<li>${announcement}</li>`
            ).join('');
        })
        .catch(error => console.error('Error fetching announcements:', error));
});
/**************************************************************upload documents*********************************/
document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display existing documents
    function fetchDocuments() {
        fetch('http://localhost:5000/api/admin/documents')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById('documents-table').querySelector('tbody');
                tableBody.innerHTML = data.documents.map(doc =>
                    `<tr>
                        <td>${doc.name}</td>
                        <td>${new Date(doc.uploadDate).toLocaleDateString()}</td>
                        <td class="actions">
                            <button onclick="downloadDocument('${doc.id}')">Download</button>
                            <button onclick="deleteDocument('${doc.id}')">Delete</button>
                        </td>
                    </tr>`
                ).join('');
            })
            .catch(error => console.error('Error fetching documents:', error));
    }

    // Handle document upload
    document.getElementById('upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('document', document.getElementById('document').files[0]);

        fetch('http://localhost:5000/api/admin/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Document uploaded successfully.');
                fetchDocuments();
            } else {
                alert('Failed to upload document.');
            }
        })
        .catch(error => console.error('Error uploading document:', error));
    });

    // Download document function
    window.downloadDocument = function(docId) {
        window.location.href = `http://localhost:5000/api/admin/documents/${docId}/download`;
    };

    // Delete document function
    window.deleteDocument = function(docId) {
        fetch(`http://localhost:5000/api/admin/documents/${docId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('Document deleted successfully.');
                fetchDocuments();
            } else {
                alert('Failed to delete document.');
            }
        })
        .catch(error => console.error('Error deleting document:', error));
    };

    // Fetch documents on page load
    fetchDocuments();
});

/*-----------------------------------------------------------------------------------------------------------------------*/

////////////////////////////////////////////////////////Customer///////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Fetch project overview data
    fetch('http://localhost:5000/api/customer/projects')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('projects-table').querySelector('tbody');
            tableBody.innerHTML = data.projects.map(project =>
                `<tr>
                    <td>${project.name}</td>
                    <td>${project.status}</td>
                    <td>${new Date(project.deadline).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching projects:', error));

    // Fetch invoices data
    fetch('http://localhost:5000/api/customer/invoices')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('invoices-table').querySelector('tbody');
            tableBody.innerHTML = data.invoices.map(invoice =>
                `<tr>
                    <td>${invoice.number}</td>
                    <td>${invoice.amount}</td>
                    <td>${invoice.status}</td>
                    <td>${new Date(invoice.dueDate).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching invoices:', error));

    // Fetch support tickets data
    fetch('http://localhost:5000/api/customer/support')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('support-tickets-table').querySelector('tbody');
            tableBody.innerHTML = data.tickets.map(ticket =>
                `<tr>
                    <td>${ticket.id}</td>
                    <td>${ticket.issue}</td>
                    <td>${ticket.status}</td>
                    <td>${new Date(ticket.createdDate).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching support tickets:', error));

    // Fetch upcoming meetings
    fetch('http://localhost:5000/api/customer/meetings')
        .then(response => response.json())
        .then(data => {
            const meetingsList = document.getElementById('meetings-list');
            meetingsList.innerHTML = data.meetings.map(meeting =>
                `<li>${meeting.title} - ${new Date(meeting.date).toLocaleDateString()} at ${meeting.time}</li>`
            ).join('');
        })
        .catch(error => console.error('Error fetching meetings:', error));

    // Fetch announcements
    fetch('http://localhost:5000/api/customer/announcements')
        .then(response => response.json())
        .then(data => {
            const announcementsList = document.getElementById('announcements-list');
            announcementsList.innerHTML = data.announcements.map(announcement =>
                `<li>${announcement}</li>`
            ).join('');
        })
        .catch(error => console.error('Error fetching announcements:', error));
});


/*********************************************************projects**********************************************/
document.addEventListener('DOMContentLoaded', function() {
    const projectsTableBody = document.getElementById('projects-table').querySelector('tbody');
    const searchInput = document.getElementById('search');
    const projectForm = document.getElementById('project-form');
    const formTitle = document.getElementById('form-title');
    const cancelBtn = document.getElementById('cancel-btn');
    const projectIdInput = document.getElementById('project-id');

    // Fetch existing projects
    function fetchProjects() {
        fetch('http://localhost:5000/api/tsdash/projects')  // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                projectsTableBody.innerHTML = data.projects.map(project =>
                    `<tr>
                        <td>${project.projectId}</td>
                        <td>${project.projectName}</td>
                        <td>${project.status}</td>
                        <td>${new Date(project.deadline).toLocaleDateString()}</td>
                        <td><button onclick="editProject('${project.projectId}')">Edit</button></td>
                    </tr>`
                ).join('');
                filterProjects();
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }

    // Function to edit project
    function editProject(projectId) {
        fetch(`http://localhost:5000/api/tsdash/projects/${projectId}`)  // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                formTitle.textContent = 'Edit Project';
                projectIdInput.value = data.project.projectId;
                document.getElementById('project-name').value = data.project.projectName;
                document.getElementById('status').value = data.project.status;
                document.getElementById('deadline').value = data.project.deadline.split('T')[0];  // Assuming date in YYYY-MM-DD format
                window.scrollTo(0, document.body.scrollHeight); // Scroll to form
            })
            .catch(error => {
                console.error('Error fetching project details:', error);
            });
    }

    // Function to handle form submission
    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const projectId = projectIdInput.value;
        const method = projectId ? 'PUT' : 'POST';
        const url = projectId ? `http://localhost:5000/api/tsdash/projects/${projectId}` : 'http://localhost:5000/api/tsdash/projects';  // Replace with your actual API endpoint

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                projectName: document.getElementById('project-name').value,
                status: document.getElementById('status').value,
                deadline: document.getElementById('deadline').value
            })
        })
        .then(response => response.json())
        .then(data => {
            alert(`Project ${projectId ? 'updated' : 'added'} successfully!`);
            projectForm.reset();
            projectIdInput.value = '';
            formTitle.textContent = 'Add New Project';
            fetchProjects();
        })
        .catch(error => {
            console.error('Error saving project:', error);
        });
    });

    // Cancel button functionality
    cancelBtn.addEventListener('click', function() {
        projectForm.reset();
        projectIdInput.value = '';
        formTitle.textContent = 'Add New Project';
    });

    // Search and filter functionality
    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase();

        Array.from(projectsTableBody.querySelectorAll('tr')).forEach(row => {
            const cells = row.querySelectorAll('td');
            const matchesSearch = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchTerm));
            row.style.display = matchesSearch ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterProjects);

    // Initial fetch
    fetchProjects();
});

/*****************************************************Invoices**********************************************/
document.addEventListener('DOMContentLoaded', function() {
    const invoicesTableBody = document.getElementById('invoices-table').querySelector('tbody');
    const searchInput = document.getElementById('search');
    const invoiceForm = document.getElementById('invoice-form');
    const formTitle = document.getElementById('form-title');
    const cancelBtn = document.getElementById('cancel-btn');
    const invoiceIdInput = document.getElementById('invoice-id');

    // Fetch existing invoices
    function fetchInvoices() {
        fetch('http://localhost:5000/api/tsdash/invoices')  // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                invoicesTableBody.innerHTML = data.invoices.map(invoice =>
                    `<tr>
                        <td>${invoice.invoiceId}</td>
                        <td>${invoice.clientName}</td>
                        <td>$${invoice.amount.toFixed(2)}</td>
                        <td>${invoice.status}</td>
                        <td>${new Date(invoice.dueDate).toLocaleDateString()}</td>
                        <td><button onclick="editInvoice('${invoice.invoiceId}')">Edit</button></td>
                    </tr>`
                ).join('');
                filterInvoices();
            })
            .catch(error => {
                console.error('Error fetching invoices:', error);
            });
    }

    // Function to edit invoice
    function editInvoice(invoiceId) {
        fetch(`http://localhost:5000/api/tsdash/invoices/${invoiceId}`)  // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                formTitle.textContent = 'Edit Invoice';
                invoiceIdInput.value = data.invoice.invoiceId;
                document.getElementById('client-name').value = data.invoice.clientName;
                document.getElementById('amount').value = data.invoice.amount;
                document.getElementById('status').value = data.invoice.status;
                document.getElementById('due-date').value = data.invoice.dueDate.split('T')[0];  // Assuming date in YYYY-MM-DD format
                window.scrollTo(0, document.body.scrollHeight); // Scroll to form
            })
            .catch(error => {
                console.error('Error fetching invoice details:', error);
            });
    }

    // Function to handle form submission
    invoiceForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const invoiceId = invoiceIdInput.value;
        const method = invoiceId ? 'PUT' : 'POST';
        const url = invoiceId ? `http://localhost:5000/api/tsdash/invoices/${invoiceId}` : 'http://localhost:5000/api/tsdash/invoices';  // Replace with your actual API endpoint

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clientName: document.getElementById('client-name').value,
                amount: parseFloat(document.getElementById('amount').value),
                status: document.getElementById('status').value,
                dueDate: document.getElementById('due-date').value
            })
        })
        .then(response => response.json())
        .then(data => {
            alert(`Invoice ${invoiceId ? 'updated' : 'added'} successfully!`);
            invoiceForm.reset();
            invoiceIdInput.value = '';
            formTitle.textContent = 'Add New Invoice';
            fetchInvoices();
        })
        .catch(error => {
            console.error('Error saving invoice:', error);
        });
    });

    // Cancel button functionality
    cancelBtn.addEventListener('click', function() {
        invoiceForm.reset();
        invoiceIdInput.value = '';
        formTitle.textContent = 'Add New Invoice';
    });

    // Search and filter functionality
    function filterInvoices() {
        const searchTerm = searchInput.value.toLowerCase();

        Array.from(invoicesTableBody.querySelectorAll('tr')).forEach(row => {
            const cells = row.querySelectorAll('td');
            const matchesSearch = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchTerm));
            row.style.display = matchesSearch ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterInvoices);

    // Initial fetch
    fetchInvoices();
});

/********************************************************************Support*********************************************/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('supportForm');
    const ticketsTable = document.getElementById('ticketsTable').getElementsByTagName('tbody')[0];
    
    // Dummy function to generate unique ticket IDs
    const generateTicketId = () => 'TICKET' + Math.floor(Math.random() * 1000);

    // Function to handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const title = document.getElementById('ticket-title').value;
        const description = document.getElementById('ticket-description').value;
        const priority = document.getElementById('ticket-priority').value;
        const dateCreated = new Date().toLocaleDateString();
        const ticketId = generateTicketId();

        // Add new ticket to table
        const row = ticketsTable.insertRow();
        row.insertCell(0).textContent = ticketId;
        row.insertCell(1).textContent = title;
        row.insertCell(2).textContent = description;
        row.insertCell(3).textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
        row.insertCell(4).textContent = dateCreated;

        // Clear form fields
        form.reset();
    });
});


/**************************************************************announcements*********************************************/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('announcementForm');
    const announcementsTable = document.getElementById('announcementsTable').getElementsByTagName('tbody')[0];

    // Function to handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const title = document.getElementById('announcement-title').value;
        const date = document.getElementById('announcement-date').value;
        const content = document.getElementById('announcement-content').value;

        // Add new announcement to table
        const row = announcementsTable.insertRow();
        row.insertCell(0).textContent = title;
        row.insertCell(1).textContent = new Date(date).toLocaleDateString();
        row.insertCell(2).textContent = content;

        // Clear form fields
        form.reset();
    });
});


/*-----------------------------------------------------------------------------------------------------------------------*/

/////////////////////////////////////////////////////////HR////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Fetch employee overview data
    fetch('http://localhost:5000/api/hr/overview')
        .then(response => response.json())
        .then(data => {
            document.getElementById('total-employees').textContent = data.totalEmployees;
            document.getElementById('new-hires').textContent = data.newHires;
            document.getElementById('active-employees').textContent = data.activeEmployees;
            document.getElementById('inactive-employees').textContent = data.inactiveEmployees;
        })
        .catch(error => console.error('Error fetching employee overview:', error));

    // Fetch recruitment status data
    fetch('http://localhost:5000/api/hr/recruitment')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('recruitment-table').querySelector('tbody');
            tableBody.innerHTML = data.positions.map(position =>
                `<tr>
                    <td>${position.position}</td>
                    <td>${position.status}</td>
                    <td>${new Date(position.openSince).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching recruitment status:', error));

    // Fetch performance metrics data
    fetch('http://localhost:5000/api/hr/performance')
        .then(response => response.json())
        .then(data => {
            // Code for rendering performance chart
            console.log('Performance metrics data:', data);
        })
        .catch(error => console.error('Error fetching performance metrics:', error));

    // Fetch attendance tracking data
    fetch('http://localhost:5000/api/hr/attendance')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('attendance-table').querySelector('tbody');
            tableBody.innerHTML = data.attendance.map(record =>
                `<tr>
                    <td>${record.employee}</td>
                    <td>${record.daysAbsent}</td>
                    <td>${record.daysPresent}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching attendance tracking:', error));

    // Fetch recent HR activities data
    fetch('http://localhost:5000/api/hr/activities')
        .then(response => response.json())
        .then(data => {
            const activitiesList = document.getElementById('activities-list');
            activitiesList.innerHTML = data.activities.map(activity =>
                `<li>${activity}</li>`
            ).join('');
        })
        .catch(error => console.error('Error fetching recent activities:', error));
});
/*************************************************************Employees**********************************************/
document.addEventListener('DOMContentLoaded', () => {
    // Dummy data for demonstration
    const employeeData = {
        totalEmployees: 150,
        newHiresThisMonth: 12,
        activeEmployees: 130,
        inactiveEmployees: 20,
        employeesList: [
            { id: 'E001', name: 'John Doe', position: 'Software Engineer', status: 'Active', dateJoined: '2023-01-15' },
            { id: 'E002', name: 'Jane Smith', position: 'Project Manager', status: 'Active', dateJoined: '2022-09-10' },
            { id: 'E003', name: 'Emily Johnson', position: 'Designer', status: 'Inactive', dateJoined: '2021-07-23' }
            // Add more dummy data as needed
        ]
    };

    // Update overview stats
    document.getElementById('total-employees').value = employeeData.totalEmployees;
    document.getElementById('new-hires').value = employeeData.newHiresThisMonth;
    document.getElementById('active-employees').value = employeeData.activeEmployees;
    document.getElementById('inactive-employees').value = employeeData.inactiveEmployees;

    // Populate the employees table
    const employeesTable = document.getElementById('employeesTable').getElementsByTagName('tbody')[0];
    employeeData.employeesList.forEach(employee => {
        const row = employeesTable.insertRow();
        row.insertCell(0).textContent = employee.id;
        row.insertCell(1).textContent = employee.name;
        row.insertCell(2).textContent = employee.position;
        row.insertCell(3).textContent = employee.status;
        row.insertCell(4).textContent = employee.dateJoined;
    });

    // Handle form submission for updating employee overview
    document.getElementById('employeeForm').addEventListener('submit', (event) => {
        event.preventDefault();

        // Here you would typically send this data to a server
        employeeData.totalEmployees = parseInt(document.getElementById('total-employees').value, 10);
        employeeData.newHiresThisMonth = parseInt(document.getElementById('new-hires').value, 10);
        employeeData.activeEmployees = parseInt(document.getElementById('active-employees').value, 10);
        employeeData.inactiveEmployees = parseInt(document.getElementById('inactive-employees').value, 10);

        alert('Employee overview updated.');
    });

    // Handle form submission for adding a new employee
    document.getElementById('addEmployeeForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const newEmployee = {
            id: document.getElementById('emp-id').value,
            name: document.getElementById('emp-name').value,
            position: document.getElementById('emp-position').value,
            status: document.getElementById('emp-status').value,
            dateJoined: document.getElementById('emp-date-joined').value
        };

        // Add new employee to the table
        const row = employeesTable.insertRow();
        row.insertCell(0).textContent = newEmployee.id;
        row.insertCell(1).textContent = newEmployee.name;
        row.insertCell(2).textContent = newEmployee.position;
        row.insertCell(3).textContent = newEmployee.status;
        row.insertCell(4).textContent = newEmployee.dateJoined;

        // Optionally, add new employee to employeeData.employeesList
        employeeData.employeesList.push(newEmployee);

        alert('New employee added.');
        document.getElementById('addEmployeeForm').reset();
    });
});

/************************************************************Recruitment*************************************************/
document.addEventListener('DOMContentLoaded', () => {
    // Dummy data for demonstration
    const vacanciesData = [
        { id: 'V001', position: 'Software Engineer', department: 'IT', status: 'Open', postedDate: '2024-01-15' },
        { id: 'V002', position: 'Marketing Manager', department: 'Marketing', status: 'Open', postedDate: '2024-02-01' },
        { id: 'V003', position: 'HR Specialist', department: 'HR', status: 'Closed', postedDate: '2023-11-30' }
    ];

    // Populate the vacancies table
    const vacanciesTable = document.getElementById('vacanciesTable').getElementsByTagName('tbody')[0];
    vacanciesData.forEach(vacancy => {
        const row = vacanciesTable.insertRow();
        row.insertCell(0).textContent = vacancy.id;
        row.insertCell(1).textContent = vacancy.position;
        row.insertCell(2).textContent = vacancy.department;
        row.insertCell(3).textContent = vacancy.status;
        row.insertCell(4).textContent = vacancy.postedDate;
    });

    // Handle form submission for adding a new vacancy
    document.getElementById('addVacancyForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const newVacancy = {
            id: document.getElementById('vac-id').value,
            position: document.getElementById('vac-position').value,
            department: document.getElementById('vac-department').value,
            status: document.getElementById('vac-status').value,
            postedDate: document.getElementById('vac-posted-date').value
        };

        // Add new vacancy to the table
        const row = vacanciesTable.insertRow();
        row.insertCell(0).textContent = newVacancy.id;
        row.insertCell(1).textContent = newVacancy.position;
        row.insertCell(2).textContent = newVacancy.department;
        row.insertCell(3).textContent = newVacancy.status;
        row.insertCell(4).textContent = newVacancy.postedDate;

        // Optionally, add new vacancy to vacanciesData
        vacanciesData.push(newVacancy);

        alert('New vacancy added.');
        document.getElementById('addVacancyForm').reset();
    });
});

/********************************************************************perfomance*******************************************/
document.addEventListener('DOMContentLoaded', () => {
    const reviewsTable = document.getElementById('reviews-table').querySelector('tbody');
    const reviewForm = document.getElementById('review-form');
    const totalReviewsElem = document.getElementById('total-reviews');
    const averageRatingElem = document.getElementById('average-rating');
    const ctx = document.getElementById('performance-chart').getContext('2d');

    // Dummy data for demonstration
    const performanceReviews = [
        {
            reviewDate: '2024-08-15',
            reviewer: 'John Doe',
            ratings: 4,
            comments: 'Good performance, but could improve in communication.'
        },
        {
            reviewDate: '2024-07-20',
            reviewer: 'Jane Smith',
            ratings: 5,
            comments: 'Excellent performance, met all expectations.'
        }
    ];

    // Function to calculate metrics
    function calculateMetrics() {
        const totalReviews = performanceReviews.length;
        const averageRating = totalReviews === 0 ? 0 : 
            performanceReviews.reduce((sum, review) => sum + review.ratings, 0) / totalReviews;

        totalReviewsElem.textContent = totalReviews;
        averageRatingElem.textContent = averageRating.toFixed(1);
    }

    // Function to render reviews in the table
    function renderReviews() {
        reviewsTable.innerHTML = performanceReviews.map(review =>
            `<tr>
                <td>${review.reviewDate}</td>
                <td>${review.reviewer}</td>
                <td>${review.ratings}</td>
                <td>${review.comments}</td>
            </tr>`
        ).join('');
    }

    // Function to render the performance chart
    function renderChart() {
        const labels = performanceReviews.map(review => review.reviewDate);
        const ratings = performanceReviews.map(review => review.ratings);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Ratings Over Time',
                    data: ratings,
                    borderColor: '#333',
                    backgroundColor: 'rgba(51, 51, 51, 0.2)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true,
                        max: 5
                    }
                }
            }
        });
    }

    // Initialize metrics, table, and chart with dummy data
    calculateMetrics();
    renderReviews();
    renderChart();

    // Handle form submission
    reviewForm.addEventListener('submit', event => {
        event.preventDefault();

        // Collect form data
        const reviewDate = document.getElementById('review-date').value;
        const reviewer = document.getElementById('reviewer').value;
        const ratings = parseInt(document.getElementById('ratings').value, 10);
        const comments = document.getElementById('comments').value;

        // Add new review to the array
        performanceReviews.push({
            reviewDate,
            reviewer,
            ratings,
            comments
        });

        // Re-render the reviews table and chart
        calculateMetrics();
        renderReviews();
        renderChart();

        // Clear form
        reviewForm.reset();
    });
});

/*****************************************************************************Attendence*********************************/
document.addEventListener('DOMContentLoaded', () => {
    const attendanceTable = document.getElementById('attendance-table').querySelector('tbody');
    const attendanceForm = document.getElementById('attendance-form');

    // Dummy data for demonstration
    const attendanceRecords = [
        {
            employeeName: 'Alice Johnson',
            daysPresent: 15,
            daysAbsent: 2
        },
        {
            employeeName: 'Bob Smith',
            daysPresent: 18,
            daysAbsent: 0
        }
    ];

    // Function to render the attendance table
    function renderTable() {
        attendanceTable.innerHTML = attendanceRecords.map(record =>
            `<tr>
                <td>${record.employeeName}</td>
                <td>${record.daysPresent}</td>
                <td>${record.daysAbsent}</td>
            </tr>`
        ).join('');
    }

    // Initialize the table with dummy data
    renderTable();

    // Handle form submission
    attendanceForm.addEventListener('submit', event => {
        event.preventDefault();

        // Collect form data
        const employeeName = document.getElementById('employee-name').value;
        const daysPresent = parseInt(document.getElementById('days-present').value, 10);
        const daysAbsent = parseInt(document.getElementById('days-absent').value, 10);

        // Add new record to the array
        attendanceRecords.push({
            employeeName,
            daysPresent,
            daysAbsent
        });

        // Re-render the table with new data
        renderTable();

        // Clear form
        attendanceForm.reset();
    });
});

/*-----------------------------------------------------------------------------------------------------------------------*/

/////////////////////////////////////////////////////////Stuff/////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Fetch task overview data
    fetch('http://localhost:5000/api/staff/tasks')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tasks-table').querySelector('tbody');
            tableBody.innerHTML = data.tasks.map(task =>
                `<tr>
                    <td>${task.name}</td>
                    <td>${task.status}</td>
                    <td>${new Date(task.dueDate).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching tasks:', error));

    // Fetch project status data
    fetch('http://localhost:5000/api/staff/projects')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('projects-table').querySelector('tbody');
            tableBody.innerHTML = data.projects.map(project =>
                `<tr>
                    <td>${project.name}</td>
                    <td>${project.progress}%</td>
                    <td>${new Date(project.deadline).toLocaleDateString()}</td>
                </tr>`
            ).join('');
        })
        .catch(error => console.error('Error fetching projects:', error));

    // Fetch upcoming deadlines
    fetch('http://localhost:5000/api/staff/deadlines')
        .then(response => response.json())
        .then(data => {
            const deadlinesList = document.getElementById('deadlines-list');
            deadlinesList.innerHTML = data.deadlines.map(deadline =>
                `<li>${deadline.task} - ${new Date(deadline.date).toLocaleDateString()}</li>`
            ).join('');
        })
        .catch(error => console.error('Error fetching deadlines:', error));

    // Fetch announcements
    fetch('http://localhost:5000/api/staff/announcements')
        .then(response => response.json())
        .then(data => {
            const announcementsList = document.getElementById('announcements-list');
            announcementsList.innerHTML = data.announcements.map(announcement =>
                `<li>${announcement}</li>`
            ).join('');
        })
        .catch(error => console.error('Error fetching announcements:', error));

    // Fetch personal schedule
    fetch('http://localhost:5000/api/staff/schedule')
        .then(response => response.json())
        .then(data => {
            const scheduleDiv = document.getElementById('schedule');
            scheduleDiv.innerHTML = data.schedule.map(event =>
                `<p>${event.title} - ${new Date(event.date).toLocaleDateString()} at ${event.time}</p>`
            ).join('');
        })
        .catch(error => console.error('Error fetching schedule:', error));
});

/********************************************************************************Tasks******************************/
document.addEventListener('DOMContentLoaded', () => {
    const taskTable = document.getElementById('task-table').querySelector('tbody');
    const taskForm = document.getElementById('task-form');

    // Dummy data for demonstration
    const tasks = [
        {
            title: 'Complete Report',
            description: 'Finalize the monthly report',
            dueDate: '2024-09-10',
            status: 'Pending'
        },
        {
            title: 'Team Meeting',
            description: 'Discuss project updates',
            dueDate: '2024-09-12',
            status: 'In Progress'
        }
    ];

    // Function to render the task table
    function renderTable() {
        taskTable.innerHTML = tasks.map((task, index) =>
            `<tr>
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.dueDate}</td>
                <td>${task.status}</td>
                <td>
                    <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                </td>
            </tr>`
        ).join('');
    }

    // Initialize the table with dummy data
    renderTable();

    // Handle form submission
    taskForm.addEventListener('submit', event => {
        event.preventDefault();

        // Collect form data
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('due-date').value;
        const status = document.getElementById('task-status').value;

        // Add new task to the array
        tasks.push({
            title,
            description,
            dueDate,
            status
        });

        // Re-render the table with new data
        renderTable();

        // Clear form
        taskForm.reset();
    });

    // Function to edit a task
    window.editTask = function(index) {
        const task = tasks[index];
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-description').value = task.description;
        document.getElementById('due-date').value = task.dueDate;
        document.getElementById('task-status').value = task.status;
        
        // Remove the task from the array
        tasks.splice(index, 1);
        renderTable();
    };

    // Function to delete a task
    window.deleteTask = function(index) {
        tasks.splice(index, 1);
        renderTable();
    };
});

/********************************************************************Projects**************************************/
document.addEventListener('DOMContentLoaded', () => {
    const projectTable = document.getElementById('project-table').querySelector('tbody');
    const projectForm = document.getElementById('project-form');

    // Dummy data for demonstration
    const projects = [
        {
            name: 'Website Redesign',
            description: 'Revamp the company website.',
            startDate: '2024-08-01',
            endDate: '2024-12-31',
            status: 'In Progress'
        },
        {
            name: 'New CRM System',
            description: 'Implement a new CRM system.',
            startDate: '2024-07-15',
            endDate: '2024-11-15',
            status: 'Completed'
        }
    ];

    // Function to render the project table
    function renderTable() {
        projectTable.innerHTML = projects.map((project, index) =>
            `<tr>
                <td>${project.name}</td>
                <td>${project.description}</td>
                <td>${project.startDate}</td>
                <td>${project.endDate}</td>
                <td>${project.status}</td>
                <td>
                    <button class="edit-btn" onclick="editProject(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteProject(${index})">Delete</button>
                </td>
            </tr>`
        ).join('');
    }

    // Initialize the table with dummy data
    renderTable();

    // Handle form submission
    projectForm.addEventListener('submit', event => {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('project-name').value;
        const description = document.getElementById('project-description').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const status = document.getElementById('project-status').value;

        // Add new project to the array
        projects.push({
            name,
            description,
            startDate,
            endDate,
            status
        });

        // Re-render the table with new data
        renderTable();

        // Clear form
        projectForm.reset();
    });

    // Function to edit a project
    window.editProject = function(index) {
        const project = projects[index];
        document.getElementById('project-name').value = project.name;
        document.getElementById('project-description').value = project.description;
        document.getElementById('start-date').value = project.startDate;
        document.getElementById('end-date').value = project.endDate;
        document.getElementById('project-status').value = project.status;

        // Remove the project from the array
        projects.splice(index, 1);
        renderTable();
    };

    // Function to delete a project
    window.deleteProject = function(index) {
        projects.splice(index, 1);
        renderTable();
    };
});

/************************************************************Deadlines******************************************/
document.addEventListener('DOMContentLoaded', () => {
    const deadlineTable = document.getElementById('deadline-table').querySelector('tbody');
    const deadlineForm = document.getElementById('deadline-form');

    // Dummy data for demonstration
    const deadlines = [
        {
            projectName: 'Website Redesign',
            deadlineDate: '2024-09-30',
            status: 'Upcoming'
        },
        {
            projectName: 'New CRM System',
            deadlineDate: '2024-08-31',
            status: 'Completed'
        }
    ];

    // Function to render the deadline table
    function renderTable() {
        deadlineTable.innerHTML = deadlines.map((deadline, index) =>
            `<tr>
                <td>${deadline.projectName}</td>
                <td>${deadline.deadlineDate}</td>
                <td>${deadline.status}</td>
                <td>
                    <button class="edit-btn" onclick="editDeadline(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteDeadline(${index})">Delete</button>
                </td>
            </tr>`
        ).join('');
    }

    // Initialize the table with dummy data
    renderTable();

    // Handle form submission
    deadlineForm.addEventListener('submit', event => {
        event.preventDefault();

        // Collect form data
        const projectName = document.getElementById('project-name').value;
        const deadlineDate = document.getElementById('deadline-date').value;
        const status = document.getElementById('status').value;

        // Add new deadline to the array
        deadlines.push({
            projectName,
            deadlineDate,
            status
        });

        // Re-render the table with new data
        renderTable();

        // Clear form
        deadlineForm.reset();
    });

    // Function to edit a deadline
    window.editDeadline = function(index) {
        const deadline = deadlines[index];
        document.getElementById('project-name').value = deadline.projectName;
        document.getElementById('deadline-date').value = deadline.deadlineDate;
        document.getElementById('status').value = deadline.status;

        // Remove the deadline from the array
        deadlines.splice(index, 1);
        renderTable();
    };

    // Function to delete a deadline
    window.deleteDeadline = function(index) {
        deadlines.splice(index, 1);
        renderTable();
    };
});

/****************************************************Stuff Announcement**********************************************/
document.addEventListener('DOMContentLoaded', () => {
    const announcementTable = document.getElementById('announcement-table').querySelector('tbody');
    const announcementForm = document.getElementById('announcement-form');

    // Dummy data for demonstration
    const announcements = [
        {
            title: 'Staff Meeting',
            date: '2024-09-01',
            content: 'Please attend the staff meeting at 10 AM in the main conference room.'
        },
        {
            title: 'Holiday Schedule',
            date: '2024-08-20',
            content: 'The office will be closed from August 25 to August 30 for holidays.'
        }
    ];

    // Function to render the announcement table
    function renderTable() {
        announcementTable.innerHTML = announcements.map((announcement, index) =>
            `<tr>
                <td>${announcement.title}</td>
                <td>${announcement.date}</td>
                <td>${announcement.content}</td>
                <td>
                    <button class="edit-btn" onclick="editAnnouncement(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteAnnouncement(${index})">Delete</button>
                </td>
            </tr>`
        ).join('');
    }

    // Initialize the table with dummy data
    renderTable();

    // Handle form submission
    announcementForm.addEventListener('submit', event => {
        event.preventDefault();

        // Collect form data
        const title = document.getElementById('announcement-title').value;
        const date = document.getElementById('announcement-date').value;
        const content = document.getElementById('announcement-content').value;

        // Add new announcement to the array
        announcements.push({
            title,
            date,
            content
        });

        // Re-render the table with new data
        renderTable();

        // Clear form
        announcementForm.reset();
    });

    // Function to edit an announcement
    window.editAnnouncement = function(index) {
        const announcement = announcements[index];
        document.getElementById('announcement-title').value = announcement.title;
        document.getElementById('announcement-date').value = announcement.date;
        document.getElementById('announcement-content').value = announcement.content;

        // Remove the announcement from the array
        announcements.splice(index, 1);
        renderTable();
    };

    // Function to delete an announcement
    window.deleteAnnouncement = function(index) {
        announcements.splice(index, 1);
        renderTable();
    };
});

/*****************************************************************Schedule***********************************************/
document.addEventListener('DOMContentLoaded', () => {
    const scheduleTable = document.getElementById('schedule-table').querySelector('tbody');
    const scheduleForm = document.getElementById('schedule-form');

    // Dummy data for demonstration
    const schedules = [
        {
            date: '2024-09-01',
            time: '09:00',
            task: 'Team Meeting'
        },
        {
            date: '2024-09-02',
            time: '14:00',
            task: 'Project Work'
        }
    ];

    // Function to render the schedule table
    function renderTable() {
        scheduleTable.innerHTML = schedules.map((schedule, index) =>
            `<tr>
                <td>${schedule.date}</td>
                <td>${schedule.time}</td>
                <td>${schedule.task}</td>
                <td>
                    <button class="edit-btn" onclick="editSchedule(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteSchedule(${index})">Delete</button>
                </td>
            </tr>`
        ).join('');
    }

    // Initialize the table with dummy data
    renderTable();

    // Handle form submission
    scheduleForm.addEventListener('submit', event => {
        event.preventDefault();

        // Collect form data
        const date = document.getElementById('schedule-date').value;
        const time = document.getElementById('schedule-time').value;
        const task = document.getElementById('schedule-task').value;

        // Add new schedule to the array
        schedules.push({
            date,
            time,
            task
        });

        // Re-render the table with new data
        renderTable();

        // Clear form
        scheduleForm.reset();
    });

    // Function to edit a schedule
    window.editSchedule = function(index) {
        const schedule = schedules[index];
        document.getElementById('schedule-date').value = schedule.date;
        document.getElementById('schedule-time').value = schedule.time;
        document.getElementById('schedule-task').value = schedule.task;

        // Remove the schedule from the array
        schedules.splice(index, 1);
        renderTable();
    };

    // Function to delete a schedule
    window.deleteSchedule = function(index) {
        schedules.splice(index, 1);
        renderTable();
    };
});


/*-----------------------------------------------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    // Fetch financial overview data
    fetchData('api/overview', function(data) {
        document.getElementById('total-revenue').textContent = `$${data.totalRevenue.toFixed(2)}`;
        document.getElementById('total-expenses').textContent = `$${data.totalExpenses.toFixed(2)}`;
        document.getElementById('net-profit').textContent = `$${data.netProfit.toFixed(2)}`;
    });

    // Fetch invoices data
    fetchData('api/invoices', function(data) {
        const tableBody = document.getElementById('invoices-table').getElementsByTagName('tbody')[0];
        data.forEach(invoice => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = invoice.invoiceNumber;
            row.insertCell(1).textContent = invoice.client;
            row.insertCell(2).textContent = `$${invoice.amount.toFixed(2)}`;
            row.insertCell(3).textContent = invoice.status;
            row.insertCell(4).textContent = new Date(invoice.dueDate).toLocaleDateString();
        });
    });

    // Fetch expenses data
    fetchData('api/expenses', function(data) {
        const tableBody = document.getElementById('expenses-table').getElementsByTagName('tbody')[0];
        data.forEach(expense => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = expense.id;
            row.insertCell(1).textContent = expense.description;
            row.insertCell(2).textContent = `$${expense.amount.toFixed(2)}`;
            row.insertCell(3).textContent = new Date(expense.date).toLocaleDateString();
        });
    });

    // Fetch recent transactions data
    fetchData('api/transactions', function(data) {
        const tableBody = document.getElementById('transactions-table').getElementsByTagName('tbody')[0];
        data.forEach(transaction => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = transaction.transactionId;
            row.insertCell(1).textContent = transaction.description;
            row.insertCell(2).textContent = `$${transaction.amount.toFixed(2)}`;
            row.insertCell(3).textContent = new Date(transaction.date).toLocaleDateString();
        });
    });

    function fetchData(endpoint, callback) {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error('Error fetching data:', error));
    }
});
