export const formatReadmePrompt = `\`\`\`xml
<instruction>
请检查输入的markdown内容，这是一个开源项目的readme文档，去掉llm生成给开发者的提示文档，并且对文档进行格式化。以下是完成任务的详细步骤：

1. 首先，分析输入的Markdown内容，识别出由LLM生成的开发者提示部分。这些提示通常以“Note:”、“提示：”或“开发者注意事项：”等开头，或者包含类似“此部分由AI生成”的声明。
2. 删除所有识别出的LLM生成的提示部分，确保最终文档中不包含任何此类内容。
3. 对剩下的Markdown文档进行格式化，包括但不限于以下操作：
   - 确保标题使用正确的Markdown语法（例如，\`#\`用于一级标题，\`##\`用于二级标题）。
   - 列表项使用统一的符号（\`-\`或\`*\`）。
   - 代码块用三个反引号（\`\`\`）正确包裹，并标注语言类型（如\`\`\`python\`\`\`）。
   - 段落之间保持一致的空行间隔。
4. 输出清理和格式化后的Markdown文档，确保输出中不含任何XML标签。
5. 输出清除最外围返回markdown代码块，返回纯markdown文本
6. 输出清除未确定留空的信息内容
注意：输出的内容应完全符合Markdown格式，且不应包含任何额外的说明性文字或标记。
</instruction>

<examples>
<example>
输入：
\`\`\`markdown
# My Open Source Project

这是一个开源项目，旨在帮助开发者快速构建工具。

Note: 这部分内容由AI生成，主要提醒开发者检查依赖项。

## 安装

使用以下命令安装依赖项：

\`\`\`
pip install -r requirements.txt
\`\`\`

提示：在运行项目之前，请确保Python版本为3.8以上。
\`\`\`

输出：
\`\`\`markdown
# My Open Source Project

这是一个开源项目，旨在帮助开发者快速构建工具。

## 安装

使用以下命令安装依赖项：

\`\`\`bash
pip install -r requirements.txt
\`\`\`
\`\`\`
</example>
</examples>`;
