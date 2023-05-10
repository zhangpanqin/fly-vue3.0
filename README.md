### 打包 image

```shell
docker build . -t vue-demo:0.0.2
docker run -it -p 80:80 vue-demo:0.0.2
docker run -it --entrypoint sh vue-demo:0.0.2
```
