import { useState } from 'react'

function App() {
  const [placeholder] = useState<string | null>(null)

  return (
    <div style={{ padding: 24 }}>
      <h1>Emotion Diary</h1>
      <p>Welcome! Start building your app here.</p>
      {placeholder && <pre>{placeholder}</pre>}
    </div>
  )
}

export default App
