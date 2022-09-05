const {storageModel} = require ('../models');
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) =>{
    const data = await storageModel.find({});

    res.send({data});
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) =>{};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) =>{
    const{body, file} = req
    console.log(file)
    const fileData = {
        filename: file.filename
    }
    const data = await storageModel.create(body)
    res.send({file})
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) =>{};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) =>{};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};