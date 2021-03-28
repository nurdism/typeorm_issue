import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { BEntityWithALongName } from './BEntityWithALongName'
import { DEntityWithALongName } from './DEntityWithALongName'

@Entity({ name: 'c_entity_with_a_long_name' })
export class CEntityWithALongName {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => DEntityWithALongName, (entity) => entity.c_entity_with_a_long_names, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'd_entity_with_a_long_name_id' })
  d_entity_with_a_long_name!: DEntityWithALongName

  @Column()
  d_entity_with_a_long_name_id!: number

  @OneToMany((type) => BEntityWithALongName, (entity) => entity.c_entity_with_a_long_name)
  b_entity_with_a_long_names?: BEntityWithALongName[]
}