function generateCard() {
    document.getElementById('cardName').innerText = document.getElementById('userName').value;
    document.getElementById('cardAddress').innerText = document.getElementById('userAddress').value;
    document.getElementById('cardPhone').innerText = document.getElementById('userPhone').value;
    
    const photoInput = document.getElementById('userPhoto');
    const cardPhoto = document.getElementById('cardPhoto');
    
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            cardPhoto.src = e.target.value;
            document.getElementById('idCard').style.display = 'block';
        }
        reader.readAsDataURL(photoInput.files[0]);
    }
}
