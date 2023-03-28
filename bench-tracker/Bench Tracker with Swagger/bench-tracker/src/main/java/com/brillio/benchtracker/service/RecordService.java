package com.brillio.benchtracker.service;

import com.brillio.benchtracker.exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import com.brillio.benchtracker.repository.EmployeesRepository;
import com.brillio.benchtracker.model.Employees;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Service
public class RecordService {
    @Autowired
    EmployeesRepository repository;

    public Employees AddEmployee(Employees newEmployee) {
        return repository.save(newEmployee);
    }

    public Employees UpdateEmployee(Employees targetedEmployee, long employeeid){
        return repository.findById(employeeid)
                .map(employee -> {
                    employee.setEmployeename(targetedEmployee.getEmployeename());
                    employee.setSkills(targetedEmployee.getSkills());
                    employee.setIndustryexperience(targetedEmployee.getIndustryexperience());
                    employee.setDepartment(targetedEmployee.getDepartment());
                    employee.setAreaofinterest(targetedEmployee.getAreaofinterest());
                    employee.setEmail(targetedEmployee.getEmail());
                    employee.setBenchdate(targetedEmployee.getBenchdate());
                    employee.setPodname(targetedEmployee.getPodname());
                    return repository.save(employee);
                })
                .orElseGet(() -> {
                    targetedEmployee.setEmployeeid(employeeid);
                    return repository.save(targetedEmployee);
                });
    }

    public ResponseEntity<String> DeleteEmployee(List <Long> employeesId) throws ResourceNotFoundException {

        for (Long empId : employeesId) {

            Employees e = repository.findById(empId).orElseThrow(()->new ResourceNotFoundException());
            repository.delete(e);
        }
//       Employees e = repository.findById(employeeid).orElseThrow(()->new ResourceNotFoundException());
//       repository.delete(e);
//       return e;
//        Map<String, Boolean> response = new HashMap<>();
//        response.put("deleted", Boolean.TRUE);
//         return response;
//        return new ResponseEntity<>(recordService.DeleteEmployee(employeesId),HttpStatus.OK);
        return new ResponseEntity<>("data deleted successfully" , HttpStatus.OK);
    }

}
