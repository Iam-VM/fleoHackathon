const firestore = require("../firebaseAdmin/firestore");

const tataSalesCollection = firestore.collection("tata");


createCategory = async (req, res, next) => {
    const parentID = req.query.parent;
    const newDocData = {
        current: req.query.current,
        target: req.query.target,
        child: null,
        name: req.query.name
    }

    const newDocID = await tataSalesCollection.add(newDocData);

    const op = await tataSalesCollection.doc(parentID).update({child: newDocID});

    res.send("add done !!");
}

module.exports = createCategory;
