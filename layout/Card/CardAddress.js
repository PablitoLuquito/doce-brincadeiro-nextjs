import Icon from "../../components/Icon";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CardAddress = (props) => {
  return (
    <div className="flex gap-2 px-4 mt-3 text-gray-500">
      <i>
        <Icon icon={faLocationDot} />
      </i>
      <address className="text-sm font-medium">{props.address}</address>
    </div>
  );
};
export default CardAddress;
