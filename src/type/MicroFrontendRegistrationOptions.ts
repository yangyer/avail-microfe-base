export type registerMiddlewareFn = () => void

export type MicroFrontendRegistrationOptions = {
    id:string
    init: (destination:string, options?:any, registerMiddleware?: registerMiddlewareFn) => Promise<void>,
    update: (path:string, state?:any) => Promise<void>,
    unmount: (containerId:string) => Promise<void>
}