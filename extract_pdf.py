import subprocess
import sys

# 安装必要的库
try:
    import fitz  # PyMuPDF
except ImportError:
    print("正在安装 PyMuPDF...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pymupdf", "-q"])
    import fitz

def extract_text_from_pdf(pdf_path):
    """从 PDF 提取文本内容"""
    try:
        doc = fitz.open(pdf_path)
        print(f"PDF 文件：{pdf_path}")
        print(f"总页数：{len(doc)}")
        print("=" * 80)
        
        full_text = []
        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            full_text.append(text)
            print(f"\n--- 第 {page_num + 1} 页 ---")
            print(text)
            print("-" * 80)
        
        doc.close()
        
        # 保存提取的文本
        output_path = pdf_path.replace('.pdf', '_extracted.txt')
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(full_text))
        
        print(f"\n✅ 文本已保存到：{output_path}")
        return full_text
        
    except Exception as e:
        print(f"❌ 错误：{e}")
        return None

if __name__ == "__main__":
    pdf_path = r"C:\Users\HUAWEI\Desktop\鑫正辉公司主营产品介绍 2026.pdf"
    extract_text_from_pdf(pdf_path)
