//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(201).json({message: "Get all contacts."});
};

//@desc Create New contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("The request body is : " + req.body);
    res.status(201).json({message: "Create contacts."});
};

//@desc Get New contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({message: `get contact with id ${req.params.id}`});
}

//@desc Update New contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message: `Get contact with id ${req.params.id}`});
}

//@desc Delete New contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact with id ${req.params.id}`});
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};