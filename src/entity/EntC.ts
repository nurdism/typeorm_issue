import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'

import { EntB } from './EntB'

@Entity()
export class EntC {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany((type) => EntB, (entity) => entity.entA)
  entBs?: EntB[]
}
