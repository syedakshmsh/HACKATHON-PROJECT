var Form = document.getElementById('resume-form');
var resumedisplayElement = document.getElementById('resume-display');
Form.addEventListener('submit', function (event) {
    event.preventDefault(); //page reload
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var educaion = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n     <h2><b>Editable Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n     <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n     <h3>Education</h3>\n     <p  contenteditable=\"true\">").concat(educaion, "</p>\n\n     <h3Experience</h3>\n     <p  contenteditable=\"true\">").concat(experience, "</p>\n\n     <h3>Skills</h3>\n     <p  contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
