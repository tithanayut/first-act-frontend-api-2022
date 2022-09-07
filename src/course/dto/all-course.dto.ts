import { ApiProperty } from '@nestjs/swagger';
import { Course } from 'src/course/entity/course.entity';

export class AllCoursesDTO {
  @ApiProperty({ example: 'S' })
  studyProgram: string;

  @ApiProperty({ example: '1' })
  semester: string;

  @ApiProperty({ example: '2565' })
  academicYear: string;

  @ApiProperty({ type: [Course] })
  courses: Course[];
}
