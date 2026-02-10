async function changeUser() {
    try {
        const id = Math.floor(Math.random() * 100) + 1;

        const res = await fetch(`https://dummyjson.com/users/${id}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);

        const user = await res.json();

        document.getElementById('userImage').src = user.image;
        document.getElementById('userName').innerText =
            `${user.firstName} ${user.lastName}`;
        document.getElementById('userPhone').innerText = user.phone;
        document.getElementById('userLocation').innerText =
            `${user.address.city}, ${user.address.state}`;
        document.getElementById('userAge').innerText = user.age;
        document.getElementById('userEmail').innerText = user.email;

    } catch (error) {
        console.error(error);
        alert("API ishlamadi yoki internet yo‘q");
    }
}

async function changeUser1() {
    try {
        const id = Math.floor(Math.random() * 100) + 1;

        const res = await fetch(`https://dummyjson.com/users/${id}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);

        const user = await res.json();

        document.getElementById('userImage1').src = user.image;
        document.getElementById('userName1').innerText =
            `${user.firstName} ${user.lastName}`;
        document.getElementById('userPhone1').innerText = user.phone;
        document.getElementById('userLocation1').innerText =
            `${user.address.city}, ${user.address.state}`;
        document.getElementById('userAge1').innerText = user.age;
        document.getElementById('userEmail1').innerText = user.email;

    } catch (error) {
        console.error(error);
        alert("API ishlamadi yoki internet yo‘q");
    }
}
