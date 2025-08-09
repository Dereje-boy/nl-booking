const express = requrie("express");
const app = expres();



app.get('/', (req, res) => {
    res.send("<h1> Hello world</h1>")
})

app.listen(3000, () => {
    console.log("The server started listening on port 3000");
})