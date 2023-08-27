package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.repo.RepoStudent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
@Slf4j

public class StudentServiceImpl implements StudentServiceAgreement{
    @Autowired
    public RepoStudent repoStudent;

    @Override
    public Iterable<StudentEntity> getStudentByFullName(String fullName) {
        return  repoStudent.findByFullName(fullName);
    }

    @Override
    public List<Student> getStudent() {
        Iterable<StudentEntity> studentList = repoStudent.findAll();
        Iterator<StudentEntity> iterator = studentList.iterator();
        List<Student> studentModels = new ArrayList<>();

        while (iterator.hasNext()){
            StudentEntity  entity = iterator.next();

            studentModels.add(Student.builder()
                    .fullName(entity.getFullName())
                    .address(entity.getAddress())
                    .age(entity.getAge())
                    .gender(entity.getGender())
                    .mobile(entity.getMobile())
                    .batchName(entity.getBatchName())
                    .nic(entity.getNic())
                    .registerDate(entity.getRegisterDate())
                    .build()
            );

        }
        return studentModels;
    }

    @Override
    public void saveStudent(Student student) {
        StudentEntity studentEntity=new StudentEntity();
        studentEntity.setFullName(student.getFullName());
        studentEntity.setAddress(student.getAddress());
        studentEntity.setAge(student.getAge());
        studentEntity.setGender(student.getGender());
        studentEntity.setMobile(student.getMobile());
        studentEntity.setBatchName(student.getBatchName());
        studentEntity.setNic(student.getNic());
        studentEntity.setRegisterDate(student.getRegisterDate());
        repoStudent.save(studentEntity);
    }
}
