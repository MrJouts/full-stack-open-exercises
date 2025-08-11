import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
        {
          name: "Redux",
          exercises: 11,
        },
      ],
    },
    {
      name: "Node.js",
      parts: [
        {
          name: "Introduction to Node.js",
          exercises: 8,
        },
        {
          name: "Express basics",
          exercises: 12,
        },
        {
          name: "MongoDB integration",
          exercises: 9,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.name} course={course} />
      ))}
    </div>
  );
};

export default App;
