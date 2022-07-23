export default function InputForm(props) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
