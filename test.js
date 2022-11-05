const Container = require('./main')

async function main(){
    const products = new Container('products.txt')
    //getAll()
    let allProducts = await products.getAll()
    console.log(allProducts)
    //getById()
    let idToSearch = 1
    let productById = await products.getById(idToSearch)
    console.log(productById)
    //save()
    let newProduct1 = {"id":4, "name":"Cinta kinesiologica", "price": 1800}
    await products.save(newProduct1)
    //deleteById()
    let productIdToDelete = 3
    await products.deleteById(productIdToDelete)
    allProducts = await products.getAll() 
    console.log(allProducts)
    deleteAll()
    await products.deleteAll()
}
main()