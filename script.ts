function generateResume(event: Event): void {
    event.preventDefault(); // Prevent form submission

    // Fetch values from form inputs
    const name: string = (document.getElementById('name') as HTMLInputElement)?.value || '';
    const email: string = (document.getElementById('email') as HTMLInputElement)?.value || '';
    const phone: string = (document.getElementById('phone') as HTMLInputElement)?.value || '';
    const address: string = (document.getElementById('address') as HTMLInputElement)?.value || '';
    const skillsInput: string = (document.getElementById('skills') as HTMLInputElement)?.value || '';
    const education: string = (document.getElementById('education') as HTMLTextAreaElement)?.value || '';
    const experience: string = (document.getElementById('experience') as HTMLTextAreaElement)?.value || '';

    // Convert skills string to an array, trim, and filter empty strings
    let skills: string[] = skillsInput.split(',').map(skill => skill.trim()).filter(skill => skill !== '');

    // Debugging: Confirm skills is an array and logs content
    console.log('Skills array:', skills);

    // Check if skills is an array before using map
    if (!Array.isArray(skills)) {
        console.error('Error: Skills is not an array:', skills);
        return;
    }

    // Generate HTML content for the resume, making sections editable
    const resumeContent: string = `
        <h3 contenteditable="true" class="editable">${name}</h3>
        <p contenteditable="true" class="editable"><strong>Email:</strong> ${email}</p>
        <p contenteditable="true" class="editable"><strong>Phone:</strong> ${phone}</p>
        <p contenteditable="true" class="editable"><strong>Address:</strong> ${address}</p>
        <h4>Skills</h4>
        <ul>
            ${skills.map(skill => `<li contenteditable="true" class="editable">${skill}</li>`).join('')}
        </ul>
        <h4>Education</h4>
        <p contenteditable="true" class="editable">${education}</p>
        <h4>Work Experience</h4>
        <p contenteditable="true" class="editable">${experience}</p>
    `;

    // Display the generated resume
    const resumeSection = document.getElementById('resume-section');
    const resumeContentDiv = document.getElementById('resume-content');

    if (resumeSection && resumeContentDiv) {
        resumeContentDiv.innerHTML = resumeContent;
        resumeSection.classList.remove('hidden'); // Show the resume section
        addEditableListeners(); // Add listeners for editing functionality
    } else {
        console.error('Resume section or content div not found.');
    }
}

// Function to enable content editing with listeners
function addEditableListeners(): void {
    const editables = document.querySelectorAll('.editable');
    editables.forEach((element) => {
        element.addEventListener('input', () => {
            console.log('Content edited:', element.textContent); // Log edits for debugging
        });
    });
}

// Initialize form event listener after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    if (form) {
        form.addEventListener('submit', generateResume);
    } else {
        console.error('Form not found.');
    }
});
