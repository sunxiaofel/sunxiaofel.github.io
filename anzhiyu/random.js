var posts=["2024/10/24/hello-world/","2024/10/25/newpost-1/","2024/10/25/newpost/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };