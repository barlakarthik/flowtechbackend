import Enquiry from '../models/enquiry.model.js';
const createEnquiry = async (req, res) => {
    try {
        const {
            accountname,
            contact,
            territory,
            enqRefNum,
            sector,
            enqOwner,
            products
        } = req.body;
        const enquiry = new Enquiry({
            accountname,
            contact,
            territory,
            enqRefNum,
            sector,
            enqOwner,
            products
        });

        enquiry.save()
            .then((result) => {
                res.status(201).json({ result, msg: "enquiry created Successfully" });
            })
            .catch((error) => {
                res.status(500).json({ error: "Failed to create enquiry", message: error.message });
            });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error", message: error.message });
    }
};
const getEnquiries = async(req, res)=>{
  try{
   const enquiriesData = await Enquiry.find();
   res.status(200).json(enquiriesData)
  }catch(error){
    res.status(500).json({error:"Internal server error", message:error.message})
  }
}

const UpdateEnquiry = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedEnquiry = await Enquiry.findByIdAndUpdate(
            id,
            updatedData,
            { new: true }
        );
        if (!updatedEnquiry) {
            return res.status(404).json({ error: 'Enquiry not found' });
        }
        res.status(200).json(updatedEnquiry);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
}
const getEnquiry = async (req, res) => {
    try {
        const enquiryData = await Enquiry.findById(req.params.id);
        res.status(200).json(enquiryData)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message })
    }
}
const DelEnquiry = async (req, res) => {
    try {
        await Enquiry.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Enqiry record deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: "Internal server error", message: error.message })
    }
}

export {
    createEnquiry,
    getEnquiries,
    UpdateEnquiry,
    getEnquiry,
    DelEnquiry
}