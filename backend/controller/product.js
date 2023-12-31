import { productmodel } from '../model/product.js';

export const getProduct = async (req, res) => {
  try {
    const data = await productmodel.find();
    console.log('get Product is called');
    console.log('The data is : ', data);
    res.json(data);
    console.log(data);
  } catch (e) {
    console.log('error in the getProduct is : ', e);
  }
};

export const postProduct = async (req, res) => {
  console.log("Controller's postProduct is called");
  try {
    const { name, price, category, selected } = req.body;
    // const image=req.file.filename;
    // console.log('The image is : ', image);
    const product = {
      name: name,
      price: price,
      category: category,
      //   image: image,
      selected: selected,
    };

    const newItem = new productmodel(product);
    console.log('New Item is : ', newItem);

    const savedItem = await newItem.save(); // Product saved
    console.log('Saved Item is : ', savedItem);
    res.status(200).json({ product });
  } catch (e) {
    console.log('Error during saving the item is : ', e);
  }
};
