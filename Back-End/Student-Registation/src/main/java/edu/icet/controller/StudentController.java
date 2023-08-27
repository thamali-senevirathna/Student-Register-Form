package edu.icet.controller;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.service.StudentServiceAgreement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
    @Autowired
    public StudentServiceAgreement serviceAgreement;

    @GetMapping
    public List<Student> getStudent(){
        return serviceAgreement.getStudent();
    }
    @GetMapping("/{fullName}")
    public Iterable<StudentEntity> getStudentByFullName(@PathVariable String fullName){
        return serviceAgreement.getStudentByFullName(fullName);
    }
    @PostMapping
    public void saveStudent(@RequestBody Student student){
        serviceAgreement.saveStudent(student);
    }
}
