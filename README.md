# @darkyzhou-powered/electron-builder

electron-builder with loong64 support.

## Usage

Override the dependency resolution of the following packages:

```
electron-builder -> @darkyzhou-powered/electron-builder
app-builder-lib -> @darkyzhou-powered/app-builder-lib
builder-util -> @darkyzhou-powered/builder-util
```

You may also refer to [darkyzhou/electron-loong64](https://github.com/darkyzhou/electron-loong64) for insturctions on how to manually specify the download mirror for `electron` package.

## Available Versions

- `25.1.8`: branch [electron-builder@25.1.8-loong64](https://github.com/darkyzhou/electron-builder-loong64/tree/electron-builder%4025.1.8-loong64)
- `24.13.3`: branch [v24.13.3-loong64](https://github.com/darkyzhou/electron-builder-loong64/tree/v24.13.3-loong64?tab=readme-ov-file)

## Maintenance

For each new electron-builder release, the following steps should be performed:

1. Switch to tag of upstream release
2. Pick up riscv commits from loong64 branch like `
3. Run `pnpm i` and `pnpm compile`
4. Push the current HEAD to a new branch named after the upstream release, e.g. `v24.10.0-loong64`
5. Publish to npm: `pnpm -F <package_dir_name> publish --access public`

## Acknowledgement

- kxxt: https://github.com/riscv-forks/electron-builder
