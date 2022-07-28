import CourseItem from "./CourseItem";

const CoursesList = (props) => {
  return (
    <ul className="flex flex-col gap-5">
      {props.products.map((product) => (
        <CourseItem
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          desc={product.desc}
        />
      ))}
    </ul>
  );
};

export default CoursesList;
