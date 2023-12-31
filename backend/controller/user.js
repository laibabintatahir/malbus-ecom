import { userModel } from '../model/user.js';

export const postuser = async (req, res) => {
  console.log("Controller's postuser is called");
  try {
    const { FirstName, LastName, email, password } = req.body;
    const user = {
      FirstName: FirstName,
      LastName: LastName,
      email: email,
      password: password,
    };

    const newuser = new userModel(user);

    const savedUser = await newuser.save(); // user saved
    console.log('New users saved : ', savedUser);
  } catch (e) {
    console.log('Error during saving the item is : ', e);
  }
};

export const getuser = async (req, res) => {
  try {
    const data = await userModel.find();
    res.json(data);
    console.log(data);
  } catch (e) {
    console.log('error in the getUser is : ', e);
  }
};
