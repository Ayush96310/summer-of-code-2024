import axios from 'axios';
export function handleFormSubmit(event,showModal) {
    event.preventDefault();
    const form = event.target;
    const SignupForm = new FormData(form);
    const Signup_data = {
        username: SignupForm.get('Username'),
        password: SignupForm.get('Password'),
        email: SignupForm.get('Email'),
        role: Boolean(parseInt(SignupForm.get('Role'))),
        contact: SignupForm.get('Contact')
    };
    // console.log("Signup data to be sent:", Signup_data);
    const signupURL = 'http://127.0.0.1:5000/staff/signup';
    addStaff(signupURL,Signup_data,showModal);
}
export function addStaff(signupURL,Signup_data,showModal){
    axios.post(signupURL, Signup_data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        const data = response.data;
        if (data.success) {
            // console.log('Success')
            showModal("Your details have been successfully reterived and sent to admin for verification.");
        } else {
            // console.log('Failure')
            showModal("Sign up failed. Please try again.");
        }
    })
    .catch(error => {
        // console.error('Error:', error.message);
        showModal("An error occurred. Please try again.");
    }); 
}
