const fs = require('fs');
const AdmZip = require('adm-zip');

// DOCX 文件本质上是 ZIP 压缩包
try {
  // 解压 DOCX 文件
  const zip = new AdmZip('./downloaded-doc.docx');
  const zipEntries = zip.getEntries();
  
  // 读取 document.xml 文件内容
  const documentXml = zip.readAsText(zipEntries.find(entry => entry.entryName === 'word/document.xml'));
  
  console.log('=== 文档内容提取成功 ===\n');
  console.log('文档 XML 内容长度:', documentXml.length);
  console.log('\n前 2000 字符内容:\n');
  console.log(documentXml.substring(0, 2000));
  
  // 保存提取的内容
  fs.writeFileSync('./extracted_content.txt', documentXml, 'utf8');
  console.log('\n\n完整内容已保存到 extracted_content.txt');
  
} catch (error) {
  console.error('解析失败:', error.message);
  console.log('\n提示：需要安装 adm-zip 包：npm install adm-zip');
}
