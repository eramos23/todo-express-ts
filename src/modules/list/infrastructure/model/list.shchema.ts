import {Schema, model} from 'mongoose'

const ItemSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        description: String,
        idCompleted: Boolean
    }
)

const ListSchema = new Schema(
    {
        uuid: {
            type: String
        },
        title:{
            type: String
        },
        description:{
            type: String
        },
        items: [ItemSchema],
        idDeleted: {
           type: Boolean,
           field: 'is_deleted' 
        }
    }, 
    {
        timestamps: true
    }
)
const ListModel = model("list", ListSchema)
export default ListModel