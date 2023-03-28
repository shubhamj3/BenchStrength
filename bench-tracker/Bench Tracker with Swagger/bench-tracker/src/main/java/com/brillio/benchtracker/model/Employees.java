package com.brillio.benchtracker.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Bench_Management")
public class Employees {

//    @Id
//    @Column(name = "id")
//    private int id;

//    @Id
//    @Column(name = "employeeid")
//    private int employeeid;

    @Id
    @Column(name = "employeeid")
    private long employeeid;


    //    @Column(name = "title")
//    private String title;
    @Column(name = "employeename")
    private String employeename;


//    @Column(name = "description")
//    private String description;

    @Column(name = "skills")
    private String skills;

    @Column(name = "industryexperience")
    private int industryexperience;

    @Column(name = "department")
    private String department;


    @Column(name = "areaofinterest")
    private String areaofinterest;

    @Column(name = "email")
    private String email;

    @Column(name = "benchdate")
    private Date benchdate;

    @Column(name = "podname")
    private String podname;

//    @Column(name = "published")
//    private boolean published;

//    @Override
//    public String toString() {
//        return "Employee [employeeId=" + employeeid + ", employeeName=" + employeename + ", skills=" + skills + ", industryExperience=" + industryexperience + ", department=" + department + ", areaOfInterest=" + areaofinterest + ", email=" + email + ", benchDate=" + benchdate + ", podName=" + podname + "]";
//    }

    @Override
    public String toString() {
        return "Employees{" +
                "employeeid=" + employeeid +
                ", employeename='" + employeename + '\'' +
                ", skills='" + skills + '\'' +
                ", industryexperience=" + industryexperience +
                ", department='" + department + '\'' +
                ", areaofinterest='" + areaofinterest + '\'' +
                ", email='" + email + '\'' +
                ", benchdate=" + benchdate +
                ", podname='" + podname + '\'' +
                '}';
    }
}