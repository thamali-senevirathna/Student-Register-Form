package edu.icet.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Student No")
    private Long id;
    @Column(name="Full Name")
    private String fullName;
    @Column(name="Address")
    private String address;
    @Column(name="Age")
    private int age;
    @Column(name="Gender")
    private String gender;
    @Column(name="Mobile Number")
    private String mobile;
    @Column(name="Batch Name/No")
    private String batchName;
    @Column(name="NIC")
    private String nic;
    @Column(name="Register Date")
    private String registerDate;
}
