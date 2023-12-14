import {z} from 'zod'

declare const createMessageBus : any;

const messageBus = createMessageBus({
    events : {
        LOG_IN : z.object({
            username : z.string(),
            password : z.string()
        }),
        LOG_OUT : {}
    }
});

