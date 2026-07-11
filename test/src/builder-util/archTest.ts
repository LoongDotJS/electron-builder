import { Arch, archFromString, getArchCliNames, getArtifactArchName, toLinuxArchString } from "@loongdotjs/builder-util"

describe("loong64 architecture", () => {
  test("parses and exposes the CLI architecture name", ({ expect }) => {
    expect(archFromString("loong64")).toBe(Arch.loong64)
    expect(getArchCliNames()).toContain("loong64")
  })

  test("uses Linux target architecture names", ({ expect }) => {
    expect(toLinuxArchString(Arch.loong64, "deb")).toBe("loong64")
    expect(toLinuxArchString(Arch.loong64, "pacman")).toBe("loong64")
    expect(toLinuxArchString(Arch.loong64, "rpm")).toBe("loongarch64")
    expect(toLinuxArchString(Arch.loong64, "flatpak")).toBe("loongarch64")
    expect(toLinuxArchString(Arch.loong64, "snap")).toBe("loongarch64")
  })

  test("uses product and toolset architecture names", ({ expect }) => {
    expect(getArtifactArchName(Arch.loong64, "deb")).toBe("loong64")
    expect(getArtifactArchName(Arch.loong64, "rpm")).toBe("loongarch64")
    expect(getArtifactArchName(Arch.loong64, "AppImage")).toBe("loong64")
  })
})
