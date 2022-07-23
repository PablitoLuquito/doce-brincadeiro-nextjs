import NavItem from "./NavItem";

import {
  faTruck,
  faReceipt,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const FoodNavItems = (props) => {
  return (
    <>
      <NavItem
        link="/home/food"
        class={props.food}
        icon={faTruck}
        title="Food"
      />
      <NavItem
        link="/home/orders"
        class={props.orders}
        icon={faReceipt}
        title="Orders"
      />
      <NavItem
        link="/home/profile"
        class={props.profile}
        icon={faCircleUser}
        title="Profile"
      />
    </>
  );
};
export default FoodNavItems;
