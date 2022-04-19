const fs = require('fs');
const path = require('path');
let {  writeProductsJSON } = require('../data/database');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products',{products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let productDetailId = +req.params.id;

        let product = products.find(product => product.id === productDetailId)


		
		res.render('detail',{idProducts:product,title:'detail'})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
	
		let lastId = 1;
		

		products.forEach(product => {
			if(product.id > lastId){
				lastId = product.id
			}
		});


		   let {name,price,discount ,description,category,} = req.body;
		   let newProduct ={
			   id :lastId+1,
			   name,
			   price,
			   discount,
			   description,
			   category,
			   image: req.file ? [req.file.filename] : ["default-image.png"]
			}
		   products.push(newProduct)
		   writeProductsJSON(products)
		   res.redirect('/products')
		
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productDetailId = +req.params.id;


        let productToEdit = products.find(product => product.id === productDetailId)
	   res.render('product-edit-form',{
		   productToEdit
	   })
	},
	// Update - Method to update
	update: (req, res) => {
		let productId = +req.params.id;

        const {name, price,category, description, discount} = req.body

        products.forEach(product => {
            if(product.id === productId){
                product.id = product.id,
                product.name = name, 
                product.price = +price,
				product.category = category,
                product.description = description,
                product.discount = +discount,
                product.image = req.file ? [req.file.filename] : product.image
            }
        })

        writeProductsJSON(products)

        res.redirect('/products')
    },	

	// Delete - Delete one product from DB
	destroy: (req, res) => {
        let productId = +req.params.id;

		products.forEach(product => {
			if(product.id === productId){
				if(fs.existsSync("/public/images/products", product.image[0])){
					fs.unlinkSync(`./public/images/products/${product.image[0]}`)
				}else{
					console.log('No encontré el archivo')
				}

				let productToDestroyIndex = products.indexOf(product) // si lo encuentra devuelve el indice si no -1
				if(productToDestroyIndex !== -1) {
					products.splice(productToDestroyIndex, 1)
				}else{  // primer parámetro es el indice del elemento a borrar, el segundo, la cantidad a eliminar 
					console.log('No encontré el producto')
				}
			}
		})

		writeProductsJSON(products)
		res.redirect('/products')
    }
};

module.exports = controller;