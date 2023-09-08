package edu.icet.repo;

import edu.icet.dao.StudentEntity;
import org.springframework.data.repository.CrudRepository;

public interface RepoStudent extends CrudRepository<StudentEntity,Long> {
    Iterable<StudentEntity>findByFullName(String fullName);

    void deleteById(Long id);
    StudentEntity findStudentByEmailAndPassword (String email,String password);
}
