import Product from '../model/Product.js';

class ProductRepository {
    async findById(id){
        try{
            return await Product.findOne({where: {id}});
        }catch(error){
            console.log(error);
        }
    }

    async findAll(){
        try{
            return await Product.findAll();
        }catch(error){
            console.log(error);
        }
    }

    async insert(product){
        try{
            return await Product.create(product);
        }catch(error){
            console.log(error);
        }
    }

    async update(product, id){
        try{
            return await Product.update(product, {where: {id}, returning: true, plain: true});
        }catch(error){
            console.log(error);
        }
    }

    async delete(id){
        try{
            return await Product.destroy({where: {id}});
        }catch(error){
            console.log(error);
        }
    }
}

export default new ProductRepository();