'use client'

import { useState, useEffect } from 'react'

export default function TestPage() {
  const [counter, setCounter] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    console.log('TestPage mounted')
    setMounted(true)
  }, [])

  const handleClick = () => {
    console.log('Button clicked, current counter:', counter)
    setCounter(prev => {
      console.log('Setting counter from', prev, 'to', prev + 1)
      return prev + 1
    })
  }

  console.log('TestPage render, counter:', counter, 'mounted:', mounted)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">React 状态测试</h1>
        
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-lg mb-2">
              计数器: <span className="font-bold text-blue-600">{counter}</span>
            </p>
            <p className="text-sm text-gray-500 mb-2">
              组件已挂载: {mounted ? '是' : '否'}
            </p>
            <button 
              onClick={handleClick}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              点击我 (查看控制台)
            </button>
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              请打开浏览器开发者工具的控制台，然后点击按钮。
              如果看到日志输出但数字不更新，说明是渲染问题。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 