import HeaderButton from "./HeaderButton";
import { useLocation } from "react-router";

export default function Header() {

  const location = useLocation(); 

  return (
    <div className="flex border-gray-300 place-content-between p-5">
      <HeaderButton text="< 뒤로 가기" isVisible/>
      <h1>날짜</h1>
      <HeaderButton text="수정하기" isVisible = {location.pathname === "/diary"} />
    </div>
  )
}

  