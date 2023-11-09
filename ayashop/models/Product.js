import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const reviewSchema = new mongoose.Schema({
  reviewBy: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  review: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  style: {
    color: String,
    image: String,
  },
  fit: {
    type: String,
  },
  images: [],
  likes: [],
});
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    //loai
    category: {
      type: ObjectId,
      required: true,
      ref: "Category",
    },
    // muc luc phu
    subCategories: [
      {
        type: ObjectId,
        ref: "subCategory",
      },
    ],
    // chi tiet sp
    details: [
      {
        name: String,
        value: String,
      },
    ],
    // dat cau hoi
    questions: [
      {
        question: String,
        answer: String,
      },
    ],
    // danh gia
    reviews: [reviewSchema],
    // chinh sach hoan tra
    refundPolicy: {
      type: String,
      default: "30 days",
    },
    //ddanh gia
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    //
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    shipping: {
      type: Number,
      required: true,
      default: 0,
    },
    //san pham phu
    subProducts: [
      {
        sku: String,
        images: [],
        description_images: [],
        color: {
          color: {
            type: String,
          },
          image: {
            type: String,
          },
        },
        sizes: [
          {
            size: String,
            qty: Number,
            price: Number,
          },
        ],
        // giam gia
        discount: {
          type: Number,
          default: 0,
        },
        // da ban
        sold: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true, // ngay tao va cap nhat sp
  }
);
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
