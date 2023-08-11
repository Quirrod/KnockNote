import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from './tag.entity';

@Entity()
export class Note {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    title: string;

    @Column({
        nullable: false,
        default: '',
    })
    description: string;

    @Column({
        nullable: false,
        default: false,
    })
    isArchived: boolean;

    @Column({
        nullable: false,
        default: false,
    })
    isDeleted: boolean;

    @OneToMany(() => Tag, tag => tag.note)
    tags: Tag[];

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    deletedAt: Date;
}