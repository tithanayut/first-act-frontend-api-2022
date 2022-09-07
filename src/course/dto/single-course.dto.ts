import { ApiProperty } from '@nestjs/swagger';
import { Course } from '../entity/course.entity';

export class SingleCourseDTO {
  @ApiProperty({ example: 'S' })
  studyProgram: string;

  @ApiProperty({ example: '1' })
  semester: string;

  @ApiProperty({ example: '2565' })
  academicYear: string;

  @ApiProperty({ type: Course })
  course: Course;
}
