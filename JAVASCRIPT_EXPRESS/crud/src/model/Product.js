import Sequelize from "sequelize";
import sequelize from "../../config/databaseConfig.js";


const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

export default Product;