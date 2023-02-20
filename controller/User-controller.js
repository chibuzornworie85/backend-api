const UserModel = require("../model/User-model");

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await UserModel.find();
  } catch (err) {
    return next(err);
  }

  if (!users) {
    return res.status(500).json({ message: "invalid" });
  }
  return res.status(200).json({ users });
};

const addNewUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() == "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.lenght > 6
  ) {
    return res.status(500).json({ message: "unable to add" });
  }
  let users;
  try {
    users = UserModel({
      name,
      email,
      password,
    });
    users = await users.save();
  } catch (err) {
    return next(err);
  }
  if (!users) {
    res.status(500).json({ message: "unable to connect" });
  }
  return res.status(201).json({ users });
};

const upDateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() == "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.lenght > 6
  ) {
    return res.status(500).json({message: "invalid"})
  }
  let users;
  try {
    users = await UserModel.findByIdAndUpdate(id, {name, email, password})
  } catch (err) {
    return next(err)
  }
  if (!users) {
    return res.status(500).json({message: "unable to update"})
  }
  return res.status(200).json({message: "updated successfully"})
};

const deleteUser = async(req, res, next)=>{
    const id = req.params.id
    const {name, email, password} = req.body
    if (
        !name &&
        name.trim() == "" &&
        !email &&
        email.trim() === "" &&
        !password &&
        password.lenght > 6
      ) {
        return res.status(500).json({message: "invalid"})
      }
      let users;
      try {
        users = await UserModel.findByIdAndDelete(id, {name, email, password})
      } catch (err) {
        return next(err)
      }
      if (!users) {
        return res.status(500).json({message: "fail to delete"})
      }
      return res.status(200).json({message: "deleted successfully"})
}

const getUserId = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    if (
      !name &&
      name.trim() == "" &&
      !email &&
      email.trim() === "" &&
      !password &&
      password.lenght > 6
    ) {
      return res.status(500).json({message: "invalid"})
    }
    let users;
    try {
      users = await UserModel.findById(id, {name, email, password})
    } catch (err) {
      return next(err)
    }
    if (!users) {
      return res.status(500).json({message: "unable to get by id"})
    }
    return res.status(200).json({ users })
  };

exports.getAllUser = getAllUser;
exports.addNewUser = addNewUser;
exports.upDateUser = upDateUser;
exports.deleteUser = deleteUser;
exports.getUserId = getUserId;
