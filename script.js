var formInput = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
formInput.addEventListener('submit', function (event) {
    event.preventDefault();
    // Fetch form values
    var nameInput = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    // Generate resume HTML
    var resumeHTML = "\n        <h3>Name: <span>".concat(nameInput, "</span></h3>\n        <p>Email: <span>").concat(email, "</span></p>\n        <p>Phone: <span>").concat(phone, "</span></p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    // Display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        // Show the resume section
        var resumeSection = document.getElementById('resume-section');
        if (resumeSection) {
            resumeSection.classList.remove('hidden');
        }
    }
    else {
        console.error('Resume display element not found');
    }
});
