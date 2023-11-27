// CoursesPage.js
"use client";
import React, { useState, useEffect } from "react";

import Card from "./components/Card";
import axios from "axios";
import SortMenu from "./components/SortMenu";

const Page = () => {
  const [courses, setCourses] = useState([]);

  const [filterOptions, setFilterOptions] = useState({
    lowerDivision: false,
    upperDivision: false,
    graduateLevel: false,
  });

  const fetchCourses = async () => {
    // var url = `http://www.sfu.ca/bin/wcm/course-outlines`;
    const url = "http://localhost:3000/api/courses";
    return await axios
      .get(`${url}?year=2024&term=spring&dept=cmpt`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  };

  useEffect(() => {
    fetchCourses().then((res) => {
      console.log(res);
      setCourses(res.courses);
    });
    // console.log(courseValues);
  }, []);

  useEffect(() => {
    console.log(filterOptions);
  }, [filterOptions]);

  return (
    <div className="m-[30px]">
      <h2 className="text-xl ">Faculty of Applied Science</h2>
      <h1 className="text-3xl m-y-5 text-[#4570E6]">
        School of Computer Science
      </h1>
      <div className="flex flex-row mt-[50px] gap-[20px]">
        <div className="grid grid-cols-3 gap-12 w-[80%]">
          {courses.map((course) => {
            if (
              (!filterOptions.lowerDivision &&
                !filterOptions.upperDivision &&
                !filterOptions.graduateLevel) ||
              (filterOptions.lowerDivision && Number(course.value[0]) < 3) ||
              (filterOptions.upperDivision && Number(course.value[0]) > 2) ||
              (filterOptions.graduateLevel && Number(course.value[0]) > 4)
            ) {
              return <Card course={course} key={course.title} />;
            }
          })}
        </div>
        <div className="flex flex-col">
          <SortMenu
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;