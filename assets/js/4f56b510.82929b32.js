"use strict";(self.webpackChunktooler_tools_docs=self.webpackChunktooler_tools_docs||[]).push([[421],{1745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=n(5893),l=n(1151);const o={sidebar_position:1},s="XmlHandler",i={id:"usage/xmlhandler",title:"XmlHandler",description:"Provides methods for querying and manipulating XML documents using XPath expressions.",source:"@site/docs/usage/xmlhandler.md",sourceDirName:"usage",slug:"/usage/xmlhandler",permalink:"/usage/xmlhandler",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Usage",permalink:"/category/usage"},next:{title:"PropertiesLoader",permalink:"/usage/propertiesloader"}},d={},a=[{value:"API",id:"api",level:2},{value:"Xml Subject",id:"xml-subject",level:2},{value:"getStringFromXPath (String, Document)",id:"getStringFromXPath",level:2},{value:"<em>Expected Output</em>",id:"expected-output",level:4},{value:"<em>Expected Output</em>",id:"expected-output-1",level:4},{value:"<em>Expected Output</em>",id:"expected-output-2",level:4},{value:"getNodeListFromXPath (String, Document)",id:"getNodeListFromXPath",level:2},{value:"<em>Expected Output</em>",id:"expected-output-3",level:4},{value:"<em>Expected Output</em>",id:"expected-output-4",level:4},{value:"getNodeFromXPath (String, Document)",id:"getNodeFromXPath",level:2},{value:"<em>Expected Output</em>",id:"expected-output-5",level:4},{value:"<em>Expected Output</em>",id:"expected-output-6",level:4},{value:"getNodeFromXPath (String, Document, boolean)",id:"getNodeFromXPathOverloaded",level:2},{value:"<em>Expected Output</em>",id:"expected-output-7",level:4},{value:"getOptionalDomFromFile(File)",id:"getOptionalDomFromFile",level:2},{value:"<em>Expected Output</em>",id:"expected-output-8",level:4}];function m(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"xmlhandler",children:"XmlHandler"}),"\n",(0,r.jsx)(t.p,{children:"Provides methods for querying and manipulating XML documents using XPath expressions."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:[(0,r.jsx)("a",{href:"../javadoc/",target:"_blank",children:"JavaDoc"})," for more details"]})}),"\n",(0,r.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"String"})," ",(0,r.jsx)(t.a,{href:"#getStringFromXPath",children:"getStringFromXPath (String, Document)"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"NodeList"})," ",(0,r.jsx)(t.a,{href:"#getNodeListFromXPath",children:"getNodeListFromXPath (String, Document)"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Node"})," ",(0,r.jsx)(t.a,{href:"#getNodeFromXPath",children:"getNodeFromXPath (String, Document)"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Node"})," ",(0,r.jsx)(t.a,{href:"#getNodeFromXPathOverloaded",children:"getNodeFromXPath (String, Document, boolean)"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:["Optional",(0,r.jsx)(t.code,{children:"<Document>"})]})," ",(0,r.jsx)(t.a,{href:"#getOptionalDomFromFile",children:"getOptionalDomFromFile (File file)"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"xml-subject",children:"Xml Subject"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\r\n<root xmlns="http://example.com/test">\r\n    <test-element>Test Value</test-element>\r\n    <empty-element></empty-element>\r\n    <self-closing/>\r\n    <element-group>\r\n        <nested-element>Item 1</nested-element>\r\n        <nested-element>Item 2</nested-element>\r\n        <nested-element>Item 3</nested-element>\r\n    </element-group>\r\n</root>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"getStringFromXPath",children:"getStringFromXPath (String, Document)"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Single Element"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import pt.codeforge.toolertools.xml.XmlHandler;\r\n\r\nclass TestClass {\r\n\r\n    @Test\r\n    void test() {\r\n        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);\r\n\r\n        String textElement = XmlHandler.getStringFromXPath("/root/test-element/text()", doc);\r\n\r\n        System.out.println(textElement);\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"expected-output",children:(0,r.jsx)(t.em,{children:"Expected Output"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"Test Value\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Multiple Elements"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import pt.codeforge.toolertools.xml.XmlHandler;\r\n\r\nclass TestClass {\r\n\r\n    @Test\r\n    void test() {\r\n        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);\r\n\r\n        String textElement = XmlHandler.getStringFromXPath("/root/nested-element/text()", doc);\r\n\r\n        String textElement_1 = XmlHandler.getStringFromXPath("/root/nested-element[1]/text()", doc);\r\n\r\n        String textElement_2 = XmlHandler.getStringFromXPath("/root/nested-element[2]/text()", doc);\r\n\r\n        String textElement_3 = XmlHandler.getStringFromXPath("/root/nested-element[3]/text()", doc);\r\n\r\n        System.out.println(textElement);\r\n        System.out.println(textElement_1);\r\n        System.out.println(textElement_2);\r\n        System.out.println(textElement_3);\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"expected-output-1",children:(0,r.jsx)(t.em,{children:"Expected Output"})}),"\n",(0,r.jsxs)(t.p,{children:["Observe as the first item 'Item 1' is output since no position was provided on ",(0,r.jsx)(t.code,{children:"textElement"})," assignment, by default the first value found is returned."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"Item 1\r\nItem 1\r\nItem 2\r\nItem 3\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Wrong/Missing/Null Element"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import pt.codeforge.toolertools.xml.XmlHandler;\r\n\r\nclass TestClass {\r\n\r\n    @Test\r\n    void test() {\r\n        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);\r\n\r\n        String textElement = XmlHandler.getStringFromXPath("/path/to/missing/element/text()", doc);\r\n\r\n        System.out.println(textElement.isEmpty());\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"expected-output-2",children:(0,r.jsx)(t.em,{children:"Expected Output"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"true\n"})}),"\n",(0,r.jsx)(t.h2,{id:"getNodeListFromXPath",children:"getNodeListFromXPath (String, Document)"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Extracting Defined Child Element NodeList From Parent Node"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import pt.codeforge.toolertools.xml.XmlHandler;\r\n\r\nclass TestClass {\r\n\r\n    @Test\r\n    void test() {\r\n        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);\r\n\r\n        NodeList elementGroup = XmlHandler.getNodeListFromXPath("//element-group/nested-element/text()", doc);\r\n\r\n        System.out.println(elementGroup.getLength());\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"expected-output-3",children:(0,r.jsx)(t.em,{children:"Expected Output"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"3\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Wrong/Missing/Null Elements"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"import pt.codeforge.toolertools.xml.XmlHandler;\r\n\r\nclass TestClass {\r\n\r\n    @Test\r\n    void test() {\r\n        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);\r\n\r\n        NodeList nullDocumentCase = XmlHandler.getNodeListFromXPath(COMPLIANT_X_PATH, null);\r\n        NodeList malformedXPathCase = XmlHandler.getNodeListFromXPath(MALFORMED_X_PATH, doc);\r\n        NodeList nullXPathCase = XmlHandler.getNodeListFromXPath(null, doc);\r\n\r\n        System.out.println(nullDocumentCase.getLength());\r\n        System.out.println(malformedXPathCase.getLength());\r\n        System.out.println(nullXPathCase.getLength());\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(t.h4,{id:"expected-output-4",children:(0,r.jsx)(t.em,{children:"Expected Output"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"#getNodeListFromXPath"})," will return an empty NodeList if any of the cases above is applied."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"0\r\n0\r\n0\n"})}),"\n",(0,r.jsx)(t.h2,{id:"getNodeFromXPath",children:"getNodeFromXPath (String, Document)"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Normal Use Case"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import pt.codeforge.toolertools.xml.XmlHandler;\r\n\r\nclass TestClass {\r\n\r\n    @Test\r\n    void test() {\r\n        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);\r\n\r\n        Node groupElement = XmlHandler.getNodeFromXPath("//element-group", doc);\r\n\r\n        System.out.println(groupElement.getNodeName());\r\n        System.out.println(groupElement.getChildNodes().getLength());\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"expected-output-5",children:(0,r.jsx)(t.em,{children:"Expected Output"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"element-group\r\n7\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Why does element-group have 7 child nodes instead of 3?"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"getOptionalDomFromFile"})," doesn't apply any transformation to the Document being parsed and we leave the responsibility of cleaning whitespaces or other node types to you."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Missing/Wrong/Null Values"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"import pt.codeforge.toolertools.xml.XmlHandler;\r\n\r\nclass TestClass {\r\n\r\n    @Test\r\n    void test() {\r\n        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);\r\n\r\n        Node groupElementMalformed = XmlHandler.getNodeFromXPath(MALFORMED_X_PATH, doc);\r\n        Node groupElementNullExpression = XmlHandler.getNodeFromXPath(null, doc);\r\n        Node groupElementNullDoc = XmlHandler.getNodeFromXPath(MALFORMED_X_PATH, null);\r\n\r\n        System.out.println(groupElement);\r\n        System.out.println(groupElement.getNodeName());\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(t.h4,{id:"expected-output-6",children:(0,r.jsx)(t.em,{children:"Expected Output"})}),"\n",(0,r.jsx)(t.p,{children:"The returned Node is never null, but will provide several indications that it is a null Node that contains no information - basically, an empty Node."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"[null: null]\r\nnull\n"})}),"\n",(0,r.jsx)(t.h2,{id:"getNodeFromXPathOverloaded",children:"getNodeFromXPath (String, Document, boolean)"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"If 'null' needs to be returned"})}),"\n",(0,r.jsxs)(t.p,{children:["A boolean flag 'true' or 'false' can be additionally added as a parameter. If true, will return ",(0,r.jsx)(t.code,{children:"null"})," if something goes wrong."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import pt.codeforge.toolertools.xml.XmlHandler;\r\n\r\nclass TestClass {\r\n\r\n    @Test\r\n    void test() {\r\n        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);\r\n\r\n        Node nullGroupElement = XmlHandler.getNodeFromXPath(MALFORMED_X_PATH, doc, true);\r\n\r\n        System.out.println(nullGroupElement == null ? "is null" : "not null");\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"expected-output-7",children:(0,r.jsx)(t.em,{children:"Expected Output"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"is null\n"})}),"\n",(0,r.jsx)(t.h2,{id:"getOptionalDomFromFile",children:"getOptionalDomFromFile(File)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"import pt.codeforge.toolertools.xml.XmlHandler;\r\n\r\nclass TestClass {\r\n\r\n    @Test\r\n    void test() {\r\n        Document document = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);\r\n\r\n        System.out.println(document.getFirstChild().getNodeName());\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(t.h4,{id:"expected-output-8",children:(0,r.jsx)(t.em,{children:"Expected Output"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"root\n"})})]})}function c(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const l={},o=r.createContext(l);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);