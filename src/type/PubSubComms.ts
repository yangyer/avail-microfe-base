export type BaseComms = {

}

export type PubSubComms = BaseComms & {
    subscribe: (messageType:string, callback: (payload:any) => void) => void
    publish: (messageType:string, message: any) => void
    unsubscribe: (messageType:string, callback: (payload:any) => void) => void
}