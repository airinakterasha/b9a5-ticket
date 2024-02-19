// Add click event listeners to the seat elements
const seatElements = document.querySelectorAll('.seat-place');
seatElements.forEach(seat => {
    seat.addEventListener('click', () => seatClicked(seat));
});