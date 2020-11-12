import { MicroFrontendRegistrationOptions } from "."

type RegistrationObj = {
    [regObjName:string]: MicroFrontendRegistrationOptions
}

export type WindowExtended = typeof window & {
    __mfeRegistration: RegistrationObj
}