import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { courses } from './data/courses';

@Injectable()
export class CourseService {
  findAll(genEdType?: string) {
    if (genEdType) {
      if (!['HU', 'SC', 'SO', 'IN', 'NO'].includes(genEdType))
        throw new BadRequestException('genEdType is invalid');
      return {
        studyProgram: 'S',
        semester: '1',
        academicYear: '2565',
        courses: courses.filter((course) => course.genEdType === genEdType),
      };
    }

    return {
      studyProgram: 'S',
      semester: '1',
      academicYear: '2565',
      courses,
    };
  }

  findOne(courseNo: string) {
    const course = courses.find((course) => course.courseNo === courseNo);
    if (!course) throw new NotFoundException(`Course ${courseNo} not found`);
    return {
      studyProgram: 'S',
      semester: '1',
      academicYear: '2565',
      course,
    };
  }
}
