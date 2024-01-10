import {AppDataSource} from '../../database/data-source';
import Product from '../model/Product';

export default AppDataSource.getRepository(Product);