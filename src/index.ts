import 'reflect-metadata'
import { createConnection } from 'typeorm'

import { EntA } from './entity/EntA'
import { EntB } from './entity/EntB'
import { EntC } from './entity/EntC'

createConnection().then(async connection => {
  const runner = connection.createQueryRunner()
  await runner.connect()
  await runner.startTransaction()

  try {
    let A =  await runner.manager.save(new EntA())

    let C1 = await runner.manager.save(new EntC())
    let B1 = new EntB()
    B1.entA = A
    B1.entC = C1
    B1 = await runner.manager.save(B1)

    let C2 = await runner.manager.save(new EntC())
    let B2 = new EntB()
    B2.entA = A
    B2.entC = C2
    B2 = await runner.manager.save(B2)

    let C3 = await runner.manager.save(new EntC())
    let B3 = new EntB()
    B3.entA = A
    B3.entC = C3
    B3 = await runner.manager.save(B3)

    //THIS WORKS
    let find = await runner.manager.findOne(EntA, { where: { id: A.id } })

    console.log(find)

    find.status = 'test'
    find = await runner.manager.save(find)

    console.log(find)

    //THIS FAILS
    let find2 = await runner.manager.findOne(EntA, { where: { id: A.id }, relations: ['entBs'] })

    console.log(find2)

    find2.status = 'test2'
    find2 = await runner.manager.save(find2)

    console.log(find)

    await runner.commitTransaction()
  } catch (err) {
    await runner.rollbackTransaction()
  } finally {
    await runner.release()
  }

  await connection.close()
}).catch(error => console.log(error))
