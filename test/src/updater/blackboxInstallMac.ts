import { getArchSuffix } from "@loongdotjs/builder-util/out/util"
import { Arch } from "@loongdotjs/electron-builder"
import path from "path"

export function installMac(dirPath: string, arch: Arch): string {
  return path.join(dirPath, `mac${getArchSuffix(arch)}`, `TestApp.app`, "Contents", "MacOS", "TestApp")
}
