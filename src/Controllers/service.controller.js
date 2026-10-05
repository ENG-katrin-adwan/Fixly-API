const Service = require("../Models/maintenanceRequest.model");

class ServiceController {
    getAll = async (req, res) => {
        const services = await Service.find();
        res.status(200).json(services);
    }

    getOne = async(req, res) => {
        const id = req.params.id;
        const service = await Service.findById(id);
        if(!service) return res.status(404).json({ message: "Not Found" });
        res.status(200).json(service);   
    }
// name, description, price, duration, isAvailable
    add = async(req, res) => {
        let {name, description, price, duration, isAvailable} = req.body;
        const service = await Service.create({name, description, price, duration, isAvailable})
        res.status(201).json({ message: "Added Successfully", service });
    }

    update = async(req, res) => {
        const id = req.params.id;
        const service = await Service.findById(id);
        if(!service) return res.status(404).json({ message: "Not Found" });
        let {name, description, price, duration, isAvailable} = req.body;
        const serviceUpdate = await Service.findByIdAndUpdate(id, {name, description, price, duration, isAvailable}, {new: true});
        res.status(200).json({ message: "Updated Successfully", serviceUpdate });
    }

    remove = async(req, res) => {
        const id = req.params.id;
        const service = await Service.findById(id);
        if(!service) return res.status(404).json({ message: "Not Found" });
        const serviceDelete = await Service.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted Successfully", serviceDelete });
    }

    statistics = async (req, res) => {
        const servicesCount = await Service.countDocuments();

        res.status(200).json({ count: servicesCount })
    }
}

module.exports = new ServiceController();
