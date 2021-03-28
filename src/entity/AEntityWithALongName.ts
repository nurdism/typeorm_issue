import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'

import { BEntityWithALongName } from './BEntityWithALongName'

@Entity({ name: 'a_entity_with_a_long_name' })
export class AEntityWithALongName {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => BEntityWithALongName, (entity) => entity.a_entity_with_a_long_names, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'b_entity_with_a_long_name_id' })
  b_entity_with_a_long_name!: BEntityWithALongName

  @Column()
  b_entity_with_a_long_name_id!: number
}
