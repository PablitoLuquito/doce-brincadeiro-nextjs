const FoodForm = (props) => {
  return (
    <form className="w-full my-6">
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search..."
        className="w-full py-2 pl-6 border border-gray-400 rad"
      />
    </form>
  );
};
export default FoodForm;
