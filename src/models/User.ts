import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface de dados
export interface IUser extends Document {
  name: string;
  email: string;
  password?: string; // Opcional para quando ocultarmos na saída
  createdAt: Date;
  updatedAt: Date;
}

// Schema
const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "O email é obrigatório"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Por favor, use um email válido"],
    },
    password: {
      type: String,
      required: [true, "A senha é obrigatória"],
      minlength: 6,
      select: false, // Opcional: impede que a senha venha em queries por padrão
    },
  },
  { 
    timestamps: true, // Cria createdAt e updatedAt automaticamente
    toJSON: {
      transform: (_, ret) => {
        delete ret.password; // Garante que a senha nunca vá para o JSON final
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Evita erro de sobrescrita de model no Next.js/Hot Reloading
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;