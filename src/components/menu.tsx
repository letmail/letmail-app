import {
  HiOutlinePencilAlt,
  HiOutlineMail,
  HiOutlineUsers,
  HiOutlineStar,
} from "react-icons/hi";
import { VscSettingsGear } from "react-icons/vsc";

export default function Menu() {
  return (
    <nav className="bg-white py-6 w-20 flex flex-col justify-between items-center h-screen">
      <ul className="space-y-4">
        <li>
          <HiOutlinePencilAlt className="cursor-pointer text-3xl" />
          <p className="text-sm text-gray-800">写信</p>
        </li>
        <li>
          <HiOutlineMail className="cursor-pointer text-3xl" />
          <p className="text-sm text-gray-800">收信</p>
        </li>
        <li>
          <HiOutlineUsers className="cursor-pointer text-3xl" />
          <p className="text-sm text-gray-800">联系人</p>
        </li>
        <li>
          <HiOutlineStar className="cursor-pointer text-3xl" />
          <p className="text-sm text-gray-800">插件</p>
        </li>
      </ul>
      <div className="text-center">
        <VscSettingsGear className="cursor-pointer text-3xl" />
      </div>
    </nav>
  );
}
