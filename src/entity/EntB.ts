import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'

import { EntA } from './EntA'
import { EntC } from './EntC'

@Entity()
export class EntB {
  @ManyToOne((type) => EntA, (entity) => entity.entBs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'entAId' })
  entA?: EntA

  @Column({ primary: true, type: 'bigint' })
  entAId!: string

  @ManyToOne((type) => EntC, (entity) => entity.entBs, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'entCId' })
  entC!: EntC

  @Column({ primary: true, type: 'bigint' })
  entCId!: string

  @Column({ type: 'varchar', length: 32, default: 'default' })
  status!: string
}
