/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = (req, res) =>{
    const data = ['hola','mundo']
    res.send({data})
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
const createItem = (req, res) =>{};

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