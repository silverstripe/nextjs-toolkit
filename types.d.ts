import React from "react"

export type StringMap = {
    [key: string]: string
}


export interface ClientConfig {
    endpoint: string
    options: {
        [key: string]: string | StringMap
        headers: StringMap
    }
  }
  
export interface ProjectConfig {
      elemental?: {
        fragmentsPath: string
        componentsPath: string,
      }
  
      query: {
        pluraliser: (s: string) => string,
      }
  
      page: {
        ignore: Array<string>
      }
      
      baseDir : string
      
      baseURL: string
      
      client: () => ClientConfig
}

export interface CacheManifest {
  availableTemplates: StringMap
  templateManifest: TemplateManifest
  getPropsManifest: GetPropsManifest
  typeAncestry: TypeAncestryManifest
  queryManifest: QueryManifest
}

export interface ProjectState {
    cacheManifest: CacheManifest
    projectConfig: ProjectConfig
}
