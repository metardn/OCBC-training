// Abstract class Vehicle
class Vehicle {
  #licensePlate;
  #maxSpeed;

  constructor(licensePlate) {
    if (new.target === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly.");
    }
    this.#licensePlate = licensePlate;
  }

  setMaxSpeed(speed) {
    throw new Error("Method 'setMaxSpeed()' must be implemented.");
  }

  getMaxSpeed() {
    throw new Error("Method 'getMaxSpeed()' must be implemented.");
  }

  calculateFuelConsumption(distance) {
    throw new Error("Method 'calculateFuelConsumption()' must be implemented.");
  }

  displayInfo() {
    console.log(`License Plate: ${this.#licensePlate}`);
    console.log(`Max Speed: ${this.#maxSpeed} km/h`);
  }

  // Protected methods for subclasses
  _setMaxSpeedInternal(speed) {
    this.#maxSpeed = speed;
  }

  _getMaxSpeedInternal() {
    return this.#maxSpeed;
  }
}

// Car class
class Car extends Vehicle {
  #fuelEfficiency;

  constructor(licensePlate, fuelEfficiency) {
    super(licensePlate);
    this.#fuelEfficiency = fuelEfficiency;
  }

  setMaxSpeed(speed) {
    this._setMaxSpeedInternal(speed);
  }

  getMaxSpeed() {
    return this._getMaxSpeedInternal();
  }

  calculateFuelConsumption(distance) {
    return distance / this.#fuelEfficiency;
  }

  setFuelEfficiency(efficiency) {
    this.#fuelEfficiency = efficiency;
  }

  getFuelEfficiency() {
    return this.#fuelEfficiency;
  }
}

// Truck class
class Truck extends Vehicle {
  #fuelEfficiency;
  #cargoWeight;

  constructor(licensePlate, fuelEfficiency, cargoWeight) {
    super(licensePlate);
    this.#fuelEfficiency = fuelEfficiency;
    this.#cargoWeight = cargoWeight;
  }

  setMaxSpeed(speed) {
    this._setMaxSpeedInternal(speed);
  }

  getMaxSpeed() {
    return this._getMaxSpeedInternal();
  }

  calculateFuelConsumption(distance) {
    return distance / this.#fuelEfficiency + this.#cargoWeight * 0.05;
  }

  setFuelEfficiency(efficiency) {
    this.#fuelEfficiency = efficiency;
  }

  getFuelEfficiency() {
    return this.#fuelEfficiency;
  }

  setCargoWeight(weight) {
    this.#cargoWeight = weight;
  }

  getCargoWeight() {
    return this.#cargoWeight;
  }
}

const myCar = new Car("D 1234 B", 15); // 15 km/l
myCar.setMaxSpeed(180);
myCar.displayInfo();
console.log("xx car fuel for 150 km:", myCar.calculateFuelConsumption(150));

const myTruck = new Truck("D 4321 A", 8, 1000); // 8 km/l, 1000 kg
myTruck.setMaxSpeed(120);
myTruck.displayInfo();
console.log("xx truck fuel for 150 km:", myTruck.calculateFuelConsumption(150));
