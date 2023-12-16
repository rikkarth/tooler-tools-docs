"use strict";(self.webpackChunktooler_tools_docs=self.webpackChunktooler_tools_docs||[]).push([[350],{8686:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(5893),n=t(1151);const o={sidebar_position:2},a="PropertiesLoader",i={id:"usage/propertiesloader",title:"PropertiesLoader",description:"Loads properties from various sources, such as file paths and system properties, with support for environment variable expansion in file paths.",source:"@site/docs/usage/propertiesloader.md",sourceDirName:"usage",slug:"/usage/propertiesloader",permalink:"/usage/propertiesloader",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"XmlHandler",permalink:"/usage/xmlhandler"},next:{title:"EnvPathParser",permalink:"/usage/envpathparser"}},l={},d=[{value:"API",id:"api",level:2},{value:".properties Subject",id:"properties-subject",level:2},{value:"loadFromPropertyName(String)",id:"loadFromPropertyName",level:2},{value:"<em>Expected Output</em>",id:"expected-output",level:4},{value:"loadFromPath(String)",id:"loadFromPathString",level:2},{value:"<em>Expected Output</em>",id:"expected-output-1",level:4},{value:"loadFromPath(Path)",id:"loadFromPath",level:2},{value:"<em>Expected Output</em>",id:"expected-output-2",level:4},{value:"loadFromFile(File)",id:"loadFromFile",level:2},{value:"<em>Expected Output</em>",id:"expected-output-3",level:4}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"propertiesloader",children:"PropertiesLoader"}),"\n",(0,s.jsx)(r.p,{children:"Loads properties from various sources, such as file paths and system properties, with support for environment variable expansion in file paths."}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.mdxAdmonitionTitle,{children:[(0,s.jsx)("a",{href:"../javadoc/",target:"_blank",children:"JavaDoc"})," for more details"]})}),"\n",(0,s.jsx)(r.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Properties"})," ",(0,s.jsx)(r.a,{href:"#loadFromPropertyName",children:"loadFromPropertyName(String)"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Properties"})," ",(0,s.jsx)(r.a,{href:"#loadFromPathString",children:"loadFromPath(String)"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Properties"})," ",(0,s.jsx)(r.a,{href:"#loadFromPath",children:"loadFromPath(Path)"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Properties"})," ",(0,s.jsx)(r.a,{href:"#loadFromFile",children:"loadFromFile(File)"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"properties-subject",children:".properties Subject"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",children:"HOME=${env:HOMEDRIVE}${env:HOMEPATH}\r\ntestVariable=testVariable_test\r\nfromVariable=${testVariable}\r\ncomboVariable=${HOME}\\${fromVariable}\r\npathToTestResource=src/test/resources/test_resource_1.xml\n"})}),"\n",(0,s.jsx)(r.h2,{id:"loadFromPropertyName",children:"loadFromPropertyName(String)"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:'class TestClass {\r\n\r\n    @Test\r\n    void test(){\r\n        System.setProperty("test", "src/test/resources/test.properties");\r\n\r\n        Properties properties = PropertiesLoader.loadFromPropertyName("test");\r\n\r\n        System.out.println(properties.getProperty("HOME"));\r\n        System.out.println(properties.getProperty("testVariable"));\r\n        System.out.println(properties.getProperty("fromVariable"));\r\n        System.out.println(properties.getProperty("comboVariable"));\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(r.h4,{id:"expected-output",children:(0,s.jsx)(r.em,{children:"Expected Output"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"C:\\Users\\user\r\ntestVariable_test\r\ntestVariable_test\r\nC:\\Users\\user\\testVariable_test\n"})}),"\n",(0,s.jsx)(r.h2,{id:"loadFromPathString",children:"loadFromPath(String)"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:'class TestClass {\r\n\r\n    @Test\r\n    void test(){\r\n\r\n        Properties properties = PropertiesLoader.loadFromPath("src/test/resources/test.properties");\r\n\r\n        System.out.println(properties.getProperty("testVariable"));\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(r.h4,{id:"expected-output-1",children:(0,s.jsx)(r.em,{children:"Expected Output"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"testVariable_test\n"})}),"\n",(0,s.jsx)(r.h2,{id:"loadFromPath",children:"loadFromPath(Path)"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:'class TestClass {\r\n\r\n    @Test\r\n    void test(){\r\n        Path path = Paths.get("src/test/resources/test.properties");\r\n        \r\n        Properties properties = PropertiesLoader.loadFromPath(path);\r\n\r\n        System.out.println(properties.getProperty("testVariable"));\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(r.h4,{id:"expected-output-2",children:(0,s.jsx)(r.em,{children:"Expected Output"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"testVariable_test\n"})}),"\n",(0,s.jsx)(r.h2,{id:"loadFromFile",children:"loadFromFile(File)"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:'class TestClass {\r\n\r\n    @Test\r\n    void test(){\r\n        File file = new File("src/test/resources/test.properties");\r\n        \r\n        Properties properties = PropertiesLoader.loadFromPath(file);\r\n\r\n        System.out.println(properties.getProperty("testVariable"));\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(r.h4,{id:"expected-output-3",children:(0,s.jsx)(r.em,{children:"Expected Output"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"testVariable_test\n"})})]})}function c(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>a});var s=t(7294);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);