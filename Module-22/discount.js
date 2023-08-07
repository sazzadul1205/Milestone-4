/*
1. if a ticket numbers ar less then 100. per ticket price: 100tk
1. if a ticket numbers ar more then 100 and less then 200. first 100 are ticket price: 100tk, and the other tickets would be price 90tk per peace
1. if a ticket numbers ar  more then 200. first 100 are ticket price: 100tk. and from 101 to 200 tickets are priced at 90tk taka and rest are priced at 70tk 

*/

function ticketPrice(TicketQuantity) {
    const first100rate = 100;
    const second100rate = 90;
    const restTicketrate = 70;
    if (TicketQuantity <= 100) {
        const price = TicketQuantity * first100rate;
        return price;
    }
    else if (TicketQuantity <= 200) {
        const first100Price = 100 * first100rate;
        const restTicketQuantity = TicketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100rate;
        const TotalPrice = first100Price + restTicketPrice;
        return TotalPrice;
    }
    else{
        const first100Price = 100 * first100rate;
        const second100price = 100 * second100rate;
        const restTicketQuantity = TicketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketrate;

        const TotalPrice = first100Price + second100price + restTicketPrice;
        return TotalPrice;
    }

}

const price = ticketPrice(395);
console.log('price:', price);