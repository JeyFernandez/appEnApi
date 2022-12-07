import { ulid } from 'ulid';
import { Product } from './models';
import { Product as IProduct } from './interfaces';


const list = async () => {
    return await Product.find();
}

const store = async (data: IProduct) => {
  
    const categories = data.categories.join()

    const product = new Product({ name: data.name, cantidad: data.cantidad, categories });

    await product.save();

    return product;
}

const getOne = async (id: string) => {
    return await Product.findOne({ id });
}

const destroy = async () => {
    return {};
}


export default {
    list,
    store,
    getOne,
    delete: destroy
}