import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import UpdateModal from "../components/UpdateModal";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState({});

  const fetchUserKoDetail = async () => {
    const response = await axios.get(
      "https://6970361278fec16a63fd1d48.mockapi.io/api/user/" + id,
    );
    if (response.status === 200) {
      setUserDetail(response.data);
    }
  };

  useEffect(() => {
    fetchUserKoDetail();
  }, [id]);

  const navigate = useNavigate();

  const handleDelete = async () => {
    const response = await axios.delete(
      "https://6970361278fec16a63fd1d48.mockapi.io/api/user/" + id,
    );
    if (response.status === 200) {
      alert("user deleted");
      navigate("/home");
    }
  };

  const [open, setOpen] = useState(false);

  const handleUpdate = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center p-5">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://flowbite.com/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Name : {userDetail?.name}
            </h5>
          </a>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Email : {userDetail?.email}
            </h5>
          </a>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Role : {userDetail?.role}
            </h5>
          </a>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Address : {userDetail?.address}
            </h5>
          </a>
          <div className="flex justify-center items-center gap-2 p-2">
            <Button
              className="bg-red-500 text-white px-2 py-1 rounded"
              buttonName={"Delete"}
              onClick={handleDelete}
            />
            <Button buttonName={"Update"} onClick={handleUpdate} />
          </div>
        </div>
      </div>

      {open && <UpdateModal setUserDetail={setUserDetail} userDetail={userDetail} close={handleClose} />}
    </div>
  );
};

export default UserDetails;
