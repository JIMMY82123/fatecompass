export default function TestVideoPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">视频测试页面</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">测试视频 1</h2>
            <video 
              controls 
              className="w-full max-w-2xl"
              preload="metadata"
            >
              <source src="/videos/testimonials/testimonial-01.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">测试视频 2</h2>
            <video 
              controls 
              className="w-full max-w-2xl"
              preload="metadata"
            >
              <source src="/videos/testimonials/testimonial-02.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">测试视频 3</h2>
            <video 
              controls 
              className="w-full max-w-2xl"
              preload="metadata"
            >
              <source src="/videos/testimonials/testimonial-03.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">调试信息：</h3>
          <p>如果视频无法播放，请检查：</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>文件路径是否正确</li>
            <li>视频文件是否损坏</li>
            <li>浏览器是否支持MP4格式</li>
            <li>网络连接是否正常</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 