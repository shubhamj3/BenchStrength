package com.brillio.benchtracker.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.brillio.benchtracker.model.Employees;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeesRepository extends JpaRepository<Employees,Long>{
}
