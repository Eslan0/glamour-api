import mongoose , { Schema, Document, Model } from 'mongoose';

// Interface de dados
interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  section: Schema.Types.ObjectId;
}

// Schema
const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "A descrição é obrigatória"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "O preço é obrigatório"],
    },
    quantity: {
      type: Number,
      required: [true, "A quantidade é obrigatória"],
    },
    image: {
      type: String,
      required: [true, "A imagem é obrigatória"],
    },
    section: {
      type: Schema.Types.ObjectId,
      ref: "Section",
      required: [true, "A seção é obrigatória"],
    },
  },
  {
    timestamps: true, // Cria createdAt e updatedAt automaticamente
    toJSON: {
      transform: (_, ret) => {
        delete ret.__v;
        return ret;
      },
    }
  }
);

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;