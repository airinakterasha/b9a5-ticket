let selectedSeats = [];
let totalTickets = 8;
let totalPrice = 0;
let discount = 0;

function seatClicked(seat) {
    if (seat.classList.contains('selected') || selectedSeats.length >= 4 || totalTickets === 0) {
        return;
    }

    seat.classList.add('selected');
    const seatInfo = {
        seat: seat.innerText,
        class: seat.getAttribute('data-class'),
        price: parseInt(seat.getAttribute('data-price'))
    };
    selectedSeats.push(seatInfo);
    updateSelectedSeats();
}

function updateSelectedSeats() {
    const selectedSeatsBody = document.getElementById('selectedSeatsBody');
    const totalSeats = selectedSeats.length;
    totalPrice += selectedSeats[totalSeats - 1].price;

    const row = document.createElement('tr');
    row.classList.add('text-center');
    row.innerHTML = `<td>${selectedSeats[totalSeats - 1].seat}</td>
                        <td>${selectedSeats[totalSeats - 1].class}</td>
                        <td>${selectedSeats[totalSeats - 1].price}</td>`;
    selectedSeatsBody.appendChild(row);

    totalTickets--;
    document.getElementById('totalPrice').innerText = totalPrice;
    updateGrandTotal();
}

function updateGrandTotal() {
    const discountedPrice = totalPrice - discount;
    document.getElementById('discountedPrice').innerText = discountedPrice;

    const grandTotal = discountedPrice;
    document.getElementById('grandTotal').innerText = grandTotal;
}

function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value;
    if (couponCode === 'couple 20') {
        discount = Math.floor(totalPrice * 0.2);
        updateGrandTotal();
    } else if (couponCode === 'NEW15'){
        discount = Math.floor(totalPrice * 0.15);
        updateGrandTotal();
    } else {
        alert('Invalid coupon code');
    }
}