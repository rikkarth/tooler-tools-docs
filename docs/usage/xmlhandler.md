---
sidebar_position: 1
---

# XmlHandler

Provides methods for querying and manipulating XML documents using XPath expressions.

## API
* XmlHandler.[getStringFromXPath](#xmlhandlergetstringfromxpath)
* XmlHandler.[getNodeListFromXPath]("")
* XmlHandler.[getNodeFromXPath]("")
* XmlHandler.[getOptionalDomFromFile]("")

## Xml Use-Case

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root xmlns="http://example.com/test">
    <test-element>Test Value</test-element>
    <empty-element></empty-element>
    <self-closing/>
    <element-group>
        <nested-element>Item 1</nested-element>
        <nested-element>Item 2</nested-element>
        <nested-element>Item 3</nested-element>
    </element-group>
</root>
```

## XmlHandler.[getStringFromXPath]("")

```java
import pt.codeforge.toolertools.xml.XmlHandler;

class TestClass {

    @Test
    void test() {
        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);

        String textElement = XmlHandler.getStringFromXPath("/root/test-element/text()", doc);

        System.out.println(textElement);
    }
}
```



