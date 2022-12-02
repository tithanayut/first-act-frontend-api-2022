import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { GenEdType } from 'src/types';
import { CourseService } from './course.service';
import { AllCoursesDTO } from './dto/all-course.dto';
import { ErrorDTO } from './dto/error.dto';
import { SingleCourseDTO } from './dto/single-course.dto';

@ApiTags('courses')
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  @ApiOkResponse({ type: AllCoursesDTO, description: 'OK' })
  @ApiBadRequestResponse({ type: ErrorDTO, description: 'Bad Request' })
  @ApiInternalServerErrorResponse({
    type: ErrorDTO,
    description: 'Internal Server Error',
  })
  @ApiQuery({ name: 'genEdType', enum: GenEdType, required: false })
  @ApiQuery({ name: 'minSeats', required: false })
  @ApiQuery({ name: 'maxSeats', required: false })
  findAll(
    @Query('genEdType') genEdType?: GenEdType,
    @Query('minSeats') minSeats?: number,
    @Query('maxSeats') maxSeats?: number,
  ) {
    return this.courseService.findAll(genEdType, minSeats, maxSeats);
  }

  @Get(':courseNo')
  @ApiOkResponse({ type: SingleCourseDTO, description: 'OK' })
  @ApiNotFoundResponse({ type: ErrorDTO, description: 'Course not found' })
  @ApiInternalServerErrorResponse({
    type: ErrorDTO,
    description: 'Internal Server Error',
  })
  findOne(@Param('courseNo') courseNo: string): SingleCourseDTO {
    return this.courseService.findOne(courseNo);
  }
}
