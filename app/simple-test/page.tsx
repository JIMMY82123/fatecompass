export default function SimpleTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">简单测试页面</h1>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">视频测试</h2>
          <video 
            controls 
            className="w-full max-w-md"
            preload="metadata"
          >
            <source src="/videos/testimonials/testimonial-01.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>

        <div className="mt-8 bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">✅ 页面加载成功</h3>
          <p>如果您能看到这个页面，说明网站基本功能正常。</p>
        </div>
      </div>
    </div>
  )
} 