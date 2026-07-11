import { PlatformPackager } from "@loongdotjs/app-builder-lib"
import { getLicenseAssets } from "@loongdotjs/app-builder-lib/out/util/license"

export interface LicenseButtonsFile {
  file: string
  lang: string
  langWithRegion: string
  langName: string
}

export async function getLicenseButtonsFile(packager: PlatformPackager<any>): Promise<Array<LicenseButtonsFile>> {
  return getLicenseAssets(
    (await packager.resourceList).filter(it => {
      const name = it.toLowerCase()
      // noinspection SpellCheckingInspection
      return name.startsWith("licensebuttons_") && (name.endsWith(".json") || name.endsWith(".yml"))
    }),
    packager
  )
}
