document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    //

    const usernameElement = document.getElementById(
        "username"
    ) as HTMLInputElement

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const addressElement = document.getElementById('address');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
//

    





        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const address = (addressElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;

        //
const username = usernameElement.value;
const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

        // Handle profile picture
        const profilePictureFile = (profilePictureInput as HTMLInputElement).files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;

  //
  const downloadlink = document.createElement('a')
  downloadlink.href = 'data.text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
  downloadlink.download = uniquePath;
  downloadlink.textContent = 'Download Your 2024 Resume';
    
    
        
       // display the resume in the output container 
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
    //create container for buttons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttoncontainer";
    resumeOutputElement.appendChild(buttonsContainer);

    //add download PDF button
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "download as PDF";
    downloadButton.addEventListener( "click", () =>{
window.print(); 
    } )
    buttonsContainer.appendChild(downloadButton);

    //add shareable link button
    const sharelinkButton = document.createElement("button");
    sharelinkButton.textContent = "copy shareable link";
    sharelinkButton.addEventListener("click", async () => {
        try{

        //create a unique shareable button
        const shareablelink = `https://yourdomain.com/resumes/${name.replace(/\s+/g,
            "_"
        )
        } _cv.html`
    

    // use clipboard API to copy the shareable link
    await navigator.clipboard.writeText(shareablelink);
    alert("shareable link copied to clipboard");
     } catch(err) {
        console.error("failed to copy link: ", err);
        alert("failed to copy link to clipboard. Please try again.");
    }

        buttonsContainer.appendChild(sharelinkButton);
        } else {
            console.error("Resume output container not found");
        }
    } else {
        console.error("Form elemnts are missing");
    }
});