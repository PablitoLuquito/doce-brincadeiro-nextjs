import Icon from "../../components/Icon";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CardAddress = (props) => {
  return (
    <div className="flex gap-2 px-4 mt-3 text-gray-500">
      <span>
        <Icon icon={faLocationDot} />
      </span>
      <small className="text-sm font-medium">{props.address}</small>
    </div>
  );
};
export default CardAddress;
