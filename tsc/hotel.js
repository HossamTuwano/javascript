let hotel = {
  name: "jionjage",
  rooms: 40,
  booked: 40,
  checkAvailability: function () {
    if (this.booked !== this.rooms) {
      return this.rooms - this.booked + " available";
    } else {
      return "rooms booked";
    }
  },
};

function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked + " available";
  };
}
const seaHotel = new Hotel("sea", 50, 12);

var hotelName = hotel.name;
var numberOfRooms = hotel.rooms;
var roomsBooked = hotel.booked;
var checkAvailbility = hotel.checkAvailability();
console.log(checkAvailbility);
console.log(seaHotel.checkAvailability());
