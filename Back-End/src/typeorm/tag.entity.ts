import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    name: string;

    @Column({
        nullable: false,
        default: false,
    })
    isDeleted: boolean;

    @Column({
        nullable: false,
        default: 0,
    })
    noteId: number;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    deletedAt: Date;
}