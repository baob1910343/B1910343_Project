import DotLoader from "react-spinners/DotLoader";
export default function DotLoaderSpinner({ loading }) {
  return (
    <div>
      <DotLoader color="#2f82ff" loading={loading} className="" />
    </div>
  );
}
