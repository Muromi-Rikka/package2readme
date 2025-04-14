# package2readme

![npm version](https://img.shields.io/npm/v/package2readme)
![npm monthly downloads](https://img.shields.io/npm/dm/package2readme)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub latest commit](https://img.shields.io/github/last-commit/Muromi-Rikka/package2readme)

> 一个基于 TypeScript 和现代工具链构建的 CLI 模板项目。

## ✨ 特性

* **命令行界面 (CLI)：** 项目通过 `package.json` 中的 `bin` 字段和日志库（如 `consola`）提供了 CLI 工具。
* **异步数据处理：** 使用 `Axios` 处理 API 请求，支持异步操作。
* **类型安全：** 采用 TypeScript 提升代码质量，减少运行时错误。
* **高效的开发流程：** 使用 `tsup` 作为构建工具，快速生成 TypeScript 项目的生产版本。
* **实用至上的设计：** 集成了 `ufo`（用于 URL 操作）和 `picocolors`（用于终端美化），提升开发体验。
* **灵活的配置：** 使用 `rc9` 管理配置文件，支持用户自定义设置。
* **注重代码质量：** 配置了基于 Antfu 规则的 ESLint，确保代码的可读性和可维护性。

## 🚀 快速上手

按照以下步骤在本地运行本项目。

### 前置条件

确保已安装以下工具：
* Node.js（推荐版本 >= 18.x）
* 包管理工具（npm、yarn 或 pnpm）
    ```bash
    node -v
    npm -v # 或 yarn -v 或 pnpm -v
    ```

### 安装

1. 克隆仓库：
    ```bash
    git clone https://github.com/Muromi-Rikka/package2readme.git
    cd package2readme
    ```
2. 安装依赖：
    ```bash
    # 选择你喜欢的包管理工具
    npm install
    # 或
    yarn install
    # 或
    pnpm install
    ```

## 🛠️ 使用方法

安装完成后，可以按照以下方式运行和使用项目。

### 可用脚本

通过 `npm run <script>`、`yarn <script>` 或 `pnpm <script>` 执行以下常用脚本：

* `start`：通过 `ts-node` 启动 CLI 工具。
* `start:node`：构建项目并使用 Node.js 运行 CLI 工具。
* `build`：使用 `tsup` 构建生产版本。
* `build:watch`：监听文件变化并自动重新构建。

示例：
```bash
# 在开发模式下启动 CLI 工具
npm run start

# 构建生产版本
npm run build
```

## 💻 技术栈

本项目使用的主要技术包括：

* **框架/库：** 基于 Node.js 和 TypeScript 构建，提供强大的后端和 CLI 环境。
* **构建工具：** 使用 `tsup` 进行高效的 TypeScript 编译和打包。
* **语言：** 采用 TypeScript 编写，确保类型安全，提高开发效率。
* **实用工具：** 使用 `axios` 处理 HTTP 请求，`ufo` 用于 URL 操作，`picocolors` 用于终端样式美化。
* **配置管理：** 使用 `rc9` 管理配置文件，支持灵活的用户自定义。

更多依赖项详见 [package.json](package.json) 文件。

## 🤝 贡献

欢迎任何形式的贡献！如果您有任何想法或问题，请随时提交 Pull Request 或 Issue。

## 📄 许可证

本项目基于 **MIT** 许可证分发。更多信息请查看 `LICENSE` 文件。

## 👤 作者

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

* **仓库：** [https://github.com/Muromi-Rikka/package2readme](https://github.com/Muromi-Rikka/package2readme)
* **主页：** [https://github.com/Muromi-Rikka/package2readme](https://github.com/Muromi-Rikka/package2readme)
* **问题：** [https://github.com/Muromi-Rikka/package2readme/issues](https://github.com/Muromi-Rikka/package2readme/issues)
