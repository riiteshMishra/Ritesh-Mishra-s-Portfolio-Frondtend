import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atelierForestDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";

SyntaxHighlighter.registerLanguage("javascript", javascript);

const CodeUi = ({ data }) => {
  if (!data?.code) return null;

  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-[#2a2f2c]">
      {/* Header (like demo toolbar) */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1d1b] text-xs text-gray-300">
        <span className="uppercase tracking-wide">javascript</span>
        <span className="text-green-400">atelier-forest-dark</span>
      </div>

      {/* Code Block */}
      <SyntaxHighlighter
        language="javascript"
        style={atelierForestDark}
        showLineNumbers
        wrapLongLines
        customStyle={{
          margin: 0,
          background: "#1b1f1d",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
        lineNumberStyle={{
          color: "#6b7280",
          fontSize: "12px",
          paddingRight: "12px",
        }}
      >
        {data.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeUi;
