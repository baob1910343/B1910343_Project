import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Vui lòng nhập họ và tên của bạn.",
    },
    email: {
      type: String,
      required: "Vui lòng nhập địa chỉ email của bạn.",
      trim: true, // email la duy nhat, ko the có 2 nguoi dung 1 email
      unique: true,
    },
    password: {
      type: String,
      required: '"Vui lòng nhập mật khẩu.',
    },
    role: {
      type: String,
      default: "user", // mac dinh là nguoi dung, nguoc lai la quan trị vien
    },
    image: {
      type: String,
      default:
        "https://media.tenor.com/NC41RymFx30AAAAi/kamisato-ayaka-genshin-impact.gif",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    }, // xac minh email
    defaultPaymentMethod: {
      type: String,
      default: "",
    }, //thanh toan
    address: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        city: {
          type: String,
        },
        zipCode: {
          type: String,
        },
        state: {
          type: String,
        },
        country: {
          type: String,
        },
        active: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true, // ngay tạo cái này
  }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
