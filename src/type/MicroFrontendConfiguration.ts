export type MicrofrontendModule = {
    type?: 'composite' | 'component' | 'url'
    name: string
    data?: {
        url: string,
        packageName: string
    }
    target?: string
}

export type Distination = {
    
}

export type Distinations = {
    [distinationName: string]: Distination
}

export type Registry = {
    [microFrontEnd:string]: MicrofrontendModule
}

export type Routes = {

}

export type MicrofrontendConfiguration = {
    template: string
    destinations: Distinations,
    registry: Registry
    routes?: Routes
    defaultFrontend: string[]
}