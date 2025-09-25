import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <div className="flex border-gray-300 place-content-between p-5">
      <HeaderButton text="< 뒤로 가기" />
      <h1>날짜</h1>
      <HeaderButton text="수정하기" />
    </div>
  )
}

  