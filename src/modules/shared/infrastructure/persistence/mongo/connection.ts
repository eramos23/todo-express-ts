import { connect } from "mongoose";
import config from "../../env";

const DB_URI = `${config.get('database.host')}`
const dbInit = async () => {
    await connect(DB_URI)
    console.log('Estamos ready?')
}

export default dbInit