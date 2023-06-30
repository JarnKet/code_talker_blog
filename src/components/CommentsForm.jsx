import { useState, useEffect } from "react";
import { submitComment } from "../services";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initialFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initialFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
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
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

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
