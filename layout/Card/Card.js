const Card = (props) => {
  return (
    <section
      className={`rounded-b-xl shad w-full mb-5 ${props.cardClassName}`}
      id={props.cardId}
    >
      {props.children}
    </section>
  );
};
export default Card;
