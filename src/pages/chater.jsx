import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Chapter = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    const data_format = await res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">
      learning schedule
      </h1>
      <hr className="border-gray-700 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((chapter) => (
          <ChapterCard key={chapter.id} {...chapter} />
        ))}
      </div>
    </div>
  );
};

const ChapterCard = (props) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <h2 className="text-xl font-semibold text-indigo-400 mb-4">
        เรื่อง: {props.ch_title}
      </h2>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={"https://www.youtube.com/embed/" + props.ch_url}
          title={props.ch_title}
          className="w-full h-full rounded-lg"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-gray-400 text-sm mb-2">
        <span className="font-medium text-indigo-400">View:</span>{" "}
        {props.ch_view}
      </p>
      <p className="text-gray-400 text-sm">
        <span className="font-medium text-indigo-400">Time:</span>{" "}
        {props.ch_timetotal} minute
      </p>
    </div>
  );
};

export default Chapter;
