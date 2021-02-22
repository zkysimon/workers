addEventListener(
    "fetch",event => {
        let url=new URL(event.request.url);
        url.protocol="http";     //协议,http或https,建议http不然会出现一些奇奇怪怪的问题
        url.hostname="zky.gs";     //小鸡域名,不要加http或者https前缀,直接域名就好
        url.port="10010";     //有http服务的端口
        url.pathname="/test";     //可选,把小鸡特定目录转为根目录,不需要直接删掉或者改成/
        let request=new Request(url,event.request);
        event. respondWith(
            fetch(request)
        )
    }
)
