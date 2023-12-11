---
sidebar_position: 3
---

# PropertiesLoader

## UNDER CONSTRUCTION - Please Ignore

## `public class PropertiesLoader`

Utility class for loading properties from various sources, such as files and system properties, with support for environment variable expansion in file paths.

Instances of this class provide methods to load properties based on different inputs, including property names, paths, `{@code java.nio.file.Path}`, and `{@code java.io.File}`.



Environment variable placeholders in file paths are automatically expanded using the `{@link EnvPathParser}`.

 * **See also:**
   * EnvPathParser
   * PropertiesLoader#loadFromPropertyName(String)
   * PropertiesLoader#loadFromPath(String)
   * PropertiesLoader#loadFromPath(Path)
   * PropertiesLoader#loadFromFile(File)

## `public static Properties loadFromPropertyName(String propName)`

Loads properties from the specified property name, expanding environment variable placeholders in the associated file path.

 * **Parameters:** `propName` — The name of the property. Must not be null.
 * **Returns:** The loaded properties.
 * **Exceptions:** `PropertiesLoadingException` — If an error occurs during loading.
 * **See also:** EnvPathParser#getEnvPath(String)

## `public static Properties loadFromPath(String path)`

Loads properties from the specified path, expanding environment variable placeholders.

 * **Parameters:** `path` — The path to the properties file. Must not be null.
 * **Returns:** The loaded properties.
 * **Exceptions:** `PropertiesLoadingException` — If an error occurs during loading.
 * **See also:** EnvPathParser#getEnvPath(String)

## `public static Properties loadFromPath(Path path)`

Loads properties from the specified `{@code java.nio.file.Path}`, expanding environment variable placeholders.

 * **Parameters:** `path` — The `{@code java.nio.file.Path}` to the properties file. Must not be null.
 * **Returns:** The loaded properties.
 * **Exceptions:** `PropertiesLoadingException` — If an error occurs during loading.
 * **See also:** EnvPathParser#getEnvPath(String)

## `public static Properties loadFromFile(File file)`

Loads properties from the specified `{@code java.io.File}`, expanding environment variable placeholders.

 * **Parameters:** `file` — The `{@code java.io.File}` representing the properties file. Must not be null.
 * **Returns:** The loaded properties.
 * **Exceptions:** `PropertiesLoadingException` — If an error occurs during loading.
 * **See also:** EnvPathParser#getEnvPath(String)