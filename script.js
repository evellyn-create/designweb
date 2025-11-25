function showAlert(event) {
  
    event.preventDefault();

    const toast = document.getElementById('toast-notification');

 
    toast.classList.remove('hidden');

  
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000); 
}
