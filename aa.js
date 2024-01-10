console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

    const prowifbritic = new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve('ticket'); },3000)
    });

    const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));

    const addbutter = new Promise((resolve,reject)=> resolve(`butter`));

    const getColdDrinks = new Promise((resolve, reject) => resolve(`cold drinks`));

    let ticket = await prowifbritic;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await addbutter;

    console.log(`husband: i got some ${butter} on  popcorn`);
    console.log(`husband: anything else `);

    let coldDrinks = await getColdDrinks;


    console.log(`wife: i want cool drinks`);
    console.log(`husband: I got some ${coldDrinks} too`);
    console.log(`wife: Let's go, we are getting late`);
    console.log(`husband: Thank you for the reminder`);

    return ticket;
}

preMovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');