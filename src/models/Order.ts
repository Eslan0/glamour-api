import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface de dados
interface IOrder extends Document {
  user: Schema.Types.ObjectId;
  products: Schema.Types.ObjectId[];
  total: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schema
const OrderSchema = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Cria createdAt e updatedAt automaticamente
    toJSON: {
      virtuals: true, // Exibe os campos virtuais
    },
  }
);

const Order: Model<IOrder> = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;