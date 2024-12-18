import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
  const user = "User"; // backend Data

  const matchProfiles = [
    {
      id: 1,
      name: "Akshya",
      link: "https://picsum.photos/id/64/200/300",
    },
    {
      id: 2,
      name: "Macov Benita",
      link: "https://picsum.photos/id/66/200/300",
    },
    {
      id: 3,
      name: "Akshya",
      link: "https://picsum.photos/id/334/200/300",
    },
    {
      id: 4,
      name: "Alaviya",
      link: "https://picsum.photos/id/342/200/300",
    },
  ];

  const data = [
    { name: 'Last Week', uv: 50, pv: 2400, amt: 2400 },
    { name: 'Yesterday', uv: 100, pv: 2400, amt: 2400 },
    { name: 'Today', uv: 300, pv: 2400, amt: 2400 },
  ];

  return (
    <>
      <div className="container mt-4">
        {/* Welcome Section */}
        <div>
          <p className="text-2xl font-bold text-center sm:text-left">
            Welcome Back, {user}
          </p>
          <p className="text-center sm:text-left">More Matches for you</p>
        </div>

        {/* Profiles Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-5">
          {matchProfiles.map(({ id, name, link }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              className="text-center bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={link}
                alt=""
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="font-bold text-lg mt-2">{name}</h2>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="flex flex-col lg:flex-row items-center bg-slate-700 rounded-xl p-5 mt-8 mb-8 gap-8">
          {/* Line Chart */}
          <div className="w-full lg:w-[60%]">
            <LineChart width={600} height={300} data={data}>
              <Line type="monotone" dataKey="uv" stroke="white" />
              <CartesianGrid stroke="white" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
            </LineChart>
          </div>

          {/* Chart Insights */}
          <div className="text-white w-full lg:w-[40%]">
            <h2 className="text-2xl lg:text-4xl font-cursive">
              User Profile Insights
            </h2>
            <p className="mt-2 text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              maiores similique dolorem accusantium. Maxime natus molestiae
              itaque eius necessitatibus facere repellat quae libero officia.
              Vitae, beatae hic. Voluptates, neque a.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
