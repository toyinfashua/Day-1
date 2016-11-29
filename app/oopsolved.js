function phone (brand, model, height, color){
this.name = brand;
this.model = model;
this.dimension = dimension;
this.color = color;
}

phone.prototype.getage = function(yob) {
return (new Date().getFullYear() - yob);
};

function Doctor(brand, gender, height, skin_color, field){
  Human.call(this, brand, gender, height, skin_color);
  this.field = field;
}
Doctor.prototype = Object.create(Human.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.years_of_experience = function(start_year) {
return (new Date().getFullYear() - start_year);
}
module.exports = phone