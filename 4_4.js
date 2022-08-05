function ElectricalAppliance(name){
    this.name = name
}

ElectricalAppliance.prototype.plugIn = function (voltage){
    console.log(`${this.name} connected to a ${voltage}V outlet.`)
}

ElectricalAppliance.prototype.unplug = function (){
    console.log(`${this.name} unplugged.`)
}

function BuiltInAppliances(name, weight){
    this.name = name
    this.weight = weight
}

BuiltInAppliances.prototype = new ElectricalAppliance();

BuiltInAppliances.prototype.plugIn = function (voltage){
    console.log(`${this.name} is built-in and connected to a ${voltage}V outlet.`)
}

function Kettle(name, volume){
    this.name = name
    this.volume = volume
}

Kettle.prototype = new ElectricalAppliance();

Kettle.prototype.fill = function (volumeWater){
    if (this.volume < volumeWater){
        console.log(`The volume of water (${volumeWater}) is greater than the volume (${this.volume}) of the kettle ${this.name}!`)
    }
    else{
        console.log(`Kettle ${this.name} filled with ${volumeWater} liters!`)
    }
}

function Hob(name, weight, type){
    this.name = name
    this.weight = weight
    this.type = type
}

Hob.prototype = new BuiltInAppliances();


const hob = new Hob('Bosch', 45, 'induction');
const kettle = new Kettle('Xiaomi', 2);

kettle.fill(5);
kettle.fill(1.5)
kettle.plugIn(220);
kettle.unplug();

hob.plugIn(380);

hob.unplug();
