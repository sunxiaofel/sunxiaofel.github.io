var posts=["2024/10/27/telegraph-Image：搭建你的专属开源图床/","2024/10/26/快速搭建个人博客：Hexo-GitHub-Pages-Cloudflare-Pages-完整指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };