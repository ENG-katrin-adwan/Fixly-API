const Review = require("../Models/maintenanceRequest.model");

class ReviewController {
    getAll = async (req, res) => {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    }

    getOne = async(req, res) => {
        const id = req.params.id;
        const review = await Review.findById(id);
        if(!review) return res.status(404).json({ message: "Not Found" });
        res.status(200).json(review);   
    }
//reviewerName, rating, comment
    add = async(req, res) => {
        let {reviewerName, rating, comment} = req.body;
        const review = await Review.create({reviewerName, rating, comment})
        res.status(201).json({ message: "Added Successfully", review });
    }

    update = async(req, res) => {
        const id = req.params.id;
        const review = await Review.findById(id);
        if(!review) return res.status(404).json({ message: "Not Found" });
        let {reviewerName, rating, comment} = req.body;
        const reviewUpdate = await Review.findByIdAndUpdate(id, {reviewerName, rating, comment}, {new: true});
        res.status(200).json({ message: "Updated Successfully", reviewUpdate });
    }

    remove = async(req, res) => {
        const id = req.params.id;
        const review = await Review.findById(id);
        if(!review) return res.status(404).json({ message: "Not Found" });
        const reviewDelete = await Review.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted Successfully", reviewDelete });
    }

    statistics = async (req, res) => {
        const reviewsCount = await Review.countDocuments();

        res.status(200).json({ count: reviewsCount })
    }
}

module.exports = new ReviewController();
