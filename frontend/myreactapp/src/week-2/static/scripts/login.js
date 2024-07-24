import axios from 'axios';

export function handleFormSubmit(event) {
    event.preventDefault();
    const loginForm = new FormData(this);
    const login_data = {
        email: loginForm.get('Email_Address'),
        password: loginForm.get('Password'),
        role: loginForm.get('Role')
    };
    const loginURL = 'http://127.0.0.1:5000/staff/login';
    authenticateLogin(loginURL, login_data, 'loginMessage');
}

export function authenticateLogin(loginURL, login_data, messageElementId) {
    axios.post(loginURL, login_data, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
        .then(response => {
            const data = response.data;
            if (data.success) {
                document.getElementById(messageElementId).textContent = 'Success: ' + data.message;
                setTimeout(() => {
                    if (data.Admin) {
                        const adminDashboardUrl = "/admindashboard";
                        window.location.href = adminDashboardUrl;
                    } else {
                        const cashierDashboardUrl = "/cashierdashboard";
                        window.location.href = cashierDashboardUrl;
                    }
                }, 2000);
            } else {
                document.getElementById(messageElementId).textContent = 'Error: ' + data.message;
            }
        })
        .catch(error => {
            document.getElementById(messageElementId).textContent = 'Error: ' + error.message;
        });
}
