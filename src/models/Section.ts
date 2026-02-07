import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface de dados
interface ISection extends Document {
  name: string;
  products: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Schema
const SectionSchema = new Schema<ISection>(
  {
    name: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true, // Cria createdAt e updatedAt automaticamente
    toJSON: {
      transform: (_, ret) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Section: Model<ISection> = mongoose.models.Section || mongoose.model<ISection>("Section", SectionSchema);

export default Section;