import {Client} from "../models/client";

export class clientController{
    /**
     * Isto é o nosso banco de dados !
     */private clients: Client[]

     constructor(){
         this.clients=[]
     }
     save(client: Client): boolean{
         const clientFound=
         this.clients.find(c=> c.id==client.id)
         /**
          * Se não encontrou  nenhum  cliente com o
          * mesmo id  do cliente recebido ,salva o
          * novo cliente  no "banco de dados"
          */
         if(!clientFound){
             this.clients.push(this.client)
             return true
         }
         return false
     }
     update(client: Client):boolean{
         for(let i=0; i< this._clients.length;i++){
             if(client.id==this._clients[i].id){
                 this.clients[i]=client
                 return  true
             }
         }
         return false
     }
     delete(id:number):boolean{
         const length1=this._client.length
         this.clients = this._clients._filter(c=> c.id !=id)
         const length2 =this._clients.length
         return length1 < length1
     }

     findAll():Client[]{
         return this.clients
     }

    
     
     }

