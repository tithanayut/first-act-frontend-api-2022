import { ApiProperty } from '@nestjs/swagger';
import { GenEdType } from 'src/types';

export class Course {
  @ApiProperty({ example: '2110101' })
  courseNo: string;

  @ApiProperty({ example: 'COMP PROG' })
  abbrName: string;

  @ApiProperty({ example: 'การทำโปรแกรมคอมพิวเตอร์' })
  courseNameTh: string;

  @ApiProperty({ example: 'COMPUTER PROGRAMMING' })
  courseNameEn: string;

  @ApiProperty({ example: 'ภาควิชาวิศวกรรมคอมพิวเตอร์' })
  department: string;

  @ApiProperty({ example: 3 })
  credit: number;

  @ApiProperty({ example: 'LECT 3.0 CR(LECT 3.0 HR)' })
  creditHours: string;

  @ApiProperty({ enum: GenEdType, example: GenEdType.NO })
  genEdType: GenEdType;

  @ApiProperty({ example: 40 })
  totalSeats: number;

  @ApiProperty({ example: '2022-09-07T05:55:49.427Z' })
  updatedAt: string;
}
