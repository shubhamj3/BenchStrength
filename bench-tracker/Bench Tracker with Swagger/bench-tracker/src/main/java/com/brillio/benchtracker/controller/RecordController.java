package com.brillio.benchtracker.controller;

import java.util.List;

import com.brillio.benchtracker.exception.ResourceNotFoundException;
import com.brillio.benchtracker.model.Employees;
import com.brillio.benchtracker.service.CSVService;
import com.brillio.benchtracker.service.RecordService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.brillio.benchtracker.service.CSVService;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001","http://localhost:3002"})
@RestController
@RequestMapping("/api")
public class RecordController {

    @Autowired
    RecordService recordService;

//    @PostMapping("/employees/adduser")
//    Employees createNewAddress(@RequestBody Employees newUser) {
//        return recordService.save(newUser);
//    }

    @PostMapping("/employees/add")
    public ResponseEntity<?> addEmployee(@RequestBody Employees newEmployee){
        return new ResponseEntity<>(recordService.AddEmployee(newEmployee), HttpStatus.CREATED);
    }

    @PutMapping("/employees/update/{employeeid}")
    public ResponseEntity<?> updateEmployee(@RequestBody Employees targetedEmployee, @PathVariable Long employeeid){
        return new ResponseEntity<>(recordService.UpdateEmployee(targetedEmployee,employeeid),HttpStatus.OK);
    }

//    @DeleteMapping("/employees/delete")
//    public ResponseEntity<String> deleteEmployee(@RequestParam(name = "employeeid") List<Integer> employeesId) throws ResourceNotFoundException {
//        return recordService.DeleteEmployee(employeesId);
//    }

    @DeleteMapping("/employees/delete")
    public ResponseEntity<String> deleteEmployee(@RequestBody List<Long> employeesId) throws ResourceNotFoundException {
        System.out.println("deleted reached");
        return recordService.DeleteEmployee(employeesId);
    }

////    @DeleteMapping("/employees/delete")
////    public ResponseEntity<String> deleteEmployee(@RequestBody List<Integer> employeesId) throws ResourceNotFoundException {
////        return recordService.DeleteEmployee(employeesId);
//    }
}
