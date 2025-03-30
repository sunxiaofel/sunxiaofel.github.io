var posts=["2025/03/30/FL Studio Mac版：让你的音乐制作更有趣/","2024/10/29/突破次元壁！轻松上手 VPN 节点搭建/","2024/10/29/如何使用Google-Email发送邮件/","2024/10/26/快速搭建个人博客：Hexo-GitHub-Pages-Cloudflare-Pages-完整指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };