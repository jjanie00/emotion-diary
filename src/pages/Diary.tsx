import { useParams, useSearchParams } from "react-router"

// diary page
export default function Diary() {
  // URL 파라미터
  const params = useParams(); // object { id : xx }
  console.log(params); 

  // 쿼리 스트링
  const [searchParams, setSearchParams] = useSearchParams(); 
  console.log('쿼리 스트링', searchParams); 
  
  return (
    <>
      <div>{params.id}번 Diary</div>
      <div>{searchParams.get('name')}</div>
    </>
  )
}

