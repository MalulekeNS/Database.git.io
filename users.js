document.addEventListener('DOMContentLoaded', function() {
    const usersTableBody = document.querySelector('#users-table tbody');
    const addUserButton = document.getElementById('add-user');

    function fetchUsers() {
        fetch('http://localhost:5000/api/admin/users')  // Update this URL as necessary
            .then(response => response.json())
            .then(data => {
                const users = data.users;
                usersTableBody.innerHTML = users.map(user => `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.role}</td>
                        <td>
                            <button onclick="editUser(${user.id})">Edit</button>
                            <button onclick="deleteUser(${user.id})">Delete</button>
                        </td>
                    </tr>
                `).join('');
            })
            .catch(error => console.error('Error fetching users:', error));
    }

    function addUser() {
        // Code to add a user (e.g., open a modal or redirect to another page)
        window.location.href = 'add-user.html';  // Redirect to add user page
    }

    function editUser(userId) {
        // Code to edit a user (e.g., open a modal or redirect to another page)
        window.location.href = `edit-user.html?id=${userId}`;  // Redirect to edit user page
    }

    function deleteUser(userId) {
        if (confirm('Are you sure you want to delete this user?')) {
            fetch(`http://localhost:5000/api/admin/users/${userId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    fetchUsers();  // Refresh user list after deletion
                } else {
                    console.error('Error deleting user');
                }
            })
            .catch(error => console.error('Error during delete request:', error));
        }
    }

    // Fetch users when the page loads
    fetchUsers();

    // Handle Add User button click
    addUserButton.addEventListener('click', addUser);
});
