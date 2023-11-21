// CoursesPage.js
"use client";
// import CourseOutline from "@/components/CourseOutline";
// import SelectionMenu from "@/components/SelectionMenu";
// import { useState } from "react";

// export default function CoursesPage() {
//   const [outline, setOutline] = useState();

//   return (
//     <div>
//       <SelectionMenu {...{ outline, setOutline }} />
//       <CourseOutline {...outline} />

//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

// import { fetchData } from "./components/SelectionMenu";
import Card from "./components/Card";
import axios from "axios";
import SortMenu from "./components/SortMenu";
// import Dropdown from "./components/Dropdown";

const page = () => {
  const [courses, setCourses] = useState([]);

  const [filterOptions, setFilterOptions] = useState({
    lowerDivision: false,
    upperDivision: false,
  });

  const fetchCourses = async () => {
    var url = `http://www.sfu.ca/bin/wcm/course-outlines`;
    return await axios.get(`${url}?2024/spring/cmpt`).then((res) => {
      console.log(res.data);
      return res.data;
    });
  };

  useEffect(() => {
    fetchCourses().then((res) => {
      console.log(res);
      setCourses(res);
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
              (!filterOptions.lowerDivision && !filterOptions.upperDivision) ||
              (filterOptions.lowerDivision && Number(course.value[0]) < 3) ||
              (filterOptions.upperDivision && Number(course.value[0]) > 2)
            ) {
              return <Card course={course} />;
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

export default page;
