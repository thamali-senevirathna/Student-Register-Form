package edu.icet.controller;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.service.StudentServiceAgreement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
    @Autowired
    public StudentServiceAgreement serviceAgreement;

    @GetMapping
    public List<StudentEntity> getStudent() {
        return serviceAgreement.getStudent();
    }

    @GetMapping("/{fullName}")
    public Iterable<StudentEntity> getStudentByFullName(@PathVariable String fullName) {
        return serviceAgreement.getStudentByFullName(fullName);
    }

    @PostMapping("/with")
    public void setStudents(@ModelAttribute Student student, @RequestPart("file") MultipartFile file) throws IOException {
        serviceAgreement.saveStudent(student,file);
    }

    @PostMapping("/std")
    public void saveStudentWithoutImg(@RequestBody Student student) {
        serviceAgreement.saveStudentWithOutImg(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudentById(@PathVariable Long id) {
        serviceAgreement.deleteStudentById(id);
    }

    @GetMapping("/findById/{id}")
    public Student searchStudentById(@PathVariable Long id) {
        return serviceAgreement.searchStudentById(id);
    }

    @GetMapping("/{email}/{password}")
    public boolean findStudentByEmailAndPassword(@PathVariable String email, @PathVariable String password){
        return serviceAgreement.findStudentByEmailAndPassword(email, password);
    }

}

