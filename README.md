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
lsg [path] [filter] [extension]
```

- `[path]` (optional): You can specify the directory path to list files from. If not specified, it defaults to the current directory.

- `[filter]` (optional): You can specify a filter to display only files with a specific extension. For example, to list all '.js' files, use:
  ```
  lsg . -f .js
  ```

- `[extension]` (optional): Additional options to customize the listing behavior.

## Examples

- List all files and directories in the current directory:
  ```
  lsg
  ```

- List all files and directories in a specific directory:
  ```
  lsg /path/to/directory
  ```

- List all '.js' files in the current directory:
  ```
  lsg my-folder/ -f .js
  ```
 
### Show Files in List Format
To display files and directories in list format, you can use the `-l` option:

```bash
lsg -l
```

This will list the files and directories in the current directory in a list format.

### Show Hidden Files
To show hidden files (files and directories that start with a dot '.'), you can use the `-a` option:

```bash
lsg -a
```

This will list all files and directories, including hidden ones, in the current directory.

### Show Files in List Format, Including Hidden Files
To display both hidden and non-hidden files in list format, you can combine the `-l` and `-a` options:

```bash
lsg -la
```

This will list all files and directories, including hidden ones, in a list format.

### Combine Options with Filtering
You can also combine these options with the filter and extension options as you mentioned. For example, to list all '.js' files in list format:

```bash
lsg -l -f .js
```

This command will list all '.js' files in the current directory in a list format.

Feel free to customize these commands further to suit your specific needs.

## Installation
Of course! Here's the updated installation section with "lsg" instead of "ls," and the repository URL:

---

## Requires

Before using LSG (Windows LS with Filter), ensure you have the following requirement installed:

- **Node.js:** LSG is a Node.js-based command-line utility. Make sure you have Node.js installed on your system. You can download it from the official [Node.js website](https://nodejs.org/).

  To check if Node.js is installed, open a command prompt and run:

  ```bash
  node -v
  ```

  If Node.js is installed, this command will display the installed version. If not, please download and install it from the provided link.

---

## Installation

To install LSG (Windows LS with Filter), follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/guirialli/Windows-LS-with-Filter
   ```

2. **Add Project Folder to PATH:**

   To make it easier to run `lsg` with your custom filter from any location in the command prompt, you should add the project folder to your Windows PATH environment variable. Here's how you can do it:

   - Open the Windows Start menu and search for "Environment Variables."

   - Select "Edit the system environment variables."

   - In the "System Properties" window, click the "Environment Variables" button.

   - In the "Environment Variables" window, under "System variables," find and select the "Path" variable, then click the "Edit" button.

   - In the "Edit Environment Variable" window, click the "New" button and add the path to your project folder. For example, if your project is located in `C:\path\to\lsg\bin`, add that path.

   - Click "OK" to save your changes.

   - You might need to restart your command prompt or any open command prompt windows for the changes to take effect.

3. **Verify Installation:**

   To verify that the installation was successful, open a new Windows command prompt window and navigate to any directory. You should now be able to use the `lsg` command with your custom filter as described in the Usage section of this README.

Now you're ready to use LSG (Windows LS with Filter) with ease.


---

This updated installation section now refers to "LSG" instead of "LS" and includes the correct repository URL, which is "https://github.com/guirialli/Windows-LS-with-Filter"
## Contributing

We welcome contributions from the community. If you have any ideas, improvements, or bug fixes, please feel free to open an issue or submit a pull request.

## Author

[Guilherme Rialli]

## Acknowledgments

- This project was inspired by the 'ls' command in Linux.
- Special thanks to the GitHub community for their support and contributions.

---
