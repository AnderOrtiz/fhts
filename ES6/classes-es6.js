(() => {

    class Avenger {
        name;
        power;

        constructor(name = 'No name', power = 0){
            this.name = name;
            this.power = power;
        }

    }   

    class FlyingAvenger extends Avenger{
        fly;

        constructor(name, power) {
            super(name, power)
            this.fly = true;
        }
    }

    const hulk = new Avenger('Hulk', 9001)
    console.log(hulk)

    const falcon = new FlyingAvenger('falcon', 50 )
    console.log(falcon)


})()