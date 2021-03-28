import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, Column } from 'typeorm'
import { AEntityWithALongName } from './AEntityWithALongName'
import { CEntityWithALongName } from './CEntityWithALongName'

@Entity({ name: 'b_entity_with_a_long_name' })
export class BEntityWithALongName {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => CEntityWithALongName, (entity) => entity.b_entity_with_a_long_names, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'c_entity_with_a_long_name_id' })
  c_entity_with_a_long_name!: CEntityWithALongName

  @Column()
  c_entity_with_a_long_name_id!: number

  @OneToMany((type) => AEntityWithALongName, (entity) => entity.b_entity_with_a_long_name)
  a_entity_with_a_long_names?: AEntityWithALongName[]
}
