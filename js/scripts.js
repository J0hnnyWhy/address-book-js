function Contact(firstName,lastName){
  this.firstName = firstName
  this.lastName = lastName
  this.addresses = []
};

 Contact.prototype.fullName = function() {
   return this.firstName + " " + this.lastName;
 };

 function Address(street, city, state) {
   this.street = street;
   this.city = city;
   this.state = state;
 };

 Address.prototype.fullAddress = function() {
   return this.street + ", " + this.city + ", " + this.state;
 };
