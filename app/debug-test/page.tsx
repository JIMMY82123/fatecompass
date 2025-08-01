'use client'

import { useState, useEffect } from 'react'

export default function DebugTest() {
  const [count, setCount] = useState(0)
  const [autoCount, setAutoCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // 自动计数器
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoCount(prev => prev + 1)
      console.log('Auto count:', autoCount + 1)
    }, 1000)
    
    return () => clearInterval(timer)
  }, [autoCount])

  const handleClick = () => {
    setCount(prev => prev + 1)
    console.log('Button clicked, new count:', count + 1)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
    console.log('Toggle visibility:', !isVisible)
  }

  console.log('Component render - count:', count, 'autoCount:', autoCount, 'isVisible:', isVisible)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">React 状态测试</h1>
        
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-lg">手动计数: <span className="font-bold text-blue-600">{count}</span></p>
            <button 
              onClick={handleClick}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
            >
              点击增加
            </button>
          </div>

          <div className="text-center">
            <p className="text-lg">自动计数: <span className="font-bold text-green-600">{autoCount}</span></p>
            <p className="text-sm text-gray-500">每秒自动+1</p>
          </div>

          <div className="text-center">
            <button 
              onClick={toggleVisibility}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              {isVisible ? '隐藏' : '显示'} 内容
            </button>
          </div>

          {isVisible && (
            <div className="bg-yellow-100 p-4 rounded text-center">
              <p>这个内容可以切换显示/隐藏</p>
              <p className="text-sm text-gray-600">当前时间: {new Date().toLocaleTimeString()}</p>
            </div>
          )}

          <div className="text-center text-xs text-gray-500 mt-6">
            <p>请打开浏览器控制台查看日志</p>
            <p>如果自动计数不工作，说明React有问题</p>
          </div>
        </div>
      </div>
    </div>
  )
} 