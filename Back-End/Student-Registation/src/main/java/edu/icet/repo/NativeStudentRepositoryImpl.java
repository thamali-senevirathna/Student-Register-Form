package edu.icet.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class NativeStudentRepositoryImpl implements NativeStudentRepository {
    @Autowired
    JdbcTemplate template;


    public Integer retrieveStudentCount() {
        return template.queryForObject(
                "SELECT COUNT(*) FROM student_entity;",
                Integer.class);
    }


}
