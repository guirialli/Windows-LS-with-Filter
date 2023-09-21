---

# Windows LS with Filter

Windows LS with Filter is a command-line utility inspired by the 'ls' command in Linux. It provides a convenient way to list files and directories in the Windows command prompt while also allowing you to filter and display specific file types.

## Features

- List files and directories in a specified directory.
- Filter files by specifying file extensions.
- Works in the Windows command prompt (cmd).

## Usage

To use Windows LS with Filter, open the Windows command prompt and use the following syntax:

```
ls [path] [filter] [extension]
```

- `[path]` (optional): You can specify the directory path to list files from. If not specified, it defaults to the current directory.

- `[filter]` (optional): You can specify a filter to display only files with a specific extension. For example, to list all '.js' files, use:
  ```
  ls . -f .js
  ```

- `[extension]` (optional): Additional options to customize the listing behavior.

## Examples

- List all files and directories in the current directory:
  ```
  ls
  ```

- List all files and directories in a specific directory:
  ```
  ls /path/to/directory
  ```

- List all '.js' files in the current directory:
  ```
  ls my-folder/ -f .js
  ```

## Installation

To install Windows LS with Filter, simply download the repository and add the project's directory to your system's PATH environment variable for easy access from any location in the command prompt.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions from the community. If you have any ideas, improvements, or bug fixes, please feel free to open an issue or submit a pull request.

## Author

[Guilherme Rialli]

## Acknowledgments

- This project was inspired by the 'ls' command in Linux.
- Special thanks to the GitHub community for their support and contributions.

---
