
function sendEmail() {
var to = document.getElementById("mailto").value
var subject = document.getElementById("title").value
var mailBody = document.getElementById("mailbody").value
//var attach = fileupload.files[0].name
    Email.send({
        Host: "SMTP.gmail.com",
        Username: "testedapiaaan@gmail.com",
        Password: "uzldsrkzzzoqtqkt",
        To: to,
        From: "testedapiaaan@gmail.com",
        Subject: subject,
        Body: mailBody,
        Attachments : [{
	name : "smtpjs.png",
	path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
	}]
    }).then(
        message => alert(message)
    );
}
async function uploadFile() {
    let formData = new FormData();           
    formData.append("file", fileupload.files[0]);   
    alert('The file has been uploaded successfully.');
}