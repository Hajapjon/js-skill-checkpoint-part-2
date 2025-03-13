// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try {
        const userProfile = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await userProfile.json();
        const longerThanSeventeen = data
        .filter(user => user.name.length > 17)
        .map(user => user.name)
        console.log(longerThanSeventeen)
        
    } catch (error) {
        console.log(error)
    }
    
}

getUsers();