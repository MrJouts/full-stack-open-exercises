const Header = (props: { course: string }) => {
  return <h1>{props.course}</h1>;
};

const Part = (props: { part: string; exercises: number }) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = ({
  parts,
}: {
  parts: {
    name: string;
    exercises: number;
  }[];
}) => {
  return parts.map((part) => (
    <Part key={part.name} part={part.name} exercises={part.exercises} />
  ));
};

const Total = ({ parts }: { parts: { exercises: number }[] }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
};

const Course = ({
  course,
}: {
  course: {
    name: string;
    parts: {
      name: string;
      exercises: number;
    }[];
  };
}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

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
