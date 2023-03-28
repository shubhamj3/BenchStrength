package com.brillio.benchtracker.service;
import java.io.IOException;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.brillio.benchtracker.repository.EmployeesRepository;
import com.brillio.benchtracker.model.Employees;
import com.brillio.benchtracker.helper.CSVHelper;
@Service
public class CSVService {
    @Autowired
    EmployeesRepository repository;

    public void save(MultipartFile file) {
        try {
            List<Employees> employees = CSVHelper.csvToTutorials(file.getInputStream());
            repository.saveAll(employees);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public List<Employees> getAllEmployees() {
        return repository.findAll();
    }
}