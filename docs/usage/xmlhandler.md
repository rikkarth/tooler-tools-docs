---
sidebar_position: 1
---

# XmlHandler

Provides methods for querying and manipulating XML documents using XPath expressions.

:::info <a href="../javadoc/" target="_blank">JavaDoc</a> for more details
:::

## API

- **String** [getStringFromXPath (String, Document)](#getStringFromXPath)
- **NodeList** [getNodeListFromXPath (String, Document)](#getNodeListFromXPath)
- **Node** [getNodeFromXPath (String, Document)](#getNodeFromXPath)
- **Node** [getNodeFromXPath (String, Document, boolean)](#getNodeFromXPathOverloaded)
- **Optional`<Document>`** [getOptionalDomFromFile (File file)](#getOptionalDomFromFile)

## Xml Subject

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

## getStringFromXPath (String, Document) {#getStringFromXPath}

**Single Element**

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

**Multiple Elements**

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

**Wrong/Missing/Null Element**

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

## getNodeListFromXPath (String, Document) {#getNodeListFromXPath}

**Extracting Defined Child Element NodeList From Parent Node**

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

**Wrong/Missing/Null Elements**

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

## getNodeFromXPath (String, Document) {#getNodeFromXPath}

**Normal Use Case**

```java
import pt.codeforge.toolertools.xml.XmlHandler;

class TestClass {

    @Test
    void test() {
        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);

        Node groupElement = XmlHandler.getNodeFromXPath("//element-group", doc);

        System.out.println(groupElement.getNodeName());
        System.out.println(groupElement.getChildNodes().getLength());
    }
}
```

#### _Expected Output_

```text
element-group
7
```

**Why does element-group have 7 child nodes instead of 3?**

`getOptionalDomFromFile` doesn't apply any transformation to the Document being parsed and we leave the responsibility of cleaning whitespaces or other node types to you.

**Missing/Wrong/Null Values**

```java
import pt.codeforge.toolertools.xml.XmlHandler;

class TestClass {

    @Test
    void test() {
        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);

        Node groupElementMalformed = XmlHandler.getNodeFromXPath(MALFORMED_X_PATH, doc);
        Node groupElementNullExpression = XmlHandler.getNodeFromXPath(null, doc);
        Node groupElementNullDoc = XmlHandler.getNodeFromXPath(MALFORMED_X_PATH, null);

        System.out.println(groupElement);
        System.out.println(groupElement.getNodeName());
    }
}
```

#### _Expected Output_

The returned Node is never null, but will provide several indications that it is a null Node that contains no information - basically, an empty Node.

```text
[null: null]
null
```

## getNodeFromXPath (String, Document, boolean) {#getNodeFromXPathOverloaded}

**If 'null' needs to be returned**

A boolean flag 'true' or 'false' can be additionally added as a parameter. If true, will return `null` if something goes wrong.

```java
import pt.codeforge.toolertools.xml.XmlHandler;

class TestClass {

    @Test
    void test() {
        Document doc = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);

        Node nullGroupElement = XmlHandler.getNodeFromXPath(MALFORMED_X_PATH, doc, true);

        System.out.println(nullGroupElement == null ? "is null" : "not null");
    }
}
```

#### _Expected Output_

```text
is null
```

## getOptionalDomFromFile(File) {#getOptionalDomFromFile}

```java
import pt.codeforge.toolertools.xml.XmlHandler;

class TestClass {

    @Test
    void test() {
        Document document = XmlHandler.getOptionalDomFromFile(new File(input)).orElseThrow(IllegalStateException::new);

        System.out.println(document.getFirstChild().getNodeName());
    }
}
```

#### _Expected Output_

```text
root
```
