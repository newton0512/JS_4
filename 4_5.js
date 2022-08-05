class ElectricalAppliance{
    constructor(name){
        this.name = name
    }

    plugIn(voltage){
        console.log(`${this.name} connected to a ${voltage}V outlet.`)    
    }

    unplug(){
        console.log(`${this.name} unplugged.`)
    }
}

class BuiltInAppliances extends ElectricalAppliance{
    constructor(weight, name) {
        super(name),
        this.weight = weight
    }

    plugIn(voltage){
        console.log(`${this.name} is built-in and connected to a ${voltage}V outlet.`)
    }
}

class Kettle extends ElectricalAppliance{
    constructor(volume, name){
        super(name),
        this.volume = volume
    }

    fill(volumeWater){
        if (this.volume < volumeWater){
            console.log(`The volume of water (${volumeWater}) is greater than the volume (${this.volume}) of the kettle ${this.name}!`)
        }
        else{
            console.log(`Kettle ${this.name} filled with ${volumeWater} liters!`)
        }
    }
}

class Hob extends BuiltInAppliances {
    constructor(type, name, weight) {
        super(weight, name),
        this.type = type
    }
}

const hob = new Hob('induction','Bosch', 45);
const kettle = new Kettle(2,'Xiaomi');

kettle.fill(5);
kettle.fill(1.5)
kettle.plugIn(220);
kettle.unplug();

hob.plugIn(380);

hob.unplug();
