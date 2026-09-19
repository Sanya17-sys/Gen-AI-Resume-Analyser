require("dotenv").config()
const app = require("./src/app")
const connecttoDb =  require("./src/config/Database")
connecttoDb()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
