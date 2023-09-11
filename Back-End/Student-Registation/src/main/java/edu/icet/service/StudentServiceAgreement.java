package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StudentServiceAgreement {


    List<StudentEntity> getStudent();

    void saveStudent(Student student, MultipartFile file) throws IOException;

    Iterable<StudentEntity> getStudentByFullName(String fullName);

    void deleteStudentById(Long id);

    Student searchStudentById(Long id);

    void saveStudentWithOutImg(Student student);

   boolean findStudentByEmailAndPassword(String email,String password);
    Integer retrieveStudentCount();
}
