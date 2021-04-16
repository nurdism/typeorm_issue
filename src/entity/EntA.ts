import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'

import { EntB } from './EntB'

@Entity()
export class EntA {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 32, default: 'default' })
  status!: string

  @OneToMany((type) => EntB, (entity) => entity.entA)
  entBs?: EntB[]
}
