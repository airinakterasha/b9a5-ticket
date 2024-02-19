const rowTitleCount = 1;
const seats = document.querySelectorAll('.seat-place');
//console.log(seat, 'new');
const seatPrices = {
    'A1': 550,
    'A2': 550,
    'A3': 550,
    'A4': 550,
  };

function selectSeat(seat) {
    const index = selectedSeats.indexOf(seat);

    if (index === -1) {
        selectedSeats.push(seat);
    } else {
        selectedSeats.splice(index, 1);
    }

    updateSummary();
}
// get all seat
for (let index = 0; index < seats.length; index++) {
    const seatEelement = seats[index];
    //console.log(seatEelement);
    //console.log(seatEelement.innerText);

    seatEelement.addEventListener('click', function(){
        //console.log('clicked');


        // view clicked seat title
        const seatTitle = seatEelement.innerText;
        //console.log(seatTitle);
        const seatPrice = parseInt(550);
        //console.log(seatPrice);
        //console.log({seatTitle, seatPrice});




        const tablebody = document.getElementById('tablebody');
        //const titleContainer = document.getElementById('seattitleContainer');

        //const titledata = document.createElement('td');
        const tablerow = document.createElement('tr');
        tablerow.classList.add('text-center');
        tablerow.innerHTML = `<td>${seatTitle}</td><td>Economy</td><td>${seatPrice}</td>`;
        tablebody.appendChild(tablerow);

        


 
        //titleContainer.appendChild(titledata);

        //rowTitleCount++;
        





    }); // event listener function end.
    
    
}// for loop end


<div class="seat-left flex gap-6">
                        
                        <!-- <p onclick="seatBooking()" id="aone" class="bg-[#F7F8F8] py-2 px-10 rounded-xl seat-place">A1</p> -->
                        <p class="bg-[#F7F8F8] py-2 px-10 rounded-xl seat-place">A1</p>
                        <p class="bg-[#F7F8F8] py-2 px-10 rounded-xl seat-place">A2</p>

                      </div>
                      <div class="seat-right flex gap-6">
                        <p class="bg-[#F7F8F8] py-2 px-10 rounded-xl seat-place">A3</p>
                        <p class="bg-[#F7F8F8] py-2 px-10 rounded-xl">A4</p>
                      </div>