// import { Subject } from 'rxjs'
// import { logger } from './logger'

// export type RoutingEvent = {
//     type: 'routing',
//     payload: {
//         path: string
//     }
// }

// export type CommsEvent = {
//     type: 'event',
//     payload: any
// }

// export type CommsLayer = Layer & {
//     listener: (callback: (message: CommsEvent | RoutingEvent) => void) => void
//     emitter: (message: CommsEvent | RoutingEvent) => void
// }

// // const bookingReg = createMicroFERegistration({
// //     id: 'bookings',
// //     init: (state: any, destination: string, options: any) => {
// //         // load the microfe into destination
// //         return {
// //             registerLayer: (commsLayer: CommsLayer) => {
// //                 const eventListener = (eventObj: CommsEvent | RoutingEvent) => {
// //                     // listen on events from comms layer
// //                     // invoke internal functions/redux/state/routing
// //                     // dispatch(push(path))
// //                 }
// //                 const eventHandler = (eventObj: CommsEvent | RoutingEvent) => {
// //                     // send to comms layer
// //                     // redux 
// //                     commsLayer.emitter(eventObj)
// //                 }
// //                 commsLayer.listener(eventListener)
                
// //                 return Promise.resolve()
// //             }
// //         }
// //     },
// //     update: (path: string, state: any) => {
// //         // reset state to 'state'
// //         // route to path
// //         return Promise.resolve()
// //     },
// //     unmount: (containerId:string) => {
// //         // remove element from container
// //         return Promise.resolve()
// //     }
// // })

// export const CreateRxJsCommsLayer = (): CommsLayer => {
//     const commsSubject = new Subject<CommsEvent | RoutingEvent>()
//     const observable = commsSubject.asObservable()
//     return {
//         listener: (callback) => {
//             observable
//                 .subscribe(msg => {
//                     console.log('subscriber', msg)
//                     callback(msg)
//                 })
//         },
//         emitter: (msg) => {
//             console.log('emitter:', msg)
//             commsSubject.next(msg)
//         }
//     }
// }

// // bookingReg.init({}, "", {})
// //     .registerLayer(RxJsCommsLayer())

export * from './create-shell'
export * from './create-registration'
