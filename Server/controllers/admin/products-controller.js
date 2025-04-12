const { ImageUploadutil } = require("../../helpers/cloudinary");


const handleImageUpload = async (req, res) => {

    try{
        const b64 = req.file.buffer.toString('base64');
        const url = `data:${req.file.mimetype};base64,${b64}`;
        const result = await ImageUploadutil(url);

        res.json({
            success: true,
            message: "Image uploaded successfully",
            result,
        })


    }catch(e){
        console.log(e);
        res.status(500).json(
            {
            success: false,
            message: "error occured"
        }
    );

    }
}

module.exports={ handleImageUpload }