---
sidebar_position: 1
---

# XmlHandler

Utility class for handling operations on XML files or XPath expressions. This class provides methods for querying and manipulating XML documents using XPath expressions.

## `public class XmlHandler`

Utility class for handling operations on XML files or XPath expressions. This class provides methods for querying and manipulating XML documents using XPath expressions.

## `public static String getStringFromXPath(String expression, Document document)`

Retrieves a string value from the specified XPath expression within the given XML document.

 * **Parameters:**
   * `expression` — The XPath expression.
   * `document` — The XML document.
 * **Returns:** The string value corresponding to the XPath expression, or an empty string if an error occurs.

## `public static NodeList getNodeListFromXPath(String expression, Document document)`

Retrieves a NodeList from the specified XPath expression within the given XML document.

 * **Parameters:**
   * `expression` — The XPath expression.
   * `document` — The XML document.
 * **Returns:** The NodeList corresponding to the XPath expression, or an empty NodeList if an error occurs.

## `public static Node getNodeFromXPath(String expression, Document document)`

Retrieves a Node from the specified XPath expression within the given XML document.

 * **Parameters:**
   * `expression` — The XPath expression.
   * `document` — The XML document.
 * **Returns:** The Node corresponding to the XPath expression, or a new 'null' Node if an error occurs.

## `public static Node getNodeFromXPath(String expression, Document document, boolean onErrorReturnNull)`

Retrieves a Node from the specified XPath expression within the given XML document, with an option to return null on error.

 * **Parameters:**
   * `expression` — The XPath expression.
   * `document` — The XML document.
   * `onErrorReturnNull` — If true, returns null on error; otherwise, returns a new 'null' Node.
 * **Returns:** The Node corresponding to the XPath expression, or null/a new 'null' Node based on the error-handling

     option.

## `public static Optional<Document> getOptionalDomFromFile(final File file)`

Reads an XML file and returns an Optional containing the corresponding Document.

 * **Parameters:** `file` — The XML file to read.
 * **Returns:** Optional containing the Document if successful, otherwise empty Optional.

