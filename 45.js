let car = {
  manufacturer: "",
  model_name: ""
};

function car_info_add(manufacturer, model_name, additional) {
  car.manufacturer = manufacturer;
  car.model_name = model_name;
  car = {
    ...car, ...additional
  }
  return console.log(car);
}

car_info_add("Honda", "70CC", { color: "red", warranty: "2 yrs" })