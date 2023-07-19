class parents{
    constructor(){
        this.fatherName = "karamotulla"
    }
}

class child extends parents{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' '+ this.fatherName;
    }
}
const baby = new child('rohim')
const baby2 = new child('korim')
console.log(baby.getFullName());
console.log(baby2.getFullName());