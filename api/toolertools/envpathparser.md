---
sidebar_position: 2
---

# EnvPathParser

# Documentation

## `public class EnvPathParser`

Utility class for parsing and expanding environment variables in file paths. This class provides static methods for parsing input paths, replacing environment variable placeholders with their respective values on both Windows and Unix-like systems.

<b>Note:</b> This class should not be instantiated as it consists of static utility methods only.

- **See also:**
  - EnvPathParser#getEnvPath(String)
  - EnvPathParser#parseIfMys(AtomicReference, List)
  - EnvPathParser#parseIfUnix(AtomicReference, List)

## `public static String getEnvPath(String input)`

Parses the input path by replacing environment variable placeholders with their respective values. Environment variable placeholders are denoted by percent signs ('%') on both ends for Windows and by a dollar sign ('$') at the beginning for Unix-like systems. The method handles both styles. After parsing, the method returns the normalized path as a String, or if when path string cannot be converted into a `{@link Path}` because the path string contains invalid characters, or the path string is invalid for other file system specific reasons, it returns the path as literally converted.

- **Parameters:** `input` — The input path to be parsed. Must not be null.
- **Returns:** The parsed and normalized path as a String.
- **Exceptions:** `IllegalArgumentException` — If the input parameter is null.
