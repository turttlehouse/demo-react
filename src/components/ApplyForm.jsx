import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log("user is typing");

    const name = event.target.name;
    const value = event.target.value;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  console.log(formData);

  const handleSubmit = async (event) => {
    // api lai data dinu parne logic
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://6970361278fec16a63fd1d48.mockapi.io/api/user",
        formData,
      );
      console.log(response);
      if (response.status === 201) {
        alert("form submitted successfully");
        navigate("/home");
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6 sm:p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Intern Apply Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* <!-- Full Name --> */}
          <div>
            <label
              for="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- Email --> */}
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
