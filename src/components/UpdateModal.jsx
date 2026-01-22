import axios from "axios";
import { useState } from "react";

const UpdateModal = ({ close, userDetail, setUserDetail }) => {
  console.log(userDetail);

  const [formData, setFormData] = useState({ ...userDetail });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.put(
      "https://6970361278fec16a63fd1d48.mockapi.io/api/user/" + userDetail?.id,
      formData,
    );
    if (response.status === 200) {
      alert("user updated successfully");
      setUserDetail(formData);
    }
  };

  return (
    <div className="flex justify-end">
      <div className=" inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
        {/* <!-- Modal --> */}
        <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
          <div className="w-full py-2 bg-white cursor-default pointer-events-auto  relative rounded-xl mx-auto max-w-sm">
            <button
              type="button"
              className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
              onClick={close}
            >
              <svg
                xlinkTitle="Close"
                className="h-4 w-4 hover:rotate-180 transition-all ease-in-out duration-500 cursor-pointer text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close</span>
            </button>

            <div className="space-y-2">
              <div className="grid grid-cols-1 place-items-center px-4 py-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="Full Name"
                      className="mb-2 text-gray-400 text-lg"
                    >
                      Full Name
                      <span className="text-red-600 inline-block p-1 text-sm">
                        *
                      </span>
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      id="Full Name"
                      className="border p-3 shadow-md  border-gray-700 placeholder:text-base focus:outline-none ease-in-out duration-300 rounded-lg w-full"
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 text-gray-400 text-lg"
                    >
                      Email
                      <span className="text-red-600 inline-block p-1 text-sm">
                        *
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border p-3  border-gray-700 shadow-md placeholder:text-base focus:outline-none ease-in-out duration-300 rounded-lg w-full"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="mb-2 text-gray-400 text-lg"
                    >
                      Role
                      <span className="text-red-600 inline-block p-1 text-sm">
                        *
                      </span>
                    </label>
                    <input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="border p-3  border-gray-700 shadow-md placeholder:text-base focus:outline-none ease-in-out duration-300 rounded-lg w-full"
                      type="text"
                      placeholder="role"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Address"
                      className="mb-2 text-gray-400 text-lg"
                    >
                      Address
                      <span className="text-red-600 st inline-block p-1 text-sm">
                        *
                      </span>
                    </label>
                    <textarea
                      id="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="border p-3  border-gray-700 shadow-md placeholder:text-base focus:outline-none ease-in-out duration-300 rounded-lg w-full"
                      placeholder="Address"
                      required
                    ></textarea>
                  </div>
                  <div
                    aria-hidden="true"
                    className="border-b border-gray-700 px-2"
                  ></div>
                  <div className="px-6 py-2">
                    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-[#4d1b80] hover:bg-[#7127BA] focus:bg-[#11071F] focus:ring-offset-[#11071F]"
                      >
                        <span className="flex items-center gap-1">
                          <span className="">Update</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
