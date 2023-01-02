fetch('http://localhost:3000/userInfo').then(res => res.json()).then(data => {
    console.log(data);
})
    