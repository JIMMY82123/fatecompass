'use client'

import { useState, useEffect } from 'react'

export default function CarouselTest() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const items = [
    { id: 1, name: "Jessica L.", text: "第一个评价内容" },
    { id: 2, name: "Robert K.", text: "第二个评价内容" },
    { id: 3, name: "Sophia P.", text: "第三个评价内容" },
    { id: 4, name: "Daniel C.", text: "第四个评价内容" },
  ]

  // 自动播放
  useEffect(() => {
    if (isHovered) return
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [isHovered, items.length])

  const nextItem = () => {
    console.log('Next clicked, current:', currentIndex)
    setCurrentIndex(prev => (prev + 1) % items.length)
  }

  const prevItem = () => {
    console.log('Prev clicked, current:', currentIndex)
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
  }

  const goToItem = (index: number) => {
    console.log('Go to item:', index)
    setCurrentIndex(index)
  }

  console.log('Render - currentIndex:', currentIndex, 'isHovered:', isHovered)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">轮播测试</h1>
        
        {/* 轮播容器 */}
        <div 
          className="bg-white rounded-lg shadow-lg p-8 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 调试信息 */}
          <div className="text-xs text-gray-500 mb-4 text-center">
            当前: {currentIndex} | 总数: {items.length} | 悬停: {isHovered ? '是' : '否'}
          </div>

          {/* 左右箭头 */}
          <button
            onClick={prevItem}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            ←
          </button>

          <button
            onClick={nextItem}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            →
          </button>

          {/* 内容 */}
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">{items[currentIndex].name}</h2>
            <p className="text-lg text-gray-600">{items[currentIndex].text}</p>
          </div>

          {/* 底部圆点 */}
          <div className="flex justify-center space-x-2 mt-6">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToItem(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* 状态显示 */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {isHovered ? '⏸️ 已暂停' : '▶️ 自动播放中'} | {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* 手动测试按钮 */}
        <div className="text-center mt-6 space-x-4">
          <button 
            onClick={() => setCurrentIndex(0)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            重置到第一个
          </button>
          <button 
            onClick={() => setCurrentIndex(items.length - 1)}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            跳转到最后一个
          </button>
        </div>
      </div>
    </div>
  )
} 