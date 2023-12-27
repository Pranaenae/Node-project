//@desc Get All Contacts
//@route GET /api/contacts
//@access public

const getContact = (req,res) => {
    res.status(200).json({message: "Get all contacts"})
}