'use client';

import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FaPlus } from 'react-icons/fa6';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

import ClassImage1 from '@/public/class-img1.png';
import { useGetStudentsQuery } from '@/redux/features/student/studentApi';
import { useGetAcademicYearsQuery } from '@/redux/features/academicYear/academicYearApi';
import { useGetClassesQuery } from '@/redux/features/class/classApi';

export default function Home() {
  const [yearId, setYearId] = useState(null);
  const [classId, setClassId] = useState(null);

  const {
    data: yearsData,
    isLoading: isYearLoading,
    isError: isYearError,
    error: yearError,
  } = useGetAcademicYearsQuery();

  const {
    data: classesData,
    isLoading: isClassLoading,
    isError: isClassError,
    error: classError,
  } = useGetClassesQuery();

  const {
    data: studentsData,
    isLoading,
    isError,
    error,
  } = useGetStudentsQuery({ yearId, classId });

  if (isLoading || isYearLoading || isClassLoading) {
    return <div>Loading...</div>;
  }

  if (isError || isClassError || isYearError) {
    return (
      <div>
        {' '}
        {error && <div>Error: {error.message}</div>}{' '}
        {classError && <div>Error: {classError.message}</div>}{' '}
        {yearError && <div>Error: {yearError.message}</div>}{' '}
      </div>
    );
  }

  console.log(yearsData, classesData, studentsData);

  const { academicYears } = yearsData;
  const { classes } = classesData;
  const { students } = studentsData;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div>
            <Select
              name="yearId"
              onValueChange={(value) => {
                console.log(value);
                setYearId(value);
              }}
            >
              <SelectTrigger className="w-[150px] h-[38px] bg-[#E9EDF1] border-none font-bold">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {academicYears.map((year) => {
                  return (
                    <SelectItem value={year.id} key={year.id}>
                      {year.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              name="classId"
              onValueChange={(value) => {
                console.log(value);
                setClassId(value);
              }}
            >
              <SelectTrigger className="w-[117px] h-[38px] bg-[#E9EDF1] border-none font-bold">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((class_) => {
                  return (
                    <SelectItem value={class_.id} key={class_.id}>
                      {class_.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Button
            className="w-[200px] h-[38px] text-[16px] bg-[#E9EDF1] border-none flex px-4 font-bold text-[#3F526E]"
            variant="outline"
          >
            <FaPlus size={25} /> Add New Student
          </Button>
        </div>
      </div>

      <div className="my-6 overflow-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Cohort</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => {
              return (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.academicYear.name}</TableCell>
                  <TableCell className="flex gap-4">
                    {student.courses.map((course) => {
                      return (
                        <div key={course.id} className="flex gap-2">
                          <Image
                            src={course?.image || ClassImage1}
                            width={20}
                            height={20}
                            alt={course.name}
                            className="rounded-sm"
                          />
                          <div>{course.name}</div>
                        </div>
                      );
                    })}
                  </TableCell>
                  <TableCell>{formatDate(student?.createdAt)}</TableCell>
                  <TableCell>
                    {formatDateTime(student?.lastLoginDate)}
                  </TableCell>
                  <TableCell className="flex justify-center">
                    <div className="w-[14px] h-[14px] bg-[#4AEA40] rounded-full"></div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {/* <StudentTable /> */}
      </div>
    </div>
  );
}

function formatDate(value) {
  if (!value) {
    return '-';
  }
  const date = new Date(value);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function formatDateTime(value) {
  if (!value) {
    return '-';
  }

  const date = new Date(value);

  const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  const formattedDate = date.toLocaleDateString('en-US', dateOptions);
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);
  return `${formattedDate}, ${formattedTime}`;
}
