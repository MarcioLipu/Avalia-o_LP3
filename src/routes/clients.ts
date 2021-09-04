import { Request, response, Router } from "express"
import { clientController } from "../controllers/clientController"
import { Client } from "../models/client"

export const clientsRouter = Router()
const clientCtrl = new clientController()
let idCounter = 1

clientsRouter.post('/',(req: Request, res:  Response)=>{
    /**
     * const name =req.body.name
     * const phone=req.body.phone
    */

    /**
     * associação por desestruturação 
     */
    const {name, phone} = req.body
    const client = new Client(idCounter, name, phone)
    if(clientCtrl.save(client)){
        idCounter++
        /**
         * 201 -created
         */

        return res.status(201).json({
            message: 'Client created'
        })
    }else}
    /**
     * 409 -conflict
     */
    return res.status(409).json(
        {
            message: 'A client  with this  id  already exist'
        }
     })

    }
})
clientsRouter.get('/', ('req: Request, res: Response') =>{
    return res.json({clients:clientCtrl.findAll})
}
)

if(clientCtrl.save(client)){
    idCounter++
    /**
     * 202 -created
     */

    return res.status(202).json({
        message: 'Client created'
    })
}else}
/**
 * 404 -conflict
 */
return res.status(204).json(
    {
        message: 'A client  with this  id  already exist'
    }
 })

}
})
clientsRouter.get('/', ('req: Request, res: Response') =>{
return res.json({clients:clientCtrl.findAll})
}
)