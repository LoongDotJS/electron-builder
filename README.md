# @loongdotjs/electron-builder

electron-builder with loongarch64 support.

## Usage

Override the dependency resolution of the following packages:

```
electron-builder -> @loongdotjs/electron-builder
app-builder-lib -> @loongdotjs/app-builder-lib
builder-util -> @loongdotjs/builder-util
```

You may also refer to [darkyzhou/electron-loong64](https://github.com/darkyzhou/electron-loong64) for insturctions on how to manually specify the download mirror for `electron` package.

## Available Versions

- `26.0.12`: branch [electron-builder@26.0.12-loong64](https://github.com/LoongDotJS/electron-builder/tree/electron-builder%4026.0.12-loong64)
- `25.1.8`: branch [electron-builder@25.1.8-loong64](https://github.com/LoongDotJS/electron-builder/tree/electron-builder%4025.1.8-loong64)
- `24.13.3`: branch [v24.13.3-loong64](https://github.com/LoongDotJS/electron-builder/tree/v24.13.3-loong64?tab=readme-ov-file)

## Maintenance

For each new electron-builder release, the following steps should be performed:

1. Switch to tag of upstream release
2. Pick up porting commits from loong64 branch like `electron-builder@25.1.8-loong64`
3. Run `pnpm i` and `pnpm compile`
4. Push the current HEAD to a new branch named after the upstream release, e.g. `v24.10.0-loong64`
5. Publish to npm: `pnpm -F <package_dir_name> publish --access public`

## Acknowledgement

- kxxt: https://github.com/riscv-forks/electron-builder
