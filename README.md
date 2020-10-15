由于在国内访问巨硬的onedrive，速度实在是不太理想，大多数地区下载可能就仅仅比某度盘好那么一点点，而世纪互联又太贵（tj什么时候翻车？），所以只好用上cf的workers来给od加速一下（cf的速度其实也不太行，但是好歹下载也可以有1m以上）。

  首先，当然是注册一个自己的cf账号（[点击此处前往][1]），点击右侧的workers。
![img][2]
  然后点击创建workers,并将workers里面原来的代码删除。
![img][3]
  将反代代码复制到workers里面（[点击此处复制][4]），并将图中两个域名都换成你的onemenager的域名（至于为什么是两个，这是因为heroku一个月只有550小时，不够某些人使用，所以单双日填不同的域名可以单日和双日访问不同的heroku。如果你的onemanager不是搭建在heroku上面，就填相同的域名就行了）。
![img][5]
  然后访问此workers的域名就完成了。（如果你的od是世纪互联，请将下图的true改成false）
![img][6]


----------
  如果你的onemanager同时添加了国际版和世纪互联，那建议分别反代onemanager和onedrive

  首先，还是按照上文的方式反代om（并且将下图中的true改成false）。
![img][7]
  然后，用同样的方式反代onedrive，代码里面的域名改成你od的下载域名（xxxx-my.sharepoint.com）。
  最后，将workers的域名填到onemanager的后台'domainforproxy'处
![img][8]
  最后提一句，不一定要使用onemanager（蘑菇别打我）。


  [1]: https://www.cloudflare.com/
  [2]: https://zkysimon.ga/tj/msedge_DURZYlOUJL.png
  [3]: https://zkysimon.ga/tj/msedge_IgAa5FOcSd.png
  [4]: https://github.com/Zkycardistry/workers/blob/main/%E5%B1%91%E8%98%91%E8%8F%87%E5%8D%95%E5%8F%8C%E6%97%A5%E4%BB%A3%E7%A0%81.js
  [5]: https://zkysimon.ga/tj/msedge_mv7taAWODC.png
  [6]: https://zkysimon.ga/tj/msedge_ckSHezMPia.png
  [7]: https://zkysimon.ga/tj/msedge_ckSHezMPia.png
  [8]: https://zkysimon.ga/tj/msedge_7qKgdT9mLT.png
