---
sidebar_position: 1
---

# XmlHandler

Provides methods for querying and manipulating XML documents using XPath expressions.

## API

- XmlHandler.[getStringFromXPath](#xmlhandlergetstringfromxpath)
- XmlHandler.getNodeListFromXPath
- XmlHandler.getNodeFromXPath
- XmlHandler.getOptionalDomFromFile

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

## XmlHandler.getStringFromXPath

### Single Element

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

#### _Expected Output_

```text
Test Value
```

### Multiple Same Element

```java
import pt.codeforge.toolertools.xml.XmlHandler;

class TestClass {

    @Test
    void test() {
        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);

        String textElement = XmlHandler.getStringFromXPath("/root/nested-element/text()", doc);

        String textElement_1 = XmlHandler.getStringFromXPath("/root/nested-element[1]/text()", doc);

        String textElement_2 = XmlHandler.getStringFromXPath("/root/nested-element[2]/text()", doc);

        String textElement_3 = XmlHandler.getStringFromXPath("/root/nested-element[3]/text()", doc);

        System.out.println(textElement);
        System.out.println(textElement_1);
        System.out.println(textElement_2);
        System.out.println(textElement_3);
    }
}
```

#### _Expected Output_

Observe as the first item 'Item 1' is output since no position was provided on `textElement` assignment, by default the first value found is returned.

```text
Item 1
Item 1
Item 2
Item 3
```

### Wrong/Missing/Null Element

```java
import pt.codeforge.toolertools.xml.XmlHandler;

class TestClass {

    @Test
    void test() {
        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);

        String textElement = XmlHandler.getStringFromXPath("/path/to/missing/element/text()", doc);

        System.out.println(textElement.isEmpty());
    }
}
```

#### _Expected Output_

```text
true
```

## XmlHandler.getNodeListFromXPath

### Extracting Defined Child Element NodeList From Parent Node

```java
import pt.codeforge.toolertools.xml.XmlHandler;

class TestClass {

    @Test
    void test() {
        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);

        NodeList elementGroup = XmlHandler.getNodeListFromXPath("//element-group/nested-element/text()", doc);

        System.out.println(elementGroup.getLength());
    }
}
```

#### _Expected Output_

```text
3
```

### Wrong/Missing/Null Elements

```java
import pt.codeforge.toolertools.xml.XmlHandler;

class TestClass {

    @Test
    void test() {
        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);

        NodeList nullDocumentCase = XmlHandler.getNodeListFromXPath(COMPLIANT_X_PATH, null);
        NodeList malformedXPathCase = XmlHandler.getNodeListFromXPath(MALFORMED_X_PATH, doc);
        NodeList nullXPathCase = XmlHandler.getNodeListFromXPath(null, doc);

        System.out.println(nullDocumentCase.getLength());
        System.out.println(malformedXPathCase.getLength());
        System.out.println(nullXPathCase.getLength());
    }
}
```

#### _Expected Output_

`#getNodeListFromXPath` will return an empty NodeList if any of the cases above is applied.

```text
0
0
0
```
