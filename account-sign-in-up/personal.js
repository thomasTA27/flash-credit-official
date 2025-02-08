document.addEventListener('DOMContentLoaded', function () {
    const token = sessionStorage.getItem("token"); // Retrieve token

    if (!token) {
        alert("You are not logged in. Redirecting to login page...");
        window.location.href = "sign-in.html"; // Redirect to login page
        return;
    }

    function checkToken() {
        const currentToken = sessionStorage.getItem("token");
        if (!currentToken) {
            alert("Your session has expired. Redirecting to login page...");
            window.location.href = "sign-in.html"; // Redirect to login page
        }
    }
    const tokenCheckInterval = setInterval(checkToken, 500);

    window.addEventListener('beforeunload', function () {
        clearInterval(tokenCheckInterval);
    });

    // Fetch personal data from the server

    const but =  document.getElementById("userInfo")

    but.addEventListener('click' , function (event) {
        event.preventDefault();
        alert('you gay');
    fetch("http://localhost:8080/flash-credit/UserServlet/getPersonalData", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token, // Send token in the header
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch personal data");
        }
        return response.json();
    })
    .then(data => {
        // Display personal data on the page
        document.getElementById("userData").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error("Error fetching personal data:", error);
        alert("Error fetching personal data. Redirecting to login page...");
        window.location.href = "sign-in.html"; // Redirect to login page
    });

} );


const remove = this.getElementById("removeP");

remove.addEventListener('click' , function (event) {
    event.preventDefault();
    alert('u remove');
    sessionStorage.removeItem("token");
} );




});