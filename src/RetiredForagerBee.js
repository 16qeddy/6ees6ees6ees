class RetiredForagerBee extends ForagerBee {
  constructor(){
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage(){
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure){
    if(treasure){
    this.treasureChest.push(treasure)
    } else {
    this.treasureChest.push('I always win');
    }
  }
};
