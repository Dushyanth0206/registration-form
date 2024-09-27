function submitForm() {
    const regNo = document.getElementById('regNo').value;
    const studentName = document.getElementById('studentName').value;
    const batch = document.getElementById('batch').value;
    const department = document.getElementById('department').value;
    const address = document.getElementById('emailid').value;

    if (regNo && studentName && batch && department && address) {
        alert("Registration Successful!\nDetails:\n" +
              "Registration No: " + regNo + "\n" +
              "Student Name: " + studentName + "\n" +
              "Batch: " + batch + "\n" +
              "Department: " + department + "\n" +
              "Email Id: " + address);
    } else {
        alert("Please fill all the fields!");
    }
}
