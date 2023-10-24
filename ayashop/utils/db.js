import mongoose, { mongo } from "mongoose";
const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log("Đã kết nối với cơ sở dữ liệu");
    return;
  }
  //Nó kiểm tra xem kết nối đã được thiết lập chưa. Nếu kết nối đã tồn tại,
  // nó sẽ in ra thông bao  và kết thúc.
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    //Nếu đã tồn tại một kết nối trước đó, nó sẽ sử dụng kết nối đó.
    if (connection.isConnected === 1) {
      console.log("Sử dụng kết nối trước đó với cơ sở dữ liệu.");
      return;
    }
    //neu ket noi trc do da san sang
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Kết nối mới tới cơ sở dữ liệu.");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_END === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
      //Nếu đã tồn tại một kết nối, hàm này sẽ ngắt kết nối đến cơ sở dữ liệu bằng cách sử dụng mongoose.disconnect
      //và đặt lại trạng thái kết nối về false.
    } else {
      console.log("không ngắt kết nối với cơ sở dữ liệu.");
    }
  }
}
const db = { connectDb, disconnectDb };
export default db;
