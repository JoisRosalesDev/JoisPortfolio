function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.classList.toggle('hidden');
}

// Cerrar el dropdown cuando se hace clic fuera de él
window.onclick = function(event) {
  if (!event.target.matches('#dropdownButton')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (const dropdown of dropdowns) {
      if (!dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
      }
    }
  }
}