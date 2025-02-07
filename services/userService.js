const {User}=require('../models');

const getAllUsers = async () => {
    return await User.findAll();
  };
  
  const getUserById = async (id) => {
    return await User.findByPk(id);
  };
  
  const createUser = async (userData) => {
    return await User.create(userData);
  };
  
  const updateUser = async (id, userData) => {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(userData);
    }
    return null;
  };
  
  const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  };