const formInput = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

formInput.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Fetch form values
    const nameInput = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Generate resume HTML
    const resumeHTML = `
        <h3>Name: <span>${nameInput}</span></h3>
        <p>Email: <span>${email}</span></p>
        <p>Phone: <span>${phone}</span></p>

        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;

    // Display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;

        // Show the resume section
        const resumeSection = document.getElementById('resume-section');
        if (resumeSection) {
            resumeSection.classList.remove('hidden');
        }
    } else {
        console.error('Resume display element not found');
    }
});
