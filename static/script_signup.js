const signupForm = document.getElementById("signup-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const college = document.getElementById("college");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const collegeError = document.getElementById("college-error");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const signUp = document.getElementById("signup-button");
const errorMessage = document.getElementById('error-message');
let valid = true;

 function validateForm() {
    valid = true; 

    if (firstName.value.trim() === "") {
        firstNameError.textContent = "First Name is required.";
        valid = false;
    } else {
        firstNameError.textContent = "";
    }

    if (lastName.value.trim() === "") {
        lastNameError.textContent = "Last Name is required.";
        valid = false;
    } else {
        lastNameError.textContent = "";
    }

    if (college.value.trim() === "") {
        collegeError.textContent = "College is required.";
        valid = false;
    } else {
        collegeError.textContent = "";
    }

    if (username.value.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters.";
        valid = false;
    } else {
        usernameError.textContent = "";
    }

    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }
    return valid;

};
// signupForm.addEventListener("submit", function (e) {
//     if (!validateForm()) {
//         e.preventDefault();
//     }
// });
// signUp.addEventListener('click', () => {
//     if (validateForm()) {
//         window.location.href = "index_login.html";
//     } else {
//         errorMessage.textContent = 'Invalid input. Please check the form for errors.';
//     }
// });
const searchInput = document.getElementById('college');
const searchResults = document.getElementById('search-results');


const data = [
    ' IIT Kharagpur IITKGP',
    ' IIT Bombay IITB',
    ' IIT Madras IITM',
    ' IIT Kanpur IITK',
    ' IIT Delhi IITD',
    ' IIT Guwahati IITG',
    ' IIT Roorkee IITR',
    ' IIT Ropar IITRPR',
    ' IIT Bhubaneswar IITBBS',
    ' IIT Gandhinagar IITGN',
    ' IIT Hyderabad IITH',
    ' IIT Jodhpur IITJ',
    ' IIT Patna IITP',
    ' IIT Indore IITI',
    ' IIT Mandi IITMD',
    ' IIT Varanasi IIT',
    ' IIT Palakkad IITPKD',
    ' IIT Tirupati IITT',
    ' IIT Dhanbad IIT ISM',
    ' IIT Bhilai IITBH',
    ' IIT Dharwad IITDH',
    ' IIT Jammu IITJMU',
    ' IIT Goa IIT GOA',
    ' NIT Warangal NITW', 
    ' NIT Bhopal MANIT ',
    ' NIT Nagpur VNIT', 
    ' NIT Durgapur NITDGP ',
    ' NIT Jamshedpur NITJSR', 
    ' NIT Karnataka NITK', 
    ' NIT Srinagar NITSRI ',
    ' NIT Allahabad MNNIT', 
    ' NIT Surat SVNIT', 
    ' NIT Calicut NITC',
    ' NIT Rourkela NITR', 
    ' NIT Jaipur MNIT', 
    ' NIT Kurukshetra NITKKR', 
    ' NIT Tiruchirappalli NITT', 
    ' NIT Silchar NITS', 
    ' NIT Hamirpur NITH', 
    ' NIT Jalandhar NITJ', 
    ' NIT Patna NITP', 
    ' NIT Raipur NITRR', 
    ' NIT Agartala NITA ',
    ' NIT Arunachal Pradesh NITAP', 
    ' NIT Delhi NITD',
    ' NIT Goa NITG ',
    ' NIT Manipur NITMN ',
    ' NIT Meghalaya NITM ',
    ' NIT Mizoram NITMZ', 
    ' NIT Nagaland NITN', 
    ' NIT Puducherry NITPY ',
    ' NIT Sikkim NITSKM', 
    ' NIT Uttarakhand NITUK',
    ' NIT Andhra Pradesh NITANP' 
];

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(searchText));
    
    displayResults(filteredData);
});

function displayResults(results) {
    searchResults.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResults.appendChild(li);
    });
}

searchResults.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchInput.value = e.target.textContent;
        searchResults.innerHTML = '';
    }
});

document.body.addEventListener('click',()=>{
    searchResults.innerHTML='';
})


document.getElementById("signup-button").addEventListener("click",function(){
    alert("Your Signup is Completed. Please go Back.")
});


document.getElementById("signup-button").addEventListener("click",function(){
    alert("Your Signup is Completed. Please go Back.")
});