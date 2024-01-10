import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
class Product {

    @PrimaryGeneratedColumn('increment')
    id?: number;
    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;
    @Column({ type: 'varchar', length: 100, nullable: false })
    category: string;
    @Column({ type: 'varchar', length: 200, nullable: true })
    description: string;
    @Column({ type: 'int', nullable: false })
    quantity: number;
}

export default Product;