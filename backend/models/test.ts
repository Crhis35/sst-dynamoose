import { Schema, model } from "dynamoose";

const testSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      hashKey: true,
    },
    tags: {
      type: Array,
      schema: [String],
      required: false,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Test = model(`Test-${process.env.NODE_ENV}`, testSchema, {
  create: true,
  throughput: {
    read: 5,
    write: 5,
  },
});

export default Test;
