import { 
    MicrofrontendConfiguration,
    MicrofrontendModule,
    registerMiddlewareFn,
    WindowExtended,
} from './type'
import { Logger } from './logger'

export const createShell = (config: MicrofrontendConfiguration, logger: Logger, options?: any, registerMiddleware?: registerMiddlewareFn) => {
    const _load = async (frontEnd:MicrofrontendModule, rootDocument?:Document) => {
        // still have to think about cache, might not needed it??
        const { type } = frontEnd
        logger.info(`[shell] loading '${type}' micro front end`)
        switch (type) {
            case 'component':
                // handle component
            case 'composite':
                // handle composite
            case 'url':
                // handle url
                await _defaultLoadMicroFrontEnd(frontEnd, rootDocument)
        }
    }

    const _defaultLoadMicroFrontEnd = async (frontEnd:MicrofrontendModule, rootDocument?:Document) : Promise<void> => {
        rootDocument = rootDocument || document
        const { data, name } = frontEnd
        if (!data) {
            return logger.error(`[shell] invalid registration, missing 'data'`)
        }

        const scriptId = `${name}-script`
        const renderFn = _render(frontEnd)

        if (rootDocument.getElementById(scriptId)) {
            logger.trace(`[shell] script already loaded, go to render`)
            // TODO: need to figure out how to refresh from api
            return Promise.resolve(renderFn())
        }

        logger.info(`[shell] fetching manifest from ${data.url}`)
        const res = await fetch(data.url)
        const manifest = await res.json()

        logger.trace(`[shell] creating script element and mounting script`)
        const script = rootDocument.createElement('script')

        script.id = scriptId
        script.crossOrigin = ''
        script.type = 'text/javascript'
        script.src = manifest.files['main.js']
        script.onload = renderFn
        rootDocument.head.appendChild(script)

        logger.info(`[shell] finish mounting script to document`)
    }

    const _render = (frontEnd:MicrofrontendModule) => () => {
        const { __mfeRegistration } = window as WindowExtended
        if (__mfeRegistration) {
            const frontEndRegObj = __mfeRegistration[`${frontEnd.name}Reg`]
            frontEndRegObj
                .init(`${frontEnd.target}`, options, registerMiddleware)
                .then(() => logger.info(`[shell] finish mounting '${frontEnd.name}'.`))
        }
    }

    return {
        init: (rootDocument?: Document) => {
            const { defaultFrontend, registry } = config
            defaultFrontend
                .forEach(name => {
                    _load(registry[name], rootDocument)
                })
        },
        loadModule: (microFrontEndName:string) => {
            const { registry } = config
            const frontEnd = registry[microFrontEndName]

            if (!frontEnd) {
                return logger.error(`[shell] '${microFrontEndName}' microfrontend is not registered`)
            } 

            _load(frontEnd)
        }
    }
}