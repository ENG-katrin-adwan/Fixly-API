const Customer = require("../Models/customer.model");

class CustomerController {
    getAll = async (req, res) => {
        const customers = await Customer.find();
        res.status(200).json(customers);
    }

    getOne = async(req, res) => {
        const id = req.params.id;
        const customer = await Customer.findById(id);
        if(!customer) return res.status(404).json({ message: "Not Found" });
        res.status(200).json(customer);
    }

    add = async(req, res) => {
        let {name, phone, email, address, notes} = req.body;
        const customer = await Customer.create({name, phone, email, address, notes})
        res.status(201).json({ message: "Added Successfully", customer });
    }

    update = async(req, res) => {
        const id = req.params.id;
        const customer = await Customer.findById(id);
        if(!customer) return res.status(404).json({ message: "Not Found" });
        let { name, phone, email, address, notes } = req.body;
        const customerUpdate = await Customer.findByIdAndUpdate(id, {name, phone, email, address, notes}, {new: true});
        res.status(200).json({ message: "Updated Successfully", customerUpdate });
    }

    remove = async(req, res) => {
        const id = req.params.id;
        const customer = await Customer.findById(id);
        if(!customer) return res.status(404).json({ message: "Not Found" });
        const customerDelete = await Customer.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted Successfully", customerDelete });
    }

    statistics = async (req, res) => {
        const customersCount = await Customer.countDocuments();

        res.status(200).json({ count: customersCount })
    }
}

module.exports = new CustomerController();