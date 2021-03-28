import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { CEntityWithALongName } from './CEntityWithALongName'

@Entity({ name: 'd_entity_with_a_long_name' })
export class DEntityWithALongName {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany((type) => CEntityWithALongName, (entity) => entity.d_entity_with_a_long_name)
  c_entity_with_a_long_names?: CEntityWithALongName[]
}