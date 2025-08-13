// Example: sending JSON data to backend
const payload = {
    accountId: "12345",
    action: "create", // or update, delete, etc.
    data: {
        serviceName: "Premium Cleaning",
        price: 120,
        description: "Full house cleaning including windows"
    }
};

// Send request with credentials (cookies)
fetch("/api/service", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    credentials: "include", // VERY important to send cookies
    body: JSON.stringify(payload)
})
    .then(res => res.json())
    .then(data => {
        console.log("Server Response:", data);
    })
    .catch(err => console.error("Error:", err));
