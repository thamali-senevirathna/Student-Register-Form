package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.repo.NativeStudentRepository;
import edu.icet.repo.RepoStudent;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j

public class StudentServiceImpl implements StudentServiceAgreement{
    @Autowired
    public RepoStudent repoStudent;

    @Autowired
    public NativeStudentRepository nativeStudentRepository;
    @Autowired
    ModelMapper modelMapper;
    final String folderPath="C:/Users/DELL/OneDrive/Desktop/Student_Register_Form/Front-End/studentPhoto/";

    @Override
    public Iterable<StudentEntity> getStudentByFullName(String fullName) {
        return  repoStudent.findByFullName(fullName);
    }

    @Override
    public void deleteStudentById(Long id) {
        repoStudent.deleteById(id);
    }

    @Override
    public Student searchStudentById(Long id) {
        Student student = new Student();
        Optional<StudentEntity> byId = repoStudent.findById(id);
        Iterator<StudentEntity> iterator = byId.stream().iterator();
        while (iterator.hasNext()){
            StudentEntity entity= iterator.next();
            student.setId(entity.getId());
            student.setFullName(entity.getFullName());
            student.setEmail(entity.getEmail());
            student.setAddress(entity.getAddress());
            student.setAge(entity.getAge());
            student.setGender(entity.getGender());
            student.setMobile(entity.getMobile());
            student.setBatchName(entity.getBatchName());
            student.setNic(entity.getNic());
            student.setRegisterDate(entity.getRegisterDate());
            student.setImgName(entity.getImgName());
            student.setImgPath(entity.getImgPath());
        }
        return student;
    }

    @Override
    public void saveStudentWithOutImg(Student student) {
        StudentEntity studentEntity=modelMapper.map(student,StudentEntity.class);
        repoStudent.save(studentEntity);
    }

    @Override
    public boolean findStudentByEmailAndPassword(String email, String password) {
        StudentEntity studentByEmailAndPassword = repoStudent.findStudentByEmailAndPassword(email, password);
        return studentByEmailAndPassword !=null ? true : false;
    }

    public Integer retrieveStudentCount() {
        return nativeStudentRepository.retrieveStudentCount();
    }


    @Override
    public List<StudentEntity> getStudent() {
        Iterable<StudentEntity> studentList = repoStudent.findAll();
        Iterator<StudentEntity> iterator = studentList.iterator();
        List<StudentEntity> studentModels = new ArrayList<>();

        while (iterator.hasNext()){
            StudentEntity  entity = iterator.next();

            studentModels.add(StudentEntity.builder().id(entity.getId())
                    .fullName(entity.getFullName())
                    .email(entity.getEmail())
                    .password(entity.getPassword())
                    .address(entity.getAddress())
                    .age(entity.getAge())
                    .gender(entity.getGender())
                    .mobile(entity.getMobile())
                    .batchName(entity.getBatchName())
                    .nic(entity.getNic())
                    .registerDate(entity.getRegisterDate())
                    .imgName(entity.getImgName())
                    .imgPath(entity.getImgPath())
                    .build()
            );

        }
        return studentModels;
    }

    @Override
    public void saveStudent(Student student, MultipartFile file) throws IOException {
        String filePath=folderPath+file.getOriginalFilename();
//        StudentEntity studentEntity=new StudentEntity();
//        studentEntity.setFullName(student.getFullName());
//        studentEntity.setAddress(student.getAddress());
//        studentEntity.setAge(student.getAge());
//        studentEntity.setGender(student.getGender());
//        studentEntity.setMobile(student.getMobile());
//        studentEntity.setBatchName(student.getBatchName());
//        studentEntity.setNic(student.getNic());
//        studentEntity.setRegisterDate(student.getRegisterDate());
//        studentEntity.setImgName(file.getOriginalFilename());
//        studentEntity.setImgPath(filePath);
StudentEntity studentEntity=modelMapper.map(student,StudentEntity.class);
studentEntity.setImgName(file.getOriginalFilename());
studentEntity.setImgPath(filePath);
        repoStudent.save(studentEntity);
        file.transferTo(new File(filePath));
    }

}
