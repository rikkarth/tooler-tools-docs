---
sidebar_position: 2
---

# PropertiesLoader

Loads properties from various sources, such as file paths and system properties, with support for environment variable expansion in file paths.

:::info <a href="../javadoc/" target="_blank">JavaDoc</a> for more details
:::

## API

- **Properties** [loadFromPropertyName(String)](#loadFromPropertyName)
- **Properties** [loadFromPath(String)](#loadFromPathString)
- **Properties** [loadFromPath(Path)](#loadFromPath)
- **Properties** [loadFromFile(File)](#loadFromFile)

## .properties Subject

```properties
HOME=${env:HOMEDRIVE}${env:HOMEPATH}
testVariable=testVariable_test
fromVariable=${testVariable}
comboVariable=${HOME}\${fromVariable}
pathToTestResource=src/test/resources/test_resource_1.xml
```

## loadFromPropertyName(String) {#loadFromPropertyName}

```java
class TestClass {

    @Test
    void test(){
        System.setProperty("test", "src/test/resources/test.properties");

        Properties properties = PropertiesLoader.loadFromPropertyName("test");

        System.out.println(properties.getProperty("HOME"));
        System.out.println(properties.getProperty("testVariable"));
        System.out.println(properties.getProperty("fromVariable"));
        System.out.println(properties.getProperty("comboVariable"));
    }
}
```

#### _Expected Output_

```text
C:\Users\user
testVariable_test
testVariable_test
C:\Users\user\testVariable_test
```

## loadFromPath(String) {#loadFromPathString}

```java
class TestClass {

    @Test
    void test(){

        Properties properties = PropertiesLoader.loadFromPath("src/test/resources/test.properties");

        System.out.println(properties.getProperty("testVariable"));
    }
}
```

#### _Expected Output_

```text
testVariable_test
```

## loadFromPath(Path) {#loadFromPath}

```java
class TestClass {

    @Test
    void test(){
        Path path = Paths.get("src/test/resources/test.properties");
        
        Properties properties = PropertiesLoader.loadFromPath(path);

        System.out.println(properties.getProperty("testVariable"));
    }
}
```

#### _Expected Output_

```text
testVariable_test
```

## loadFromFile(File) {#loadFromFile}

```java
class TestClass {

    @Test
    void test(){
        File file = new File("src/test/resources/test.properties");
        
        Properties properties = PropertiesLoader.loadFromPath(file);

        System.out.println(properties.getProperty("testVariable"));
    }
}
```

#### _Expected Output_

```text
testVariable_test
```
