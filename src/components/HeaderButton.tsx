import clsx from "clsx"

export default function HeaderButton({ text, isVisible }: { text: string, isVisible: boolean }) {
  return (
    <button className = {clsx(
      'bg-[#ececec] border border-none rounded-sm cursor-pointer text-lg py-2.5 px-5', 
      isVisible ? 'block' : 'opacity-0'
    )}>{text}</button>
  )
}


  
