# Koa 模板 （持续迭代中）

基于 koa 进行二次封装的 api 框架

## 环境要求

Node.js: >= 14.0.0

## 启动项目

```bash
npm install
NODE_ENV=debug node ./src/app.js 
```

## 新建项目

### 通过 github 界面操作

+ 打开[https://github.com/loongprogram/nodejs-koa-template](https://github.com/loongprogram/nodejs-koa-template)

+ 点击 `Use this template`;

+ 填入信息创建即可

### 克隆代码库

+ 克隆此代码仓库，删除`git`历史信息，并初始化新的仓库

```bash
git clone -b <tag-name> https://github.com/loongprogram/nodejs-koa-template.git <your-project-name> --depth=1
cd koa-template
rm -r .git/
git init
git remote add origin <新的`git`地址>
```

+ 修改`package.json`和`README.md`信息后，将文件提交到新的仓库

> Tips: 提交前记得修改`user.name`和`user.email`

```bash
git add -A
git commit -m "<commit message>"
git branch -m main
git push -u origin main
```

## 项目说明

### 配置文件

**环境相关**的配置都应该放在`./config`文件夹下

```bash
config/
├── debug.json          # 本地开发环境
├── test.json           # 测试环境
└── release.json        # 生产环境
```

### 源代码

**服务相关**的代码全部在`src`文件夹下

为了保持简单，只保留了接口层与业务逻辑层

```bash
src/
├── app.js      # 服务启动入口
├── lib         # 存放一些通用模块
├── middleware  # 中间件
├── model       # sequelize 实体
├── route       # 路由
└── service     # 业务逻辑都应该放在里面
```

## 我们约定

+ 优先使用类
+ 使用 [standard](https://standardjs.com/readme-zhcn.html) 代码规范，不得修改
+ 使用 [npm](https://docs.npmjs.com/cli/v7/commands) 进行包管理
+ 业务逻辑与数据分离（数据库不处理外键、关联关系等）
