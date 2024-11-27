import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-wider">
      Our course
      </h1>
      <hr className="border-gray-700 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src={props.picture}
          alt={props.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
          <h2 className="text-xl font-semibold text-white truncate">
            {props.title}
          </h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 mb-4 h-20 overflow-hidden text-ellipsis">
          {props.detail}
        </p>
        <NavLink
          to={"/course/" + props.id}
          className="inline-block text-center w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-300"
        >
          See course details
        </NavLink>
      </div>
    </div>
  );
};

export default Course;
