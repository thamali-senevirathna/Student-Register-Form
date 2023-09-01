package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;

import java.util.List;

public interface StudentServiceAgreement {

    List<StudentEntity> getStudent();
     void saveStudent(Student student);

    Iterable<StudentEntity> getStudentByFullName(String fullName);

    void deleteStudentById(Long id);
}
