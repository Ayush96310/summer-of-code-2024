export function handleFormSubmit(event) {
    event.preventDefault();
    const loginForm = new FormData(this);
    const login = {
        email: loginForm.get('Email_Address'),
        password: loginForm.get('Password'),
        role: loginForm.get('Role')
    };
    const loginURL = 'http://127.0.0.1:5000/staff/login';
    authenticateLogin(loginURL, login, 'loginMessage');
}

export function authenticateLogin(loginURL, login_data, messageElementId) {
    fetch(loginURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login_data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
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
