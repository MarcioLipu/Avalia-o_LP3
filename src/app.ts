import  Express from 'express'
import  Cors from 'cors'
import  Logger from 'morgan'
/**
* CRIA UMA APLICAÇÃO  COM EXPRESS
 */ 
 export const app=Express()

 /**
  * LIBERA ACESSO AOS SERVIÇOS 
  */
 app.use(Cors())
 /**
  * HABITAR OS LOGS AVANÇADOS
  */
 app.use(Logger('dev'))

/**
 * HABILITA RESPOSTA EM FORMATOS JSON
 */
 const clientes =[
    {
        id:1,
        nome:'Marcio Lipu',
        telefone:'9999-9999'
    },
        {
            id:2,
            nome:'Guilherme Lipu',
            telefone:'8888-8888'
        },
        {
            id:3,
            nome:'Sthefanny Lipu',
            telefone:9999-8888
        }
    
]
/**
 * serviço para retornar todos os clientes
 */
 app.get("clientes", (req, res)=> {
     
     res.send(clientes)
 })
 /**
  * Serviço para retornar um cliente especifico 
  */
 app.get("/clientes/unico/:id", (req, res)=>{
     /**
      * CONST ID =REQ.PARAMS MESMA COISA
      */
     const {id} = req.params
     /**
      * CONVERTER PARA NUMERO
      */
     const idCliente:number =parseInt(id)
     /**
      * FILTRAR CLIENTES
      */
     const clienteEncontrado = clientes.find(c=> c.id==idCliente)
     res.json(clienteEncontrado)
 })

 


