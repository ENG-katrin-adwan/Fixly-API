const MaintenanceRequest = require("../Models/maintenanceRequest.model");

class MaintenanceRequestController {
    getAll = async (req, res) => {
        const maintenanceRequests = await MaintenanceRequest.find();
        res.status(200).json(maintenanceRequests);
    }

    getOne = async(req, res) => {
        const id = req.params.id;
        const maintenanceRequest = await MaintenanceRequest.findById(id);
        if(!maintenanceRequest) return res.status(404).json({ message: "Not Found" });
        res.status(200).json(maintenanceRequest);
    }
// title, description, status, priority, requestedDate
    add = async(req, res) => {
        let {title, description, status, priority, requestedDate} = req.body;
        const maintenanceRequest = await MaintenanceRequest.create({title, description, status, priority, requestedDate})
        res.status(201).json({ message: "Added Successfully", maintenanceRequest });
    }

    update = async(req, res) => {
        const id = req.params.id;
        const maintenanceRequest = await MaintenanceRequest.findById(id);
        if(!maintenanceRequest) return res.status(404).json({ message: "Not Found" });
        let {title, description, status, priority, requestedDate} = req.body;
        const maintenanceRequestUpdate = await MaintenanceRequest.findByIdAndUpdate(id, {title, description, status, priority, requestedDate}, {new: true});
        res.status(200).json({ message: "Updated Successfully", maintenanceRequestUpdate });
    }

    remove = async(req, res) => {
        const id = req.params.id;
        const maintenanceRequest = await MaintenanceRequest.findById(id);
        if(!maintenanceRequest) return res.status(404).json({ message: "Not Found" });
        const maintenanceRequestDelete = await MaintenanceRequest.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted Successfully", maintenanceRequestDelete });
    }

    statistics = async (req, res) => {
        const maintenanceRequestsCount = await MaintenanceRequest.countDocuments();

        res.status(200).json({ count: maintenanceRequestsCount })
    }
}

module.exports = new MaintenanceRequestController();
