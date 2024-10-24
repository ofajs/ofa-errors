const fs = require("fs").promises;
const path = require("path");

// 递归读取目录内容的函数
async function readDirectory(dir) {
  const baseCode = await fs.readFile(
    path.join(__dirname, "../base.js"),
    "utf-8"
  );
  try {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);

      const content = await fs.readFile(filePath, "utf8");

      const newCode = baseCode.replace(
        `{\n  // replace this\n}`,
        content.trim()
      );

      const fileName = `ofa-error-${file.replace(".json", "")}.js`;

      await fs.writeFile(path.join(__dirname, `../src/${fileName}`), newCode);
    }
  } catch (err) {
    console.error(`读取目录或文件时出错: ${err}`);
  }
}

// 调用函数读取目标目录
const targetDir = path.join(__dirname, "../errors");

readDirectory(targetDir);
