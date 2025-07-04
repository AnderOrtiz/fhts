(()=>{
    interface Cliente {
        name: string;
        age?:number;
        address: Address;
    }

    interface Address{
        id: number;
        zip: string;
        city: string;
    }


    const client: Cliente = {
        name: 'ander',
        age: 20,
        address: {
            id:125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        }
    }

    const client2: Cliente = {
        name: 'Melissa',
        age: 30,
        address:{
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        }
    }






})()