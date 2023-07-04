import { useState, useEffect } from "react";
import { submitComment } from "../services";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    storeData: false,
  });

  useEffect(() => {
    setFormData({
      name: window.localStorage.getItem("name") || "",
      email: window.localStorage.getItem("email") || "",
      comment: "",
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    });
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };

  const handlePostSubmission = () => {
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }
    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        setFormData((prevState) => ({
          ...prevState,
          name: storeData ? prevState.name : "",
          email: storeData ? prevState.email : "",
          comment: "",
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };
  // Rest of the component
  return (
    <div className="px-4 py-12 mb-8 lg:pt-8 card dark:cardDark rounded-2xl">
      <div className="flex justify-center mb-6">
        <PencilSquareIcon className="w-6 h-6 mr-2" />
        <h1 className="text-xl font-semibold ">ສະແດງຄວາມຄິດເຫັນ</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.comment}
          onChange={onInputChange}
          className="w-full p-4 solid-none focus:ring-2 focus:ring-black rounded-2xl"
          name="comment"
          placeholder="ຄວາມຄິດເຫັນ"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
        <input
          type="text"
          value={formData.name}
          onChange={onInputChange}
          className="w-full p-4 solid-none focus:ring-2 focus:ring-black rounded-2xl"
          placeholder="ຊື່ ແລະ ນາມສະກຸນ"
          name="name"
        />
        <input
          type="email"
          value={formData.email}
          onChange={onInputChange}
          className="w-full p-4 solid-none focus:ring-2 focus:ring-black rounded-2xl"
          placeholder="Email"
          name="ອີເມວ"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="ml-2 font-bold cursor-pointer" htmlFor="storeData">
            {" "}
            ຈົດຈຳຂໍ້ມູນຂອງຂ້ອຍ
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບທຸກຊ່ອງ</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="p-4 text-white transition-all duration-300 ease-in-out bg-black dark:bg-white dark:text-black rounded-2xl hover:scale-110"
        >
          ສົ່ງຄວາມຄິດເຫັນ
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            ຄວາມຄິດເຫັນຖືກສົ່ງໄປແລ້ວ
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
