class ForagerBee extends Bee{
  constructor(){
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(something){
    if(something){
      this.treasureChest.push(something);
    } else {
      this.treasureChest.push('treasure');
    }
  }
};
