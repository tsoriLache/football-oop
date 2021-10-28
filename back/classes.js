class Person{
    firstName
    surname
    salary
    age
    #id
    constructor(_firstName,_surname,_salary,_age){
        this.firstName=_firstName
        this.surname=_surname
        this.salary=_salary
        this.age=_age
        //this.#id=generate id
    }
    get firstName(){
        return this.firstName;
    }
    get surname(){
        return this.surname;
    }
    get salary(){
        return this.salary;
    }
    set salary(newSalary){
        this.salary=newSalary;
    }
    get age(){
        return this.age;
    }
    set age(newAge){
        this.age=newAge;
    }
    get id(){
        return this.#id;
    }
}

class Player extends Person{
    strongLeg
    position
    celebrationSentence
    constructor(_firstName,_surname,_salary,_age,_strongLeg,_position,_celebrationSentence){
        super(_firstName,_surname,_salary,_age)
        this.strongLeg = _strongLeg;
        this.position = _position;
        this.celebrationSentence = _celebrationSentence;
    }
    goalClebration(){
        this.salary=this.salary*1.025
        return(this.celebrationSentence)
    }
    get strongLeg(){
        return this.favoriteLeg;
    }
    get position(){
        return this.roll;
    }
    set position(newRoll){
        this.roll = newRoll
    }
    get celebrationSentence(){
        return this.celebration;
    }
    set celebrationSentence(newCelebration){
        this.roll = newCelebration
    }
}

class GoalKeeper extends Person{
    isLeftHanded
    lastGoalConceded
    constructor(_firstName,_surname,_salary,_age,_isLeftHanded,_lastGoalConceded=Date()){
        super(_firstName,_surname,_salary,_age)
        this.isLeftHanded = _isLeftHanded
        this.lastGoalConceded = _lastGoalConceded
    }
    concededAGoal(){
        this.lastGoalConceded = Date();
        changeSalary(this.salary*0.975) 
    }
    get isLeftHanded(){
        return this.isLeftHanded;
    }
    get lastGoalConceded(){
        return this.lastGoalConceded;
    }

}

// let messi = new Player('lionel',200,'messi',39,234,'left','attacer','siiii');
// let terStegan = new GoalKeepr('ter',45,'steg',27,3465475,false);
// console.log(terStegan); 

module.exports = {Player,GoalKeeper}