import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const ClassesAllCard = ({ classItem }) => {
  const { image, price, instructorImage, des, seats, name, students } =
    classItem;

  const { user } = useContext(AuthContext);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedClassIds, setSelectedClassIds] = useState([]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleSelectedClass = (item) => {
    const selectedClasses = {
      email: user.email,
      classId: item._id,
      name: item.name,
      image: item.image,
      price: item.price,
      seats: item.seats,
    };

    if (seats === 0) {
      return;
    }

    axios
      .post(
        "https://lotusgrove-server-site.vercel.app/selectedClass",
        selectedClasses
      )
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          toast.success("🦄 Class Selected", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.warning(" Already Added is Dashboard ", {
            position: "top-center",
            autoClose: 3000,
            theme: "light",
          });
        }
      });
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();
  }, []);

  const seatLeft = seats - students;
  const isDisabled = seats === 0;

  return (
    <div
      className={`my-6 flex justify-center ${seats === 0 ? "bg-red-100" : ""}`}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="card w-full md:w-96 border border-[#22bb83] bg-base-100 shadow-xl hover:shadow-xl hover:drop-shadow-2xl">
        <figure>
          <img src={image} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {showFullDescription ? des : `${des.slice(0, 30)}...`}
            {des.length > 30 && (
              <button
                className="text-blue-500 hover:underline"
                onClick={toggleDescription}
              >
                {showFullDescription ? "See Less" : "See More"}
              </button>
            )}
          </p>
          <div className="card-actions justify-between">
            <div>
              <p className="text-blue-500 font-medium">
                Total students: {students}
              </p>
              <p>
                <span className="text-red-600 font-bold">
                  Seats left: {seatLeft}
                </span>
              </p>
            </div>
            <div>
              <p>
                Price: $<span className="text-red-600 font-bold">{price}</span>
              </p>
            </div>
          </div>
          <div className="text-center mt-1">
            <button
              className="btn btn-outline btn-success shadow-md drop-shadow-md text-white hover:drop-shadow-xl"
              onClick={() => handleSelectedClass(classItem)}
              disabled={isDisabled}
            >
              Select Class
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ClassesAllCard;
