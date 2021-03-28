import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { AEntityWithALongName } from './entity/AEntityWithALongName'
import { BEntityWithALongName } from './entity/BEntityWithALongName'
import { CEntityWithALongName } from './entity/CEntityWithALongName'
import { DEntityWithALongName } from './entity/DEntityWithALongName'

createConnection().then(async connection => {
    const D = await connection.manager.save(new DEntityWithALongName())

    let C = new CEntityWithALongName()
    C.d_entity_with_a_long_name_id = D.id
    C = await connection.manager.save(C) 

    let B = new BEntityWithALongName()
    B.c_entity_with_a_long_name_id = C.id
    B = await connection.manager.save(B) 

    let A = new AEntityWithALongName()
    A.b_entity_with_a_long_name_id = B.id
    A = await connection.manager.save(A) 

    const find = await connection.manager.find(AEntityWithALongName, { relations: ['b_entity_with_a_long_name'] })
    console.log(find)

    await connection.manager.remove(find[0])
}).catch(error => console.log(error))
