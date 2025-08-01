'use client'

import { useState } from 'react'

export default function VideoTestPage() {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  const videos = [
    {
      id: 1,
      name: "视频 1",
      src: "/videos/testimonials/testimonial-01.mp4"
    },
    {
      id: 2,
      name: "视频 2", 
      src: "/videos/testimonials/testimonial-02.mp4"
    },
    {
      id: 3,
      name: "视频 3",
      src: "/videos/testimonials/testimonial-03.mp4"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">视频播放测试</h1>
        
        {/* 直接视频播放测试 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">直接播放测试</h2>
          <div className="space-y-4">
            {videos.map((video) => (
              <div key={video.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">{video.name}</h3>
                <video 
                  controls 
                  className="w-full max-w-md"
                  preload="metadata"
                  onError={(e) => console.error('Video error:', e)}
                >
                  <source src={video.src} type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>
            ))}
          </div>
        </div>

        {/* 模态框播放测试 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">模态框播放测试</h2>
          <div className="grid grid-cols-3 gap-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setCurrentVideo(video.src)}
                className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                播放 {video.name}
              </button>
            ))}
          </div>
        </div>

        {/* 模态框 */}
        {currentVideo && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setCurrentVideo(null)}
          >
            <div 
              className="bg-white p-4 rounded-lg max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">视频播放</h3>
                <button 
                  onClick={() => setCurrentVideo(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <video 
                controls 
                className="w-full"
                autoPlay
                onError={(e) => {
                  console.error('Modal video error:', e)
                  alert('视频播放出错，请检查文件路径')
                }}
              >
                <source src={currentVideo} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        )}

        {/* 调试信息 */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">调试信息：</h3>
          <p className="mb-2">当前访问地址：</p>
          <ul className="list-disc list-inside space-y-1">
            <li>主页：<a href="/" className="text-blue-600 hover:underline">http://localhost:3000</a></li>
            <li>测试页面：<a href="/video-test" className="text-blue-600 hover:underline">http://localhost:3000/video-test</a></li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            如果视频无法播放，请检查浏览器控制台的错误信息。
          </p>
        </div>
      </div>
    </div>
  )
} 