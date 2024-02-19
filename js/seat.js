


function seatBooking(){
    
    // update available seat
    const currentAvailableSeat = document.getElementById('available-seat'); // get current seat
    const currentSeatInnerText = currentAvailableSeat.innerText;
    const currentSeat = parseInt(currentSeatInnerText);
    //console.log(currentSeat);

    // decrease the seat
    const newavailableSeat = currentSeat - 1;

    // show the update seat
    currentAvailableSeat.innerText = newavailableSeat;




    // const aone = document.getElementById('aone');
    // console.log(aone);
    //console.log('working');
    const tablebody = document.getElementById('tablebody');
    //console.log(tablebody.classList);

    const tablerow = document.createElement('tr');

    //table data
    // const tabledataOne = document.createElement('td');
    // tabledataOne.innerText = A1;
    // tabledataOne.classList.add('tabledataone'); //class name
    // tabledataOne.classList.remove('tabledataone'); //class name
    // tablerow.appendChild(tabledataOne);

    // tablebody.appendChild(tablerow);




    
    aone.style.backgroundColor = 'green';
    //console.log(tr);
}


function getSeatid(seatid){
    const seatElementId = document.getElementById(seatid);


}

        //const tableBody = document.getElementById('tablebody');

        //row
        // const tablerow = document.createElement('tr');
        // const tablerowId
        // const tablerowClass =  tablerow.classList.add('text-center');

        // const seatClassData = document.getElementById('seatDataClass');
        // seatClassData.innerText = 'Economy';


        // const seatPriceData = document.getElementById('seatPriceData');
        // seatPriceData.innerText = seatPrice;