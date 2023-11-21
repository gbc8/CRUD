import ProductRepository from "../repository/ProductRepository.js";

class ProductService {
    async findById(id){
        try{
            return await ProductRepository.findById(id);
        }catch(error){
            console.log(error);
        }
    }

    async findAll(){
        try{
            return await ProductRepository.findAll();
        }catch(error){
            console.log(error);
        }
    }

    async insert(product){
        try{
            return await ProductRepository.insert(product);
        }catch(error){
            console.log(error);
        }
    }

    async update(product, id){
        try{
            return await ProductRepository.update(product, id);
        }catch(error){
            console.log(error);
        }
    }

    async delete(id){
        try{
            return await ProductRepository.delete(id);
        }catch(error){
            console.log(error);
        }
    }
}

export default new ProductService();