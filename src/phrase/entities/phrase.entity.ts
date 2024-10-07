import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('phrases') 
export class Phrase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phrase: string;

    @Column()
    status: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column('json')
    translations: Record<string, string>;
}
