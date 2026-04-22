# 陈嘉铭求职作品集

这是一个可直接部署到 GitHub Pages 的静态个人网站，当前版本已经改成更偏“求职作品集”的形态，适合展示机器人、AI、控制算法和教培方向经历。

## 项目结构

```text
personal-site/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .nojekyll
├── assets/
│   ├── docs/
│   │   └── ChenJiaming-Resume.pdf
│   ├── media/
│   │   ├── robot-avoid.gif
│   │   ├── robot-dribbling.gif
│   │   └── robot-stepping.gif
│   ├── showcase/
│   │   ├── cpg/
│   │   ├── kicking/
│   │   ├── mobile/
│   │   └── navigation/
│   └── prototypes/
│       ├── smartcooking-extended.html
│       └── smartcooking-mvp.html
├── favicon.ico
├── favicon.svg
├── index.html
├── script.js
├── styles.css
└── README.md
```

## 本地预览

这是纯静态页面，不需要安装依赖。

直接双击 `index.html` 就能打开，或使用任意静态服务器预览。

如果你本机装了 Python，也可以运行：

```powershell
cd personal-site
py -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 部署到 GitHub Pages

### 方式一：推荐，使用 GitHub Actions 自动部署

1. 新建一个 GitHub 仓库。
2. 把 `personal-site` 文件夹里的所有文件上传到仓库根目录。
3. 进入 GitHub 仓库的 `Settings -> Pages`。
4. 在 `Build and deployment` 中选择 `Source: GitHub Actions`。
5. 推送 `main` 分支后，GitHub 会自动执行部署。

部署成功后，站点地址一般是：

```text
https://你的用户名.github.io/你的仓库名/
```

如果仓库名直接是 `你的用户名.github.io`，访问地址就是：

```text
https://你的用户名.github.io/
```

## 当前内容亮点

- 首页已加入简历下载按钮
- 作品集区已加入真实页面截图、GIF 与轻量视频素材
- 时间轴已按求职表达方式重组
- AI 私人厨艺管家项目已嵌入两份原型预览
- 机器人项目已接入 GIF 演示素材

## 替换路径总览

如果你只是想替换素材，最省事的做法是：

1. 直接用同名文件覆盖原文件。
2. 如果你改了文件名，再同步修改 `index.html` 里的引用路径。

### 1. 简历下载文件

当前文件路径：

```text
assets/docs/ChenJiaming-Resume.pdf
```

当前引用位置：

- 首页按钮 `下载简历`
- 联系区按钮 `下载简历`

如果你保持文件名不变，只需要用新的 PDF 覆盖这个文件。

如果你改成了别的文件名，比如：

```text
assets/docs/陈嘉铭-机器人AI简历.pdf
```

就需要同步修改 `index.html` 中这两个 `href`：

```html
./assets/docs/ChenJiaming-Resume.pdf
```

### 2. AI 项目预览原型

当前文件路径：

```text
assets/prototypes/smartcooking-mvp.html
assets/prototypes/smartcooking-extended.html
```

当前引用位置：

- 作品集区两个 iframe 预览
- 作品集区两个“打开原型”按钮

如果你继续使用 HTML 原型，建议直接覆盖这两个文件。

如果你改了文件名，需要同步修改 `index.html` 里的 4 处引用：

```html
./assets/prototypes/smartcooking-mvp.html?v=20260419
./assets/prototypes/smartcooking-extended.html?v=20260419
./assets/prototypes/smartcooking-mvp.html
./assets/prototypes/smartcooking-extended.html
```

说明：

- 带 `?v=20260419` 的是 iframe 预览，为了避免浏览器缓存。
- 如果你替换了原型内容但文件名不变，页面还显示旧内容，可以把这个版本号改成别的值，例如 `?v=20260420`。

### 3. 作品集截图 / GIF / 视频素材

当前新增展示素材路径：

```text
assets/showcase/mobile/
assets/showcase/cpg/
assets/showcase/kicking/
assets/showcase/navigation/
```

当前页面主要使用的文件包括：

```text
assets/showcase/mobile/cooking-screen-01.png
assets/showcase/mobile/cooking-screen-02.png
assets/showcase/mobile/cooking-screen-03.png
assets/showcase/mobile/cooking-screen-04.png
assets/showcase/mobile/cooking-screen-05.png
assets/showcase/cpg/cpg-robot-stepping.gif
assets/showcase/cpg/cpg-google-dribbling.gif
assets/showcase/cpg/cpg-mapping.gif
assets/showcase/kicking/shooting-demo.gif
assets/showcase/navigation/nav-obstacle-demo.gif
assets/showcase/navigation/nav-no-obstacle-demo.mp4
```

如果你保持文件名不变，直接同名覆盖即可。

如果你改了文件名，需要同步修改 `index.html` 里对应的 `img src` 或 `video src`。

说明：

- `mobile/` 放小程序真实页面截图。
- `cpg/` 放精确落脚 / 带球 / 感知链路相关 GIF。
- `kicking/` 放精准踢球演示素材。
- `navigation/` 放动态避障 GIF 和导航测试视频。

### 4. 旧版机器人项目演示素材

当前文件路径：

```text
assets/media/robot-stepping.gif
assets/media/robot-dribbling.gif
assets/media/robot-avoid.gif
```

当前对应展示区：

- `robot-stepping.gif`：腿式机器人踏石演示
- `robot-dribbling.gif`：腿式机器人带球演示
- `robot-avoid.gif`：轮式机器人动态避障演示

如果你继续用 GIF，直接同名覆盖就可以。

如果你想换成 `png`、`jpg`、`webp` 或别的文件名，就要同步修改 `index.html` 中这 3 个 `img src`。

### 5. 网站图标

当前文件路径：

```text
favicon.svg
favicon.ico
```

如果你要换网站图标：

- `favicon.svg` 是页面显式引用的图标
- `favicon.ico` 是浏览器常见默认请求图标

建议两个一起替换。

### 6. 文案与联系方式

这些内容不在 `assets/` 目录里，而是在：

```text
index.html
```

你可以在这个文件里直接修改：

- 标题与副标题
- 求职方向
- 邮箱、电话、城市
- 项目介绍文字
- 时间轴文案
- 课程方向文案

## 替换步骤

### 场景 A：只替换文件，不改文件名

这是最简单的方式。

1. 把新文件准备好。
2. 直接覆盖对应路径下的旧文件。
3. 本地打开站点检查显示是否正常。
4. 提交并推送到 GitHub。

### 场景 B：替换文件，并改文件名或格式

适合把 GIF 改成 PNG / WebP，或者把简历 PDF 文件改成新的命名方式。

1. 把新文件放到对应目录，例如 `assets/media/` 或 `assets/docs/`。
2. 打开 `index.html`。
3. 搜索旧路径并改成新路径。
4. 刷新页面确认没有 404。
5. 提交并推送到 GitHub。

### 场景 C：替换 AI 项目原型，但页面还是旧内容

这是缓存问题，不是文件没替换成功。

1. 确认 `assets/prototypes/` 下的 HTML 已经替换成功。
2. 打开 `index.html`。
3. 找到 iframe 的 `src`，例如：

```html
./assets/prototypes/smartcooking-mvp.html?v=20260419
```

4. 把 `?v=20260419` 改成新的值，例如 `?v=20260420`。
5. 重新刷新页面。

## 推荐替换顺序

1. 先替换 `assets/docs/ChenJiaming-Resume.pdf`，确保下载按钮是最新简历。
2. 再替换 `assets/media/` 下的 GIF 或截图，先把作品视觉证据换成你最满意的版本。
3. 最后再决定是否继续保留 `assets/prototypes/` 下的 HTML 原型预览。

## 你可能想改的内容

- `index.html` 里的邮箱、电话、岗位方向
- `assets/docs/ChenJiaming-Resume.pdf` 对应的简历文件
- 项目描述中的措辞和排序
- 增加 GitHub、Bilibili、微信公众号、知乎等外链
- 替换 `assets/media/` 里的 GIF，换成你更想展示的项目截图或视频封面

## 备注

- 当前页面已经适配桌面端和移动端。
- 当前站点内置的原型预览来自 `assets/prototypes/`，可直接在浏览器中打开。
- 当前站点不依赖框架，后续如果你想升级成 React / Next.js 版本，也可以在这个视觉风格基础上继续扩展。