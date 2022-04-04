import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };

    return (
        <div className='grid my-10 container mx-auto lg:grid-cols-2 md:grid-cols-1  sm:grid-cols-1'>
            <div>
                <LineChart
                    width={500}
                    height={300}
                    data={products}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={products}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="prevenue" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                </BarChart>
            </div>

            <div>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="investment"
                        startAngle={180}
                        endAngle={0}
                        data={products}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                </PieChart>
            </div>
            <div>
            <AreaChart
          width={500}
          height={400}
          data={products}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
            </div>
        </div>
    );
};

export default Dashbord;