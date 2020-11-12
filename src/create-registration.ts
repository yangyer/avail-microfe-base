import { MicroFrontendRegistrationOptions, WindowExtended } from './type'

export const createMicrofrontendRegistration = ({
    id,
    init,
    update,
    unmount
}:MicroFrontendRegistrationOptions): MicroFrontendRegistrationOptions => {
    const tempWindow = window as WindowExtended
    if (!tempWindow.__mfeRegistration) {
        tempWindow.__mfeRegistration = {}
    }
    tempWindow
        .__mfeRegistration[`${id}Reg`] = {
            id,
            init,
            update,
            unmount
        }

    return tempWindow.__mfeRegistration[`${id}Reg`]
}