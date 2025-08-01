export default function DebugPage() {
  return (
    <html>
      <head>
        <title>Debug Page</title>
      </head>
      <body style={{ 
        backgroundColor: 'red', 
        color: 'white', 
        fontSize: '24px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1>调试页面</h1>
        <p>如果你能看到这个红色页面，说明Next.js基本功能正常</p>
        <p>时间: {new Date().toLocaleString()}</p>
      </body>
    </html>
  )
} 