import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { courses } from './data/courses';

@Injectable()
export class CourseService {
  findAll(genEdType?: string, minSeats?: number, maxSeats?: number) {
    let filteredCourses = courses;

    if (genEdType) {
      if (!['HU', 'SC', 'SO', 'IN', 'NO'].includes(genEdType))
        throw new BadRequestException('genEdType is invalid');
      filteredCourses = filteredCourses.filter(
        (course) => course.genEdType === genEdType,
      );
    }

    if (minSeats) {
      if (minSeats < 0) throw new BadRequestException('minSeats is invalid');
      filteredCourses = filteredCourses.filter(
        (course) => course.totalSeats >= minSeats,
      );
    }
    if (maxSeats) {
      if (maxSeats < 0) throw new BadRequestException('maxSeats is invalid');
      filteredCourses = filteredCourses.filter(
        (course) => course.totalSeats <= maxSeats,
      );
    }

    return {
      studyProgram: 'S',
      semester: '1',
      academicYear: '2565',
      courses: filteredCourses,
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
