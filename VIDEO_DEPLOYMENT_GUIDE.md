# 🎥 视频部署指南

## 📁 视频文件准备

### 1. 视频格式要求
- **格式**: MP4 (推荐)
- **编码**: H.264
- **分辨率**: 1920x1080 或 1280x720
- **时长**: 30秒 - 2分钟
- **文件大小**: 建议每个视频不超过10MB
- **帧率**: 24fps 或 30fps

### 2. 视频内容建议
每个视频应该包含：
- 客户自我介绍 (5-10秒)
- 对服务的称赞和体验分享 (15-30秒)
- 具体的效果和改变 (10-15秒)
- 推荐语 (5-10秒)

## 📂 文件部署步骤

### 步骤1: 准备视频文件
将您的三个视频文件重命名为：
```
sarah-johnson-career.mp4
michael-chen-relationship.mp4
emma-rodriguez-financial.mp4
```

### 步骤2: 放置视频文件
将视频文件复制到以下目录：
```
public/videos/testimonials/
├── sarah-johnson-career.mp4
├── michael-chen-relationship.mp4
└── emma-rodriguez-financial.mp4
```

### 步骤3: 验证部署
1. 启动开发服务器: `npm run dev`
2. 访问: http://localhost:3000
3. 滚动到推荐板块
4. 点击任意视频卡片测试播放

## 🎬 视频内容模板

### Sarah Johnson - 职业指导
**推荐内容:**
- 介绍: "Hi, I'm Sarah Johnson from New York"
- 称赞: "Master 玄印's reading service is absolutely incredible. The depth of insight he provides is unlike anything I've experienced before."
- 效果: "His guidance helped me understand my career path in a completely new way. I now have clarity and confidence I never had before."
- 推荐: "I would highly recommend his services to anyone seeking direction in their life."

### Michael Chen - 关系咨询
**推荐内容:**
- 介绍: "I'm Michael Chen from San Francisco"
- 称赞: "The relationship compatibility reading I received was incredibly accurate and insightful. Master 玄印 has a remarkable ability to see the deeper patterns."
- 效果: "This reading helped me understand my partner and our relationship dynamics so much better. Our communication has improved dramatically."
- 推荐: "If you're looking for genuine wisdom and guidance, this is the place to go."

### Emma Rodriguez - 财务时机
**推荐内容:**
- 介绍: "Emma Rodriguez from Miami here"
- 称赞: "I was initially skeptical, but Master 玄印's financial timing analysis was spot on. His understanding of timing and cycles is extraordinary."
- 效果: "Following his guidance, I made the right investment at the perfect time. The results were exactly as he predicted."
- 推荐: "His service has been a game-changer for me. I can't recommend him enough."

## 🔧 技术特性

### 已实现功能
- ✅ 响应式视频播放器
- ✅ 全屏模态框播放
- ✅ 音量控制
- ✅ 自动播放
- ✅ 移动端优化
- ✅ 优雅的加载动画
- ✅ 点击外部区域关闭

### 浏览器兼容性
- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ 移动端浏览器

## 📱 移动端优化

### 自动适配
- 视频自动适应屏幕尺寸
- 触摸友好的播放控制
- 优化的加载性能
- 支持移动端手势

## 🚀 性能优化建议

### 视频优化
1. **压缩视频**: 使用 HandBrake 或 FFmpeg 压缩
2. **选择合适的分辨率**: 移动端优先考虑 720p
3. **优化音频**: 使用 AAC 编码，比特率 128kbps
4. **添加缩略图**: 在视频开头添加静态缩略图

### 示例 FFmpeg 命令
```bash
# 压缩视频到 720p，文件大小控制在 5MB 以内
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 23 -c:a aac -b:a 128k -movflags +faststart output.mp4
```

## 🔍 故障排除

### 常见问题
1. **视频无法播放**
   - 检查文件路径是否正确
   - 确认视频格式为 MP4
   - 验证文件没有损坏

2. **视频加载缓慢**
   - 压缩视频文件大小
   - 检查网络连接
   - 考虑使用 CDN

3. **移动端播放问题**
   - 确保视频支持移动端播放
   - 检查 `playsInline` 属性
   - 测试不同移动设备

## 📞 技术支持

如果您在部署过程中遇到任何问题，请：
1. 检查浏览器控制台错误信息
2. 确认视频文件格式和大小
3. 验证文件路径正确性
4. 测试不同浏览器兼容性

---

**注意**: 确保您拥有视频的使用权限，并遵守相关法律法规。 