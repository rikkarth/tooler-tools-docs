---
sidebar_position: 3
---

# EnvPathParser

Parses and expands environment variables in file paths. This class provides one static method for parsing input paths, replacing environment variable placeholders with their respective values on both Windows and Unix-like systems.

:::info <a href="../javadoc/" target="_blank">JavaDoc</a> for more details
:::

## API

- **String** [getEnvPath(String)](#getEnvPath)

## getEnvPath(String) {#getEnvPath}

```java
class TestClass {

    @Test
    void test(){

        System.out.println(EnvPathParsers.getEnvPath("$HOME"));
        System.out.println(EnvPathParsers.getEnvPath("%HOME%"));
        System.out.println(EnvPathParsers.getEnvPath("$HOME/something"));

    }
}
```

#### _Expected Output_

```text
C:\Users\user
C:\User\user
C:\User\user\something
```

**Empty Input**

```java
class TestClass {

    @Test
    void test(){

        String result = EnvPathParser.getEnvPath("");

        System.out.println(result.isEmpty());

    }
}
```

#### _Expected Output_
    
```text
true
```
