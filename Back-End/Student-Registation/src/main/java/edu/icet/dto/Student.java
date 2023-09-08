package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Student {
    private Long id;
    private String fullName;
    private String email;
    private String password;
    private String address;
    private int age;
    private String gender;
    private String mobile;
    private String batchName;
    private String nic;
    private String registerDate;
    private String imgName;
    private String imgPath;
}
