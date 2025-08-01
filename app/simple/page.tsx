'use client'

import { useState } from 'react'

export default function SimpleTest() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">简单测试</h1>
        <p className="text-lg mb-4">计数: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          点击我
        </button>
        <p className="text-sm text-gray-500 mt-4">
          如果这个按钮工作，说明React基本功能正常
        </p>
      </div>
    </div>
  )
} 