import Product from "../src/model/Product.js"

export async function populateDatabase(){
    try{
        await Product.sync({force: true});

        let Product1 = await Product.create({
            name: "Harry Potter",
            category: "Book",
            description: "Teste",
            quantity: 10
        });

        let Product2 = await Product.create({
            name: "1984",
            category: "Book",
            description: "Teste",
            quantity: 9
        });

        let Product3 = await Product.create({
            name: "Animal Farm",
            category: "Book",
            description: "Teste",
            quantity: 5
        });

        let Product4 = await Product.create({
            name: "Cosmos",
            category: "Book",
            description: "Teste",
            quantity: 2
        });

        let Product5 = await Product.create({
            name: "Donnie Darko",
            category: "Book",
            description: "Teste",
            quantity: 9
        });
    }catch(error){
        console.log(error);
    }
}