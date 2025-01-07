var posts=["2024/11/05/域名免费拿！一分钟学会-us-kg-域名申请并配置到-Cloudflare/","2024/10/29/突破次元壁！轻松上手 VPN 节点搭建/","2024/10/29/如何使用Google-Email发送邮件/","2024/10/26/快速搭建个人博客：Hexo-GitHub-Pages-Cloudflare-Pages-完整指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };